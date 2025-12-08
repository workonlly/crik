import Image from "next/image";
import Navbar from "./components/navbar";
import Herosections from "./components/herosections";
import About from "./components/about";
import Choose from "./components/choose";
import Videoplay from "./components/videoplay";
import Joining from "./components/joining";
import Members from "./components/members";
import Testimonial from "./components/testimonial";
import Faq from "./components/faq";
import Blog from "./components/blog";
import Footer from "./components/footer";

export default function Home() {
  return (
   <div >
    <Navbar ></Navbar>
    <Herosections></Herosections>
    <About></About>
    <Choose></Choose>
    <Videoplay></Videoplay>
    <Joining></Joining>
    <Members></Members>
    <Testimonial></Testimonial>
    <Faq></Faq>
    <Blog></Blog>
    <footer><Footer></Footer></footer>
   </div>
  );
}
