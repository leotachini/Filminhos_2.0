import React, { Component } from 'react';
import banshees from './components/img/bansheesinisherin.jpg';
import './components/App1/App1.css';
import { Typography } from '@mui/material';

class Cinema extends Component {
  render() {
    return (
      <div>
        <Typography className='titulo' sx={{textAlign: "center", paddingBottom: "40px", fontSize: "30px"}}>Filmes</Typography>
        <h3>Banshees de Inisherin</h3>
        <div className='caixa'>
          <img src={banshees} alt='banshees' className='imgs' />
<Typography variant='h6'>Nessa comédia tragicômica que de primeira impressão me pareceu uma mistura de muito humor britânico(padrão, afinal
        de contas o filme é irlandês) e a tragédia grega de Orfeu e Eurídice, e conta a história de dois melhores amigos que um dia do nada um deles 
        resolve que não quer mais ser amigo do outro e caso ele se aproxime dele, ele ameaça cortar os próprios dedos(bem de boas essa trama aí), ele 
        começa leve com um humorzinho meio escrachado de piadas de diálogos rápidos, repetição insessante de frases e de nomes bem estranhos dos 
personagens pra uma tragédia bem estranha, e esse é o filme, com incríveis atuações e bem escrito, com uma leve barriga no meio, acaba sendo uma mensagem sobre a finitude 
        da vida e imortalidade da arte.</Typography>
      
        
      </div>
      <h3>8/10</h3>
      </div>
    );
  }
}

export default Cinema;