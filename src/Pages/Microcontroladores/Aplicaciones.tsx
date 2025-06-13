import Background from "@components/Base/Background";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import ListDisc from "@components/Base/ListDisc";

const Aplicaciones = () => {
return (
<Background text="Aplicaciones de Microcontroladores">
ñ
    <SubText>¿Para qué se utilizan los microcontroladores?</SubText>
    <Parrafo>
        Los microcontroladores son el corazón de miles de dispositivos inteligentes
        que usamos todos los días. Gracias a su capacidad de procesar datos,
        controlar señales y comunicarse, pueden automatizar tareas, monitorear
        procesos, tomar decisiones y responder a estímulos del entorno en tiempo real.
    </Parrafo>

    <Parrafo>
        Desde una simple luz que se enciende automáticamente, hasta un dron que se
        estabiliza en vuelo, hay un microcontrolador detrás.
    </Parrafo>

    <SubText>Áreas de aplicación de los microcontroladores</SubText>

    <ListDisc>
    Automatización industrial
        <li>Control de maquinaria en líneas de producción.</li>
        <li>Sistemas de medición, pesaje, conteo y clasificación.</li>
        <li>Controladores programables (PLC miniatura).</li>
        <li>Lectura de sensores: temperatura, presión, caudal.</li>
        <li>Activación de alarmas o sistemas de emergencia.</li>
    </ListDisc>

    <ListDisc>
    Domótica (automatización del hogar)
        <li>Control de iluminación inteligente.</li>
        <li>Regulación de temperatura con termostatos.</li>
        <li>Automatización de persianas, puertas, alarmas y cámaras.</li>
        <li>Integración con asistentes de voz.</li>
    </ListDisc>

    <ListDisc>
    Robótica
        <li>Robots móviles autónomos o por control remoto.</li>
        <li>Brazos robóticos programables.</li>
        <li>Sensores ultrasónicos, infrarrojos o giroscopios.</li>
        <li>Control de servomotores y motores paso a paso con PWM.</li>
    </ListDisc>

    <ListDisc>
    Vehículos y automoción
        <li>Sistemas ECU, airbags y frenos ABS.</li>
        <li>Paneles digitales y sensores de estacionamiento.</li>
        <li>Encendido automático de luces y cerraduras inteligentes.</li>
    </ListDisc>

    <ListDisc>
    Electrónica de consumo
        <li>Relojes digitales, cámaras y videojuegos portátiles.</li>
        <li>Electrodomésticos con programas automatizados.</li>
        <li>Televisores con paneles inteligentes y control remoto.</li>
    </ListDisc>

    <ListDisc>
    Medicina y salud
        <li>Medidores de glucosa y presión digital.</li>
        <li>Monitoreo cardíaco y dosificadores de medicamentos.</li>
        <li>Prótesis inteligentes.</li>
    </ListDisc>

    <ListDisc>
    Agricultura inteligente
        <li>Riego automático basado en sensores de humedad.</li>
        <li>Monitoreo ambiental: temperatura, humedad, pH.</li>
        <li>Control de iluminación y ventilación en invernaderos.</li>
    </ListDisc>

    <SubText>Proyectos comunes para estudiantes y makers</SubText>
    <ListDisc>
        <li>Semáforo con temporizadores.</li>
        <li>Alarma con sensor PIR y zumbador.</li>
        <li>Termómetro digital con pantalla LCD.</li>
        <li>Estación meteorológica con sensores ambientales.</li>
        <li>Control de acceso con teclado y lector RFID.</li>
        <li>Seguidor de línea con sensores infrarrojos.</li>
    </ListDisc>

    <Parrafo>
        Microcontroladores como Arduino, PIC o STM32 permiten prototipar ideas reales con bajo costo.
    </Parrafo>

    <SubText>¿Qué microcontrolador elegir?</SubText>
    <Parrafo>Dependerá de:</Parrafo>
    <ListDisc>
        <li>Cantidad de entradas/salidas.</li>
        <li>Requerimientos de ADC, PWM, UART, I²C, SPI.</li>
        <li>Velocidad de procesamiento y consumo energético.</li>
        <li>Facilidad de programación y soporte de herramientas.</li>
    </ListDisc>

    <Parrafo>Ejemplos:</Parrafo>
    <ListDisc>
        <li>ATmega328P (Arduino UNO): fácil de usar, ideal para aprender.</li>
        <li>PIC16F877A: versátil y robusto, muy usado en industria.</li>
        <li>STM32F103C8T6 (Blue Pill): económico y potente.</li>
        <li>ESP32: con WiFi y Bluetooth integrados.</li>
    </ListDisc>

    <SubText>Conclusión</SubText>
    <Parrafo>
        Los microcontroladores están en el centro de la revolución digital embebida. Son
        esenciales en la automatización, inteligencia artificial distribuida, IoT y robótica.
        Comprender sus aplicaciones permite crear soluciones reales e innovadoras para mejorar el mundo físico.
    </Parrafo>

    </Background>
  );
};

export default Aplicaciones;
