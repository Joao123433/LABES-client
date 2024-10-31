import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Clientes } from './clientes/Clientes';
import { NewCliente } from './clientes/NewCliente';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/clientes',
    element: <Clientes />,
    children: [
      {
        path: 'new',
        element: <NewCliente />
      },
      // Adicione outras rotas filhas se necessário
    ],
  },
]);