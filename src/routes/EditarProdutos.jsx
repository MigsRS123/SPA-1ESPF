import React from 'react'
import { useParams } from 'react-router-dom'
import { ListaProduto } from '../components/ListaProdutos';

export default function EditarProdutos() {

    const {id} = useParams();

    document.title = "Editar Produtos " + id;

    //Criar uma estratégia para recuperar o produto na lista
    // Utilizando o id
    const produtoRecuperadoPorId = ListaProduto.filter(item => item.id == parseInt(id));

  return (
    <div>
        <h1>Editar Produtos</h1>
        <h2>Produto selecionado : {id}</h2>
        
    </div>
  )
}
