import React from 'react'
import { Link } from 'react-router-dom'

function Unauthorized() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🚫 Accès refusé</h1>
      <p>Vous n’avez pas les permissions nécessaires pour accéder à cette page.</p>
      <Link to="/login">Retour à la page de connexion</Link>
    </div>
  )
}

export default Unauthorized