import Background from "@components/Base/Background";
import ListDisc from "@components/Base/ListDisc";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const Inicio = () => {
  return (
    <Background text="Guía de AMC 2 - Arquitectura de Máquinas">
      <TinyText>
        Bienvenido a este sitio educativo dedicado a los contenidos de la
        asignatura Arquitectura de Máquinas II de la carrera de Computación. En
        esta guía encontrarás las siguientes unidades:
        <br />
        <br />
        Unidad I: Introducción a la Arquitectura y Organización de Computadoras.
        <br />
        Unidad II: Organización del CPU.
        <br />
        Unidad 3: Conjunto de Instrucciones.
        <br />
        Unidad 4: Unidad de Ejecución.
        <br />
        Unidad 5: Unidad de Control.
        <br />
        Unidad 6: Sistema de Memoria.
        <br />
        Unidad VII: Sistema de Entrada y Salida (E/S).
      </TinyText>

      <div className="flex flex-col items-center mt-50">
        <SubText>Esta página fue elaborada por:</SubText>
        <ListDisc>
          <li>
            <strong>Francisco Castillo - Carnet: 2020-0399U</strong>
          </li>
          <li>
            <strong>Guillermo Castillo - Carnet: 2020-0379U</strong>
          </li>
          <li>
            <strong>Eduardo Sandino - Carnet: 2021-0477U </strong>
          </li>
          <li>
            <strong>Hansel Centeno - Carnet: 2021-0206U</strong>
          </li>
        </ListDisc>
      </div>
    </Background>
  );
};

export default Inicio;
