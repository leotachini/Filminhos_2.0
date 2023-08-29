import React, { Component } from 'react';
import dentecanino from './components/img/dentecanino.jpg';
import './components/App1/App1.css';
import { Typography } from '@mui/material';

class Cinema extends Component {
  render() {
    return (
      <div>
        <Typography className='titulo' sx={{textAlign: "center", paddingBottom: "40px", fontSize: "30px"}}>Filmes</Typography>
        <h3>Dente Canino</h3>
        <div className='caixa'>
          <img src={dentecanino} alt='dentecanino' className='imgs' />
<Typography variant='h6'>Uma experiência cinematográfica fora do comum, repleta de estranheza e confusão deliberada. Apesar desses elementos,
o filme se revela intrigante ao servir como um desafio mental sobre a desinformação.
Embora ocasionalmente exagere na intensidade, sua extravagância curiosa e o tema da desinformação mantêm a atenção do espectador.</Typography>
      
        
      </div>
      <h3>9/10</h3>
      </div>
    );
  }
}

export default Cinema;