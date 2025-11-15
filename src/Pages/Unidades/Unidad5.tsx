import Background from "@components/Base/Background";
import ListDecimal from "@components/Base/ListDecimal";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";

const Unidad5 = () => {
  return (
    <Background text="Unidad 5: Unidad de Control">
      <SubText>La función de control</SubText>
      <Parrafo>
        La Unidad de Control coordina el ciclo de instrucción del CPU. Activa
        las señales necesarias para gobernar cada dispositivo, funcionando como
        un "titiritero" que controla las operaciones de carga, transferencia y
        ejecución.
      </Parrafo>

      <SubText>El ciclo de Instrucción</SubText>
      <ListDecimal>
        <li>
          FETCH: Leer la próxima instrucción (PC → MAR, activar READ).
          Incrementar PC.
        </li>
        <li>DECODE: MDR → IR y decodificación.</li>
        <li>EXECUTE: Depende del tipo de instrucción.</li>
      </ListDecimal>

      <SubText>Operaciones Básicas de Control</SubText>
      <ListDisc>
        <li>Transferir contenido entre registros.</li>
        <li>Leer o escribir en memoria.</li>
        <li>Ejecutar operaciones de la ALU.</li>
        <li>Incrementar o modificar el PC.</li>
        <li>Verificar interrupciones.</li>
        <li>Gestionar banderas y códigos de condición.</li>
        <li>Decodificar instrucciones.</li>
      </ListDisc>

      <SubText>Control de Registros</SubText>
      <Parrafo>
        Cada registro requiere líneas de control para habilitar la entrada y la
        salida. Se utilizan buffers de tercer estado para aislar registros del
        bus.
      </Parrafo>

      <SubText>Control de la Memoria</SubText>
      <Parrafo>
        La memoria está organizada por direcciones y permite dos operaciones:
        lectura y escritura. La UC controla señales como READ, WRITE y MFC.
      </Parrafo>

      <SubText>Ejecución de la ALU</SubText>
      <Parrafo>
        La ALU recibe dos operandos, ejecuta la operación y deposita el
        resultado en un latch temporal antes de enviarlo al destino.
      </Parrafo>

      <SubText>Modificar e Incrementar el PC</SubText>
      <Parrafo>
        El PC se incrementa según el tamaño de la instrucción. Para saltos,
        puede copiarse directamente la dirección o sumarse un desplazamiento.
      </Parrafo>

      <SubText>Interrupciones y Banderas</SubText>
      <Parrafo>
        La UC monitorea solicitudes de interrupción y modifica el flujo según
        banderas almacenadas en el Processor Status Word.
      </Parrafo>

      <SubText>Ejecución de Instrucciones</SubText>
      <Parrafo>
        Las instrucciones se dividen en grupos como OP, MOV y BRx, cada uno con
        estrategias específicas basadas en FETCH y EXECUTE.
      </Parrafo>

      <SubText>Implementación de la UC</SubText>
      <Parrafo>
        La UC puede implementarse mediante control fijo (hardware cableado) o
        mediante microprogramación usando una memoria de control.
      </Parrafo>

      <SubText>Microprogramación</SubText>
      <Parrafo>
        Cada instrucción corresponde a un microprograma compuesto por palabras
        de control almacenadas en memoria. El microPC secuencia cada paso.
      </Parrafo>
    </Background>
  );
};

export default Unidad5;
