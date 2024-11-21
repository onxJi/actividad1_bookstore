
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./pages/Layout/Layout.jsx";
import { Home } from './pages/home/Home.jsx';
import { Login } from './pages/auth/Login.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />

            }
        ]
    }
])


function App() {
  return <RouterProvider router={router} />
}

export default App
