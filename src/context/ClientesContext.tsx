import { createContext, useState, useEffect, ReactNode } from "react"
import { api } from "../services/api"

interface Clientes {
    codigo: number,
	loja: string,
	nome: string
	fisicaJuridica: string,
	fantasia: string,
	cep: string,
	estado: string,
	endereco: string,
	bairro: string,
	codigoMunicipio: number,
	municipio: string,
	pais: string,
	telefone: string,
	cnpjCpf: string,
	dataNascimento: Date,
	email: string,
	homePage: string,
	tipo: string
}

interface ItemsInterface {
    children: ReactNode
}

interface ItemsDataInterface {
    clientes: Clientes[]
    createItem: (item: Clientes) => Promise<void>
    updateItem: (item: Clientes) => Promise<void>
    deleteItem: (id: string) => Promise<void>
}  

export type ClientesInput = Omit<Clientes, "codigo">

export const ClientesContext = createContext<ItemsDataInterface>({} as ItemsDataInterface)

export function ItemProvider({ children }: ItemsInterface) {
  const [clientes, setClientes] = useState<Clientes[]>([])

//   useEffect(() => {
//     api.get("item").then((res) => setClientes(res.data))
//   }, [])

  async function createItem(ClientesData: ClientesInput) {
    const response = await api.post("item", {...ClientesData})

    const cliente = response.data

    setClientes((prevState) => [cliente, ...prevState])
  }

  async function updateItem(ClientesData: Clientes) {
    const response = await api.put(`item/${ClientesData.codigo}`, {...ClientesData, updatedAt: new Date()})

    console.log(response)

    const updateItem: Clientes = response.data

    const itemsFilter = clientes.filter(clientes => clientes.codigo != updateItem.codigo)

    setClientes([updateItem, ...itemsFilter])
  }

  async function deleteItem(id: string) {
    const response = await api.delete(`item/${id}`)

    const itemsFilter = clientes.filter((clientes) => clientes.codigo != response.data.codigo) 
    
    setClientes([...itemsFilter])
  }

  return (
    <ClientesContext.Provider value={{ clientes, createItem, updateItem, deleteItem } }>
      {children}
    </ClientesContext.Provider>
  )
}