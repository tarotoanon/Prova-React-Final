import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useState } from 'react'
import Form from '../Form';
import './style.css';

function Page2 (){
      return(
          
        <>
        <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Funcionalidades</a></li>
        <li><a href="badges.html">Instrução</a></li>
        <li><a href="badges.html">Local</a></li>
        <li><a href="collapsible.html">Sobre</a></li>
       
         
       <Footer></Footer>
       <Form></Form>

      </ul>     
    </div>
  </nav>

   
</>
      );


};

export default Page2;