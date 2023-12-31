"use client";

import { useColorContext } from "@/context/color-context";
import { useEffect } from "react";
import styles from "./report.module.scss";
import { ReportHeader } from "@/components/report/report-header";
import { Container } from "@/components/container";
import { ReportPrompt } from "@/components/report/report-prompt";
import Image from "next/image";

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
            testing, such as{" "}
            <a href="https://accessibe.com/" target="_blank">
              Accessibe
            </a>{" "}
            and{" "}
            <a href="https://validator.w3.org/" target="_blank">
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

          <h3>Usability</h3>
          <ReportPrompt>
            State <strong>3</strong> ways in which you considered the usability
            of your site.
          </ReportPrompt>
          <p>
            1. For desktop experience, the header is presented as a top
            navigation bar, while for smaller viewport, I have used CSS to
            transform this into an hamburger icon that opens up a flyout. This
            is a standard industry practice that is commonly done due to the
            restricted space in mobile devices.
          </p>
          <p>
            2. There are several elements with a &ldquo;hover&rdquo;
            interactivity, such as the course cards in the Courses page, as well
            as the carousel of programming technologies in the home page. Since
            there is no concept of &ldquo;hover&rdquo; for mobile devices, I
            have used CSS to specifically target smaller viewports such that
            these elements no longer need to be hovered in order to view more
            detail.
          </p>
          <p>
            3. A lot of detail has been put into the typing game. For example,
            when there are nested tabs in lines, I added logic such that the
            line is automatically tabbed when going to the new line, which is
            consistent with the experience most developers have in modern IDEs.
            Empty lines are also automatically skipped. And since it is
            extremely difficult to type programming symbols on a mobile device,
            let alone the fact that virtually no one codes in a mobile device, I
            have used Responsive CSS to disable the game in smaller viewports.
            They will be met with a message asking the users to use a bigger
            viewport to access the game.
          </p>
          <hr />

          <h3>Learning</h3>
          <ReportPrompt>
            State <strong>3</strong> things you had to learn or find out to
            create your site. How did you achieve that?
          </ReportPrompt>
          <p>
            I have been a professional frontend engineer for about 5 years now,
            with an additional 5 years as a application developer. I am
            currently a lead frontend engineer at Amazon. Therefore, all things
            related to frontend is my bread and butter, and so most of the work
            was done without any new learning. There were still minor things I
            have learned, which I will list here:
          </p>
          <p>
            1. There is an animated progress bar in the home page, where
            multiple elements needs to animate in synchrony. Naively attaching
            css animation properties to these elements caused the overall
            animation to be out of sync, and so I researched how this can be
            done using pure CSS, and not relying on JavaScript. I then stumbled
            upon the{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API"
              target="_blank"
            >
              Web Animations API
            </a>
            , which was specifically made for this issue. I began using the
            DocumentTimeline to ensure that these animations were in sync.
            Although I still had to rely on Javascript to achieve this, I am
            glad I was able to do this via the &ldquo;standard&rdquo; way,
            instead of relying on JavaScript hacks.
          </p>
          <p>
            2. Throughout my years as a frontend developer, I always struggled
            with the UI of the &ldquo;focus&rdquo; outline that is present when
            you tab into a focusable element. This is necessary to make the
            webpage more accessible, but the result would be that the outline
            would also appear when you click on the focusable element, which
            often times conflicts with the focused state of the element, which
            leads to an undesirable UI. But during the time I was working on
            this project, by complete chance I stumbled upon a{" "}
            <a href="https://youtu.be/x9rh0Du4Czg" target="_blank">
              &ldquo;What&apos;s new in Web&rdquo; video
            </a>{" "}
            by Google, which introduced the newly added the CSS
            &ldquo;:focus-visible&rdquo; pseudo-class selector, which completely
            addressed this issue. This selector allows you to distinguish
            between the focused state via tabs vs via clicks. Therefore I was
            able to leverage this and hide the outline when clicking, but have
            it still be visible when tabbing into the element.
          </p>
          <p>
            3. This was the first website that I created that had the dark-mode
            and light-mode option. I&apos;ve studied on some ways people achieve
            this, such as using the CSS media query{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"
              target="_blank"
            >
              prefers-color-scheme
            </a>
            , but in the end I decided to go with my own custom method so that
            the user has the ability to toggle between the two modes via a
            button. I achieved this by making the button toggle a special class
            in the root of the DOM tree, and adding CSS rules when that class is
            present.
          </p>
          <hr />

          <h3>Evaluation I</h3>
          <ReportPrompt>
            What aspects of your work do you think were particularly successful?
            Why?
          </ReportPrompt>
          <p>
            I am quite pleased with my implementation for dark mode and light
            mode. Firstly, I am quite satisfied in how I solved this, as I
            believe that this is a scalable solution that can work even for
            industry-sized applications. Secondly, I am quite satisfied with how
            the UI looks for both modes.
          </p>
          <p>
            I initially wanted to achieve this in a very formulaic way, where I
            have a list of colors by a degree of darkness, and depending on the
            mode I will use the opposite color on the other end of the darkness
            spectrum. But in practice this did not result in a pleasing UI, and
            so a lot of the work was done by trial and error and accessing what
            looks right to me.
          </p>
          <p>
            Some of my subjective findings was that, for example, a white card
            on a dark background looks good, but a dark card on a white
            background does not. It is more tiring to the eyes when reading
            white text on a dark card that is on a white background. Therefore,
            for these cards on light mode, I ended up using a white card with a
            box-shadow. The box-shadow likewise did not look good on dark mode,
            and so I omitted them in that color scheme.
          </p>
          <hr />

          <h3>Evaluation II</h3>
          <ReportPrompt>
            What aspects of your work could be improved? How might you do things
            differently another time?
          </ReportPrompt>
          <p>
            The things that could be improved for my website were mainly due to
            the five page limit constraint of this project. If that constraint
            was not present, I would completely change the{" "}
            <strong>courses page</strong> and the <strong>blog page</strong>.
          </p>
          <p>
            My main frustration with the courses page is that I wanted to add a
            filtering mechanism to the courses, such as the ability to filter by
            language, by difficulty, and so on. But due to the fact that this
            page also has a lot of other elements unrelated to the courses, such
            as a CTA and resources on free materials, I could not get the UI to
            work with the filters. If I could re-do this page without the page
            number constraint, I would have just had &ldquo;featured&rdquo;
            courses on this section, and have a button that navigates the user
            to the full blown catalogue with the ability to filter the courses.
          </p>
          <p>
            Similar to above, the blog page is currently a flat list of multiple
            blogs. Without the page limit constraint, I would have made the blog
            page where you can see all written blogs in a concise form, and have
            the ability to click on a &ldquo;Read More&rdquo; button to go to
            the article&apos;s dedicated page.
          </p>
          <hr />

          <h3>Resources</h3>
          <ReportPrompt>
            What resources did you use in your work? List any sources of
            information, libraries, plugins, code or tools (you should also
            indicate inclusions from other sources within your code using
            comments)
          </ReportPrompt>
          <ul>
            <li>
              <a href="https://developer.mozilla.org/" target="_blank">
                MDN Web Docs
              </a>
              . Documentation for all things related to HTML, CSS, and
              JavaScript.
            </li>
            <li>
              <a href="https://validator.w3.org/" target="_blank">
                W3C Markup Validation Service
              </a>
              . Automated accessibility and validity checker for the website.
            </li>
            <li>
              <a href="https://accessibe.com/" target="_blank">
                Accessibe
              </a>
              . Automated accessibility checker.
            </li>
            <li>
              <a href="https://imagecompressor.com/" target="_blank">
                Optimizilla
              </a>
              . Automated tool to optimize images used to reduce the size.
            </li>
            <li>
              <a href="https://www.jetbrains.com/webstorm/" target="_blank">
                Jetbrains Webstorm
              </a>
              . IDE used to build the website.
            </li>
            <li>
              <a href="https://www.figma.com/" target="_blank">
                Figma
              </a>
              . Design tool used to build mocks and prototypes.
            </li>
            <li>
              <a href="https://fonts.google.com/" target="_blank">
                Google Fonts
              </a>
              . Source of the fonts and icons used.
            </li>
            <li>
              <a
                href="https://elements.envato.com/code-programming-ZK29GYU"
                target="_blank"
              >
                Envato Elements
              </a>
              . Source of the video on home page.
            </li>
            <li>
              <a
                href="https://www.wecreateproblems.com/how-faang-hires-engineers"
                target="_blank"
              >
                WeCP
              </a>
              . Source of the FAANG image on home page.
            </li>
            <li>
              <a href="https://www.freepik.com/" target="_blank">
                Freepik
              </a>
              . Source of various stock images used on the website, such as
              images of people.
            </li>
            <li>
              <a href="https://www.flaticon.com/" target="_blank">
                Flaticon
              </a>
              . Source of various technology logos used in the website.
            </li>
            <li>
              <a href="https://icons8.com/" target="_blank">
                Icons8
              </a>
              . Source of various technology logos used in the website.
            </li>
            <li>
              <a
                href="https://codepen.io/designcouch/pen/ExvwPY"
                target="_blank"
              >
                Jesse Couch Codepen
              </a>
              . Source of hamburger icon animation used on website.
            </li>
          </ul>
          <p>Citations:</p>
          <ul>
            <li>
              [1] MDN Web Docs. 2023. [Online]. Available:
              https://developer.mozilla.org/en-US/ . [Accessed: 5-Aug-2023].
            </li>
            <li>
              [2] W3C Markup Validation Service. 2023. [Online]. Available:
              https://validator.w3.org/ . [Accessed: 5-Aug-2023].
            </li>
            <li>
              [3] accessiBe. 2023. [Online]. Available: https://accessibe.com/ .
              [Accessed: 5-Aug-2023].
            </li>
            <li>
              [4] Optimizilla. 2023. [Online]. Available:
              https://imagecompressor.com/ . [Accessed: 5-Aug-2023].
            </li>
            <li>
              [5] Google Fonts. 2023. [Online]. Available:
              https://fonts.google.com/ . [Accessed: 5-Aug-2023].
            </li>
            <li>
              [6] Envato Elements. 2023. [Online]. Available:
              https://elements.envato.com/code-programming-ZK29GYU . [Accessed:
              5-Aug-2023].
            </li>
            <li>
              [7] Aadam Wajid. WeCP. 2023. [Online]. Available:
              https://www.wecreateproblems.com/how-faang-hires-engineers .
              [Accessed: 5-Aug-2023].
            </li>
            <li>
              [8] Freepik. 2023. [Online]. Available: https://www.freepik.com/ .
              [Accessed: 5-Aug-2023].
            </li>
            <li>
              [9] Flaticon. 2023. [Online]. Available: https://www.flaticon.com/
              . [Accessed: 5-Aug-2023].
            </li>
            <li>
              [10] Icons8. 2023. [Online]. Available: https://icons8.com/ .
              [Accessed: 5-Aug-2023].
            </li>
            <li>
              [11] Jesse Couch. &ldquo;Menu &quot;Hamburger&quot; Icon
              Animations&rdquo;, 2023. [Online]. Available:
              https://codepen.io/designcouch/pen/ExvwPY . [Accessed:
              5-Aug-2023].
            </li>
            <li>
              [12] Simon Bisson. 2021. [Online]. Available:
              https://www.infoworld.com/article/3614938/microsoft-returns-to-java-with-azure-focused-openjdk-release.html
              . [Accessed: 5-Aug-2023].
            </li>
            <li>
              [13] Adhithi Ravichandran. 2023. [Online]. Available:
              https://adhithiravi.medium.com/what-are-server-components-and-client-components-in-react-18-and-next-js-13-6f869c0c66b0
              . [Accessed: 5-Aug-2023].
            </li>
          </ul>
          <hr />

          <h3>Appendices</h3>
          <ReportPrompt>
            Site map (if useful), wireframes and mock-ups
          </ReportPrompt>
          <h4>Site Map</h4>
          <Image
            src="/report/sitemap.png"
            alt="Sitemap Diagram"
            width={950}
            height={500}
          />
          <h4>Wireframes</h4>
          <h6>Header Wireframe</h6>
          <Image
            src="/report/wireframes/header.jpg"
            alt="Header Wireframe"
            width={950}
            height={500}
          />
          <h6>Home Page Wireframe</h6>
          <Image
            src="/report/wireframes/home.jpg"
            alt="Home Page Wireframe"
            width={950}
            height={500}
          />
          <h6>Courses Page Wireframe</h6>
          <Image
            src="/report/wireframes/courses.jpg"
            alt="Courses Page Wireframe"
            width={950}
            height={500}
          />
          <h6>Blog Page Wireframe</h6>
          <Image
            src="/report/wireframes/blog.jpg"
            alt="Blog Page Wireframe"
            width={950}
            height={500}
          />
          <h6>Play Page Wireframe</h6>
          <Image
            src="/report/wireframes/play.jpg"
            alt="Play Page Wireframe"
            width={950}
            height={500}
          />
          <h6>Join Page Wireframe</h6>
          <Image
            src="/report/wireframes/join.jpg"
            alt="Join Page Wireframe"
            width={950}
            height={500}
          />

          <h4>Mocks</h4>
          <h6>Mobile Header Mocks</h6>
          <Image
            src="/report/mocks/header-mobile.png"
            alt="Mobile Header Mocks"
            width={950}
            height={500}
          />
          <h6>Home Page Wireframe</h6>
          <Image
            src="/report/mocks/home-desktop.png"
            alt="Desktop Home Mocks"
            width={950}
            height={500}
          />
          <Image
            src="/report/mocks/home-mobile.png"
            alt="Mobile Home Mocks"
            width={950}
            height={500}
          />
          <h6>Courses Page Wireframe</h6>
          <Image
            src="/report/mocks/courses-desktop.png"
            alt="Desktop Courses Mocks"
            width={950}
            height={500}
          />
          <Image
            src="/report/mocks/courses-mobile.png"
            alt="Mobile Courses Mocks"
            width={950}
            height={500}
          />

          <h6>Blog Page Wireframe</h6>
          <Image
            src="/report/mocks/blog-desktop.png"
            alt="Desktop Blog Mocks"
            width={950}
            height={500}
          />
          <Image
            src="/report/mocks/blog-mobile.png"
            alt="Mobile Blog Mocks"
            width={950}
            height={500}
          />

          <h6>Play Page Wireframe</h6>
          <Image
            src="/report/mocks/play-desktop.png"
            alt="Desktop Play Mocks"
            width={950}
            height={500}
          />
          <Image
            src="/report/mocks/play-mobile.png"
            alt="Mobile Play Mocks"
            width={950}
            height={500}
          />

          <h6>Join Page Wireframe</h6>
          <Image
            src="/report/mocks/join-desktop-1.png"
            alt="Desktop Join Mocks 1"
            width={950}
            height={500}
          />
          <Image
            src="/report/mocks/join-mobile-1.png"
            alt="Mobile Join Mocks 1"
            width={950}
            height={500}
          />
          <Image
            src="/report/mocks/join-desktop-2.png"
            alt="Desktop Join Mocks 2"
            width={950}
            height={500}
          />
          <Image
            src="/report/mocks/join-mobile-2.png"
            alt="Mobile Join Mocks 2"
            width={950}
            height={500}
          />
          <Image
            src="/report/mocks/join-desktop-3.png"
            alt="Desktop Join Mocks 3"
            width={950}
            height={500}
          />
          <Image
            src="/report/mocks/join-mobile-3.png"
            alt="Mobile Join Mocks 3"
            width={950}
            height={500}
          />
          <hr />
        </Container>
      </div>
    </main>
  );
}
