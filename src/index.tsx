import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/home/about/About";
import Projects from "./components/home/projects/Projects";
import Social from "./components/social/Social";
import Body from "./components/body/Body";

const MyApp = () => {
  return (
    <>
    <Header />
    <Body />
    <Footer />
    </>
  );
};

ReactDOM.render(<MyApp></MyApp>, document.querySelector('#root'))

export default MyApp;
