import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Background from "./components/Background";
import SubText from "./components/SubText";
import Parrafo from "./components/Parrafo";
import TinyText from "./components/TinyText";
import ListDecimal from "./components/ListDecimal";
import ListDisc from "./components/ListDisc";


const StructureMC = () => {
  function createMemoryData(type: string, use: string, characteristics: string) {
    return { type, use, characteristics };
}

const memoryRows = [
    createMemoryData("ROM", "Almacenar el programa (firmware)", "Solo lectura, no se borra al apagar"),
    createMemoryData("RAM", "Variables temporales y datos en ejecución", "Volátil, pierde datos al apagar"),
    createMemoryData("EEPROM / Flash", "Almacenamiento permanente de datos del usuario", "Regrabable, no volátil"),
];

return (
    <div>
    <Background text="Estructura de los MicroControladores">
        <SubText>¿Cómo está compuesto un microcontrolador?</SubText>
        <Parrafo>
            Un microcontrolador es un sistema completo en un solo chip. Contiene todos los componentes esenciales que una computadora necesita para funcionar, integrados en un solo circuito integrado (CI o IC).
        </Parrafo>
        <ListDisc>
            <li>Unidad Central de Procesamiento (CPU)</li>
            <li>Memoria (RAM, ROM, EEPROM)</li>
            <li>Puertos de Entrada/Salida (I/O)</li>
            <li>Periféricos (temporizadores, ADCs, PWM, etc.)</li>
            <li>Módulos de comunicación</li>
            <li>Reloj del sistema (oscilador)</li>
        </ListDisc>
        <TinyText>
            Esta arquitectura permite crear dispositivos compactos, eficientes y económicos.
        </TinyText>

        <SubText>🔧 Componentes clave del microcontrolador</SubText>

        <ListDecimal>
    <li><strong>CPU (Unidad Central de Procesamiento)</strong></li>
        <Parrafo>
        Es el "cerebro" del microcontrolador. Ejecuta instrucciones, maneja operaciones aritméticas y controla periféricos. ⚙️ Similar a una CPU tradicional pero optimizada para tareas específicas.
        </Parrafo>

        <li><strong>Memoria</strong></li>
        <Parrafo>
        Los microcontroladores incluyen varios tipos de memoria con diferentes propósitos:
        </Parrafo>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="memory-table">
            <TableHead style={{ backgroundColor: "#00fbb4" }}>
            <TableRow>
                <TableCell>Tipo</TableCell>
                <TableCell align="center">Uso principal</TableCell>
                <TableCell align="center">Características</TableCell>
            </TableRow>
            </TableHead>
            <TableBody style={{ backgroundColor: "rgba(126, 123, 123, 0.2)" }}>
            {memoryRows.map((row) => (
                <TableRow key={row.type}>
                <TableCell>{row.type}</TableCell>
                <TableCell align="center">{row.use}</TableCell>
                <TableCell align="center">{row.characteristics}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <li><strong>Puertos de Entrada/Salida (I/O)</strong></li>
        <Parrafo>
        Conectan el microcontrolador con el entorno: sensores, botones, LEDs, motores. Pueden funcionar como 
        entradas o salidas, e incluso manejar señales como PWM o ADC.
        </Parrafo>

        <li><strong>Temporizadores y Contadores</strong></li>
        <Parrafo>
        Permiten medir tiempo, generar retardos, contar eventos, o controlar motores. Algunos microcontroladores 
        incluyen varios temporizadores.
        </Parrafo>

        <li><strong>Convertidores Analógico-Digital (ADC)</strong></li>
        <Parrafo>
        Transforman señales analógicas en digitales. Son claves para leer sensores como temperatura, voltaje, 
        luz. Algunos microcontroladores también incluyen DACs.
        </Parrafo>

        <li><strong>Módulos de Comunicación</strong></li>
        <Parrafo>
        Permiten intercambiar datos con otros dispositivos usando protocolos como UART, SPI, I²C, USB, CAN, 
        o incluso WiFi y Bluetooth. Fundamentales en sistemas IoT.
        </Parrafo>

        <li><strong>Oscilador / Reloj del sistema</strong></li>
        <Parrafo>
        Marca el ritmo de operación. Puede ser un cristal externo o un reloj interno. Su frecuencia afecta directamente 
        el rendimiento y temporización del MCU.
        </Parrafo>
    </ListDecimal>
    </Background>
</div>
);
};

export default StructureMC;
