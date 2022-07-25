import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.tabela}>
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
      
      <div className={styles.formulario}>
        <div>
          <span>Nome</span>
          <input type="text" />
        </div>
        
        <div>
          <span>Idade</span>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}
