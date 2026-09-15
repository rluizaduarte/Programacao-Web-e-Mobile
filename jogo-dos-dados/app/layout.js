export const metadata = {
  title: "Jogo de Dados",
  description: "Jogo de dados - Programação Web e Mobile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}