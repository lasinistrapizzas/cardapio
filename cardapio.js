/* =========================================================
   LA SINISTRA · CARDÁPIO DA SEMANA
   Este é o único arquivo que muda toda semana.
   Troca textos, preços e datas aqui. O layout não precisa ser tocado.
   ========================================================= */

window.CARDAPIO = {
  // WhatsApp que recebe os pedidos (55 + DDD + número, só dígitos)
  whatsapp: "5551999442176",

  // Período: texto completo e curto (selo do topo)
  periodo: "Cardápio de 27 e 28 de novembro",
  periodoCurto: "Cardápio de 27 e 28 nov",

  // Dias de retirada. "aberto: false" mostra o aviso e não deixa escolher.
  // Pedidos de cada dia fecham no horário de "limite" daquele dia.
  limite: "18:00",
  // Quantas pizzas por noite (inclui a doce). Vazio ou 0 esconde o aviso.
  pizzasPorNoite: 10,
  // Como os dias aparecem nos textos ("Como funciona" e rodapé)
  diasTexto: "sexta e sábado",
  dias: [
    { rotulo: "Sexta",  data: "2026-11-27", aberto: true },
    { rotulo: "Sábado", data: "2026-11-28", aberto: true }
  ],

  // Horários de retirada oferecidos
  horarios: ["19h", "19h15", "19h30", "19h45", "20h", "20h15", "20h30", "20h45", "21h"],

  // Bloqueio automático de horários: desligado (vazio).
  reservas: "https://script.google.com/macros/s/AKfycbxW6cb_vb3eYwEwL03RQz6-5bpDv4Zq67T99XtgQpHo_HT9zDomng-9MF1B3ji6b1Gw/exec",

  endereco: {
    linha: "Rua Farroupilha, 536, subsolo, sala 1, junto à Pousada Relicário",
    // como aparece no rodapé, uma linha por item
    linhas: ["Rua Farroupilha, 536", "Subsolo, sala 1", "Junto à Pousada Relicário"],
    cidade: "Nova Petrópolis/RS",
    mapa: "https://www.google.com/maps/search/?api=1&query=Rua+Farroupilha,+536,+Nova+Petr%C3%B3polis,+RS"
  },

  instagram: "lasinistrapizzas",

  // Legenda embaixo da primeira foto (vazio esconde)

  // Pizzas da semana. A primeira fica com a foto à direita, a segunda à esquerda.
  // "rotulo" aparece acima da foto; "nome" + "script" abaixo dela.
  // "foto" é o nome dos arquivos em img/ (ex.: img/bigode-800.webp)
  // "toalha": topo com toalha xadrez e a pizza da semana num cartão (só quando há 1 destaque)
  topo: "toalha",

  destaques: [
    { id: "bacon-tamaras", foto: "tamaras", nome: "Bacon", script: "com tâmaras",
      pedido: "Bacon com Tâmaras",
      // RASCUNHO: texto para aprovar
      historia: "Desde o século 19, os ingleses servem os devils on horseback, os diabos a cavalo: fruta seca enrolada no bacon. Uma versão clássica leva tâmara recheada com queijo azul. A gente levou isso pra pizza: o doce da tâmara, o sal do bacon, a força do gorgonzola e raspas de limão pra acender tudo.",
      descricao: ["Pizza branca: mozzarella de búfala, gorgonzola, tâmaras e bacon.", "Finalizada com raspas de limão."], preco: 80 }
  ],

  // Frase que aparece logo abaixo do título "Salgadas"
  baseSalgadas: "Todas levam molho de tomate pelati e mozzarella de búfala. A 4 Queijos é branca.",

  // Salgadas (foto: img/sal-*.avif / .webp, meia pizza saindo pela lateral)
  salgadas: [
    { id: "4-queijos", nome: "4 Queijos", preco: 65, foto: "sal-4queijos",
      descricao: ["Mozzarella de búfala, provolone, queijo cremoso e gorgonzola."] },
    { id: "calabresa", nome: "Calabresa", preco: 65, foto: "sal-calabresa",
      descricao: ["Calabresa, cebola roxa e hot honey de limão siciliano."] },
    { id: "sinistra", nome: "Sinistra", preco: 70, foto: "sal-sinistra",
      descricao: ["Berinjela assada, gorgonzola, tomate seco e cebolinha."] },
    { id: "toscana", nome: "Toscana", preco: 70, foto: "sal-toscana",
      descricao: ["Linguiça toscana, cebola roxa e chimichurri de limão siciliano."] }
  ],

  // Doce (foto: img/doce-*.avif / .webp)
  doces: [
    { id: "cheesecake-frutas-vermelhas", foto: "cheesecake", nome: "Cheesecake de frutas vermelhas", pedido: "Cheesecake de Frutas Vermelhas", preco: 50,
      historia: "Quem prova lembra de cheesecake, e faz sentido: os ingredientes são da mesma família. Mas aqui não tem torta, é pizza do começo ao fim. E a geleia é artesanal, feita aqui na cozinha.",
      descricao: ["Cream cheese, geleia artesanal de frutas vermelhas, chocolate branco e butter cookies."] }
  ]
};
