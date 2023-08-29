import React, { Component } from 'react';
import achegada from './components/img/achegada.jpg';
import './components/App1/App1.css';
import { Typography } from '@mui/material';

class Cinema extends Component {
  render() {
    return (
      <div>
        <Typography className='titulo' sx={{textAlign: "center", paddingBottom: "40px", fontSize: "30px"}}>Filmes</Typography>
        <h3>A Chegada</h3>
        <div className='caixa'>
          <img src={achegada} alt='achegada' className='imgs' />
<Typography variant='h6'>Um filme lindo, brilhante, com muita profundidade, se bem que isso nem deveria ser chamado de filme já que aí ele entra na
mesma categoria que avatar 2 ou transformers isso deveria ser considerado uma obra-prima, um espetáculo, cheio de significados, um roteiro muito
incrível, efeitos visuais simples e bons, excelentes atuações e um plot twist daqueles, além de ser poético o jeito que ele fale da "passagem
do tempo", injustíssimo ter perdido o Oscar de Melhor Roteiro Adaptado e a Amy Adams nem sequer ter sido indicada a melhor Atriz.</Typography>
      
        
      </div>
      <h3>100/10</h3>
      </div>
    );
  }
}

export default Cinema;