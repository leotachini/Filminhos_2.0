import React, { Component } from "react";
import onlymurders1 from "./components/img/onlymurders1.jpg";
import Only_Murders2 from "./components/img/only_murders2.webp";
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

        <h3>Only Murders in the Building - A Série Completa</h3>
        <h3>Only Murders in the Building - 1ª Temporada</h3>
        <div className="caixa">
          <img src={onlymurders1} alt="only1" className="imgs" />
          <Typography variant="h6">
            Com uma leveza muito boa, um trio de protagonistas muito
            carismático, e as piadas de como pessoas adoram ouvir sobre
            tragédias, série conquista com a simplicidade e ao mesmo tempo uma
            trama cheia de pequenos plot twists e ao fato de ser bem curta, sem
            muitas barrigas no roteiro.
          </Typography>
        </div>
        <h3>Lista dos Episódios</h3>
        <h3>1. True Crime 9,5/10 </h3>
        <h3> 2. Who Is Tim Kono? 8,5/10 </h3>
        <h3> 3. How Well Do You Know Your Neighbors? 8/10 </h3>
        <h3> 4. The Sting 8,5/10 </h3>
        <h3> 5. Twist 8/10 </h3>
        <h3> 6. To Protect and Serve 7/10 </h3>
        <h3> 7. The Boy from 6B 9/10 </h3>
        <h3> 8. Fan Fiction 8,5/10 </h3>
        <h3> 9. Double Time 9/10 </h3>
        <h3>10. Open and Shut 9,5/10</h3>
        <h3>Nota geral da Temporada:</h3>
        <h3>8,5/10</h3>

        <h3>Only Murders in the Building - 2ª Temporada</h3>
        <div className="caixa">
          <img src={Only_Murders2} alt="only2" className="imgs" />
          <Typography variant="h6">
            A segunda tremporada conseguiu a proeza de ser melhor que a
            primeira, e por mais que isso seja discutível é a minha opinião,
            então vida que segue, voltando ao assunto essa temporada é bem mais
            bem resolvida no quesito do mistério que se torna menos previsível
            que na primeira, outro fator conhecemos muito mais sobre outros
            personagens e ao invés de parecerem apenas figurantes eles tem uma
            vida própria e como último fator foi "rocambolescamento" da
            história, em alguns momentos deixando com cara de novela, o que não
            é ruim, já que agora não é só o mistério que importa de ser
            resolvido e sim como cada um dos personagens tem de lidar com os
            próprios problemas.
          </Typography>
        </div>
        <h3>Lista dos Episódios</h3>
        <h3>1. Persons of Interest 9,5/10 </h3>
        <h3> 2. Framed 9/10 </h3>
        <h3> 3. The Last Day of Bunny Folger 10/10 </h3>
        <h3> 4. Here's Looking at You 9,5/10 </h3>
        <h3> 5. The Tell 10/10 </h3>
        <h3> 6. Performance Review 9/10 </h3>
        <h3> 7. Flipping the Pieces 9,5/10 </h3>
        <h3> 8. Hello, Darkness 9/10 </h3>
        <h3> 9. Sparring Partners 10/10 </h3>
        <h3>10. I Know Who Did It 10/10</h3>
        <h3>Nota geral da Temporada:</h3>
        <h3>9,5/10</h3>
      </div>
    );
  }
}

export default Tv;
