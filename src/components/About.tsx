import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="container my-24 py-16 rounded-3xl shadow-xl bg-primary-400">
      <motion.h1
        initial={{ x: -500, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="text-9xl hidden md:block pb-20 text-secondary-400 font-bold uppercase">
        من نحن؟
      </motion.h1>
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="text-9xl md:hidden pb-20 text-secondary-400 font-bold uppercase">
        من نحن؟
      </motion.h1>
      <motion.div
        initial={{ y: 100, scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        className="shadow-2xl text-2xl py-12 px-10 bg-primary-300 text-secondary-400 bg-opacity-80 rounded-2xl space-y-6">
        <p>
          في Growth Engine، من القلب النابض للعاصمة الرياض ننطلق ومستهدفنا نمو
          عملائنا من خلال ما نقدمه من حلول تسويقية إبداعية، حيث نعمل على تحويل
          الأفكار إلى واقع ملموس ونتائج تنعكس على نمو شركائنا. يعمل فريقنا
          بأسلوب إبداعي مبتكر لتقديم حلول تسويقية مبتكرة ومخصصة.
        </p>
        <p>
          نؤمن بأن الاستراتيجية التسويقية هي أساس قوة كافة الحلول التسويقية في
          مراحل تنفيذها. لذلك، نحرص على تطوير الاستراتيجية من خلال فهم شامل
          لكافة المعطيات وتحليلها بعمق. كما نعمل على تحديث هذه الاستراتيجيات
          بشكل مستمر لتواكب التطورات السريعة في الأسواق وتبقي شركاءنا في
          المقدمة.
        </p>
        <p>
          فريقنا يضم مجموعة متنوعة من الخبرات التي تتيح لنا تقديم حلول تسويقية
          متكاملة، تشمل صناعة المحتوى المؤثر سواء كان مكتوبًا أو مرئيًا. نحن
          ندمج بين التسويق الرقمي والتقليدي لنضمن أن رسالتك تصل إلى جمهورك
          المستهدف بأكثر الطرق فعالية وتأثيرًا.
        </p>
        <p>
          نؤمن بأن التميز في التسويق يبدأ من الفكرة الجيدة، ولكن لا يكتمل إلا
          بالتنفيذ المبدع وفق الاستراتيجية التسويقية. لذلك، نعمل بتفانٍ على كل
          مرحلة من مراحل عملنا، من التخطيط إلى التنفيذ، لنتأكد من أن كل حملة
          تسويقية نقدمها تعكس أعلى معايير الجودة والإبداع.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
