import { useState } from "react";
import { Container } from "./Styles"
import InputMask from 'react-input-mask';

export function NewCliente() {
  const [telefone, setTelefone] = useState('');

  return (
    <>
      <form className="">
        <section className="flex flex-col gap-4">
          <div className="grid grid-cols-11 gap-4">
            <Container>
              <label htmlFor="">Loja</label>
              <input type="text" />
            </Container>

            <Container className="col-span-4">
              <label htmlFor="">Nome</label>
              <input type="text" />
            </Container>

            <Container className="col-span-2">
              <label htmlFor="">Pessoa Fisica/Jurid</label>
              <input type="text" />
            </Container>

            <Container className="col-span-2">
              <label htmlFor="">Nome Fantasia</label>
              <input type="text" />
            </Container> 

            <Container>
              <label htmlFor="">CEP</label>
              <input type="text" />
            </Container>

            <Container>
              <label htmlFor="">Estado</label>
              <input type="text" />
            </Container>
          </div>
          <div className="grid grid-cols-15 gap-4">
            <Container className="col-span-4">
              <label htmlFor="">Endereço</label>
              <input type="text" />
            </Container>

            <Container className="col-span-2">
              <label htmlFor="">Bairro</label>
              <input type="text" />
            </Container>

            <Container className="col-span-2">
              <label htmlFor="">Cd. Municipio</label>
              <input type="text" />
            </Container>

            <Container className="col-span-2">
              <label htmlFor="">Municipio</label>
              <input type="text" />
            </Container>

            <Container className="">
              <label htmlFor="">Pais</label>
              <input type="text" />
            </Container>

            <Container className="col-span-3">
              <label htmlFor="">Telefone</label>
              <InputMask mask={'(99)99999-9999'} />
            </Container>
          </div>
          <div className="grid grid-cols-7 gap-4">
            <Container>
              <label htmlFor="">CNPJ/CPF</label>
              <InputMask mask={telefone.length <= 11 ? "99.999.999/9999-99" : "999.999.999.99"} value={telefone} onChange={(ev) => setTelefone(ev.target.value)} />
            </Container>
            <Container>
              <label htmlFor="">Data Nascimento</label>
              <input type="date" />
            </Container>
            <Container className="col-span-2">
              <label htmlFor="">E-Mail</label>
              <input type="text" />
            </Container>
            <Container className="col-span-2">
              <label htmlFor="">Home-Page</label>
              <input type="text" />
            </Container>
            <Container>
              <label htmlFor="">Tipo</label>
              <input type="text" />
            </Container>
          </div>
        </section>
      </form>
    </>
  )
}