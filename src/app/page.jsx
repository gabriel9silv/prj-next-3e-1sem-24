'use client'

import React, {useState} from 'react';
import Coracao from './components/Coracao/Coracao';
import pageStyles from './page.module.css'; // Renomeado para `pageStyles`
import styled from 'styled-components';
import Image from 'next/image';
import Agenda from '../../public/next.svg';
import CalendarComponent from './components/Calendario/calendario'
import styles from './components/NameInput/NameInput.module.css'; 

const Tela2 = () => {
  const text = 'A biblioteca da escola é um espaço dedicado à promoção da educação, pesquisa e desenvolvimento intelectual dos alunos. Equipada com uma ampla variedade de livros, periódicos e recursos digitais, a biblioteca oferece um ambiente propício para o estudo individual e em grupo.';
  const StyledInput = styled.input`
    border: 2px solid #1A1B21;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    width: 85%;
    height: 25%;
    margin: 2%;
  `;
  const StyledInput2 = styled.input`
    border: 2px solid #1A1B21;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    width: 49rem;
    height: 100%;
    margin: 2%;
    margin-left:-0.5rem;
  `;

  const NameInputContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 4%;     
  `;

  const NameButton = styled.button`
    margin-left: -5rem;
    padding: 8px ;
    font-size: 26px;
    border: 2px solid #fff;
    border-radius: 40px;
    background-color: #fff;
    cursor: pointer;


  `;
  const [name, setName] = useState(''); // Estado para armazenar o nome atual
  const [names, setNames] = useState([]); // Estado para armazenar a lista de nomes

  const handleInputChange = (e) => {
    setName(e.target.value); // Atualiza o nome atual conforme o usuário digita
  };
  const handleAddName = () => {
    if (name.trim() !== '') { // Adiciona o nome se não for vazio
      setNames([...names, name]);
      setName(''); // Limpa o campo de input
    }
  };


  return (
    <div className={styles.scrollView}>
      <div className={styles.container}>

        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.column}>
              <div className={styles.texto2}>
                <h1 className={styles.title}>Biblioteca <Coracao /></h1>
                <h1 className={styles.title2}>★ ★ ★ ☆ ☆</h1>
                <h2 className={styles.desc}>Descrição</h2>
                <p className={styles.lors}>{text}</p>
              </div>
              <div className={styles.row}>
              <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Nome"
          className={styles.input}
          value={name}
          onChange={handleInputChange} // Atualiza o estado ao digitar
        />
        <button onClick={handleAddName}>Adicionar Nome</button>
      </div>
      <ul className={styles.nameList}>
        {names.map((n, index) => (
          <li key={index} className={styles.nameItem}>{n}</li>
        ))}
      </ul>
    </div>
                <StyledInput type="date" />
                <StyledInput type="time" />
                <StyledInput type="time" />
                <button className={styles.button}>Finalizar Agendamento</button>
              </div>
              <div className={styles.column}>
                  <div className={styles.centro}>
                  <div className={styles.disponivel}><h1>Disponibilidade</h1></div>
                  <CalendarComponent />
                  </div>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tela2;
