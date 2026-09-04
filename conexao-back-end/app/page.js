//qnd usa o useState é obrigatório usar essa linha
"use client"

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  //criando um state pra guardar a resposta
  const [tarefas, setTarefas] = useState 
  //criando uma funcao p clicar e é assíncrona (faço a chamada e qnd tiver resposta sou avisado)
  async function handleClick() {
    // uma vez q cria o back no back4app. utilizar conversor curl pra js e importar aqui
    const response = await fetch('https://parseapi.back4app.com/classes/Tarefa?where=%7B+%22descricao%22%3A%22A+string%22%2C%22concluida%22%3Atrue+%7D', {
      headers: {
        'X-Parse-Application-Id': 'hDwYDR7d2UdS0iwiY0ZJWT4TPYQ1yACk9qoFXlBG',
        'X-Parse-REST-API-Key': '9w0UtAzIXhKuKkFTrW4oleCBf1FCJSHZoKZ1Ue2D'
      }
    });
    const data = await response.json();
    setTarefas(data.results);
  }
  

  return (
    <div className={styles.page}>
      
    </div>
  );
}
