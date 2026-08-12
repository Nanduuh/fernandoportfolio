import { useEffect, useState } from "react";
import { Github as GithubIcon, Star } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { profile } from "../config/profile";
import { featuredRepos } from "../data/github";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
};

export function Github() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=12`)
      .then((response) => {
        if (!response.ok) throw new Error("GitHub indisponível");
        return response.json() as Promise<Repo[]>;
      })
      .then((data) => setRepos(data.filter((repo) => !repo.name.startsWith("."))))
      .catch(() => setFailed(true));
  }, []);

  const repoStats = new Map(repos.map((repo) => [repo.name, repo]));

  return (
    <section className="section scene github-section" id="github">
      <Reveal className="section-heading split-heading">
        <div>
          <p className="scene-label">Cena 08 / GitHub</p>
          <h2>Quer ver o código?</h2>
        </div>
        <a className="button ghost" href={profile.github} target="_blank" rel="noreferrer">
          <GithubIcon size={18} /> Abrir GitHub
        </a>
      </Reveal>

      {failed ? (
        <Reveal className="github-fallback">
          Não consegui carregar dados ao vivo agora. Os cards abaixo continuam apontando para os repositórios reais.
        </Reveal>
      ) : null}

      <div className="repo-grid">
        {featuredRepos.map((repo, index) => {
          const live = repoStats.get(repo.name);

          return (
            <Reveal key={repo.name} delay={index * 0.04}>
              <a className="repo-card" href={repo.url} target="_blank" rel="noreferrer">
                <span>{repo.tag}</span>
                <strong>{repo.name}</strong>
                <p>{repo.description}</p>
                <div className="repo-meta">
                  <small>{live?.language ?? repo.language}</small>
                  <small>
                    <Star size={14} /> {live?.stargazers_count ?? 0}
                  </small>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
