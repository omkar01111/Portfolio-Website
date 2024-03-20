"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/work", title: "Work" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const lastVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition:{
        when:"beforeChildren",
        staggerChildren:0.2, //each childer animation delay time
      }
    },
  };

  const listItemVarients = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <nav className=" h-[80px] w-full flex z-50 items-center  justify-center px-4 sm:px-5 md:px-8 lg:px-12 xl:px-30 absolute  text-[#4b4b4c] m-0 ">
    
      <div className="flex items-center justify-start  w-[50%] ">
        <p className=" font-semibold text-xl">©</p>
        <Link className="text-[1em] font-semibold m-2 " href={'/'}>Code By Omkar</Link>
      </div>

        <div className="nav_menu w-[50%] flex items-center justify-end gap-9 -m-9">
          <Link className="text-[1em]  font-semibold "  href={'/work'}>Work</Link>
          <Link className="text-[1em]  font-semibold "  href={'/about'}>About</Link>
          <Link className="text-[1em]  font-semibold "  href={'contact'}>Contact</Link>
        </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative "
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={topVariants}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={centerVariants}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={lastVariants}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={listItemVarients} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
