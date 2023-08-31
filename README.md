# Fashion App

Uma loja simples desenvolvida com React Native utilizando Typescript e Tailwind com um catálogo de produtos e um carrinho de compras.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

O projeto pode ser construído com npm ou yarn, então escolha uma das abordagens abaixo caso você não tenha nenhuma instalada em seu sistema.

* **Npm** é distribuído com o Node.js, o que significa que quando você baixa o Node.js, você instala automaticamente o npm em seu computador. [Download Node.js](https://nodejs.org/en/download/)

* **Yarn** é um gerenciador de pacotes desenvolvido pela equipe do Facebook e parece ser mais rápido que o npm em geral. [Download Yarn](https://yarnpkg.com/en/docs/install)

* **Android Virtual Device** é uma configuração que define as características de um telefone Android, tablet, Wear OS, Android TV ou dispositivo Automotive OS que você deseja simular no Android Emulator. [Download Android Virtual Device](https://developer.android.com/studio/run/managing-avds)

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
git
npm ou yarn
android virtual device
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Clonar o projeto:
```
git clone https://github.com/Santos-Samuels/fashion-app.git
cd fashion-app
```

Criar um arquivo .**env.local** na raiz do projeto e adicionar a seguinte variável de ambiente:
```
EXPO_PUBLIC_BASE_API_URL = https://fakestoreapi.com
```

Instalar as dependências e rodar o projeto:
```
yarn install
yarn expo start
```

# ⚙️ Testes automotizados

O testes foram desenvolvidos utilizando uma combinação de Jest e React Native Testing Library que dispões de conjuntos de utiliários que permitem testar componentes React Native sem depender dos detalhes de implementação.

## ⚙️ Executando os testes

Todos os testes:
```
yarn test
```

Conjuntos de testes em uma parta específica:
```
yarn test nome-da-pasta
```

Um arquivo de teste específico
```
yarn test nome-do-arquivo.spec.tsx
```

## 🛠️ Construído com

Tecnologias utilizadas na construção do projeto
### Aplicação
* [Expo React Native](https://docs.expo.dev/)
* [TypeScript](https://www.typescriptlang.org/docs/)
* [Tailwind](https://tailwindcss.com/docs/installation)
* [Axios](https://axios-http.com/ptbr/docs/intro)

## API
* [Fake Store API](https://fakestoreapi.com/docs)

## Design System
* [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)

### Testes
* [Jest](https://jestjs.io/pt-BR/docs/getting-started)
* [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
