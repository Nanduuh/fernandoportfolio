import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "../config/profile";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.18], [0, 80]);
  const codeY = useTransform(scrollYProgress, [0, 0.18], [0, -80]);

  return (
    <section className="hero scene" id="inicio">
      <motion.div className="hero-copy" style={{ y: codeY }}>
        <p className="scene-label">Cena 01 / Quem é esse cara?</p>
        <h1>
          Oi, eu sou o <span>Fernando.</span>
        </h1>
        <p className="hero-subtitle">
          Eu transformo ideias em código, automações e interfaces que fazem sentido.
          Às vezes funciona de primeira. Às vezes eu abro o DevTools.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#projetos">
            Ver projetos
          </a>
          <a className="button ghost" href={profile.resume} download>
            <Download size={18} /> Baixar currículo
          </a>
        </div>

        <div className="social-row" aria-label="Links sociais">
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <MessageCircle size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="E-mail">
            <Mail size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
        </div>
      </motion.div>

      <motion.div className="hero-visual" style={{ y: imageY }}>
        <div className="photo-frame">
          <img src={profile.photo} alt="Fernando Soares" />
          <div className="photo-hud hud-one">HTML • CSS • JS</div>
          <div className="photo-hud hud-two">VBA automation</div>
          <div className="photo-hud hud-three">status: aprendendo sempre</div>
        </div>
        <div className="terminal-card">
          <span>fernando@portfolio:~$</span>
          <strong>npm run criar-coisa-boa</strong>
          <p>build concluído com personalidade</p>
        </div>
      </motion.div>

      <a className="scroll-hint" href="#areas">
        Role para descobrir
      </a>
    </section>
  );
}
