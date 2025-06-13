import Background from "@components/Base/Background";
import ListDisc from "@components/Base/ListDisc";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const Inicio = () => {
  return (
    <Background text="Guía de AMC 1 - Arquitectura de Máquinas">
      <TinyText>
        Bienvenido a este sitio educativo dedicado a los contenidos de la
        asignatura Arquitectura de Máquinas I de la carrera de Computación. Aquí
        encontrarás explicaciones accesibles y estructuradas sobre temas clave
        como la arquitectura interna de los microprocesadores, el funcionamiento
        de los microcontroladores, la programación en lenguaje ensamblador el{" "}
        manejo de interrupciones y las diferencias esenciales entre hardware de
        propósito general y embebido.
        <br />
        <br />
        Además, incluimos ejemplos prácticos, diagramas explicativos y guías
        paso a paso para entender cómo interactúan los registros, buses,
        temporizadores y puertos de E/S en sistemas digitales modernos. Esta
        guía está pensada tanto para reforzar tus conocimientos teóricos como
        para ayudarte en el desarrollo de proyectos reales de automatización,
        domótica y electrónica aplicada.
      </TinyText>

      <div className="flex flex-col items-center mt-50">
        <SubText>Esta página fue elaborada por:</SubText>
        <ListDisc>
          <li>
            <strong>Francisco Castillo - Carnet: 2020-0399U</strong>
          </li>
          <li>
            <strong>Christian Mongalo - Carnet: 2019-0848U</strong>
          </li>
          <li>
            <strong>Luis López - Carnet: 2022-0262U </strong>
          </li>
          <li>
            <strong>Nohelia Baldiosea - Carnet: 2022-0479U</strong>
          </li>
          <li>
            <strong>Ashley Rocha - Carnet: 2022-0347</strong>
          </li>
        </ListDisc>
      </div>
    </Background>
  );
};

export default Inicio;
