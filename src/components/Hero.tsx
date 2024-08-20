import logo1 from "../assets/nobg-orange.png";
import img from "../assets/Marketing.svg";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-screen flex justify-center items-center bg-gradient-to-br from-primary-400 to-primary-300">
      <div className="flex flex-col md:flex-row gap-y-8 justify-between items-center">
        <motion.div
          initial={{ y: "50%", scale: 1.6, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}>
          <img className="mx-auto w-1/2" src={logo1} alt="logo" />
          <h1 className="text-8xl">
            <span className="text-secondary-400">Growth</span> Engine
          </h1>
          <h2 className="text-5xl">حلول تسويقية إبداعية</h2>
        </motion.div>
        <motion.img
          initial={{ x: "-50%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="md:w-1/2 w-3/4"
          src={img}
          alt="img"
        />
      </div>
    </section>
  );
};

export default Hero;
