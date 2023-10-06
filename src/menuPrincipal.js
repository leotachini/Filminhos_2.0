import React from "react";
import { Typography } from "@mui/material";

function MenuPrincipal() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        className="titulo"
        sx={{ textAlign: "center", paddingBottom: "40px", fontSize: "30px" }}
      >
        Menu Principal
      </Typography>

      <div className="caixa" style={{ textAlign: "center" }}>
        <Typography variant="h6">
          Site que agrupa críticas feitas por mim de filmes e séries que eu
          venho assistindo recentemente
        </Typography>
      </div>
    </div>
  );
}

export default MenuPrincipal;
