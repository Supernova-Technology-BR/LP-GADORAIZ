---
name: Gadoraiz (site de venda)
description: A landing do SUPERNOVA.crm vestida com o registro claro do app e as ondas verdes da logo, provando a genética e a reprodução com telas reais.
colors:
  janela: "#f5f5f7"
  grupo: "#ffffff"
  rotulo: "#1d1d1f"
  rotulo-2: "#6e6e73"
  rotulo-3: "#8e8e93"
  linha: "rgb(0 0 0 / 0.08)"
  linha-forte: "rgb(0 0 0 / 0.14)"
  verde: "#1f6234"
  verde-escuro: "#17502a"
  verde-fundo: "#123f20"
  verde-ok: "#23964a"
  onda-clara: "#f3f8ec"
  terra-fundo: "#2a1709"
  creme: "#f8f3e7"
  sol: "#f5a008"
  logo-verde: "#05400c"
  logo-oliva: "#5d7a0a"
  logo-marrom: "#683002"
  ladrilho-genetica: "#8a6a48"
  ladrilho-reproducao: "#d63864"
  ladrilho-parto: "#b8730a"
  ladrilho-historico: "#1a86ad"
  ladrilho-equipe: "#5856d6"
  ladrilho-pesagem: "#007aff"
  ladrilho-relatorios: "#6b6b70"
typography:
  display:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(42px, 4.9vw, 72px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(32px, 3.9vw, 54px)"
    fontWeight: 780
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline-fecho:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(36px, 4.6vw, 64px)"
    fontWeight: 780
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  title:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(24px, 2.3vw, 32px)"
    fontWeight: 750
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  title-item:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(19px, 1.6vw, 23px)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(17px, 1.35vw, 20px)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 550
    lineHeight: 1.5
  button:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 650
    lineHeight: 1
  marca:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 750
    letterSpacing: "-0.02em"
  caption:
    fontFamily: "'Geist Variable', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  foco: "6px"
  ladrilho: "11px"
  janela: "14px"
  menu: "16px"
  raio: "18px"
  selo: "36px"
  capsula: "999px"
spacing:
  faixa: "1200px"
  margem: "24px"
  margem-celular: "16px"
  nav: "68px"
  coluna: "72px"
  secao: "clamp(80px, 10vw, 136px)"
  fecho: "clamp(96px, 11vw, 150px)"
components:
  button-primary:
    backgroundColor: "{colors.grupo}"
    textColor: "{colors.verde-escuro}"
    typography: "{typography.button}"
    rounded: "{rounded.capsula}"
    padding: "0 26px"
    height: "52px"
  button-nav:
    backgroundColor: "{colors.grupo}"
    textColor: "{colors.verde-escuro}"
    rounded: "{rounded.capsula}"
    padding: "0 18px"
    height: "40px"
  button-nav-solida:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.grupo}"
    rounded: "{rounded.capsula}"
    padding: "0 18px"
    height: "40px"
  button-nav-celular:
    backgroundColor: "{colors.grupo}"
    textColor: "{colors.verde-escuro}"
    rounded: "{rounded.capsula}"
    width: "42px"
    height: "40px"
  ladrilho:
    textColor: "{colors.grupo}"
    rounded: "{rounded.ladrilho}"
    size: "40px"
  rotulo-depois:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.grupo}"
    rounded: "{rounded.capsula}"
  compara:
    backgroundColor: "{colors.grupo}"
    rounded: "{rounded.raio}"
  janela-navegador:
    backgroundColor: "{colors.grupo}"
    rounded: "{rounded.janela}"
  selo-logo:
    backgroundColor: "{colors.creme}"
    rounded: "{rounded.selo}"
---

# Design System: Gadoraiz (site de venda)

## Overview

**Creative North Star: "O Curral Passado a Limpo"**

