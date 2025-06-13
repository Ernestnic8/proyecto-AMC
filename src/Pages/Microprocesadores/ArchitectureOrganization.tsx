import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Background from "@components/Base/Background";
import SubText from "@components/Base/SubText";
import Parrafo from "@components/Base/Parrafo";
import ListDisc from "@components/Base/ListDisc";
import TinyText from "@components/Base/TinyText";
import ListDecimal from "@components/Base/ListDecimal";

const ArchitectureOrganization = () => {
  function createData(
    caracteristic: string,
    architecture: string,
    organization: string
  ) {
    return { caracteristic, architecture, organization };
  }

  const rows = [
    createData("Visión", "Lógica / software", "Física / hardware"),
    createData("Visibilidad al usuario", "Sí", "	No necesariamente"),
    createData(
      "Incluye",
      "Instrucciones, tipos de datos, E/S",
      "ALU, buses, tecnología, implementación"
    ),
    createData(
      "Ejemplo",
      `El programador ve el registro "AX"`,
      "El ingeniero conoce cómo está cableado"
    ),
  ];
  return (
    <Background text="Arquitectura y Organización de Computadoras">
      <SubText>
        ¿Qué es la arquitectura de computadoras?
      </SubText>
      <Parrafo>
        La arquitectura de computadoras se refiere al conjunto de atributos
        visibles para el programador. Es decir, cómo una computadora está
        diseñada para ejecutar instrucciones, manejar datos, y comunicarse con
        otros dispositivos desde el punto de vista del software. <br />
        <p className="mt-2 mb-2">
          <strong>Incluye aspectos como:</strong>
        </p>
        <ListDisc>
          <li>El conjunto de instrucciones que reconoce el procesador. </li>
          <li>Los tipos de datos que puede manejar. </li>
          <li>
            La manera en la que se accede a la memoria y los registros (modos de
            direccionamiento).
          </li>
        </ListDisc>
        <p className="mt-2 mb-2">
          <strong>Ejemplo:</strong> Un programador necesita saber cómo usar
          registros, qué instrucciones están disponibles y cómo acceder a la
          memoria, pero no necesita conocer los transistores que lo hacen
          posible.
        </p>
      </Parrafo>

      <SubText>
        ¿Qué es la organización de computadoras?
      </SubText>
      <TinyText>
        La organización de computadoras se refiere a la implementación física de
        la arquitectura. Esto incluye todos los detalles de hardware:
      </TinyText>
      <ListDisc>
        <li>Cómo se construyen y conectan los componentes internos.</li>
        <li>Qué tecnologías se usan (por ejemplo, CMOS).</li>
        <li>Cómo se sincronizan las operaciones internas.</li>
        <li>Cómo fluye la información a través del sistema.</li>
      </ListDisc>

      <SubText>
        Diferencia entre arquitectura y organización
      </SubText>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="table">
          <TableHead style={{ backgroundColor: "#00fbb4" }}>
            <TableRow>
              <TableCell>Característica</TableCell>
              <TableCell align="center"> Arquitectura</TableCell>
              <TableCell align="center">Organización</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: "rgba(126, 123, 123, 0.5)" }}>
            {rows.map((row) => (
              <TableRow
                key={row.caracteristic}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.caracteristic}
                </TableCell>
                <TableCell align="left">{row.architecture}</TableCell>
                <TableCell align="left">{row.organization}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <SubText>
        Subdivisiones de la organización:
      </SubText>

      <ListDecimal>
        <li className="font-bold text-xl">Estructura:</li>
        <p className="text-md">
          Describe los componentes físicos principales que conforman un sistema
          computacional. Son las "piezas" del hardware que interactúan para
          ejecutar programas.
        </p>
        <p className="text-xl">Principales elementos:</p>

        <ListDisc>
          <li>
            <strong>Unidad Central de Procesamiento (CPU):</strong> Controla y
            ejecuta instrucciones.
          </li>
          <li>
            <strong>Memoria:</strong> Almacena datos y programas
          </li>
          <li>
            <strong>Dispositivos de Entrada/Salida (E/S):</strong> Permiten la
            comunicación con el exterior.
          </li>
          <li>
            <strong>Buses:</strong> Vías de comunicación entre CPU, memoria y
            periféricos.
          </li>
        </ListDisc>
        <p>
          Esta visión es útil cuando se diseña un sistema digital, como un
          microprocesador personalizado o un sistema embebido.
        </p>
        <li className="text-xl font-bold">Funcion:</li>
        <p className="font-bold text-md">
          Se refiere a las operaciones que realiza cada componente dentro del
          sistema. Analiza cómo se comporta cada parte para cumplir su
          propósito.
        </p>
        <p>Ejemplos:</p>
        <ListDisc>
          <li>
            La memoria almacena información binaria y la entrega cuando la CPU
            la necesita.
          </li>
          <li>
            La CPU busca instrucciones, las decodifica, las ejecuta y gestiona
            resultados.
          </li>
          <li>
            Los dispositivos de entrada/salida envían o reciben información
            desde y hacia el entorno.
          </li>
        </ListDisc>
        <p className="font-bold text-md">
          Las funciones se combinan para ejecutar el ciclo de instrucción, que
          es el núcleo del procesamiento digital.
        </p>
      </ListDecimal>
    </Background>
  );
};

export default ArchitectureOrganization;
