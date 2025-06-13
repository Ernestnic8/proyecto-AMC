import Background from "@components/Base/Background";
import SubText from "@components/Base/SubText";
import Parrafo from "@components/Base/Parrafo";
import TinyText from "@components/Base/TinyText";

import {
    Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from "@mui/material";

function createRow(modelo: string, precio: string, caracteristicas: string) {
return { modelo, precio, caracteristicas };
}

const RecomendacionesLaptops = () => {
return (
<Background text="Guía de Recomendaciones de Laptops por Uso">

    <SubText>🎮 1. Para Gaming</SubText>
    <Parrafo>
    Requiere alto rendimiento gráfico, buena refrigeración y pantalla fluida.
    </Parrafo>
    <TableContainer component={Paper} sx={{ my: 2 }}>
    <MuiTable>
        <TableHead>
        <TableRow>
            <TableCell><TinyText>Modelo</TinyText></TableCell>
            <TableCell><TinyText>Precio aprox.</TinyText></TableCell>
            <TableCell><TinyText>Características</TinyText></TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {[ 
            createRow("ASUS ROG Strix G16", "$1,400", "i7-13650HX, RTX 4060, 16GB RAM, 1TB SSD, 165Hz"),
            createRow("Lenovo Legion 5 Pro", "$1,500", "Ryzen 7 7745HX, RTX 4070, 32GB RAM, 1TB SSD"),
            createRow("Acer Predator Helios Neo 16", "$1,300", "i7-13700HX, RTX 4060, 16GB RAM")
        ].map((row, i) => (
            <TableRow key={i}>
            <TableCell>{row.modelo}</TableCell>
            <TableCell>{row.precio}</TableCell>
            <TableCell>{row.caracteristicas}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </MuiTable>
    </TableContainer>

    <SubText>🛠️ 2. Para Ingeniería (CAD, simulación, programación técnica)</SubText>
    <Parrafo>
    Necesita potencia de procesamiento, buena GPU y RAM para tareas pesadas.
    </Parrafo>
    <TableContainer component={Paper} sx={{ my: 2 }}>
    <MuiTable>
        <TableHead>
        <TableRow>
            <TableCell><TinyText>Modelo</TinyText></TableCell>
            <TableCell><TinyText>Precio aprox.</TinyText></TableCell>
            <TableCell><TinyText>Características</TinyText></TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {[ 
            createRow("Dell XPS 15", "$1,700", "i7-13700H, RTX 4060, 32GB RAM, 1TB SSD"),
            createRow("Lenovo ThinkPad P1 Gen 6", "$2,100", "i7-13800H, RTX A1000, 32GB RAM, 1TB SSD"),
            createRow("HP ZBook Firefly 16 G10", "$1,800", "i7, NVIDIA RTX A500, 32GB RAM")
        ].map((row, i) => (
            <TableRow key={i}>
            <TableCell>{row.modelo}</TableCell>
            <TableCell>{row.precio}</TableCell>
            <TableCell>{row.caracteristicas}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </MuiTable>
    </TableContainer>

    <SubText>🎨 3. Para Diseño Gráfico / Edición de video</SubText>
    <Parrafo>
    Alta fidelidad de color, buena GPU, pantalla de alta resolución.
    </Parrafo>
    <TableContainer component={Paper} sx={{ my: 2 }}>
    <MuiTable>
        <TableHead>
        <TableRow>
            <TableCell><TinyText>Modelo</TinyText></TableCell>
            <TableCell><TinyText>Precio aprox.</TinyText></TableCell>
            <TableCell><TinyText>Características</TinyText></TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {[ 
            createRow("MacBook Pro 14\" M3", "$1,900", "M3 chip, 16GB RAM, 512GB SSD, Liquid Retina XDR"),
            createRow("ASUS ZenBook Pro 14 OLED", "$1,600", "i7, RTX 4050, 32GB RAM, OLED 2.8K"),
            createRow("MSI Creator Z16", "$1,800", "i7-12700H, RTX 3060, 32GB RAM, QHD+")
        ].map((row, i) => (
            <TableRow key={i}>
            <TableCell>{row.modelo}</TableCell>
            <TableCell>{row.precio}</TableCell>
            <TableCell>{row.caracteristicas}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </MuiTable>
    </TableContainer>

    <SubText>📊 4. Para Contabilidad / Oficina / Negocios</SubText>
    <Parrafo>
    No necesita mucha potencia, pero sí fiabilidad, buena batería y teclado cómodo.
    </Parrafo>
    <TableContainer component={Paper} sx={{ my: 2 }}>
    <MuiTable>
        <TableHead>
        <TableRow>
            <TableCell><TinyText>Modelo</TinyText></TableCell>
            <TableCell><TinyText>Precio aprox.</TinyText></TableCell>
            <TableCell><TinyText>Características</TinyText></TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {[ 
            createRow("Dell Inspiron 15 5000", "$600", "i5, 16GB RAM, 512GB SSD"),
            createRow("Lenovo IdeaPad 5", "$550", "Ryzen 5, 16GB RAM, 512GB SSD"),
            createRow("HP Pavilion 15", "$630", "i5-1335U, 16GB RAM, 512GB SSD")
        ].map((row, i) => (
            <TableRow key={i}>
            <TableCell>{row.modelo}</TableCell>
            <TableCell>{row.precio}</TableCell>
            <TableCell>{row.caracteristicas}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </MuiTable>
    </TableContainer>

    <SubText>📚 5. Para Estudio / Uso General</SubText>
    <Parrafo>
    Buena relación calidad-precio, peso ligero, duración de batería.
    </Parrafo>
    <TableContainer component={Paper} sx={{ my: 2 }}>
    <MuiTable>
        <TableHead>
        <TableRow>
            <TableCell><TinyText>Modelo</TinyText></TableCell>
            <TableCell><TinyText>Precio aprox.</TinyText></TableCell>
            <TableCell><TinyText>Características</TinyText></TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {[ 
            createRow("MacBook Air M1", "$850", "M1, 8GB RAM, 256GB SSD, excelente batería"),
            createRow("ASUS VivoBook 14", "$500", "Ryzen 5, 8GB RAM, 512GB SSD"),
            createRow("Acer Aspire 5", "$470", "i5, 8GB RAM, 512GB SSD")
        ].map((row, i) => (
            <TableRow key={i}>
            <TableCell>{row.modelo}</TableCell>
            <TableCell>{row.precio}</TableCell>
            <TableCell>{row.caracteristicas}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </MuiTable>
    </TableContainer>

</Background>
);
};

export default RecomendacionesLaptops;