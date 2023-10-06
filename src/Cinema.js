import React, { Component } from "react";
import { Link } from "react-router-dom";
import decisaodepartir from "./components/img/decisaodepartir.jpg";
import avatar2 from "./components/img/avatar2.jpg";
import { Typography, Slider } from "@mui/material";
import amsterdam from "./components/img/amsterdam.jpg";
import dentecanino from "./components/img/dentecanino.jpg";
import experimenter from "./components/img/experimenter.jpg";
import argentina from "./components/img/argentina.jpg";
import achegada from "./components/img/achegada.jpg";
import entrefacas from "./components/img/entrefacas.jpg";
import banshees from "./components/img/bansheesinisherin.jpg";
import adaonegro from "./components/img/adaonegro.jpg";
import thecreator from "./components/img/thecreator.webp";
import "./App.css";

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
      <div sx={{ padding: "20px" }}>
        <Typography
          className="titulo"
          sx={{ textAlign: "center", paddingBottom: "20px", fontSize: "30px" }}
        >
          Filmes
        </Typography>
        <h3 style={{ textAlign: "center" }}>Filtre a série pela nota</h3>

        <Slider
          value={notaFiltro}
          onChange={this.handleNotaChange}
          valueLabelDisplay="auto"
          max={10}
          min={0}
          sx={{
            width: "50%",
            marginLeft: "25%",
            marginRight: "25%",
            marginTop: "10px",
            color: "darkred",
          }}
        />

        <div className="grid-container">
          {movies.map(
            (movie, index) =>
              movie.nota >= notaFiltro && (
                <Link key={index} to={`/${movie.link}`}>
                  <img
                    className="grid-item"
                    src={movie.image}
                    alt={movie.alt}
                  />
                </Link>
              ),
          )}
        </div>
      </div>
    );
  }
}

const movies = [
  {
    link: "decisaodepartir",
    image: decisaodepartir,
    alt: "decisaodepartir",
    nota: 8.5,
  },
  { link: "avatar2", image: avatar2, alt: "avatar2", nota: 6 },
  { link: "amsterdam", image: amsterdam, alt: "amsterdam", nota: 7.5 },
  { link: "dentecanino", image: dentecanino, alt: "dentecanino", nota: 9 },
  { link: "experimenter", image: experimenter, alt: "experimenter", nota: 8 },
  { link: "argentina", image: argentina, alt: "argentina", nota: 9.5 },
  { link: "achegada", image: achegada, alt: "achegada", nota: 10 },
  { link: "banshees", image: banshees, alt: "banshees", nota: 7.5 },
  { link: "entrefacas", image: entrefacas, alt: "entrefacas", nota: 10 },
  { link: "adaonegro", image: adaonegro, alt: "adaonegro", nota: 2 },
  { link: "resistencia", image: thecreator, alt: "thecreator", nota: 9 },
];

export default Cinema;
