import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';


const frontendTechs = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Vite"
];

const backendTechs = [
  "Node.js",
  "Express",
  "Socket.IO",
  "Jest",
  "PostgreSQL",
  "MongoDB"
];

const toolsTechs = [
  "Git",
  "Testing",
  "Metodologías ágiles"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Mis Tecnologías</h1>
        <div className="skills-grid">

          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" className="icon" />
            <h3>Frontend</h3>
            <p>
              Construyo interfaces dinámicas y accesibles utilizando React, Next.js, TypeScript y JavaScript, con foco en rendimiento y experiencia de usuario. Domino la creación de diseños responsivos y componentes reutilizables para facilitar mantenimiento y escalabilidad.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tecnologías:</span>
              {frontendTechs.map((tech, index) => (
                <Chip key={index} className="chip" label={tech} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} size="3x" className="icon" />

            <h3>Backend</h3>
            <p>
              Desarrollo APIs robustas y eficientes con Node.js y Express, gestionando bases de datos SQL y MongoDB para garantizar integridad y disponibilidad de la información. Experiencia en autenticación, autorización y lógica de negocio compleja.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tecnologías:</span>
              {backendTechs.map((tech, index) => (
                <Chip key={index} className="chip" label={tech} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faTools} size="3x" className="icon" />

            <h3>Herramientas</h3>
            <p>
              Uso herramientas modernas como Git para control de versiones, Docker para contenedores, AWS para despliegue y testing automatizado para asegurar calidad. Me adapto rápido a nuevas tecnologías y metodologías ágiles para mejorar continuamente los proyectos.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tecnologías:</span>
              {toolsTechs.map((tech, index) => (
                <Chip key={index} className="chip" label={tech} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;






// import React from "react";
// import '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
// import Chip from '@mui/material/Chip';
// import '../assets/styles/Expertise.scss';

// const labelsFirst = [
//     "React",
//     "TypeScript",
//     "JavaScript",
//     "HTML5",
//     "CSS3",
//     "SASS",
//     "Flask",
//     "Python",
//     "SQL",
//     "PostgreSQL",
//     "Postman"
// ];

// const labelsSecond = [
//     "Git",
//     "GitHub Actions",
//     "Docker",
//     "AWS",
//     "Azure",
//     "Linux",
//     "Snowflake",
//     "Pandas",
//     "Selenium",
// ];

// const labelsThird = [
//     "OpenAI",
//     "Groq",
//     "LangChain",
//     "Qdrant",
//     "Hugging Face",
//     "LlamaIndex",
//     "Streamlit",
// ];

// function Expertise() {
//     return (
//     <div className="container" id="expertise">
//         <div className="skills-container">
//             <h1>Mis tecnologias</h1>
//             <div className="skills-grid">
//                 <div className="skill">
//                     <FontAwesomeIcon icon={faReact} size="3x"/>
//                     <h3>Full Stack Web Development</h3>
//                     <p>Frontend. He construido interfaces dinámicas y accesibles utilizando React, Next.js, TypeScript y JavaScript, con un enfoque en el rendimiento y la experiencia del usuario. Domino la creación de diseños responsivos y componentes reutilizables que facilitan el mantenimiento y escalabilidad.</p>
//                     <div className="flex-chips">
//                         <span className="chip-title">Tech stack:</span>
//                         {labelsFirst.map((label, index) => (
//                             <Chip key={index} className='chip' label={label} />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="skill">
//                     <FontAwesomeIcon icon={faDocker} size="3x"/>
//                     <h3>Dev Backend</h3>
//                     <p>Desarrollo APIs robustas y eficientes con Node.js y Express, gestionando bases de datos SQL y MongoDB para asegurar la integridad y disponibilidad de la información. Tengo experiencia en autenticación, autorización y manejo de lógica de negocio compleja.</p>
//                     <div className="flex-chips">
//                         <span className="chip-title">Tech stack:</span>
//                         {labelsSecond.map((label, index) => (
//                             <Chip key={index} className='chip' label={label} />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="skill">
//                     <FontAwesomeIcon icon={faPython} size="3x"/>
//                     <h3>Herramientas y otras tecnologías</h3>
//                     <p>Utilizo herramientas modernas como Git para el control de versiones, PostgreSQL y MongoDB para gestión de datos, y tecnologías de testing para garantizar la calidad del código. Me adapto fácilmente a nuevas tecnologías y metodologías ágiles para mejorar continuamente los proyectos.</p>
//                     <div className="flex-chips">
//                         <span className="chip-title">Tech stack:</span>
//                         {labelsThird.map((label, index) => (
//                             <Chip key={index} className='chip' label={label} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     );
// }

// export default Expertise;