"use client";
import { Container } from "@/components/container";
import styles from "./cta.module.scss";
import clsx from "clsx";
import { useState } from "react";
import { CtaCard } from "@/components/home/cta/cta-card";
import { useColorContext } from "@/context/color-context";

export function Cta() {
  const { isLightMode } = useColorContext();
  const [individualPlanIsSelected, setIndividualPlanIsSelected] =
    useState<boolean>(true);

  const togglePlan = () => {
    setIndividualPlanIsSelected(!individualPlanIsSelected);
  };

  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles["title-section"]}>
          <h4
            className={clsx(styles.title, {
              [styles["title--light-mode"]]: isLightMode,
            })}
          >
            Master your craft.
            <br /> Become a true professional.
          </h4>
          <p
            className={clsx(styles.description, "text-lg", {
              [styles["description--light-mode"]]: isLightMode,
            })}
          >
            Get access to 50+ quality courses and level up your skills as a
            developer, whether you are a beginner, intermediate, or even a
            seasoned veteran. Join the community today.
          </p>
          <div
            className={clsx(styles["toggle-container"], {
              [styles["toggle-container--light-mode"]]: isLightMode,
            })}
            onClick={togglePlan}
          >
            <div
              className={clsx(styles["toggle-white"], {
                [styles["toggle-white--team"]]: !individualPlanIsSelected,
                [styles["toggle-white--light-mode"]]: isLightMode,
              })}
            />
            <span
              className={clsx("text-lg", styles["toggle-option"], {
                [styles["toggle-option--light-mode"]]: isLightMode,
                [styles["toggle-option--selected"]]:
                  !isLightMode && individualPlanIsSelected,
                [styles["toggle-option--selected--light-mode"]]:
                  isLightMode && individualPlanIsSelected,
              })}
            >
              Individual
            </span>
            <span
              className={clsx("text-lg", styles["toggle-option"], {
                [styles["toggle-option--light-mode"]]: isLightMode,
                [styles["toggle-option--selected"]]:
                  !isLightMode && !individualPlanIsSelected,
                [styles["toggle-option--selected--light-mode"]]:
                  isLightMode && !individualPlanIsSelected,
              })}
            >
              Team
            </span>
          </div>
        </div>
        <div className={styles["card-section"]}>
          <CtaCard
            title="Monthly"
            description={
              individualPlanIsSelected
                ? "Instant access to all of our courses and community."
                : "Purchase at a discount for teams of 5+ users. Great for a small team."
            }
            price={individualPlanIsSelected ? 35 : 30}
            priceRate={
              individualPlanIsSelected ? "per month" : "per seat, per month"
            }
          />
          <CtaCard
            title="Yearly"
            description={
              individualPlanIsSelected
                ? "Billed annually. Access all of our courses and community."
                : "Billed annually. Purchase at a discount for teams of 5+ users."
            }
            price={individualPlanIsSelected ? 350 : 300}
            priceRate={
              individualPlanIsSelected
                ? "billed annually"
                : "per seat, billed annually"
            }
          />
        </div>
      </Container>
    </section>
  );
}
