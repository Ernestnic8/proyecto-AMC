import Background from "@components/Base/Background";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StructurePC = () => {
  function createData(
    type: string,
    description: string,
    speed: string,
    volatility: string
  ) {
    return { type, description, speed, volatility };
  }

  const rows = [
    createData(
      "Registros",
      "Dentro de la CPU, muy rápidos",
      "Muy alta",
      "Volátil"
    ),
    createData(
      "Caché",
      "Memoria intermedia entre CPU y RAM",
      "Alta",
      "Volátil"
    ),
    createData("RAM", "Memoria principal para ejecución", "Media", "Volátil"),
    createData(
      "ROM",
      "Almacena firmware, no se puede modificar",
      "Lenta",
      "No volátil"
    ),
    createData(
      "EEPROM / Flash",
      "Memoria regrabable no volátil",
      "Variable",
      "No volátil"
    ),
    createData(
      "Almacenamiento secundario",
      "Discos, SSDs, etc.",
      "Baja",
      "No volátil"
    ),
  ];
  return (
    <div>
      <Background>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Estructura de la Computadora
        </h1>
        <h1 className="text-2xl text-blue-900 font-bold text-center mb-2">
          ¿Qué es la estructura de una computadora?
        </h1>
        <p className="text-lg text-gray-700 mb-4 text-justify">
          La estructura de una computadora describe cómo están organizados sus
          componentes físicos fundamentales. A pesar de que hoy existen diversos
          tipos de computadoras (PCs, servidores, dispositivos embebidos), todas
          comparten una arquitectura base compuesta por:
        </p>
        <ul className="list-decimal text-lg font-bold list-inside text-gray-700 space-y-2 mb-5">
          <li>Unidad de procesamiento (CPU)</li>
          <li>Memoria</li>
          <li>Dispositivos de entrada/salida (E/S)</li>
          <li>Buses (canales de comunicación)</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4 text-justify">
          Este modelo general es conocido como la arquitectura de Von Neumann,
          que sigue vigente como principio en la mayoría de sistemas digitales
          modernos.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4 text-center">
          Partes de la estructura de una computadora
        </h2>
        <ul className="list-decimal list-inside text-gray-700 space-y-2">
          <li className="font-bold text-lg">
            <strong>Procesamiento: la CPU</strong>
          </li>
          <p className="text-gray-700 mb-4 text-justify">
            La Unidad Central de Procesamiento (CPU) es el componente principal
            de cualquier sistema computacional. Su función es ejecutar
            instrucciones, coordinar la operación del sistema y procesar datos.{" "}
            <br /> <br />
            Componentes clave de la CPU:
          </p>
          <ul className="list-disc list-inside pl-10 text-gray-700 space-y-2">
            <li>
              <strong>Unidad de Control (CU):</strong>Dirige el flujo de datos,
              interpreta instrucciones y coordina al resto del sistema.
            </li>
            <li>
              <strong>Unidad Aritmética Lógica (ALU):</strong>Realiza
              operaciones matemáticas y lógicas.
            </li>
            <li>
              Registros: Memoria interna de alta velocidad para datos
              temporales.
            </li>
          </ul>
          <li className="font-bold mt-4 text-lg">
            <strong>Sistema de Memoria</strong>
          </li>

          <p className="text-gray-700 mb-4 text-justify">
            La memoria es responsable de almacenar temporal o permanentemente
            los datos y programas necesarios para el funcionamiento del sistema.
            Se organiza en niveles jerárquicos, según su velocidad, costo y
            capacidad.
          </p>
          <p className="text-gray-700 font-black mb-4 text-justify">
            Tipos de memoria:
          </p>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="table">
              <TableHead style={{ backgroundColor: "#00fbb4" }}>
                <TableRow>
                  <TableCell>Tipo</TableCell>
                  <TableCell align="center">Descripcion</TableCell>
                  <TableCell align="center">Velocidad</TableCell>
                  <TableCell align="center">Volatilidad</TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                style={{ backgroundColor: "rgba(126, 123, 123, 0.5)" }}
              >
                {rows.map((row) => (
                  <TableRow
                    key={row.type}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.type}
                    </TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                    <TableCell align="left">{row.speed}</TableCell>
                    <TableCell align="left">{row.volatility}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <li className="font-bold text-lg">Sistema de Entrada/Salida (E/S)</li>
          <p className="text-gray-700 mb-4 text-justify">
            Los dispositivos de entrada/salida permiten la interacción entre la
            computadora y su entorno.
          </p>
          <p className="font-bold">Se clasifican como:</p>
          <ul className="list-disc list-inside pl-10 text-gray-700 space-y-2">
            <li>
              <strong>Entrada:</strong>teclado, mouse, sensores, cámaras.
            </li>
            <li>
              <strong>Salida:</strong>monitor, impresora, actuadores.
            </li>
            <li>
              <strong>Entrada/Salida:</strong> discos duros, memorias USB,
              pantallas táctiles.
            </li>
          </ul>
          <p className="font-semibold">Funciones del sistema E/S:</p>
          <ul className="list-disc list-inside pl-10 text-gray-700 space-y-2">
            <li>Enviar/recibir datos hacia o desde el exterior.</li>
            <li>
              Convertir señales externas en un formato entendible por el
              sistema.
            </li>
            <li>
              Coordinar la transferencia de información mediante controladores y
              buffers.
            </li>
          </ul>
          <li className="font-bold text-lg text-justify">
            Interconexión: los Buses
          </li>
          <p>
            Los buses son canales que permiten la comunicación entre los
            componentes de la computadora. <br />{" "}
            <strong>Funciones básicas:</strong>
          </p>
          <ul className="list-disc list-inside pl-10 text-gray-700 space-y-2">
            <li>
              <strong>Bus de datos:</strong>transporta la información (valores
              binarios).
            </li>
            <li>
              <strong>transporta la información (valores binarios).</strong>
              indica la ubicación en memoria.
            </li>
            <li>
              <strong>Bus de control:</strong>transmite señales de control
              (lectura, escritura, reloj, interrupciones).
            </li>
          </ul>
        </ul>
        <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4 text-center">
          Modelo Von Neumann
        </h2>
        <p className="text-gray-600 font-bold mb-2">Este modelo, propuesto en 1945, plantea que:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>El programa y los datos se almacenan en la misma memoria.</li>
          <li>
            La CPU obtiene instrucciones desde la memoria y las ejecuta
            secuencialmente.
          </li>
          <li>
            Hay un único camino entre CPU y memoria, lo cual puede generar
            cuellos de botella (llamado "Von Neumann Bottleneck").
          </li>
        </ul>
        <p></p>
      </Background>
    </div>
  );
};

export default StructurePC;
