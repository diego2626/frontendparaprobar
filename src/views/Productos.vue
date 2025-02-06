<template>
    <div>
      <h1>Productos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Peso (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in productos" :key="producto.nombre">
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.peso }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productos: [
          { nombre: 'Manzana', peso: 1.2 },
          { nombre: 'Banana', peso: 1.1 },
          { nombre: 'Naranja', peso: 1.3 },
          { nombre: 'Pera', peso: 1.0 },
          { nombre: 'Uvas', peso: 0.8 }
        ]
      };
    }
  };
  </script>
  
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f4f4f4;
  }
  </style>
  