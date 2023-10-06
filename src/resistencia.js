import React, { Component } from "react";
import thecreator from "./components/img/thecreator.webp";
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
        <h3>Resistência</h3>
        <div className="caixa">
          <img src={thecreator} alt="thecreator" className="imgs" />
          <Typography variant="h6">
            "Apesar de ter um roteiro básico, o filme se destaca pelas boas
            atuações, especialmente a de John David Washington, que consegue
            salvá-lo com seu timing, e Madeleine Yuna Voyles, pela consistência
            que ela traz ao seu personagem. O diretor Gareth Edwards realmente
            sabe o que está fazendo, e isso, somado aos efeitos visuais muito
            bons, é impressionante considerando o orçamento de apenas 80 milhões
            de dólares. As performances notáveis, principalmente de John David
            Washington, injetam vida em uma narrativa simples, elevando a
            experiência do espectador. Madeleine Yuna Voyles também merece
            crédito pela solidez que traz ao seu papel, adicionando camadas à
            trama. O conhecimento de Gareth Edwards na direção é evidente,
            guiando o filme com maestria.
          </Typography>
        </div>
        <h3>9/10</h3>
      </div>
    );
  }
}

export default Cinema;
