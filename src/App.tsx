import Header from "./components/header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Product from "./components/Product";
import BestSellProduct from "./components/BestSellProduct";
import RecentlyOrder from "./components/RecentlyOrder";
import ReviewCustomer from "./components/ReviewCustomer"
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Category/>
      <Product/>
      <BestSellProduct/>
      <RecentlyOrder/>
      <ReviewCustomer/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;