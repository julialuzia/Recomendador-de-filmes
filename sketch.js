//animação, família, fantasia, ação, super-herói, ficção científica, musical, aventura, romance, drama, mistério, história, guerra, thriller

// Irmão Urso, LIVRE, animação, fantasia, família, 
// Homem-Aranha: Sem Volta para Casa, 12, super-herói, ação
// Harry Potter e o Prisioneiro de Azkaban, 14, fantasia, aventura
// Matrix, 14, ficção científica, ação
// Wonka, LIVRE, aventura, fantasia, musical
// Tá dando onda, LIVRE, animação, comédia
// Adoráveis mulheres, 10, drama, romance
// Duna, 14, ficção científica, drama
// Até o Último Homem, 16, drama, história, guerra
// Sol da Meia-Noite, 12, drama, romance
// A Culpa é das Estrelas, 12, drama, romance
// A Origem, 14, ação, ficção científica, mistério
// Interestelar, 16, aventura, drama, ficção científica
// La La Land: Cantando Estações, 12, musical, romance, drama
// Clube da Luta, 18, drama, thriller





let campoIdade;
let campoFantasia;
let campoAnimação;
let campoAção;
let campoHerois;
let campoFicçãocientifica;
let campoMusical;
let campoAventura;
let campoRomance;
let campoDrama;
let campoMisterio;
let campoHistoria;
let campoThriller;

function setup() {
  createCanvas(700, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("?");
  campoFantasia = createCheckbox("Fantasia");
  campoAnimação = createCheckbox("Animação");
  campoAção = createCheckbox("Ação");
  campoHerois = createCheckbox("Super-heróis");
  campoFicçãocientifica = createCheckbox("Ficção científica");
  campoMusical = createCheckbox("Musical");
  campoAventura = createCheckbox("Aventura");
  campoRomance = createCheckbox("Romance");
  campoDrama = createCheckbox("Drama");
  campoMisterio = createCheckbox("Mistério");
  campoHistoria = createCheckbox("História");
  campoThriller = createCheckbox("Thriller");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  textAlign(CENTER, CENTER);
  fill(128, 128, 0);
  textSize(35);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if (idade >= 18) {
    if (campoFantasia.checked()) return "Harry Potter e o Prisioneiro de Azkaban";
    if (campoAnimação.checked()) return "Tá dando onda";
    if (campoAção.checked()) return "Matrix";
    if (campoHerois.checked()) return "Homem-Aranha: Sem Volta para Casa";
    if (campoFicçãocientifica.checked()) return "Interestelar";
    if (campoMusical.checked()) return "La La Land: Cantando Estações";
    if (campoAventura.checked()) return "Wonka";
    if (campoRomance.checked()) return "A Culpa é das Estrelas";
    if (campoDrama.checked()) return "Adoráveis mulheres";
    if (campoMisterio.checked()) return "A Origem";
    if (campoHistoria.checked()) return "Até o Último Homem";
    if (campoThriller.checked()) return "Clube da Luta";
  } else if (idade >= 16) {
    if (campoHistoria.checked()) return "Até o Último Homem";
    if (campoFicçãocientifica.checked()) return "Interestelar";
    if (campoDrama.checked()) return "Duna";
    if (campoAção.checked()) return "A Origem";
    if (campoHerois.checked()) return "Homem-Aranha: Sem Volta para Casa";
    if (campoMusical.checked()) return "La La Land: Cantando Estações";
     if (campoFantasia.checked()) return "Harry Potter e o Prisioneiro de Azkaban";
    if (campoAnimação.checked()) return "Irmão Urso";
    if (campoAventura.checked()) return "Wonka";
    if (campoRomance.checked()) return "Sol da Meia-Noite";
    if (campoMisterio.checked()) return "A Origem";
  } else if (idade >= 14) {
    if (campoFantasia.checked()) return "Harry Potter e o Prisioneiro de Azkaban";
    if (campoFicçãocientifica.checked()) return "A Origem";
    if (campoAção.checked()) return "Matrix";
    if (campoDrama.checked()) return "Duna";
    if (campoAventura.checked()) return "Wonka";
    if (campoFantasia.checked()) return "Irmão Urso";
     if (campoAnimação.checked()) return "Tá dando onda";
    if (campoMusical.checked()) return "La La Land: Cantando Estações";
    if (campoHerois.checked()) return "Homem-Aranha: Sem Volta para Casa";
    if (campoDrama.checked()) return "A Culpa é das Estrelas";
    if (campoRomance.checked()) return "Sol da Meia-Noite";
    if (campoMisterio.checked()) return "A Origem";
    if (campoHistoria.checked()) return "Até o Último Homem";
  } else if (idade >= 12) {
    if (campoDrama.checked()) return "A Culpa é das Estrelas";
    if (campoRomance.checked()) return "Sol da Meia-Noite";
    if (campoMusical.checked()) return "La La Land: Cantando Estações";
    if (campoHerois.checked()) return "Homem-Aranha: Sem Volta para Casa";
    if (campoFantasia.checked()) return "Harry Potter e o Prisioneiro de Azkaban";
  } else if (idade >= 10) {
    if (campoFantasia.checked()) return "Irmão Urso";
    if (campoDrama.checked()) return "Adoráveis mulheres";
    if (campoAnimação.checked()) return "Tá dando onda";
    if (campoMusical.checked()) return "Wonka";
    if (campoAventura.checked()) return "Harry Potter e o Prisioneiro de Azkaban";
  } else {
    return "Digite sua idade";
  }
  return "Escolha outro gênero";
}
