import { motion } from "framer-motion";

const ApartSection = () => {
  return (
    <section className="overflow-hidden">
      <h1 className="container text-9xl text-primary-400 font-bold uppercase pb-16">
        ما يميزنا
      </h1>
      <div className="flex flex-col md:flex-row pb-20">
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="even:border border-primary-400 odd:text-secondary-400 odd:bg-primary-400 py-12 px-4">
          <div className="py-8">
            <h3 className="text-3xl font-semibold">
              التركيز على الإبداع والابتكار
            </h3>
          </div>
          <p className="text-xl">
            في Growth Engine، نحرص أن لاتحدنا القوالب التقليدية ونسعى دائمًا
            لإيجاد أفكار جديدة ومبتكرة تتجاوز توقعات عملائنا. نؤمن بأن التميز
            يأتي بالموازنة بين أفضل الممارسات والجرأة في التفكير خارج الصندوق.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="even:border border-primary-400 odd:text-secondary-400 odd:bg-primary-400 py-12 px-4">
          <div className="py-8">
            <h3 className="text-3xl font-semibold">العمل بروح الفريق الواحد</h3>
          </div>
          <p className="text-xl">
            نؤمن بأن القوة في التعاون والعمل الجماعي. كل عضو في فريقنا يساهم
            بخبراته وأفكاره لإنتاج أفضل الحلول التسويقية. نعمل معًا لتحقيق
            أهدافك كفريق واحد ملتزم بنجاحك.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="even:border border-primary-400 odd:text-secondary-400 odd:bg-primary-400 py-12 px-4">
          <div className="py-8">
            <h3 className="text-3xl font-semibold">المرونة في التكيف</h3>
          </div>
          <p className="text-xl">
            في عالم التسويق المتسارع، نحن ندرك أهمية المرونة والتكيف مع
            التطورات. نحرص على تحديث استراتيجياتنا باستمرار لتظل أعمال شركائنا
            في الطليعة.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="even:border border-primary-400 odd:text-secondary-400 odd:bg-primary-400 py-12 px-4">
          <div className="py-8">
            <h3 className="text-3xl font-semibold">
              الاهتمام بالجودة والإتقان
            </h3>
          </div>
          <p className="text-xl">
            نولي أهمية كبيرة للجودة في كل ما نقوم به. من أصغر التفاصيل إلى أكبر
            القرارات، نحرص على أن تكون كل خطوة في عملنا متميزة، مما يضمن نتائج
            تفوق التوقعات.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ApartSection;