A página tem a estrutura da landing do SUPERNOVA.crm: ondas animadas em tela cheia na abertura e no fechamento, um palco com um celular e uma janela de navegador, réguas de antes e depois, a lista de módulos ao lado do menu real e as dúvidas. Tudo isso usa o registro do app Gadoraiz, o mesmo do SPARDA.crm: janela cinza-claro, grupos brancos, texto quase preto, Geist, botões em cápsula e ladrilhos coloridos por módulo. O verde da logo entra só nas ondas e na ação. O meio da página é claro e calmo. A cor forte fica nas duas pontas.

A prova é sempre o produto. A janela mostra a tela de entrada do app sobre as ondas terra paradas, com a logo vetorizada se desenhando peça por peça. Depois, um cursor clica pelas telas reais. O celular, um iPhone 18 Pro desenhado em CSS, mostra o grupo de WhatsApp da fazenda que não para de perguntar "filha de quem?". As réguas começam no caos (caderno, planilha e pergunta de curral, desenhados em CSS) e terminam mostrando o depois inteiro. Não há foto gerada, ilustração de banco nem número inventado.

Rejeições confirmadas: o visor de LED e balança da v1 (cores agressivas em faixas escuras), as fotos geradas da v2 e qualquer fundo preto. O site só tem tema claro (`color-scheme: light`).

**Key Characteristics:**

- Ondas verdes da logo em tela cheia na abertura e no fechamento; meio da página em `#ffffff` e `#f5f5f7` alternados.
- Geist com títulos pesados (750 a 800) e espaçamento negativo; corpo de 17px.
- Botões e rótulos em cápsula; ladrilhos de 40px com o ícone Phosphor fill branco.
- Só telas reais do app como imagem, sempre dentro de uma moldura (janela, régua ou cartão).
- Movimento com propósito narrativo (logo, login, cursor, grupo, régua), todo desligado em movimento reduzido.

## Colors

O registro neutro do CRM carrega a leitura; o verde da logo carrega a marca e a ação; os ladrilhos dão a cada módulo a sua cor.

### Primary

- **Verde Pasto** (`verde`): fundo da ação na navegação sólida, rótulo "Com o Gadoraiz" na régua, avatar do grupo e ícone do puxador.
- **Verde Mata** (`verde-escuro`): texto dos botões brancos sobre as ondas e `theme-color` da página.
- **Verde Fundo de Onda** (`verde-fundo`): primeira faixa e fundo das ondas. A rampa vai até **Verde Orvalho** (`onda-clara`), em sete passos: `#123f20`, `#17502a`, `#1f6234`, `#2b7540`, `#4a8f50`, `#9cc483`, `#f3f8ec`.
- **Verde Confirmação** (`verde-ok`): botão Entrar do login simulado, foco do campo, pulso do clique do cursor, ícone "+" das dúvidas e fundo tingido da pílula "o centro". Fica em 3.8:1 com o branco, então serve para ícone, halo e preenchimento, não para texto pequeno de leitura.

### Secondary

- **Terra Escura** (`terra-fundo`): fundo da tela de entrada simulada. As ondas terra ficam paradas, numa rampa de sete passos: `#43250e`, `#5f3714`, `#80501d`, `#a56b26`, `#c98c34`, `#e4b65d`, `#f6e3b8`. A terra só aparece dentro da janela, nunca como fundo de seção.
- **Creme do Disco** (`creme`): selo da logo no fechamento e disco da própria logo.

### Tertiary

- **Ladrilhos por módulo**: Genética e Rebanho (`ladrilho-genetica`), Reprodução (`ladrilho-reproducao`), parto (`ladrilho-parto`), Cria e Financeiro (`verde-ok`), Histórico e Sanidade (`ladrilho-historico`), Equipe (`ladrilho-equipe`), Pesagem e leite (`ladrilho-pesagem`) e Relatórios (`ladrilho-relatorios`). Cada um aparece como fundo de ladrilho de 40px com o ícone branco. O mesmo módulo leva a mesma cor em todas as seções.
- **Tintas da logo** (`logo-verde`, `logo-oliva`, `logo-marrom`, `sol`, `creme`): vivem só no SVG da logo. **Sol** (`sol`) também é o anel de foco do teclado.

