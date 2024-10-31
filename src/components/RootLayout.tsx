export function RootLayout({ children }: {children: React.ReactNode }) {
  return (
    <div className="px-6 pt-3 h-screen w-screen">
       <header className="flex flex-row justify-between">
        <h1 className="text-3xl font-medium"><a href="/">REACT + TOTVS</a></h1>
        <div className="flex gap-4">
          <a href="/">Home</a>
          <a href="/clientes">Clientes</a>
        </div>
      </header>
      <main className="h-5/6 flex flex-col gap-7 mt-2">{children}</main>
      <footer className="absolute bottom-4 text-center"><p className="text-lg">By Fatec Itapetininga</p></footer>
    </div>
  )
}