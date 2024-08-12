import React, { useState } from 'react';
import styles from './NameInput.module.css';

const NameInput = () => {


  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Nome"
          className={styles.input}
          value={name}
          onChange={handleInputChange} // Atualiza o estado ao digitar
        />

      </div>
      <ul className={styles.nameList}>
        {names.map((n, index) => (
          <li key={index} className={styles.nameItem}>{n}</li>
        ))}
      </ul>
    </div>
  );


export default NameInput;
