"use client";
import Brain from "@/components/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef,{once:true}); //for one time animation
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(skillRef, {
    once: true,
    margin: "-100px",
  });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div
        className="h-full  bg-[#fbe2e4] overflow-scroll overflow-x-hidden  lg:flex"
        ref={containerRef}
      >
        {/* TEXT CONTAINER */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-15 xl:px-48 flex flex-col gap-24  md:gap-32 lg:gap-40 pr-0  xl:gap-64 w-2/3 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Biography Title */}
            <h1 className="font-bold pt-20 text-2xl">About Me </h1>
            <p className="text-lg">
              {/* Biography Description */}
              As a Software Developer, I excel in HTML, CSS, and JavaScript,
              with a knack for crafting WordPress and eCommerce solutions. My
              expertise extends to building dynamic applications using ReactJS
              and NodeJS. Having contributed to projects at 63moons and as a
              freelancer, I bring a track record of problem-solving prowess and
              a dedication to delivering high-quality code.
            </p>
            {/* Biography Quote */}
            <span className="italic">
              Let&apos;s collaborate to transform ideas into innovative solutions.
            </span>
            {/* Biography Sign svg */}
            <div className=""></div>
            {/* Biography Scroll Svg */}
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* ----------------------------------------------------------- */}

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* Skills Title */}
            <motion.h1
              initial={{ x: "-300px " }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Skills{" "}
            </motion.h1>

            {/* Skill List */}
            <motion.div
              initial={{ x: "-300px " }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ReactJs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NextJs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux Tool Kit
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Material Ui
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SASS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Wordpress
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Woocommerce
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
               MongoDb
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
               SQL Serever
              </div>
            </motion.div>

            {/* Scroll Svg */}

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE Title */}
            <motion.h1
              initial={{ x: "-400px " }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE{" "}
            </motion.h1>
            {/* EXPERIENCE LIST */}

            <motion.div
              initial={{ x: "-400px " }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className=""
            >
              {/* EXPERIENCE LIST ITEMS */}
              <div className="flex justify-between h-48  ">
                {/* left */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg">
                    Application Specialist
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Managing, testing, and deploying match site applications in
                    collaboration with the match team.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    July 2022 - April 2023
                  </div>
                  {/* JOB Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    63moons Technologies ltd.
                  </div>
                </div>

                {/* CENTER */}

                <div className="w-1/6">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line CIRCLE */}
                    <div className="absolute -left-2 w-5 h-5 rounded-full ring-4 ring-red-400 bg-white"></div>
                  </div>
                </div>

                {/* Right */}
                <div className="w-1/3"></div>
              </div>

              {/* left2 */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3"></div>

                {/* CENTER */}

                <div className="w-1/6">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line CIRCLE */}
                    <div className="absolute -left-2 w-5 h-5 rounded-full ring-4 ring-red-400 bg-white"></div>
                  </div>
                </div>

                {/* Right */}
                <div className="w-1/3  ">
                  {/* JOB TITLE */}
                  <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg">
                    web developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Developing both WordPress and MERN applications.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Sep 2023 - Present
                  </div>
                  {/* JOB Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Freelance
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
