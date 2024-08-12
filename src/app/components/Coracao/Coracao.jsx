// components/Coracao.jsx
import React, { useState } from 'react';

const Coracao = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={liked ? 'Descurtir' : 'Curtir'}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '24px',
        color: liked ? 'red' : 'black',
      }}
    >
      {liked ? '♥' : '♡'}
    </button>
  );
};

export default Coracao;

