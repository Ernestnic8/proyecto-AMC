const RawUsoYEditar = () => {
  return (
    <div className="min-h-screen bg-white/60 flex items-center justify-center p-6">
      <div className="max-w-4xl p-8 rounded-2xl shadow-xl backdrop-blur-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          ¿Para Qué Sirve el Formato RAW?
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          El formato RAW es ampliamente utilizado en fotografía profesional y
          por aficionados avanzados que desean tener control total sobre el
          aspecto final de sus imágenes. Es el formato preferido en trabajos de
          alta calidad, como retratos, paisajes, fotografía de producto y
          fotografía artística.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          ¿Cómo se Edita un Archivo RAW?
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Los archivos RAW no pueden visualizarse ni editarse directamente como
          un JPEG. Se necesita un software de revelado digital, como los
          siguientes:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Adobe Lightroom</strong>
          </li>
          <li>
            <strong>Capture One</strong>
          </li>
          <li>
            <strong>Darktable</strong> (software libre)
          </li>
          <li>
            <strong>RawTherapee</strong>
          </li>
          <li>
            <strong>Adobe Camera Raw</strong>
          </li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          Con estos programas, el usuario puede ajustar múltiples parámetros sin
          pérdida de calidad antes de exportar la imagen final en formatos como
          JPEG o TIFF.
        </p>
      </div>
    </div>
  );
};

export default RawUsoYEditar;
