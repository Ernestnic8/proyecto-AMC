import Background from "@components/Base/Background";

const Inicio = () => {
  return (
    <Background>
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Bienvenido a la Guía de AMC 1
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Este sitio fue creado para compartir información, apuntes y guías sobre
        los temas que hemos visto en la clase de AMC 1 de la carrera de
        Computación. Aquí encontrarás explicaciones accesibles sobre conceptos
        como formato RAW, clonación de discos, diferencias entre UEFI y Legacy,
        cómo usar el boot menu y mucho más.
      </p>
    </Background>
  );
};

export default Inicio;
