import { motion } from "framer-motion";
import logo2 from "../assets/nobg-white.png";

const Nav = () => {
  return (
    <motion.header
      initial={{ y: 0, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="sticky top-0 py-8 bg-primary-400 flex justify-center items-center min-h-20 md:min-h-40 w-full">
      <motion.img
        initial={{ left: "50%" }}
        transition={{ duration: 0.5 }}
        whileInView={{ left: "0%", padding: "40px" }}
        className="w-40 absolute top-0 aspect-square"
        src={logo2}
        alt="logo"
      />
    </motion.header>
  );
};

export default Nav;
