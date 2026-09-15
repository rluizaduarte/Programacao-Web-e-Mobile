import Image from "next/image";

export default function Dado({ valor }) {
  return (
    <Image
      src={`/faces/face${valor}.png`}
      alt={`Dado com valor ${valor}`}
      width={80}
      height={80}
    />
  );
}