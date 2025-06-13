import Background from "@components/Base/Background";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";


function createRow(caracteristica: string, temporizador: string, contador: string) {
  return { caracteristica, temporizador, contador };
}

const rows = [
  createRow("Fuente de incremento", "Reloj interno del sistema", "Señales externas (entradas del pin)"),
  createRow("Uso principal", "Medir tiempo, crear retardos", "Contar eventos (ej. pulsos de sensores)"),
  createRow("Precisión", "Alta (depende del reloj del sistema)", "Depende del origen externo"),
];

const TemporizadoresControl = () => {
  return (
    <Background text="Temporizadores y Contadores">
      <SubText>¿Qué son los temporizadores y contadores?</SubText>
      <Parrafo>
        Los temporizadores y contadores (Timers/Counters) son módulos integrados en el microcontrolador 
        que permiten medir el tiempo o contar eventos. Ambos utilizan registros que se incrementan con 
        cada pulso de reloj o señal externa.
      </Parrafo>

      <TinyText>
        Son esenciales para tareas como generación de retardos, medición de frecuencia, control de 
        motores y más.
      </TinyText>

      <SubText>Diferencia entre temporizador y contador</SubText>
      <Parrafo>
        Aunque utilizan el mismo hardware, la diferencia clave radica en la fuente que incrementa su 
        valor:
      </Parrafo>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="diferencias">
          <TableHead style={{ backgroundColor: "#00fbb4" }}>
            <TableRow>
              <TableCell>Característica</TableCell>
              <TableCell align="center">Temporizador</TableCell>
              <TableCell align="center">Contador</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: "rgba(126, 123, 123, 0.2)" }}>
            {rows.map((row) => (
              <TableRow key={row.caracteristica}>
                <TableCell>{row.caracteristica}</TableCell>
                <TableCell align="center">{row.temporizador}</TableCell>
                <TableCell align="center">{row.contador}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TinyText>
        Ambos comparten el mismo módulo de hardware, pero se diferencian por la fuente de pulsos.
      </TinyText>

      <SubText>¿Cómo funciona un temporizador?</SubText>
      <Parrafo>
        Se configura un registro de temporizador que se incrementa automáticamente con cada pulso 
        del reloj del sistema. Cuando este valor alcanza un umbral predefinido, puede generar una 
        interrupción, reiniciarse o detenerse, dependiendo del modo configurado.
      </Parrafo>

      <ListDisc>
        <li>Generar interrupciones al alcanzar cierto valor.</li>
        <li>Reiniciarse automáticamente (modo auto-recarga).</li>
        <li>Detenerse (modo de un solo disparo).</li>
        <li>Generar señales de salida como PWM.</li>
      </ListDisc>

      <SubText>Modos de operación comunes</SubText>
      <ListDisc>
        <li><strong>Timer mode:</strong> cuenta pulsos del reloj interno.</li>
        <li><strong>Counter mode:</strong> cuenta eventos externos.</li>
        <li><strong>Modo auto-recarga:</strong> se reinicia al llegar al valor máximo.</li>
        <li><strong>Modo captura:</strong> guarda el valor cuando ocurre un evento.</li>
        <li><strong>Modo comparación:</strong> lanza interrupción al igualar un valor fijo.</li>
      </ListDisc>

      <SubText>Registro de configuración típico</SubText>
      <Parrafo>
        En muchos microcontroladores (como AVR/Arduino), se usan registros como:
      </Parrafo>
      <ListDisc>
        <li><strong>TCCRn:</strong> Timer/Counter Control Register</li>
        <li><strong>TCNTn:</strong> Timer/Counter (valor actual)</li>
        <li><strong>OCRn:</strong> Output Compare Register</li>
        <li><strong>TIMSK:</strong> Interrupt Mask Register</li>
        <li><strong>TIFR:</strong> Interrupt Flag Register</li>
      </ListDisc>

      <TinyText>🔍 Ejemplo:</TinyText>

      <Parrafo>
        <code>
          TCCR0A = 0b00000010; // Modo CTC<br />
          TCCR0B = 0b00000101; // Prescaler 1024<br />
          OCR0A = 156; // Comparar cada 10 ms<br />
          TIMSK0 = 0b00000010; // Habilitar interrupción por comparación
        </code>
      </Parrafo>

      <SubText>Aplicaciones comunes</SubText>
      <ListDisc>
        <li>Generar retardos (por ejemplo, encender un LED cada segundo).</li>
        <li>Medir tiempo entre eventos (cronómetros, sensores).</li>
        <li>Control de motores con PWM.</li>
        <li>Medición de frecuencia o período de señales.</li>
        <li>Contar objetos en líneas de producción.</li>
        <li>Implementar watchdog timers para evitar bloqueos del sistema.</li>
      </ListDisc>

      <SubText>Ejemplo práctico en pseudocódigo ASM</SubText>
      <Parrafo>
        <code>
          MOV TMOD, 01h ; Timer0 modo temporizador<br />
          MOV TH0, 0FCh ; Valor alto<br />
          MOV TL0, 66h ; Valor bajo<br />
          SETB TR0 ; Iniciar temporizador<br />
          Wait:<br />
          JNB TF0, Wait ; Esperar al desbordamiento<br />
          CLR TF0 ; Limpiar bandera<br />
          CLR TR0 ; Detener temporizador
        </code>
      </Parrafo>

      <TinyText>
        Este tipo de rutina permite crear retardos con precisión y bajo consumo de CPU.
      </TinyText>

      <SubText>Consideraciones clave</SubText>
      <ListDisc>
        <li>Los temporizadores suelen incluir prescalers para dividir la frecuencia del reloj.</li>
        <li>El número de bits (8, 16, 32) determina cuánto puede contar el temporizador.</li>
        <li>La cantidad y configuración de temporizadores varía según el fabricante del microcontrolador.</li>
      </ListDisc>

      <SubText> Conclusión</SubText>
      <Parrafo>
        Los temporizadores y contadores son herramientas fundamentales en sistemas embebidos. 
        Su correcta configuración permite controlar el tiempo, medir eventos y automatizar procesos con
        alta precisión.
      </Parrafo>
    </Background>
  );
};

export default TemporizadoresControl;
