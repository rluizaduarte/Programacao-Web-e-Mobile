import { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import Dado from "./Dado";

function rolarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);
  const [pontosJogador1, setPontosJogador1] = useState(0);
  const [pontosJogador2, setPontosJogador2] = useState(0);

  const [j1dado1, setJ1dado1] = useState(1);
  const [j1dado2, setJ1dado2] = useState(1);
  const [j2dado1, setJ2dado1] = useState(1);
  const [j2dado2, setJ2dado2] = useState(1);

  const [turno, setTurno] = useState("jogador1");

  function jogarNovamente() {
    setRodada(1);
    setPontosJogador1(0);
    setPontosJogador2(0);
    setJ1dado1(1);
    setJ1dado2(1);
    setJ2dado1(1);
    setJ2dado2(1);
    setTurno("jogador1");
  }

  function jogar1() {
    setJ1dado1(rolarDado());
    setJ1dado2(rolarDado());
    setTurno("jogador2");
  }

  function jogar2() {
    setJ2dado1(rolarDado());
    setJ2dado2(rolarDado());
    setTurno("fim");
  }

  function mensagemRodada() {
    if (rodada === 5 && turno === "fim") {
      if (pontosJogador1 > pontosJogador2) return "Jogador 1 venceu o jogo!";
      if (pontosJogador2 > pontosJogador1) return "Jogador 2 venceu o jogo!";
      return "Empate geral!";
    }
    return `Rodada ${rodada}/5`;
  }

  function mensagemResultado() {
    if (turno !== "fim") return "";
    const somaJ1 = j1dado1 + j1dado2;
    const somaJ2 = j2dado1 + j2dado2;
    if (somaJ1 > somaJ2) return "Jogador 1 venceu";
    if (somaJ2 > somaJ1) return "Jogador 2 venceu";
    return "Empate";
  }

  useEffect(() => {
    if (turno === "fim") {
      const somaJ1 = j1dado1 + j1dado2;
      const somaJ2 = j2dado1 + j2dado2;

      if (somaJ1 > somaJ2) {
        setPontosJogador1(pontosJogador1 + 1);
      } else if (somaJ2 > somaJ1) {
        setPontosJogador2(pontosJogador2 + 1);
      }

      if (rodada < 5) {
        setTimeout(() => {
          setRodada((r) => r + 1);
          setTurno("jogador1");
        }, 3000);
      }
    }
  }, [turno]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo de Dados</Text>
      <Text style={styles.subtitulo}>{mensagemRodada()}</Text>

      <View style={styles.jogador}>
        <Text style={styles.nome}>Jogador 1</Text>
        <View style={styles.dados}>
          <Dado valor={j1dado1} />
          <Dado valor={j1dado2} />
        </View>
        <Button
          title="Jogar"
          onPress={jogar1}
          disabled={turno !== "jogador1"}
        />
      </View>

      <View style={styles.jogador}>
        <Text style={styles.nome}>Jogador 2</Text>
        <View style={styles.dados}>
          <Dado valor={j2dado1} />
          <Dado valor={j2dado2} />
        </View>
        <Button
          title="Jogar"
          onPress={jogar2}
          disabled={turno !== "jogador2"}
        />
      </View>

      <Text style={styles.resultado}>{mensagemResultado()}</Text>

      {rodada === 5 && turno === "fim" && (
        <Button title="Jogar Novamente" onPress={jogarNovamente} />
      )}
    </View>
  );
}
