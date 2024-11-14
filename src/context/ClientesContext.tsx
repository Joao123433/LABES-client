import { createContext, useState, useEffect } from "react"
import { api } from "../services/api"
import type { ClientesInterface } from "../Interfaces | types/ClientesInterface"
import type { ClientesInput } from "../Interfaces | types/ClientesOmit"
import type { ClintesDataContext } from "../Interfaces | types/ClientesDataContext"
import type { ClientesFetch } from "../Interfaces | types/ClientesFetch"

export const ClientesContext = createContext<ClintesDataContext>({} as ClintesDataContext)

export function ItemProvider({ children }: ClientesInterface) {
  const [clientes, setClientes] = useState<ClientesFetch[]>([])

  useEffect(() => {
    api.get("listar").then((res) => setClientes(res.data))
  }, [])

  async function createCliente(ClientesData: ClientesInput) {
    const response = await api.post("incluir", {...ClientesData})

    const cliente = response.data

    setClientes((prevState) => [cliente, ...prevState])
  }

  async function updateCliente(ClientesData: ClientesFetch) {
    const response = await api.put(`atualizar/${ClientesData.codigo}`, {...ClientesData, updatedAt: new Date()})

    const updateItem: ClientesFetch = response.data

    const ClientesFilter = clientes.filter(clientes => clientes.codigo !== updateItem.codigo)

    setClientes([updateItem, ...ClientesFilter])
  }

  async function deleteCliente(id: string) {
    const response = await api.delete(`deletar/${id}`)

    const ClientesFilter = clientes.filter((clientes) => clientes.codigo !== response.data.codigo) 
    
    setClientes([...ClientesFilter])
  }

  return (
    <ClientesContext.Provider value={{ clientes, createCliente, updateCliente, deleteCliente } }>
      {children}
    </ClientesContext.Provider>
  )
}