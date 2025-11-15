import Background from "@components/Base/Background";
import ListDecimal from "@components/Base/ListDecimal";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const Unidad7 = () => {
  return (
    <Background text="Unidad VII: Sistema de Entrada y Salida (E/S)">
      <SubText>1. Concepto general</SubText>
      <Parrafo>
        El sistema de entrada y salida es responsable de intercambiar
        información entre la computadora y el exterior. Cumple dos funciones
        principales: entrada de datos y programas desde dispositivos externos, y
        salida de resultados hacia el usuario.
      </Parrafo>
      <Parrafo>
        La interacción con el usuario se da mediante la interfaz hombre-máquina,
        la cual traduce las acciones humanas en señales comprensibles para la
        computadora.
      </Parrafo>

      <SubText>2. Estructura de interconexión y buses</SubText>
      <Parrafo>
        El sistema de E/S se interconecta con la CPU y la memoria a través de
        buses que transportan datos, direcciones y señales de control.
      </Parrafo>
      <TinyText>Tipos de buses:</TinyText>
      <ListDisc>
        <li>Bus del sistema: conecta CPU, memoria y controladores de E/S.</li>
        <li>Buses de expansión: conectan periféricos externos.</li>
      </ListDisc>
      <TinyText>Estándares de comunicación:</TinyText>
      <ListDisc>
        <li>ISA</li>
        <li>PCI / PCIe</li>
        <li>USB</li>
        <li>FireWire</li>
        <li>eSATA</li>
      </ListDisc>

      <SubText>3. Módulos y direccionamiento de E/S</SubText>
      <Parrafo>
        Los módulos de E/S permiten la comunicación entre periféricos y la CPU,
        gestionando transferencia de datos, lógica de control y estado del
        dispositivo.
      </Parrafo>
      <TinyText>Formas de direccionamiento:</TinyText>
      <ListDisc>
        <li>
          Mapeo integrado: memoria y dispositivos comparten el mismo espacio.
        </li>
        <li>Mapeo separado: los dispositivos tienen direcciones exclusivas.</li>
      </ListDisc>

      <SubText>4. Técnicas de comunicación</SubText>
      <ListDecimal>
        <li>
          E/S programada (polling): la CPU verifica continuamente el estado del
          dispositivo.
        </li>
        <li>
          E/S por interrupciones: el dispositivo avisa cuando requiere atención.
        </li>
        <li>
          Acceso Directo a Memoria (DMA): transfiere datos sin la intervención
          del CPU.
        </li>
        <li>
          Canales o procesadores de E/S: gestionan múltiples transferencias
          complejas.
        </li>
      </ListDecimal>

      <SubText>5. Interrupciones</SubText>
      <Parrafo>
        Las interrupciones permiten suspender temporalmente la ejecución del CPU
        para atender eventos importantes.
      </Parrafo>
      <ListDisc>
        <li>Síncronas (excepciones): generadas por errores del programa.</li>
        <li>Asíncronas (hardware): generadas por dispositivos externos.</li>
      </ListDisc>
      <Parrafo>
        Un árbitro de interrupciones determina la prioridad de atención, como el
        controlador PIC Intel 8259A. Las interrupciones pueden habilitarse,
        inhabilitarse o enmascararse.
      </Parrafo>

      <SubText>6. Acceso Directo a Memoria (DMA)</SubText>
      <Parrafo>
        El DMA permite que los dispositivos accedan directamente a la memoria
        principal, liberando a la CPU de la tarea de transferencia.
      </Parrafo>
      <Parrafo>
        El controlador DMA determina dirección, cantidad de datos, sentido de
        transferencia y notifica al CPU al finalizar.
      </Parrafo>

      <SubText>7. Canales e interfaces externas</SubText>
      <TinyText>Tipos de canales:</TinyText>
      <ListDisc>
        <li>Canales selectores: dedicados a dispositivos de alta velocidad.</li>
        <li>Canales multiplexores: manejan varios dispositivos lentos.</li>
        <li>
          Procesadores de E/S (IOPs): controladores inteligentes con memoria
          propia.
        </li>
      </ListDisc>
      <TinyText>Interfaces externas:</TinyText>
      <ListDisc>
        <li>
          Interfaz paralela (ej. Centronics): transmite varios bits
          simultáneamente.
        </li>
        <li>
          Interfaz serial: transmite un bit a la vez (RS-232, USB, FireWire).
        </li>
      </ListDisc>

      <SubText>Conclusión</SubText>
      <Parrafo>
        Las Unidades VI y VII profundizan en dos sistemas fundamentales: la
        memoria y el sistema de entrada/salida. Ambos trabajan conjuntamente
        mediante buses e interfaces normalizadas para garantizar una
        transferencia rápida y confiable de información.
      </Parrafo>
    </Background>
  );
};

export default Unidad7;
