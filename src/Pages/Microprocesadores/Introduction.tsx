import Background from "@components/Base/Background";
import ListDecimal from "@components/Base/ListDecimal";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const Introduction = () => {
  return (
    <Background text="Introduccion a los Microprocesadores">
      <SubText>¿Qué es un microprocesador?</SubText>
      <Parrafo>
        Un microprocesador es un circuito integrado que actúa como el cerebro de
        un sistema computacional. Su función principal es ejecutar instrucciones
        almacenadas en memoria y coordinar el funcionamiento de todos los demás
        componentes del sistema, como la memoria, los dispositivos de
        entrada/salida y los buses de datos. Desde su aparición en la década de
        1970 con el Intel 4004, los microprocesadores han evolucionado
        significativamente, permitiendo la construcción de computadoras
        personales, servidores, teléfonos inteligentes y otros dispositivos
        electrónicos de alto rendimiento.
      </Parrafo>

      <SubText>Funciones principales</SubText>
      <TinyText>
        Los microprocesadores realizan cuatro funciones básicas:
      </TinyText>
      <ListDecimal>
        <li>
          <strong>Búsqueda (Fetch):</strong> recuperan instrucciones desde la
          memoria.
        </li>
        <li>
          <strong>Decodificación (Decode):</strong> interpretan la instrucción.
        </li>
        <li>
          <strong>Ejecución (Execute):</strong> realizan la acción
          correspondiente.
        </li>
        <li>
          <strong>Escritura (Write-back):</strong> almacenan el resultado, si es
          necesario.
        </li>
      </ListDecimal>
      <TinyText>
        Este proceso se conoce como ciclo de instrucción, y se repite millones
        de veces por segundo, sincronizado por el reloj del sistema.
      </TinyText>

      <SubText>
        Importancia del microprocesador
      </SubText>
      <ListDisc>
        <li>Ejecuta programas, desde sistemas operativos hasta videojuegos.</li>
        <li>Controla el flujo de datos dentro de un sistema.</li>
        <li>Es fundamental en tareas de procesamiento lógico y aritmético.</li>
        <li>
          Se encuentra presente no solo en computadoras, sino en casi cualquier
          dispositivo moderno (impresoras, routers, cámaras, etc.).
        </li>
      </ListDisc>
      <SubText>
        Aplicaciones comunes
      </SubText>
      <ListDisc>
        <li>
          <strong>Computadoras personales:</strong> para ejecutar aplicaciones,
          juegos y software de oficina.
        </li>
        <li>
          <strong>Servidores:</strong> para manejar múltiples procesos y
          usuarios simultáneamente.
        </li>
        <li>
          <strong>Teléfonos inteligentes:</strong> integrados en SoCs que
          controlan múltiples funciones.
        </li>
        <li>
          <strong>Dispositivos industriales y automotrices:</strong>como parte
          de sistemas de control complejos.
        </li>
      </ListDisc>
    </Background>
  );
};

export default Introduction;
