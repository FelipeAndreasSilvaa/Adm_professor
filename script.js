function selecionarFoto() {
  var inputFoto = document.getElementById('input-foto');
  inputFoto.click();
}

function salvarAlteracoes() {
  var inputFoto = document.getElementById('input-foto');

  // Verificar se uma foto foi selecionada
  if (inputFoto.files && inputFoto.files[0]) {
    var novaImagem = inputFoto.files[0];

    // Salvar a nova imagem localmente (opcional)
    // Aqui você pode implementar a lógica para salvar a imagem onde desejar

    // Atualizar a foto de perfil com a nova imagem selecionada
    var fotoPerfil = document.getElementById('foto-perfil');
    fotoPerfil.src = URL.createObjectURL(novaImagem);
  }
    // var idade = document.getElementById("idade").value;
    // var formacao = document.getElementById("formacao").value;
    // var experiencia = document.getElementById("experiencia").value;


    // Por exemplo, você pode exibir uma mensagem no console com os dados alterados:
    // console.log("Dados alterados:");
    // console.log("Nome: " + nome);
    // console.log("Idade: " + idade);
    // console.log("Formação acadêmica: " + formacao);
    // console.log("Experiência profissional: " + experiencia);

    // Faça algo com os dados inseridos, como enviar para o servidor ou atualizar o perfil na página
    // document.querySelector(".card-text:nth-of-type(1)").innerText = "Idade: " + idade;
    // document.querySelector(".card-text:nth-of-type(2)").innerText = "Formação acadêmica: " + formacao;
    // document.querySelector(".card-text:nth-of-type(3)").innerText = "Experiência profissional: " + experiencia;

    // var perfil = {
    //   idade: idade,
    //   formacao: formacao,
    //   experiencia: experiencia
    // };

    // localStorage.setItem("perfil", JSON.stringify(perfil));

    // Fechar o modal
    $('#modalExemplo').modal('hide');
  }

  // Carregar os dados salvos no armazenamento local
  document.addEventListener("DOMContentLoaded", function() {
    var perfil = JSON.parse(localStorage.getItem("perfil"));

    if (perfil) {
      document.getElementById("idade").value = perfil.idade;
      document.getElementById("formacao").value = perfil.formacao;
      document.getElementById("experiencia").value = perfil.experiencia;
    }
  });

  function adicionarProjeto() {
    // Obtém a descrição do projeto digitada pelo usuário
    var descricao = document.getElementById("descricao").value;
  
    // Cria um novo elemento <li> para o projeto
    var novoProjeto = document.createElement("li");
  
    // Cria um novo elemento <a> para o link do projeto
    var novoLink = document.createElement("a");
    novoLink.href = "#";
    novoLink.textContent = descricao;

    // Adiciona uma linha horizontal após o elemento <li>
    var linhaHorizontal = document.createElement("hr");
    novoProjeto.appendChild(linhaHorizontal);
  
    // Adiciona o elemento <a> como filho do elemento <li>
    novoProjeto.appendChild(novoLink);

     // Pula uma linha após o elemento <li>
    var pularLinha = document.createElement("br");
    novoProjeto.appendChild(pularLinha);
  
    // Cria o botão de edição
    var botaoEdicao = document.createElement("button");
    botaoEdicao.style.cursor = "pointer";
    botaoEdicao.innerHTML = '<i class="fa-sharp fa-solid fa-pen-to-square"></i>';
  
    // Cria o botão de exclusão
    var botaoExclusao = document.createElement("button");
    botaoExclusao.style.cursor = "pointer";
    botaoExclusao.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
  
    // Adiciona os botões como filhos do elemento <li>
    novoProjeto.appendChild(botaoEdicao);
    novoProjeto.appendChild(botaoExclusao);
  

    // Adiciona o novo projeto à lista de projetos
    var listaProjetos = document.getElementById("lista-projetos");
    listaProjetos.appendChild(novoProjeto);
  
    // Limpa o campo de descrição do projeto
    document.getElementById("descricao").value = "";

    // Fechar o modal
    $('#modalExemplo1').modal('hide');
  }
  
  function adicionarAula() {
    // Obtém a descrição do aula digitada pelo usuário
    var descricao = document.getElementById("descrAula").value;
  
    // Cria um novo elemento <li> para o aula
    var novaAula = document.createElement("li");
  
    // Cria um novo elemento <a> para o link do aula
    var novoLink = document.createElement("a");
    novoLink.href = "#";
    novoLink.textContent = descricao;

    // Adiciona uma linha horizontal após o elemento <li>
    var linhaHorizontal1 = document.createElement("hr");
    novaAula.appendChild(linhaHorizontal1);
  
    // Adiciona o elemento <a> como filho do elemento <li>
    novaAula.appendChild(novoLink);

     // Pula uma linha após o elemento <li>
    var pularLinha = document.createElement("br");
    novaAula.appendChild(pularLinha);
  
    // Cria o botão de edição
    var botaoEdicao = document.createElement("button");
    botaoEdicao.style.cursor = "pointer";
    botaoEdicao.innerHTML = '<i class="fa-sharp fa-solid fa-pen-to-square"></i>';
  
    // Cria o botão de exclusão
    var botaoExclusao = document.createElement("button");
    botaoExclusao.style.cursor = "pointer";
    botaoExclusao.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
  
    // Adiciona os botões como filhos do elemento <li>
    novaAula.appendChild(botaoEdicao);
    novaAula.appendChild(botaoExclusao);
  

    // Adiciona o nova aula à lista de projetos
    var listaAulas = document.getElementById("lista-aulas");
    listaAulas.appendChild(novaAula);
  
    // Limpa o campo de descrição do projeto
    document.getElementById("descrAula").value = "";

    // Fechar o modal
    $('#modalExemplo2').modal('hide');
  }
  
  function adicionarVideo() {
    // Obtém a descrição do aula digitada pelo usuário
    var descricao = document.getElementById("descrVideo").value;
  
    // Cria um novo elemento <li> para o aula
    var novoVideo = document.createElement("li");
  
    // Cria um novo elemento <a> para o link do aula
    var novoLink = document.createElement("a");
    novoLink.href = "#";
    novoLink.textContent = descricao;

    // Adiciona uma linha horizontal após o elemento <li>
    var linhaHorizontal1 = document.createElement("hr");
    novoVideo.appendChild(linhaHorizontal1);
  
    // Adiciona o elemento <a> como filho do elemento <li>
    novoVideo.appendChild(novoLink);

     // Pula uma linha após o elemento <li>
    var pularLinha = document.createElement("br");
    novoVideo.appendChild(pularLinha);
  
    // Cria o botão de edição
    var botaoEdicao = document.createElement("button");
    botaoEdicao.style.cursor = "pointer";
    botaoEdicao.innerHTML = '<i class="fa-sharp fa-solid fa-pen-to-square"></i>';
  
    // Cria o botão de exclusão
    var botaoExclusao = document.createElement("button");
    botaoExclusao.style.cursor = "pointer";
    botaoExclusao.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
  
    // Adiciona os botões como filhos do elemento <li>
    novoVideo.appendChild(botaoEdicao);
    novoVideo.appendChild(botaoExclusao);
  

    // Adiciona o nova aula à lista de projetos
    var listaVideo = document.getElementById("lista-videos");
    listaVideo.appendChild(novoVideo);
  
    // Limpa o campo de descrição do projeto
    document.getElementById("descrVideo").value = "";

    // Fechar o modal
    $('#modalExemplo3').modal('hide');
  }

  // Acessar os botões de edição
var botoesEdicao = document.querySelectorAll(".fa-pen-to-square");

// Iterar sobre os botões de edição e adicionar o ouvinte de evento
botoesEdicao.forEach(function(botao) {
  botao.addEventListener("click", function() {
    // Acessar o elemento li pai
    var itemLista = botao.parentNode;

    // Acessar o texto interno do elemento li
    var informacaoAtual = itemLista.textContent.trim();

    // Criar um campo de entrada de texto para a edição
    var campoEdicao = document.createElement("input");
    campoEdicao.type = "text";
    campoEdicao.value = informacaoAtual;

    // Substituir o texto interno pelo campo de edição
    itemLista.innerHTML = "";
    itemLista.appendChild(campoEdicao);
  });
});

document.getElementById("btn-selecionar-foto").addEventListener("click", function() {
  document.getElementById("input-foto").click();
});

document.getElementById("input-foto").addEventListener("change", function(event) {
  var arquivo = event.target.files[0];
  var leitor = new FileReader();

  leitor.onload = function(e) {
    document.getElementById("foto-perfil").src = e.target.result;
  };

  leitor.readAsDataURL(arquivo);
});



