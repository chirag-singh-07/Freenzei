import bannerImg from "../assets/bgImg.png";
import Banner from "../shared/Banner";

const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
      <Banner
        banner={bannerImg}
        heading="Each student share their discount code for friends"
        subheading={`Each student can share their unique discount code with friends allowing them  to enjoy exclusive savings on their next purchase It s a simple way to spread the benefits and help everyone save more`}
        btn1="I have a code"
        btn2="I don't have code"
      />
    </div>
  );
};

export default Newsletter;
