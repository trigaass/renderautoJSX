import express from "express";
import cors from "cors";
import mysql from "mysql";
import bodyParser from "body-parser";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tortademor@ngo",
  database: "rederauto",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  } else {
    console.log("Conectado ao banco de dados MySQL.");
  }
});

app.post("/check-email", (req, res) => {
  const { email } = req.body;

  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], (err, result) => {
    if (err) {
      res.status(500).send("Erro ao acessar o banco de dados.");
    } else if (result.length > 0) {
      // Se o email já existe
      res.status(409).send("Este email já está cadastrado.");
    } else {
      res.status(200).send("Email disponível.");
    }
  });
});

app.post("/users", (req, res) => {
  const { email, password } = req.body;

  const query = "INSERT INTO users (email, senha) VALUES (?, ?)";
  db.query(query, [email, password], (err, result) => {
    if (err) {
      res.status(500).send("Erro ao salvar no banco de dados.");
    } else {
      res.status(200).send("Usuário cadastrado com sucesso!");
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = ? AND senha = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      res.status(500).send("Erro no servidor.");
    } else if (results.length > 0) {
      res.status(200).send("Login bem-sucedido!");
    } else {
      res.status(401).send("E-mail ou senha incorretos.");
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
