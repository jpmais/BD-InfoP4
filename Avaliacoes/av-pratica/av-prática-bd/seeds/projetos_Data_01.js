exports.seed = function(knex) {
    return knex('tb_projetos')
      .del()
      .then(function() {
        return knex('tb_projetos').insert([
          { Nome_Projeto: 'Quadra', descricao_Projeto: 'fazer quadra', Prazo_Projeto: '12/03/2023' },
          { Nome_Projeto: 'Rua', descricao_Projeto: 'Asfaltar rua', Prazo_Projeto: '18/09/2023' },
        ]);
      })
  };