### Neutral

- **Janela** (`janela`): fundo das seções alternadas (antes e depois, dúvidas), dos campos e do palco das telas.
- **Grupo** (`grupo`): fundo da página e das seções principais, cartões, botões sobre as ondas e janela do navegador.
- **Rótulo** (`rotulo`): todo o texto de leitura sobre fundo claro.
- **Rótulo 2** (`rotulo-2`): textos de apoio, introduções, respostas das dúvidas e rodapé.
- **Rótulo 3** (`rotulo-3`): só placeholder do login simulado. Fica abaixo de 4.5:1 no branco e no `janela`, então não serve para texto que precisa ser lido.
- **Linha** e **Linha forte** (`linha`, `linha-forte`): divisórias das listas, borda da janela e contorno de 1px das molduras; a linha forte separa as dúvidas.

### Named Rules
**The Cor nas Pontas Rule.** O verde saturado ocupa a abertura e o fechamento, em tela cheia. Entre eles, as seções alternam só `grupo` e `janela`, e a cor aparece apenas em ladrilhos, rótulos e ícones.

**The Sem Fundo Preto Rule.** Nenhuma seção, faixa ou cartão usa preto ou cinza muito escuro como fundo. O escuro mais fundo da página é `verde-fundo`; dentro da janela, `terra-fundo`. O site não tem tema escuro.

**The Um Módulo, Uma Cor Rule.** A cor do ladrilho é a identidade do módulo e se repete igual em "Por que usar", nas réguas e em "O que vem junto". Não troque a cor de um módulo e não a use como cor de texto.

## Typography

**Display Font:** Geist Variable (com Geist, -apple-system, Segoe UI e system-ui)
**Body Font:** Geist Variable (mesma família)

**Character:** Uma família só, a do app. A hierarquia nasce do peso (400 a 800) e do espaçamento negativo nos títulos, como num painel de sistema bem ajustado, nunca de uma segunda fonte decorativa.

### Hierarchy

- **Display** (800, `clamp(42px, 4.9vw, 72px)`, 0.98): só o título da abertura, branco sobre as ondas, `max-width: 12ch` (14ch abaixo de 1040px), `text-wrap: balance`.
- **Headline** (780, `clamp(32px, 3.9vw, 54px)`, 1.04): títulos de seção. No fechamento cresce para **Headline Fecho** (`clamp(36px, 4.6vw, 64px)`, `max-width: 14ch`).
- **Title** (750, `clamp(24px, 2.3vw, 32px)`, 1.12): pergunta de cada régua de antes e depois.
- **Title Item** (700, `clamp(19px, 1.6vw, 23px)`, 1.25): nome de cada perda em "Por que usar". Os módulos usam 18px e as perguntas das dúvidas, 650 em `clamp(18px, 1.5vw, 21px)`.
- **Lead** (400, `clamp(17px, 1.35vw, 20px)`, 1.5): introdução de seção em `rotulo-2`, `max-width: 46ch`. O apoio da abertura e do fechamento sobe para `clamp(18px, 1.5vw, 21px)`, em branco a 90%.
- **Body** (400, 17px, 1.5; 16px abaixo de 760px): textos corridos, de 52 a 60ch.
- **Label** (550, 15px): links da navegação. Botões usam 650 a 17px; a marca, 750 a 19px.
- **Caption** (400, 13px): legenda "Tela real do Gadoraiz..." embaixo de cada régua e do menu, em `rotulo-2`.

### Named Rules
**The Peso Faz a Hierarquia Rule.** Títulos ficam entre 700 e 800, com espaçamento de -0.02em a -0.045em. Não há caixa-alta, rótulo acima do título nem segunda família.

