import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/DMDeboraMoreira" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/debo-moreira/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Portafolio diseñado y desarrollado por <a href="https://github.com/tuUsuario" target="_blank" rel="noreferrer">Débora</a> con 💜</p>
    </footer>
  );
}

export default Footer;
