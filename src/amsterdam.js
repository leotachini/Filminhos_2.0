import React, { Component } from "react";
import amsterdam from "./components/img/amsterdam.jpg";
import { Typography } from "@mui/material";

class Cinema extends Component {
  render() {
    return (
      <div>
        <Typography
          className="titulo"
          sx={{ textAlign: "center", paddingBottom: "40px", fontSize: "30px" }}
        >
          Filmes
        </Typography>
        <h3>Amsterdam</h3>
        <div className="caixa">
          <img src={amsterdam} alt="amsterdam" className="imgs" />
          <Typography variant="h6">
            Uma produção repleta de atores habilidosos e premiados, porém com
            alguns deles muito subutilizados em um enredo extenso e tenta
            parecer um filme do Wes Anderson. Porém, o filme apresenta momentos
            brilhantes entre os 3 protagonistas que são muito carismáticos,
            enquanto o vilão principal do filme é extremamente sem sal, mas
            diverte em sua certa medida.
          </Typography>
        </div>
        <h3>7,5/10</h3>
      </div>
    );
  }
}

export default Cinema;
