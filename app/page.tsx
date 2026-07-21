const approaches = [
  {
    number: "01",
    title: "Psicologia Intercultural",
    text: "Um olhar atento para a forma como cultura, pertencimento e identidade atravessam a sua experiência.",
  },
  {
    number: "02",
    title: "EMDR",
    text: "Quando indicado, favorece o processamento de experiências emocionalmente marcantes e a autorregulação.",
  },
  {
    number: "03",
    title: "Brainspotting",
    text: "Uma abordagem que apoia o acesso e o processamento de experiências profundas com cuidado e segurança.",
  },
];

const processSteps = [
  {
    number: "I",
    title: "Escuta",
    text: "Começamos pela sua história, pelo que está acontecendo agora e pelo que você deseja transformar.",
  },
  {
    number: "II",
    title: "Compreensão",
    text: "Observamos contexto cultural, relações, trabalho, fatores de estresse e recursos emocionais disponíveis.",
  },
  {
    number: "III",
    title: "Plano terapêutico",
    text: "Construímos um caminho individualizado, integrando as abordagens mais adequadas ao seu momento.",
  },
  {
    number: "IV",
    title: "Integração",
    text: "Fortalecemos autonomia, flexibilidade e novas possibilidades de viver com equilíbrio e autenticidade.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Claudia Thirion — início">
          <span>CT</span>
          <span className="brand-name">Claudia Thirion</span>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#atendimento">Atendimento</a>
          <a href="#abordagens">Abordagens</a>
          <a href="#sobre">Para quem</a>
        </nav>

        <a className="header-link" href="#atendimento">
          Conheça o processo <span aria-hidden="true">↘</span>
        </a>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-topline">
          <span>Psicologia intercultural</span>
          <span className="line" aria-hidden="true" />
          <span className="spark" aria-hidden="true">✦</span>
          <span>Transições • pertencimento • sentido</span>
        </div>

        <h1 id="hero-title" aria-label="Claudia Thirion">
          <span>Claudia</span>
          <span>Thirion</span>
        </h1>

        <div className="hero-copy">
          <p className="eyebrow">Psicologia para grandes mudanças</p>
          <p>
            Acompanho pessoas que vivem grandes transições de vida — pessoais,
            profissionais e interculturais.
          </p>
        </div>

        <div className="hero-portrait" aria-hidden="true">
          <div className="portrait-halo" />
          <img
            src="/images/claudia-retrato.png"
            alt=""
            width="1024"
            height="1536"
            fetchPriority="high"
          />
        </div>

        <a className="round-link" href="#atendimento" aria-label="Ir para como funciona o atendimento">
          <span aria-hidden="true">↓</span>
          Como funciona
        </a>

        <p className="hero-note">
          Mudanças podem abrir caminhos de crescimento, pertencimento e sentido.
        </p>
      </section>

      <section className="intro" aria-labelledby="intro-title">
        <div className="section-kicker light">
          <span>Uma escuta inteira</span>
          <span aria-hidden="true">✦</span>
          <span>Um caminho singular</span>
        </div>

        <div className="intro-grid">
          <div className="intro-title-wrap">
            <p className="eyebrow">O ponto de partida</p>
            <h2 id="intro-title">
              Voltar a se sentir
              <em> você mesma.</em>
            </h2>
          </div>

          <div className="intro-quote">
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>
              Muitas pessoas chegam dizendo: “Quero voltar a me sentir eu mesma.”
              Ou: “Não sei por que estou tão cansada, irritada ou sem direção.”
            </p>
          </div>
        </div>

        <div className="intro-cards">
          <article>
            <span>História</span>
            <p>O que você viveu e o que trouxe você até aqui.</p>
          </article>
          <article className="image-card">
            <img
              src="/images/claudia-consultorio.png"
              alt="Claudia Thirion em seu espaço de atendimento"
              width="1024"
              height="1536"
              loading="lazy"
            />
          </article>
          <article>
            <span>Contexto</span>
            <p>As relações, culturas e mudanças que atravessam seu momento.</p>
          </article>
          <article>
            <span>Recursos</span>
            <p>O que já existe em você e pode ser fortalecido no processo.</p>
          </article>
        </div>
      </section>

      <section className="care" id="atendimento" aria-labelledby="care-title">
        <div className="care-heading">
          <p className="eyebrow">Como acontece o meu atendimento?</p>
          <h2 id="care-title">
            Sua história não cabe em uma
            <em> fórmula pronta.</em>
          </h2>
        </div>

        <div className="care-body">
          <p className="lead">
            Cada pessoa chega com uma história única. Por isso, meu atendimento
            começa com presença, curiosidade e uma compreensão cuidadosa de quem
            você é.
          </p>
          <p>
            Começamos com uma escuta atenta e uma avaliação da sua história de
            vida e profissional, do contexto cultural, dos relacionamentos, dos
            fatores de estresse e dos recursos emocionais disponíveis.
          </p>
          <p>
            A partir dessa compreensão, elabora-se um plano terapêutico
            individualizado, integrando a Psicologia Intercultural, EMDR e
            Brainspotting, quando indicados.
          </p>
        </div>

        <ol className="process-list" aria-label="Etapas do processo terapêutico">
          {processSteps.map((step) => (
            <li key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="approaches" id="abordagens" aria-labelledby="approaches-title">
        <div className="section-kicker light">
          <span>Presença e técnica</span>
          <span aria-hidden="true">✦</span>
          <span>Cuidado individualizado</span>
        </div>

        <div className="approaches-head">
          <p className="eyebrow">Abordagens integradas</p>
          <h2 id="approaches-title">
            Recursos para processar,
            <em> integrar e seguir.</em>
          </h2>
        </div>

        <div className="approach-grid">
          {approaches.map((approach) => (
            <article key={approach.number}>
              <span>{approach.number}</span>
              <h3>{approach.title}</h3>
              <p>{approach.text}</p>
            </article>
          ))}
        </div>

        <p className="approaches-summary">
          O trabalho busca ampliar a capacidade de autorregulação, fortalecer
          recursos internos, promover flexibilidade psicológica e facilitar a
          adaptação às transições de vida e aos desafios da experiência intercultural.
        </p>
      </section>

      <section className="belonging" id="sobre" aria-labelledby="belonging-title">
        <div className="belonging-image">
          <span className="image-caption">Um espaço ético, seguro e acolhedor</span>
          <img
            src="/images/claudia-pausa.png"
            alt="Claudia Thirion em um momento de pausa e reflexão"
            width="1024"
            height="1536"
            loading="lazy"
          />
        </div>

        <div className="belonging-copy">
          <p className="eyebrow">Para quem vive entre mudanças</p>
          <h2 id="belonging-title">
            Integrar a sua história.
            <em> Reconstruir pertencimento.</em>
          </h2>
          <p>
            Ao longo do processo, investigamos as mudanças na identidade, o
            pertencimento, os lutos migratórios e os vínculos afetivos e
            profissionais em seus diferentes contextos culturais — aspectos que
            podem exercer impacto profundo sobre a saúde mental.
          </p>
          <p>
            Se você é imigrante, expatriada ou está vivendo uma grande transição
            de vida, este é um espaço para compreender sua experiência, integrar
            sua história e construir novas possibilidades de viver com mais
            equilíbrio, autonomia e sentido.
          </p>

          <div className="audience-tags" aria-label="Públicos atendidos">
            <span>Imigrantes</span>
            <span>Expatriadas</span>
            <span>Transições de vida</span>
          </div>
        </div>
      </section>

      <section className="finale" aria-labelledby="finale-title">
        <p className="eyebrow">Além do alívio dos sintomas</p>
        <h2 id="finale-title">
          Viver a nova etapa com mais
          <em> clareza e autenticidade.</em>
        </h2>
        <p>
          O objetivo final é favorecer uma adaptação mais saudável, ampliar a
          capacidade de enfrentar desafios e permitir que você construa novas
          possibilidades com mais equilíbrio e autonomia.
        </p>
        <a href="#inicio">
          Recomeçar também é voltar para si <span aria-hidden="true">↑</span>
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio" aria-label="Claudia Thirion — voltar ao início">
          <span>CT</span>
          <span className="brand-name">Claudia Thirion</span>
        </a>
        <p>Psicologia intercultural para transições de vida.</p>
        <p>© {new Date().getFullYear()} Claudia Thirion</p>
      </footer>
    </main>
  );
}
