import React, { Component } from "react";
import Clickbait from "./components/img/clickbait.jpg";
import { Typography } from "@mui/material";

class Tv extends Component {
  render() {
    return (
      <div>
        <Typography
          className="titulo"
          sx={{ textAlign: "center", paddingBottom: "40px", fontSize: "30px" }}
        >
          Séries
        </Typography>
        <h3>Clickbait - Minisérie</h3>
        <div className="caixa">
          <img src={Clickbait} alt="bait" className="imgs" />
          <Typography variant="h6">
            Antes de Falar o que achei da série digo que adoro suspenses
            baratos, daqueles bem simplórios e no catálogo da Netflix me
            apareceu essa série que tem um método interessante de contar a
            história que é a cada episósio é sobre o ponto de visto de um
            determinado personagem o que é legal no começo já que tanto os
            atores quanto os personagens representados no começo são muito bons,
            por exemplo a irmã, o detetive e a esposa, mas a partir daí os
            personagens vão se tornando cada vez mais desinteressantes tirando o
            6º episódio, e se eu fosse resumir a série eu diria que é a série
            que mais respeita seu nome, já que no começo parece bom, no meio se
            já está hipnotisado pela trama por pior que ela seja e no fim tudo
            que sobra é decepção, porque QUE CARALHO DE FINAL FOI AQUELE.
          </Typography>
        </div>
        <h3>Lista dos Episódios</h3>
        <h3>1. The Sister 7,5/10 </h3>
        <h3> 2. The Detective 9,5/10 </h3>
        <h3> 3. The Wife 7/10 </h3>
        <h3> 4. The Mistress 6/10 </h3>
        <h3> 5. The Reporter 6,5/10 </h3>
        <h3> 6. The Brother 8/10 </h3>
        <h3> 7. The Son 4/10 </h3>
        <h3> 8. The Answer 2/10 </h3>
        <h3>Nota geral da Temporada:</h3>
        <h3>6/10</h3>
      </div>
    );
  }
}

export default Tv;
