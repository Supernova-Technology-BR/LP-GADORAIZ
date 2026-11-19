import '@fontsource-variable/geist';
import './style.css';
import './ondas.js';
import { linkWhatsApp } from './config';

const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends Element = HTMLElement>(s: string, raiz: ParentNode = document) => raiz.querySelector<T & Element>(s) as T;
const $$ = <T extends Element = HTMLElement>(s: string, raiz: ParentNode = document) => [...raiz.querySelectorAll<T & Element>(s)] as T[];

/* ---------------- WhatsApp ---------------- */
for (const a of $$<HTMLAnchorElement>('.js-cta')) {
  a.href = linkWhatsApp();
  a.target = '_blank';
  a.rel = 'noopener';
}

/* ---------------- navegação: transparente sobre as ondas, sólida no resto ---------------- */
const nav = $('#nav');
const escuras = $$('.capa, .fecho');
function ajustaNav() {
  const linha = nav.offsetHeight / 2;
  const sobreOnda = escuras.some((s) => {
    const r = s.getBoundingClientRect();
    return r.top <= linha && r.bottom >= linha;
  });
  nav.classList.toggle('solida', !sobreOnda);
}
addEventListener('scroll', ajustaNav, { passive: true });
addEventListener('resize', ajustaNav);
ajustaNav();

/* ---------------- logo desenhada ---------------- */
function desenhaLogo(svg: SVGElement | null) {
  if (!svg || calmo) return;
  svg.classList.remove('anima');
  void svg.getBoundingClientRect();
  svg.classList.add('anima');
}
const logoFecho = document.getElementById('logo-fecho') as SVGElement | null;
if (logoFecho && !calmo) {
  logoFecho.classList.add('anima');
  logoFecho.style.visibility = 'hidden';
  new IntersectionObserver(
    (es, o) => {
      if (es.some((e) => e.isIntersecting)) {
        logoFecho.style.visibility = '';
        desenhaLogo(logoFecho);
        o.disconnect();
      }
    },
    { threshold: 0.35 },
  ).observe(logoFecho);
}

/* ---------------- espera que pausa quando a abertura sai da tela ---------------- */
let palcoVisivel = true;
let abaVisivel = !document.hidden;
document.addEventListener('visibilitychange', () => (abaVisivel = !document.hidden));
const palco = $('.palco');
new IntersectionObserver((es) => (palcoVisivel = es[0].isIntersecting), { threshold: 0.1 }).observe(palco);

