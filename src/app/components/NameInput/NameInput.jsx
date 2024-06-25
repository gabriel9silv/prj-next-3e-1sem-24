import React from 'react';
import styles from './NameInput.module.css';

const NameInput = () => {
 

  return (
    <div className={styles.wrapper}>
        <div  className={styles.inputWrapper}>
          <input type="text" placeholder="Nome" className={styles.input} />
          <button className={styles.plusButton}>
          +
          </button>
        </div>
    </div>
  );
};

export default NameInput;

