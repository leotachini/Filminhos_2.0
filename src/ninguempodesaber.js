import React, { Component } from 'react';
import ninguempodesaber from './components/img/ninguempodesaber.jpg';
import './components/App1/App1.css';
import { Typography } from '@mui/material';

class Tv extends Component {
  render() {
    return (
      <div>
        <Typography className='titulo' sx={{textAlign: "center", paddingBottom: "40px", fontSize: "30px"}}>Séries</Typography>
        <h3>Ninguém Pode Saber - 1ª Temporada</h3>
        <div className='caixa'>
          <img src={ninguempodesaber} alt='ninguempodesaber' className='imgs' />
<Typography variant='h6'>Adicionando mais uma série a coletânia de séries de suspense baratas que eu vi, pois começa com um primeiro episódio promissor
        já que você fique pensando "o que está acontecendo aqui?", o segundo é um típico episódio de gato e rato e o terceiro episódio apresenta o principal plot twist
        da série e você que não leu o livro homônimo tipo eu, e esperava bem mais plot twists e peeeenn, ERRADO! a série roda em círculos até no 
        último episódio que ao menos tem a decência de ser satisfatório no mínimo, e estão teorizando que haverá uma possível segunda temporada(não sei se isso é uma promessa ou uma ameaça).</Typography>
      </div>
      <h3>Lista dos Episódios</h3>
    <h3>1. Episódio 1 8/10  </h3>
    <h3>  2. Episódio 2 8,5/10  </h3>
    <h3>   3. Episódio 3 9/10  </h3>
    <h3>  4. Episódio 4 6,5/10  </h3>
    <h3>   5. Episódio 5 6,5/10  </h3>
    <h3>  6. Episódio 6 6/10  </h3>
    <h3>  7. Episódio 7 6/10  </h3>
    <h3>   8. Episódio 8 7/10  </h3>
    <h3>Nota geral da Temporada:</h3>
    <h3>7/10</h3>
       
      </div>
    );
  }
}

export default Tv;