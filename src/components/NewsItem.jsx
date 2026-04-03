import React from 'react';

const NewsItem = ({ title, description }) => {
  return (
    <div style={{
      padding: '8px,20px',
      borderBottom: '1px solid #ccc',
      textAlign: 'left',
      maxWidth: '100%',
      margin: '0 auto'
    }}>
      <h3 style={{
        fontSize: '1.2rem',
        // fontWeight: 'bold',
        marginBottom: '10px',
        fontFamily:'Times New Roman'
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '0.9rem',
        lineHeight: '1.6',
        color: '#333',
        fontFamily: 'Times New Roman' // Image ke mutabiq description serif font mein hai
      }}>
        {description}
      </p>
    </div>
  );
};

export default NewsItem;