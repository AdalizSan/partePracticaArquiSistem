import React from 'react';

function App() {
  const alumnos = [
    { id: 1, nombre: 'Ana Gómez', edad: 20 },
    { id: 2, nombre: 'Carlos López', edad: 22 },
    { id: 3, nombre: 'María Rodríguez', edad: 21 },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de Alumnos</h1>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.id}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.edad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;