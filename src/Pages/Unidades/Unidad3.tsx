import Background from "@components/Base/Background";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const Unidad3 = () => {
  return (
    <Background text="Unidad 3: Conjunto de Instrucciones">
      <SubText>¿Qué es el Conjunto de Instrucciones?</SubText>
      <Parrafo>
        El conjunto de instrucciones de un procesador (también conocido como
        repertorio de instrucciones) está formado por todas las operaciones que
        el CPU puede ejecutar. Representa el principal atributo de una
        arquitectura y permite al programador interactuar directamente con el
        procesador.
      </Parrafo>

      <SubText>Características del Conjunto de Instrucciones</SubText>
      <Parrafo>
        Una instrucción es un tipo especial de dato almacenado en memoria como
        una cadena de bits. Ordena al procesador realizar una operación y
        proporciona toda la información necesaria: operación y operandos.
      </Parrafo>

      <SubText>Tipos de Instrucciones</SubText>
      <TinyText>Basadas en su estructura interna:</TinyText>
      <ListDisc>
        <li>Instrucciones de 0, 1, 2 o 3 operandos.</li>
        <li>Diferentes formatos y modos de direccionamiento.</li>
      </ListDisc>

      <SubText>Formato de Instrucción</SubText>
      <Parrafo>
        Es la estructura interna de la instrucción, representada como una cadena
        de bits dividida en bloques organizados en campos.
      </Parrafo>

      <TinyText>Bloques del formato:</TinyText>
      <ListDisc>
        <li>
          <strong>Bloque de Identificación:</strong> Contiene el Código de
          Operación (CO).
        </li>
        <li>
          <strong>Bloque de Direccionamiento:</strong> Contiene los operandos y
          modos de direccionamiento.
        </li>
      </ListDisc>

      <TinyText>Tamaño del Formato:</TinyText>
      <ListDisc>
        <li>
          <strong>Fijo:</strong> Todas las instrucciones tienen el mismo tamaño.
        </li>
        <li>
          <strong>Variable:</strong> Depende del tipo de operación y operandos.
        </li>
      </ListDisc>

      <SubText>Codificación de la Operación (CO)</SubText>
      <Parrafo>
        El CO identifica la operación que debe realizar el procesador. Existen
        tres técnicas principales para codificarlo.
      </Parrafo>

      <SubText>1. Código de Bloque Fijo</SubText>
      <Parrafo>
        Asigna una cantidad fija de bits a cada instrucción. Es simple y fácil
        de implementar. El número de bits se calcula con:
      </Parrafo>
      <TinyText>L(co) = ceil(log2(i))</TinyText>

      <SubText>2. Código de Bloque Extendido</SubText>
      <Parrafo>
        Extiende el CO utilizando bits no utilizados en formatos con menos
        operandos. Define grupos internos de instrucciones con diferentes
        cantidades de bits para el CO.
      </Parrafo>

      <SubText>3. Técnica de Huffman</SubText>
      <Parrafo>
        Basada en frecuencias de uso. Asigna códigos más cortos a instrucciones
        más frecuentes. Produce la codificación más eficiente según teoría de
        comunicaciones.
      </Parrafo>

      <SubText>Campos de Dirección</SubText>
      <Parrafo>
        Explican dónde están los operandos y cómo obtenerlos. Un campo de
        dirección incluye el modo de direccionamiento y los valores necesarios
        para calcular la dirección efectiva (EA).
      </Parrafo>

      <TinyText>Una instrucción puede especificar operandos:</TinyText>
      <ListDisc>
        <li>Inmediatos (en la instrucción).</li>
        <li>En un registro.</li>
        <li>En memoria.</li>
      </ListDisc>

      <SubText>Modos de Direccionamiento</SubText>
      <Parrafo>
        Determinan cómo obtener el operando. Se dividen en modos básicos y
        compuestos.
      </Parrafo>

      <SubText>Modos Básicos</SubText>
      <ListDisc>
        <li>
          <strong>Inmediato:</strong> El operando está en la instrucción.
        </li>
        <li>
          <strong>Directo/Registro:</strong> El operando está en un registro.
        </li>
        <li>
          <strong>Absoluto:</strong> El operando está en memoria.
        </li>
        <li>
          <strong>Indirecto de Registro:</strong> Un registro apunta a memoria.
        </li>
        <li>
          <strong>Indirecto de Memoria:</strong> Una memoria apunta a otra.
        </li>
        <li>
          <strong>Autoincremento:</strong> Tras usar el registro, se incrementa.
        </li>
        <li>
          <strong>Autodecremento:</strong> Se decrementa antes de acceder.
        </li>
      </ListDisc>

      <SubText>Modos Compuestos o Desplazados</SubText>
      <ListDisc>
        <li>
          <strong>Indexado:</strong> Base + índice para obtener la EA.
        </li>
        <li>
          <strong>Indirecto Indexado:</strong> Igual que el anterior, pero
          indirecto.
        </li>
        <li>
          <strong>Base + Desplazamiento:</strong> Base + valor fijo.
        </li>
        <li>
          <strong>Base + Desplazamiento Escalado:</strong> Índice multiplicado
          para recorrer estructuras.
        </li>
        <li>
          <strong>Relativo:</strong> Usado principalmente para saltos relativos
          al PC.
        </li>
      </ListDisc>

      <SubText>Codificación del Operando</SubText>
      <Parrafo>
        Similar a la codificación del CO. Se codifica el modo de
        direccionamiento y los valores necesarios. Algunas arquitecturas usan
        bits específicos para diferenciar versiones directas e indirectas, como
        el bit de indirecto de la PDP-11.
      </Parrafo>

      <SubText>Codificación Completa de Instrucciones</SubText>
      <Parrafo>
        Un ejemplo típico es el formato R de la PDP-11, donde se combinan CO,
        modos de direccionamiento y registros fuente/destino para formar una
        instrucción completa.
      </Parrafo>
    </Background>
  );
};

export default Unidad3;
