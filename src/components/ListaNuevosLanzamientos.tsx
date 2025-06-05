import TarjetaCancion from './TarjetaCancion';
import { mockCancionesNuevas, type Cancion } from '../data/canciones';
import Contenedor from './Contenedor';

const ListaNuevosLanzamientos = () => {
  return (
    <Contenedor>
      <h2 className="text-xl font-semibold text-texto-oscuro mb-4">
        Canciones Nuevas
      </h2>
      <div className="flex flex-col gap-3">
        {mockCancionesNuevas.map((cancion: Cancion) => (
          <TarjetaCancion key={cancion.id} cancion={cancion} />
        ))}
      </div>
    </Contenedor>
  );
};

export default ListaNuevosLanzamientos;
