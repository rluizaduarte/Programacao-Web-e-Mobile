"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./page.module.css"; // os estilos só valem pra essa página

// CONSTANTES (valores que nunca mudam durante o jogo)

// qnts erros o jogador pode cometer até perder
const MAX_ERROS = 6;
// transforma o texto do alfabeto em uma lista de letras com split("")
// pra poder criar um botão pra cada letra usando o map
const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const PALAVRAS = [
  "INTERESTELAR",
  "HARRY POTTER",
  "BOB ESPONJA",
  "ABACAXI",
  "AUSTRALIA",
  "ASTRONAUTA",
  "DINOSSAURO",
  "STRANGER THINGS",
  "MORANGUINHO",
  "VULCAO",
  "SHREK",
  "ELEFANTE",
  "CLEOPATRA",
  "GUITARRA",
  "LABIRINTO",
  "POKEMON",
  "CHOCOLATE",
  "PIRAMIDE",
  "MERGULHADOR",
  "CINDERELA",
  "CROCODILO",
  "ATLANTIDA",
  "DETECTIVE",
  "CORINGA",
  "BORBOLETA",
  "ESMERALDA",
  "FOTOGRAFIA",
  "MINECRAFT",
  "PARALELEPIPEDO",
  "RELAMPAGO",
];
// partes do boneco na ordem
// nomes iguais aos das classesno page.module.css
const PARTES = [
  "cabeca",
  "tronco",
  "bracoEsq",
  "bracoDir",
  "pernaEsq",
  "pernaDir",
];

// FUNÇÕES AUXILIARES

// sorteia uma palavra da lista
function sortearPalavra() {
  return PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
}
// decide qual foto mostrar de acordo com a situação do jogo
function imagemDeReacao(erros, ganhou, perdeu) {
  if (ganhou) return "ganhou";
  if (perdeu) return "perdeu";
  if (erros === 0) return "comeco"; // ainda não errou nada
  if (erros === 1) return "primeira-resposta-errada"; // primeiro erro
  if (erros === MAX_ERROS - 1) return "ultima-chance"; // falta só 1 erro pra perder
  return "resposta-errada"; // erros do meio
}

// COMPONENTE DA FORCA (o desenho em CSS)

// recebe a qtd de erros pelas props e desenha a forca
function Forca({ erros }) {
  return (
    // aria-hidden esconde o desenho dos leitores de tela, já que é só visual
    <div className={styles.forca} aria-hidden="true">
      <div className={styles.base} />
      <div className={styles.poste} />
      <div className={styles.viga} />
      <div className={styles.corda} />

      {/* slice(0, erros) pega só as primeiras partes da lista
          c 2 erros, por exemplo, desenha só a cabeça e o tronco */}
      {PARTES.slice(0, erros).map((parte) => (
        <div key={parte} className={`${styles.parte} ${styles[parte]}`} />
      ))}
    </div>
  );
}

