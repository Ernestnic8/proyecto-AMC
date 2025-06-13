import Background from "@components/Base/Background";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";

const Introduction = () => {
return (
    <Background text="Introducción a los Microcontroladores">

    <SubText>¿Qué es un microcontrolador?</SubText>
    <Parrafo>
        Un microcontrolado (abreviado como MCU, Microcontroller Unit) es un 
        circuito integrado programable que incluye en un solo chip:
        
        <ul>
            <li>Una unidad central de procesamiento (CPU)</li>
            <li>Memoria (RAM, ROM, EEPROM)</li>
            <li>Periféricos de entrada/salida (I/O)</li>
            <li>Temporizadores, convertidores A/D, y más</li>
        </ul>

                <p>
            Está diseñado para controlar <strong>tareas específicas</strong> en dispositivos electrónicos embebidos.
        </p>
    </Parrafo>

    <table>
        <thead>
        <tr>
            <th>Característica</th>
            <th>Microprocesador</th>
            <th>Microcontrolador</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Función principal</td>
            <td >Ejecutar aplicaciones complejas</td>
            <td >Controlar tareas específicas</td>
        </tr>
        <tr>
            <td >Componentes integrados</td>
            <td >Solo CPU</td>
            <td >CPU + memoria + I/O + periféricos</td>
        </tr>
        <tr>
            <td>Uso</td>
            <td>Computadoras, laptops</td>
            <td>Electrodomésticos, robots, sistemas embebidos</td>
        </tr>
        <tr>
            <td>Requiere otros chips</td>
            <td>Sí (RAM, ROM, I/O externos)</td>
            <td>No (autónomo)</td>
        </tr>
        <tr>
            <td>Costo y consumo</td>
            <td>Mayor</td>
            <td>Menor</td>
        </tr>
        </tbody>
    </table>

    <SubText>¿Dónde se utilizan los microcontroladores?</SubText>
    <ListDisc>
        Están presentes en miles de dispositivos cotidianos. Algunos ejemplos:
            <li> Electrodomésticos inteligentes (lavadoras, microondas)</li>
            <li> Controles remotos</li>
            <li>Paneles de autos (control de velocidad, bolsas de aire)</li>
            <li>Sensores y actuadores industriales</li>
            <li>Relojes digitales, juguetes electrónicos</li>
            <li>Sistemas de riego automático</li>
            <li>Dispositivos médicos</li>
    </ListDisc>

    <ListDisc> 
        ¿Por qué usar un microcontrolador?
            <li>Son económicos y fáciles de conseguir.</li>
            <li>Tienen bajo consumo de energía.</li>
            <li>Ocupan poco espacio.</li>
            <li>Se programan fácilmente (ej: con C, ensamblador, Arduino).</li>
            <li>Son ideales para tareas automáticas y repetitivas.</li>
    </ListDisc>

    <ListDisc>
        Un microcontrolador puede:
            <li>Leer la temperatura desde un sensor.</li>
            <li>Compararla con un valor de referencia.</li>
            <li>Activar un ventilador si la temperatura es muy alta.</li>
            <li>Apagarlo cuando baja.</li>
    </ListDisc>
    
    </Background>
  );
};

export default Introduction;
