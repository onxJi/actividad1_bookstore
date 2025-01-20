import React from 'react'
import "./Login.css"
import { useForm } from '../../hooks/useForm';

export const Login = () => {

  const { formState, onInputChange  } = useForm({
    username: '',
    password: ''
  });

  const validations = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Validación para correos electrónicos
    name: /^[a-zA-Z\s]+$/, // Solo letras y espacios
  };

  const { username, password } = formState;


  return (



    <article className="login__container">
      <div className="login__content">
        <div className="login__content-header">
            <span style={{ fontWeight: 'bold', color: 'white', fontSize: '2rem' }}>Iniciar Sesión</span>
        </div>
        <div className="login__content-inputs">
          <input type="text" name="username" id="username" placeholder='usuario' value={username} onChange={onInputChange} />
          <input type="password" name="password" id="password" placeholder='contraseña' value={password} onChange={onInputChange} />
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
