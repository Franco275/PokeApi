import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from './error-page.jsx';
import Pokemon from './components/Pokemon.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'pokemonFavorito',
        element: <Pokemon name="rattata" />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
) 