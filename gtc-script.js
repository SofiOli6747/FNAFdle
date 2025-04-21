document = ('Content-Type: application/javascript');

const opcaoCorreta = 'Mangle';
  
let opcaoSelecionada = "";

function mostrarMenu() {


const opcoes = [
    "Freddy Fazbear",
     "Bonnie",
      "Chica", 
      "Foxy",
       "Golden Freddy", 
       "Toy Freddy",
        "Toy Bonnie",
         "Toy Chica",
          "Withered Freddy",
           "Withered Bonnie",
            "Withered Chica",
             "Withered Foxy",
              "Mangle",
               "Balloon Boy (BB)",
                "Balloon Girl (JJ)", 
                "The Puppet",
                 "Phantom Freddy", 
                 "Phantom Chica", 
                 "Phantom Foxy", 
                 "Phantom BB", 
                 "Phantom Mangle",
                  "Phantom Puppet"
                  , "Springtrap", 
                  "Nightmare Freddy",
                   "Nightmare Bonnie",
                    "Nightmare Chica",
                     "Nightmare Foxy",
                      "Nightmare Fredbear",
                       "Nightmare", 
                       "Plushtrap", 
                       "Nightmare Mangle",
                        "Nightmare Balloon Boy",
                         "Nightmarionne", "Jack-O-Bonnie", 
                         "Jack-O-Chica",
                          "Funtime Freddy", 
                          "Funtime Foxy", 
                          "Ballora", 
                          "Circus Baby",
                           "Ennard", 
                           "Bon-Bon", 
                           "Bonnet", 
                           "Minireena",
                           "Bidybab", 
                           "Rockstar Freddy", 
                           "Rockstar Bonnie",
                            "Rockstar Chica",
                             "Rockstar Foxy",
                              "Lefty", 
                              "Molten Freddy",
                               "Scrap Baby",
                               "Scraptrap", 
                               "Nedd Bear",
                                "Orville Elephant",
                                 "Happy Frog", 
                                 "Mr. Hippo",
                                  "Candy Cadet",
                                   "Glamrock Freddy",
                                    "Glamrock Chica", "Montgomery Gator", "Roxanne Wolf", "DJ Music Man", "The Daycare Attendant (Sun/Moon)"

];
  
  const inputTexto = document.getElementById('typebox');
  const menuOpcoes = document.getElementById('menu');
  const letraDigitada = inputTexto.value.toLowerCase();

  // Filtra as opções que começam com a letra digitada
  const opcoesFiltradas = opcoes.filter(opcao => opcao.toLowerCase().startsWith(letraDigitada));

  // Agrupar as opções por inicial
  const grupos = {};

  // Organiza as opções filtradas por inicial
  opcoesFiltradas.forEach(opcao => {
      const inicial = opcao[0].toLowerCase();
      if (!grupos[inicial]) {
          grupos[inicial] = [];
      }
      grupos[inicial].push(opcao);
  });

  // Se houver opções filtradas, exibe o menu, caso contrário, esconde
  if (letraDigitada.length > 0 && opcoesFiltradas.length > 0) {
      menuOpcoes.innerHTML = ''; // Limpa o menu antes de adicionar as novas opções
      

      // Cria grupos de opções com base na inicial
      Object.keys(grupos).forEach(inicial => {
          const grupoDiv = document.createElement('div');
          grupoDiv.classList.add('grupoOpcao');

          // Adiciona as opções do grupo
          grupos[inicial].forEach(opcao => {
              const opcaoDiv = document.createElement('div');
              opcaoDiv.textContent = opcao;

              // Adiciona evento de clique na opção para fechar o menu
              opcaoDiv.onclick = () => {
                opcaoSelecionada = opcao;
                inputTexto.value = opcao; // Preenche o input com a opção selecionada
                menuOpcoes.style.display = 'none'; // Fecha o menu
            };


            grupoDiv.appendChild(opcaoDiv);
          });

          // Adiciona o grupo de opções ao menu
          menuOpcoes.appendChild(grupoDiv);
      });

      menuOpcoes.style.display = 'block';  // Mostra o menu
  } else {
      menuOpcoes.style.display = 'none';  // Esconde o menu
  }
}

const A = document.getElementById("enter").addEventListener('click', function() { });

let contador = 0;


function mostrarOpcao(tipoBotao) {
    contador++;
  
    const select = opcaoSelecionada;
    const valorSelecionado = select;
  
    if (tipoBotao === A){
      document.getElementById("caixa" + contador).textContent += valorSelecionado;
      document.getElementById("caixa" + contador).style.backgroundColor = 'red';
    } 
    
    if (contador === 4 && valorSelecionado !== opcaoCorreta) {
        document.getElementById('img' + contador).src = 'imagens/animatronics_guessthecharacter/mangle.png'
        const mangle_js_sound = document.getElementById('mangle_scream');
        mangle_js_sound.play();
        const mangle_js = document.getElementById('mangle');
        mangle_js.style.display = 'block'
        const next = document.getElementById("next")
        next.style.display = 'block';
    }
    console.log(valorSelecionado)
    console.log(document.getElementById("caixa4").textContent)

  }


//const imgs = ['imagens/animatronics_guessthecharacter/maxresdefault.jpg, imagens/animatronics_guessthecharacter/maxresdefault (3).jpg, imagens/animatronics_guessthecharacter/maxresdefault (2).jpg, imagens/animatronics_guessthecharacter/maxresdefault (1).jpg'
//]

function enviarOpcao(params) {
    mostrarOpcao();
  
    var imagem = document.getElementById('img1')
  
    if (opcaoSelecionada === opcaoCorreta){
        document.getElementById('img' + contador).src = 'imagens/animatronics_guessthecharacter/mangle.png'

        document.getElementById("caixa" + contador).style.backgroundColor = 'green';
      
      const tela_r_correta = document.getElementById("a");
      tela_r_correta.style.display = 'block';

      const yaaay = document.getElementById('yaaay');
      yaaay.play();
    } else {
        document.getElementById('img' + contador).style.display = 'none';
    }
  
  }

  function jumpscare(params) {
    const golden_jumpscare_img = document.getElementById('golden');
    golden_jumpscare_img.style.display = 'block';
    const golden_jumpscare = document.getElementById('golden_js');
    golden_jumpscare.play();
    
}



  function catchFish(params) {
    const oldman = document.getElementById("oldman");
    const oldman_fish = document.getElementById("oldman-fish");
    oldman.style.display = 'block'
    oldman_fish.style.display = 'block';

    verificarPonto();
   
}

const oldman_fish = document.getElementById("oldman-fish");

document.addEventListener("keydown", function(event) {
    if (event.key === "c") { // Verifica se a tecla pressionada foi "A"
        verificarPonto();
    }
})

function verificarPonto(params) {
    var posicaoImagem = oldman_fish.getBoundingClientRect().left;

    var limiteEsquerdo = 635;
    var limiteDireito = 660;

    if (posicaoImagem >= limiteEsquerdo && posicaoImagem <= limiteDireito) {
        const next = document.getElementById("next")
        next.style.display = 'block';
    } else {
        const next = document.getElementById("next")
        next.style.display = 'none';
    }

    console.log(posicaoImagem);
}


document.getElementById("icon3").addEventListener('click', function() {
    window.location.href = "guess_the_quote.html"
  })
  document.getElementById("icon2").addEventListener('click', function() {
    window.location.href = "guess_the_music.html"
  })
  document.getElementById("icon1").addEventListener('click', function() {
    window.location.href = "guess_t_place.html"
  })
