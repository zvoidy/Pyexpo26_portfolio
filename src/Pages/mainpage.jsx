import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AboutPage from "../Pages/aboutpage"
import History from "./History";
import Promo from "../Components/Promo";
import Event from "./Event";

const MainPage = () => {
  return (
    <div className="main-layout">
      <Header />
      <AboutPage />
      <History />
      <Promo />
      <Event />
      <Footer />
    </div>
  );
};

export default MainPage;
