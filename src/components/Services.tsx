import { SiSimpleanalytics } from "react-icons/si";
import { PiStrategyBold } from "react-icons/pi";
import { BiBookContent } from "react-icons/bi";
import {
  MdMediation,
  MdOutlineBrandingWatermark,
  MdContentCopy,
  MdManageAccounts,
} from "react-icons/md";
import { FaTachographDigital } from "react-icons/fa6";

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="container my-24 overflow-hidden">
      <h1 className="container text-9xl text-primary-400 font-bold uppercase">
        خدماتنا
      </h1>
      <h3 className="text-4xl md:text-3xl pb-16">
        في Growth Engine، نعمل على تقديم مجموعة متنوعة من الخدمات التسويقية
        المتكاملة التي تضمن تحقيق أهدافك بأعلى مستويات الجودة والإبداع. ولأن لكل
        قطاع تحديات مختلفة نقدم حلولًا مخصصة تغطي كافة جوانب التسويق:
      </h3>
      <div className="space-y-16 text-2xl">
        <motion.div
          initial={{
            x: "-80%",
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className="flex even:flex-row-reverse gap-x-4 w-2/3 mx-auto">
          <motion.div
            transition={{ duration: 2, repeat: Infinity }}
            animate={{ scale: [1, 0.9, 1] }}
            className="flex justify-center items-center p-16 aspect-square rounded-lg shadow-2xl relative border border-secondary-300">
            <span className="absolute left-2 -top-10 text-8xl font-bold text-primary-300">
              01
            </span>
            <PiStrategyBold className="text-primary-300 text-7xl" />
          </motion.div>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl font-semibold pb-2 text-primary-300">
              استراتيجية التسويق الشاملة
            </h5>
            <p>
              وضع خطة تسويقية متكاملة تتناسب مع أهدافك التجارية. بحيث تعتمد على
              تحليل السوق والمنافسين والتحديات والمستهدفات القائمة، وتحديد
              القنوات الأكثر فعالية للوصول إلى جمهورك المستهدف. كما نحرص على
              تطوير استراتيجيات متجددة وقابلة للتكيف مع أي تغيرات تحدث في السوق.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: "80%",
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className="flex even:flex-row-reverse gap-x-4 w-2/3 mx-auto">
          <motion.div
            transition={{ duration: 2, repeat: Infinity }}
            animate={{ scale: [1, 0.9, 1] }}
            className="flex justify-center items-center p-16 aspect-square rounded-lg shadow-2xl relative border border-secondary-300">
            <span className="absolute left-2 -top-10 text-8xl font-bold text-primary-300">
              02
            </span>
            <FaTachographDigital className="text-primary-300 text-7xl" />
          </motion.div>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl font-semibold pb-2 text-primary-300">
              التسويق الرقمي
            </h5>
            <p>
              نقدم خدمات شاملة في التسويق الرقمي تشمل تحسين محركات البحث (SEO)،
              إدارة الإعلانات المدفوعة (PPC)، والتسويق عبر وسائل التواصل
              الاجتماعي والتسويق من خلال المؤثرين. نعمل على ضمان أن يكون حضورك
              الرقمي قوياً وفعالاً، مما يزيد من وصولك وتأثيرك على جمهورك
              المستهدف.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: "-80%",
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className="flex even:flex-row-reverse gap-x-4 w-2/3 mx-auto">
          <motion.div
            transition={{ duration: 2, repeat: Infinity }}
            animate={{ scale: [1, 0.9, 1] }}
            className="flex justify-center items-center p-16 aspect-square rounded-lg shadow-2xl relative border border-secondary-300">
            <span className="absolute left-2 -top-10 text-8xl font-bold text-primary-300">
              03
            </span>
            <MdMediation className="text-primary-300 text-7xl" />
          </motion.div>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl font-semibold pb-2 text-primary-300">
              إدارة وسائل التواصل الاجتماعي
            </h5>
            <p>
              نضع خططًا مبتكرة لإدارة حساباتك على وسائل التواصل الاجتماعي. بحيث
              نركز على الظهور المناسب لكل منصة وبناء قاعدة تفاعل صلبة لتعزيز
              حضورك الرقمي وتحقيق مستهدفات العلامة التجارية.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: "80%",
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className="flex even:flex-row-reverse gap-x-4 w-2/3 mx-auto">
          <motion.div
            transition={{ duration: 2, repeat: Infinity }}
            animate={{ scale: [1, 0.9, 1] }}
            className="flex justify-center items-center p-16 aspect-square rounded-lg shadow-2xl relative border border-secondary-300">
            <span className="absolute left-2 -top-10 text-8xl font-bold text-primary-300">
              04
            </span>
            <BiBookContent className="text-primary-300 text-7xl" />
          </motion.div>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl font-semibold pb-2 text-primary-300">
              صناعة المحتوى
            </h5>
            <p>
              نؤمن بأن المحتوى هو قلب أي حملة تسويقية ناجحة. لذلك، نقوم بإنتاج
              محتوى متنوع يتناسب مع قنوات التواصل المختلفة. سواء كان كتابة نصوص
              مقالات، محتوى لمنصات التواصل الاجتماعي، أو حتى نصوص للإعلانات
              المرئية، نحن نعمل على أن يعكس المحتوى رؤيتك ويجذب انتباه جمهورك.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: "-80%",
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className="flex even:flex-row-reverse gap-x-4 w-2/3 mx-auto">
          <motion.div
            transition={{ duration: 2, repeat: Infinity }}
            animate={{ scale: [1, 0.9, 1] }}
            className="flex justify-center items-center p-16 aspect-square rounded-lg shadow-2xl relative border border-secondary-300">
            <span className="absolute left-2 -top-10 text-8xl font-bold text-primary-300">
              05
            </span>
            <MdContentCopy className="text-primary-300 text-7xl" />
          </motion.div>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl font-semibold pb-2 text-primary-300">
              التسويق بالمحتوى المرئي
            </h5>
            <p>
              من خلال الفيديوهات الترويجية والفيديو جرافيك، نساعد على وصول
              رسالتك بطريقة مبتكرة وفعالة. نعمل على إنتاج محتوى مرئي يلهم ويؤثر
              ويعزز من حضور العلامة التجارية.{" "}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: "80%",
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className="flex even:flex-row-reverse gap-x-4 w-2/3 mx-auto">
          <motion.div
            transition={{ duration: 2, repeat: Infinity }}
            animate={{ scale: [1, 0.9, 1] }}
            className="flex justify-center items-center p-16 aspect-square rounded-lg shadow-2xl relative border border-secondary-300">
            <span className="absolute left-2 -top-10 text-8xl font-bold text-primary-300">
              06
            </span>
            <MdOutlineBrandingWatermark className="text-primary-300 text-7xl" />
          </motion.div>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl font-semibold pb-2 text-primary-300">
              تصميم الجرافيك والعلامات التجارية
            </h5>
            <p>
              نصمم هوية بصرية تعكس جوهر علامتك التجارية. من تصميم الشعارات إلى
              تطوير المواد التسويقية المطبوعة والرقمية، نضمن أن تكون علامتك
              التجارية متسقة وجذابة عبر كافة المنصات.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: "-80%",
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className="flex even:flex-row-reverse gap-x-4 w-2/3 mx-auto">
          <motion.div
            transition={{ duration: 2, repeat: Infinity }}
            animate={{ scale: [1, 0.9, 1] }}
            className="flex justify-center items-center p-16 aspect-square rounded-lg shadow-2xl relative border border-secondary-300">
            <span className="absolute left-2 -top-10 text-8xl font-bold text-primary-300">
              07
            </span>
            <MdManageAccounts className="text-primary-300 text-7xl" />
          </motion.div>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl font-semibold pb-2 text-primary-300">
              إدارة العلاقات العامة
            </h5>
            <p>
              ندير صورة علامتك التجارية في فضاء الاعلام التقليدي والحديث، ونعمل
              على تحسين ظهور العلامة التجارية من خلال استراتيجية علاقات عامة
              مدروسة.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: "80%",
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className="flex even:flex-row-reverse gap-x-4 w-2/3 mx-auto">
          <motion.div
            transition={{ duration: 2, repeat: Infinity }}
            animate={{ scale: [1, 0.9, 1] }}
            className="flex justify-center items-center p-16 aspect-square rounded-lg shadow-2xl relative border border-secondary-300">
            <span className="absolute left-2 -top-10 text-8xl font-bold text-primary-300">
              08
            </span>
            <SiSimpleanalytics className="text-primary-300 text-7xl" />
          </motion.div>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl font-semibold pb-2 text-primary-300">
              التحليلات وتقييم الأداء
            </h5>
            <p>
              نؤمن بأن كل حملة تسويقية أو حل تسويقي يجب أن يكون قابلة للقياس.
              نقوم بتحليل النتائج بشكل مستمر وتقديم تقارير مفصلة تساعد على فهم
              الأداء واتخاذ قرارات مدروسة لتطوير الاستراتيجية التسويقية.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