export default function Home() {
  // ESTADOS (valores q qnd mudam fazem a tela atualizar)

  const [palavra, setPalavra] = useState("");
  // lista com tds as letras que o jogador já chutou (certas e erradas)
  const [chutadas, setChutadas] = useState([]);
  // esse useEffect com [] roda so uma vez q é qnd a página abre no navegador
  // primeira palavra sorteada
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPalavra(sortearPalavra());
  }, []);

  // VALORES CALCULADOS (n precisam de useState)

  // filter mantém só as letras que atendem à condição.
  // errada = a palavra nao inclui a letra e certa = a palavra inclui a letra
  const erradas = chutadas.filter((letra) => !palavra.includes(letra));
  const certas = chutadas.filter((letra) => palavra.includes(letra));
  // qtd de erros = tamanho da lista de letras erradas
  const erros = erradas.length;
  // possibilidades do jogo
  const ganhou = palavra;
  palavra !== "" &&
    palavra
      .split("")
      .every((letra) => letra === " " || chutadas.includes(letra));
  const perdeu = erros >= MAX_ERROS;
  const fimDeJogo = ganhou || perdeu;

  // FUNÇÕES DO JOGO

  // registra um chute
  const chutar = useCallback(
    (letra) => {
      // n faz nada se:
      // a palavra ainda não foi sorteada
      // o jogo acabou
      // ou a letra já foi chutada antes
      if (!palavra || fimDeJogo || chutadas.includes(letra)) return;

      setChutadas((g) => [...g, letra]);
    },
    [palavra, fimDeJogo, chutadas],
  );
  const reiniciar = () => {
    setPalavra(sortearPalavra());
    setChutadas([]);
  };

  // TECLADO FÍSICO - CLAUDE CODE
  useEffect(() => {
    const aoTeclar = (e) => {
      // ignorar atalhos como Ctrl+R pra não atrapalhar o navegador
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      // transformar em maiúscula pra bater com a palavra
      const tecla = e.key.toUpperCase();

      // a expressão regular /^[A-Z]$/ confere se é uma letra de A a Z
      // (assim Enter, Shift, números etc. são ignorados)
      if (/^[A-Z]$/.test(tecla)) chutar(tecla);
    };

    // começa a "escutar" o teclado
    window.addEventListener("keydown", aoTeclar);

    // essa função de retorno é a limpeza: remove o ouvinte quando o componente sai da tela ou a função chutar muda. sem isso ia acumulando vários ouvintes e cada tecla chutava várias vezes
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [chutar]);

  // descobre qual foto mostrar agora
  const imagem = imagemDeReacao(erros, ganhou, perdeu);

  return (
    <main className={styles.pagina}>
      <h1 className={styles.titulo}>FORCA</h1>
      <p className={styles.subtitulo}>
        Descubra a palavra e salve o Sr. Boneco Palito da Silva.
      </p>

      <section className={styles.palco}>
        <Forca erros={erros} />

        <div className={styles.reacao}>
          {/* CLAUDE CODE: desligar aviso da ESLint sobre uso da img*/}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={imagem}
            src={`/hangman-reacoes/${imagem}.png`}
            alt={`${MAX_ERROS - erros} de ${MAX_ERROS}`}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </section>

      <div className={styles.palavra} aria-label="Palavra secreta">
        {palavra.split("").map((letra, i) => {
          if (letra === " ") {
            return <span className={styles.separador} key={i} />;
          }

          return (
            <span className={styles.espaco} key={i}>
              {chutadas.includes(letra) || perdeu ? letra : ""}
            </span>
          );
        })}
      </div>

      {/* duas listas: letras certas e letras erradas */}
      <section className={styles.tentadas}>
        <div>
          <div className={styles.fichas}>
            {certas.map((letra) => (
              <span
                key={letra}
                className={`${styles.ficha} ${styles.fichaCerta}`}
              >
                {letra}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.fichas}>
            {erradas.map((letra) => (
              <span
                key={letra}
                className={`${styles.ficha} ${styles.fichaErrada}`}
              >
                {letra}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* teclado virtual: um botão pra cada letra do alfabeto */}
      <div className={styles.teclas}>
        {ALFABETO.map((letra) => {
          // confere se essa letra já foi usada
          const usada = chutadas.includes(letra);

          // se foi usada, escolhe o estilo de acerto ou de erro
          // se não foi, fica sem estilo extra ("")
          const estado = usada
            ? palavra.includes(letra)
              ? styles.teclaCerta
              : styles.teclaErrada
            : "";

          return (
            <button
              key={letra}
              className={`${styles.tecla} ${estado}`}
              // desabilita o botão se a letra já foi usada ou o jogo acabou
              disabled={usada || fimDeJogo}
              onClick={() => chutar(letra)}
            >
              {letra}
            </button>
          );
        })}
      </div>

      {fimDeJogo ? (
        <section className={styles.resultado} role="status">
          <p>
            {ganhou ? (
              <>
                O Sr. Palito agradece! Você o salvou!
                <br></br>A palavra era <strong>{palavra}</strong>.
              </>
            ) : (
              <>
                O Sr. Palito era um bom boneco. Você o deixou pra trás.{" "}
                <br></br>A palavra era <strong>{palavra}</strong>.
              </>
            )}
          </p>
          <button className={styles.botaoReiniciar} onClick={reiniciar}>
            Jogar novamente
          </button>
        </section>
      ) : (
        <div className={styles.rodape}>
          <button className={styles.botaoReiniciar} onClick={reiniciar}>
            Reiniciar
          </button>
        </div>
      )}
    </main>
  );
}
