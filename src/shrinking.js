import React, { Component } from "react";
import shrinking from "./components/img/shrinking.jpg";
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
        <h3>Shrinking - 1ª Temporada</h3>
        <div className="caixa">
          <img src={shrinking} alt="shrinking" className="imgs" />
          <Typography variant="h6">
            Shrinking nova série dos criadores de Ted Lasso veio como uma série
            que eu não apostava muito, mas ao assitir só me diverti, talvez por
            acertar em cheio onde Ted Lasso errou, que foi o de tratar de um
            assunto sério sem perder o bom humor ou se afundar e de um início
            mais veloz, além de conter personagens com tramas muito mais
            estabelecidas e que desenvolve outros personagens bem mais
            facilmente ao invés de simplemente jogar pra escanteio o seu
            protagonista e por ultimo mas não menos importante, Harisson Ford
            que nessa série utilizam de maneira brilhante de seu esteriótipo de
            personagem de velho ranzinza e transformam ele num personagem cheio
            de camadas e muito engraçado além de também ter seus próprios
            conflitos, assim como todos os personagens.
          </Typography>
        </div>
        <h3>Lista dos Episódios</h3>
        <h3>1. Coin Flip 7,5/10 </h3>
        <h3> 2. Fortress of Solitude 8/10 </h3>
        <h3> 3. Fifteen Minutes 9,5/10 </h3>
        <h3> 4. Potatoes 8,5/10 </h3>
        <h3> 5. Woof 8/10 </h3>
        <h3> 6. Imposter Syndrome 10/10 </h3>
        <h3> 7. Apology Tour 8/10 </h3>
        <h3> 8. Boop 10/10 </h3>
        <h3> 9. Moving Forward 8,5/10 </h3>
        <h3> 10. Closure 10/10 </h3>
        <h3>Nota geral da Temporada:</h3>
        <h3>9/10</h3>
      </div>
    );
  }
}

export default Tv;
