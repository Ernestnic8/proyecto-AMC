import Background from "@components/Base/Background";
import ListDecimal from "@components/Base/ListDecimal";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const Buses = () => {
  return (
    <Background text="Buses del Sistema">
      <SubText>
        ¿Qué es un bus en arquitectura de computadoras?
      </SubText>
      <Parrafo>
        Un bus es un canal de comunicación que permite la transferencia de
        datos, direcciones y señales de control entre los distintos componentes
        de una computadora: CPU, memoria y dispositivos de entrada/salida.
        <br />
        Podemos imaginar los buses como “autopistas internas” que interconectan
        todas las partes del sistema, facilitando que los datos fluyan de forma
        sincronizada y eficiente.
      </Parrafo>

      <TinyText>
        Tipos principales de buses
      </TinyText>
      <ListDecimal>
        <li className="font-bold">Bus de Datos</li>
        <p>Transporta la información real que se mueve dentro del sistema.</p>
        <ListDisc>
          <li>
            Se utiliza para leer o escribir datos entre la CPU, la memoria y los
            dispositivos de entrada/salida.
          </li>
          <li>
            Puede ser unidireccional o bidireccional, dependiendo de si los
            datos se envían o reciben.
          </li>
          <li>
            Su ancho (número de líneas) determina cuántos bits pueden
            transferirse simultáneamente
          </li>
        </ListDisc>

        <p className="font-bold">Ejemplo:</p>
        <p>
          Un bus de datos de 8 bits transfiere un byte por ciclo.
          <br />
          Uno de 32 bits transfiere 4 bytes por ciclo.
        </p>

        <li className="font-bold">Bus de Direcciones</li>
        <p>
          Transporta las ubicaciones (direcciones) de memoria o de puertos donde
          se desea leer o escribir datos
        </p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>
            Es unidireccional, desde la CPU hacia la memoria o periféricos.
          </li>
          <li>Indica “dónde” se encuentra la información en el sistema.</li>
          <li>Su ancho define la cantidad máxima de memoria direccionable</li>
        </ul>
        <p className="font-bold">Ejemplo:</p>
        <p>
          Un bus de direcciones de 16 bits puede direccionar hasta 2¹⁶ = 65,536
          ubicaciones. <br />
          Uno de 32 bits puede acceder hasta 4 GB de memoria.
        </p>

        <li className="font-bold">Bus de Control</li>
        <p>
          Transporta señales de control y sincronización necesarias para
          coordinar el funcionamiento del sistema.
        </p>
        <p className="font-bold">Funciones clave:</p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>Indicar si la operación es de lectura o escritura</li>
          <li>
            Gestionar señales de reloj, interrupciones, estado, reset, etc.
          </li>
          <li>
            Permitir o denegar el acceso al bus mediante mecanismos de
            arbitraje.
          </li>
        </ul>
        <p className="font-bold">Ejemplos de señales comunes:</p>
        <p className="pl-6">
          <strong>RD (Read): </strong>
          habilita una lectura desde memoria o E/S.
          <br /> <strong>WR (Write): </strong>
          habilita una escritura.
          <br />
          <strong>CLK (Clock): </strong>
          señal de sincronización del sistema.
          <br />
          <strong>INT (Interrupt): </strong>
          solicitud de interrupción.
          <br />
          <strong>RESET: </strong>
          reinicia el sistema.
        </p>
      </ListDecimal>

      <SubText>
        Diagrama logico simplicado
      </SubText>
      <div className="flex justify-center mb-6">
        <img src="/image/busesData.png" alt="diagrama" className="max-w-100" />
      </div>
      <ListDisc>
        <li>
          <strong>DATA (Datos):</strong> flujo bidireccional
        </li>
        <li>
          <strong>ADDR (Dirección):</strong> flujo desde CPU hacia los demás.
        </li>
        <li>
          <strong>CTRL (Control):</strong> flujo principalmente desde CPU
        </li>
      </ListDisc>

      <SubText>
        Importancia del sistema de buses
      </SubText>
      <ListDisc>
        <li>
          Permite que múltiples componentes se comuniquen sin necesidad de
          conexiones dedicadas.
        </li>
        <li>Reduce el número de pines en los procesadores</li>
        <li>
          Establece un estándar para la expansión y escalabilidad del sistema
        </li>
      </ListDisc>

      <SubText>
        Limitaciones y soluciones
      </SubText>
      <ListDisc>
        <li>
          <strong>Cuello de botella (bottleneck): </strong> si varios
          dispositivos comparten un solo bus, se puede generar congestión.
        </li>
        <li>
          <strong>Solución: </strong>uso de buses separados (por ejemplo, bus de
          expansión PCIe, buses duales en Harvard Architecture), o buses
          paralelos e independientes para memoria e I/O.
        </li>
      </ListDisc>
    </Background>
  );
};

export default Buses;
