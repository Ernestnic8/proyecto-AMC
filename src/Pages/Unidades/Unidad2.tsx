import Background from "@components/Base/Background";
import ListDecimal from "@components/Base/ListDecimal";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const Unidad2 = () => {
  return (
    <Background text="Unidad II: Organización del CPU">
      <SubText>¿Qué es lo que hace el CPU?</SubText>
      <Parrafo>
        El procesador es el encargado de ejecutar instrucciones. Para lograrlo
        sigue procedimientos bien definidos que forman parte del ciclo de
        instrucción. Cada instrucción pasa por fases y subfases que permiten su
        correcta ejecución.
      </Parrafo>

      <SubText>2.1 El Procesador</SubText>
      <TinyText>El CPU opera bajo dos fases principales:</TinyText>
      <ListDisc>
        <li>
          <strong>Fetch:</strong> Cargar la instrucción, incrementar el
          secuenciador y decodificarla.
        </li>
        <li>
          <strong>Execute:</strong> Cargar operandos, ejecutar la operación,
          guardar resultados y verificar interrupciones.
        </li>
      </ListDisc>

      <SubText>2.2 El Ciclo de Instrucción</SubText>
      <Parrafo>
        El ciclo de instrucción define el paso a paso para ejecutar cualquier
        instrucción. El CPU, construido con electrónica digital, realiza
        múltiples actividades de manera sincronizada para lograr esta tarea.
      </Parrafo>

      <SubText>2.3 Elementos necesarios para construir un CPU</SubText>
      <TinyText>Cada actividad del ciclo requiere un elemento funcional:</TinyText>
      <ListDisc>
        <li>
          <strong>PC (Program Counter):</strong> Lleva control de la dirección
          de la próxima instrucción.
        </li>
        <li>
          <strong>MAR y MDR:</strong> Registros para interacción con memoria.
        </li>
        <li>
          <strong>IR (Instruction Register):</strong> Almacena la instrucción
          cargada.
        </li>
        <li>
          <strong>Decodificador:</strong> Interpreta la instrucción.
        </li>
        <li>
          <strong>Registros de Propósito General:</strong> R0 … Rn para
          almacenar operandos.
        </li>
        <li>
          <strong>ALU:</strong> Ejecuta operaciones aritméticas y lógicas.
        </li>
        <li>
          <strong>FLAGS / PSW:</strong> Guarda banderas de estado (Z, C, N, V).
        </li>
        <li>
          <strong>Unidad de Control:</strong> Coordina todas las operaciones.
        </li>
      </ListDisc>

      <TinyText>Interacción con memoria:</TinyText>
      <ListDisc>
        <li>Uso de buses de datos y direcciones.</li>
        <li>Se puede leer o escribir memoria.</li>
      </ListDisc>

      <TinyText>Interrupciones:</TinyText>
      <Parrafo>
        Las interrupciones permiten a los periféricos solicitar servicio al
        procesador mediante la señal INT. El CPU las atiende después de terminar
        cada instrucción, guardando previamente su estado.
      </Parrafo>

      <SubText>2.4 Estructura Básica del CPU</SubText>
      <Parrafo>
        La estructura interna del CPU se divide en dos secciones principales:
      </Parrafo>

      <ListDisc>
        <li>
          <strong>Datapath (Camino de datos):</strong> Registros, ALU, buses.
        </li>
        <li>
          <strong>Unidad de Control:</strong> Señales que controlan el
          datapath.
        </li>
      </ListDisc>

      <SubText>2.5 Arquitecturas del Procesador</SubText>
      <TinyText>
        Históricamente, los procesadores han usado diferentes métodos para
        manejar operandos:
      </TinyText>

      <ListDisc>
        <li>
          <strong>Arquitectura de Acumulador:</strong> Se usa un solo registro
          principal para operar (el acumulador).
        </li>
        <li>
          <strong>Arquitectura de Pila:</strong> Los operandos están en memoria
          siguiendo una estructura de pila, controlada por el registro SP.
        </li>
        <li>
          <strong>Arquitectura de Registros:</strong> Varios registros internos
          para almacenar operandos.
          <ListDecimal>
            <li>
              <strong>Instrucciones de 2 direcciones:</strong> Un registro es
              fuente y destino.
            </li>
            <li>
              <strong>Instrucciones de 3 direcciones:</strong> Separación entre
              los dos operandos fuente y el operando destino.
            </li>
          </ListDecimal>
        </li>
      </ListDisc>

      <TinyText>
        Ejemplos de instrucciones (MOV, ADD, SUB, MUL, DIV, PUSH, POP) muestran
        el comportamiento de cada arquitectura.
      </TinyText>
    </Background>
  );
};

export default Unidad2;
