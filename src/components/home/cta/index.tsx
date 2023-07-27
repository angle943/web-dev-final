"use client";
import { Container } from "@/components/container";
import styles from "./cta.module.scss";
import clsx from "clsx";
import { useState } from "react";
import { CtaCard } from "@/components/home/cta/cta-card";
import { ButtonMain } from "@/components/buttons/button-main";

export function Cta() {
  const [individualPlanIsSelected, setIndividualPlanIsSelected] =
    useState<boolean>(true);

  const togglePlan = () => {
    setIndividualPlanIsSelected(!individualPlanIsSelected);
  };

  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles["title-section"]}>
          <h5 className={styles.title}>
            Master your craft.
            <br /> Become a true professional.
          </h5>
          <p className={clsx(styles.description, "text-lg")}>
            Get access to 50+ quality courses and level up your skills as a
            developer, whether you are a beginner, intermediate, or even a
            seasoned veteran. Join the community today.
          </p>
          <div className={styles["toggle-container"]} onClick={togglePlan}>
            <div
              className={clsx(styles["toggle-white"], {
                [styles["toggle-white--team"]]: !individualPlanIsSelected,
              })}
            />
            <span
              className={clsx("text-lg", styles["toggle-option"], {
                [styles["toggle-option--selected"]]: individualPlanIsSelected,
              })}
            >
              Individual
            </span>
            <span
              className={clsx("text-lg", styles["toggle-option"], {
                [styles["toggle-option--selected"]]: !individualPlanIsSelected,
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
                : "Purchase at a discount for teams of 5+ users."
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
