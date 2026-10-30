import { Image } from "react-native";

const faces = {
  1: require("../../assets/face1.png"),
  2: require("../../assets/face2.png"),
  3: require("../../assets/face3.png"),
  4: require("../../assets/face4.png"),
  5: require("../../assets/face5.png"),
  6: require("../../assets/face6.png"),
};

export default function Dado({ valor }) {
  return <Image source={faces[valor]} style={{ width: 80, height: 80 }} />;
}
