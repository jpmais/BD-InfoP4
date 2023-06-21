exports.seed = function(knex) {
    return knex('tb_tarefas')
      .del()
      .then(function() {
        return knex('tb_tarefas').insert([
          { Descicao_Tarefa: 'Estudo do bom' , Status_Tarefa: 'feito', Responsavel_Tarefa: 'Reginalda', Nome_Proj: 'trabalho'},
          { Descicao_Tarefa: 'Rua pra asfaltar' , Status_Tarefa: 'fazendo', Responsavel_Tarefa: 'Paulo', Nome_Proj: 'Asfaltobom'},
        ]);
      })
  };