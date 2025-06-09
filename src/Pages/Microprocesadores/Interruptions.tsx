import Background from "@components/Base/Background";
import ListDecimal from "@components/Base/ListDecimal";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const Interruptions = () => {
  return (
    <Background text="Manejo de Interrupciones">
      <SubText>¿Qué es una interrupción?</SubText>
      <Parrafo>
        Una interrupción es un mecanismo que permite al procesador detener
        temporalmente la ejecución de su programa actual para atender un evento
        urgente o prioritario.
        <br />
        Luego de atender la interrupción, el procesador retoma la ejecución
        donde se quedó.
        <br />
        <p className="font-light italic text-xs">
          Es como si el procesador dijera: “Espera, algo importante ocurrió. Lo
          resuelvo, y luego continúo con lo que estaba haciendo.”
        </p>
      </Parrafo>
      <SubText>¿Por qué son importantes?</SubText>
      <TinyText>Las interrupciones permiten que el sistema:</TinyText>
      <ListDisc>
        <li>
          Reaccione rápidamente a eventos externos (como presionar una tecla).
        </li>
        <li>
          Ejecute funciones específicas sin estar revisando constantemente el
          estado de un dispositivo.
        </li>
        <li>Ahorre recursos, evitando bucles de espera activos.</li>
      </ListDisc>
      <SubText>Tipos de interrupciones</SubText>
      <ListDecimal>
        <li className="font-bold">Interrupciones de hardware </li>
        <p>Provienen de dispositivos externos al procesador.</p>
        <ListDisc>
          <li>Teclado, ratón, reloj del sistema, puerto serie, etc.</li>
          <li>Generadas por controladores de hardware.</li>
          <li>
            Ejemplo: cuando presionas una tecla, se genera una interrupción para
            leerla.
          </li>
        </ListDisc>
        <li className="font-bold">Interrupciones de software</li>
        <p>
          Generadas explícitamente desde un programa mediante la instrucción
          INT.
        </p>
        <ListDisc>
          <li>
            Permiten llamar a funciones del sistema operativo (como mostrar
            texto, leer teclado, manejar archivos).
          </li>
          <li>Muy usadas en MS-DOS, emu8086, BIOS, etc</li>
          <p className="font-bold pl-3">Ejemplo:</p>
          <p>
            <code>
              MOV AH, 02h
              <br />
              MOV DL, 'A'
              <br />
              INT 21h ; Llama a la interrupción de impresión de carácter
            </code>
          </p>
          <p>El número (21h) indica el servicio del sistema a utilizar.</p>
        </ListDisc>
        <li className="font-bold">Interrupciones internas (excepciones)</li>
        <p>
          Ocurren debido a errores dentro del procesador o durante la ejecución
          de instrucciones.
        </p>
        <ListDisc>
          <li>División por cero.</li>
          <li>Instrucción inválida.</li>
          <li>Error de acceso a memoria.</li>
        </ListDisc>
      </ListDecimal>
      <SubText>Estructura de una interrupción</SubText>
      <ListDecimal>
        <li>El procesador guarda el estado actual (registro IP, banderas).</li>
        <li>
          Salta a la dirección del vector de interrupción (tabla predefinida).
        </li>
        <li>Ejecuta la rutina de servicio de interrupción (ISR).</li>
        <li>
          Al finalizar, la instrucción IRET devuelve el control al programa
          original.
        </li>
      </ListDecimal>
      <div className="mt-4 mb-4">
        <SubText>Rutina personalizada de interrupción (avanzado)</SubText>
        <TinyText>
          Se puede redefinir una interrupción (por ejemplo, INT 60h) para
          ejecutar código propio:
        </TinyText>
        <TinyText>
          <code>
            ORG 100h
            <br />
            MOV AX, SEG nueva_rutina
            <br />
            MOV DS, AX
            <br />
            MOV DX, OFFSET nueva_rutina
            <br />
            MOV AX, 2560h ; INT 60h = vector número 60h
            <br />
            INT 21h ; Redefinir vector
            <br />
            <br />
            MOV AH, 4Ch
            <br />
            INT 21h
            <br />
            <br />
            nueva_rutina:
            <br />
            ; código personalizado
            <br />
            IRET
          </code>
        </TinyText>
        <TinyText>
          Esto requiere conocimientos avanzados y acceso a la tabla de vectores.
        </TinyText>
      </div>
      <SubText>Consideraciones importantes</SubText>
      <ListDisc>
        <li>Las interrupciones deben ser rápidas y eficientes.</li>
        <li>
          En muchos sistemas se desactivan temporalmente durante la manipulación
          crítica de datos (usando CLI y STI)
        </li>
        <li>
          En microcontroladores, las interrupciones también manejan eventos como
          temporizadores, ADCs, puertos de entrada/salida, etc.
        </li>
      </ListDisc>
      <SubText>Conclusión</SubText>
      <Parrafo>
        Las interrupciones son una herramienta fundamental para diseñar sistemas
        eficientes, reactivos y multitarea. Aprender a usarlas permite manejar
        hardware de forma directa, crear servicios personalizados y optimizar el
        uso del procesador. Son esenciales en sistemas embebidos, operativos, y
        programación a bajo nivel.
      </Parrafo>
    </Background>
  );
};

export default Interruptions;
