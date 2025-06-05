import Background from "@components/Base/Background";

const ExecutionCycle = () => {
  return (
    <Background>
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Ciclo de Ejecución de una Instrucción
      </h1>
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
        ¿Qué es el ciclo de instrucción?
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-justify">
        El ciclo de instrucción (o ciclo de máquina) es el proceso completo que
        realiza un microprocesador para leer, interpretar y ejecutar una
        instrucción de un programa.
        <br />
        Este ciclo se repite millones de veces por segundo mientras el sistema
        esté encendido. Se trata del corazón del procesamiento digital.
      </p>

      <h1 className="text-lg font-bold mb-6 text-center text-blue-700">
        Etapas del ciclo de instrucción
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-justify font-bold">
        El ciclo básico está compuesto por cuatro fases principales:
      </p>

      <ul className="list-decimal list-inside text-gray-700 space-y-2">
        <li className="font-bold">Búsqueda (Fetch) </li>
        <p>El procesador obtiene la instrucción desde la memoria principal.</p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>
            La dirección de la instrucción se encuentra en el Program Counter
            (PC).
          </li>
          <li>Se envía esta dirección a través del bus de direcciones.</li>
          <li>
            La instrucción viaja por el bus de datos y se almacena en el
            Instruction Register (IR).
          </li>
        </ul>

        <li className="font-bold">Decodificación (Decode) </li>
        <p>La Unidad de Control interpreta la instrucción cargada en el IR.</p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>
            Se identifica el tipo de instrucción (aritmética, lógica, salto,
            etc.).
          </li>
          <li>Se determinan los operandos involucrados.</li>
          <li>Se preparan las señales de control para la ejecución.</li>
        </ul>

        <li className="font-bold">Ejecución (Execute) </li>
        <p>El procesador realiza la operación indicada.</p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>
            La ALU puede realizar una suma, resta, lógica booleana, comparación,
            etc
          </li>
          <li>Puede haber transferencias entre registros</li>
          <li>Se realizan accesos a memoria o a puertos de E/S</li>
          <li>Se modifican banderas y registros especiales</li>
        </ul>

        <li className="font-bold">Escritura de resultados (Write-back) </li>
        <p>
          Se almacenan los resultados de la ejecución en su destino
          correspondiente
        </p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>Puede implicar:</li>
          <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
            <li>
              Escribir en un registro (ej. guardar el resultado de una suma).
            </li>
            <li>Escribir en la memoria (ej. almacenar datos calculados).</li>
          </ul>
          <li>Se actualiza el PC para apuntar a la próxima instrucción.</li>
        </ul>

        <p className="text-xl mt-6 font-bold text-blue-700 mb-6 text-center">
          Rendimiento del ciclo
        </p>
      </ul>

      <p className="text-lg text-gray-700 font-bold">
        El número de ciclos de reloj que toma completar una instrucción varía:
      </p>

      <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
        <li>Instrucciones simples (ej. MOV) pueden tardar 1 ciclo.</li>
        <li>
          Instrucciones más complejas (ej. MUL, CALL) pueden requerir varios
          ciclos.
        </li>
      </ul>

      <p className="text-lg text-gray-700 font-bold">
        Los procesadores modernos implementan técnicas como:
      </p>
      <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
        <li>
          Pipeline: divide el ciclo de instrucción en etapas que se ejecutan en
          paralelo.
        </li>
        <li>Superscalar: ejecutan múltiples instrucciones al mismo tiempo.</li>
      </ul>
    </Background>
  );
};

export default ExecutionCycle;
