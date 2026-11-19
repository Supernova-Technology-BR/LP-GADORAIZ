# Gadoraiz · Landing page

![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![HTML e CSS](https://img.shields.io/badge/HTML%20%2B%20CSS-est%C3%A1tico-E34F26?logo=html5&logoColor=white)
![Licença](https://img.shields.io/badge/licen%C3%A7a-privada-555)

Página de venda do **Gadoraiz**, o sistema de controle da genética e da reprodução do rebanho (corte, leite e búfalo). A página mostra o antes e o depois: o caderno, a planilha e o grupo de WhatsApp da fazenda contra as telas reais do sistema. A ação principal é falar no WhatsApp.

## O que tem na página

- **Abertura** com ondas no verde da logo e um palco animado:
  - na janela do navegador, a logo se desenha peça por peça na tela de entrada, o login é digitado e um cursor navega pelas telas reais (Painel, Rebanho, ficha da bezerra, pai, Reprodução, Financeiro);
  - ao lado, um iPhone com o grupo de WhatsApp da fazenda perguntando "filha de quem?".
- **Por que usar:** cinco perdas comuns sem o controle e o que o Gadoraiz faz em cada uma.
- **Antes e depois:** quatro réguas de arrastar (genealogia, reprodução, histórico do animal, filhos do touro) que terminam mostrando a tela real inteira.
- **O que vem junto:** os módulos extras ao lado do menu real do sistema.
- **Dúvidas** e **fechamento** com a logo grande e o WhatsApp.
- Respeita `prefers-reduced-motion`: sem animação, tudo aparece pronto.

## Rodar

Requer Node.js 20 ou mais novo.

```bash
npm install
npm run dev       # http://localhost:5180
npm run build     # gera a página estática em dist/
npm run preview   # serve o dist/ em http://localhost:5180
```

O `dist/` é só HTML, CSS, JS e imagens. Serve em qualquer servidor estático (nginx, CDN, bucket).

## Configurar

Tudo o que muda fica em `src/config.ts`:

| Constante           | Para que serve                                                                                     |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| `WHATSAPP_NUMERO`   | Número comercial com DDI e DDD, só dígitos (ex.: `5567999998888`). Vazio, o botão abre o WhatsApp com a mensagem pronta e a pessoa escolhe o contato. |
| `WHATSAPP_MENSAGEM` | Mensagem que já vem escrita na conversa.                                                           |

## Estrutura

| Caminho                | Papel                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------- |
| `index.html`           | Conteúdo da página                                                                      |
| `src/style.css`        | Estilos: tokens, ondas, palco, iPhone, réguas e a logo desenhada                        |
| `src/main.ts`          | Link do WhatsApp, navegação, demonstração da janela, conversa do celular e réguas       |
| `src/ondas.js`         | Fundo de ondas (paleta verde e paleta terra)                                            |
| `src/logo-animada.svg` | Logo vetorizada por peças (disco, G, pasto, sol, raízes e letras)                       |
| `src/assets/telas/`    | Capturas reais do sistema, cada uma com a origem registrada no `.json` ao lado          |
| `vite.config.ts`       | Troca `<i data-icone="...">` pelos ícones Phosphor e injeta a logo no HTML              |
| `DESIGN.md`            | Sistema visual da página                                                                |

## Visual

Tema claro com as cores do sistema: fundo `#f5f5f7`, grupos brancos, texto `#1d1d1f`, ladrilhos coloridos por módulo, fonte Geist e botões em cápsula. As ondas usam a rampa verde da logo. Detalhes em [`DESIGN.md`](DESIGN.md).

## Licença

Uso privado da Supernova Technology. Todos os direitos reservados.
