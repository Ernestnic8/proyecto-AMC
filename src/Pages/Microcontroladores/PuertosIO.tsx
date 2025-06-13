import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Background from "./components/Background";
import SubText from "./components/SubText";
import Parrafo from "./components/Parrafo";
import TinyText from "./components/TinyText";
import ListDecimal from "./components/ListDecimal";
import ListDisc from "./components/ListDisc";


const PuertosIO = () => {
return (
    <Background text="Puertos de Entrada & Salida">
        <SubText>¿Qué son los puertos de entrada/salida (I/O)?</SubText>
        <Parrafo>
            Los puertos de I/O (Input/Output) son los pines físicos del microcontrolador
            que permiten la interacción con el entorno externo. A través de ellos, el sistema
            puede recibir señales (entrada) o enviar señales (salida) hacia sensores, actuadores
            y otros dispositivos.
        </Parrafo>

        <TinyText>
            Son esenciales para que el microcontrolador se comunique con el mundo físico: botones,
            luces, motores, sensores, etc.
        </TinyText>

        <SubText>Tipos de puertos I/O</SubText>
        <ListDisc>
        <li>
            <strong>Puertos digitales:</strong> Trabajan con dos niveles de voltaje: 
            <em> LOW (0 lógico)</em> y <em>HIGH (1 lógico)</em>. Se configuran como entradas 
            (leer sensores, botones) o salidas (activar LEDs, relés, motores).
        </li>
        <li>
            <strong>Puertos analógicos:</strong> Usados para leer señales variables, como el voltaje
            de sensores. Requieren un convertidor ADC para digitalizar la señal. Suelen ser solo de entrada.
        </li>
        <li>
            <strong>Puertos de propósito especial:</strong> Algunos pines tienen funciones adicionales como:
            <em>PWM</em> (modulación por ancho de pulso), <em>USART/SPI/I2C</em> (comunicación serial),
            interrupciones externas, entre otras.
        </li>
        </ListDisc>

        <SubText>Configuración de puertos I/O</SubText>
        <Parrafo>
            Los microcontroladores utilizan registros especiales para configurar los puertos:
        </Parrafo>
        <table>
        <thead>
            <tr>
            <th>Registro</th>
            <th>Función</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td><code>DDRx</code></td>
            <td>Define la dirección del pin (entrada o salida)</td>
            </tr>
            <tr>
            <td><code>PORTx</code></td>
            <td>Establece el nivel de salida (HIGH o LOW)</td>
            </tr>
            <tr>
            <td><code>PINx</code></td>
            <td>Lee el estado del pin (entrada)</td>
            </tr>
        </tbody>
        </table>
        <TinyText>
            En otros microcontroladores como PIC o STM32 los nombres pueden variar.
        </TinyText>

        <SubText>Ejemplos de uso</SubText>
        <ListDisc>
            <li>
                <strong>Entrada digital:</strong> Un botón conectado a un pin con resistencia pull-down.
                Al presionarlo, el pin lee <em>HIGH</em>.
            </li>
            <li>
                <strong>Salida digital:</strong> Un LED conectado a un pin digital. Se enciende cuando el pin está en <em>HIGH</em>.
            </li>
            <li>
                <strong>Entrada analógica:</strong> Un sensor de temperatura proporciona un voltaje variable que se convierte en valor digital con un ADC.
            </li>
        </ListDisc>

        <SubText>Aplicaciones prácticas</SubText>
        <ListDisc>
            <li>Activar una alarma cuando se detecte movimiento.</li>
            <li>Controlar la intensidad de una luz con un potenciómetro.</li>
            <li>Leer botones para navegar en menús físicos.</li>
            <li>Contar niveles de agua usando sensores.</li>
        </ListDisc>

        <SubText>Consideraciones importantes</SubText>
        <ListDisc>
            <li>Los niveles de voltaje deben coincidir con el microcontrolador (5V, 3.3V, etc.).</li>
            <li>No todos los pines soportan todas las funciones.</li>
            <li>El uso de resistencias <em>pull-up</em> o <em>pull-down</em> es común para entradas estables.</li>
            <li>La cantidad y tipo de puertos varía según el modelo del microcontrolador.</li>
        </ListDisc>

        <TinyText>
            Comprender y utilizar adecuadamente los puertos de entrada/salida es clave para cualquier
            proyecto de electrónica o automatización, ya que representan la interfaz directa entre
            el software y el hardware.
        </TinyText>

    </Background>

);
};

export default PuertosIO;
