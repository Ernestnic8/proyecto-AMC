
const RawInicio = () => {
  return (
    <div className="min-h-screen bg-white/60 flex items-center justify-center p-6">
      <div className="max-w-4xl p-8 rounded-2xl shadow-xl backdrop-blur-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          ¿Qué es el Formato RAW?
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          El formato RAW es un tipo de archivo de imagen que contiene todos los datos capturados por el sensor de una cámara digital
          sin ningún tipo de compresión o procesamiento. A diferencia de los formatos JPEG o PNG, que comprimen la imagen y ajustan
          automáticamente parámetros como el contraste, la nitidez o la saturación, el formato RAW conserva la información original
          tal como fue registrada, permitiendo una edición mucho más precisa y profesional.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Características Principales del Formato RAW</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Alta calidad de imagen:</strong> Al no haber compresión, no se pierde información visual, lo que resulta
            en una mayor fidelidad en los detalles.
          </li>
          <li>
            <strong>Amplio rango dinámico:</strong> Permite recuperar zonas sobreexpuestas o subexpuestas durante el revelado digital.
          </li>
          <li>
            <strong>Mayor control en la edición:</strong> Facilita ajustes avanzados de balance de blancos, exposición,
            temperatura de color, y más sin deteriorar la calidad.
          </li>
          <li>
            <strong>Tamaño de archivo grande:</strong> Al no comprimirse, los archivos RAW suelen ser mucho más pesados que los JPEG.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RawInicio;
