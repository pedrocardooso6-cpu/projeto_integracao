const { DatabaseSync } = require('node.sqlite');

const db = new DatabaseSync('mural.db');

db.exec('
        CREATE TABLE IF NOT EXISTS recados'(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        autor TEXT NOT null,
        mensagem TEXT NOT NULL
)