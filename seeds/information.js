exports.seed = function (knex, Promise) {
  return knex('information').del()
    .then(function () {
      return knex('information').insert([
        { id: 1, identity: 'Identity1', number1: '+14028815965', number2: '+14028815965', number3: '+14028815965', number4: '+14028815965', number5: '+14028815965', message1: 'message 1', message2: 'message 2', message3: 'message 3' },
        { id: 2, identity: 'Identity2', number1: '+14028815965', number2: '+14028815965', number3: '+14028815965', number4: '+14028815965', number5: '+14028815965', message1: 'message 1', message2: 'message 2', message3: 'message 3' },
        { id: 3, identity: 'Identity3', number1: '+14028815965', number2: '+14028815965', number3: '+14028815965', number4: '+14028815965', number5: '+14028815965', message1: 'message 1', message2: 'message 2', message3: 'message 3' },
      ])
    })
    .then(() => knex.raw("ALTER SEQUENCE information_id_seq RESTART WITH 4"))
}
