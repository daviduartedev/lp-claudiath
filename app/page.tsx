import ScrollExperience from "./scroll-experience";

const process = [
  {
    verb: "Escutar",
    title: "Antes de qualquer método, existe uma história.",
    text: "Começamos com uma escuta atenta da sua história de vida e profissional: do que mudou, do que permaneceu e do que ainda não encontrou nome.",
  },
  {
    verb: "Mapear",
    title: "O contexto também fala.",
    text: "Observamos o contexto cultural, os relacionamentos, os fatores de estresse e os recursos emocionais disponíveis. Nada é analisado fora da vida real.",
  },
  {
    verb: "Processar",
    title: "Técnica a serviço da sua singularidade.",
    text: "A partir dessa compreensão, construímos um plano terapêutico individualizado, integrando Psicologia Intercultural, EMDR e Brainspotting quando indicados.",
  },
  {
    verb: "Integrar",
    title: "Não voltar a ser quem era. Voltar a ser sua.",
    text: "O processo fortalece recursos internos, autorregulação e flexibilidade psicológica para que a mudança deixe de ser apenas ruptura e possa ganhar sentido.",
  },
];

const methods = [
  {
    title: "Psicologia Intercultural",
    text: "Para compreender o que acontece quando identidade, cultura e pertencimento deixam de ocupar o mesmo lugar.",
  },
  {
    title: "EMDR",
    text: "Para favorecer o processamento de experiências emocionalmente marcantes e ampliar a capacidade de autorregulação.",
  },
  {
    title: "Brainspotting",
    text: "Para acessar experiências profundas com presença, segurança e respeito ao ritmo do seu sistema emocional.",
  },
];

