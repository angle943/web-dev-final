"use client";

import { useColorContext } from "@/context/color-context";
import { useEffect } from "react";
import styles from "./report.module.scss";
import { ReportHeader } from "@/components/report/report-header";
import { Container } from "@/components/container";
import { ReportPrompt } from "@/components/report/report-prompt";

export default function Report() {
  const { isLightMode, toggleLightMode } = useColorContext();
  useEffect(() => {
    if (isLightMode) {
      toggleLightMode();
    }
  }, [isLightMode, toggleLightMode]);

  return (
    <main>
      <ReportHeader />
      <div className={styles.body}>
        <Container className={styles.container}>
          <h3>Introduction</h3>
          <ReportPrompt>
            What is the essential story being told by your site and type of
            structure did you choose to implement?
          </ReportPrompt>
          <p>
            I have had a{" "}
            <a href="https://www.youtube.com/@AngleCoding" target="_blank">
              youtube channel
            </a>{" "}
            where I taught programming concepts, and it grew to more than 10,000
            subscribers. I have been thinking about creating my own teaching
            website where I can upload my future courses and offer a paid
            subscription model, and this assignment had finally motivated me
            enough to create a draft of what the website might look like.
          </p>
          <p>
            The main purpose of this website is to convince the readers to
            become a student by signing up to the subscription service. I aimed
            to achieve this by architecting the design in a way where it shows
            professionalism, which can lead to trust. I tried achieving this by
            playing around with large spacing around my HTML elements, so that
            each important sections stand out and is eye-catching.
          </p>
          <p>
            The structure of my site is one of a flat structure, where pages
            cross links to one another. The <strong>home page</strong> gives an
            overall summary (mainly in visual form, to keep the attention of
            modern viewers) of what I offer, as well as a link to all my course
            offerings as well as to the &ldquo;sign up&rdquo; page (through
            &ldquo;Call to Action&rdquo;, aka CTA, cards). It also aims to
            convince the user to become a member, by having eye-catching cards
            that gives a summary of what we offer, as well as having
            testimonials of members.
          </p>
          <p>
            The <strong>course page</strong> starts with a CTA, as well as
            showing a list of courses that we offer. I also decided to add
            several other &ldquo;resources and services&rdquo; I plan to offer
            if this website becomes a reality. The <strong>blog page</strong> is
            a typical blog. The <strong>play page</strong> was a fun exercise in
            creating a Javascript typing game, which is still relevant to the
            audience this website is intended for. And finally, the{" "}
            <strong>Join page</strong> is a form for the user to sign up, which
            is divided up into three distinct sections that the user is able to
            navigate via buttons.
          </p>
          <hr />

          <h3>Inspiration</h3>
          <ReportPrompt>
            State <strong>3</strong> things that have inspired you when creating
            your website (e.g. guest speakers, websites, artists, blogs).
          </ReportPrompt>
          <p>
            Initially I spent a lot of time researching on other website that
            offers a paid subscription model on teaching programming, ones that
            are not a giant platform (like Coursera or Udemy). The three
            websites that inspired me the most are the following:
          </p>
          <p>
            <strong>
              1.{" "}
              <a href="https://zerotomastery.io/" target="_blank">
                Zero To Mastery
              </a>
              .
            </strong>{" "}
            My website is heavily inspired by their landing page, such as having
            an eye-catching, animated hero section, having a section that
            answers the &ldquo;why&rdquo; of joining, testimonials, and CTA
            cards.
          </p>
          <p>
            <strong>
              2.{" "}
              <a href="https://frontendmasters.com/" target="_blank">
                Frontend Masters
              </a>
              .
            </strong>{" "}
            I really enjoyed the video they had playing on the home page. I
            attempted to create something similar with a stock video footage I
            found on the web. I took inspiration on their different options of
            signing up (individual vs team, and monthly vs yearly). I also
            thought it effective to continue showing testimonials on the form
            page, which can continue convincing the potential customer into
            signing up.
          </p>
          <p>
            <strong>
              3.{" "}
              <a href="https://monkeytype.com/" target="_blank">
                monkeytype
              </a>
              .
            </strong>{" "}
            This was my main inspiration for creating the typing game. I wanted
            a page where I can showcase my JavaScript skills, while at the same
            time being relevant to the intended audience. Therefore I decided to
            make a typing game where you write code instead of random words.
          </p>
          <hr />

          <h3>Accessibility</h3>
          <ReportPrompt>
            State <strong>3</strong> ways in which your site is accessible.
          </ReportPrompt>
          <p>
            1. Every page has been thoroughly tested to provide good user
            experience for six viewports: Greater than 1536px, less than 1536px,
            less than 1280px, less than 1024px, less than 768px, and less than
            640px. This ensures that no matter the type of device the user has,
            whether it be a desktop monitor, laptop monitor, tablet or phone, it
            will result in a pleasing experience.
          </p>
          <p>
            2. The website has gone through various automated accessibility
            testing, such as <a href="https://accessibe.com/">Accessibe</a> and{" "}
            <a href="https://validator.w3.org/">
              W3C Markup Validation Service
            </a>
            . This ensures things such as all image tags have &ldquo;alt&rdquo;
            attributes, and various aria labels are added to certain elements.
            It has also been tested to ensure that the color contrast between
            the background and text is accessible.
          </p>
          <p>
            3. I have provided both a &ldquo;dark mode&rdquo; as well as
            &ldquo;daylight mode&rdquo; that is easily accessible via a button
            on top of the page. This will allow users to choose their preference
            when viewing the website.
          </p>
          <hr />
        </Container>
      </div>
    </main>
  );
}
