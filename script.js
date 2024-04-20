let time = 2500;
let currentImageIndex = 0;
let img = document.querySelectorAll("#slider img");
let max = img.length;

function nextImage() {
  img[currentImageIndex].style.opacity = 0;
  currentImageIndex++;
  if (currentImageIndex >= max) {
    currentImageIndex = 0;
  }
  img[currentImageIndex].style.opacity = 1;
}

function start() {
  img[currentImageIndex].style.opacity = 1; // Mostra a primeira imagem
  setInterval(nextImage, time);
}

window.addEventListener("load", start);

//time = 4000;: Esta linha define a variável time com o valor de 4000 milissegundos, que será usado como o intervalo entre as transições de imagens no slider.
//currentImageIndex = 0;: Inicializa a variável currentImageIndex com o valor 0. Essa variável será usada para rastrear o índice da imagem atual no array imagensDeTransicao.
//imagensDeTransicao = document.querySelectorAll("#slider img");: Esta linha seleciona todas as imagens dentro do elemento HTML com o ID "slider" e armazena-as em uma NodeList na variável imagensDeTransicao.
//max = imagensDeTransicao.length;: Define a variável max como o número total de imagens encontradas dentro do slider. Isso é útil para determinar quando alcançamos o final do conjunto de imagens e precisamos voltar ao início.
//function nextImage() { ... }: Esta é a função responsável por avançar para a próxima imagem no slider. Aqui está o que acontece dentro dela:
//imagensDeTransicao[currentImageIndex].style.opacity = 0;: Define a opacidade da imagem atual como 0, fazendo-a desaparecer gradualmente.
//currentImageIndex++;: Incrementa o índice da imagem atual para avançar para a próxima imagem.
//if (currentImageIndex >= max) { currentImageIndex = 0; }: Verifica se o índice atual excede o número máximo de imagens. Se isso acontecer, redefine o índice para 0, reiniciando o ciclo do slider.
//imagensDeTransicao[currentImageIndex].style.opacity = 1;: Define a opacidade da próxima imagem como 1, fazendo-a aparecer gradualmente.
//Essencialmente, esta função avança para a próxima imagem no slider, definindo a opacidade da imagem atual como 0 e a próxima imagem como 1, criando uma transição suave entre elas.






