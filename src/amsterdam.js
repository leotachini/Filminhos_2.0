import React, { Component } from 'react';
import amsterdam from './components/img/amsterdam.jpg';
import './components/App1/App1.css';
import { Typography } from '@mui/material';

class Cinema extends Component {
  render() {
    return (
      <div>
        <Typography className='titulo' sx={{textAlign: "center", paddingBottom: "40px", fontSize: "30px"}}>Filmes</Typography>
        <h3>Amsterdam</h3>
        <div className='caixa'>
          <img src={amsterdam} alt='amsterdam' className='imgs' />
<Typography variant='h6'>Uma produção repleta de estrelas ou seja, atores habilidosos e premiados, porém subutilizada em um enredo extenso e que perde a graça bem rapidamente. 
O filme apresenta momentos brilhantes no início e final, enquanto o restante se assemelha a um sanduíche onde o pão supera o recheio.</Typography>
      
        
      </div>
      <h3>6,5/10</h3>
      </div>
    );
  }
}

export default Cinema;