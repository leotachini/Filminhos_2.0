import React, { Component } from 'react';
import avatar2 from './components/img/avatar2.jpg';
import './components/App1/App1.css';
import { Typography } from '@mui/material';

class Cinema extends Component {
  render() {
    return (
      <div>
        <Typography className='titulo' sx={{textAlign: "center", paddingBottom: "40px", fontSize: "30px"}}>Filmes</Typography>
        <h3>Avatar 2</h3>
        <div className='caixa'>
          <img src={avatar2} alt='avatar2' className='imgs' />
<Typography variant='h6'>Avatar 2 é uma obra audiovisual impressionante, levando-nos de volta a Pandora com cenários incríveis. Mas, apesar disso, o filme parece arrastado, faltando originalidade na história. Muitos visuais, pouca novidade.</Typography>
      
        
      </div>
      <h3>6/10</h3>
      </div>
    );
  }
}

export default Cinema;