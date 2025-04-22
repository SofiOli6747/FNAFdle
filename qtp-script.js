document = ('Content-Type: application/javascript');

const opcaoCorreta = 'Party Room 1';
  
let opcaoSelecionada = "";

function mostrarMenu() {


const opcoes = [
    "Pirate Cove (FNAF 1)",
"Escritório (FNAF1)",
"Escritório (FNAF2)",
"Escritório (FNAF3)",
"Escritório (FNAF6)",
"Show Stage (FNAF1)",
"Show Stage (FNAF2)",
"Salão principal (FNAF2)",
"Parts & Service (FNAF SL)",
"Parts & Service",
"Fredbear's Family Diner",
"Closet (FNAF4)",
"Auditório Funtime",
"Bathrooms",
"Backstage",
"Back alley (FNAF6)",
"Cam 01",
"Cam 02",
"Cam 03",
"Cam 04",
"Cam 05",
"Cam 06",
"Cam 07",
"Cam 08",
"Cam 09",
"Cam 10",
"Bed",
"Kid's Cove",
"Prize Corner",
"House",
"Circus Baby's Entertainment and Rental",
"Circus Control",
"Right Hallway",
"Left Hallway",
"Kitchen",
"Primary Control Module",
"Elevator",
"Fazbear Hills",
"Fredbear's Family Diner",
"Galeria Circus",
"Ballora Gallery",
"Bedroom (FNAF4)",
"Party Room 1",
"Party Room 2",
"Party Room 3",
"Party Room 4",
"Scooping Room",
"Breaker Room",
"Private Room",
"Game Area",
"Dining Area"

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
let contador2 = 1;

function mostrarOpcao(tipoBotao) {
    const inputTexto = document.getElementById('typebox');
    contador++;
  
    const select = opcaoSelecionada;
    const valorSelecionado = select;
  
    if (tipoBotao === A){
        document.getElementById("caixa" + contador).textContent += valorSelecionado;
        document.getElementById("caixa" + contador).style.backgroundColor = 'red';
    } 
    
    if (contador === 4 && valorSelecionado !== opcaoCorreta) {
        let estilosOriginais = new Map();
        document.querySelectorAll("*").forEach(elemento => {
            estilosOriginais.set(elemento, {
                backgroundColor: elemento.style.backgroundColor,
                color: elemento.style.color
            });

            elemento.style.backgroundColor = "#000000"; // Azul
            elemento.style.color = "black";
        });
        const next = document.getElementById("next")
        next.style.display = 'none';
        setTimeout(() => {
            const tela_r_errada = document.getElementById('aa');
            tela_r_errada.style.display = 'block'
            const freddy = document.getElementById('aaa');
            freddy.play();
            const music_box = document.getElementById('music-box-freddy');
            music_box.play();
        }, 3000);

        const caixas = document.getElementById('caixas');
        caixas.style.display = 'none';
        const typebox = document.getElementById('typebox');
        typebox.style.display = 'none';
        const enter = document.getElementById('enter');
        enter.style.display = 'none';

        const music_box = document.getElementById('music-box-freddy');
        music_box.onended = function() {
            const tela_r_errada = document.getElementById('aa');
            tela_r_errada.style.display = 'none'
            setTimeout(() => {
                const js_freddy = document.getElementById('freddy_js');
                js_freddy.style.display = 'block'
                const js_sound = document.getElementById("js_sound");
                js_sound.play();
            }, 2000);
        }
        const js_sound = document.getElementById("js_sound");
        js_sound.onended = function() {
            const js_freddy = document.getElementById('freddy_js');
            js_freddy.style.display = 'none'
            const next = document.getElementById("next")
            next.style.display = 'block';
            function restaurarCores() {
                estilosOriginais.forEach((valores, elemento) => {
                    elemento.style.backgroundColor = valores.backgroundColor;
                    elemento.style.color = valores.color;
                });
            }
            restaurarCores();
            
        }

    }

  }



//const imgs = [
    'imagens/fnaf places/Captura de tela 2025-04-16 19534 (1)a.png', 
    'imagens/fnaf places/Captura de tela 2025-04-16 19534 (2).png', 
    'imagens/fnaf places/Captura de tela 2025-04-16 19534 (3).png'
//]

function enviarOpcao(params) {
    mostrarOpcao();

    const aaaaa = document.getElementById('img' + contador).getBoundingClientRect()
    console.log(aaaaa);
  
    var imagem = document.getElementById('img1')
  
    if (opcaoSelecionada === opcaoCorreta){
        document.getElementById('img' + contador).src = 'imagens/fnaf places/Party_Room_1.webp'

        document.getElementById("caixa" + contador).style.backgroundColor = 'green';
      
      const tela_r_correta = document.getElementById("a");
      tela_r_correta.style.display = 'block';

      const yaaay = document.getElementById('yaaay');
      yaaay.play();
    } else {
        //document.getElementById('img' + contador).src = imgs;
        document.getElementById('img' + contador).style.display = 'none';
    }
  
  }

function jumpscare(params) {
    const golden_jumpscare_img = document.getElementById('golden');
    golden_jumpscare_img.style.display = 'block';
    const golden_jumpscare = document.getElementById('golden_js');
    golden_jumpscare.play();
    
}
const golden_jumpscare = document.getElementById('golden_js');

golden_jumpscare.onended = function() {
    const golden_jumpscare_img = document.getElementById('golden');
    golden_jumpscare_img.style.display = 'none';
}


document.getElementById("parrot").addEventListener('click', function(){
    const parrot = document.getElementById("parrot")
    parrot.style.display = 'none';
    const next = document.getElementById("next")
    next.style.display = 'block';
})

function show_parrot(params) {
    const parrot = document.getElementById("parrot")
    const raah = document.getElementById("raah")
    parrot.style.display = 'block';
    raah.play();

    verificarSaida();
}

const parrot = document.getElementById("parrot")

function verificarSaida() {
    var larguraTela = window.innerWidth;
    var posicaoImagem = parrot.getBoundingClientRect().left + parrot.clientWidth;

    if (posicaoImagem > larguraTela) {
        const foxy_js = document.getElementById('foxy');
        const foxy_js_sound = document.getElementById('js6');
        foxy_js.style.display = 'block'
        foxy_js_sound.play();
        parrot.style.animation = 'none';
        parrot.style.left = '1600px';
        
        
    }
    const foxy_js_sound = document.getElementById('js6');
    foxy_js_sound.onended = function(){
        const foxy_js = document.getElementById('foxy');
        foxy_js.style.display = 'none'
        const next = document.getElementById("next")
        next.style.display = 'block';
    }
}

document.getElementById("a").addEventListener('click', function(){
    verificarSaida();
})

document.getElementById("icon3").addEventListener('click', function() {
    window.location.href = "guess_the_quote.html"
  })
  document.getElementById("icon2").addEventListener('click', function() {
    window.location.href = "guess_the_music.html"
  })
  document.getElementById("icon1").addEventListener('click', function() {
    window.location.href = "guess_t_character.html"
  })

