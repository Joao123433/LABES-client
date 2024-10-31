import { Link, Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="px-6 pt-3 h-screen w-screen">
       <header className="flex flex-row justify-between mb-4">
        <h1 className="text-4xl font-medium"><Link to="/">REACT + TOTVS</Link></h1>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/clientes">Clientes</Link>
        </div>
      </header>
      <main className="h-5/6 flex flex-col gap-7 mt-2">
        <Outlet />
      </main>
      <footer className="absolute bottom-4 text-center"><p className="text-lg">By Fatec Itapetininga</p></footer>
    </div>
  )
}