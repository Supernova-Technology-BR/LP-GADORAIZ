/**
 * Único ponto de configuração do site.
 *
 * WHATSAPP_NUMERO: número comercial com DDI e DDD, só dígitos (ex.: '5567999998888').
 * Enquanto estiver vazio, o botão abre o WhatsApp com a mensagem pronta e a pessoa
 * escolhe o contato; ao preencher, a conversa abre direto com o time.
 */
export const WHATSAPP_NUMERO = '';

export const WHATSAPP_MENSAGEM = 'Olá! Vi o site do Gadoraiz e quero controlar a genética e a reprodução do meu rebanho.';

export function linkWhatsApp(mensagem = WHATSAPP_MENSAGEM): string {
  const texto = encodeURIComponent(mensagem);
  return WHATSAPP_NUMERO ? `https://wa.me/${WHATSAPP_NUMERO}?text=${texto}` : `https://wa.me/?text=${texto}`;
}
