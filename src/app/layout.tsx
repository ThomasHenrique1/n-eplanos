import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR"> 
      <body className="bg-gray-100 font-sans antialiased">
        {/* Header compartilhado em todas as páginas */}
        <Header />

        {/* Conteúdo da página */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer compartilhado em todas as páginas */}
        <Footer />
      </body>
    </html>
  );
}