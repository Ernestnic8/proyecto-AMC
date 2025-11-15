import Background from "@components/Base/Background";
import ListDisc from "@components/Base/ListDisc";
import Parrafo from "@components/Base/Parrafo";
import SubText from "@components/Base/SubText";
import TinyText from "@components/Base/TinyText";

const Unidad6 = () => {
  return (
    <Background text="Unidad 6: Sistema de Memoria">
      <SubText>Función de Almacenamiento</SubText>
      <Parrafo>
        El sistema de memoria almacena datos y programas en diferentes niveles:
        registros del CPU, memoria principal y memoria secundaria.
      </Parrafo>

      <TinyText>Operaciones principales:</TinyText>
      <ListDisc>
        <li>Lectura</li>
        <li>Escritura</li>
      </ListDisc>

      <TinyText>Prestaciones y métricas:</TinyText>
      <ListDisc>
        <li>Latencia (acceso, ciclo, Vt)</li>
        <li>Capacidad (KB, MB, GB, TB)</li>
      </ListDisc>

      <SubText>Jerarquía de Memoria</SubText>
      <Parrafo>
        La memoria se organiza jerárquicamente para equilibrar velocidad, costo y
        capacidad. Incluye registros, caché, memoria principal y memoria secundaria.
      </Parrafo>

      <SubText>Caracterización de la Memoria</SubText>
      <TinyText>Por nivel de función:</TinyText>
      <ListDisc>
        <li>Memoria interna al CPU</li>
        <li>Caché</li>
        <li>Memoria principal</li>
        <li>Memoria secundaria</li>
      </ListDisc>

      <TinyText>Por tecnología:</TinyText>
      <ListDisc>
        <li>Semiconductora (SRAM, DRAM)</li>
        <li>Magnética</li>
        <li>Óptica / Magneto-óptica</li>
        <li>Emergentes (iones, hologramas, etc.)</li>
      </ListDisc>

      <TinyText>Por retención:</TinyText>
      <ListDisc>
        <li>Volátil</li>
        <li>No volátil</li>
        <li>Volátil con respaldo</li>
      </ListDisc>

      <TinyText>Por operación:</TinyText>
      <ListDisc>
        <li>RW (memoria de lectura/escritura)</li>
        <li>ROM/PROM/EPROM/EEPROM/FLASH</li>
      </ListDisc>

      <SubText>Métodos de acceso</SubText>
      <ListDisc>
        <li>Aleatorio (RAM)</li>
        <li>Secuencial (cintas)</li>
        <li>Directo o semisecuencial (discos)</li>
      </ListDisc>

      <SubText>Modo de direccionamiento</SubText>
      <ListDisc>
        <li>Por posición (dirección única)</li>
        <li>Por contenido (memorias asociativas)</li>
      </ListDisc>

      <SubText>Organización de Memoria Principal</SubText>
      <Parrafo>
        Los chips están formados por matrices de filas y columnas, con direccionamiento
        multiplexado para optimizar pines y capacidad.
      </Parrafo>

      <SubText>Memoria Caché</SubText>
      <Parrafo>
        La caché actúa como una memoria intermedia rápida entre CPU y memoria principal,
        aprovechando el principio de localidad espacial y temporal.
      </Parrafo>

      <SubText>Correspondencias de Caché</SubText>
      <TinyText>A) Correspondencia directa</TinyText>
      <Parrafo>
        Cada bloque de memoria principal mapea a una línea específica en caché.
      </Parrafo>

      <TinyText>B) Correspondencia asociativa</TinyText>
      <Parrafo>
        Un bloque puede ubicarse en cualquier línea de la caché.
      </Parrafo>

      <TinyText>C) Conjuntos asociativos</TinyText>
      <Parrafo>
        La caché se divide en conjuntos donde cada bloque puede ocupar cualquier línea del
        conjunto.
      </Parrafo>

      <SubText>Algoritmos de Sustitución</SubText>
      <ListDisc>
        <li>LRU</li>
        <li>FIFO</li>
        <li>LFU</li>
        <li>Aleatorio</li>
      </ListDisc>

      <SubText>Políticas de Escritura</SubText>
      <ListDisc>
        <li>
          <strong>Write Through:</strong> escritura inmediata en memoria principal y caché.
        </li>
        <li>
          <strong>Write Back:</strong> escritura diferida usando dirty bit.
        </li>
      </ListDisc>
    </Background>
  );
};

export default Unidad6;