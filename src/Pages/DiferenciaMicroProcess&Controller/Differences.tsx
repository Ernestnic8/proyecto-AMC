import Background from "@components/Base/Background";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SubText from "@components/Base/SubText";
import Parrafo from "@components/Base/Parrafo";
import TinyText from "@components/Base/TinyText";
import ListDisc from "@components/Base/ListDisc";

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
    <Background text="Diferencias entre Microprocesador y Microcontrolador">
      <SubText>
        ¿Qué es un Microprocesador?
      </SubText>
      <Parrafo>
        Un microprocesador es un circuito integrado que actúa como unidad
        central de procesamiento (CPU) de una computadora. Contiene la lógica
        necesaria para ejecutar instrucciones, manejar datos y coordinar las
        operaciones del sistema.Este sitio fue creado para compartir
        información, apuntes y guías sobre los temas que hemos visto en la clase
        de AMC 1 de la carrera de Computación. Aquí encontrarás explicaciones
        accesibles sobre conceptos como formato RAW, clonación de discos,
        diferencias entre UEFI y Legacy, cómo usar el boot menu y mucho más.
      </Parrafo>
      <TinyText>
        Características principales:
      </TinyText>
      <ListDisc>
        <li>Solo incluye la CPU.</li>
        <li>
          Necesita componentes externos como memoria RAM, ROM, puertos de
          entrada/salida y temporizadores.
        </li>
        <li>
          Usado en sistemas complejos como computadoras personales, laptops y
          servidores.
        </li>
      </ListDisc>
      <SubText>
        ¿Qué es un Microcontrolador?
      </SubText>
      <Parrafo>
        Un microcontrolador (MCU) es un sistema completo en un solo chip,
        diseñado para controlar dispositivos embebidos. Integra no solo la CPU,
        sino también:
        <ListDisc>
          <li>Memoria (RAM, ROM, EEPROM)</li>
          <li>Puertos de entrada/salida (digitales y analógicos)</li>
          <li>Temporizadores y contadores</li>
          <li>Convertidores ADC/DAC</li>
          <li>Módulos de comunicación (UART, SPI, I²C)</li>
        </ListDisc>
      </Parrafo>
      <TinyText>
        Características principales:
      </TinyText>
      <ListDisc>
        <li>Autocontenidos y compactos.</li>
        <li>Bajo consumo energético.</li>
        <li>Ideales para tareas específicas y repetitivas</li>
      </ListDisc>
      <SubText>
        Comparación entre Microprocesador y Microcontrolador
      </SubText>
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
      <SubText>
        ¿Por qué es importante conocer sus diferencias?
      </SubText>
      <ListDisc>
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
      </ListDisc>
      <SubText>
        Casos de uso prácticos
      </SubText>
      <TinyText>Microprocesador:</TinyText>
      <ListDisc>
        <li>
          Computadora personal que corre múltiples aplicaciones simultáneamente.
        </li>
        <li>Consolas de videojuegos modernas.</li>
        <li>Equipos de diseño gráfico o modelado 3D.</li>
      </ListDisc>
      <TinyText>Microcontrolador:</TinyText>
      <ListDisc>
        <li>Un sistema automático que riega plantas cada 8 horas.</li>
        <li>Un microondas que detecta el tiempo y potencia necesarios</li>
        <li>Un termostato que regula la temperatura del aire acondicionado.</li>
      </ListDisc>
    </Background>
  );
};

export default Differences;
