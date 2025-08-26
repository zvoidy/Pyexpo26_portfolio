import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AboutPage from "../Pages/aboutpage"

const MainPage = () => {
  return (
    <div className="main-layout">
      <Header />
      <AboutPage />
      <main>
        <h1>Welcome to My Portfolio</h1>
        <p>This is the main layout. Components will be added soon.</p>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
