import "./globals.css";

export const metadata = {
  title: "Jogo da Forca",
  description: "Jogo da forca em React com boneco de palito.",
};

export default function LayoutRaiz({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
