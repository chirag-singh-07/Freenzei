import featureImg from "../assets/feature.svg";
import application from "../assets/ui-design.png";
import Focus from "../assets/pros-and-cons.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="lg:w-1/4"
        >
          <h3 className="text-3xl text-pretty font-bold lg:w-1/2 mb-3">
            Why we are better than others
          </h3>
          <p>
            Diligence deeply ingrains skills, builds resilience, and fosters
            continuous improvement. It enhances focus and discipline, making
            your abilities more applicable in real-world situations. Ultimately,
            diligence is key to lasting success.
          </p>
        </motion.div>
        <div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8 ">
            <div className="bg-[rbga(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center justify-center hover:-translate-y-4 transition-all duration-300 overflow-scroll">
              <div className="text-left flex items-center justify-center flex-col cursor-pointer">
                <img
                  src={application}
                  alt="ui design icons"
                  className="h-[130px] w-[130px] mb-2"
                />
                <h5 className="text-3xl font-semibold text-primary px-5 text-center">
                  Real-World Application{" "}
                </h5>
                <p className="pt-4 text-tartinary font-normal ">
                  Skills developed with diligence are more applicable and
                  valuable in real-world scenarios.
                </p>
              </div>
            </div>
            <div className="bg-[rbga(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center justify-center hover:-translate-y-4 transition-all duration-300 md:mt-16 overflow-scroll">
              <div className="flex items-center justify-center flex-col cursor-pointer">
                <img src={Focus} alt="" className="h-[130px] w-[130px] mb-2" />
                <h5 className="text-3xl font-semibold text-primary px-5 text-center">
                  Focus and Discipline{" "}
                </h5>
                <p className="pt-4 text-tartinary font-normal">
                  It enhances your ability to stay focused and disciplined over
                  time.
                </p>
              </div>
            </div>
            <div className="bg-[rbga(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center justify-center hover:-translate-y-4 transition-all duration-300">
              <div className="flex items-center justify-center flex-col cursor-pointer">
                <img src={featureImg} alt="" />
                <h5 className="text-3xl font-semibold text-primary px-5 text-center">
                  Continuous Improvement{" "}
                </h5>
                <p className="pt-4 text-tartinary font-normal ">
                  {" "}
                  Diligence fosters a mindset of continuous learning and
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
