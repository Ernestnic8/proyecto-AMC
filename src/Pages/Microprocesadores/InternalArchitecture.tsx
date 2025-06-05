import Background from "@components/Base/Background";

const InternalArchitecture = () => {
  return (
    <Background>
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Estructura Interna del Microprocesador
      </h1>
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
        ¿Qué es la arquitectura interna de un microprocesador?
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-justify">
        La arquitectura interna de un microprocesador se refiere a la forma en
        que están organizados y conectados sus bloques funcionales internos, los
        cuales permiten ejecutar instrucciones, manipular datos y controlar
        procesos.
        <br />
        Estos bloques trabajan de forma coordinada para realizar el ciclo de
        instrucción, que es el núcleo del funcionamiento del sistema.
      </p>
      <h1 className="text-lg font-bold text-center mb-6 text-gray-700">
        Componentes principales del microprocesador
      </h1>
      <ul className="list-decimal list-inside text-gray-700 space-y-2">
        <li className="font-bold">Unidad de Control (Control Unit - CU) </li>
        <p>Es el “director de orquesta” del microprocesador.</p>
        <p className="font-bold">Funciones:</p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>Coordina la ejecución de instrucciones..</li>
          <li>Genera señales de control para activar otras unidades.</li>
          <li>
            Interpreta el código de operación (opcode) de cada instrucción.
          </li>
          <li>Controla la lectura/escritura de registros y memoria.</li>
        </ul>
        <p className="font-bold">Importancia:</p>
        <p>
          La unidad de control asegura que cada componente actúe en el momento
          adecuado durante el ciclo de instrucción.
        </p>
        <li className="font-bold">Unidad Aritmético-Lógica (ALU)</li>
        <p>Es el “calculador” del microprocesador.</p>
        <p className="font-bold">Funciones:</p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>Realiza operaciones aritméticas: suma, resta, incremento, etc</li>
          <li>Realiza operaciones lógicas: AND, OR, XOR, NOT.</li>
          <li>Manipula datos binarios a nivel de bit.</li>
          <li>
            Genera banderas o indicadores (flags) como Cero, Acarreo, Negativo,
            Desbordamiento.
          </li>
        </ul>
        <p className="font-bold">Ejemplo práctico:</p>
        <p>
          Una instrucción como ADD A, B suma los contenidos de los registros A y
          B en la ALU.
        </p>
        <li className="font-bold">Registros Internos</li>
        <p>
          Son pequeñas unidades de almacenamiento muy rápidas que se encuentran
          dentro del microprocesador.
        </p>
        <p className="font-bold">Tipos de registros:</p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Registros de propósito general:</strong> almacenan
            temporalmente datos durante las operaciones (por ejemplo, AX, BX,
            R0, R1).
          </li>
          <li>
            <strong>Registros de propósito específico:</strong>
          </li>
          <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
            <li>
              <strong>PC (Program Counter): </strong>guarda la dirección de la
              próxima instrucción a ejecutar.
            </li>
            <li>
              <strong>IR (Instruction Register): </strong>contiene la
              instrucción actual que se está ejecutando.
            </li>
            <li>
              <strong>SP (Stack Pointer):</strong> apunta a la cima de la pila.
            </li>
            <li>
              <strong>Registro de estado o flags:</strong> contiene indicadores
              del resultado de operaciones.
            </li>
          </ul>
        </ul>
        <p className="font-bold">Interconexiones internas</p>
        <p>
          Permiten al procesador trabajar con datos sin necesidad de acceder
          constantemente a la memoria, acelerando el procesamiento.
        </p>
        <li className="font-bold">Registros Internos</li>
        <p>Es la “red interna” del microprocesador</p>
        <p className="font-bold">Incluye::</p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>
            Buses internos que conectan los registros, ALU, unidad de control, y
            puertos de entrada/salida.
          </li>
          <li>
            Multiplexores, decodificadores, y lógica de control que enruta los
            datos correctamente.
          </li>
        </ul>
        <p>
          Estas interconexiones permiten la transferencia eficiente de
          información entre los bloques funcionales del microprocesador.
        </p>
      </ul>
      <p className="text-xl mt-6 font-bold text-blue-700 mb-6 text-center">
        {" "}
        Diagrama básico de bloques
      </p>
      <div className="flex justify-center mb-6">
        <img src="/image/diagrama.png" alt="diagrama" className="max-w-100" />
      </div>
      <p className="text-xl mt-6 font-bold text-blue-700 mb-6 text-center">
        {" "}
        ¿Por qué es importante entender esta arquitectura?
      </p>
      <ul className="list-disc list-inside pl-3 text-gray-700 space-y-2">
        <li>
          Permite comprender cómo se ejecuta cada instrucción paso a paso.
        </li>
        <li>
          Es esencial para programar en lenguaje ensamblador y optimizar el uso
          de registros
        </li>
        <li>
          Facilita el diseño de microprocesadores personalizados en campos como
          FPGA, sistemas embebidos o investigación.
        </li>
      </ul>
      <p className="text-xl mt-6 font-bold text-blue-700 mb-6 text-center">
        {" "}
        Ejemplo práctico
      </p>
      <p className="text-lg mt-6 text-gray-700 mb-6 text-justify">
        {" "}
        Supón que ejecutamos una instrucción como ADD A, B:
      </p>
      <ul className="list-decimal list-inside pl-3 text-gray-700 space-y-2 ">
        <li className="font-bold">El PC señala la dirección de la instrucción.</li>
        <p className="pl-6">
          El PC contiene la dirección de la siguiente instrucción que debe
          ejecutarse. En este caso, apunta a la instrucción ADD A, B
        </p>
        <li className="font-bold">La instrucción se carga en el IR.</li>
        <p className="pl-6">
          La instrucción ubicada en la dirección señalada por el PC se carga en
          el IR, lo que permite a la CPU leer y entender qué operación se debe
          realizar.
        </p>
        <li className="font-bold">La Unidad de Control interpreta ADD.</li>
        <p className="pl-6">
          La Unidad de Control decodifica la instrucción ADD A, B y activa las
          señales necesarias para que los componentes adecuados (como la ALU y
          los registros) ejecuten la operación.
        </p>
        <li className="font-bold">La ALU realiza la suma de los valores de los registros A y B.</li>
        <p className="pl-6">
          La ALU toma los valores actuales almacenados en los registros A y B y
          los suma.
        </p>
        <li className="font-bold">El resultado se guarda en un registro.</li>
        <p className="pl-6">
          El resultado de la suma se almacena, generalmente en uno de los
          registros involucrados (por ejemplo, en A) o en un registro temporal,
          según la arquitectura.
        </p>
        <li className="font-bold">
          Las banderas del procesador se actualizan (por ejemplo, si el
          resultado fue cero).
        </li>
        <p className="pl-6">
          El sistema actualiza las banderas de estado (como Cero, Signo,
          Desbordamiento, Acarreo, etc.), que pueden influir en futuras
          decisiones de control de flujo (como saltos condicionales).
        </p>
      </ul>
      <p className="text-md mt-1 text-gray-700 mb-6 text-justify">
        <strong>Conclusión:</strong> <br />
        La ejecución de una instrucción como ADD A, B es un proceso sistemático
        que implica varias etapas clave dentro del procesador: localización de
        la instrucción, decodificación, ejecución, almacenamiento del resultado
        y actualización del estado del sistema. Este ciclo refleja cómo una CPU
        coordina internamente sus componentes para realizar operaciones
        aritméticas y mantener el control del flujo de ejecución del programa.
      </p>
    </Background>
  );
};

export default InternalArchitecture;
