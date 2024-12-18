import { createContext, useState, useEffect } from "react"
import { api } from "../services/api"
import type { ClientesInterface } from "../Interfaces/ClientesInterface"
import type { ClientesInput } from "../Interfaces/ClientesOmit"
import type { ClintesDataContext } from "../Interfaces/ClientesDataContext"
import type { ClientesFetch } from "../Interfaces/ClientesFetch"

export const ClientesContext = createContext<ClintesDataContext>({} as ClintesDataContext)

export function ItemProvider({ children }: ClientesInterface) {
  const [clientes, setClientes] = useState<ClientesFetch[]>([])

  useEffect(() => {
    api.get("listar").then((res) => setClientes(res.data))
  }, [])

  async function createCliente(ClientesData: ClientesInput) {
    console.log(ClientesData)

    const response = await api.post("incluir", {...ClientesData})

    const cliente = response.data

    setClientes((prevState) => [cliente, ...prevState])
  }

  async function updateCliente(ClientesData: ClientesFetch) {
    const response = await api.put('atualizar', {...ClientesData})

    const ClientesFilter = clientes.filter(clientes => clientes.codigo !== response.data[0].codigo)

    setClientes([response.data[0], ...ClientesFilter])
  }

  async function deleteCliente(codigo: string) {
    const response = await api.delete('deletar', { headers: { codigo } })

    const ClientesFilter = clientes.filter((client) => client.codigo !== response.data[0].codigo)
    
    setClientes([...ClientesFilter])
  }

  return (
    <ClientesContext.Provider value={{ clientes, createCliente, updateCliente, deleteCliente } }>
      {children}
    </ClientesContext.Provider>
  )
}