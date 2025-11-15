import Background from "@components/Base/Background";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const Unidad4 = () => {
  return (
    <Background text="Unidad 4: Unidad de Ejecución">
      <SubText>La función de procesamiento</SubText>
      <Parrafo>
        La función de procesamiento la realiza la Unidad de Ejecución. Corresponde
        al órgano de cálculo de la Arquitectura ASPA de Von Neumann. Está integrada
        por la ALU y sus registros, los Registros de Propósito General (GPR) y toda
        circuitería de cálculo adicional como la FPU.
      </Parrafo>

      <SubText>Representación de Datos</SubText>
      <Parrafo>
        El procesador solo procesa patrones de bits. Una palabra es la cantidad de
        bits que se procesan en un CPU. Todos los datos deben representarse como
        series de bits.
      </Parrafo>

      <TinyText>Tipos de datos</TinyText>
      <ListDisc>
        <li>Números enteros</li>
        <li>Números enteros con signo</li>
        <li>Punto flotante</li>
        <li>BCD y otros códigos</li>
        <li>Caracteres y fechas</li>
      </ListDisc>

      <SubText>Enteros sin signo</SubText>
      <Parrafo>
        Se emplea un sistema numérico posicional. Los datos pueden representarse en
        diferentes bases como decimal o binario.
      </Parrafo>

      <SubText>Enteros con signo</SubText>
      <Parrafo>
        Como la computadora no distingue los signos, se requieren técnicas para
        representarlos mediante bits.
      </Parrafo>

      <TinyText>Técnicas de representación</TinyText>
      <ListDisc>
        <li>Signo-magnitud</li>
        <li>Complemento a r-1</li>
        <li>Complemento a r (complemento a 2)</li>
        <li>Exceso a M (Bias-m)</li>
      </ListDisc>

      <SubText>Otros sistemas de representación</SubText>
      <ListDisc>
        <li>BCD (Binary Coded Decimal)</li>
        <li>Código Gray</li>
      </ListDisc>

      <SubText>Números en punto flotante</SubText>
      <Parrafo>
        Utilizados para representar números reales. El estándar IEEE 754 define
        formatos de simple y doble precisión.
      </Parrafo>

      <SubText>Unidad Aritmética Lógica (ALU)</SubText>
      <Parrafo>
        Realiza operaciones aritméticas y lógicas. La unidad aritmética implementa
        la suma como operación principal de la cual derivan otras.
      </Parrafo>

      <TinyText>Componentes de la ALU</TinyText>
      <ListDisc>
        <li>Sumador completo</li>
        <li>Carry Lookahead Adder (CLA)</li>
        <li>Unidad lógica (AND, OR, etc.)</li>
      </ListDisc>

      <SubText>Registros de Propósito General (GPR)</SubText>
      <Parrafo>
        Almacenan los operandos dentro del CPU y pueden realizar operaciones de
        corrimiento lógico, aritmético y rotaciones.
      </Parrafo>
    </Background>
  );
};

export default Unidad4;
