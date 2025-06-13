import Background from "@components/Base/Background";
// import ListDecimal from "@components/Base/ListDecimal";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";


const Instruccion = () => {
  return (
    <Background text="Manejo de Interrupciones">
      <SubText>¿Qué es una interrupción?</SubText>
      <Parrafo>
        Una interrupción es un mecanismo que permite al procesador detener temporalmente la ejecución 
        de su programa actual para atender un evento urgente o prioritario. Luego de atender la interrupción, 
        el procesador retoma la ejecución donde se quedó.
      </Parrafo>
        <TinyText>Tipos de Interrupciones</TinyText>
      <ListDisc>
        <ol>
        <li>
            <strong>Interrupciones de Hardware</strong>
            <ul>
            <li>Provienen de dispositivos externos al procesador.</li>
            <li>Teclado, ratón, reloj del sistema, puerto serie, etc.</li>
            <li>Generadas por controladores de hardware.</li>
            <li><em>Ejemplo:</em> cuando presionas una tecla, se genera una interrupción para leerla.</li>
            </ul>
        </li>
        <li>
            <strong>Interrupciones de Software</strong>
            <ul>
            <li>Generadas explícitamente desde un programa mediante la instrucción INT.</li>
            <li>Permiten llamar a funciones del sistema operativo (como mostrar texto, leer teclado, manejar archivos).</li>
            <li>Muy usadas en MS-DOS, emu8086, BIOS, etc.</li>
            </ul>
        </li>
        <li>
            <strong>Interrupciones Internas</strong>
            <li>División por cero.</li>
            <li>Instrucción inválida.</li>
            <li>Error de acceso a memoria.</li>
        </li>
        </ol>
        </ListDisc>
      
      <SubText>Estructura de una interrupción</SubText>
      <ListDisc>
        <li>El procesador guarda el estado actual (registro IP, banderas).</li>
        <li>Salta a la dirección del vector de interrupción (tabla predefinida).</li>
        <li>Ejecuta la rutina de servicio de interrupción (ISR).</li>
        <li>Al finalizar, la instrucción IRET devuelve el control al programa original.</li>
      </ListDisc>
      <SubText>Consideraciones importantes</SubText>

    </Background>
  );
};

export default Instruccion;
