import { useEffect, useRef } from "react";
import gsap from "gsap";

function App() {
  const visualRef = useRef(null);

  useEffect(() => {
    gsap.from(".headline span", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
    });

    gsap.from(".stat", {
      y: 25,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      delay: 0.5,
      ease: "power2.out",
    });

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight * 0.9), 1);

      gsap.to(visualRef.current, {
        y: progress * 220,
        x: progress * 80,
        rotate: progress * 12,
        scale: 1 - progress * 0.15,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <section className="hero">
        <nav>
          <div className="logo">ITZFIZZ<span>.</span></div>
          <div className="nav-pill">DIGITAL EXPERIENCE</div>
        </nav>

        <div className="hero-content">
          <div>
            <p className="eyebrow">WEB • DESIGN • TECHNOLOGY</p>

            <h1 className="headline">
              {"WELCOME ITZFIZZ".split("").map((letter, index) => (
                <span key={index}>{letter === " " ? "\u00A0" : letter}</span>
              ))}
            </h1>

            <p className="description">
              We build bold digital experiences that turn ideas into
              memorable brands and high-performing websites.
            </p>
          </div>

          <div className="visual-wrap">
            <div ref={visualRef} className="visual">
              <div className="visual-inner">
                <span>CREATE</span>
                <strong>∞</strong>
                <span>IMPACT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <strong>98%</strong>
            <span>Client satisfaction</span>
          </div>

          <div className="stat">
            <strong>85%</strong>
            <span>Performance growth</span>
          </div>

          <div className="stat">
            <strong>70+</strong>
            <span>Digital projects</span>
          </div>
        </div>

        <div className="scroll-text">SCROLL TO EXPLORE ↓</div>
      </section>

      <section className="next-section">
        <p>SCROLL-DRIVEN DIGITAL EXPERIENCES</p>
        <h2>Ideas that move<br />people forward.</h2>
      </section>
    </main>
  );
}

export default App;