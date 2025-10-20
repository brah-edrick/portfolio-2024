"use client";

import { MobileNavElement } from "@/components/atoms/NavElement";
import { useDarkMode } from "@/contexts/darkModeContext";
import { smoothScrollToRef } from "@/utils/smoothScrollToRef";
import { Paragraph } from "@/components/typography/Paragraph";
import { H2 } from "@/components/typography/Headings";
import { Bold } from "@/components/typography/Bold";
import { Hero } from "@/components/organisms/Hero";
import { ProjectArticle } from "@/components/organisms/ProjectArticle";
import { CareerEntry } from "@/components/organisms/CareerEntry";
import { AnimatedTitle } from "@/components/atoms/AnimatedTitle";
import { SocialsNav } from "@/components/molecules/SocialsNav";
import { InvertOnLightMode } from "@/components/atoms/InvertOnLightMode";
import { Callout } from "@/components/molecules/Callout";
import { useState, useRef } from "react";
import { Emoji } from "@/components/typography/Emoji";
import { ChatBot } from "@/components/organisms/ChatBot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faClose,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const { isDark, toggle } = useDarkMode();
  const [isChatBotOpen, setChatBotIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("about");

  const aboutRef = useRef(null);
  const careerRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <div id="fun-arc" className="hidden lg:block"></div>
      <div
        id="dark-light-toggle-screen"
        className={isDark ? "dark" : "light"}
      ></div>
      <button
        onClick={() => setChatBotIsOpen(!isChatBotOpen)}
        className="fixed bottom-4 right-4 z-50 h-16 w-16 bg-yellow-200/5 rounded-full flex items-center justify-center text-yellow-200 hover:bg-yellow-200/10 transition-all duration-300 ease-in-out shadow-lg backdrop-blur-md"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.333, ease: "backInOut" }}
            key={isChatBotOpen ? "close" : "open"}
          >
            {isChatBotOpen ? (
              <FontAwesomeIcon
                size="xl"
                icon={faClose}
                className="text-yellow-200"
              />
            ) : (
              <InvertOnLightMode as="span" className="text-xl">
                <span className={isDark ? "" : "brightness-75"}>🤙🏻</span>
              </InvertOnLightMode>
            )}
          </motion.span>
        </AnimatePresence>
      </button>
      <ChatBot isOpen={isChatBotOpen} close={() => setChatBotIsOpen(false)} />

      <div className="lg:hidden fixed p-4 w-full flex justify-center z-50">
        <nav className="  py-4 px-8 rounded-full relative container flex justify-between items-baseline before:backdrop-blur-md before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:bg-yellow-100 before:bg-opacity-5 before:-z-10 before:rounded-full">
          <h2 className="font-semibold text-lg sm:text-md">Brandon Hedrick</h2>
          <div className="sm:hidden  flex gap-4">
            <button className="size-5" onClick={toggle}>
              <AnimatePresence mode="popLayout">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: isDark ? -20 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: isDark ? -20 : 20 }}
                  transition={{ duration: 0.333, ease: "backInOut" }}
                  key={isDark ? "light" : "dark"}
                >
                  <FontAwesomeIcon size="lg" icon={isDark ? faSun : faMoon} />
                </motion.span>
              </AnimatePresence>
            </button>
            <button
              className="size-5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: isMobileMenuOpen ? 20 : -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: isMobileMenuOpen ? 20 : -20 }}
                  transition={{ duration: 0.333, ease: "backInOut" }}
                  key={isMobileMenuOpen ? "close" : "burger"}
                >
                  <FontAwesomeIcon
                    size="lg"
                    icon={isMobileMenuOpen ? faClose : faBurger}
                  />
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
          <ul
            className={`transition-all flex text-md gap-3 absolute bottom-0 right-0 mr-8 rounded-xl rounded-tr-none flex-col py-6 px-8 z-10 bg-yellow-100 bg-opacity-5 backdrop-blur-md translate-y-[105%] sm:static sm:flex-row sm:p-0 sm:translate-y-0 sm:gap-6 sm:mr-0 ${
              isMobileMenuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[110%] opacity-0"
            } sm:translate-x-0 sm:opacity-100 sm:backdrop-blur-none sm:bg-opacity-0 sm:bg-transparent`}
          >
            <MobileNavElement
              isSelected={selectedSection === "about"}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollToRef(aboutRef);
              }}
            >
              About
            </MobileNavElement>
            <MobileNavElement
              isSelected={selectedSection === "career"}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollToRef(careerRef);
              }}
            >
              Career
            </MobileNavElement>
            <MobileNavElement
              isSelected={selectedSection === "projects"}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollToRef(projectsRef);
              }}
            >
              Projects
            </MobileNavElement>
            <MobileNavElement
              isSelected={selectedSection === "sup"}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setChatBotIsOpen(true);
                setSelectedSection("sup");
              }}
            >
              ’Sup?
            </MobileNavElement>
          </ul>
        </nav>
      </div>

      <main className="container mx-auto p-4 lg:p-0 lg:grid lg:grid-cols-2 lg:gap-24 lg:px-8 z-0">
        <Hero
          imageSrc="/me.png"
          imageAlt="Brandon Hedrick"
          title={<AnimatedTitle as="h1">Brandon Hedrick</AnimatedTitle>}
          subtitle="Full Stack Engineer and Technologist"
          mainTitle={
            <>
              Full Stack. <br />
              Full Sails. <Emoji>⛵️</Emoji>
            </>
          }
          socialNav={<SocialsNav />}
        />
        <div className="px-8 sm:px-4 lg:pt-24 snap-y snap-proximity">
          <section
            ref={aboutRef}
            id="about"
            className="snap-top scroll-my-24 lg:min-h-screen relative"
          >
            <div className="lg:p-4 lg:pt-0 lg:mt-[104px]">
              <Paragraph>
                Over the past <Bold>10 years</Bold>, I’ve worked in various
                areas of digital design and development, including{" "}
                <Bold>front-end development, API and full stack</Bold> projects
                as well as <Bold>UI/UX design</Bold>. I consider myself a bit of
                a chameleon. I’m in my element when I’m working closely with
                designers and developers to{" "}
                <Bold>
                  deliver experiences that are efficient, effective and
                  delightful
                </Bold>
                .
              </Paragraph>
              <Paragraph>
                I’ve been lucky to work on many types of challenging projects
                ranging from{" "}
                <Bold>
                  static sites, complex single-page apps and extensive APIs
                </Bold>{" "}
                and in many business domains from medical, travel, utilities,
                marketing and developer documentation (just to name a few).
              </Paragraph>
              <Paragraph>
                When I’m not at my computer, I’m enjoying the great outdoors
                where you can find me{" "}
                <Bold>sailing, trail running, paddling, hiking</Bold> or just
                taking my dog, Cooper, on a walk through the jungles of O’ahu.
              </Paragraph>
              <Callout>
                <Paragraph color="yellow" marginBottom="mb-0">
                  I’m currently looking for a <Bold>new challenge</Bold> and am
                  open to a <Bold>new location</Bold> as well! If you’re
                  interested in working together,{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={() => setChatBotIsOpen(true)}
                  >
                    please reach out
                  </span>
                  !
                </Paragraph>
              </Callout>
            </div>
          </section>

          <section
            className="my-32 snap-top scroll-my-24 lg:min-h-screen"
            ref={careerRef}
            id="career"
          >
            <H2 className="text-3xl lg:m-4 my-4 font-bold">Career</H2>
            <CareerEntry
              period="May 2018 - October 2025"
              title="Senior/Staff Fullstack Engineer"
              company="Redox"
              companyUrl="https://www.redoxengine.com/"
              bodyContent={
                <>
                  <Paragraph>
                    I was initially hired to architect a{" "}
                    <Bold>
                      transition from AngularJS to React and TypeScript
                    </Bold>{" "}
                    for Redox’s core web experience, a{" "}
                    <a
                      href="https://dashboard.redoxengine.com/#/login"
                      target="_blank"
                    >
                      <Bold>customer dashboard SPA</Bold>
                    </a>
                    . I led this effort while simultaneously normalizing code
                    and design patterns and establishing front-end best
                    practices. From there I became the foremost expert on
                    front-end architecture at Redox and continued to deliver new
                    features and collaborate closely with our newly formed
                    design team.
                  </Paragraph>
                  <Paragraph>
                    Another major project I headed at Redox was the development
                    and launch of our{" "}
                    <a href="https://docs.redoxengine.com/" target="_blank">
                      <Bold>documentation website</Bold>
                    </a>
                    , which is paramount to delivering key information to
                    customers on how to self-serve and troubleshoot as well as
                    detailed examples of how to best use the Redox API. This
                    project was architected using{" "}
                    <Bold>
                      React, Gatsby, TypeScript and a headless CMS, Contentful
                    </Bold>
                    . This set of technologies was essential to allowing our
                    content team to easily add, remove and reorder content,
                    pages and navigation while keeping the presentation
                    separated from the content. Delivering a custom
                    implementation meant that the dedicated team could avoid the
                    limitations of a third party solution. (Please note that
                    this site is not optimized for mobile devices)
                  </Paragraph>
                  <Paragraph>
                    Redox’s core offering is an API that customers, internal
                    stakeholders and our applications use to interact with the
                    Redox platform. I would frequently create new features,
                    revise old features or strengthen the security of these{" "}
                    <Bold>APIs written in Node.</Bold>
                  </Paragraph>
                </>
              }
              skills={[
                "React",
                "TypeScript",
                "Node",
                "Express",
                "K8s",
                "Gatsby",
                "Vite",
                "Github",
                "Jest",
                "Docker",
                "Contentful",
                "Component Libraries",
                "CSS Modules",
                "Netlify",
              ]}
            />
            <CareerEntry
              period="August 2014 - May 2018"
              title="Senior Front End Developer"
              company="Accenture Song"
              companyUrl="https://www.accenture.com/us-en/about/accenture-song-index"
              bodyContent={
                <>
                  <Paragraph>
                    I started off my career building lots of static templates
                    for consumption in CMS contexts and primarily built using{" "}
                    <Bold>Jade/Pug, Sass and jQuery</Bold>. It was during this
                    early stage in my career that I learned about and was
                    strongly influenced by{" "}
                    <Bold>Brad Frost’s Atomic Design</Bold>. I saw the power of
                    how Atomic Design could be used to have common terminology
                    between designers and developers. It permanently changed the
                    way I think about building pages, applications and systems.
                  </Paragraph>
                  <Paragraph>
                    I worked closely with members of the design team at{" "}
                    <Bold>Fjord, Chaotic Moon</Bold> and other agencies, to
                    deliver delightful experiences. It was during this time that
                    I learned to manage tradeoffs between what designers wanted
                    and what was technically feasible or within the budget and
                    timeline of the project.
                  </Paragraph>
                  <Paragraph>
                    As I progressed in my career, and as web technology marched
                    onward, I began to learn about and work with{" "}
                    <Bold>AngularJS and React</Bold>. After building several
                    projects with both I realized the power of these frameworks
                    and how I could harness their power to build even more
                    powerful and effective experiences.
                  </Paragraph>
                  <Paragraph>
                    In my time at Accenture I worked on projects ranging from
                    smaller local company sites to Fortune 500 marketing and
                    sales sites. I had a broad range of exposure to clients,
                    many types of problems and industries.
                  </Paragraph>
                </>
              }
              skills={[
                "Component Libraries",
                "Jade/Pug",
                "Sass",
                "Responsive and Fluid Layouts",
                "Yeogurt",
                "jQuery",
                "React",
                "AngularJS",
                "Angular",
                "RxJS",
                "TypeScript",
                "Github",
                "SVN",
              ]}
            />
          </section>
          <section
            className="my-32 snap-top scroll-my-24 lg:min-h-screen"
            ref={projectsRef}
            id="projects"
          >
            <H2 className="text-3xl lg:m-4 my-4 font-bold">Projects</H2>
            <ProjectArticle
              title="Financial Simulations Visualizer"
              href="https://brah-edrick.github.io/finance-simulations/#/retirement"
              imageSrc="/financial-simulations.png"
              imageAlt="Financial Simulations Visualizer"
              bodyContent={
                <>
                  <Paragraph>
                    A client-side financial planning application built with{" "}
                    <Bold>React</Bold>, <Bold>TypeScript</Bold>,{" "}
                    <Bold>Tremor</Bold> and modern web technologies. This
                    project provides four specialized calculators to help users
                    explore different aspects of financial planning and
                    retirement scenarios
                  </Paragraph>
                  <Paragraph>
                    From a design perspective, this project presented unique
                    challenges in balancing presenting <Bold>useful data</Bold>{" "}
                    with an experience that <Bold>would not overwhelm</Bold>{" "}
                    users. Financial calculations can be intimidating and
                    mundane, so I focused on creating an interface that was
                    pleasant, approachable. I used default values that were
                    relatable and showed how possible financial independence can
                    be through small contributions over a long period of time.
                  </Paragraph>
                  <Paragraph>
                    Interactive charts and forms provide{" "}
                    <Bold>immediate feedback</Bold>, helping users understand
                    the impact of their inputs in real-time and subtle
                    debouncing ensures that the experience is{" "}
                    <Bold>smooth and reactive</Bold> without thrashing on user
                    inputs. The entire experience is designed to build
                    confidence in users who might be intimidated by financial
                    planning.
                  </Paragraph>
                  <Paragraph>
                    I’d encourage you to check out the{" "}
                    <a
                      href="https://github.com/brah-edrick/financial-simulations"
                      target="_blank"
                    >
                      source code on Github
                    </a>
                  </Paragraph>
                </>
              }
              skills={[
                "React",
                "TypeScript",
                "UI/UX Design",
                "Data Visualization",
                "Tremor",
                "Vite",
                "Github",
                "Tailwind",
              ]}
            />
            <ProjectArticle
              title="Redox Documentation"
              href="https://docs.redoxengine.com/"
              imageSrc="/redox-documentation.png"
              imageAlt="Redox Documentation"
              bodyContent={
                <>
                  <Paragraph>
                    This is a project I worked on at <Bold>Redox</Bold>. It’s a
                    comprehensive documentation site for the Redox API usage,
                    contracts and general user documentation.
                  </Paragraph>
                  <Paragraph>
                    This project had some really interesting engineering
                    challenges as the dedicated documentation team wanted a way
                    to manage the content in one location and share in several
                    different contexts. In addition to this, they wanted to
                    easily add, remove and reorder content, pages and navigation
                    all while keeping the presentation separated from the
                    content. We also wanted to be able to deliver some UX that
                    would be statically rendered from API contract definitions
                    that the engineering team maintained but still allow these
                    pages to be reordered and supplemented with additional
                    content from the documentation team. Finally everything
                    needed to be searchable and easily navigable. Unfortunately,
                    Docusaurus didn’t exist at the time (it also can’t do
                    everything we needed) so we had to forge our own solution.
                  </Paragraph>
                  <Paragraph>
                    To address these challenges we decided to use{" "}
                    <Bold>React, Gatsby, TypeScript</Bold> and a{" "}
                    <Bold>headless CMS, Contentful</Bold> to deliver the site.
                    This set of technologies was essential to allowing our
                    content team to easily add, remove and reorder content,
                    pages and navigation while keeping the presentation
                    separated from the content. Delivering a custom
                    implementation meant that the dedicated team could avoid the
                    limitations of a third party solution and the engineering
                    team could deliver highly custom UX that was tailored to the
                    needs of the documentation team. Search was implemented
                    using a client-side FlexSearch plugin and custom indexing
                    logic that allowed a page to be indexed by its title and
                    author-controlled tags/keywords. (Please note that this site
                    is not optimized for mobile devices and also this project
                    has been out of my custody for some time so the experience
                    may have changed)
                  </Paragraph>
                </>
              }
              skills={[
                "React",
                "TypeScript",
                "Gatsby",
                "Github",
                "Jest",
                "Contentful",
                "Component Libraries",
                "CSS Modules",
                "Netlify",
              ]}
            />
            <ProjectArticle
              title="2024 Portfolio Website"
              href="https://github.com/brah-edrick/portfolio-2024"
              imageSrc="/portfolio.png"
              imageAlt="Portfolio 2024"
              bodyContent={
                <>
                  <Paragraph>
                    This website! I created my new portfolio website fresh for
                    2024 (and refreshed in 2025). I wanted to focus on building
                    something minimal but still pleasant to interact with.
                    Responsiveness and fluidity were top of mind for this
                    project since I believe in a mobile-first approach and a
                    great experience on all devices.
                  </Paragraph>
                  <Paragraph>
                    The design process began with{" "}
                    <Bold>market research and competitive analysis</Bold> -
                    studying other portfolios I admired and identifying what
                    made them effective. I then moved to{" "}
                    <Bold>wireframing and user flow mapping</Bold>, thinking
                    through how visitors would navigate and consume information.
                    This engineering mindset of considering user journeys early
                    in the process informed every design decision.
                  </Paragraph>
                  <Paragraph>
                    In Figma, I created high-fidelity mockups that balanced{" "}
                    <Bold>aesthetic appeal with functional clarity</Bold>. The
                    design emphasizes readability, clear information hierarchy,
                    and smooth interactions. I paid particular attention to{" "}
                    <Bold>micro-interactions and transitions</Bold> - the subtle
                    animations that make the experience feel polished and fun.
                    The dark/light mode implementation using{" "}
                    <code className="inline">mix-blend-mode</code> was an
                    elegant solution to a common UX consideration.
                  </Paragraph>
                  <Paragraph>
                    Built using{" "}
                    <Bold>React, TypeScript, NextJS and Tailwind CSS</Bold> and
                    deployed on <Bold>Vercel</Bold>, the technical
                    implementation directly supports the design goals and my
                    original composition decisions with few deviations.
                  </Paragraph>
                  <Paragraph>
                    You should check out the{" "}
                    <a
                      href="https://github.com/brah-edrick/portfolio-2024"
                      target="_blank"
                    >
                      source code
                    </a>{" "}
                    on Github and see how it was built!
                  </Paragraph>
                </>
              }
              skills={[
                "React",
                "TypeScript",
                "NextJS",
                "Tailwind CSS",
                "Framer Motion",
                "UI/UX Design",
                "Figma",
                "Responsive Design",
                "Vercel",
              ]}
            />
            <ProjectArticle
              title="Bauhaus Funhaus"
              href="https://brah-edrick.github.io/bauhaus-funhaus/"
              imageSrc="/bauhaus-funhaus.png"
              imageAlt="Bauhaus Funhaus"
              bodyContent={
                <>
                  <Paragraph>
                    Just a fun one-day project I whipped up with Vite, React and
                    Framer Motion to make something fun, colorful and inspired
                    by Bauhaus design. I love Bauhaus shapes and motifs and
                    wanted to create some simple code to generate tiling
                    patterns with them randomly.
                  </Paragraph>
                  <Paragraph>
                    You should check out the{" "}
                    <a
                      href="https://github.com/brah-edrick/bauhaus-funhaus"
                      target="_blank"
                    >
                      source code
                    </a>{" "}
                    on Github and see how it was built!
                  </Paragraph>
                </>
              }
              skills={["React", "TypeScript", "Vite", "Framer Motion"]}
            />
          </section>

          <section className="p-4 -mx-4 lg:mx-0">
            <Callout>
              <Paragraph marginBottom="mb-0">
                Crafted with <Bold>Aloha</Bold> in <Bold>Honolulu, HI</Bold>.{" "}
                <Emoji label="rainbow">🌈</Emoji> Written by hand with{" "}
                <Bold>Tailwind, NextJS</Bold> and designed in <Bold>Figma</Bold>
                .
              </Paragraph>
            </Callout>
          </section>
        </div>
      </main>
    </>
  );
}
