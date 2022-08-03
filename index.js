const AtiORM = {
  db: {},

  createTable(tableName) {
    return AtiORM.db[tableName] = []
  },

  getTable(name) {
    const table = AtiORM.db[name]
    if (!table) {      
      console.log('Böyle bir tablo yok')
    } else return table
  },

  addItem(dbName, item) {
    AtiORM.db[dbName].push(item)
  }
}

module.exports = AtiORM

