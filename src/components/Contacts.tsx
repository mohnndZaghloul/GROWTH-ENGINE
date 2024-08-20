import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Contacts = () => {
  return (
    <section id="contacts" className="overflow-hidden">
      <h1 className="container text-9xl text-primary-400 font-bold uppercase">
        تواصل معنا
      </h1>
      <p className="container text-4xl md:text-3xl pb-16">
        لا تتردد في التواصل معنا للحصول على استشارة بما يخص أعمالك التسويقية
        ومعرفة كيف يمكننا مساعدتك.
      </p>
      <div className="text-3xl md:text-xl flex flex-col md:flex-row gap-y-4 justify-center text-primary-400 py-10 bg-dark-200">
        <motion.a
          whileTap={{ scale: 1.2 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          target="_blank"
          className="hover:text-primary-100 px-10 transition"
          href="mailto:Contact@growthmrk.com">
          البريد الإلكتروني : Contact@growthmrk.com
        </motion.a>
        <span className="w-[1px] h-6 hidden md:inline bg-primary-400"></span>
        <motion.a
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 1.2 }}
          whileInView={{ opacity: 1 }}
          target="_blank"
          className="hover:text-primary-100 px-10 transition"
          href="tel:+966566269303">
          الهاتف : +966 56 525 9303
        </motion.a>
        <span className="w-[1px] h-6 hidden md:inline bg-primary-400"></span>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="px-10">
          العنوان : الرياض، المملكة العربية السعودية
        </motion.p>
      </div>
      <div className="container text-2xl flex justify-evenly items-center py-4">
        <button className="px-8 py-4 bg-opacity-70 hover:bg-opacity-100 transition bg-primary-400">
          دعوة للعمل
        </button>
        <button className="px-8 py-4 bg-opacity-70 hover:bg-opacity-100 transition bg-dark-200 text-primary-400">
          ابدأ الآن مع Growth Engine!
        </button>
        <motion.a
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          target="_blank"
          href="https://wa.me/+966566269303"
          className="fixed bottom-10 rounded-2xl left-10 p-4 flex justify-center items-center gap-x-2 bg-opacity-70 hover:bg-opacity-100 transition bg-primary-400">
          انقر هنا للتواصل مع المختص
          <FaWhatsapp className="text-xl" />
        </motion.a>
      </div>
    </section>
  );
};

export default Contacts;
