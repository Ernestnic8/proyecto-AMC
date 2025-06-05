import Background from "@components/Base/Background";

const Assambler = () => {
  return (
    <Background text={"Introducción al Lenguaje Ensamblador"}>
      <a
        href="/Ejemplos_ASM_10_Emu8086.pdf"
        download
        className="inline-block mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Descargar PDF
      </a>
    </Background>
  );
};

export default Assambler;
