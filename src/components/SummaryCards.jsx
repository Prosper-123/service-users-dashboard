import React from 'react';

const SummaryCards = ({ summary }) => (
  <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
    {summary.map((card) => (
      <div key={card.label} style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '10px' }}>
        <h3>{card.label}</h3>
        <p>{card.value}</p>
      </div>
    ))}
  </div>
);

export default SummaryCards;
