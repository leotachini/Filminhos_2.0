import React, { Component } from 'react';
import decisaodepartir from './components/img/decisaodepartir.jpg';
import './components/App1/App1.css';
import { Typography } from '@mui/material';

class Cinema extends Component {
  render() {
    return (
      <div>
        <Typography className='titulo' sx={{textAlign: "center", paddingBottom: "40px", fontSize: "30px"}}>Filmes</Typography>
        <h3>Decisão de Partir</h3>
        <div className='caixa'>
          <img src={decisaodepartir} alt='decisiontoleave' className='imgs' />
<Typography variant='h6'>O escolhido da Coreia do Sul para o Oscar de 2023, é um filme que eu diria que no mínimo é diferente, tem várias
        ideias interessantes, e uma trama mais profunda do que aparenta, mistura tudo isso com um pouco de humor e uns enquadramentos de câmeras bem legais
        que dão um charme a mais ao filme, além de uma atuação incrível da Tang Wei que não deixa claro nenhum momento o que a personagem vai fazer e por
        isso é um filme que valhe a pena ser visto e por mais que perca um pouco do ritmo na metade do filme ainda se torna uma excelente obra do cinema sul-coreano.</Typography>
      
        
      </div>
      <h3>8,5/10</h3>
      </div>
    );
  }
}

export default Cinema;