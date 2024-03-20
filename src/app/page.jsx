"use client";

import { GrLanguage } from "react-icons/gr";
import { FiArrowDownRight } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import "./styles/home.css";
import RecentWork from "@/components/RecentWork";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Homepage = () => {
  useEffect(() => {
    alertMessage();
  }, []);

  const alertMessage = () => {
    if (typeof window !== 'undefined') {
      // Code that uses alert
      alert('Please note that this website is still under development. For the best viewing experience, I recommend viewing it on a desktop.');
    }
  };
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  // work info button animation
  const workInfoRef = useRef(null);

  return (
    // starting animation
    <motion.div
      className="-z-50 h-full   "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="relative ">
        <div className="wrapper   ">
          <Navbar className={"z-[99]"} />
          <div className="heroSection  w-full justify-center flex items-center h-full">
            <img className="hero-background" src={"/profileimg.png"} />

            <div className="hero_mid_section  flex justify-between flex-wrap  ">
              <div className="flex justify-between px-6 items-center w-[300px] bg-[#1c1d20] h-[120px] rounded-r-full gap-2">
                <h3 className="text-white w-[100px] text-lg ">
                  Located in the Mumbai
                </h3>
                <div className="rounded-full flex justify-center items-center h-[80px] w-[80px] bg-[#999d9e]">
                  <GrLanguage className="text-4xl text-white" />
                </div>
              </div>
              <div className="w-1/3 pl-3 flex flex-col justify-start items-start ">
                <FiArrowDownRight className="text-white text-5xl " />
                <h2 className="text-white text-4xl font-medium pt-5">
                  Freelance
                </h2>
                <h2 className="text-white text-4xl font-medium pt-3">
                  Designer & Devloper
                </h2>
              </div>
            </div>

            <div className="hero-foreground  text-white font-medium ">
              <pre className="slide"> Omkar More -</pre>
              <pre className="slide"> Omkar More -</pre>
              <pre className="slide"> Omkar More -</pre>
            </div>
          </div>

          <section className="about_Container">
            {/* Work info */}
            <section className="work_intro pt-[150px] flex flex-wrap  bg-white  ">
              <div className="work_intro_left w-2/3 flex flex-wrap justify-end items-start pl-[5%] pr-10">
                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="text-3xl font-medium w-[650px]  "
                >
                  {" "}
                  Helping brands to stand out in digital era. Together we will
                  set the new status quo. No nonsense, always on the cutting
                  edge.
                </motion.h4>
              </div>
              <div className=" work_intro_right w-1/3  flex flex-wrap justify-start items-start pr-[10%] pl-10">
                <h4 className="text-lg font-medium text-neutral-600 w-[293px] ">
                  The combination of my passion for design, code and interaction
                  posisions me in unique place in the web design.
                </h4>

                <motion.div
                  ref={workInfoRef}
                  className="mt-4 w-[220px] h-[220px]  relative flex justify-start items-center"
                >
                  <motion.div
                    whileHover={{
                      animationDuration: 0.5,
                      backgroundColor: "#334BD3",
                      color: "white",
                    }}
                    transition={{ ease: "linear", duration: "0.5" }}
                    drag
                    dragConstraints={workInfoRef}
                    className="work_info_button  w-[150px] h-[150px] flex justify-center items-center cursor-pointer bg-[#1c1d20] rounded-full relative overflow-hidden"
                  >
                    <h1 className="text-white text-center text-2xl font-medium">
                      <Link href={"/about"} className="">
                        About Me
                      </Link>
                    </h1>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Recent Work */}
            <div className="flex flex-col   bg-white">
              <div className="mx-auto max-w-[74rem] w-full  flex justify-start items-center">
                <h1 className=" w-full  border-b-2 pb-[30px]  px-[13%]    border-[#d7d7d8] ">
                  Recent Work
                </h1>
              </div>

              <RecentWork className={"pt-0"} />
            </div>

            <Footer className="absolute bottom-0 left-0 right-0" />
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
