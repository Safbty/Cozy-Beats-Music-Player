import TarjetaCancion from './TarjetaCancion'; 
import { mockCancionesRecientes, type Cancion } from '../data/canciones'; 
import Contenedor from './Contenedor'; 



const ListaCancionesEscuchadas = () => {
  return (
    <Contenedor>
      <h2 className="text-xl font-semibold text-texto-oscuro mb-4">
        Escuchadas Recientemente
      </h2>
      <div className="flex flex-col gap-3">
        {mockCancionesRecientes.map((cancion: Cancion) => (
          <TarjetaCancion key={cancion.id} cancion={cancion} />
        ))}
      </div>
    </Contenedor>
  );
};

export default ListaCancionesEscuchadas;
