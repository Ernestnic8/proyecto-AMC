import Background from "@components/Base/Background";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Differences = () => {
  function createData(
    characteristics: string,
    microprosessor: string,
    microcontroller: string
  ) {
    return { characteristics, microprosessor, microcontroller };
  }

  const rows = [
    createData(
      "Componentes integradoss",
      "Solo CPU",
      "CPU + RAM + ROM + E/S + temporizadores"
    ),
    createData("Memoria", "Externa", "Interna e integrada"),
    createData("Consumo energético", "Alto", "Bajo"),
    createData("Costo", "Más caro", "Económico"),
    createData("Velocidad de procesamiento", "Alta", "Media"),
    createData(
      "Aplicaciones típicas",
      "Computadoras, laptops, servidores",
      "Automatización, sistemas embebidos"
    ),
    createData("Tamaño", "Más grande y complejo", "Pequeño y compacto"),
    createData(
      "Facilidad de programación",
      "Requiere más configuración",
      "Enfocado en control y fácil desarrollo"
    ),
    createData("Ejemplos", "Intel Core, AMD Ryzen", "PIC, AVR, Arduino, STM32"),
  ];
  return (
    <Background>
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Diferencias entre Microprocesador y Microcontrolador
      </h1>
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
        ¿Qué es un Microprocesador?
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-justify">
        Un microprocesador es un circuito integrado que actúa como unidad
        central de procesamiento (CPU) de una computadora. Contiene la lógica
        necesaria para ejecutar instrucciones, manejar datos y coordinar las
        operaciones del sistema.Este sitio fue creado para compartir
        información, apuntes y guías sobre los temas que hemos visto en la clase
        de AMC 1 de la carrera de Computación. Aquí encontrarás explicaciones
        accesibles sobre conceptos como formato RAW, clonación de discos,
        diferencias entre UEFI y Legacy, cómo usar el boot menu y mucho más.
      </p>
      <p className="text-gray-700 mb-2 font-bold text-lg pl-2">
        Características principales:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5">
        <li>Solo incluye la CPU.</li>
        <li>
          Necesita componentes externos como memoria RAM, ROM, puertos de
          entrada/salida y temporizadores.
        </li>
        <li>
          Usado en sistemas complejos como computadoras personales, laptops y
          servidores.
        </li>
      </ul>
      <h1 className="text-2xl font-bold text-center mt-6 mb-6 text-blue-800">
        ¿Qué es un Microcontrolador?
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-justify">
        Un microcontrolador (MCU) es un sistema completo en un solo chip,
        diseñado para controlar dispositivos embebidos. Integra no solo la CPU,
        sino también:
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5 mt-3">
          <li>Memoria (RAM, ROM, EEPROM)</li>
          <li>Puertos de entrada/salida (digitales y analógicos)</li>
          <li>Temporizadores y contadores</li>
          <li>Convertidores ADC/DAC</li>
          <li>Módulos de comunicación (UART, SPI, I²C)</li>
        </ul>
      </p>
      <p className="text-gray-700 mb-2 font-bold text-lg pl-2">
        Características principales:
      </p>
      <ul className="list-disc list-inside mb-5 text-gray-700 space-y-2 pl-5">
        <li>Autocontenidos y compactos.</li>
        <li>Bajo consumo energético.</li>
        <li>Ideales para tareas específicas y repetitivas</li>
      </ul>
      <p className="text-blue-700 mb-4 text-center font-bold text-2xl pl-2">
        Comparación entre Microprocesador y Microcontrolador
      </p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="table">
          <TableHead style={{ backgroundColor: "#00fbb4" }}>
            <TableRow>
              <TableCell>Caracteristicas</TableCell>
              <TableCell align="center">Microprocesador</TableCell>
              <TableCell align="center">Microcontrolador</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: "rgba(126, 123, 123, 0.5)" }}>
            {rows.map((row) => (
              <TableRow
                key={row.characteristics}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.characteristics}
                </TableCell>
                <TableCell align="left">{row.microprosessor}</TableCell>
                <TableCell align="left">{row.microcontroller}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p className="text-blue-700 mt-5 mb-4 text-center font-bold text-2xl pl-2">
        ¿Por qué es importante conocer sus diferencias?
      </p>
      <ul className="list-disc list-inside mb-5 text-gray-700 space-y-2 pl-5">
        <li>
          Permite elegir el componente adecuado según el tipo de sistema que se
          desea desarrollar.
        </li>
        <li>
          Ayuda a optimizar costos, consumo energético y complejidad del
          sistema.
        </li>
        <li>
          Facilita la transición de aplicaciones de alto rendimiento a sistemas
          embebidos y viceversa.
        </li>
      </ul>
      <p className="text-blue-700 mb-4 text-center font-bold text-2xl pl-2">
        Casos de uso prácticos
      </p>
      <p className="text-gray-600 pl-2 text-md font-bold">Microprocesador:</p>
      <ul className="list-disc list-inside mb- text-gray-700 space-y-2 pl-10">
        <li>
          Computadora personal que corre múltiples aplicaciones simultáneamente.
        </li>
        <li>Consolas de videojuegos modernas.</li>
        <li>Equipos de diseño gráfico o modelado 3D.</li>
      </ul>
      <p className="text-gray-600 pl-2 text-md font-bold">Microcontrolador:</p>
      <ul className="list-disc list-inside mb-5 text-gray-700 space-y-2 pl-10">
        <li>Un sistema automático que riega plantas cada 8 horas.</li>
        <li>Un microondas que detecta el tiempo y potencia necesarios</li>
        <li>Un termostato que regula la temperatura del aire acondicionado.</li>
      </ul>
    </Background>
  );
};

export default Differences;
