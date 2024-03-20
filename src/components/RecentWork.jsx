"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import { FiArrowRight } from "react-icons/fi";

const RecentWork = () => {
  return (
    <div className="recentWork p-4 overflow-x-hidden md:p-8 bg-white  ">
      <div className="mx-auto max-w-[74rem] ">
        <ProjectLink
          heading="Ore Apparel"
          subheading="E-commerce website [Wordpress]"
          imgSrc={"work/ore.png"}
          href="https://oreclothes.wuaze.com/"
        />
        <ProjectLink
          heading="Vega Dynamics"
          subheading="Company Portfolio [Wordpress]"
          imgSrc={"/work/vega.png"}
          href="https://vega07.in/"
        />
        <ProjectLink
          heading="TCH"
          subheading="Portfolio website [Wordpress]"
          imgSrc={"/work/TCH.png"}
          href="https://thecinemographyhouse.wuaze.com/"
        />
        <ProjectLink
          heading="YouTube"
          subheading="YouTube clone [React]"
          imgSrc={"/work/youtube.png"}
          href="https://youtube-clone-10b2tqhds-omkar01111.vercel.app/"
        />
        <ProjectLink
          heading="Easy Park"
          subheading="[MERN Stack]"
          imgSrc={"/work/easypark.png"}
          href="https://github.com/omkar01111/e_park"
        />
        <ProjectLink
          heading="Gym Website"
          subheading="[React]"
          imgSrc={"/work/gym.png"}
          href="https://gym-website-ld8p.vercel.app/"
        />
        <ProjectLink
          heading="3D Website"
          subheading="[React ,shary.js]"
          imgSrc={"/work/3dwebite.png"}
          href="https://3d-website-silk-beta.vercel.app/"
        />
      </div>
    </div>
  );
};

const ProjectLink = ({ heading, subheading, imgSrc, href }) => {
  const ref = useRef();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring=useSpring(x);
  const ySpring=useSpring(y);
  // take motion value and transform into output value

  const top = useTransform(xSpring, [-0.5, 0.5], ["40%", "70%"]);
  const left = useTransform(ySpring, [-0.5, 0.5], ["30%", "70%"]);
  

  const handleMouseMove = (e) => {
    // get all all side mesurement of ref div
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    // mouse cordinates
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // value will be get bettween -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    
  };

  return (


    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      href={href}
      className="group  relative flex items-center justify-between px-[13%]  border-b-2 border-[#d7d7d8] py-4 transition-colors duration-500 md:py-8 hover:border-black"
    >

     
      <div className="">
        {/* sescription */}
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            delayChildren: 0.25,
            staggerChildren: 0.075,
          }}
          className=" relative z-10 block text-2xl font-medium text-[#1c1d20] transition-colors duration-500 md:text-4xl group-hover:text-[#5f5656]"
        >
          {heading.toUpperCase().split("").map((l, i) => {
            return (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block "
                key={i}
              >
                {l}
              </motion.span>
            );
          })}
        </motion.span>
        <span className=" relative mt-10 z-10 block text-xl font-bold text-black transition-colors duration-500 ms:text-4xl group-hover:text-[#5f5656]">
          {subheading}
        </span>
      </div>

      {/* img */}
      <motion.img
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "0deg" },
        }}
        transition={{
          type: "spring",
        }}
        src={imgSrc}
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        alt={`Image representing a link for ${heading}`}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
      />

      {/* ARROW */}
      <motion.div
        variants={{
          initial: { x: "25%", opacity: 0 },
          whileHover: { x: "0", opacity: 1 },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-black " />
      </motion.div>
    </motion.a>
  );
};

export default RecentWork;
