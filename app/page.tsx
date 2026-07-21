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
          <span className="wordmark__mark">C<span>/</span>T</span>
          <span className="wordmark__name">Claudia<br />Thirion</span>
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          <a href="#travessia">A travessia</a>
          <a href="#processo">O processo</a>
          <a href="#abordagens">Abordagens</a>
        </nav>

        <a className="header__cta magnetic" data-magnetic href="#convite">
          <span>Agendar conversa</span>
          <span className="header__cta-arrow" aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media" aria-hidden="true">
          <img
            src="/images/claudia-hero-wide.jpg"
            alt=""
            width="2560"
            height="1440"
            fetchPriority="high"
          />
        </div>
        <div className="hero__content">
          <p className="hero__credential" data-reveal>Claudia Thirion · Psicologia Intercultural</p>
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
            <span className="hero__cta-icon" aria-hidden="true">↘</span>
          </a>
        </div>
      </section>

      <div className="signal" aria-hidden="true">
        <div className="signal__track">
          {[0, 1].map((copy) => (
            <div className="signal__group" key={copy}>
              <span>TRANSIÇÃO</span><i>✳</i><span>MIGRAÇÃO</span><i>✳</i>
              <span>IDENTIDADE</span><i>✳</i><span>PERTENCIMENTO</span><i>✳</i>
            </div>
          ))}
        </div>
      </div>

      <section className="travessia" id="travessia" aria-labelledby="travessia-title">
        <div className="travessia__heading">
          <div className="travessia__label rail-label">A travessia</div>
          <p className="overline" data-reveal>O que escuto no consultório</p>
        </div>

        <div className="travessia__grid">
          <blockquote className="travessia__quote" data-reveal>
            <h2 id="travessia-title">Quero voltar a me sentir <strong>eu mesma.</strong></h2>
          </blockquote>

          <div className="travessia__context" data-reveal>
            <p className="travessia__echo">
              “Não sei por que estou tão cansada, irritada ou sem direção.”
            </p>
            <p className="travessia__explanation">
              Cada pessoa chega com uma história única. Por isso, meu atendimento
              não segue fórmulas prontas. Ele começa onde você está.
            </p>
            <a className="travessia__link" href="#processo">
              Entender o processo <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
      </section>

      <section className="manifesto" aria-labelledby="manifesto-title">
        <div className="manifesto__header">
          <p className="overline">Não é sobre se encaixar de novo</p>
          <span>Psicologia para movimentos reais</span>
        </div>
        <div className="manifesto__body">
          <h2 id="manifesto-title" data-reveal>
            Mudar não apaga
            <span>quem você é.</span>
          </h2>
          <div className="manifesto__side" data-reveal>
            <p>
              É sobre compreender a experiência, integrar a própria história e
              construir novas possibilidades de viver com mais equilíbrio,
              autonomia e sentido.
            </p>
            <a href="#processo">Conhecer o atendimento <span aria-hidden="true">↘</span></a>
          </div>
        </div>
        <div className="manifesto__principles" aria-label="Pilares do processo">
          <span>Compreender</span>
          <span>Integrar</span>
          <span>Reconstruir</span>
        </div>
      </section>

      <section className="process" id="processo" aria-labelledby="process-title">
        <div className="process__intro">
          <div className="rail-label light">Como acontece</div>
          <div className="process__intro-content">
            <p className="overline" data-reveal>O atendimento</p>
            <h2 id="process-title" data-reveal>
              Não existe protocolo
              <em>para ser você.</em>
            </h2>
          </div>
        </div>

        <ol className="process__chapters">
          {process.map((step) => (
            <li className="process__chapter" key={step.verb} data-reveal>
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

      <section className="methods" id="abordagens" aria-labelledby="methods-title">
        <div className="methods__heading">
          <div className="rail-label light">Abordagens</div>
          <div>
            <p className="overline" data-reveal>Uma integração precisa</p>
            <h2 id="methods-title" data-reveal>
              Método sem rigidez.<br />Profundidade sem pressa.
            </h2>
          </div>
        </div>

        <div className="methods__list">
          {methods.map((method) => (
            <article className="method" key={method.title} data-reveal>
              <span className="method__eyebrow">Abordagem integrada</span>
              <h3>{method.title}</h3>
              <p>{method.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="belonging" aria-labelledby="belonging-title">
        <div className="belonging__content">
          <p className="overline" data-reveal>Viver entre culturas também muda quem somos</p>
          <h2 id="belonging-title" data-reveal>
            Pertencer não é voltar.
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
            <a className="belonging__cta belonging__cta--primary magnetic" data-magnetic href="#processo">Conhecer o atendimento <span aria-hidden="true">↗</span></a>
            <a className="belonging__cta" href="#convite">Começar por aqui</a>
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
          <span>Claudia Thirion<br />Psicóloga intercultural</span>
        </div>

        <div className="belonging__ticker" aria-hidden="true">
          <span>PERTENCIMENTO</span>
        </div>
      </section>

      <section className="resolution" aria-labelledby="resolution-title">
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

      <section className="invitation" id="convite" aria-labelledby="invitation-title">
        <div className="invitation__eyebrow">
          <span>Seu próximo capítulo pode começar aqui</span>
          <span>Claudia Thirion · Psicologia Intercultural</span>
        </div>
        <h2 id="invitation-title" data-reveal>
          Vamos dar um novo
          <span>sentido à mudança?</span>
        </h2>
        <div className="invitation__actions" data-reveal>
          <a className="mega-cta magnetic" data-magnetic href="#processo">
            <span>Conhecer o processo</span>
            <span aria-hidden="true">↗</span>
          </a>
          <p>Um primeiro passo para compreender seu momento, sua história e o caminho possível.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__top">
          <a className="wordmark wordmark--footer" href="#inicio" aria-label="Claudia Thirion, voltar ao início">
            <span className="wordmark__mark">C<span>/</span>T</span>
            <span className="wordmark__name">Claudia<br />Thirion</span>
          </a>
          <p>Psicologia para quem vive<br />entre mudanças e mundos.</p>
          <a className="footer__up" href="#inicio">Voltar ao topo <span aria-hidden="true">↑</span></a>
        </div>

        <div className="footer__signature" aria-label="Claudia Thirion">
          <span>CLAUDIA</span>
          <span>THIRION</span>
        </div>

        <div className="footer__bottom">
          <span>Psicologia Intercultural · EMDR · Brainspotting</span>
          <span>© {new Date().getFullYear()} Claudia Thirion</span>
          <span>Feito para atravessar fronteiras.</span>
        </div>
      </footer>
    </main>
  );
}
