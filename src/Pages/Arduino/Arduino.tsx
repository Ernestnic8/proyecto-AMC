import Background from "@components/Base/Background";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";

const Arduino = () => {
  return (
    <Background text="Arduino - Introducción a la Plataforma">
      <SubText>¿Qué es el lenguaje de Arduino?</SubText>
      <Parrafo>
        El lenguaje de Arduino es una simplificación del lenguaje de
        programación C/C++, diseñado específicamente para facilitar la
        programación de microcontroladores, especialmente aquellos compatibles
        con las placas Arduino (como el ATmega328P).
      </Parrafo>
      <SubText>Características principales</SubText>
      <ListDisc>
        <li>
          Basado en C/C++: puedes usar estructuras, punteros, funciones,
          librerías, etc.
        </li>
        <li>
          Sintaxis simplificada: funciones básicas como digitalWrite() o
          analogRead() hacen fácil trabajar con hardware.
        </li>
        <li>
          Altamente legible: enfocado en la claridad, no en la complejidad.
        </li>
        <li>
          Soporte de bibliotecas: puedes extender su funcionalidad mediante
          librerías (pantallas, sensores, comunicación, etc.)
        </li>
        <li>
          Compatible con miles de placas: Arduino UNO, Mega, Nano, ESP32, STM32
          (mediante adaptadores), entre otras.
        </li>
      </ListDisc>
      <SubText>Ventajas del lenguaje de Arduino</SubText>
      <ListDisc>
        <li>Rápido de aprender</li>
        <li>Ideal para educación y prototipado</li>
        <li>Amplio ecosistema de librerías y documentación</li>
        <li>Código fácilmente portable a otros microcontroladores</li>
        <li>Comunidad global activa</li>
      </ListDisc>
      <SubText>Limitaciones</SubText>
      <ListDisc>
        <li>No siempre es tan eficiente como C puro</li>
        <li>
          Oculta detalles de bajo nivel (útil para principiantes, pero limitante
          para expertos)
        </li>
        <li>
          No adecuado para sistemas críticos o de tiempo real exigente (aunque
          puede adaptarse con C)
        </li>
      </ListDisc>
      <div className="text-center mt-8 mb-10">
        <SubText>Ejemplos Funcionales del Lenguaje Arduino</SubText>
        <a
          href="/Arduino.pdf"
          download
          className="dark:bg-amber-300 inline-block mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Descargar PDF
        </a>
      </div>
      <SubText>Conclusión</SubText>
      <Parrafo>
        El lenguaje de Arduino es una puerta de entrada poderosa al mundo de la
        programación de microcontroladores. Combina la sencillez con la
        flexibilidad del C/C++, permitiendo crear desde proyectos educativos
        hasta soluciones reales de automatización, robótica, IoT y electrónica
        creativa.
      </Parrafo>
    </Background>
  );
};

export default Arduino;
