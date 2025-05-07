import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton/FloatingWhatsAppButton";

export const metadata = {
  title: "N&H Associados",
  description: "Empresa especializada em seguros e benefícios.",
  icons: {
    icon: "https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/logo-principal//logo.jpg",
  },
};

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
          <FloatingWhatsAppButton />
        </main>

        {/* Footer compartilhado em todas as páginas */}
        <Footer />
      </body>
    </html>
  );
}