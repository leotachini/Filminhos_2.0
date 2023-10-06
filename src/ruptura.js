import React, { Component } from "react";
import ruptura from "./components/img/ruptura.jpg";
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
        <h3>Ruptura - 1ª Temporada</h3>
        <div className="caixa">
          <img src={ruptura} alt="ruptura" className="imgs" />
          <Typography variant="h6">
            Uma obra de arte televisiva, a primeira temporada de Severance une
            trama intrigante, atuações magistrais e uma escrita envolvente. A
            série desvenda não apenas segredos dos personagens, mas também da
            vida moderna, pintando uma vívida metáfora da alienação na era
            digital.{" "}
          </Typography>
        </div>
        <h3>Lista dos Episódios</h3>
        <h3>1. Good News About Hell 10/10 </h3>
        <h3> 2. Half Loop 9,5/10 </h3>
        <h3> 3. In Perpetuity 9,5/10 </h3>
        <h3> 4. The You You Are 10/10 </h3>
        <h3> 5. The Grim Barbarity of Optics and Design 9/10 </h3>
        <h3> 6. Hide and Seek 10/10 </h3>
        <h3> 7. Defiant Jazz 10/10 </h3>
        <h3> 8. What's for Dinner? 10/10 </h3>
        <h3> 9. The We We Are 10/10</h3>
        <h3>Nota geral da Temporada:</h3>
        <h3>10/10</h3>
      </div>
    );
  }
}

export default Tv;
