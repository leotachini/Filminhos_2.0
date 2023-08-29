import React, { Component } from 'react';
import adaonegro from './components/img/adaonegro.jpg';
import './components/App1/App1.css';
import { Typography } from '@mui/material';

class Cinema extends Component {
  render() {
    return (
      <div>
        <Typography className='titulo' sx={{textAlign: "center", paddingBottom: "40px", fontSize: "30px"}}>Filmes</Typography>
        <h3>Adão Negro</h3>
        <div className='caixa'>
          <img src={adaonegro} alt='adaonegro' className='imgs' />
<Typography variant='h6'>Adão Negro, como começar a falar disso, não traz nada de novo para a mesa dos filmes de super-heróis. É meio sem graça e cheio de buracos na história. 
Os personagens não conseguem cativar – na verdade, eu não ligaria se todos eles morressem. Além disso, o filme tenta usar alguns truques que acabam não surpreendendo ninguém
 – zero vezes, para ser exato. E o único personagem que até valia a pena é mal aproveitado e morre no final. No geral, é uma decepção para quem esperava algo emocionante e inovador
 e pra mim que já não esperava nada ficou ainda pior.</Typography>
      
        
      </div>
      <h3>2/10</h3>
      </div>
    );
  }
}

export default Cinema;