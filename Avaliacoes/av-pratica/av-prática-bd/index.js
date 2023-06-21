const { atualizarProjetos } = require('./models/projetos');
const projetos = require('./models/projetos');
const { atualizarTarefas } = require('./models/tarefas');
const tarefas = require('./models/tarefas');

const ExemploTarefas = {
    Descicao_Tarefa: 'Estudar', 
    Status_Tarefa: 'Fazer',
    Responsavel_Tarefa: 'Joao', 
    Nome_Proj: 'estudo'
  };

  const AtualizarTarefas = {
    Descicao_Tarefa: 'Fazer um banco de dados', 
    Status_Tarefa: 'Fazendo',
    Responsavel_Tarefa: 'Joao', 
    Nome_Proj: 'estudo2'
  };
   
//console.log('inserindo')
//tarefas.inserirTarefas(ExemploTarefas)
//console.log('lendo')
//tarefas.obterTarefas('Estudar')

//console.log('Atualizando a tarefa pelo nome');
//tarefas('Estudar', atualizarTarefas);

//console.log('Obtendo a tarefa atualizado');
//trefas.obterTarefas('Fazer um banco de dados');

//console.log('Excluindo a tarefa pelo nome');
//tarefas.excluirTarefas('Fazer um banco de dados');

const ExemploProjetos = {
    Nome_Proj: 'Banco de Dados', 
    Descricao_Proj: 'Prova de banco de dados',
    Prazo_Proj: '21/06/2023', 
  };

  const AtualizarProjetos = {
    Nome_Proj: 'Banco de Dados 2', 
    Descricao_Proj: 'Prova de banco de dados 2',
    Prazo_Proj: '29/06/2023', 
  };
  //console.log('inserindo')
//projetos.inserirProjetos(Exemploprojetos)
//console.log('lendo')
//projetos.obterProjetos('Estudar')

//console.log('Atualizando o  projeto pelo nome');
//projetos('Estudar', atualizarProjetos);

//console.log('Obtendo o projeto atualizado');
//projetos.obterProjetos('Fazer um banco de dados');

//console.log('Excluindo o projeto pelo nome');
//projetos.excluirProjetos('Fazer um banco de dados');
