"use client";
import { motion } from "framer-motion";
import { GoArrowDownRight } from "react-icons/go";
import "../styles/home.css";
import { IoSend } from "react-icons/io5";
import { useState } from "react";

const ContactPage = () => {
  const [result, setResult] = useState(` Let's Connect `);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b28c3805-c126-40af-9465-ce82409c2fd8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className=" w-full h-auto bg-[#1c1d20] flex flex-col justify-between  p-[10%]  z-50  -mt-[100px]"
      >
        <div className="flex flex-col items-start gap-10 w-full z-50 relative   px-[8%] ">
          {/* lets work together  */}
          <div className=" flex  justify-between w-full items-end">
            <div className="flex flex-col w-2/3 gap-5  mb-3 items-start justify-start">
              <h1 className="text-7xl text-white font-medium  ">
                Let&apos;s start a{" "}
              </h1>
              <h1 className="text-7xl text-white font-medium">
                project together
              </h1>
            </div>
            <div className="w-1/3 flex justify-center">
              <img
                className="rounded-full -ml-20 w-[100px] h-[100px] object-cover bg-[#999d9e]  "
                src="/profileimg.png"
                alt=""
              />
            </div>
          </div>

          <div className="w-[77%] h-[90px] flex justify-end">
            <GoArrowDownRight className="text-white text-3xl " />
          </div>

          <div className="flex w-full gap-10">
            <div className="contact_form w-2/3">
              <form onSubmit={onSubmit}>
                {/* name */}
                <div className="name flex flex-col border-t-2 border-white w-full py-[40px]">
                  <div className="flex gap-10 justify-start items-center">
                    <h1 className="text-[grey] text-2xl font-medium opacity-[0.33]">
                      01
                    </h1>
                    <h1 className="text-[grey] text-2xl font-medium opacity-[0.33]">
                      What&apos;s your name?
                    </h1>
                  </div>

                  <input
                    className="w-[90%] p-3 text-2xl ml-12 px-4 bg-[#1c1d20] text-white font-medium focus:outline-none placeholder-[#636466]"
                    type="text" name="name" required
                  />
                </div>
                {/* Email */}
                <div className="name flex flex-col border-t-2 border-white w-full py-[40px]">
                  <div className="flex gap-10 justify-start items-center">
                    <h1 className="text-[grey] text-2xl font-medium opacity-[0.33]">
                      02
                    </h1>
                    <h1 className="text-[grey] text-2xl font-medium opacity-[0.33]">
                      What&apos;s your email?
                    </h1>
                  </div>

                  <input
                    className="w-[90%] p-3 text-2xl ml-12 px-4 bg-[#1c1d20] text-white font-medium focus:outline-none placeholder-[#636466]"
                    type="email" name="email" required
                  />
                </div>
                {/* message area */}
                <div className="name flex flex-col border-t-2 border-white w-full py-[40px]">
                  <div className="flex gap-10 justify-start items-center">
                    <h1 className="text-[grey] text-2xl font-medium opacity-[0.33]">
                      03
                    </h1>
                    <h1 className="text-[grey] text-2xl font-medium opacity-[0.33]">
                      Your message
                    </h1>
                  </div>

                  <textarea
                    className="w-[90%] h-[100px] -3 text-2xl ml-12 px-4 bg-[#1c1d20] text-white font-medium focus:outline-none placeholder-[#636466]"
                    type="text" name="message" required
                  />
                </div>

                <div className="relative w-full h-[80px] flex items-start justify-start">
                  <motion.div
                    whileHover={{
                      border: "none",
                    }}
                    transition={{ ease: "linear", duration: "2" }}
                    className="work_info_button w-[50%] h-[78px] rounded-lg   flex justify-center items-center cursor-pointer bg-transparent border border-[#494a4d]  absolute overflow-hidden "
                  >
                    <h1 className="text-white text-center text-2xl font-medium">
                      <button type="submit">
                     {result} <IoSend className="inline-block pl-1 text-2xl" />
                      </button>
                   
                    </h1>
                  </motion.div>
                </div>
              </form>
            </div>
            <div className="connect_details h-full flex flex-col justify-start items-start flex-wrap pl-12  w-1/3">
              {/* Socials */}
              <div className="pt-10 flex flex-col gap-1  justify-start mt-[-50px] items-start">
                <div className="flex h-[250] flex-col gap-5 mt-3">
                  <h1 className=" text-white font-normal text-sm opacity-[.33]">
                    CONTACT DETAILS
                  </h1>
                  <h3 className="text-white font-normal " href="#">
                   <a href="mailto:pmkarmore0702@gmil.com">
                   omkarmore0702@gmail.com
                    </a>  
                  </h3>
                  <h3 className="text-white font-normal" href="#">
                  <a href="tel:+91 7021011068">+91 7021011068 </a>  
                  </h3>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-10 flex flex-col gap-1  justify-start items-start">
                <div className="flex flex-col gap-3 mt-3">
                  <h1 className=" text-white font-normal text-sm opacity-[.33]">
                    Socials
                  </h1>
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
            </div>
          </div>
          {/* Email And contact */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
