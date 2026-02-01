# Uncode Store - Mini E-commerce

Mini e-commerce funcional desenvolvido com Next.js, TypeScript e Zustand.

## 🚀 Deploy

**URL do projeto:** [Será adicionado após deploy na Vercel]

Para fazer o deploy:

1. Push do código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Deploy automático

## 📋 Sobre o Projeto

E-commerce completo com listagem de produtos, página de detalhes, carrinho de compras funcional e API integrada.

### Por que Next.js?

- **Framework moderno e completo**: Next.js oferece SSR, SSG e API Routes em um único framework
- **Performance otimizada**: Carregamento rápido com otimização automática de imagens e code splitting
- **SEO friendly**: Renderização server-side melhora indexação pelos buscadores
- **Developer Experience**: Hot reload, TypeScript integrado e estrutura organizada
- **Deploy simplificado**: Integração nativa com Vercel para deploy instantâneo

## 📁 Estrutura do Projeto

```
Uncode-Front/
├── app/
│   ├── api/
│   │   └── products/
│   │       ├── route.ts              # GET /api/products
│   │       └── [id]/
│   │           └── route.ts          # GET /api/products/:id
│   ├── products/
│   │   └── [id]/
│   │       ├── page.tsx              # Página de detalhes do produto
│   │       ├── page.module.css
│   │       ├── AddToCartButton.tsx
│   │       └── AddToCartButton.module.css
│   ├── layout.tsx                    # Layout global
│   ├── page.tsx                      # Home - listagem de produtos
│   ├── page.module.css
│   └── globals.css
├── components/
│   ├── Cart/
│   │   ├── Cart.tsx                  # Minicarrinho (drawer)
│   │   └── Cart.module.css
│   ├── Header/
│   │   ├── Header.tsx                # Header com logo e carrinho
│   │   └── Header.module.css
│   ├── Footer/
│   │   ├── Footer.tsx                # Footer simples
│   │   └── Footer.module.css
│   └── ProductCard/
│       ├── ProductCard.tsx           # Card de produto
│       └── ProductCard.module.css
├── store/
│   └── cart.ts                       # Estado global do carrinho (Zustand)
├── lib/
│   ├── api.ts                        # Funções para consumir API
│   └── utils.ts                      # Utilitários (formatação)
├── types/
│   └── product.ts                    # Tipos TypeScript
├── products.json                     # Dados dos produtos
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🛠️ Tecnologias

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática para código mais seguro
- **Zustand**: Gerenciamento de estado leve e performático
- **CSS Modules**: Estilos com escopo de componente
- **Next.js API Routes**: Backend serverless integrado

## 💻 Como Rodar Localmente

### Pré-requisitos

- Node.js 18+ instalado
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

## 🎯 Funcionalidades

### Obrigatórias ✅

- ✅ Listagem de produtos com imagem, nome e preço
- ✅ Página de detalhes do produto
- ✅ Header com logo e ícone do carrinho
- ✅ Footer simples
- ✅ Minicarrinho (drawer/sidebar)
- ✅ Adicionar produtos ao carrinho
- ✅ Alterar quantidade no carrinho (+/-)
- ✅ Remover item do carrinho
- ✅ Total atualizado em tempo real
- ✅ Responsividade mobile-first (375px - 1440px)
- ✅ API com endpoints GET /products e GET /products/:id
- ✅ Deploy público

### Diferenciais ⭐

- ⭐ **TypeScript**: Código totalmente tipado
- ⭐ **Gerenciamento de estado**: Zustand com persistência
- ⭐ **Animações**: Transições suaves no carrinho e cards
- ⭐ **SEO**: Metadata otimizada
- ⭐ **Acessibilidade**: Labels ARIA e navegação por teclado

## 🎨 Decisões Técnicas

### Arquitetura

- **App Router do Next.js**: Aproveita Server Components para melhor performance
- **CSS Modules**: Evita conflitos de estilos mantendo escopo local
- **Componentização**: Componentes pequenos e reutilizáveis
- **Tipagem forte**: TypeScript em todo o projeto previne erros

### Estado do Carrinho

- **Zustand**: Escolhido por ser mais leve que Redux e mais simples que Context API
- **Persistência**: Carrinho salvo no localStorage automaticamente
- **Computed values**: Funções para calcular totais dinamicamente

### Estilização

- **Mobile-first**: Estilos base para mobile com media queries para desktop
- **CSS Variables**: Cores e tokens centralizados para fácil manutenção
- **Grid responsivo**: Layout adapta automaticamente ao tamanho da tela

### API

- **Next.js API Routes**: Elimina necessidade de servidor separado
- **Server-side data fetching**: Produtos carregados no servidor para melhor SEO

## 📱 Responsividade

- **Mobile**: 375px - Layout em coluna única
- **Desktop**: 1440px+ - Grid de produtos e layout otimizado

## 🚢 Deploy

O projeto está configurado para deploy na Vercel:

1. Push do código para GitHub
2. Conecte o repositório na Vercel
3. Deploy automático a cada push

Outras opções: Netlify, Render

## 📝 Licença

Projeto desenvolvido para fins de avaliação técnica.
