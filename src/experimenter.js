import React, { Component } from 'react';
import experimenter from './components/img/experimenter.jpg';
import './components/App1/App1.css';
import { Typography } from '@mui/material';

class Cinema extends Component {
  render() {
    return (
      <div>
        <Typography className='titulo' sx={{textAlign: "center", paddingBottom: "40px", fontSize: "30px"}}>Filmes</Typography>
        <h3>Experimenter</h3>
        <div className='caixa'>
          <img src={experimenter} alt='experimenter' className='imgs' />
<Typography variant='h6'>Em 1961, o psicólogo Stanley Milgram, realiza experimentos para medir a conformidade, a consciência e o livre-arbítrio das pessoas que se mostra controverso na época por conta
        da sociedade não adimitir ser responsável pelos próprios atos que eles causaram, além desse fato conta sua história do tempo que começou esse 
        experimento, seu casamento e as polêmicas que enfrentou, o filme utiliza de um recurso interessante que é a quebra da quarta parede realizada 
        pelo protagonista explicando alguns conceitos da psicologia para os leigos(vulgo eu) e pareve mais legal ainda o fato que parece que meio que
        entra na nossa mente nesses momentos, mas ao mesmo tempo não passa de um filme extremamente redondo que inova muito ou necessariamente surpreende
        e francamente aqueles cenários falsos me incomodaram um pouco, porque não cenários de verdade, pode ser uma metalinguagem ou algo do tipo mas eu
        não peguei.</Typography>
      
        
      </div>
      <h3>8/10</h3>
      </div>
    );
  }
}

export default Cinema;