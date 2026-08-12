import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { profile } from "../config/profile";

const contacts = [
  ["WhatsApp", profile.whatsapp, MessageCircle],
  ["E-mail", `mailto:${profile.email}`, Mail],
  ["LinkedIn", profile.linkedin, Linkedin],
  ["GitHub", profile.github, Github],
  ["Telefone", `tel:${profile.phone.replace(/\D/g, "")}`, Phone],
];

export function Contact() {
  return (
    <section className="section scene contact-section" id="contato">
      <Reveal className="contact-shell">
        <p className="scene-label">Cena 09 / Contato</p>
        <h2>Chegou até aqui?</h2>
        <p>Então talvez a gente devesse conversar.</p>

        <div className="contact-grid">
          {contacts.map(([label, href, Icon]) => (
            <a key={label as string} href={href as string} target={String(href).startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <Icon size={22} />
              <span>{label as string}</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
