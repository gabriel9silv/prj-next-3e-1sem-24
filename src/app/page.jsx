
import React from 'react';
import NameInput from './components/NameInput';
import DateInput from './components/DateInput';
import Horainicio from './components/Horainicio';
import Horafinal from './components/Horafinal';
import Coracao from './components/Coracao';
import styles from './styles/Tela2.module.css';

const Tela2 = () => {
  const text = 'A biblioteca da escola é um espaço dedicado à promoção da educação, pesquisa e desenvolvimento intelectual dos alunos. Equipada com uma ampla variedade de livros, periódicos e recursos digitais, a biblioteca oferece um ambiente propício para o estudo individual e em grupo.';

  return (
    <div className={styles.scrollView}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
              <h1 className={styles.title}>Biblioteca <Coracao /></h1>
              <div className={styles.texto2}>
                <h2 className={styles.desc}>Descrição</h2>
                <p className={styles.lors}>{text}</p>
              <NameInput /><div></div>
              <DateInput /><div></div>
              <Horainicio /> <div></div>
              </div>
              <Horafinal /><div></div>
              <button className={styles.button}>Finalizar Agendamento</button>
              </div>
        </div>
    </div>
      </div>
  );
};

export default Tela2;
