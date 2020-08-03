import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/30394677?s=460&u=00ce1c305a8b46424e79e4c3a402ac7a0a146943&v=4"
          alt="Felipe Rodrigues"
        />
        <div>
          <strong>Felipe Rodrigues</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Amante de matemática mas com um certo déficit na área financeira.
        <br />
        <br />
        Dou aulas para quem quer desaprender a somar números!
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong> R$ 15,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
