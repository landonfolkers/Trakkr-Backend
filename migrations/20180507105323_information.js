exports.up = function (knex, Promise) {
    return knex.schema.createTable('information', table => {
        table.increments('id').primary()
        table.text('userNumber')
        table.text('number1')
        table.text('number2')
        table.text('number3')
        table.text('number4')
        table.text('number5')
        table.text('message1')
        table.text('message2')
        table.text('message3')
    })
}
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('information')
  }
