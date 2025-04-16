document.getElementById("fion").addEventListener('click', function() {
    const boop = document.getElementById("boop");
    boop.play();
})


const caret = document.getElementById("caret");


setInterval(() => {
    setTimeout(() => {
        caret.style.display = 'none';
    }, 500);    
    caret.style.display = 'block';
}, 1000);



const opcaoCorreta = 'Nightmare Freddy';
  
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
                         "Nightmarionne", "Jack-O-Bonnie", "Jack-O-Chica", "Funtime Freddy", "Funtime Foxy", "Ballora", "Circus Baby", "Ennard", "Bon-Bon", "Bonnet", "Minireena", "Bidybab", "Rockstar Freddy", "Rockstar Bonnie", "Rockstar Chica", "Rockstar Foxy", "Lefty", "Molten Freddy", "Scrap Baby", "Scraptrap", "Nedd Bear", "Orville Elephant", "Happy Frog", "Mr. Hippo", "Candy Cadet", "Glamrock Freddy", "Glamrock Chica", "Montgomery Gator", "Roxanne Wolf", "DJ Music Man", "The Daycare Attendant (Sun/Moon)"

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



function exibirTelaDeSucesso(params) {
    const telaSucesso = document.getElementById("a");
    telaSucesso.style.display = "block"; // Exibe a tela de sucesso
  
}

function exibirTelaFracasso(params) {
    const telaFracasso = document.getElementById("aa")
    telaFracasso.style.display = 'block';
}

function enviarOpcao(params) {
    if (opcaoSelecionada === opcaoCorreta){
        const yaaay = document.getElementById('yaaay');
        yaaay.play();
        const rsp_errada = document.getElementById('aa');
        rsp_errada.style.display = 'none';
        exibirTelaDeSucesso();
    } else {
        const imagem_rsp_errada = document.getElementById('golden');
        imagem_rsp_errada.style.display = 'block';
        const jumpscare = document.getElementById("jumps-golden");
        jumpscare.play();

    }
    const jumpscare = document.getElementById("jumps-golden");
    jumpscare.onended = function(){
        const imagem_rsp_errada = document.getElementById('golden');
        imagem_rsp_errada.style.display = 'none';
        exibirTelaFracasso();
    
    }
    
}

document.getElementById("icon3").addEventListener('click', function() {
    window.location.href = "guess_the_music.html"
  })
  document.getElementById("icon2").addEventListener('click', function() {
    window.location.href = "guess_t_place.html"
  })
  document.getElementById("icon1").addEventListener('click', function() {
    window.location.href = "guess_t_character.html"
  })
