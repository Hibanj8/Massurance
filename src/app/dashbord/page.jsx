"use client"
import React, { useState } from 'react';

function Dashboard() {
  const [currentPage, setCurrentPage] = useState('home'); // État initial

  // Fonction pour changer la page
  const navigate = (page) => {
    setCurrentPage(page);
  };

  // Contenu des pages
  const pages = {
    home: <div>Accueil</div>,
    appointments: <div>Gestion des rendez-vous</div>,
    userQuestions: <div>Questions des utilisateurs</div>,
    profile: <div>Profile</div>,
    adminEdit: <div>Modification des administrateurs</div>,
  };

  // Navigation
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* Barre de navigation */}
      <div style={{ width: '200px', borderRight: '1px solid #ccc' }}>
        <button onClick={() => navigate('home')}>Accueil</button>
        <button onClick={() => navigate('appointments')}>Gestion des rendez-vous</button>
        <button onClick={() => navigate('userQuestions')}>Questions des utilisateurs</button>
        <button onClick={() => navigate('profile')}>Profile</button>
        <button onClick={() => navigate('adminEdit')}>Modification des admins</button>
      </div>

      {/* Contenu de la page */}
      <div style={{ flex: 1, padding: '20px' }}>
        {pages[currentPage]}
      </div>
    </div>
  );
}

export default Dashboard;
