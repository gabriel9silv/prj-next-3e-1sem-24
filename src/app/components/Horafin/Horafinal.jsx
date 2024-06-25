 // components/Horafinal.jsx
import { Electrolize } from 'next/font/google';
import React from 'react';
import styles from './Horafinal.module.css';

const Horafinal = () => {
  return (
    <div  className={styles.inputWrapper}>
      <input type="time" className="input" />
    </div>
  );
};

export default Horafinal;
