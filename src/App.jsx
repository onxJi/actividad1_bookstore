
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./pages/Layout/Layout.jsx";
import { Home } from './pages/home/Home.jsx';

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
                element: <h1>Login</h1>

            }
        ]
    }
])


function App() {
  return <RouterProvider router={router} />
}

export default App
