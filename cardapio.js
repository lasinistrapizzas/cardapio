/* =========================================================
   LA SINISTRA · CARDÁPIO DA SEMANA
   Este é o único arquivo que muda toda semana.
   Troca textos, preços e datas aqui. O layout não precisa ser tocado.
   ========================================================= */

window.CARDAPIO = {
  // WhatsApp que recebe os pedidos (55 + DDD + número, só dígitos)
  whatsapp: "5551999442176",

  // Período: texto completo e curto (selo do topo)
  periodo: "Cardápio de 19 a 21 de novembro",
  periodoCurto: "Cardápio de 19 a 21 nov",

  // Dias de retirada. "aberto: false" mostra o aviso e não deixa escolher.
  // Pedidos de cada dia fecham no horário de "limite" daquele dia.
  limite: "18:00",
  // Quantas pizzas por noite (inclui a doce). Vazio ou 0 esconde o aviso.
  pizzasPorNoite: 10,
  // Como os dias aparecem nos textos ("Como funciona" e rodapé)
  diasTexto: "quinta, sexta e sábado",
  dias: [
    { rotulo: "Quinta", data: "2026-11-19", aberto: true },
    { rotulo: "Sexta",  data: "2026-11-20", aberto: true },
    { rotulo: "Sábado", data: "2026-11-21", aberto: true }
  ],

  // Horários de retirada oferecidos
  horarios: ["19h", "19h15", "19h30", "19h45", "20h", "20h15", "20h30", "20h45", "21h"],

  // Bloqueio automático de horários: desligado (vazio).
  reservas: "",

  endereco: {
    linha: "Rua Farroupilha, 536, subsolo, sala 1, junto à Pousada Relicário",
    // como aparece no rodapé, uma linha por item
    linhas: ["Rua Farroupilha, 536", "Subsolo, sala 1", "Junto à Pousada Relicário"],
    cidade: "Nova Petrópolis/RS",
    mapa: "https://www.google.com/maps/search/?api=1&query=Rua+Farroupilha,+536,+Nova+Petr%C3%B3polis,+RS"
  },

  instagram: "lasinistrapizzas",

  // Pizzas da semana. A primeira fica com a foto à direita, a segunda à esquerda.
  // "rotulo" aparece acima da foto; "nome" + "script" abaixo dela.
  // "foto" é o nome dos arquivos em img/ (ex.: img/bigode-800.webp)
  destaques: [
    { id: "bigode", foto: "bigode", rotulo: "do Bigode", nome: "Fraldinha", script: "ao malbec",
      pedido: "Fraldinha ao Malbec",
      historia: "Fraldinha (ou vazio) é uma carne que fica deliciosa na panela, com excelente sabor e textura. O vinho combina super, traz aroma e cor. A rúcula traz um contraste marcante e o parmesão, o toque final de sabor.",
      descricao: ["Molho de tomate pelati, mozzarella de búfala, fraldinha preparada na panela de pressão com vinho malbec.",
                  "Finalizada com rúcula e parmesão fresco."],
      preco: 80 },
    { id: "dani", foto: "dani", rotulo: "da Dani", nome: "Cebola caramelizada", script: "com gorgonzola",
      pedido: "Cebola Caramelizada com Gorgonzola",
      // RASCUNHO: trocar pelo texto da Dani
      historia: "Eu sempre gostei de doce e salgado na mesma mordida. A cebola carameliza no mel, o gorgonzola dá personalidade e as nozes, a crocância.",
      descricao: ["Molho de tomate pelati, mozzarella de búfala, cebola caramelizada no mel e gorgonzola.",
                  "Finalizada com nozes pecan."],
      preco: 80 }
  ],

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
    { id: "maracuja-brigadeiro", nome: "Maracujá com brigadeiro", pedido: "Maracujá com Brigadeiro", preco: 50,
      descricao: ["Ganache de maracujá, brigadeiro de chocolate meio amargo e calda de maracujá."] }
  ]
};
