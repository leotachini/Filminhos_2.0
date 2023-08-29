import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ruptura from './components/img/ruptura.jpg';
import Only_Murders2 from './components/img/only_murders2.webp';
import Clickbait from './components/img/clickbait.jpg';
import shrinking from './components/img/shrinking.jpg';
import mayans from './components/img/mayans.jpg';
import ninguempodesaber from './components/img/ninguempodesaber.jpg';

import './components/App1/App1.css';
import { Typography, Slider } from '@mui/material';

class Tv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notaFiltro: 0,
    };
  }

  handleNotaChange = (event, newValue) => {
    this.setState({ notaFiltro: newValue });
  };

  render() {
    const { notaFiltro } = this.state;

    const series = [
      {
        imagem: Only_Murders2,
        alt: 'only2',
        link: '/Only_Murders2',
        nota: 9.5, 
      },
      {
        imagem: Clickbait,
        alt: 'bait',
        link: '/Clickbait',
        nota: 6, 
      },
      {
        imagem: shrinking,
        alt: 'shrink',
        link: '/shrinking',
        nota: 9, 
      },
      {
        imagem: mayans,
        alt: 'mayans',
        link: '/mayans',
        nota: 9, 
      },
      {
        imagem: ninguempodesaber,
        alt: 'ninguempodesaber',
        link: '/ninguempodesaber',
        nota: 7,
      },
      {
        imagem: ruptura,
        alt: 'ruptura',
        link: '/ruptura',
        nota: 10, 
      },
    ];

    return (
      <div>
        <Typography className='titulo' sx={{ textAlign: "center", paddingBottom: "20px", fontSize: "30px" }}>
          Séries
        </Typography>
        <h3 style={{textAlign: "center"}}>Filtre a série pela nota</h3>
        <Slider
          value={notaFiltro}
          onChange={this.handleNotaChange}
          valueLabelDisplay="auto"
          max={10}
          min={0}
          sx={{ width: "50%", marginLeft: "25%",marginRight: "25%", marginBottom: "20px" }}
        />
        
        {series.map((serie, index) => (
          serie.nota >= notaFiltro && (
            <Link key={index} to={serie.link}>
              <img src={serie.imagem} alt={serie.alt} data-nota={serie.nota} />
            </Link>
          )
        ))}
      </div>
    );
  }
}

export default Tv;
