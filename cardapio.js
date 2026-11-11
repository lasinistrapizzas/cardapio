/* =========================================================
   LA SINISTRA · CARDÁPIO DA SEMANA
   Este é o único arquivo que muda toda semana.
   Troca textos, preços e datas aqui. O layout não precisa ser tocado.
   ========================================================= */

window.CARDAPIO = {
  // WhatsApp que recebe os pedidos (55 + DDD + número, só dígitos)
  whatsapp: "5551999442176",

  // Período: texto completo (rodapé) e curto (selo do topo)
  periodo: "Cardápio de 13 a 15 de novembro",
  periodoCurto: "Cardápio de 13 a 15 nov",

  // Dias de retirada. "aberto: false" mostra o aviso e não deixa escolher.
  // Pedidos de cada dia fecham no horário de "limite" daquele dia.
  limite: "18:00",
  dias: [
    { rotulo: "Sexta",   data: "2026-11-13", aberto: true },
    { rotulo: "Sábado",  data: "2026-11-14", aberto: false,
      aviso: "Sábado não rola. Acabou a massa. Sexta ou domingo?" },
    { rotulo: "Domingo", data: "2026-11-15", aberto: true }
  ],

  // Horários de retirada oferecidos
  horarios: ["19h", "19h15", "19h30", "19h45", "20h", "20h15", "20h30", "20h45", "21h"],

  // Bloqueio automático de horários: desligado (vazio).
  // Os horários são confirmados manualmente pelo WhatsApp.
  reservas: "",

  endereco: {
    linha: "Rua Canela, 323, Pousada da Neve",
    cidade: "Nova Petrópolis/RS",
    mapa: "https://www.google.com/maps/search/?api=1&query=Rua+Canela,+323,+Nova+Petr%C3%B3polis,+RS"
  },

  instagram: "lasinistrapizzas",

  // Pizza da semana (foto: img/destaque-*.avif / .webp)
  destaque: {
    id: "tomate-confit",
    nome: "Tomate Confit",
    script: "com pesto",
    pedido: "Tomate Confit com Pesto",
    descricao: [
      "Molho de tomate pelati,",
      "mozzarella de búfala,",
      "tomate confitado com alho e alecrim",
      "e molho pesto da casa.",
      "Finalizada com manjericão fresco."
    ],
    preco: 80
  },

  salgadas: [
    { id: "4-queijos", nome: "4 Queijos", preco: 65,
      descricao: ["Pizza branca, mozzarella de búfala, provolone, queijo cremoso e gorgonzola."] },
    { id: "calabresa", nome: "Calabresa", preco: 65,
      descricao: ["Molho de tomate pelati, mozzarella de búfala, calabresa fatiada e cebola roxa.",
                  "Finalizada com hot honey de limão siciliano."] },
    { id: "sinistra", nome: "Sinistra", preco: 70,
      descricao: ["Molho de tomate pelati, mozzarella de búfala, berinjela assada, gorgonzola e tomate seco.",
                  "Finalizada com cebolinha."] },
    { id: "toscana", nome: "Toscana", preco: 70,
      descricao: ["Molho de tomate pelati, mozzarella de búfala, linguiça toscana e cebola roxa.",
                  "Finalizada com chimichurri de limão siciliano."] }
  ],

  // Doce (foto: img/doce-*.avif / .webp)
  doces: [
    { id: "chocolate-morango", nome: "Chocolate", nome2: "com morango",
      pedido: "Chocolate com Morango", preco: 50,
      descricao: ["Ganache de chocolate meio amargo, gotas de chocolate branco e morangos."] }
  ]
};
