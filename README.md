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

## 📁 Diretórios

Organização dos diretórios do projeto

```
src
 |--components
    |--atoms
      |--__test__
    |--model
      |--__test__
    |--molecules
      |--__test__
    |--organisms
      |--__test__
 |--context
 |--routes
 |--screens
    |--__test__
 |--shared
    |--constants
    |--helpers
    |--interface
    |--services
    |--themes

test
```

* **src**: Este é o diretório principal onde todo o código-fonte do seu projeto está localizado.
* **components**: Aqui é onde você organiza os diferentes elementos reutilizáveis da interface do usuário do seu aplicativo.
* **atoms**: Componentes simples e indivisíveis, como botões, inputs e textos.
* **molecules**: Composições de componentes atoms que juntos formam unidades funcionais maiores.
* **organisms**: Componentes mais complexos que podem incluir vários elementos, como cabeçalhos e rodapés.
* **context**: Contém a lógica de gerenciamento de estado global, utilizando Context API.
* **routes**: Aqui você gerencia a navegação e as rotas do seu aplicativo, determinando como os diferentes componentes/screns são exibidos.
* **screens**: Contém os componentes que representam páginas ou telas individuais do seu aplicativo.
* **shared**: Este diretório contém recursos compartilhados e utilitários.
* **constants**: Valores constantes que podem ser usados em várias partes do código.
* **helpers**: Funções utilitárias que auxiliam em várias tarefas.
* **interface**: Interfaces ou tipos compartilhados que definem a estrutura dos dados.
* **services**: Módulos para lidar com lógica de rede ou serviços externos.
* **themes**: Arquivos de estilo ou temas compartilhados para manter a consistência visual.
* **test**: Contém arquivos relacionados os testes, como configurações globais ou arquivos de mock.
* **__test__**: Contém os testes automatizados para garantir que o código funcione conforme o esperado.

