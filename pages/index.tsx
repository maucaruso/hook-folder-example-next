import useTabelaOuForm from "../hook/useTabelaOuForm";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { tabelaVisivel, exibirForm, exibirTabela } = useTabelaOuForm()

  return (
    <div className={styles.container}>
      {tabelaVisivel ? (
        <div className={styles.tabela}>
          <button className={styles.btn} onClick={exibirForm}>
            Criar
          </button>

          <table>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Idade</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Ana</td>
              <td>13</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Gustavo</td>
              <td>27</td>
            </tr>
          </table>
        </div>
      ) : (
        <div className={styles.formulario}>
          <div className={styles.entrada}>
            <span>Id</span>
            <input type="text" />
          </div>

          <div className={styles.entrada}>
            <span>Nome</span>
            <input type="text" />
          </div>

          <div className={styles.entrada}>
            <span>Idade</span>
            <input type="text" />
          </div>

          <div>
            <button className={styles.btn}>Salvar</button>
            <button className={styles.btn} onClick={exibirTabela}>
              Voltar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
