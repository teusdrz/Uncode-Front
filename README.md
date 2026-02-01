# Uncode Store - Mini E-commerce

Mini e-commerce funcional desenvolvido com Next.js, TypeScript e Zustand.

## Deploy

URL do projeto: [Aguardando deploy]

## Sobre o Projeto

E-commerce completo com listagem de produtos, página de detalhes, carrinho de compras e API integrada.

### Por que Next.js?

Next.js foi escolhido por oferecer uma solução completa e moderna para desenvolvimento web. O framework permite Server-Side Rendering e Static Site Generation nativamente, melhorando performance e SEO. As API Routes eliminam a necessidade de um servidor backend separado. A otimização automática de imagens e code splitting resultam em melhor experiência do usuário. A integração com TypeScript e o hot reload proporcionam excelente experiência de desenvolvimento.

## Tecnologias

- Next.js 14: Framework React com App Router
- TypeScript: Tipagem estática para código mais seguro
- Zustand: Gerenciamento de estado leve e performático
- CSS Modules: Estilos com escopo de componente
- Next.js API Routes: Backend serverless integrado

## Como Rodar Localmente

### Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd Uncode-Front

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Comandos disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção
npm start        # Inicia servidor de produção
npm run lint     # Executa linter
```

## Funcionalidades

### Obrigatórias

- Listagem de produtos com imagem, nome e preço
- Página de detalhes do produto
- Header com logo e ícone do carrinho
- Footer simples
- Minicarrinho (drawer/sidebar)
- Adicionar produtos ao carrinho
- Alterar quantidade no carrinho
- Remover item do carrinho
- Total atualizado em tempo real
- Responsividade mobile-first (375px - 1440px)
- API com endpoints GET /products e GET /products/:id
- Deploy público

### Diferenciais

- TypeScript: Código totalmente tipado
- Gerenciamento de estado: Zustand com persistência em localStorage
- Animações e transições: Feedback visual em todas as interações
- Filtro e busca: Busca em tempo real e filtro por categoria
- Acessibilidade (a11y): Labels ARIA, navegação por teclado, focus-visible
- SEO: Metadata otimizada, OpenGraph, keywords relevantes
- Sistema de notificações: Toast com feedback visual
- Skeleton loading: Estados de carregamento
- Scroll to top: Navegação facilitada

## Decisões Técnicas

### Arquitetura

App Router do Next.js foi utilizado para aproveitar Server Components e melhor performance. CSS Modules evitam conflitos de estilos mantendo escopo local. A componentização segue o princípio de componentes pequenos e reutilizáveis. TypeScript em todo o projeto previne erros em tempo de desenvolvimento.

### Estado do Carrinho

Zustand foi escolhido por ser mais leve que Redux e mais simples que Context API. A persistência automática no localStorage mantém o carrinho entre sessões. Funções computadas calculam totais dinamicamente sem re-renders desnecessários.

### Estilização

A abordagem mobile-first define estilos base para dispositivos móveis com media queries progressivas para desktop. CSS Variables centralizam cores e tokens para fácil manutenção. O grid responsivo adapta automaticamente ao tamanho da tela.

### API

Next.js API Routes eliminam a necessidade de servidor separado. Server-side data fetching garante que produtos sejam carregados no servidor para melhor SEO e performance.

## Responsividade

- Mobile: 375px - Layout em coluna única
- Desktop: 1440px - Grid de produtos e layout otimizado

## Deploy

O projeto está configurado para deploy na Vercel. Basta fazer push para o GitHub e conectar o repositório na plataforma. O deploy é automático a cada push na branch principal.

Outras opções compatíveis: Netlify, Render.

## Licença

Projeto desenvolvido para fins de avaliação técnica.
