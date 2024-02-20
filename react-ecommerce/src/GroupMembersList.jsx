import React from 'react';
import './Members.css';
import FlowerImage from './flower.png';

const GroupMembersList = () => {
  const groupMembers = [
    'Bezawit',
    'Abate',
    'Ferenj',
    'Yared',
    'Seblewengel',
    'Mihret',
    'Fekede',
    'Melkam',
  ];

  return (
    <div className="group-members">
      <h2>Group Members</h2>
      <ul>
        {groupMembers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
      <img src={FlowerImage} alt="Flower" className="beautiful-flower" />
    </div>
  );
};

export default GroupMembersList;
