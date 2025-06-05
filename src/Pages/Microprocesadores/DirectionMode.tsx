import Background from "@components/Base/Background";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DirectionMode = () => {
  function createData(
    type: string,
    description: string,
    speed: string,
    volatility: string
  ) {
    return { type, description, speed, volatility };
  }

  const rows = [
    createData("Inmediato", "No", "No", "Valores constantes"),
    createData("Directo", "Sí", "No", "Acceso fijo a memoria"),
    createData(
      "Indirecto",
      "No (referencia)",
      "Sí",
      "Acceso dinámico (punteros)"
    ),
    createData(
      "Indexado",
      "Parcial",
      "Sí (base + índice)",
      "Arreglos y estructuras secuenciales"
    ),
    createData("Relativo", "No", "Sí (PC + desplazamiento)", "Saltos y bucles"),
  ];

  return (
    <Background text="Modos de Direccionamiento">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
        ¿Qué es un modo de direccionamiento?
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-justify">
        Un modo de direccionamiento define la forma en que una instrucción
        accede a sus operandos.
        <br />
        Los operandos pueden ser datos inmediatos, registros, direcciones de
        memoria o valores calculados.
        <br />
        Cada arquitectura de procesador (x86, ARM, RISC, etc.) puede tener
        distintos modos, pero los más comunes están presentes en casi todos los
        sistemas.
      </p>

      <h1 className="text-lg font-bold text-center mb-6 text-gray-700">
        Modos más comunes
      </h1>

      <ul className="list-decimal list-inside text-gray-700 space-y-2">
        <li className="font-bold">Modo Inmediato </li>
        <p>El operando está incluido directamente en la instrucción.</p>
        <p className="font-bold">Funciones:</p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>No se accede a memoria ni registros para obtener el dato</li>
          <li>Es rápido y directo.</li>
        </ul>
        <p className="font-bold">Ejemplo:</p>
        <p>
          MOV A, #5 ; Carga el valor 5 directamente al registro A
          <br />
          Ideal para valores constantes como contadores, máscaras, o
          configuraciones.
        </p>

        <li className="font-bold">Modo Directo </li>
        <p>
          La dirección de memoria que contiene el operando se especifica
          explícitamente en la instrucción.
        </p>
        <p className="font-bold">Funcion:</p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>La CPU accede directamente a la posición de memoria indicada</li>
        </ul>
        <p className="font-bold">Ejemplo:</p>
        <p>
          MOV A, [1000h] ; Carga en A el valor que se encuentra en la dirección
          1000h
          <br />
          Sencillo pero limitado si se requieren accesos más dinámicos
        </p>

        <li className="font-bold">Modo Indirecto </li>
        <p>
          La instrucción contiene una referencia a un registro o dirección que a
          su vez apunta a la dirección real del operando.
        </p>
        <p className="font-bold">Funciones:</p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>Implica un nivel de indirección.</li>
          <li>
            Muy útil en estructuras de datos dinámicas como listas, pilas,
            colas, etc
          </li>
        </ul>
        <p className="font-bold">Ejemplo:</p>
        <p>
          MOV A, [BX] ; Usa el contenido de BX como dirección para cargar el
          dato
          <br />
          Muy flexible y usado en punteros.
        </p>

        <li className="font-bold">Modo Indexado </li>
        <p>
          El operando se encuentra en una dirección resultante de sumar un valor
          base con un índice.
        </p>
        <p className="font-bold">Funcion:</p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>Común en recorridos de arreglos y matrices.</li>
        </ul>
        <p className="font-bold">Ejemplo:</p>
        <p>
          MOV A, [SI+3] ; Carga el dato que está 3 posiciones después del índice
          SI
          <br />
          Se utiliza mucho en estructuras secuenciales (vectores, strings).
        </p>

        <li className="font-bold">Modo Relativo </li>
        <p>Se usa típicamente en instrucciones de salto.</p>
        <p className="font-bold">Funciones:</p>
        <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
          <li>
            La dirección objetivo es calculada relativamente a la posición
            actual del PC (Program Counter).
          </li>
          <li>Permite un código más compacto y portable.</li>
        </ul>
        <p className="font-bold">Ejemplo:</p>
        <p>
          JZ +4 ; Salta 4 bytes adelante si se cumple la condición (ej. ZF=1)
          <br />
          Ideal para bucles, condicionales y llamadas a subrutinas locales.
        </p>
      </ul>
      <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4 text-center">
        Comparación entre modos
      </h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="table">
          <TableHead style={{ backgroundColor: "#00fbb4" }}>
            <TableRow>
              <TableCell>Modo</TableCell>
              <TableCell align="center">Direccion Explicita</TableCell>
              <TableCell align="center">calculo de direccion</TableCell>
              <TableCell align="center">Uso Tipico</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: "rgba(126, 123, 123, 0.5)" }}>
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
      <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4 text-center">
        ¿Por qué son importantes?
      </h2>
      <ul className="list-disc list-inside pl-6 text-gray-700 space-y-2">
        <li>Permiten que el mismo conjunto de instrucciones trabaje con distintos tipos de datos y estructuras.</li>
        <li>
          Muy útil en estructuras de datos dinámicas como listas, pilas, colas,
          etc
        </li>
      </ul>
    </Background>
  );
};

export default DirectionMode;
