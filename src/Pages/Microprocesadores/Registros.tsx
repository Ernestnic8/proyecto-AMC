import Background from "@components/Base/Background";
import ListDecimal from "@components/Base/ListDecimal";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";

const Registros = () => {
  return (
    <Background text="Registros del Procesador">
      <SubText>¿Qué son los registros?</SubText>
      <Parrafo>
        Los registros son pequeñas memorias ultrarrápidas ubicadas dentro del
        microprocesador. Se utilizan para almacenar datos temporales durante la
        ejecución de programas. A diferencia de la memoria RAM, los registros
        tienen acceso inmediato (tiempo de acceso de un solo ciclo de reloj).
        <br />
        <strong>Son fundamentales para:</strong>
        <br />
        Mantener valores intermedios en operaciones.
        <div className="pl-6">
          <ListDisc>
            <li>Mantener valores intermedios en operaciones.</li>
            <li>Controlar el flujo del programa.</li>
            <li>Gestionar las instrucciones en curso.</li>
          </ListDisc>
        </div>
      </Parrafo>

      <SubText>Tipos de registros</SubText>
      <ListDecimal>
        <li className="font-bold">Registros de propósito general</li>
        <p>Se usan para almacenar datos temporales que el programa necesita.</p>
        <div className="pl-6">
          <ListDisc>
            <li>
              En procesadores de arquitectura x86: registros como AX, BX, CX,
              DX.
            </li>
            <li>En arquitectura ARM o RISC: R0, R1, R2… hasta R15 o más.</li>
            <li>
              Se emplean en operaciones aritméticas, lógicas y de transferencia
              de datos.
            </li>
          </ListDisc>
        </div>
        <li className="font-bold">Registros de propósito específico</li>
        <p>
          Estos registros no almacenan datos arbitrarios, sino que tienen
          funciones específicas en el control del flujo del programa o del
          procesado
        </p>
        <div className="pl-6">
          <ListDecimal>
            <li className="font-bold">
              Registro de Contador de Programa (PC - Program Counter)
            </li>
            <div className="pl-6">
              <ListDisc>
                <li>
                  Guarda la dirección de memoria de la siguiente instrucción a
                  ejecutar.
                </li>
                <li>
                  Se incrementa automáticamente después de cada instrucción, o
                  se modifica en saltos (JMP, CALL).
                </li>
                <li>
                  Su contenido se transfiere al bus de direcciones durante la
                  fase de fetch.
                </li>
              </ListDisc>
            </div>

            <li className="font-bold">
              Registro de Instrucción (IR - Instruction Register)
            </li>
            <div className="pl-6">
              <ListDisc>
                <li>
                  Almacena la instrucción actual que está siendo decodificada y
                  ejecutada.
                </li>
                <li>Se llena durante la fase de búsqueda (fetch).</li>
                <li>
                  Su contenido es decodificado por la Unidad de Control para
                  generar señales apropiadas.
                </li>
              </ListDisc>
            </div>

            <li className="font-bold">Registro de Pila (SP - Stack Pointer)</li>
            <div className="pl-6">
              <ListDisc>
                <li>
                  Apunta a la cima de la pila, una estructura de datos LIFO
                  (Last In, First Out).
                </li>
                <li>
                  Se usa para manejar subrutinas, llamadas a funciones, manejo
                  de interrupciones y
                </li>
                <li>
                  Se incrementa o decrementa según la arquitectura cuando se
                  hace un PUSH o POP.
                </li>
              </ListDisc>
            </div>

            <li className="font-bold">
              Registro de Estado / Banderas (Flags Register)
            </li>
            <div className="pl-6">
              <ListDisc>
                <li className="font-bold">
                  Contiene bits indicadores que reflejan el resultado de la
                  última operación aritmética/lógica.
                </li>
                <li className="font-bold">Las banderas comunes incluyen:</li>
                <div className="pl-6">
                  <ListDisc>
                    <li>
                      <strong>Cero (Z):</strong> indica si el resultado es cero.
                    </li>
                    <li>
                      <strong>Acarreo (C):</strong> indica si hubo un acarreo en
                      la última operación.
                    </li>
                    <li>
                      <strong>Signo (S):</strong> indica si el resultado es
                      negativo.
                    </li>
                    <li>
                      <strong>Desbordamiento (O):</strong> indica si hubo un
                      desbordamiento en la última operación.
                    </li>
                  </ListDisc>
                </div>
              </ListDisc>
            </div>
          </ListDecimal>
        </div>
      </ListDecimal>
      <SubText>Relación con ensamblador</SubText>
      <ListDisc>
        <li>
          El acceso y manipulación de registros es la base de cualquier programa
          en lenguaje ensamblador.
        </li>
        <li>
          El uso eficiente de registros permite optimizar el consumo de memoria,
          acelerar el procesamiento y reducir el número de ciclos de reloj.
        </li>
      </ListDisc>
    </Background>
  );
};

export default Registros;
