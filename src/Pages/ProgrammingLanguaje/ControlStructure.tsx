import Background from "@components/Base/Background";
import ListDecimal from "@components/Base/ListDecimal";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const ControlStructure = () => {
  return (
    <Background text="Estructuras de Control en Ensamblador">
      <SubText>¿Qué son las estructuras de control?</SubText>
      <Parrafo>
        Las estructuras de control son instrucciones que permiten alterar el
        flujo secuencial de un programa. En lugar de ejecutar instrucciones una
        tras otra, estas estructuras permiten tomar decisiones, repetir acciones
        y modularizar el código.
        <br />
        En ensamblador, estas estructuras se implementan mediante instrucciones
        de salto condicional e incondicional, junto con etiquetas que marcan
        posiciones dentro del código.
      </Parrafo>
      <SubText>Tipos de estructuras de control</SubText>
      <TinyText>
        Las instrucciones se clasifican en categorías según la función que
        cumplen:
      </TinyText>
      <ListDecimal>
        <li className="font-bold">Condicionales (IF, IF-ELSE) </li>
        <p>
          Permiten ejecutar un bloque de código solo si se cumple una condición.
        </p>
        <TinyText>Instrucciones clave:</TinyText>
        <ListDisc>
          <li>
            <strong>CMP:</strong> compara dos valores.
          </li>
          <li>
            <strong>JE / JZ:</strong> salta si son iguales (flag Z=1).
          </li>
          <li>
            <strong>JNE / JNZ:</strong> salta si no son iguales.
          </li>
          <li>
            <strong>JL, JG, JGE, JLE:</strong> comparaciones con signo.
          </li>
          <p className="font-bold pl-3">Ejemplo:</p>
          <p>
            <code>
              MOV AL, 5
              <br />
              CMP AL, 5
              <br />
              JE igual
              <br />
              <br />
              igual:
              <br />
              MOV DL, 'Y'
              <br />
              MOV AH, 02h
              <br />
              INT 21h
            </code>
          </p>
          <p className="mt-4 mb-4 font-bold">
            Este ejemplo imprime 'Y' si AL es igual a 5.
          </p>
        </ListDisc>
        <li className="font-bold">Bucles (FOR, WHILE, REPEAT)</li>
        <p>
          Permiten repetir instrucciones un número determinado de veces o
          mientras se cumpla una condición.
        </p>
        <TinyText>Instrucciones clave:</TinyText>
        <ListDisc>
          <li>
            <strong>LOOP:</strong> repite mientras CX no sea cero.
          </li>
          <li>Combinación de CMP + Jxx para bucles personalizados.</li>
          <p className="font-bold pl-3">
            Ejemplo con LOOP (equivalente a FOR):
          </p>
          <p>
            <code>
              MOV CX, 5
              <br />
              <br />
              repetir:
              <br />
              ; aquí va el código repetido
              <br />
              DEC CX
              <br />
              JNZ repetir
            </code>
          </p>
          <p>Se repite 5 veces.</p>
        </ListDisc>
        <li className="font-bold">Subrutinas (CALL, RET)</li>
        <p>
          Permiten organizar el código en bloques reutilizables, muy útil para
          mantener el orden y claridad del programa.
        </p>
        <TinyText>Instrucciones clave:</TinyText>
        <ListDisc>
          <li>
            <strong>CALL:</strong> salta a una subrutina guardando la dirección
            actual.
          </li>
          <li>
            <strong>RET:</strong> regresa desde la subrutina al punto de
            llamada.
          </li>
          <p className="font-bold pl-3">Ejemplo:</p>
          <p>
            <code>
              CALL mostrarA
              <br />
              JMP fin
              <br />
              <br />
              mostrarA:
              <br />
              MOV DL, 'A'
              <br />
              MOV AH, 02h
              <br />
              INT 21h
              <br />
              RET
              <br />
              <br />
              fin:
              <br />
              MOV AH, 4Ch
              <br />
              INT 21h
            </code>
          </p>
          <p>
            La subrutina mostrarA se puede reutilizar en cualquier parte del
            código.
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
        <SubText>Combinando estructuras</SubText>
        <TinyText>
          <code>
            MOV CX, 10
            <br />
            inicio:
            <br />
            CMP CX, 5
            <br />
            JE mitad
            <br />
            <br />
            ; aquí iría código repetido
            <br />
            <br />
            LOOP inicio
            <br />
            JMP fin
            <br />
            <br />
            mitad:
            <br />
            ; código especial si CX = 5
            <br />
            JMP inicio
            <br />
            <br />
            fin:
            <br />
            MOV AH, 4Ch
            <br />
            INT 21h
          </code>
        </TinyText>
        <TinyText>
          Combinando CMP, LOOP, JMP, CALL y RET se puede construir casi
          cualquier estructura lógica.
        </TinyText>
      </div>
      <SubText>Consideraciones importantes</SubText>
      <ListDisc>
        <li>
          En ensamblador no existen palabras clave como if o while, debes
          construir la lógica manualmente.
        </li>
        <li>Las etiquetas son fundamentales para indicar puntos de salto.</li>
        <li>
          Las banderas del registro de estado son la base de las decisiones
          condicionales.
        </li>
      </ListDisc>
      <SubText>Conclusión</SubText>
      <Parrafo>
        Las estructuras de control en ensamblador son esenciales para construir
        programas complejos. Aunque requieren más instrucciones que en lenguajes
        de alto nivel, ofrecen una visión clara de cómo el procesador toma
        decisiones y repite acciones internamente. Dominar su uso es clave para
        crear lógica dinámica, eficiente y modular en sistemas de bajo nivel.
      </Parrafo>
    </Background>
  );
};

export default ControlStructure;