**The Nada Acima do Título Rule.** Nenhum título de seção leva rótulo, sobretítulo ou numeração acima dele. A barra do topo já nomeia as seções.

## Layout

- **Faixa central:** `min(1200px, 100% - 48px)`; abaixo de 760px, `100% - 32px`.
- **Abertura:** `min-height: 100svh`, grade 4.4fr / 7.6fr (texto / palco) com 48px de espaço.
- **Seções laterais:** "Por que usar", "O que vem junto" e "Dúvidas" usam 5fr / 7fr com 72px. A coluna do título fica fixa (`sticky`, `top: 110px`) enquanto a lista rola.
- **Réguas:** 4fr / 8fr, alternando o lado a cada par, com 56px entre texto e régua e `clamp(64px, 8vw, 112px)` entre pares.
- **Ritmo vertical:** seções com `clamp(80px, 10vw, 136px)`; fechamento com `clamp(96px, 11vw, 150px)`. A âncora compensa a barra com `scroll-padding-top: 76px`.
- **Abaixo de 1040px:** tudo vira uma coluna, os links da navegação somem e o título fixo volta ao fluxo.
- **Abaixo de 760px:** a barra baixa para 62px, o botão do WhatsApp vira um círculo de 42px só com o ícone e o palco desce para baixo do texto. A régua passa a 816 / 1020, com a versão de celular do app no depois. Os módulos ficam em uma coluna.
- **Palco:** o celular (28% da largura; 30% no celular) fica pendurado embaixo à esquerda da janela, sem cobrir o menu do app nem a logo do login.

## Elevation & Depth

A página é plana nas seções e ganha profundidade só nos objetos do palco e das réguas: janela, celular, régua e selo. As sombras são longas, suaves e sempre ambientes; nenhuma é deslocada ou dura. Sobre as ondas, a sombra puxa para o verde (`rgb(10 40 20 / 0.45)`, `rgb(5 30 12 / 0.5)`). A barra sólida usa vidro branco (`rgb(255 255 255 / 0.82)` com `blur(20px)`) e uma linha de 1px, não sombra.

### Shadow Vocabulary

