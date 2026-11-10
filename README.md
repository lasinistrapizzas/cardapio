# La Sinistra · cardápio on-line

Página estática. Não precisa de servidor nem de build.

## Publicar no GitHub Pages
1. Cria um repositório **público** (ex.: `cardapio`) e sobe todo o conteúdo desta pasta (Add file > Upload files).
2. Settings > Pages > Source: `Deploy from a branch`, branch `main`, pasta `/ (root)`. Salva.
3. Em 1 ou 2 minutos o link fica em `https://SEU-USUARIO.github.io/cardapio/`.
4. Abre `index.html` e troca as duas linhas com `lasinistrapizzas.github.io/cardapio/` pelo teu link real (og:image e og:url). Sem isso a prévia do link no WhatsApp não mostra a foto.

## Reservas de horário (planilha Google)
O código está em `cardapio on-line/reservas-apps-script.gs` (fora da pasta do site, de propósito).
1. Cria uma planilha nova no Google Sheets (ex.: "La Sinistra · Pedidos").
2. Extensões > Apps Script. Apaga o que estiver lá, cola o conteúdo do `.gs` e salva.
3. Implantar > Nova implantação > tipo **App da Web**. Executar como: **Eu**. Quem pode acessar: **Qualquer pessoa**. Implantar e autorizar.
4. Copia o link que termina em `/exec` e cola em `reservas: ""` no `cardapio.js`.
5. Cada pedido vira uma linha na aba "Pedidos". Para liberar um horário, escreve `cancelado` na coluna Status.
- Quantos pedidos cabem por horário: `PEDIDOS_POR_HORARIO` no topo do `.gs` (hoje 1).
- Se mudar o código depois, use Implantar > Gerenciar implantações > editar > Nova versão (assim o link continua o mesmo).

## Atualizar toda semana
- Textos, preços, datas, dias fechados e horários: só no `cardapio.js`.
- Fotos: substituir os arquivos em `img/` mantendo os mesmos nomes (`destaque-*` e `doce-*`), e o `og.jpg` da prévia.
- A cada semana, limpa (ou arquiva) as linhas da planilha.
- Depois de 18h do último dia, a página mostra sozinha "Pedidos desta semana encerrados".

## Arquivos
- `index.html` layout, estilo e lógica do pedido
- `cardapio.js` conteúdo da semana
- `fonts/` Cherolina e Playfair Display SC (woff2)
- `img/` fotos em AVIF (com WebP de reserva), prévia do link e ícones
