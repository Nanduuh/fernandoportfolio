import { Header } from "./components/Header";
import { CustomCursor } from "./components/CustomCursor";
import { LoadingScreen } from "./components/LoadingScreen";
import { Hero } from "./sections/Hero";
import { Areas } from "./sections/Areas";
import { Technologies } from "./sections/Technologies";
import { Projects } from "./sections/Projects";
import { Process } from "./sections/Process";
import { Experience } from "./sections/Experience";
import { About } from "./sections/About";
import { Github } from "./sections/Github";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Areas />
        <Technologies />
        <Projects />
        <Process />
        <Experience />
        <About />
        <Github />
        <Contact />
      </main>
    </>
  );
}