- **Sombra** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.06), 0 12px 32px -12px rgb(0 0 0 / 0.18)`): réguas e menu real, sobre fundo claro.
- **Sombra Alta** (`box-shadow: 0 2px 6px rgb(0 0 0 / 0.08), 0 40px 80px -30px rgb(10 40 20 / 0.45)`): janela do navegador sobre as ondas.
- **Sombra do Celular** (`filter: drop-shadow(0 30px 40px rgb(5 30 12 / 0.5))`): celular do palco.
- **Sombra do Selo** (`box-shadow: 0 40px 80px -30px rgb(0 0 0 / 0.5)`): selo creme da logo no fechamento.
- **Sombra do Botão Branco** (`box-shadow: 0 10px 30px -10px rgb(0 0 0 / 0.45)`, no hover `0 16px 36px -12px rgb(0 0 0 / 0.5)`): botão branco sobre as ondas.

### Named Rules
**The Profundidade Só no Palco Rule.** As seções claras não têm sombra. Só os objetos que representam algo físico (janela, celular, régua, papel do antes, selo) flutuam.

## Shapes

As formas são arredondadas e de sistema. Botões, rótulos da régua, pílula "o centro" e campo de mensagem usam cápsula (`capsula`). Os ladrilhos têm cantos de ícone de app (`ladrilho`). A janela do navegador usa `janela`, as réguas usam `raio`, o menu real usa `menu` e o selo da logo usa `selo`. O puxador da régua e os avatares são círculos. O celular segue a curva do aparelho (`16.5% / 7.6%` no corpo, `14.6% / 6.7%` na tela). Os papéis do antes (caderno, planilha, post-it) são os únicos objetos tortos, girados de -2.5° a 4°. Toda moldura de imagem tem um contorno de 1px (`linha`, ou branco a 25% sobre as ondas).

## Components

### Buttons
Cápsulas cheias e firmes, que sobem 1px no hover.

- **Shape:** cápsula (`capsula`), altura mínima de 52px, ícone do WhatsApp de 22px com 10px de espaço.
- **Primary (Botão Branco):** fundo `grupo`, texto `verde-escuro`, 650 a 17px, `padding: 0 26px`, com a Sombra do Botão Branco. Só sobre as ondas (fechamento).
- **Hover / Focus:** `translateY(-1px)` no hover e `translateY(1px) scale(0.98)` ao apertar, com a mola `cubic-bezier(0.22, 1, 0.36, 1)` em 0.2s. O foco de teclado é um anel `sol` de 3px, afastado 3px.
- **Botão da navegação:** 40px de altura e 15px de texto. É branco com texto `verde-escuro` sobre as ondas e vira `verde` com texto branco na barra sólida. Abaixo de 760px fica só o ícone, num círculo de 42px.
- **Link com seta:** texto branco 600, sublinhado por uma borda de 1px branca a 45%, que fica cheia no hover. É a segunda ação da abertura ("Ver o antes e depois").

### Chips

- **Pílula "o centro":** cápsula com fundo `verde-ok` a 12% e texto 650 a 12px, depois do nome de Genética e Reprodução em "O que vem junto". O texto deve usar um verde de leitura (`verde`); o build ainda usa `verde-ok`, abaixo de 4.5:1.
- **Rótulos da régua:** cápsulas sobre a imagem. "Antes" em `rgb(29 29 31 / 0.75)` com texto branco e "Com o Gadoraiz" em `verde` com texto branco. Cada rótulo some quando a régua esconde o seu lado.

### Cards / Containers

- **Janela do navegador:** fundo branco, cantos `janela` e Sombra Alta. A barra tem 34px, fundo `#ececee`, os três botões do macOS e a URL numa cápsula branca de 12px que acompanha a rota.
- **Régua de antes e depois:** cantos `raio`, Sombra, contorno `linha` e proporção 1520 / 855.
- **Selo da logo:** fundo `creme`, cantos `selo`, `padding: clamp(24px, 3vw, 40px)` e até 440px de largura.
- **Listas:** perdas, módulos e dúvidas são linhas separadas por `linha` (ou `linha-forte` nas dúvidas), sem cartão.

### Inputs / Fields

- **Régua:** um `input type="range"` invisível sobre toda a régua, com `cursor: ew-resize`. O foco desenha o anel `sol` em volta da régua e aumenta o puxador.
- **Campos do login simulado:** fundo `janela` e contorno de 1px. No foco, ganham borda `verde-ok` e um halo verde a 18%, com um cursor de texto piscando.

### Navigation

- **Estilo:** barra fixa de 68px. À esquerda fica só o nome "Gadoraiz" (750, 19px), sem logo. Os quatro links das seções ficam à direita, em 550 a 15px com 85% de opacidade (100% no hover), seguidos do botão do WhatsApp.
- **Estados:** transparente com texto branco enquanto está sobre as ondas (abertura e fechamento). No resto, vira vidro branco com texto `rotulo` e linha de 1px. A troca leva 0.3s.
- **Celular:** os links somem abaixo de 1040px e o botão vira um círculo abaixo de 760px.

### Ladrilho de módulo
Quadrado de 40px com cantos `ladrilho`, a cor do módulo e o ícone Phosphor fill branco de 22px. Abre cada perda, cada régua e cada módulo.

### Ondas
Sete camadas SVG com a geometria do fundo de ondas do app, em `position: absolute` atrás da seção. Na abertura e no fechamento, usam a rampa verde e balançam 5% para o lado em 2s, de forma alternada, com 100ms de atraso entre camadas. Na tela de entrada simulada, usam a rampa terra e ficam paradas, como no app.

