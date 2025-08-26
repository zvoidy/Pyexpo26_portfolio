import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AboutPage from "../Pages/aboutpage"
import History from "./History";

const MainPage = () => {
  return (
    <div className="main-layout">
      <Header />
      <AboutPage />
      <History />
      <Footer />
    </div>
  );
};

export default MainPage;
