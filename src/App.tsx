import Navbar from './components/Navbar';
import ListaCancionesEscuchadas from './components/ListaCancionesEscuchadas';
import ListaCancionesPopulares from './components/ListaCancionesPopulares';
import ListaNuevosLanzamientos from './components/ListaNuevosLanzamientos';
import ListaCancionesFavoritas from './components/ListaCancionesFavoritas';

const App = () => {
  return (
    <div className="min-h-screen bg-fondo-suave text-texto-oscuro">
      <Navbar />
      <main className="container mx-auto p-4">
        <ListaCancionesEscuchadas />
        <ListaCancionesPopulares />
        <ListaNuevosLanzamientos />
        <ListaCancionesFavoritas />
      </main>
    </div>
  );
};

export default App;
