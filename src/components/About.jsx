import aboutImg1 from "../assets/aboutImg1.svg";
import aboutImg2 from "../assets/aboutImg2.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const About = () => {
  return (
    <div
      className="md;px-14 p-4 max-w-screen-2xl mx-auto space-y-10"
      id="about"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={aboutImg1} alt="" />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/4"
        >
          <h2 className="md:text-4xl  sm:text-5xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product{" "}
            <span className="text-secondary">for many years.</span>
          </h2>
          <p className="text-tartinary md:text-lg mb-7">
            For many years, we have been dedicated to improving our educational
            programs, continuously refining our curriculum to better serve our
            students. By incorporating the latest teaching methods and feedback
            from educators and learners alike we ensured that our offerings
            remain relevant and impactful. This commitment to continuous
            improvement has allowed us to provide an educational experience that
            not only meets but exceeds the expectations of our students,
            preparing them for success in an ever-changing world.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div
          className="md:w-1/2"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={aboutImg2} alt="" />
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/4"
        >
          <h2 className="md:text-4xl sm:text-5xl font-bold text-primary mb-5 leading-normal">
            You can Practice at any{" "}
            <span className="text-secondary">time convinent for you</span>
          </h2>
          <p className="text-tartinary md:text-lg mb-7">
            You can practice at any time convenient for you, allowing you to
            learn and grow at your own pace. Whether early in the morning or
            late at night, this flexibility ensures that you can fit your
            practice sessions into your schedule without pressure. This freedom
            empowers you to stay consistent, making it easier to achieve your
            goals and improve your skills on your terms.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
