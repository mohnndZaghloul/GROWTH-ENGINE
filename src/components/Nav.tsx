import { motion } from "framer-motion";
import logo2 from "../assets/nobg-white.png";

const Nav = () => {
  return (
    <motion.header className="fixed top-0 w-full z-50 overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full blur-xl bg-light opacity-10" />
      <nav className="container relative flex justify-between items-center">
        <ul dir="ltr" className="flex justify-center items-center space-x-8">
          <li className="text-xl hover:text-secondary-400 hover:scale-110 transition">
            <a href="">الرئيسية</a>
          </li>
          <li className="text-xl hover:text-secondary-400 hover:scale-110 transition">
            <a href="#about">من نحن</a>
          </li>
          <li className="text-xl hover:text-secondary-400 hover:scale-110 transition">
            <a href="#services">خدماتنا</a>
          </li>
          <li className="text-xl hover:text-secondary-400 hover:scale-110 transition">
            <a href="#contacts">تواصل معنا</a>
          </li>
        </ul>
        <div>
          <a href="">
            <img
              className="max-w-32 p-4 hover:scale-105 transition"
              src={logo2}
              alt="logo"
            />
          </a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Nav;