export default function Home() {
  return (
    <main id="inicio">
      <ScrollExperience />

      <header className="header" id="site-header">
        <a className="wordmark" href="#inicio" aria-label="Claudia Thirion, início">
          <span className="wordmark__mark"><img src="/images/ct-monogram.png" alt="" width="806" height="697" /></span>
          <span className="wordmark__name">Claudia<br />Thirion</span>
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          <a href="#processo">O processo</a>
          <a href="#abordagens">Abordagens</a>
        </nav>

        <a className="header__cta magnetic" data-magnetic href="#convite">
          <span>Agendar conversa</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title" data-motion-section>
        <div className="hero__media" aria-hidden="true">
          <img
            src="/images/claudia-hero-main.png"
            alt=""
            width="1672"
            height="941"
            fetchPriority="high"
          />
        </div>
        <div className="hero__content">
          <h1 id="hero-title">
            <span className="hero__line" data-hero-line>Mudar pode</span>
            <span className="hero__line" data-hero-line>ser um novo</span>
            <span className="hero__line hero__line--accent" data-hero-line>começo.</span>
          </h1>
          <p className="hero__copy" data-reveal>
            Psicologia para atravessar grandes transições de vida com mais
            clareza, pertencimento e sentido.
          </p>
          <a className="hero__cta magnetic" data-magnetic href="#processo">
            <span>Conhecer o atendimento</span>
          </a>
        </div>
      </section>

      <div className="signal" aria-hidden="true">
        <div className="signal__track">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((copy) => (
            <div className="signal__group" key={copy}>
              <span>PERTENCIMENTO</span><i>✳</i><span>TRANSIÇÃO</span><i>✳</i>
              <span>MIGRAÇÃO</span><i>✳</i><span>IDENTIDADE</span><i>✳</i>
            </div>
          ))}
        </div>
      </div>

      <section className="travessia" id="travessia" aria-labelledby="travessia-title" data-motion-section>
        <div className="travessia__intro" data-reveal>
          <p>O que escuto no consultório</p>
        </div>

        <div className="travessia__stage">
          <p className="travessia__kicker" data-reveal>Quando a vida muda por fora</p>
          <h2 id="travessia-title" data-reveal>
            “Quero voltar a me sentir <em>eu mesma.</em>”
          </h2>
          <div className="travessia__notes">
            <p data-reveal>“Não sei por que estou tão cansada, irritada ou sem direção.”</p>
            <p data-reveal>
              Cada pessoa chega com uma história única. Por isso, meu atendimento
              começa pela escuta, sem fórmulas prontas.
            </p>
          </div>
          <a className="travessia__link" href="#processo" data-reveal>
            Conhecer o atendimento
          </a>
        </div>
      </section>

      <section className="manifesto" id="integracao" aria-labelledby="manifesto-title" data-motion-section>
        <div className="manifesto__index" aria-hidden="true">
          <span>02</span>
          <span>Integração</span>
        </div>
        <div className="manifesto__shell">
          <div className="manifesto__heading">
            <p className="overline" data-reveal>Não é sobre se encaixar de novo</p>
            <h2 id="manifesto-title" data-reveal>
              Você não precisa voltar a caber.
              <span>Pode criar um lugar novo.</span>
            </h2>
            <p className="manifesto__intro" data-reveal>
              Mudanças profundas não pedem que você apague versões anteriores.
              Pedem espaço para reconhecer o que ficou, o que mudou e o que
              começa a nascer.
            </p>
          </div>

          <div className="manifesto__cards">
            <article className="manifesto-card manifesto-card--history" data-reveal data-scroll-activate data-tilt tabIndex={0}>
              <span className="manifesto-card__number">01</span>
              <div>
                <p>O que ficou</p>
                <h3>Sua história continua com você.</h3>
                <span>Ela não precisa ser apagada para que a vida siga.</span>
              </div>
            </article>

            <article className="manifesto-card manifesto-card--change" data-reveal data-scroll-activate data-tilt tabIndex={0}>
              <span className="manifesto-card__number">02</span>
              <div>
                <p>O que mudou</p>
                <h3>Novos contextos também transformam.</h3>
                <span>Identidade, vínculos e a própria forma de pertencer.</span>
              </div>
            </article>

            <article className="manifesto-card manifesto-card--future" data-reveal data-scroll-activate data-tilt tabIndex={0}>
              <span className="manifesto-card__number">03</span>
              <div>
                <p>O que pode nascer</p>
                <h3>Um jeito mais inteiro de seguir.</h3>
                <span>Com tempo, presença e espaço para ser quem você é agora.</span>
              </div>
            </article>
          </div>

          <div className="manifesto__actions" data-reveal>
            <a className="magnetic" data-magnetic href="#processo">
              Conhecer o atendimento
            </a>
            <span aria-hidden="true">✳</span>
          </div>
        </div>
      </section>

      <section className="process" id="processo" aria-labelledby="process-title" data-motion-section>
        <div className="process__intro">
          <div className="process__intro-labels" data-reveal>
            <span>Como acontece</span>
            <i aria-hidden="true">✳</i>
            <span>O atendimento</span>
          </div>
          <div className="process__intro-content">
            <h2 id="process-title" data-reveal>
              Não existe protocolo <em>para ser você.</em>
            </h2>
          </div>
        </div>

        <ol className="process__chapters">
          {process.map((step) => (
            <li className="process__chapter" key={step.verb} data-reveal data-scroll-activate>
              <div className="process__verb">{step.verb}</div>
              <div className="process__body">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              <span className="process__plus" aria-hidden="true">＋</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="methods" id="abordagens" aria-labelledby="methods-title" data-motion-section>
        <span
          className="section-asterisk section-asterisk--methods"
          data-scroll-asterisk
          data-speed="0.36"
          data-phase="2.4"
          aria-hidden="true"
        >
          ✳
        </span>
        <div className="methods__heading">
          <div className="rail-label light">Abordagens</div>
          <div>
            <p className="overline" data-reveal>Uma integração precisa</p>
            <h2 id="methods-title" data-reveal>
              Técnica com sensibilidade.<br />Profundidade no seu tempo.
            </h2>
          </div>
        </div>

        <div className="methods__list">
          {methods.map((method) => (
            <article className="method" key={method.title} data-reveal data-scroll-activate data-tilt tabIndex={0}>
              <span className="method__eyebrow">Abordagem integrada</span>
              <h3>{method.title}</h3>
              <p>{method.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="belonging" aria-labelledby="belonging-title" data-motion-section>
        <div className="belonging__content">
          <p className="overline" data-reveal>Viver entre culturas também muda quem somos</p>
          <h2 id="belonging-title" data-reveal>
            <span>Pertencer não é voltar.</span>
            <em>É poder chegar inteira.</em>
          </h2>
          <div className="belonging__columns" data-reveal>
            <p>
              Ao longo do processo, investigamos as mudanças na identidade, o
              pertencimento, os lutos migratórios e os vínculos afetivos e
              profissionais em seus diferentes contextos culturais.
            </p>
            <p>
              Se você é imigrante, expatriada ou está vivendo uma grande
              transição de vida, este é um espaço ético, seguro e acolhedor para
              compreender a sua experiência sem reduzir quem você é a um sintoma.
            </p>
          </div>
          <div className="belonging__actions" data-reveal>
            <a className="belonging__cta belonging__cta--primary magnetic" data-magnetic href="#processo">Conhecer o atendimento</a>
          </div>
        </div>

        <div className="belonging__media" data-reveal>
          <img
            src="/images/claudia-pausa.png"
            alt="Claudia Thirion em seu espaço de atendimento"
            width="1024"
            height="1536"
            loading="lazy"
          />
        </div>

        <div className="belonging__ticker" aria-hidden="true">
          <span>PERTENCIMENTO</span>
        </div>
      </section>

      <section className="resolution" aria-labelledby="resolution-title" data-motion-section>
        <p className="overline" data-reveal>Para além do alívio</p>
        <h2 id="resolution-title" data-reveal>
          Não apenas aliviar sintomas.
          <span>Ampliar possibilidades.</span>
        </h2>
        <p className="resolution__copy" data-reveal>
          O objetivo final é favorecer uma adaptação mais saudável, reconstruir
          o senso de pertencimento e permitir que você viva esta nova etapa com
          mais equilíbrio, clareza e autenticidade.
        </p>
      </section>

      <section className="invitation" id="convite" aria-labelledby="invitation-title" data-motion-section>
        <div className="invitation__content">
          <div className="invitation__eyebrow" data-reveal>
            <span>Quando fizer sentido para você</span>
            <span aria-hidden="true">✳</span>
          </div>
          <h2 id="invitation-title" data-reveal>
            Você pode chegar
            <span>como está.</span>
          </h2>
          <p className="invitation__copy" data-reveal>
            A primeira conversa não exige certezas. É um espaço para contar o
            que está acontecendo, entender como posso acompanhar você e sentir,
            com calma, se este caminho faz sentido.
          </p>
          <div className="invitation__actions" data-reveal>
            <a
              className="mega-cta magnetic"
              data-magnetic
              href="https://wa.me/?text=Ol%C3%A1%2C%20Claudia!%20Gostaria%20de%20agendar%20uma%20primeira%20conversa."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Agendar uma conversa</span>
            </a>
            <p>Sem fórmulas prontas.<br />No seu ritmo.</p>
          </div>
        </div>

        <div className="invitation__media" data-reveal>
          <div className="invitation__photo">
            <img
              src="/images/claudia-consultorio.png"
              alt="Claudia Thirion em seu consultório"
              width="1024"
              height="1448"
              loading="lazy"
            />
          </div>
          <div className="invitation__media-note" aria-hidden="true">
            <span>Presença</span>
            <i>✳</i>
            <span>Escuta</span>
            <i>✳</i>
            <span>Cuidado</span>
          </div>
        </div>
      </section>

      <a
        className="whatsapp-float"
        href="https://wa.me/?text=Ol%C3%A1%2C%20Claudia!%20Gostaria%20de%20conhecer%20melhor%20o%20atendimento."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com Claudia pelo WhatsApp"
      >
        <span className="whatsapp-float__label">WhatsApp</span>
        <span className="whatsapp-float__icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" role="img">
            <path d="M16.03 3.2A12.67 12.67 0 0 0 5.2 22.43L3.5 28.8l6.52-1.67A12.7 12.7 0 1 0 16.03 3.2Zm0 22.98c-2.05 0-4.05-.55-5.8-1.58l-.42-.25-3.87.99 1.03-3.76-.27-.43a10.24 10.24 0 1 1 9.33 5.03Zm5.62-7.67c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.7.16-.2.3-.8 1-.98 1.2-.18.2-.36.23-.67.08-.3-.15-1.3-.48-2.47-1.53a9.27 9.27 0 0 1-1.7-2.12c-.18-.3-.02-.47.13-.62.14-.14.31-.36.46-.54.16-.18.21-.31.31-.52.1-.2.05-.38-.02-.54-.08-.15-.7-1.67-.95-2.3-.25-.6-.5-.52-.7-.53h-.58c-.2 0-.54.08-.82.39-.28.3-1.08 1.05-1.08 2.56s1.1 2.98 1.26 3.18c.15.2 2.17 3.31 5.25 4.64.74.32 1.31.5 1.76.65.74.23 1.4.2 1.93.12.59-.09 1.82-.75 2.08-1.46.26-.72.26-1.34.18-1.47-.07-.12-.28-.2-.59-.36Z" />
          </svg>
        </span>
      </a>

      <footer className="footer" id="rodape" data-motion-section>
        <div className="footer__topline">
          <span>Claudia Thirion</span>
          <span>Psicologia Intercultural · EMDR · Brainspotting</span>
        </div>

        <div className="footer__main">
          <div className="footer__brand">
            <a className="wordmark wordmark--footer" href="#inicio" aria-label="Claudia Thirion, voltar ao início">
              <span className="wordmark__mark"><img src="/images/ct-monogram.png" alt="" width="806" height="697" /></span>
              <span className="wordmark__name">Claudia<br />Thirion</span>
            </a>
            <p className="footer__statement">Psicologia para quem vive entre mudanças e mundos.</p>
          </div>

          <div className="footer__conversation">
            <p>Quando fizer sentido para você</p>
            <h2>Há um caminho possível para atravessar.</h2>
            <a className="footer__contact magnetic" data-magnetic href="#convite">
              Agendar conversa
            </a>
          </div>

          <div className="footer__directory">
            <nav className="footer__nav" aria-label="Navegação do rodapé">
              <span>Explorar</span>
              <a href="#inicio">Início</a>
              <a href="#processo">O processo</a>
              <a href="#abordagens">Abordagens</a>
            </nav>
            <div className="footer__services">
              <span>Atendimento</span>
              <p>Psicologia Intercultural</p>
              <p>EMDR</p>
              <p>Brainspotting</p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Claudia Thirion</span>
          <span>Psicologia Intercultural · EMDR · Brainspotting</span>
          <a className="footer__up" href="#inicio">Voltar ao topo <span aria-hidden="true">↑</span></a>
        </div>

        <a
          className="footer__credit"
          href="https://utopia.app.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Site desenvolvido por</span>
          <strong>Utopia</strong>
          <span className="footer__credit-arrow" aria-hidden="true">↗</span>
        </a>
      </footer>
    </main>
  );
}
