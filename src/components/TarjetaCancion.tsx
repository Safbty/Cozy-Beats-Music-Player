import { type Cancion } from '../data/canciones';

type TarjetaCancionProps = {
  cancion: Cancion;
};

const TarjetaCancion = ({ cancion }: TarjetaCancionProps) => {
  return (
    <div className="flex items-center gap-4 p-4 border border-borde-claro rounded-lg bg-white shadow-sm">
      <img
        src={cancion.imagenUrl}
        alt={`Portada de ${cancion.titulo}`}
        className="w-16 h-16 rounded-md object-cover"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-medium text-texto-oscuro">
          {cancion.titulo}
        </h3>
        <p className="text-sm text-texto-claro">Artista: {cancion.artista}</p>
        <p className="text-xs text-texto-claro">Duración: {cancion.duracion}</p>
      </div>
      <button className="ml-auto px-4 py-2 bg-pastel-rosa text-texto-oscuro rounded-full shadow-sm">
        Play
      </button>
    </div>
  );
};

export default TarjetaCancion;
