"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_BASE_URL = "https://wa.me/";

export default function WhatsAppLeadForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [moment, setMoment] = useState("");
  const [format, setFormat] = useState("Ainda não sei");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Olá, Claudia! Gostaria de agendar uma primeira conversa.",
      "",
      `Nome: ${name || "Não informado"}`,
      `Contato: ${contact || "Não informado"}`,
      `Momento atual: ${moment || "Prefiro contar na conversa"}`,
      `Preferência de atendimento: ${format}`,
    ].join("\n");

    window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="lead-form__grid">
        <label>
          <span>Seu nome</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Como posso chamar você?"
          />
        </label>

        <label>
          <span>Telefone ou e-mail</span>
          <input
            type="text"
            name="contact"
            autoComplete="tel email"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            placeholder="Para facilitar o retorno"
          />
        </label>
      </div>

      <label>
        <span>O que você está atravessando agora?</span>
        <textarea
          name="moment"
          value={moment}
          onChange={(event) => setMoment(event.target.value)}
          placeholder="Ex.: mudança de país, adaptação cultural, cansaço emocional, transição de vida..."
          rows={4}
        />
      </label>

      <fieldset>
        <legend>Preferência inicial</legend>
        <div className="lead-form__choices">
          {["Online", "Presencial", "Ainda não sei"].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="format"
                value={option}
                checked={format === option}
                onChange={(event) => setFormat(event.target.value)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button className="lead-form__submit magnetic" data-magnetic type="submit">
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
