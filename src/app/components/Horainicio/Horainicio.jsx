// components/Horainicio.jsx
import React from 'react';
import styles from './Horainicio.module.css';

const Horainicio = () => {
  return (
    <div  className={styles.inputWrapper}>
      <input type="time" className="input" />
    </div>
  );
};

export default Horainicio;
