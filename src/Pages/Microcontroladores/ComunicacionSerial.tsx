import Background from "@components/Base/Background";
import ListDecimal from "@components/Base/ListDecimal";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const ComunicaciónSerial = () => {
return (

    <Background text="Comunicación Serial en Microcontroladores">

    <SubText>¿Qué es la comunicación serial?</SubText>
    <Parrafo>
        La comunicación serial es una técnica en la que los datos se transmiten bit a bit por una única línea. 
        Es la forma más común en que los microcontroladores se comunican con sensores, módulos o incluso PCs.
    </Parrafo>

    <SubText>Tipos comunes de comunicación serial</SubText>

    <ListDisc>
        UART / USART (Universal Asynchronous Receiver/Transmitter)
            <li>Comunicación asíncrona, no requiere señal de reloj externa.</li>
            <li>Usa dos líneas: <strong>TX</strong> (transmisión) y <strong>RX</strong> (recepción).</li>
            <li>Configuración de velocidad (baud rate), bits de datos, paridad, etc.</li>
            <li>Conexión común con computadoras (vía USB-TTL), módulos Bluetooth, GPS, GSM.</li>
            <li>Ejemplo en Arduino:</li>
        <code>
        Serial.begin(9600); // Inicializa a 9600 bps<br/>
        Serial.println("Hola PC");
        </code>
            <li>Ideal para depurar programas mediante mensajes.</li>
    </ListDisc>

    <ListDisc>
        SPI (Serial Peripheral Interface)
            <li>Comunicación síncrona de alta velocidad.</li>
            <li>Usa 4 líneas: MOSI, MISO, SCK, SS.</li>
            <li>Ideal para sensores rápidos, pantallas TFT, módulos RF, memorias SPI.</li>
            <li>Ventajas: Muy rápida (MHz), robusta, admite múltiples dispositivos esclavos.</li>
            <li>El maestro controla el reloj y la selección de esclavos.</li>
    </ListDisc>

    <ListDisc>
        I²C (Inter-Integrated Circuit)
            <li>Comunicación síncrona, bidireccional y multipunto.</li>
            <li>Usa solo 2 líneas: SDA (datos) y SCL (reloj).</li>
            <li>Cada dispositivo tiene una dirección única.</li>
            <li>Ideal para sensores digitales, pantallas OLED, RTC, EEPROM.</li>
            <li>Ventajas: simplicidad, hasta 127 dispositivos, ideal para redes simples.</li>
    </ListDisc>

    <SubText>Comparación entre UART, SPI e I²C</SubText>
    <table>
        <thead>
        <tr>
            <th>Característica</th>
            <th>UART</th>
            <th>SPI</th>
            <th>I²C</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Número de líneas</td>
            <td>2 (TX, RX)</td>
            <td>4 (MOSI, MISO, SCK, SS)</td>
            <td>2 (SDA, SCL)</td>
        </tr>
        <tr>
            <td>Velocidad</td>
            <td>Media</td>
            <td>Muy alta</td>
            <td>Media-baja</td>
        </tr>
        <tr>
            <td>Dirección</td>
            <td>Punto a punto</td>
            <td>Maestro-esclavo</td>
            <td>Maestro-multiesclavo</td>
        </tr>
        <tr>
            <td>Sincronización</td>
            <td>Asíncrona</td>
            <td>Síncrona</td>
            <td>Síncrona</td>
        </tr>
        <tr>
            <td>Facilidad de uso</td>
            <td>Alta</td>
            <td>Alta</td>
            <td>Alta</td>
        </tr>
        <tr>
            <td>Ejemplos de uso</td>
            <td>Bluetooth, PC</td>
            <td>Pantallas, memorias</td>
            <td>Sensores, RTC</td>
        </tr>
        </tbody>
    </table>

    <SubText>Aplicaciones prácticas</SubText>
    <ListDisc>
        <li>Comunicación con computadoras para monitoreo o control.</li>
        <li>Uso de módulos como HC-05 (Bluetooth), RFID (SPI), MPU6050 (I²C).</li>
        <li>Interacción con periféricos: pantallas, teclados, sensores, memorias.</li>
        <li>Sincronización entre varios microcontroladores.</li>
    </ListDisc>

    <SubText>¿Cómo se configura?</SubText>
    <Parrafo>
        La configuración varía según el microcontrolador y lenguaje, pero normalmente se definen:
    </Parrafo>
    <ListDisc>
            <li>Velocidad de transmisión (baud rate).</li>
            <li>Número de bits por paquete.</li>
            <li>Paridad y bits de parada (en UART).</li>
            <li>Asignación de pines y selección del protocolo en registros o funciones.</li>
            <li>Ejemplo en Arduino (UART):</li>
        <code>
        Serial.begin(9600);<br/>
        Serial.write('A');<br/>
        char c = Serial.read();
        </code>
    </ListDisc>

    <SubText>Consideraciones importantes</SubText>
    <ListDisc>
        <li>Verificar compatibilidad de voltajes (3.3V vs 5V).</li>
        <li>Puede ser necesario usar conversores de nivel lógico.</li>
        <li>Algunos microcontroladores incluyen varios módulos UART, SPI o I²C.</li>
    </ListDisc>

    <SubText>Conclusión</SubText>
    <Parrafo>
        La comunicación serial es esencial para expandir las capacidades de un microcontrolador. 
        Ya sea mediante UART, SPI o I²C, permite la interacción con sensores, módulos externos 
        y otros microcontroladores. Dominar estas interfaces es clave para crear proyectos 
        conectados, funcionales y eficientes.
    </Parrafo>

    </Background>
  );
};

export default ComunicaciónSerial;
