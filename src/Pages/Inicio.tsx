import Background from "@components/Base/Background";
import TinyText from "@components/Base/TinyText";

const Inicio = () => {
  return (
    <Background text="Guía de AMC 1 - Arquitectura de Máquinas">
      <TinyText>
        Bienvenido a este sitio educativo dedicado a los contenidos de la
        asignatura <strong>Arquitectura de Máquinas I</strong> de la carrera de
        Computación. Aquí encontrarás explicaciones accesibles y estructuradas
        sobre temas clave como la{" "}
        <strong>arquitectura interna de los microprocesadores</strong>, el
        funcionamiento de los <strong>microcontroladores</strong>, la{" "}
        <strong>programación en lenguaje ensamblador</strong>, el{" "}
        <strong>manejo de interrupciones</strong> y las diferencias esenciales
        entre hardware de propósito general y embebido.
        <br />
        <br />
        Además, incluimos ejemplos prácticos, diagramas explicativos y guías
        paso a paso para entender cómo interactúan los registros, buses,
        temporizadores y puertos de E/S en sistemas digitales modernos. Esta
        guía está pensada tanto para reforzar tus conocimientos teóricos como
        para ayudarte en el desarrollo de proyectos reales de automatización,
        domótica y electrónica aplicada.
      </TinyText>
    </Background>
  );
};

export default Inicio;
