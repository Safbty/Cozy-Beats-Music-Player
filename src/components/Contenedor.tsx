import React from 'react';

type ContenedorProps = {
  children: React.ReactNode;
};

const Contenedor = ({ children }: ContenedorProps) => {
  return <div className="p-4">{children}</div>;
};

export default Contenedor;
