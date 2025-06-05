import TarjetaCancion from './TarjetaCancion';
import { mockCancionesPopulares, type Cancion } from '../data/canciones';
import Contenedor from './Contenedor';

const ListaCancionesPopulares = () => {
  return (
    <Contenedor>
      <h2 className="text-xl font-semibold text-texto-oscuro mb-4">
        Canciones Populares
      </h2>
      <div className="flex flex-col gap-3">
        {mockCancionesPopulares.map((cancion: Cancion) => (
          <TarjetaCancion key={cancion.id} cancion={cancion} />
        ))}
      </div>
    </Contenedor>
  );
};

export default ListaCancionesPopulares;
