'use client';

import { AnimatedTitle, shortName } from "@/components/AnimatedTitle";
import { MobileNavElement, NavElement } from "@/components/NavElement";
import { useDarkMode } from "@/contexts/darkModeContext";
import { smoothScrollToRef } from "@/utils/smoothScrollToRef";
import { useRefIsScrolledBy } from "@/hooks/useRefIsScrolledBy";
import { SocialsNav } from "@/components/SocialsNav";
import { Paragraph } from "@/components/typography/Paragraph";
import { H2, H3 } from "@/components/typography/Headings";
import { Bold } from "@/components/typography/Bold";
import { SkillPill } from "@/components/SkillPill";
import { useState, useRef } from "react";
import { Emoji } from "@/components/typography/Emoji";
import { ChatBot } from "@/components/chatBot/ChatBot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBurger, faClose, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { InvertOnLightMode } from "@/components/InvertOnLightMode";
import Image from "next/image";



export default function Home() {
  const { isDark, toggle } = useDarkMode();
  const [isChatBotOpen, setChatBotIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('about');
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    if (latest >= 1) {
      setTimeout(() => {
        setSelectedSection('sup');
        setChatBotIsOpen(true);
      }, 2500)
    };
  });

  const aboutRef = useRef(null);
  useRefIsScrolledBy(aboutRef, 0.25, () => setSelectedSection('about'));

  const careerRef = useRef(null);
  useRefIsScrolledBy(careerRef, 0.25, () => setSelectedSection('career'));

  const projectsRef = useRef(null);
  useRefIsScrolledBy(projectsRef, 0.25, () => setSelectedSection('projects'));




  return (
    <>
      <div id='fun-arc' className="hidden lg:block"></div>
      <div id='dark-light-toggle-screen' className={isDark ? 'dark' : 'light'}></div>
      <ChatBot isOpen={isChatBotOpen} close={() => setChatBotIsOpen(false)} />


      <div className="lg:hidden fixed p-4 w-full flex justify-center z-50">
        <nav className="  py-4 px-8 rounded-full relative container flex justify-between items-baseline before:backdrop-blur-md before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:bg-yellow-100 before:bg-opacity-5 before:-z-10 before:rounded-full">
          <h2 className="font-semibold text-lg sm:text-md">{shortName}</h2>
          <div className="sm:hidden  flex gap-4">
            <button className="size-5" onClick={toggle}>
              <AnimatePresence mode="popLayout">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: isDark ? -20 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: isDark ? -20 : 20 }}
                  transition={{ duration: 0.333, ease: 'backInOut' }}
                  key={isDark ? 'light' : 'dark'}
                >
                  <FontAwesomeIcon size="lg" icon={isDark ? faSun : faMoon} />
                </motion.span>
              </AnimatePresence>
            </button>
            <button className="size-5" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <AnimatePresence mode="popLayout">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: isMobileMenuOpen ? 20 : -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: isMobileMenuOpen ? 20 : -20 }}
                  transition={{ duration: 0.333, ease: 'backInOut' }}
                  key={isMobileMenuOpen ? 'close' : 'burger'}
                >
                  <FontAwesomeIcon size="lg" icon={isMobileMenuOpen ? faClose : faBurger} />
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
          <ul className={`transition-all flex text-md gap-3 absolute bottom-0 right-0 mr-8 rounded-xl rounded-tr-none flex-col p-6 z-10 bg-yellow-100 bg-opacity-5 backdrop-blur-md translate-y-[105%] sm:static sm:flex-row sm:p-0 sm:translate-y-0 sm:gap-6 sm:mr-0 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[110%] opacity-0'} sm:translate-x-0 sm:opacity-100 sm:backdrop-blur-none sm:bg-opacity-0 sm:bg-transparent`}>
            <MobileNavElement isSelected={selectedSection === 'about'} href="#" onClick={(e) => { e.preventDefault(); smoothScrollToRef(aboutRef); }}>
              About
            </MobileNavElement>
            <MobileNavElement isSelected={selectedSection === 'career'} href="#" onClick={(e) => { e.preventDefault(); smoothScrollToRef(careerRef); }}>
              Career
            </MobileNavElement>
            <MobileNavElement isSelected={selectedSection === 'projects'} href="#" onClick={(e) => { e.preventDefault(); smoothScrollToRef(projectsRef); }}>
              Projects
            </MobileNavElement>
            <MobileNavElement isSelected={selectedSection === 'sup'} href="#" onClick={(e) => { e.preventDefault(); setChatBotIsOpen(true); setSelectedSection('sup') }}>
              ’Sup?
            </MobileNavElement>
          </ul>
        </nav>
      </div>

      <main className="container mx-auto p-4 lg:p-0 lg:grid lg:grid-cols-2 lg:gap-24 z-0">
        <div className="lg:sticky lg:h-screen pt-24 top-0 px-8 sm:px-4 mb-32 lg:mb-0">
          <section className="flex flex-col">
            <div>
              <AnimatedTitle />
              <h2 className="text-md mb-3 text-yellow-200">Fullstack Engineer at Redox</h2>
              <Paragraph>
                I have a passion for bringing <Bold>incredible web experiences</Bold> to life and exploring the  <Bold>future of technology</Bold>. I currently work remotely from beautiful <Bold>Honolulu, HI</Bold>. Aloha! <Emoji label="wave">👋</Emoji>
              </Paragraph>
            </div>
            <nav className="text-md my-12 ">
              <ul>
                <NavElement isSelected={selectedSection === 'about'} href="#" onClick={(e) => { e.preventDefault(); smoothScrollToRef(aboutRef); }}>
                  About
                </NavElement>
                <NavElement isSelected={selectedSection === 'career'} href="#" onClick={(e) => { e.preventDefault(); smoothScrollToRef(careerRef); }}>
                  Career
                </NavElement>
                <NavElement isSelected={selectedSection === 'projects'} href="#" onClick={(e) => { e.preventDefault(); smoothScrollToRef(projectsRef); }}>
                  Projects
                </NavElement>
                <NavElement isSelected={selectedSection === 'sup'} href="#" onClick={(e) => { e.preventDefault(); setChatBotIsOpen(true); setSelectedSection('sup'); }}>
                  ’Sup?
                </NavElement>
              </ul>
            </nav>
            <SocialsNav />
          </section>
        </div>
        <div className="px-8 sm:px-4 lg:pt-24 snap-y snap-proximity" >
          <section ref={aboutRef} id='about' className="snap-top scroll-my-24 min-h-screen relative">
            <div className="lg:p-4 lg:pt-0">
              <Paragraph>
                Over the past <Bold>10 years</Bold>, I’ve worked in various areas of digital design and development, including <Bold>front-end development, API and fullstack</Bold> projects as well as <Bold>UI/UX design</Bold>. I consider myself a bit of a chameleon.
              </Paragraph>
              <Paragraph>
                At <a href="https://www.redoxengine.com/" target="blank"><Bold>Redox</Bold></a>, I’m part of a team of exceptional engineers with a goal of making the world’s healthcare data useful. I’ve been lucky to work on many types of challenging projects ranging from <Bold>static sites to complex single page apps</Bold> and in many business domains from medical, travel, utilities, documentation and more.
              </Paragraph>
              <Paragraph>
                When I’m not at my computer, I’m enjoying the great outdoors where you can find me <Bold>trail running, paddling, hiking</Bold> or just taking my dog, Cooper, on a walk through the wilderness of O’ahu.
              </Paragraph>
            </div>
          </section>

          <section className="my-32 snap-top scroll-my-24 min-h-screen" ref={careerRef} id="career">
            <div className="bg-yellow-200/5 rounded-lg p-4 -mx-4 lg:mx-0 bg:bg-yellow-200/0 transition-all mb-16">
              <H3 className="mb-1">May 2018 - Present</H3>
              <H2>Senior Fullstack Engineer at <a href="https://www.redoxengine.com/" target="_blank">Redox</a></H2>
              <div className="mt-8">
                <Paragraph>
                  I was initially hired to architect a <Bold>transition from AngularJS to React and Typescript</Bold> for Redox’s core web experience, a <a href="https://dashboard.redoxengine.com/#/login" target="_blank"><Bold>customer dashboard SPA</Bold></a>. I led this effort while simultaneously normalizing code and design patterns and establishing front end best practices. From there I became the foremost expert on front end architecture at Redox and continued to deliver new features and collaborate closely with our newly minted design team.
                </Paragraph>
                <Paragraph>
                  Another major project I headed at Redox was the launch of our <a href="https://docs.redoxengine.com/" target="_blank"><Bold>documentation website</Bold></a>, which is paramount to delivering key information to customers on how to self serve and troubleshoot as well as detailed examples of how to best use the Redox API.This project was architected using <Bold>React, Gatsby, Typescript and a headless CMS, Contentful</Bold>. This choice was essential to allowing our content team to easily add, remove and reorder content, pages and navigation while keeping the presentation separated from the content.
                </Paragraph>
                <Paragraph>
                  Redox’s core offering is an API customers and our application use. I frequently would create new features, revise old features or strengthen the security of these <Bold>APIs written in Node.</Bold></Paragraph>
              </div>
              <ul className="flex gap-2 flex-wrap mt-8"><SkillPill>React</SkillPill><SkillPill>Typescript</SkillPill><SkillPill>Node</SkillPill><SkillPill>Express</SkillPill><SkillPill>K8s</SkillPill><SkillPill>Gatsby</SkillPill><SkillPill>Vite</SkillPill><SkillPill>Github</SkillPill><SkillPill>Jest</SkillPill><SkillPill>Docker</SkillPill><SkillPill>Contentful</SkillPill><SkillPill>Component Libraries</SkillPill><SkillPill>Jest</SkillPill><SkillPill>CSS Modules</SkillPill><SkillPill>Netlify</SkillPill></ul>
            </div>
            <div className="bg-yellow-200/5 rounded-lg p-4 -mx-4 lg:mx-0 bg:bg-yellow-200/0 transition-all">
              <H3 className="mb-2">August 2014 - May 2018</H3>
              <H2>Senior Front End Developer at <a href="https://www.accenture.com/us-en/about/accenture-song-index" target='blank' >Accenture Song</a></H2>
              <div className="mt-8"><Paragraph>
                I started off my career building lots of static template for consumption in CMS. Primarily built in <Bold>Jade/Pug, Sass and jQuery</Bold> I worked closely with members of the design team at <Bold>Fjord</Bold>, to deliver delightful experiences. It is during this early stage in my career I learned about and strong implemented <Bold>Brad Frost’s atomic design</Bold>. I saw the power of how atomic design could be used to have common language between designers and developers as well as how it changes the way you think about building pages.
              </Paragraph>
                <Paragraph>
                  As I progressed in my career, and as web technology marched onward, I began to learn about and work with <Bold>AngularJS and React</Bold>. After building several projects with both I realized the power of these frameworks and how they made building stateful applications trivial. I never really looked back.
                </Paragraph>
                <Paragraph>
                  In my time at Accenture I worked on projects ranging from smaller local company sites to Fortune 500 marketing and sales sites. I had a broad range of exposures to clients, many types of problems and industries</Paragraph>
              </div>
              <ul className="flex gap-2 flex-wrap mt-8"><SkillPill>Component Libraries</SkillPill><SkillPill>Jade/Pug</SkillPill><SkillPill>Sass</SkillPill><SkillPill>Responsive and Fluid Layouts</SkillPill><SkillPill>Yeogurt</SkillPill><SkillPill>jQuery</SkillPill><SkillPill>React</SkillPill><SkillPill>AngularJS</SkillPill><SkillPill>Angular</SkillPill><SkillPill>RxJS</SkillPill><SkillPill>Typescript</SkillPill><SkillPill>Github</SkillPill><SkillPill>SVN</SkillPill></ul>

            </div>
          </section>
          <section className="my-32 snap-top scroll-my-24 min-h-screen" ref={projectsRef} id="projects">
            <div className="group bg-yellow-200/5 rounded-lg p-4 -mx-4 lg:mx-0 bg:bg-yellow-200/0 transition-all mb-8">
              <div className={`grid grid-rows-1 grid-cols-1 w-full rounded-lg mb-4 md:w-2/3 overflow-clip border border-yellow-200 border-opacity-25`}>
                <InvertOnLightMode className="brightness-75 group-hover:brightness-100 transition-all" as='div'>
                  <Image alt='Portfolio 2024' src='/portfolio.png' width={1600} height={900} />
                </InvertOnLightMode>
              </div>
              <H2>2024 Portfolio Website</H2>
              <div className="mt-8">
                <Paragraph>
                  This website! I created my new portfolio website fresh for 2024. I wanted to focus on building something minimal but still pleasant to interact with. Responsiveness and fluidity were top of mind for this project.
                </Paragraph>
                <Paragraph>
                  I began by researching and making note of other websites I liked and what I liked about them. I then began to sketch out wireframes and later moving on to Figma to create a high fidelity mockup. I then began to build the site using <Bold>React, Typescript, NextJS and Tailwind CSS</Bold> and deployed it on <Bold>Vercel</Bold>.
                </Paragraph>
                <Paragraph>
                  Some notable fun things about this project:
                  <ul className="pl-4 list-disc flex flex-col gap-2 leading-snug py-2"><li>This was my first full-sized project using Tailwind. It’s a lot of fun and very intuitive.</li> <li>There are lots of fun scroll effects and triggers using intersection observer and framer motion</li><li>I used <pre className="inline">mix-blend-mode</pre> to achieve the dark and light mode effect.</li><li>I implemented a polymorphic component in Typescript</li></ul>
                </Paragraph>
              </div>
              <ul className="flex gap-2 flex-wrap mt-8"><SkillPill>React</SkillPill><SkillPill>Typescript</SkillPill><SkillPill>NextJS</SkillPill><SkillPill>Tailwind CSS</SkillPill><SkillPill>Framer Motion</SkillPill><SkillPill>Vercel</SkillPill></ul>

            </div>
            <div className=" group bg-yellow-200/5 rounded-lg p-4 -mx-4 lg:mx-0 bg:bg-yellow-200/0 transition-all">
              <div className={`grid grid-rows-1 grid-cols-1 w-full rounded-lg mb-4 md:w-2/3 overflow-clip border border-yellow-200 border-opacity-25`}>
                <InvertOnLightMode className="brightness-75 group-hover:brightness-100 transition-all" as='div'>
                  <Image alt='Bauhaus Funahaus' src='/bauhaus-funhaus.png' width={1600} height={900} />
                </InvertOnLightMode>
              </div>

              <a className="flex items-center underline text-yellow-400" href="https://brah-edrick.github.io/bauhaus-funhaus/ " target="_blank"><H2>Bauhaus Funhaus</H2><FontAwesomeIcon className="ml-1 opacity-40" size="xs" icon={faArrowUpRightFromSquare} /></a>
              <div className="mt-8">
                <Paragraph>
                  Just a fun one-day project I whipped up with Vite, React and Framer Motion to make something fun, colorful and inspired by bauhaus design. I love bauhaus posters and wanted to create something to generate them randomly.              </Paragraph>
              </div>
              <ul className="flex gap-2 flex-wrap mt-8"><SkillPill>React</SkillPill><SkillPill>Typescript</SkillPill><SkillPill>Vite</SkillPill><SkillPill>Framer Motion</SkillPill></ul>
            </div>

          </section>

          <section className="p-4 -mx-4 lg:mx-0">
            <Paragraph>Crafted with Aloha in Honolulu, HI. <Emoji label="rainbow">🌈</Emoji> Written by hand with Tailwind, NextJS and designed in Figma.</Paragraph>
          </section>
        </div>

      </main>
    </>
  );
}