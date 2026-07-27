import ScrollExperience from "./scroll-experience";
import WhatsAppLeadForm from "./whatsapp-lead-form";

const process = [
  {
    verb: "Escutar",
    title: "Começamos pelo que mudou na vida real.",
    text: "A escuta organiza sua história recente: o que foi rompido, o que permaneceu e o que ainda não encontrou nome.",
  },
  {
    verb: "Mapear",
    title: "Identidade, vínculos e cultura entram juntos.",
    text: "O contexto cultural, os relacionamentos, o estresse e os recursos emocionais são observados como parte da mesma experiência.",
  },
  {
    verb: "Processar",
    title: "A técnica entra quando ajuda a avançar.",
    text: "A partir dessa compreensão, integramos Psicologia Intercultural, EMDR e Brainspotting quando fizer sentido para o seu processo.",
  },
  {
    verb: "Integrar",
    title: "A mudança deixa de ser apenas ruptura.",
    text: "O objetivo é fortalecer autorregulação, clareza e pertencimento para que esta etapa possa ser vivida com mais presença.",
  },
];

const methods = [
  {
    title: "Psicologia Intercultural",
    text: "Para compreender como cultura, identidade e pertencimento se reorganizam quando a vida muda de lugar.",
  },
  {
    title: "EMDR",
    text: "Para favorecer o processamento de experiências marcantes e reduzir a carga emocional que ficou presa no corpo.",
  },
  {
    title: "Brainspotting",
    text: "Para acessar conteúdos profundos com presença, segurança e respeito ao ritmo do seu sistema emocional.",
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
          <a href="#travessia">Para quem</a>
          <a href="#processo">O processo</a>
          <a href="#abordagens">Abordagens</a>
          <a href="#formulario">Contato</a>
        </nav>

        <a className="header__cta magnetic" data-magnetic href="#formulario">
          <span>Agendar conversa</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title" data-motion-section>
        <div className="hero__media" aria-hidden="true">
          <img
            src="/images/hero-premium-claudia-4k.webp"
            alt=""
            width="3840"
            height="2160"
            fetchPriority="high"
          />
        </div>
        <div className="hero__content">
          <h1 id="hero-title">
            <span className="hero__line" data-hero-line><span className="hero__accent-word">Mudar</span> pode</span>
            <span className="hero__line" data-hero-line>ser um novo</span>
            <span className="hero__line hero__line--accent" data-hero-line>começo.</span>
          </h1>
          <p className="hero__copy" data-reveal>
            Psicologia intercultural para atravessar mudanças de vida,
            migração e transições identitárias com mais clareza e pertencimento.
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
            “Eu mudei de lugar, mas ainda estou tentando me encontrar.”
          </h2>
          <div className="travessia__notes">
            <p data-reveal>Às vezes a mudança chega como cansaço, irritação, saudade, culpa ou uma sensação difícil de nomear.</p>
            <p data-reveal>
              Antes de qualquer técnica, existe uma história. O atendimento
              começa por escutar o que aconteceu com você, e não apenas o sintoma.
            </p>
          </div>
          <a className="travessia__link" href="#processo" data-reveal>
            Conhecer o atendimento
          </a>
        </div>
      </section>

      <section className="belonging" aria-labelledby="belonging-title" data-motion-section>
        <div className="belonging__inner">
          <div className="belonging__content">
            <p className="overline" data-reveal>Viver entre culturas também muda quem somos</p>
            <h2 id="belonging-title" data-reveal>
              <span>Pertencer não é voltar ao que era.</span>
              <em>É conseguir chegar inteira.</em>
            </h2>
            <div className="belonging__columns" data-reveal>
              <p>
                Grandes mudanças reorganizam identidade, pertencimento, lutos
                migratórios e vínculos afetivos ou profissionais.
              </p>
              <p>
                Se você é imigrante, expatriada ou atravessa uma transição de vida,
                este é um espaço para compreender sua experiência sem reduzir quem
                você é a um sintoma.
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
        </div>

        <div className="belonging__ticker" aria-hidden="true">
          <span>PERTENCER</span>
        </div>
      </section>

      <section className="manifesto" id="integracao" aria-labelledby="manifesto-title" data-motion-section>
        <div className="manifesto__shell">
          <div className="manifesto__heading">
            <p className="overline" data-reveal>Não é sobre se encaixar de novo</p>
            <h2 id="manifesto-title" data-reveal>
              A travessia não pede que você se apague.
              <span>Ela pede integração.</span>
            </h2>
            <p className="manifesto__intro" data-reveal>
              O processo ajuda a reconhecer o que ficou, o que mudou e o que
              pode nascer sem forçar uma adaptação artificial.
            </p>
          </div>

          <div className="manifesto__cards">
            <article className="manifesto-card manifesto-card--history" data-reveal data-scroll-activate tabIndex={0}>
              <div>
                <p>O que ficou</p>
                <h3>Sua história segue sendo parte de você.</h3>
                <span>Ela não precisa ser apagada para que uma nova etapa exista.</span>
              </div>
            </article>

            <article className="manifesto-card manifesto-card--change" data-reveal data-scroll-activate tabIndex={0}>
              <div>
                <p>O que mudou</p>
                <h3>Novos contextos também transformam por dentro.</h3>
                <span>Identidade, vínculos, rotina e a própria forma de pertencer.</span>
              </div>
            </article>

            <article className="manifesto-card manifesto-card--future" data-reveal data-scroll-activate tabIndex={0}>
              <div>
                <p>O que pode nascer</p>
                <h3>Um jeito mais inteiro de seguir.</h3>
                <span>Com tempo, presença e espaço para reconhecer quem você é agora.</span>
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

      <section className="resolution" aria-labelledby="resolution-title" data-motion-section>
        <p className="overline" data-reveal>Para além do alívio</p>
        <h2 id="resolution-title" data-reveal>
          Aliviar é importante.
          <span>Mas não é o ponto final.</span>
        </h2>
        <p className="resolution__copy" data-reveal>
          A proposta é favorecer uma adaptação mais saudável, reconstruir
          o senso de pertencimento e permitir que você viva esta etapa com
          mais equilíbrio, clareza e autenticidade.
        </p>
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
              Um caminho clínico <em>feito com você.</em>
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
              Recursos escolhidos com critério.<br />Nunca por protocolo.
            </h2>
          </div>
        </div>

        <div className="methods__list">
          {methods.map((method) => (
            <article className="method" key={method.title} data-reveal data-scroll-activate tabIndex={0}>
              <span className="method__eyebrow">Abordagem integrada</span>
              <h3>{method.title}</h3>
              <p>{method.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="invitation" id="convite" aria-labelledby="invitation-title" data-motion-section>
        <div className="invitation__media">
          <div className="invitation__media-sticky">
            <div className="invitation__photo">
              <img
                src="/images/claudia-consultorio.png"
                alt="Claudia Thirion em seu consultório"
                width="1024"
                height="1448"
                loading="lazy"
              />
              <div className="invitation__photo-copy">
                <h3>Um espaço para atravessar mudanças com cuidado.</h3>
                <p>Escuta clínica para compreender o que mudou e construir caminhos possíveis no seu ritmo.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="invitation__content">
          <div className="invitation__intro">
            <div className="invitation__eyebrow" data-reveal>
              <span>Quando fizer sentido para você</span>
              <span aria-hidden="true">✳</span>
            </div>
            <h2 id="invitation-title" data-reveal>
              A primeira conversa
              <span>não exige certezas.</span>
            </h2>
          </div>

          <div className="invitation__text-flow" aria-label="Como começar">
            <div className="invitation__text-block" data-reveal>
              <h3>Chegar sem <span className="text-pink">organizar</span> tudo antes</h3>
              <p>Você pode trazer dúvidas, cansaço, ambivalência ou apenas a sensação de que algo mudou.</p>
            </div>
            <div className="invitation__text-block" data-reveal>
              <h3>Entender o <span className="text-pink">momento</span> com <span className="text-pink">calma</span></h3>
              <p>A conversa ajuda a nomear o que está acontecendo e perceber que tipo de acompanhamento faz sentido.</p>
            </div>
            <div className="invitation__text-block" data-reveal>
              <h3>Seguir no seu <span className="text-pink">próprio ritmo</span></h3>
              <p>Sem fórmulas prontas. O processo é construído a partir da sua história, do seu contexto e da sua vida real.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form" id="formulario" aria-labelledby="contact-form-title" data-motion-section>
        <div className="contact-form__intro">
          <p className="overline" data-reveal>Primeiro contato</p>
          <h2 id="contact-form-title" data-reveal>
            Conte o essencial.
            <span>O WhatsApp já abre pronto.</span>
          </h2>
          <p data-reveal>
            Preencha em poucos passos para enviar uma mensagem mais clara.
            Você não precisa organizar tudo antes; só trazer o suficiente para
            começarmos uma conversa com cuidado.
          </p>
        </div>

        <div className="contact-form__panel" data-reveal>
          <WhatsAppLeadForm />
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
        <div className="footer__main">
          <div className="footer__brand">
            <a className="wordmark" href="#inicio" aria-label="Claudia Thirion, voltar ao início">
              <span className="wordmark__mark"><img src="/images/ct-monogram.png" alt="" width="806" height="697" /></span>
              <span className="wordmark__name">Claudia<br />Thirion</span>
            </a>
            <p className="footer__statement">Psicologia para quem vive entre mudanças e mundos.</p>
          </div>

          <div className="footer__conversation">
            <p>Quando fizer sentido para você</p>
            <h2>Há um caminho possível para atravessar.</h2>
            <a className="footer__contact magnetic" data-magnetic href="#formulario">
              Agendar conversa
            </a>
          </div>

          <div className="footer__directory">
            <nav className="footer__nav" aria-label="Navegação do rodapé">
              <span>Explorar</span>
              <a href="#inicio">Início</a>
              <a href="#processo">O processo</a>
              <a href="#abordagens">Abordagens</a>
              <a href="#formulario">Contato</a>
            </nav>
            <div className="footer__services">
              <span>Atendimento</span>
              <p>Psicologia Intercultural</p>
              <p>EMDR</p>
              <p>Brainspotting</p>
              <p className="footer__registry">CRP SC 12/13349</p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Claudia Thirion</span>
          <div className="footer__social" aria-label="Redes sociais">
            <a
              href="https://wa.me/?text=Ol%C3%A1%2C%20Claudia!%20Gostaria%20de%20conhecer%20melhor%20o%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar pelo WhatsApp"
            >
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M16.03 3.2A12.67 12.67 0 0 0 5.2 22.43L3.5 28.8l6.52-1.67A12.7 12.7 0 1 0 16.03 3.2Zm0 22.98c-2.05 0-4.05-.55-5.8-1.58l-.42-.25-3.87.99 1.03-3.76-.27-.43a10.24 10.24 0 1 1 9.33 5.03Zm5.62-7.67c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.7.16-.2.3-.8 1-.98 1.2-.18.2-.36.23-.67.08-.3-.15-1.3-.48-2.47-1.53a9.27 9.27 0 0 1-1.7-2.12c-.18-.3-.02-.47.13-.62.14-.14.31-.36.46-.54.16-.18.21-.31.31-.52.1-.2.05-.38-.02-.54-.08-.15-.7-1.67-.95-2.3-.25-.6-.5-.52-.7-.53h-.58c-.2 0-.54.08-.82.39-.28.3-1.08 1.05-1.08 2.56s1.1 2.98 1.26 3.18c.15.2 2.17 3.31 5.25 4.64.74.32 1.31.5 1.76.65.74.23 1.4.2 1.93.12.59-.09 1.82-.75 2.08-1.46.26-.72.26-1.34.18-1.47-.07-.12-.28-.2-.59-.36Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Instagram"
            >
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M10.1 3.8h11.8a6.3 6.3 0 0 1 6.3 6.3v11.8a6.3 6.3 0 0 1-6.3 6.3H10.1a6.3 6.3 0 0 1-6.3-6.3V10.1a6.3 6.3 0 0 1 6.3-6.3Zm0 2.5a3.8 3.8 0 0 0-3.8 3.8v11.8a3.8 3.8 0 0 0 3.8 3.8h11.8a3.8 3.8 0 0 0 3.8-3.8V10.1a3.8 3.8 0 0 0-3.8-3.8H10.1Zm5.9 4.7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm6.1-3.9a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8Z" />
              </svg>
            </a>
          </div>
          <a className="footer__up" href="#inicio">Voltar ao topo <span aria-hidden="true">↑</span></a>
        </div>

        <a
          className="footer__credit"
          href="https://utopia.app.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site desenvolvido por Utopia Digital Lab
        </a>
      </footer>
    </main>
  );
}
