import Background from "@components/Base/Background";
import ListDecimal from "@components/Base/ListDecimal";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const Instruccion = () => {
  return (
    <Background text="Instrucciones Básicas del Lenguaje Ensamblador">
      <SubText>¿Qué es una instrucción en ensamblador?</SubText>
      <Parrafo>
        Una instrucción en lenguaje ensamblador es una orden que el
        microprocesador entiende y ejecuta. Cada instrucción representa una
        operación concreta que manipula datos, controla el flujo del programa o
        interactúa con el hardware.
      </Parrafo>
      <TinyText>
        Cada línea en ensamblador suele tener esta estructura:
        <br />
        <br />
        <code>[etiqueta:] INSTRUCCIÓN OPERANDO1, OPERANDO2 ; comentario</code>
      </TinyText>
      <SubText>Clasificación de instrucciones</SubText>
      <TinyText>
        Las instrucciones se clasifican en categorías según la función que
        cumplen:
      </TinyText>
      <ListDecimal>
        <li className="font-bold">Transferencia de datos </li>
        <p>
          Permiten mover información entre registros, memoria y dispositivos.
        </p>
        <TinyText>Instrucciones comunes:</TinyText>
        <ListDisc>
          <li>
            <strong>MOV:</strong> Copia datos entre registros o entre registro y
            memoria.
          </li>
          <li>
            <strong>LOAD:</strong> Carga datos desde memoria (en algunas
            arquitecturas).
          </li>
          <li>
            <strong>STORE:</strong> Almacena datos en memoria
          </li>
          <p className="font-bold pl-3">Ejemplo:</p>
          <p>
            <code>
              MOV AX, BX ; Copia el contenido de BX en AX
              <br />
              MOV [2000h], AL ; Guarda el contenido de AL en la dirección 2000h
            </code>
          </p>
        </ListDisc>
        <li className="font-bold">Operaciones aritméticas</li>
        <p>Realizan cálculos matemáticos.</p>
        <ListDisc>
          <li>
            <strong>ADD:</strong> Suma
          </li>
          <li>
            <strong>SUB:</strong> Resta
          </li>
          <li>
            <strong>INC:</strong> Incrementa (suma 1)
          </li>
          <li>
            <strong>DEC:</strong> Decrecrementa (resta 1)
          </li>
          <li>
            <strong>MUL:</strong> Multiplicacion sin signo
          </li>
          <li>
            <strong>DIV:</strong> División sin signo
          </li>
          <p className="font-bold pl-3">Ejemplo:</p>
          <p>
            <code>
              MOV AL, 5
              <br />
              ADD AL, 3 ; AL ahora contiene 8
            </code>
          </p>
        </ListDisc>
        <li className="font-bold">Operaciones logicas</li>
        <p>Manipulan bits directamente usando lógica booleana.</p>
        <TinyText>Instrucciones comunes:</TinyText>
        <ListDisc>
          <li>
            <strong>AND:</strong> Operación lógica Y.
          </li>
          <li>
            <strong>OR:</strong> Operación lógica O.
          </li>
          <li>
            <strong>XOR:</strong> Exclusiva O.
          </li>
          <li>
            <strong>NOT:</strong> Negación bit a bit.
          </li>
          <p className="font-bold pl-3">Ejemplo:</p>
          <p>
            <code>
              MOV AL, 0Fh ; AL = 00001111
              <br />
              AND AL, 0Ah ; AL = 00001010
            </code>
          </p>
        </ListDisc>
        <li className="font-bold">Control de flujo</li>
        <p>Alteran el orden secuencial de ejecución de instrucciones.</p>
        <TinyText>Instrucciones comunes:</TinyText>
        <ListDisc>
          <li>
            <strong>JMP:</strong> Salto incondicional.
          </li>
          <li>
            <strong>JE, JNE, JL, JG:</strong> Saltos condicionales según flags.
          </li>
          <li>
            <strong>CALL:</strong> Llama a una subrutina.
          </li>
          <li>
            <strong>RET</strong> Regresa de una subrutina.
          </li>
          <li>
            <strong>LOOP:</strong> Repite una instrucción mientras CX ≠ 0.
          </li>
          <p className="font-bold pl-3">Ejemplo:</p>
          <p>
            <code>
              CMP AX, BX ; Compara AX con BX
              <br />
              JE etiqueta ; Salta si son iguales
              <br />
              JMP fin ; Salto incondicional
            </code>
          </p>
        </ListDisc>
      </ListDecimal>
      <SubText>Cómo interactúan con los registros y la memoria</SubText>
      <ListDisc>
        <li>
          Todas las instrucciones afectan directa o indirectamente a registros.
        </li>
        <li>Algunas modifican banderas (zero, carry, overflow).</li>
        <li>Otras afectan la pila, el program counter o la memoria.</li>
      </ListDisc>
      <div className="mt-4 mb-4">
        <SubText>Ejemplo práctico combinado:</SubText>
        <TinyText>
          <code>
            MOV AL, 10 ; AL ← 10
            <br />
            MOV BL, 20 ; BL ← 20
            <br />
            ADD AL, BL ; AL ← AL + BL = 30
            <br />
            CMP AL, 30 ; ¿AL es 30?
            <br />
            JE mostrar ; Si sí, salta a 'mostrar'
            <br />
            <br />
            mostrar:
            <br />
            MOV DL, 'O'
            <br />
            MOV AH, 02h
            <br />
            INT 21h
          </code>
        </TinyText>
      </div>
      <SubText>Consideraciones importantes</SubText>
      <ListDisc>
        <li>
          Muchas instrucciones solo aceptan ciertos tipos de operandos (registro
          a registro, registro a memoria, etc.).
        </li>
        <li>El orden de los operandos importa</li>
        <li>
          El lenguaje ensamblador no tiene "tipos de datos" como en C, todo es
          binario.
        </li>
      </ListDisc>
      <SubText>Conclusión</SubText>
      <Parrafo>
        Las instrucciones del lenguaje ensamblador forman la base de todo lo que
        un microprocesador puede hacer. Entender su clasificación y función
        permite construir desde simples algoritmos hasta sistemas operativos
        completos. Dominar su uso te convierte en un programador capaz de
        escribir código altamente eficiente y cercano al hardware.
      </Parrafo>
    </Background>
  );
};

export default Instruccion;
