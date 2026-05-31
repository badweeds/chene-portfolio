import "../styles/fonts.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { References } from "./components/References";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        background: "#faf9f6",
      }}
    >
      <style>{`
        html { scroll-behavior: smooth; }
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        ::selection { background: #111110; color: #faf9f6; }
      `}</style>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <References />
      </main>
    </div>
  );
}
