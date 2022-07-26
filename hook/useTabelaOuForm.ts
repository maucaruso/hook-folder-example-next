import { useState } from "react";

export default function useTabelaOuForm() {
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
  
  return {
    tabelaVisivel: visivel === 'tabela',
    formVisivel: visivel === 'form',
    exibirTabela: () => setVisivel('tabela'),
    exibirForm: () => setVisivel('form')
  }
}