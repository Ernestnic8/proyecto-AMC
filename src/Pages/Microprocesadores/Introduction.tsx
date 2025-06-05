import Background from "@components/Base/Background";

const Introduction = () => {
  return (
    <Background>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Introduccion a los Microprocesadores
      </h1>
      <h1 className="text-2xl text-blue-900 font-bold text-center mb-2">
        ¿Qué es un microprocesador?
      </h1>
      <p className="text-lg text-gray-700 mb-4 text-justify">
        Un microprocesador es un circuito integrado que actúa como el cerebro de
        un sistema computacional. Su función principal es ejecutar instrucciones
        almacenadas en memoria y coordinar el funcionamiento de todos los demás
        componentes del sistema, como la memoria, los dispositivos de
        entrada/salida y los buses de datos. Desde su aparición en la década de
        1970 con el Intel 4004, los microprocesadores han evolucionado
        significativamente, permitiendo la construcción de computadoras
        personales, servidores, teléfonos inteligentes y otros dispositivos
        electrónicos de alto rendimiento.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4 text-center">
        Funciones principales
      </h2>
      <h3 className="text-xl font-bold text-gray-600 mb-5">
        Los microprocesadores realizan cuatro funciones básicas:
      </h3>
      <ul className="list-decimal list-inside text-gray-700 space-y-2">
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
      </ul>
      <h3 className="text-md font-bold text-gray-800 mb-5 mt-5 text-justify">
        Este proceso se conoce como ciclo de instrucción, y se repite millones
        de veces por segundo, sincronizado por el reloj del sistema.
      </h3>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4 text-center">
        Importancia del microprocesador
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Ejecuta programas, desde sistemas operativos hasta videojuegos.</li>
        <li>Controla el flujo de datos dentro de un sistema.</li>
        <li>Es fundamental en tareas de procesamiento lógico y aritmético.</li>
        <li>
          Se encuentra presente no solo en computadoras, sino en casi cualquier
          dispositivo moderno (impresoras, routers, cámaras, etc.).
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4 text-center">
        Aplicaciones comunes
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
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
      </ul>
    </Background>
  );
};

export default Introduction;