function espera(ms: number) {
  return new Promise<void>((ok) => {
    let resta = ms;
    let antes = performance.now();
    const passo = (agora: number) => {
      if (palcoVisivel && abaVisivel) resta -= agora - antes;
      antes = agora;
      if (resta <= 0) ok();
      else requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
  });
}

/* ---------------- a janela do app: entrar e navegar pelas telas reais ---------------- */
const telas = $('#telas');
const url = $('#janela-url');
const login = $('#login');
const cursor = $('#cursor');
const imgs = $$<HTMLImageElement>('.t', telas);
const logoLogin = document.getElementById('logo-login') as SVGElement | null;
const email = $('#lc-email');
const senha = $('#lc-senha');
const entrar = $('#lc-entrar');

// posições em pixels CSS da tela capturada (1200 x 574)
const W = 1200;
const H = 574;
const ALVO = {
  rebanho: [68, 166],
  reproducao: [68, 204],
  financeiro: [68, 242],
  linhaB106: [380, 391],
  paiMajestade: [1089, 449],
} as const;

function cursorEm(x: number, y: number) {
  cursor.style.left = `${x}%`;
  cursor.style.top = `${y}%`;
}
const cursorNaTela = ([x, y]: readonly [number, number]) => cursorEm((x / W) * 100, (y / H) * 100);
function cursorNoElemento(el: HTMLElement) {
  const t = telas.getBoundingClientRect();
  const r = el.getBoundingClientRect();
  cursorEm(((r.left + r.width * 0.55 - t.left) / t.width) * 100, ((r.top + r.height * 0.6 - t.top) / t.height) * 100);
}
async function clica() {
  cursor.classList.remove('clique');
  void cursor.offsetWidth;
  cursor.classList.add('clique');
  await espera(260);
}
function mostra(rota: string | null) {
  login.classList.toggle('on', rota === null);
  for (const i of imgs) i.classList.toggle('on', i.dataset.rota === rota);
  url.textContent = 'app.gadoraiz.com.br' + (rota ?? '');
}
async function digita(campo: HTMLElement, texto: string, oculto = false) {
  const alvo = $('.lc-txt', campo);
  campo.classList.add('foco');
  for (let i = 1; i <= texto.length; i++) {
    alvo.textContent = oculto ? '•'.repeat(i) : texto.slice(0, i);
    campo.classList.add('tem');
    await espera(oculto ? 70 : 48);
  }
  campo.classList.remove('foco');
}
function limpaLogin() {
  for (const c of [email, senha]) {
    $('.lc-txt', c).textContent = '';
    c.classList.remove('tem', 'foco');
  }
  entrar.classList.remove('carregando', 'apertado');
}

async function demonstracao() {
  for (const i of imgs) i.decode?.().catch(() => {});
  for (;;) {
    limpaLogin();
    mostra(null);
    cursorEm(78, 86);
    desenhaLogo(logoLogin);
    await espera(2700);
    cursorNoElemento(email);
    await espera(900);
    await clica();
    await digita(email, 'demo@gadoraiz.com.br');
    cursorNoElemento(senha);
    await espera(700);
    await clica();
    await digita(senha, 'gadoraiz', true);
    cursorNoElemento(entrar);
    await espera(850);
    entrar.classList.add('apertado');
    await clica();
    entrar.classList.remove('apertado');
    entrar.classList.add('carregando');
    await espera(900);

    mostra('');
    await espera(2600);
    cursorNaTela(ALVO.rebanho);
    await espera(1000);
    await clica();
    mostra('/rebanho');
    await espera(1500);
    cursorNaTela(ALVO.linhaB106);
    await espera(1100);
    await clica();
    mostra('/rebanho/B-106');
    await espera(2400);
    cursorNaTela(ALVO.paiMajestade);
    await espera(1100);
    await clica();
    mostra('/rebanho/T-101');
    await espera(2400);
    cursorNaTela(ALVO.reproducao);
    await espera(1100);
    await clica();
    mostra('/reproducao');
    await espera(2800);
    cursorNaTela(ALVO.financeiro);
    await espera(1000);
    await clica();
    mostra('/financeiro');
    await espera(2400);
  }
}

if (calmo) {
  mostra('');
  cursor.hidden = true;
} else {
  demonstracao();
}

/* ---------------- o celular: o grupo da fazenda não para ---------------- */
const msgs = $('#wa-msgs');
const CONVERSA: [string, string, string][] = [
  ['Tonho', '#94600a', 'Qual touro cobriu a 114?'],
  ['Lúcia', '#5856d6', 'A Canela tá prenhe ou repetiu cio?'],
  ['', '', 'Vê no caderno azul'],
  ['Seu Zé', '#15708f', 'O caderno azul molhou na chuva'],
  ['Tonho', '#94600a', 'Alguém pesou os bezerros do lote 2?'],
  ['Lúcia', '#5856d6', 'Vacinou a Ametista contra raiva esse ano?'],
  ['', '', 'Acho que sim. Ou foi a Garoa'],
  ['Seu Zé', '#15708f', 'A Mimosa pariu hoje cedo, uma bezerra'],
  ['Lúcia', '#5856d6', 'Essa bezerra é filha de quem??'],
  ['', '', 'Anota no caderno que depois eu vejo'],
];
async function conversa() {
  let n = 0;
  let minuto = 6 * 60 + 31;
  for (;;) {
    await espera(2600);
    const [quem, cor, texto] = CONVERSA[n++ % CONVERSA.length];
    minuto += 3 + (n % 4);
    const li = document.createElement('li');
    if (!quem) li.className = 'eu';
    else {
      const b = document.createElement('b');
      b.style.color = cor;
      b.textContent = quem;
      li.append(b);
    }
    li.append(texto);
    const t = document.createElement('time');
    t.textContent = `${Math.floor(minuto / 60) % 24}:${String(minuto % 60).padStart(2, '0')}`;
    li.append(t);
    li.classList.add('chega');
    msgs.append(li);
    const vivos = $$('li:not(.sai)', msgs);
    if (vivos.length > 5) {
      const velho = vivos[0];
      velho.style.setProperty('--h', `${velho.offsetHeight + 8}px`);
      velho.classList.add('sai');
      velho.addEventListener('animationend', () => velho.remove(), { once: true });
    }
  }
}
if (!calmo) conversa();

/* ---------------- antes e depois ---------------- */
for (const c of $$('[data-compara]')) {
  const input = $<HTMLInputElement>('input', c);
  const aplica = (v: number) => {
    c.style.setProperty('--p', String(v));
    c.classList.toggle('p-baixo', v < 16);
    c.classList.toggle('p-alto', v > 84);
  };
  input.addEventListener('input', () => aplica(Number(input.value)));
  // a régua começa no antes e termina mostrando a tela inteira do depois
  const final = 0;
  if (calmo) {
    input.value = String(final);
    aplica(final);
    continue;
  }
  aplica(100);
  input.value = '100';
  new IntersectionObserver(
    (es, o) => {
      if (!es[0].isIntersecting) return;
      o.disconnect();
      const ini = performance.now() + 700;
      const dur = 1800;
      const passo = (agora: number) => {
        const k = Math.max(0, Math.min(1, (agora - ini) / dur));
        const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
        const v = Math.round(100 + (final - 100) * e);
        aplica(v);
        input.value = String(v);
        if (k < 1) requestAnimationFrame(passo);
      };
      requestAnimationFrame(passo);
    },
    { threshold: 0.55 },
  ).observe(c);
}
