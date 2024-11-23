# Documentação do Projeto React + TOTVS

## Descrição do Projeto
Este é um projeto desenvolvido com React, utilizando um conjunto de bibliotecas e ferramentas modernas para criar interfaces de usuário eficientes, estilização dinâmica e integração com APIs externas, como a API de CEP. O projeto foi estruturado utilizando uma arquitetura modular, que aproveita a componentização e modularidade para melhorar a organização, escalabilidade e manutenção do código.

## Dependências
As dependências do projeto são bibliotecas essenciais para o funcionamento da aplicação:

### Dependências de Produção
1. React (`^18.3.1`)
Biblioteca principal para construção de interfaces de usuário.

2. React-DOM (`^18.3.1`)
Permite que React manipule o DOM (Document Object Model).

3. React-Input-Mask (`^2.0.4`)
Fornece componentes de entrada com máscaras para campos de formulário.

4. React-Router-DOM (`^6.27.0`)
Gerencia navegação e roteamento dentro do aplicativo.

5. Styled-Components (`^6.1.13`)
Permite criar componentes estilizados com CSS-in-JS.

### Dependências de Desenvolvimento
1. @vitejs/plugin-react (`^4.3.3`)
Plugin para integrar React com Vite, ferramenta de construção rápida.

2. TypeScript (`~5.6.2`)
Fornece suporte a tipagem estática no JavaScript.

3. @types/react e @types/react-dom
Adiciona definições de tipos para bibliotecas React e React-DOM.

4. @types/react-input-mask
Tipos para a biblioteca `react-input-mask`.

5. TailwindCSS (`^3.4.14`)
Framework CSS utilitário para criação rápida de estilos.

6. PostCSS e Autoprefixer
Processa CSS para adicionar suporte a navegadores automaticamente.

7. Globals (`^15.11.0`)
Define variáveis globais para uso no código.

8. Vite (`^5.4.10`)
Ferramenta de build rápida e eficiente.

9. BiomeJS
Ferramenta moderna para formatação e linting de código, substituindo o ESLint.

## API Utilizada
A aplicação consome a API de CEP disponível em https://opencep.com/v1/.
Essa API permite consultar informações de endereço a partir de um CEP, facilitando o preenchimento de dados em formulários.

#### Exemplo de uso:

- Endpoint para buscar informações de um CEP:
  `https://opencep.com/v1/cep/{CEP}`

- Retorno típico:

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP"
}
```
## Arquitetura Modular
O projeto foi desenvolvido seguindo o princípio da arquitetura modular, que organiza a aplicação em módulos independentes e coesos.

### Vantagens da Arquitetura Modular
1. Reutilização de Código: Componentes e módulos podem ser facilmente reaproveitados em diferentes partes do projeto.
2. Manutenção Facilitada: Cada módulo funciona de maneira independente, facilitando a identificação e correção de problemas.
3. Escalabilidade: Novos recursos podem ser adicionados sem interferir no funcionamento das partes já existentes.
4. Separação de Preocupações: Módulos possuem responsabilidades claras, reduzindo a complexidade do código.

### Estrutura Modular do Projeto

```plaintext
src/
├── components/             # Contém os componentes reutilizáveis da aplicação
├── context/                # Gerencia contextos globais da aplicação usando React Context API. 
├── hooks/                  # Contém hooks customizados para encapsular lógica reutilizável e facilitar o consumo em componentes.
├── pages/                  # Contém as páginas principais da aplicação organizadas por funcionalidade
│   ├── clientes/           # Diretório relacionado à funcionalidade de gerenciamento de clientes.
│   │   ├── NewClient/      # Página para adicionar um novo cliente.
│   │       ├── index.tsx   # Componente principal para criação de clientes.t
│   │       ├── Styles.ts   # Estilização específica do componente `NewClient` usando styled-components.
│   │   ├── ShowClient/     # Página para exibir os detalhes de um cliente específico.
│   │   ├── UpdateClient/   # Página para editar as informações de um cliente existente.
│   │   ├── Cliente.txt     # Notas ou lógica inicial relacionada à funcionalidade de clientes (exemplo, para referência).
│   ├── Home.txt            # Arquivo de notas ou esboço relacionado à página inicial da aplicação.
├── services/               # Contém configurações e instâncias do Axios para gerenciar requisições HTTP. 
├── App.tsx                 # Componente raiz
├── index.css               # Estilos globais e temas
├── main.tsx                # Ponto de entrada da aplicação
├── router.txt              # Configuração ou planejamento das rotas do projeto. Geralmente utilizado para definir caminhos e links entre as páginas.
```

## Configuração e Uso
### Pré-requisitos
- Node.js (recomendado: versão 18 ou superior)
- Gerenciador de pacotes npm ou yarn.

### Passo a Passo
1. Clone o repositório:

```bash
git clone https://github.com/Joao123433/LABES-client
cd LABES-client
```
2. Instale as dependências:

```bash
npm install
# ou
yarn
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse a aplicação no navegador:
Abra o navegador e acesse `http://localhost:5173`.