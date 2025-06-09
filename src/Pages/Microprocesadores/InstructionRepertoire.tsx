import Background from "@components/Base/Background";
import ListDecimal from "@components/Base/ListDecimal";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const InstructionRepertoire = () => {
  return (
    <Background text="Repertorio de Instrucciones del Procesador">
      <SubText>¿Qué es el repertorio de instrucciones?</SubText>
      <Parrafo>
        El repertorio de instrucciones, también conocido como Instruction Set
        Architecture (ISA), es el conjunto completo de instrucciones que un
        procesador es capaz de ejecutar. Cada procesador tiene su propio ISA que
        define cómo debe estar estructurada cada instrucción, qué operaciones
        son posibles, y cómo se accede a la memoria y registros.
        <br />
        <p className="font-light italic pl-3 text-xs">
          Es el "vocabulario" que entiende el microprocesador.
        </p>
      </Parrafo>
      <SubText>Clasificación del repertorio de instrucciones</SubText>
      <TinyText>
        Las instrucciones se agrupan según su función principal:
      </TinyText>
      <ListDecimal>
        <li className="font-bold">Instrucciones de transferencia de datos </li>
        <p>Provienen de dispositivos externos al procesador.</p>
        <p className="italic"> Ejemplos:</p>
        <ListDisc>
          <li>MOV, PUSH, POP</li>
          <li>XCHG: intercambio de valores entre registros</li>
          <li>IN, OUT: entrada/salida de puertos</li>
        </ListDisc>
        <li className="font-bold">Instrucciones aritméticas y lógicas</li>
        <p>Realizan operaciones matemáticas o manipulaciones a nivel de bit.</p>
        <ListDisc>
          <p className="font-bold">Aritméticas:</p>
          <li className="font-bold pl-6">ADD, SUB, INC, DEC, MUL, DIV</li>
          <p className="font-bold">Lógicas:</p>
          <li className="font-bold pl-6">
            Muy usadas en MS-DOS, emu8086, BIOS, etc
          </li>
          <p className="italic pl-6">
            Estas instrucciones afectan los flags del procesador.
          </p>
        </ListDisc>
        <li className="font-bold">Instrucciones de control de flujo</li>
        <p>Modifican la secuencia en la que se ejecutan las instrucciones.</p>
        <ListDisc>
          <li>JMP, CALL, RET</li>
          <li>Condicionales: JE, JNE, JL, JG, etc.</li>
          <li>LOOP: bucle automático con el registro CX</li>
        </ListDisc>
        <li className="font-bold">Instrucciones de control del sistema</li>
        <p>Instrucciones de control del sistema</p>
        <ListDisc>
          <li>
            <strong>INT: </strong>genera una interrupción
          </li>
          <li>
            <strong>IRET:</strong> regresa de una rutina de interrupción
          </li>
          <li>
            <strong>HLT:</strong> detiene la CPU hasta una interrupción
          </li>
          <li>
            <strong>NOP:</strong> instrucción que no hace nada (útil para
            temporización)
          </li>
          <li>
            <strong>CLI / STI:</strong> desactivar / activar interrupciones
          </li>
        </ListDisc>
      </ListDecimal>
      <SubText>Formato y sintaxis de las instrucciones</SubText>
      <ListDecimal>
        <p className="font-bold">
          Cada instrucción en ensamblador se compone de:
        </p>
        <p>
          <code>[Etiqueta:] OPCODE OPERANDO1, OPERANDO2 ; Comentario</code>
        </p>
        <li>Etiqueta: opcional, usada como destino de saltos.</li>
        <li>Opcode: la operación a realizar (ej. MOV, ADD, JMP).</li>
        <li>Operandos: registros, direcciones o valores.</li>
        <li>Comentario: inicia con ; y no afecta la ejecución.</li>
      </ListDecimal>
      <div className="mt-4 mb-4">
        <SubText>Ejecución y Ciclo de Máquina</SubText>
        <TinyText>
          Cada instrucción requiere una cantidad específica de ciclos de reloj
          para completarse. Este número depende de:
        </TinyText>
        <ListDisc>
          <li>La complejidad de la instrucción.</li>
          <li>Si accede a memoria o solo a registros.</li>
          <li>Si usa direccionamiento inmediato o indirecto.</li>
        </ListDisc>
        <TinyText>
          Optimizar el uso de instrucciones puede reducir el tiempo de ejecución
          y consumo energético.
        </TinyText>
        <SubText>Instrucciones de alto rendimiento y bajo consumo</SubText>
        <TinyText>
          En sistemas embebidos o portátiles, es fundamental usar instrucciones
          que:
        </TinyText>
        <ListDisc>
          <li>Consuman menos ciclos.</li>
          <li>No generen acceso innecesario a memoria.</li>
          <li>Aprovechen registros y estructuras eficientes.</li>
        </ListDisc>
        <TinyText>
          Optimizar el uso de instrucciones puede reducir el tiempo de ejecución
          y consumo energético.
        </TinyText>
      </div>
      <SubText>Relación con otros componentes</SubText>
      <ListDisc>
        <li>
          El repertorio define cómo se escribe y ejecuta el código en lenguaje
          ensamblador.
        </li>
        <li>
          Cada instrucción involucra registros, banderas, memoria y modos de
          direccionamiento.
        </li>
        <li>
          Está estrechamente relacionado con el ciclo de instrucción y la
          estructura interna del CPU.
        </li>
      </ListDisc>
      <SubText>Conclusión</SubText>
      <Parrafo>
        El repertorio de instrucciones es la base funcional de cualquier
        microprocesador. Comprender su clasificación, sintaxis, rendimiento y
        aplicación práctica permite desarrollar software eficiente y aprovechar
        al máximo los recursos del hardware. Es una herramienta esencial para
        todo programador de bajo nivel, ingeniero en electrónica o desarrollador
        de sistemas embebidos.
      </Parrafo>
    </Background>
  );
};

export default InstructionRepertoire;
