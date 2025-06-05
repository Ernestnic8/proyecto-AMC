import Background from "@components/Base/Background";

const Assambler = () => {
  return (
    <Background text={"Introducción al Lenguaje Ensamblador"}>
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
        ¿Qué es el lenguaje ensamblador?
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-justify">
        El lenguaje ensamblador (o assembly language) es un lenguaje de
        programación de bajo nivel que permite controlar directamente el
        hardware del microprocesador.
        <br />
        A diferencia de los lenguajes de alto nivel (como C, Python o Java), el
        ensamblador tiene una correspondencia directa uno a uno con las
        instrucciones de la arquitectura del procesador.
        <br />
        Esto significa que cada línea de código ensamblador representa una
        instrucción máquina específica.
      </p>
      <p className="text-gray-700 mb-2 font-bold text-lg pl-2">
        ¿Para qué se usa?
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5">
        <li>
          Para programar sistemas embebidos donde el rendimiento y el tamaño del
          código son críticos.
        </li>
        <li>En sistemas operativos, controladores, BIOS o firmware.</li>
        <li>En aplicaciones donde se requiere máximo control del hardware.</li>
        <li>
          Para optimizar código crítico que no puede depender de compiladores
          automáticos.
        </li>
      </ul>
      <p className="text-gray-700 mt-5 mb-3 font-bold text-md text-justify">
        El ensamblador permite interactuar con los registros, las
        interrupciones, la memoria y los dispositivos directamente
      </p>
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
        Estructura básica de un programa en ensamblador
      </h1>
      <p className="text-gray-700 mb-2 text-lg pl-2">
        Un programa típico en ensamblador está dividido en secciones:
      </p>

      <p className="text-gray-700 font-serif mt-5 mb-3 font-bold text-md text-justify">
        SECTION .data ;Sección de datos (variables)
        <br />
        msg db 'Hola', 0
        <br />
        <br />
        SECTION .text ; Sección de código
        <br />
        global _start _start:
        <br />
        <br />
        MOV AX, 1 ; Cargar valor en registro
        <br />
        AX INT 80h ; Llamada al sistema (Linux)
      </p>
      <p className="text-gray-700 mt-5 mb-3 font-bold text-md text-justify">
        {" "}
        Partes comunes:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5">
        <li>
          <strong>Etiquetas:</strong>
          puntos de referencia (por ejemplo, _start:).
        </li>
        <li>
          <strong>Instrucciones</strong>como MOV, ADD, JMP.
        </li>
        <li>
          <strong>Operandos:</strong>datos o direcciones con las que trabaja la
          instrucción.
        </li>
        <li>
          <strong>Comentarios:</strong>
          explicaciones que no afectan la ejecución (; en x86).
        </li>
      </ul>

      {/* <a
        href="/Ejemplos_ASM_10_Emu8086.pdf"
        download
        className="inline-block mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Descargar PDF
      </a> */}
    </Background>
  );
};

export default Assambler;
