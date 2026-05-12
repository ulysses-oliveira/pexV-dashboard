# pexV-dashboard

Dashboard para gestão de vendas de uma sorveteria (Gelateria), desenvolvido com tecnologias modernas para fornecer uma interface eficiente de controle de vendas, sabores e relatórios.

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Fastify** - Framework web rápido e eficiente
- **Prisma** - ORM moderno para banco de dados
- **SQLite** - Banco de dados leve e embutido
- **Better SQLite3** - Adaptador Prisma para SQLite

### Desenvolvimento
- **tsx** - Executor TypeScript com suporte a ESM
- **dotenv** - Gerenciamento de variáveis de ambiente

### Dependências Principais
- `@fastify/cors` - Suporte a CORS
- `@prisma/client` - Cliente Prisma para queries
- `@prisma/adapter-better-sqlite3` - Adaptador para SQLite

## 📁 Estrutura do Projeto

```
├── prisma/
│   ├── schema.prisma          # Schema do banco de dados
│   ├── seed.ts               # Dados iniciais
│   └── migrations/           # Migrações do banco
├── src/
│   ├── config/
│   │   └── prisma.ts         # Configuração do Prisma
│   ├── modules/
│   │   ├── dashboard/        # Módulo do dashboard
│   │   └── sales/           # Módulo de vendas
│   ├── app.ts               # Configuração do Fastify
│   └── server.ts            # Ponto de entrada da aplicação
├── public/                   # Arquivos estáticos
├── generated/               # Cliente Prisma gerado
└── package.json
```

## 🗄️ Modelo de Dados

- **Sale** - Representa uma venda com data, valor total e método de pagamento
- **SaleItem** - Itens da venda com quantidade, preço e referência ao sabor
- **Flavor** - Sabores disponíveis com nome e custo

## 🛠️ Como Inicializar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### 1. Clonagem e Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd pexV-dashboard

# Instale as dependências
npm install
```

### 2. Configuração do Ambiente
```bash
# Copie o arquivo de exemplo de variáveis de ambiente
cp .env.example .env
```

O arquivo `.env` deve conter:
```
DATABASE_URL="file:./dev.db"
```

### 3. Configuração do Banco de Dados
```bash
# Execute as migrações para criar as tabelas
npx prisma migrate dev

# Gere o cliente Prisma
npx prisma generate

# Popule o banco com dados iniciais (sabores)
npx prisma db seed
```

### 4. Executando a Aplicação
```bash
# Modo desenvolvimento (com hot reload)
npm run dev

# Modo produção
npm start
```

O servidor estará rodando em `http://localhost:7001`

## 📊 Funcionalidades

- ✅ Gestão de vendas
- ✅ Controle de sabores
- ✅ Relatórios de dashboard
- ✅ API RESTful
- ✅ Banco de dados SQLite

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm start` - Inicia o servidor em modo produção
- `npm test` - Executa os testes (ainda não implementados)

## 🧪 Testando a API

Após iniciar o servidor, você pode testar os endpoints através de ferramentas como Postman, Insomnia ou curl.

Exemplo de endpoints disponíveis:
- `GET /api/dashboard` - Dados do dashboard
- `GET /api/sales` - Lista de vendas
- `POST /api/sales` - Criar nova venda

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC.

