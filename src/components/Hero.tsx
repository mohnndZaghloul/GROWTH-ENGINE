import logo1 from "../assets/nobg-orange.png";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-screen flex justify-center items-center bg-gradient-to-bl from-primary-400 to-primary-200">
      <div className="sticky top-0">
        <motion.img
          initial={{ y: 200, scale: 1.6, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          className="animate-pulse"
          src={logo1}
          alt="logo"
        />
      </div>
      <motion.div
        initial={{ top: "110%", left: "30%" }}
        animate={{ top: "-10%", left: "10%" }}
        transition={{ duration: 5, repeat: Infinity }}
        className="w-20 aspect-square rounded-full bg-gradient-to-tr from-light border opacity-40 absolute"
      />
      <motion.div
        initial={{ top: "110%", left: "80%" }}
        animate={{ top: "-10%", left: "70%" }}
        transition={{ duration: 4, repeat: Infinity }}
        className="w-12 aspect-square rounded-full bg-gradient-to-l from-light border opacity-35 absolute"
      />
      <motion.div
        initial={{ top: "110%", left: "50%" }}
        animate={{ top: "-10%", left: "45%" }}
        transition={{ duration: 4.4, repeat: Infinity }}
        className="w-28 aspect-square rounded-full bg-gradient-to-l from-light border opacity-35 absolute"
      />
      <motion.div
        initial={{ top: "110%", left: "15%" }}
        animate={{ top: "-10%", left: "37%" }}
        transition={{ duration: 7, repeat: Infinity }}
        className="w-16 aspect-square rounded-full bg-gradient-to-l from-light border opacity-35 absolute"
      />
      <motion.div
        initial={{ top: "110%", left: "95%" }}
        animate={{ top: "-10%", left: "85%" }}
        transition={{ duration: 4, repeat: Infinity }}
        className="w-8 aspect-square rounded-full bg-gradient-to-l from-light border opacity-35 absolute"
      />
      <motion.div
        initial={{ top: "110%", left: "0%" }}
        animate={{ top: "-10%", left: "15%" }}
        transition={{ duration: 4.4, repeat: Infinity }}
        className="w-24 aspect-square rounded-full bg-gradient-to-l from-light border opacity-35 absolute"
      />
      <motion.div
        initial={{ top: "110%", left: "10%" }}
        animate={{ top: "-10%", left: "35%" }}
        transition={{ duration: 7, repeat: Infinity }}
        className="w-4 aspect-square rounded-full bg-gradient-to-l from-light border opacity-35 absolute"
      />
    </section>
  );
};

export default Hero;
