const database = require("./database-connection")

module.exports = {
    list() {
        return database.select("*").from('information')
    },
    read(id) {
        return database.select("*").from('information').where("id", id).first()
    },
    create(item) {
        return database('information').insert(item, "*")
            .then(record => record[0])
    },
    update(id, item) {
        return database('information').where("id", id).update(item, "*")
            .then(record => record[0])
    },
    delete(id) {
        return database('information').where("id", id).del()
    },
}