import { ListaProduto } from "../components/ListaProdutos";
import style from "./Produtos.module.css";

export default function Produtos() {
  document.title = "Lista de Produtos";

  return (
    <div>
      <h1>Produtos</h1>

      <table className={style.tblEstilo}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
          </tr>
        </thead>

        <tbody>
          {ListaProduto.map((item, indice) => (
            <tr key={indice} className={style.lineTbl}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.desc}</td>
              <td>{item.preco}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              PRODUTOS INFORMÁTICOS - QTD = {ListaProduto.length}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
