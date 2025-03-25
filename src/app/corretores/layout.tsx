'use client';

export default function CorretorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      
        <html lang="pt-BR"> 
    
          <body className="bg-gray-100 font-sans antialiased">

            {/* Conteúdo da página */}
            <main className="flex-1">
              {children}
            </main>
    

          </body>
        </html>
  );
}