import React from 'react';
import '../Header/style.css';
import  Footer from'../Footer';
import  Lista from '../Lista';
import Form from '../Form';
import Imagem from '../Imagem';


function Header() {
    return(

        <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Funcionalidades</a></li>
        <li><a href="badges.html">Instrução</a></li>
        <li><a href="badges.html">Local</a></li>
        <li><a href="collapsible.html">Sobre</a></li>

        

        <Imagem></Imagem>
        <Lista></Lista>
        <Footer></Footer>
        

       
      </ul>     
    </div>
  </nav>

    );
}
export default Header; 