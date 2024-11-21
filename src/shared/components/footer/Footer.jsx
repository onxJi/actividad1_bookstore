import React from 'react'
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
import "./Footer.css"


export const Footer = () => {

  const fast_links = ['Novedades', 'Más Vendidos', 'Ofertas', 'eBooks', 'Blog', 'Mi Cuenta'];


  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__content-marca'>
              <span style={{ fontWeight: 'bold'}}> <Icon icon="mdi:library" className="navbar__logo-icon"/> TheLibrary</span>
              <p style={{ textAlign: 'justify' }}>Descubre mundos infinitos a través de las páginas. Tu librería online de confianza con la mejor selección de libros y servicio personalizado.</p>
              <div>
                <Icon icon="uit:facebook-f" className='marca__icon'/>
                <Icon icon="iconoir:x" className='marca__icon'/>
                <Icon icon="mdi:instagram" className='marca__icon'/>
              </div>
        </div>
        <div className='footer__content-links'>
            <span style={{ fontWeight: 'bold'}}>Enlaces Rápidos</span>
            <ul>
              {
              fast_links.map( (link) => (
                <li >
                  <Link to='#'>{link}</Link>
                </li>
              ))
              }
            </ul>
            
        </div>
        <div className='footer__content-categories'>
            <span style={{ fontWeight: 'bold'}}>Categorías</span>
        </div>
        <div className='footer__content-news'>
            <span style={{ fontWeight: 'bold'}}>Nuevos Lanzamientos</span>
        </div>
      </div>
      <div className="footer__copyright">
        <p>© 2024 TheLibrary. Todos los derechos reservados.</p>
        <span>Política de Privacidad</span>
        <span >Terminos y Condiciones</span>
        <span >Cookies</span>
      </div>
    </footer>
  )
}
