


import React from 'react';

const Header = () => {
  return (
    /* 1. Header tag yahan shuru ho raha hai aur saare styles iske andar hain */
    <header style={{
        backgroundColor: '#E6D5E0',
        textAlign: 'center',
        // padding: '10px 0 40px 0',
        borderBottom: '2px solid white' // 2. Ye rahi aapki white line aur comma
    }}>
        <h1 style={{
            color: '#D181B1',
            fontWeight: "300",
            margin: '0',
            fontFamily: 'Impact',
            letterSpacing: "0.5px",
            
        }}>
            Awesome News
        </h1>

        <input 
            type="text" 
            placeholder="" 
            style={{
                backgroundColor: '#F3E8EE',
                border: '2px solid #000',
                height: '35px',
                width: '280px',
                margin: '10px auto',
                display: 'block',
                borderRadius: '4px',
                textAlign: 'center',
                fontSize: '1rem',
                outline: 'none',
                
            }} 
        />
    </header>
  );
};

export default Header;