import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Bloco das rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./routes/Home.jsx";
import Produtos from "./routes/Produtos.jsx";
import EditarProdutos from "./routes/EditarProdutos.jsx";
import Erro404 from "./routes/Erro404.jsx";
//Blocos das rotas

const router = createBrowserRouter([
  {path:"/",element: <App/>, errorElement:<Erro404/>,
  children:[
    { path:'/', element:<Home /> },
    { path:'/produtos', element:<Produtos />},
    { path:'/edit/produtos/:id', element:<EditarProdutos />} ,
  ]
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

//Algo de errado, pegar o código do professor