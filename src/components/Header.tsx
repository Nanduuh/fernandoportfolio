import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const navItems = [
  ["Áreas", "#areas"],
  ["Tecnologias", "#tecnologias"],
  ["Projetos", "#projetos"],
  ["Experiência", "#experiencia"],
  ["Contato", "#contato"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const sync = () => setScrolled(window.scrollY > 20);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, [light]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#inicio" aria-label="Voltar para o início">
        <span>FS</span>
        <strong>Fernando.dev</strong>
      </a>

      <nav className={`main-nav ${open ? "is-open" : ""}`}>
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="icon-button"
          type="button"
          onClick={() => setLight((value) => !value)}
          aria-label={light ? "Ativar dark mode" : "Ativar light mode"}
          title={light ? "Dark mode" : "Light mode"}
        >
          {light ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <button
          className="menu-button"
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
