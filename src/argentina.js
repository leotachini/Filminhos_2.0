import React, { Component } from 'react';
import argentina from './components/img/argentina.jpg';
import './components/App1/App1.css';
import { Typography } from '@mui/material';

class Cinema extends Component {
  render() {
    return (
      <div>
        <Typography className='titulo' sx={{textAlign: "center", paddingBottom: "40px", fontSize: "30px"}}>Filmes</Typography>
        <h3>Argentina, 1985</h3>
        <div className='caixa'>
          <img src={argentina} alt='argentina' className='imgs' />
<Typography variant='h6'>Um drama que aborda o julgamento de todos os "líderes" da ditadura militar argentina, considerada uma das mais sangrentas
        da América, o que prova que a Argentina tava com tudo no ano de 2022 vencendo a Copa do Mundo no Qatar, tendo como eleito a melhor jogador do ano Lionel Messi
        e ainda produzindo um dos favoritos a vencer o prêmio de Melhor Filme Estrangeiro no Oscar, com esse filme muito organizado e com 
        uma mensagem muito forte, e por mais que pareça pouca a pena do réus, dói mais após fazer uma pesquisa sobre o assunto e ver o 
        Brasil nem sequer puniu os responsáveis pela ditadura militar(1964-1985) e deixando de lado a rivalidade Brasil x Argentina sou obrigado
        a admitir que esse filme é genuinamente um dos melhores do ano.
</Typography>
      
        
      </div>
      <h3>10/10</h3>
      </div>
    );
  }
}

export default Cinema;