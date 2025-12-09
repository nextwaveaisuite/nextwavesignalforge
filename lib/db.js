const Database = require('better-sqlite3');
const fs = require('fs');

if (!fs.existsSync('data')) fs.mkdirSync('data');

export const db = new Database('data/signalforge.db');
db.prepare(`
CREATE TABLE IF NOT EXISTS signals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  raw_text TEXT,
  normalized TEXT,
  score INTEGER,
  verdict TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`).run();