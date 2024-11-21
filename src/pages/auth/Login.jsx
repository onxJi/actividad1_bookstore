import React from 'react'
import "./Login.css"

export const Login = () => {
  return (
    <article className="login__container">
      <div className="login__content">
        <div className="login__content-header">
            <span style={{ fontWeight: 'bold', color: 'white', fontSize: '2rem' }}>Iniciar Sesión</span>
        </div>
        <div className="login__content-inputs">
          <input type="text" name="username" id="username" />
          <input type="password" name="contra" id="contra" />
        </div>
        <div className="login__content-buttons">
            <button>Iniciar Sesión</button>
            <div className="login__content-registro">
                <span>¿Olvidaste tu contraseña?</span> |
                <span>Registrate</span>
            </div>
        </div>
      </div>
    </article>
  );
}
