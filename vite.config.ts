import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
// sobe a partir do arquivo principal do pacote até achar a pasta assets/fill
let raiz = dirname(require.resolve('@phosphor-icons/core'));
while (!existsSync(join(raiz, 'assets', 'fill')) && dirname(raiz) !== raiz) raiz = dirname(raiz);
const pastaIcones = join(raiz, 'assets', 'fill');

/**
 * Troca `<i data-icone="nome"></i>` pelo SVG do Phosphor (estilo fill, o mesmo do app),
 * já no HTML: os ícones aparecem sem esperar JavaScript.
 */
function iconesPhosphor(): Plugin {
  return {
    name: 'icones-phosphor',
    transformIndexHtml(html) {
      // a logo vetorizada entra inline, para cada peça poder ser animada pelo CSS
      const logo = readFileSync(join(__dirname, 'src', 'logo-animada.svg'), 'utf8');
      html = html.replace(/<!--logo-animada(?: ([a-z-]+))?-->/g, (_, id?: string) => (id ? logo.replace('<svg ', `<svg id="${id}" `) : logo));
      return html.replace(/<i data-icone="([a-z-]+)"( class="([^"]*)")?><\/i>/g, (_, nome: string, __, classe?: string) => {
        const svg = readFileSync(join(pastaIcones, `${nome}-fill.svg`), 'utf8');
        return svg.replace('<svg ', `<svg class="ico${classe ? ' ' + classe : ''}" aria-hidden="true" focusable="false" `);
      });
    },
  };
}

export default defineConfig({
  plugins: [iconesPhosphor()],
  build: { target: 'es2022', assetsInlineLimit: 0 },
});
