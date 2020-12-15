import React from 'react';
import imagem from '../Logo/imagem_cataratas.jpg'
import '../Imagem/style.css';

function Imagem(){
    return (
    

        
<>
        <div className="imagem">
            <img src={imagem} alt="imagem-ambiente" height="500"  />
        </div>

        <div>
            <label className="texto">As Cataratas do Iguaçu!! </label>
        </div>
</>
        

    )
};
export default Imagem; 