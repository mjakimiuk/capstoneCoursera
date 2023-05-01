import { Fragment } from "react";
import HomeComponent from "../../components/home/home.component";
import Highlights from "../../components/highlights/highlights.component";
import Testimonials from "../../components/testimonials/testimonials.component";
import About from "../../components/about/about.component";

const Home = () => {
  return (
    <Fragment>
      <main>
        <HomeComponent />
        <Highlights />
        <Testimonials />
        <About />
      </main>
    </Fragment>
  );
};

export default Home;
