import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import decisaodepartir from './components/img/decisaodepartir.jpg';
import avatar2 from './components/img/avatar2.jpg';
import './components/App1/App1.css';
import { Typography, Slider } from '@mui/material';
import amsterdam from './components/img/amsterdam.jpg';
import dentecanino from './components/img/dentecanino.jpg';
import experimenter from './components/img/experimenter.jpg';
import argentina from './components/img/argentina.jpg';
import achegada from './components/img/achegada.jpg';
import entrefacas from './components/img/entrefacas.jpg';
import banshees from './components/img/bansheesinisherin.jpg';
import adaonegro from './components/img/adaonegro.jpg';

class Cinema extends Component {
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

    return (
      <div sx={{ background: 'darkred', padding: '20px' }}>
        <Typography className='titulo' sx={{ textAlign: 'center', paddingBottom: '20px', fontSize: '30px' }}>
          Filmes
        </Typography>
        <h3 style={{textAlign: "center"}}>Filtre a série pela nota</h3>
        
        <Slider
          value={notaFiltro}
          onChange={this.handleNotaChange}
          valueLabelDisplay="auto"
          max={10}
          min={0}
          sx={{ width: '50%', marginLeft: '25%',marginRight: '25%', marginTop: '10px' }}
        />

       
        {movies.map((movie) => (
          movie.nota >= notaFiltro && (
            <Link key={movie.id} to={`/${movie.link}`}>
              <img src={movie.image} alt={movie.alt} />
            </Link>
          )
        ))}
      </div>
    );
  }
}

const movies = [
  { id: 1, link: 'decisaodepartir', image: decisaodepartir, alt: 'decisiontoleave', nota: 8.5 },
  { id: 2, link: 'avatar2', image: avatar2, alt: 'avatar2', nota: 6 },
  { id: 3, link: 'amsterdam', image: amsterdam, alt: 'amsterdam', nota: 6 },
  { id: 4, link: 'dentecanino', image: dentecanino, alt: 'dentecanino', nota: 9 },
  { id: 5, link: 'experimenter', image: experimenter, alt: 'experimenter', nota: 8 },
  { id: 6, link: 'argentina', image: argentina, alt: 'argentina', nota: 10 },
  { id: 7, link: 'achegada', image: achegada, alt: 'achegada', nota: 10 },
  { id: 8, link: 'banshees', image: banshees, alt: 'banshees', nota: 8 },
  { id: 9, link: 'entrefacas', image: entrefacas, alt: 'entrefacas', nota: 10 },
  { id: 10, link: 'adaonegro', image: adaonegro, alt: 'adaonegro', nota: 2 },
];

export default Cinema;
