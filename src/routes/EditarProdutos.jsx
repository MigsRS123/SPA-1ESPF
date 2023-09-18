import React from 'react'
import { useParams } from 'react-router-dom'

export default function EditarProdutos() {

    document.title = "Editar Produtos";

    const {id} = useParams();

  return (
    <div>
        <h1>Editar Produtos</h1>
        <h2>Produto selecinado : {id}</h2>
        
    </div>
  )
}
