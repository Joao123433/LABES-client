import { Link, useParams } from "react-router-dom"
import { UseCliente } from "../../../hooks/UseCliente"
import type { ClientesFetch } from "../../../Interfaces/ClientesFetch"

export default function ShowItem() {
  const clientContext = UseCliente()
  const { codigo } = useParams()
  const clientFind = clientContext.clientes.find(client => client.codigo === codigo) as ClientesFetch

  return (
    <section className="flex justify-start">
      <div className="w-3/5 flex flex-col gap-5">
        <div className="flex gap-8">
          <h2 className="text-3xl">{clientFind.nome}</h2>
          <div className="flex gap-4">
            <Link to="update" className="text-black">
              <button type="button" className="bg-white px-3 py-1 border-0 hover:scale-105 h-full">Atualizar</button>
            </Link>
            <button type="button" className="bg-red-500 text-black border-0 hover:scale-105" onClick={() => {clientContext.deleteCliente(codigo as string)}}>
              <Link to="/clientes" className="text-black px-3 py-1">Excluir</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="py-4 px-7 bg-zinc-900 rounded-lg">
            <p>CPF/CNPJ: {clientFind.cnpjCpf}</p>
          </div>
          <Link className="py-4 px-7 bg-zinc-900 rounded-lg" to={clientFind.homePage} target="_blank" >Link para a Homepage</Link>
          <div className="py-4 px-7 bg-zinc-900 rounded-lg">
            <p>Cidade: {clientFind.cidade}</p>
          </div>
        </div>
      </div>
    </section>
  )
}