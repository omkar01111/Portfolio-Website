"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Ore Apparel",
    desc: "The Ore Clothing Brand sought to establish an online presence and expand their market through an e-commerce platform. My role involved designing and developing a user-friendly website using WordPress and WooCommerce. Key focuses included seamless payment processing, efficient inventory management, and responsive design. By integrating essential features and optimizing for performance and SEO, the resulting website exceeded expectations, leading to increased online sales and brand visibility in the competitive fashion industry.",
    img: "/work/ore.png",
    link: "https://oreclothes.wuaze.com/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Vega Company Portfolio",
    desc: "I designed and developed Vega Dynamics' company portfolio website using WordPress. The website showcases the company's services, projects, and expertise in a visually appealing and user-friendly manner. With a focus on modern design elements and seamless navigation, the website effectively represents Vega Dynamics' brand identity and attracts potential clients.",
    img: "/work/vega.png",
    link: "https://vega07.in/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "The Cinemography House",
    desc: `I developed a WordPress-based portfolio website for 'The Cinemography House,' a premier photoshoot agency. This visually captivating platform showcases their exceptional work and services in the field of cinematography, providing potential clients with an immersive experience. With seamless navigation and stunning imagery, the website effectively highlights the agency's expertise, attracting new clientele and solidifying their online presence.`,
    img: "/work/TCH.png",
    link: "https://thecinemographyhouse.wuaze.com/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "YouTube Clone",
    desc: "This project is a YouTube clone developed using ReactJS, Material UI, and the YouTube Rapid API. It serves as a practical demonstration of fetching data from an API, offering valuable insights into the process. With a focus on usability and functionality, this clone provides users with a hands-on experience in interacting with YouTube's features",
    img: "/work/youtube.png",
    link: "https://youtube-clone-10b2tqhds-omkar01111.vercel.app/",
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "Easy Park",
    desc: "In the 'Easy Park' project, I'm utilizing the MERN Stack to develop a parking application connecting customers with available spaces. Vendors list their spaces while customers can search nearby options, negotiate pricing, and access real-time availability updates. This user-centric platform aims to streamline the parking experience for both vendors and customers, enhancing convenience and efficiency.",
    img: "/work/easypark.png",
    link: "https://github.com/omkar01111/e_park",
  },
  {
    id: 6,
    color: "from-blue-300 to-violet-300",
    title: "Gym Website",
    desc: "The Gym Website, built with React, JavaScript, and Material UI, provides exercise suggestions tailored to user search queries. It offers a user-friendly interface for exploring workout routines, complemented by instructional videos for guidance. With its intuitive design and rich content, the website aims to enhance users' fitness journey by providing personalized exercise recommendations.",
    img: "/work/gym.png",
    link: "https://gym-website-ld8p.vercel.app/",
  },
  {
    id: 7,
    color: "from-violet-300 to-purple-300",
    title: "3D Website",
    desc: `Our project aims to craft a visually captivating one-page website, featuring 3D image and text animations for an immersive user experience. Leveraging cutting-edge technologies like 'gaps' for element animation, 'Locomotive Scroll' for smooth scrolling powered by Locomotive.js, and 'shery.js' for dynamic image animations, we ensure a seamless and engaging journey for visitors.`,
    img: "/work/3dwebite.png",
    link: "https://3d-website-silk-beta.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" relative" ref={ref}>
        <div className="w-screen h-[500px] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex  gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className=" w-screen   flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`w-screen pt-[100px] pb-[150px] flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white">
                  <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-5xl">
                    {item.title}
                  </h1>
                  <div className="relative flex gap-8 w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Link href={item.link} className="flex justify-end">
                      <Image src={item.img} alt="" fill />
                    </Link>
                    <div>
                      {/* <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                 
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 cursor-pointer right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
