"use client";
import * as z from "zod";
import { useEffect, useMemo, useState } from "react";
import { JoinState } from "@/constants/join-state";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/container";
import styles from "./join-form.module.scss";
import { JoinProgress } from "@/components/join/join-progress";
import { JoinPlan } from "@/components/join/join-plan";
import { JoinAccount } from "@/components/join/join-account";
import { JoinSummary } from "@/components/join/join-summary";
import { JoinCheckout } from "@/components/join/join-checkout";
import { createPortal } from "react-dom";
import { Spinner } from "@/components/spinner";
import { ButtonMain } from "@/components/buttons/button-main";
import { useColorContext } from "@/context/color-context";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";

const schema = z
  .object({
    isYearlyPlan: z.boolean(),
    isTeamPlan: z.boolean(),
    seats: z.number().int("Must be an integer").min(5, "Must be at least 5"),
    email: z
      .string()
      .min(1, { message: "Required" })
      .email("Not a valid email"),
    password: z
      .string()
      .min(1, { message: "Required" })
      .min(6, { message: "At least 6 characters" })
      .regex(/[a-z]/, { message: "Requires a lowercase character" })
      .regex(/[A-Z]/, { message: "Requires an uppercase character" })
      .regex(/[0-9]/, { message: "Requires a number" }),
    confirmPassword: z.string().min(1, { message: "Required" }),
    cardName: z.string().min(1, { message: "Required" }),
    cardNumber: z
      .string()
      .min(1, { message: "Required" })
      .min(13, { message: "Enter a valid credit card" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type FormSchemaType = z.infer<typeof schema>;

export function JoinForm() {
  const searchParams = useSearchParams();
  const { isLightMode } = useColorContext();
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);
  const [overlayIsOpen, setOverlayIsOpen] = useState<boolean>(false);
  const [joinState, setJoinState] = useState<JoinState>(JoinState.plan);

  const defaultIsYearlyPlan = searchParams.get("plan") === "yearly";
  const defaultIsTeamPlan = searchParams.get("seats") === "team";

  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      isYearlyPlan: defaultIsYearlyPlan,
      isTeamPlan: defaultIsTeamPlan,
      seats: 5,
      email: "",
      password: "",
      confirmPassword: "",
      cardName: "",
    },
    mode: "all",
  });
  const { handleSubmit, watch, formState } = methods;
  const { errors } = formState;
  const isTeamPlan = watch("isTeamPlan");
  const isYearlyPlan = watch("isYearlyPlan");
  const seats = watch("seats");

  const seatsToUse = !!errors.seats ? 5 : seats;

  useEffect(() => {
    if (overlayIsOpen) {
      setTimeout(() => {
        setDialogIsOpen(true);
        setOverlayIsOpen(false);
      }, 2500);
    }
  }, [overlayIsOpen]);

  const onSubmit = () => {
    setOverlayIsOpen(true);
  };

  const goToPreviousState = () => {
    if (joinState === JoinState.checkout) {
      window?.scrollTo({ top: 0 });
      setJoinState(JoinState.account);
    } else if (joinState === JoinState.account) {
      window?.scrollTo({ top: 0 });
      setJoinState(JoinState.plan);
    }
  };

  const goToNextState = () => {
    if (joinState === JoinState.plan) {
      window?.scrollTo({ top: 0 });
      setJoinState(JoinState.account);
    } else if (joinState === JoinState.account) {
      window?.scrollTo({ top: 0 });
      setJoinState(JoinState.checkout);
    }
  };

  const itemCost = useMemo(() => {
    let total: number;
    if (isTeamPlan) {
      if (isYearlyPlan) {
        total = seatsToUse * 300;
      } else {
        total = seatsToUse * 30;
      }
    } else {
      if (isYearlyPlan) {
        total = 350;
      } else {
        total = 35;
      }
    }
    return `$${total.toLocaleString()}.00`;
  }, [isTeamPlan, isYearlyPlan, seatsToUse]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container className={styles.container}>
          <section className={styles["section-form"]}>
            <JoinProgress
              className={styles["join-progress"]}
              joinState={joinState}
              setJoinState={setJoinState}
            />
            {joinState === JoinState.plan && (
              <JoinPlan handleNextState={goToNextState} />
            )}
            {joinState === JoinState.account && (
              <JoinAccount
                handlePrevState={goToPreviousState}
                handleNextState={goToNextState}
              />
            )}
            {joinState === JoinState.checkout && (
              <JoinCheckout
                handlePrevState={goToPreviousState}
                cost={itemCost}
              />
            )}
          </section>
          <section className={styles["section-summary"]}>
            <JoinSummary cost={itemCost} seats={seatsToUse} />
          </section>
        </Container>
      </form>
      {overlayIsOpen &&
        createPortal(
          <div
            className={clsx(styles.overlay, {
              [styles["overlay--light-mode"]]: isLightMode,
            })}
          >
            <Spinner />
          </div>,
          document.body,
        )}
      {dialogIsOpen &&
        createPortal(
          <div
            className={clsx(styles.overlay, {
              [styles["overlay--light-mode"]]: isLightMode,
            })}
          >
            <dialog
              open
              className={clsx(styles.dialog, {
                [styles["dialog--light-mode"]]: isLightMode,
              })}
            >
              <h4 className={styles["dialog-title"]}>
                Oops, this is a school project...
              </h4>
              <p className={styles["dialog-description"]}>
                There is actually no form being submitted for this. And I am not
                storing anything you have inputted, so don&apos;t worry about
                that! Just worry about giving me a good grade for all the work I
                put into this project!
              </p>
              <p className={styles["dialog-description"]}>Thank you 😊</p>
              <div className={styles["dialog-button-container"]}>
                <ButtonMain
                  variant="primary"
                  onClick={() => setDialogIsOpen(false)}
                >
                  Close
                </ButtonMain>
              </div>
            </dialog>
          </div>,
          document.body,
        )}
    </FormProvider>
  );
}
