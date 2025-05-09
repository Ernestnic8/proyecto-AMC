

const RawVenDes = () => {
    return (
        <div className="min-h-screen bg-white/60 flex items-center justify-center p-6">
          <div className="max-w-4xl p-8 rounded-2xl shadow-xl backdrop-blur-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              Ventajas y Desventajas del Formato RAW
            </h1>
    
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-3">✅ Ventajas</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Máxima calidad de imagen:</strong> Conserva todos los datos originales del sensor.</li>
                <li><strong>Gran flexibilidad en la postproducción:</strong> Ideal para ajustes avanzados y edición profesional.</li>
                <li><strong>Posibilidad de corregir errores:</strong> Se pueden recuperar zonas sobre o subexpuestas y corregir colores.</li>
              </ul>
            </div>
    
            <div>
              <h2 className="text-2xl font-semibold text-red-700 mb-3">❌ Desventajas</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Tamaños de archivo grandes:</strong> Ocupan más espacio en disco y requieren más almacenamiento.</li>
                <li><strong>Requiere software específico:</strong> No se puede abrir o editar con visores comunes.</li>
                <li><strong>No es ideal para compartir directamente:</strong> Necesita ser procesado antes de usar en redes o web.</li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default RawVenDes
