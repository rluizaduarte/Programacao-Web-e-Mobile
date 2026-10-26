import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Rielly Duarte</Text>
      <Text style={styles.bio}>
        Oi. Sou estudante de Ciência da Computação, gosto de criar aplicativos e
        estou aprendendo React Native. Nas horas livres, gosto de música e
        jogos, e tô sempre buscando aprender algo novo.
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  nome: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#6C3CE9",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    lineHeight: 24,
  },
});
