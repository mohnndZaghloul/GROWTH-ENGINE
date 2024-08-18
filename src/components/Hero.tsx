import logo1 from "../assets/nobg-orange.png";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex justify-center items-center bg-gradient-to-bl from-primary-400 to-primary-200">
      <div className="sticky top-0 min-h-20 md:min-h-40 w-full flex justify-center items-center">
        <motion.img
          initial={{ y: 200, scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          className="animate-pulse"
          src={logo1}
          alt="logo"
        />
      </div>
    </section>
  );
};

export default Hero;
