import Background from "@components/Base/Background";
import ListDecimal from "@components/Base/ListDecimal";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const Unidad1 = () => {
  return (
    <Background text="Unidad I: Introducción a la Arquitectura y Organización de Computadoras">
      <SubText>1.1 Arquitectura y Organización de Computadoras</SubText>

      <Parrafo>
        La arquitectura y organización de computadoras se refiere a la manera en
        que están diseñados, estructurados e interconectados los distintos
        componentes de un sistema computacional.
      </Parrafo>

      <TinyText>Existen dos vistas principales:</TinyText>
      <ListDisc>
        <li>
          <strong>Arquitectura:</strong> Conjunto de atributos visibles al
          programador, como el conjunto de instrucciones, formatos de datos,
          modos de direccionamiento y comportamiento lógico.
        </li>
        <li>
          <strong>Organización:</strong> Se refiere a la implementación física
          del sistema: componentes, interconexión, señales, control y
          tecnología utilizada.
        </li>
      </ListDisc>

      <TinyText>Se divide también en dos enfoques:</TinyText>
      <ListDisc>
        <li>
          <strong>Funcional:</strong> Estudia la función de cada componente del
          sistema.
        </li>
        <li>
          <strong>Estructural:</strong> Analiza la posición e interconexión de
          cada parte.
        </li>
      </ListDisc>

      <SubText>1.2 Evolución de las Computadoras</SubText>
      <Parrafo>
        Las computadoras han evolucionado desde máquinas mecánicas simples hasta
        sistemas digitales altamente complejos. Este proceso incluye avances en
        hardware, miniaturización, velocidad de procesamiento, capacidad de
        almacenamiento y eficiencia energética. Cada generación ha introducido
        mejoras significativas que han permitido el desarrollo de sistemas más
        potentes y versátiles.
      </Parrafo>

      <SubText>1.3 Máquina Secuencial de Programa Almacenado</SubText>
      <Parrafo>
        El concepto de programa almacenado consiste en definir un conjunto de
        instrucciones simples para resolver cualquier tarea, cargándolas en la
        misma memoria donde se almacenan los datos.
      </Parrafo>

      <TinyText>Sus principios fundamentales son:</TinyText>
      <ListDecimal>
        <li>
          <strong>Programa almacenado:</strong> Las instrucciones se cargan en
          memoria junto con los datos.
        </li>
        <li>
          <strong>Secuencialidad:</strong> La máquina ejecuta instrucciones una
          tras otra gracias a un dispositivo de control o secuenciador.
        </li>
      </ListDecimal>

      <TinyText>Esta máquina requiere cinco unidades funcionales:</TinyText>
      <ListDisc>
        <li>Órgano de cálculo (unidad de procesamiento ― CPU)</li>
        <li>Memoria</li>
        <li>Unidad de control</li>
        <li>Unidad de entrada</li>
        <li>Unidad de salida</li>
      </ListDisc>

      <SubText>1.4 Organización de la Computadora</SubText>
      <TinyText>Se divide en dos enfoques:</TinyText>
      <ListDisc>
        <li>
          <strong>Funcional:</strong> Procesamiento de datos, almacenamiento,
          transferencia y control.
        </li>
        <li>
          <strong>Estructural:</strong> Componentes principales y sus
          interconexiones.
        </li>
      </ListDisc>

      <TinyText>Componentes estructurales básicos:</TinyText>
      <ListDisc>
        <li>Procesador o CPU</li>
        <li>Memoria</li>
        <li>Unidades de entrada/salida</li>
      </ListDisc>
    </Background>
  );
};

export default Unidad1;
