const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  }
});

class Tarefas {
  static async inserirTarefas(tarefa) {
    try {
      const [id] = await database('tb_tarefas').insert(tarefa);
      console.log('tarefa inserido com ID:', id);
    } catch (error) {
      console.error('Erro ao inserir a tarefa', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarTarefas(Descicao_Tarefa, tarefa) {
    try {
      const result = await database('tb_tarefas').where({ Descicao_Tarefa }).update(tarefa);
      console.log('tarefa atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar a tarefa:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterTarefas(Descicao_Tarefa) {
    try {
      const livro = await database('tb_tarefas').where({ Descicao_Tarefa }).first();
      console.log('tarefa encontrado:', livro);
    } catch (error) {
      console.error('Erro ao obter a tarefa:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirTarefas(Descicao_Tarefa) {
    try {
      const result = await database('tb_tarefas').where({ Descicao_Tarefa }).del();
      console.log('tarefa excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir a tarefa:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Tarefas;