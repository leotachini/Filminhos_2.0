import React, { Component } from "react";
import entrefacas from "./components/img/entrefacas.jpg";
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
        <h3>Entre Facas e Segredos</h3>
        <div className="caixa">
          <img src={entrefacas} alt="entrefacas" className="imgs" />
          <Typography variant="h6">
            Esse filme de mistério me surpreendeu muito no ano de 2019, já que
            gosto naturalmente de qualquer bomba que tenha algum mistério
            envolvido, mas esse é diferente com sua narrativa a lá Agatha
            Christie misturado um pouco com The White Lotus, pois tem um
            mistério muito bem escrito, personagens muito bem escritos e um
            roteito especialmente bem escrito, contendo piadas ácidas sobre a
            hipocrisia dos ricos e somando isso aos excelentes atores que
            integram o elenco, mas o filme teve um azar imenso pois tem um dos
            melhores roteiros de todos os tempos e foi concorrer logo contra
            Parasita(2019) que rapou muitos prêmios no Oscar e tinha um roteiro
            igualmente incrível.
          </Typography>
        </div>
        <h3>10/10</h3>
      </div>
    );
  }
}

export default Cinema;
