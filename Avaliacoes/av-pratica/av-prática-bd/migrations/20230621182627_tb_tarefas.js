/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('tb_tarefas', table => {
        table.string('Descicao_Tarefa').primary()
        table.string('Status_Tarefa').notNull()
        table.string('Responsavel_Tarefa').notNull()
        table.string('Nome_Proj').notNull()
        table.foreign('Nome_Proj').references('tb_projetos.Nome_Projeto')

    }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tb_tarefas')
};
