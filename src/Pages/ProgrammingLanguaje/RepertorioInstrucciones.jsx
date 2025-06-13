import Background from "@components/Base/Background";
import ListDecimal from "@components/Base/ListDecimal";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const Instruccion = () => {
    return(
    <Background text="Repertorio de Instrucciones del Procesador">
        <SubText>¿Qué es el repertorio de instrucciones?</SubText>
        <Parrafo>
            El repertorio de instrucciones, también conocido como Instruction Set Architecture (ISA), 
            es el conjunto completo de instrucciones que un procesador es capaz de ejecutar. Cada procesador 
            tiene su propio ISA que define cómo debe estar estructurada cada instrucción, qué operaciones 
            son posibles, y cómo se accede a la memoria y registros.
    </Parrafo>
        <TinyText>Clasificación del repertorio de instrucciones</TinyText>

        <ListDisc>
        <ol>
        <li>
            <strong>1. Instrucciones de transferencia de datos</strong>
                <p>Mueven datos entre registros, memoria o dispositivos externos.</p>
                <p><strong>Ejemplos:</strong></p>
                <ul>
                    <li>MOV, PUSH, POP</li>
                    <li>XCHG: intercambio de valores entre registros</li>
                    <li>IN, OUT: entrada/salida de puertos</li>
                </ul>
        </li>

        <li>
            <strong> 2. Instrucciones aritméticas y lógicas</strong>
                <p>Realizan operaciones matemáticas o manipulaciones a nivel de bit.</p>
                <p><strong>Aritméticas:</strong></p>
                <ul>
                    <li>ADD, SUB, INC, DEC, MUL, DIV</li>
                </ul>
                <p><strong>Lógicas:</strong></p>
                <ul>
                    <li>AND, OR, XOR, NOT, SHL, SHR</li>
                </ul>
            <p>Estas instrucciones afectan los flags del procesador.</p>
        </li>

        <li>
            <strong>3. Instrucciones de control de flujo</strong>
                <p>Modifican la secuencia en la que se ejecutan las instrucciones.</p>
                <p><strong>Aritméticas:</strong></p>
                <ul>
                    <li>JMP, CALL, RET</li>
                    <li>Condicionales: JE, JNE, JL, JG, etc.</li>
                    <li>LOOP: bucle automático con el registro CX</li>
                </ul>
            <p>Estas instrucciones afectan los flags del procesador.</p>
        </li>

        <li>
            <strong>4. Instrucciones de control del sistema</strong>
                <p>Controlan el comportamiento general del procesador.</p>
                <ul>
                    <li>INT: genera una interrupción</li>
                    <li>IRET: regresa de una rutina de interrupción</li>
                    <li>HLT: detiene la CPU hasta una interrupción</li>
                    <li>NOP: instrucción que no hace nada (útil para temporización)</li>
                    <li>CLI / STI: desactivar / activar interrupciones</li>
                </ul>
        </li>

        </ol>
        </ListDisc>

    </Background>
  );
};

export default Instruccion;
