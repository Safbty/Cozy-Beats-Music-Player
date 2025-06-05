import TarjetaCancion from './TarjetaCancion';
import { mockCancionesFavoritas, type Cancion } from '../data/canciones';
import Contenedor from './Contenedor';

const ListaCancionesFavoritas = () => {
  return (
    <Contenedor>
      <h2 className="text-xl font-semibold text-texto-oscuro mb-4">
        Canciones Favoritas
      </h2>
      <div className="flex flex-col gap-3">
        {mockCancionesFavoritas.map((cancion: Cancion) => (
          <TarjetaCancion key={cancion.id} cancion={cancion} />
        ))}
      </div>
    </Contenedor>
  );
};

export default ListaCancionesFavoritas;
