import photo from "../assets/banner.svg";
import Banner from "../shared/Banner";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20" id="home" >
      <Banner
        banner={photo}
        heading={`Develop your skills  without diligence`}
        subheading="Developing skills without diligence results in shallow and
          unsustainable progress. While you might gain knowledge, without
          consistent effort, those skills wont have the strength or
          resilience needed to stand the test of time."
        btn1="Get Started"
        btn2="Discount"
      />
    </div>
  );
};

export default Home;
