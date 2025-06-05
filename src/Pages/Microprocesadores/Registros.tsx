import Background from "@components/Base/Background";

const Registros = () => {
  return (
    <Background>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Registros del Procesador
      </h1>
      <h1 className="text-2xl text-blue-900 font-bold text-center mb-2">
        ¿Qué son los registros?
      </h1>
      <p className="text-lg text-gray-700 mb-4 text-justify">
        Los registros son pequeñas memorias ultrarrápidas ubicadas dentro del
        microprocesador. Se utilizan para almacenar datos temporales durante la
        ejecución de programas. A diferencia de la memoria RAM, los registros
        tienen acceso inmediato (tiempo de acceso de un solo ciclo de reloj).
        <br />
        <strong>Son fundamentales para:</strong>
        <br />
        Mantener valores intermedios en operaciones.
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>Mantener valores intermedios en operaciones.</li>
          <li>Controlar el flujo del programa.</li>
          <li>Gestionar las instrucciones en curso.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4 text-center">
        Tipos de registros
      </h2>
      <ul className="list-decimal list-inside text-gray-700 space-y-2">
        <li className="font-bold">Registros de propósito general</li>
        <p>Se usan para almacenar datos temporales que el programa necesita.</p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>
            En procesadores de arquitectura x86: registros como AX, BX, CX, DX.
          </li>
          <li>En arquitectura ARM o RISC: R0, R1, R2… hasta R15 o más.</li>
          <li>
            Se emplean en operaciones aritméticas, lógicas y de transferencia de
            datos.
          </li>
        </ul>
        <li className="font-bold">Registros de propósito específico</li>
        <p>
          Estos registros no almacenan datos arbitrarios, sino que tienen
          funciones específicas en el control del flujo del programa o del
          procesado
        </p>
        <ul className="list-decimal list-inside pl-6 text-gray-700 space-y-2">
          <li className="font-bold">
            Registro de Contador de Programa (PC - Program Counter)
          </li>
          <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
            <li>
              Guarda la dirección de memoria de la siguiente instrucción a
              ejecutar.
            </li>
            <li>
              Se incrementa automáticamente después de cada instrucción, o se
              modifica en saltos (JMP, CALL).
            </li>
            <li>
              Su contenido se transfiere al bus de direcciones durante la fase
              de fetch.
            </li>
          </ul>

          <li className="font-bold">
            Registro de Instrucción (IR - Instruction Register)
          </li>
          <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
            <li>
              Almacena la instrucción actual que está siendo decodificada y
              ejecutada.
            </li>
            <li>Se llena durante la fase de búsqueda (fetch).</li>
            <li>
              Su contenido es decodificado por la Unidad de Control para generar
              señales apropiadas.
            </li>
          </ul>

          <li className="font-bold">Registro de Pila (SP - Stack Pointer)</li>
          <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
            <li>
              Apunta a la cima de la pila, una estructura de datos LIFO (Last
              In, First Out).
            </li>
            <li>
              Se usa para manejar subrutinas, llamadas a funciones, manejo de
              interrupciones y
            </li>
            <li>
              Se incrementa o decrementa según la arquitectura cuando se hace un
              PUSH o POP.
            </li>
          </ul>

          <li className="font-bold">
            Registro de Estado / Banderas (Flags Register)
          </li>
          <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
            <li className="font-bold">
              Contiene bits indicadores que reflejan el resultado de la última
              operación aritmética/lógica.
            </li>
            <li className="font-bold">Las banderas comunes incluyen:</li>
            <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Cero (Z):</strong> indica si el resultado es cero.
              </li>
              <li>
                <strong>Acarreo (C):</strong> indica si hubo un acarreo en la
                última operación.
              </li>
              <li>
                <strong>Signo (S):</strong> indica si el resultado es negativo.
              </li>
              <li>
                <strong>Desbordamiento (O):</strong> indica si hubo un
                desbordamiento en la última operación.
              </li>
            </ul>
          </ul>
        </ul>
      </ul>
      <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4 text-center">
        Relación con ensamblador
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          El acceso y manipulación de registros es la base de cualquier programa
          en lenguaje ensamblador.
        </li>
        <li>
          El uso eficiente de registros permite optimizar el consumo de memoria,
          acelerar el procesamiento y reducir el número de ciclos de reloj.
        </li>
      </ul>
    </Background>
  );
};

export default Registros;
