import React, { Component } from "react";
import { Link } from "react-router-dom";
import ruptura from "./components/img/ruptura.jpg";
import Only_Murders2 from "./components/img/only_murders2.webp";
import Clickbait from "./components/img/clickbait.jpg";
import shrinking from "./components/img/shrinking.jpg";
import mayans from "./components/img/mayans.jpg";
import ninguempodesaber from "./components/img/ninguempodesaber.jpg";
import { Typography, Slider } from "@mui/material";
import "./App.css";

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
        image: Only_Murders2,
        alt: "only2",
        link: "Only_Murders2",
        nota: 9,
      },
      {
        image: Clickbait,
        alt: "bait",
        link: "Clickbait",
        nota: 6,
      },
      {
        image: shrinking,
        alt: "shrink",
        link: "shrinking",
        nota: 9,
      },
      {
        image: mayans,
        alt: "mayans",
        link: "mayans",
        nota: 8,
      },
      {
        image: ninguempodesaber,
        alt: "ninguempodesaber",
        link: "ninguempodesaber",
        nota: 7,
      },
      {
        image: ruptura,
        alt: "ruptura",
        link: "ruptura",
        nota: 10,
      },
    ];

    return (
      <div sx={{ padding: "20px" }}>
        <Typography
          className="titulo"
          sx={{ textAlign: "center", paddingBottom: "20px", fontSize: "30px" }}
        >
          Séries
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
          {series.map(
            (serie, index) =>
              serie.nota >= notaFiltro && (
                <Link key={index} to={`/${serie.link}`}>
                  <img
                    className="grid-item"
                    src={serie.image}
                    alt={serie.alt}
                  />
                </Link>
              ),
          )}
        </div>
      </div>
    );
  }
}

export default Tv;
