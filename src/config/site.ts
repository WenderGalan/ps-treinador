/**
 * CONFIGURAÇÃO CENTRAL — todo texto, link, imagem e dado profissional vive aqui.
 * Campos com `pending: true` NÃO foram confirmados: o Instagram não pôde ser lido
 * automaticamente (acesso bloqueado). Preencha com dados reais e remova `pending`.
 * Com `demoMode: true`, itens pendentes aparecem com a etiqueta "A CONFIRMAR".
 * Em produção, defina demoMode = false: itens pendentes ficam ocultos.
 */
export interface Item { pending?: boolean }
export interface Service extends Item { title: string; text: string; cta: string }
export interface Step extends Item { title: string; text: string }
export interface Faq extends Item { q: string; a: string }

export const site = {
  demoMode: true,
  /** Mostra a etiqueta amarela "A CONFIRMAR" nos itens pendentes (desligada para apresentação ao cliente). */
  showTags: false,
  brand: { name: 'Fernando Pereira', short: 'PS', pending: true },
  instagram: { handle: '@pstreinador', url: 'https://www.instagram.com/pstreinador/' },
  whatsapp: { number: '5567991959593' as string, // ex.: '5567999999999'
    message: 'Olá! Vim pelo site e quero começar meu treinamento.' },
  registry: { text: 'Profissional de Educação Física · CREF a informar', pending: true },
  /** Imagens: informe `src` (ex.: '/img/hero.webp') para substituir o placeholder. */
  images: {
    hero: { base: '/img/ps-treinador', alt: 'Fernando Pereira, personal trainer', pos: '50% 12%' },
    about: { base: '/img/ps-treinador', alt: 'Retrato de Fernando Pereira', pos: '50% 20%' },
    cta: { base: '/img/ps-treinador', alt: 'Fernando Pereira', pos: '50% 20%' },
  },
  hero: {
    headline: 'Treino com método. Resultado com constância.',
    sub: 'Acompanhamento profissional e individualizado, desenhado para o seu corpo, sua rotina e seu objetivo.',
    cta1: 'COMECE SUA TRANSFORMAÇÃO', cta2: 'CONHEÇA MEU TRABALHO',
  },
  about: {
    title: 'Fernando Pereira: cada treino com critério.',
    paragraphs: [
      'Texto de demonstração. Eu acredito que treino bom é aquele que você consegue sustentar. Por isso cada plano parte da sua rotina, do seu histórico e do seu objetivo, sem fórmula pronta.',
      'Acompanho de perto a execução, ajusto a carga e a progressão conforme você evolui e explico o porquê de cada escolha, para que você aprenda a treinar, não apenas a seguir uma ficha.',
      'Conteúdo ilustrativo, a ser substituído pela história real do Fernando.',
    ],
    pending: true,
  },
  method: {
    title: 'Como funciona o acompanhamento',
    steps: [
      { title: 'Conversa inicial', text: 'Falamos sobre seu objetivo, seu histórico de treino, lesões e a rotina que você tem hoje.', pending: true },
      { title: 'Avaliação', text: 'Avaliação do seu ponto de partida: mobilidade, postura e capacidade atual.', pending: true },
      { title: 'Plano individual', text: 'Treino montado para o seu objetivo, com divisão, volume e progressão definidos para você.', pending: true },
      { title: 'Acompanhamento e ajustes', text: 'Revisões periódicas, ajuste de cargas e suporte para dúvidas durante o treino.', pending: true },
    ] as Step[],
  },
  services: [
    { title: 'Treinamento presencial', text: 'Sessões acompanhadas de perto, com correção de execução em tempo real.', cta: 'Quero treinar presencialmente', pending: true },
    { title: 'Consultoria online', text: 'Planejamento e ajustes à distância, onde você estiver.', cta: 'Quero a consultoria online', pending: true },
    { title: 'Acompanhamento personalizado', text: 'Plano individual com suporte e revisões periódicas.', cta: 'Quero acompanhamento', pending: true },
  ] as Service[],
  /** Só ative com depoimentos reais e autorizados. */
  results: { enabled: false, items: [{ name: 'Maria Silva', text: 'O treinamento me ajudou a melhorar minha força e resistência.' }, { name: 'João Oliveira', text: 'A consultoria me ajudou a identificar e corrigir erros na minha técnica.' }] as { name: string; text: string }[] },
  instagramSection: {
    title: 'O dia a dia do treino, no Instagram.',
    text: 'Conteúdo, bastidores e rotina de treino em @pstreinador.',
    cards: [
      { title: 'Treinos e execução', text: 'Exercícios, técnica e progressões.' },
      { title: 'Rotina e bastidores', text: 'Como o trabalho acontece no dia a dia.' },
      { title: 'Orientações', text: 'Dicas práticas para treinar melhor.' },
    ],
    pending: true,
  },
  faq: [
    { q: 'Como começo?', a: 'Chame no WhatsApp ou Instagram. Vamos conversar sobre seu objetivo e escolher o formato ideal.', pending: true },
    { q: 'Preciso ter experiência prévia?', a: 'Não. O plano é montado a partir do seu nível atual.', pending: true },
    { q: 'Qual a diferença entre presencial e online?', a: 'No presencial a correção é imediata; no online o acompanhamento é feito por revisões e suporte à distância.', pending: true },
    { q: 'Quanto custa?', a: 'Depende do formato e da frequência escolhidos. Fale comigo e eu envio a proposta.', pending: true },
  ] as Faq[],
  finalCta: { title: 'Seu próximo treino começa numa mensagem.', text: 'Conte seu objetivo e receba orientação sobre o melhor formato.', button: 'FALAR COM O TREINADOR' },
}

export const visible = <T extends Item>(list: T[]) => site.demoMode ? list : list.filter(i => !i.pending)
export const contactUrl = () => site.whatsapp.number
  ? `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`
  : site.instagram.url