### Celular do grupo (iPhone 18 Pro em CSS)
O corpo é de alumínio prata em gradiente, na proporção 1206 / 2622, com bordas finas e Dynamic Island. Tem os botões de Ação, volume, lateral e Camera Control, e a barra de início. A tela imita o WhatsApp: fundo `#efe7dc`, balões brancos, os do usuário em `#d9fdd3`, e nomes coloridos. Uma mensagem nova chega a cada 2,6s (subindo com mola) e a mais velha sai por cima, com no máximo cinco à vista. Todo o tamanho interno é em `cqw`, para escalar com o aparelho.

### Login simulado e cursor
O login fica dentro da janela, sobre as ondas terra: a logo se desenha à esquerda e o cartão branco "Bem-vindo de volta" fica à direita. O e-mail e a senha são digitados, o botão Entrar (cápsula `verde-ok`) aperta e gira. Depois, o cursor de seta com contorno branco desliza em 0.9s com a mola e solta um pulso verde em cada clique. A navegação passa por Painel, Rebanho, ficha da B-106, pai Majestade, Reprodução e Financeiro. As telas trocam por fade de 0.45s, e a sequência pausa quando o palco sai da tela ou a aba fica oculta.

### Régua de antes e depois
O depois é o bloco real do app. O antes é uma cena em CSS por cima, recortada por `clip-path`: caderno pautado com margem rosa, planilha com cabeçalho Excel, post-it e a pergunta de curral num balão. A régua é uma linha branca de 3px com um puxador circular de 46px. Ao entrar na tela, ela começa em 100 (antes inteiro), espera 0.7s e corre em 1.8s até 0, terminando com o depois inteiro à vista.

### Logo desenhada
É o SVG vetorizado da logo oficial, injetado no HTML. Cada peça é um `path` com `pathLength="1"`, e a animação segue uma ordem fixa:

1. o disco surge girando;
2. o G e a vaca são traçados e preenchidos;
3. o pasto é traçado;
4. o sol nasce de baixo;
5. as raízes são traçadas;
6. as letras de "Gado" e "Raiz" sobem uma a uma.

O desenho leva cerca de 2,8s. Ele roda no login a cada ciclo e no selo do fechamento quando 35% do selo entra na tela.

## Do's and Don'ts

### Do:

- **Do** usar só telas reais do app como imagem, sempre numa moldura (janela, régua ou cartão), com contorno de 1px e legenda "Tela real do Gadoraiz".
- **Do** alternar seções `grupo` (#ffffff) e `janela` (#f5f5f7) entre as duas faixas de ondas verdes.
- **Do** dar a cada módulo o seu ladrilho de 40px com a mesma cor em toda a página.
- **Do** usar cápsula (999px) em todo botão e rótulo, e o anel de foco `sol` de 3px em todo elemento focável.
- **Do** terminar toda animação de antes e depois mostrando o depois inteiro.
- **Do** desligar tudo em `prefers-reduced-motion`: ondas, login e cursor ficam parados, a janela mostra o Painel, a logo aparece pronta, o grupo não recebe mensagens e as réguas já mostram o depois.
- **Do** pausar as animações do palco quando ele sai da tela ou a aba fica oculta.

### Don't:

- **Don't** usar fundo preto, faixa escura neutra ou tema escuro.
- **Don't** voltar ao visor de LED, à balança ou a cores agressivas (v1 rejeitada).
- **Don't** usar fotos geradas, ilustração de banco ou mockup que não seja tela real do app.
- **Don't** pôr a logo na barra de navegação; ali fica só o nome "Gadoraiz".
- **Don't** pôr rótulo, sobretítulo ou numeração acima dos títulos de seção.
- **Don't** usar a terra das ondas do login fora da janela do navegador.
- **Don't** usar sombra dura ou deslocada; a profundidade é sempre ambiente e só nos objetos do palco.
