"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="h-full w-full bg-[#1c1d20] flex flex-col justify-between  p-[10%]  z-50 "
    >
      <div className="flex flex-col items-start gap-10 w-full z-50 relative   px-[8%] ">
        {/* lets work together  */}
        <div className="">
          <div className="flex gap-5 mb-3 items-center justify-center">
            <img
              className="rounded-full w-[80px] h-[80px] object-cover bg-[#999d9e]  "
              src="/profileimg.png"
              alt=""
            />
            <h1 className="text-7xl text-white font-medium  ">Let&apos;s Work </h1>
          </div>
          <h1 className="text-7xl text-white font-medium">together</h1>
        </div>

        {/* get touch */}
        <div className="relative w-full my-[30px]">
          <div className="w-full bg-[#333437] h-[2px]"></div>
          {/* <div className="rounded-full bg-white w-[80px] h-[80px] absolute left-[70%] top-[50%] -translate-x-[-50%] translate-y-[-50%]">
            {" "}
          </div> */}

          <motion.div
            whileHover={{
              animationDuration: 2,
              backgroundColor: "#334BD3",
            }}
            transition={{ ease: "linear", duration: "2" }}
            className="work_info_button  w-[150px] h-[150px] flex justify-center items-center cursor-pointer bg-[#455ce9]  rounded-full absolute left-[70%] top-[50%] -translate-x-[-50%] translate-y-[-50%] overflow-hidden"
          >
            <h1 className="text-white text-center text-lg font-medium">
              <Link href="/contact">Get in touch</Link>
            </h1>
          </motion.div>
        </div>

        {/* Email And contact */}

        <div className="flex w-full flex-wrap justify-start items-start gap-5 relative">
          <div className="relative w-[300px] h-[80px]">
            <motion.div
              whileHover={{
                border: "none",
              }}
              transition={{ ease: "linear", duration: "0.5" }}
              className="work_info_button w-[320px] h-[78px] rounded-full flex justify-center items-center cursor-pointer bg-transperent border border-[#494a4d]  absolute right-[50%] top-[50%] -translate-x-[-50%] translate-y-[-50%] overflow-hidden"
            >
              <h1 className="text-white px-5 text-center text-lg font-medium">
                <a href="mailto:Omkarmore0702@gmail.com">
                  Omkarmore0702@gmail.com
                </a>
              </h1>
            </motion.div>
          </div>

          <div className="relative w-[300px] h-[80px]">
            <motion.div
              whileHover={{
                border: "none",
              }}
              transition={{ ease: "linear", duration: "2" }}
              className="work_info_button w-[200px] h-[78px] rounded-full   flex justify-center items-center cursor-pointer bg-transperent border border-[#494a4d]  absolute right-[60%] top-[50%] -translate-x-[-50%] translate-y-[-50%] overflow-hidden "
            >
              <h1 className="text-white text-center text-lg font-medium">
                <a href="tel:+91 7021011068"> +91 7021011068 </a>
              </h1>
            </motion.div>
          </div>

          {/* <h1 className="text-white py-5 px-7  border rounded-full font-medium text-lg">
            +91 7021011068
          </h1> */}
        </div>
      </div>

      {/* Socials */}
      <div className="pt-10 flex flex-col gap-1  justify-end items-end">
        <h1 className="w-[360px] text-white font-normal">Socials</h1>
        <div className="flex gap-7 mt-3">
          <a className="text-white font-normal" href="https://www.linkedin.com/in/omkar-more-599923203/">
            Linkedin
          </a>
          <a className="text-white font-normal" href="https://github.com/omkar01111">
            Github
          </a>
          <a className="text-white font-normal" href="https://leetcode.com/omkar01111/">
            Leetcode
          </a>
          <a className="text-white font-normal" href="https://www.instagram.com/omkar_more07?utm_source=qr&igsh=Nmt3OHpvdWl4M2Qz">
            Instagram
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
