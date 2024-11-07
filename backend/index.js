import express from "express";
import cors from "cors";
import mysql from "mysql";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import crypto from "crypto";

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

const generateVerificationToken = () => {
  return crypto.randomBytes(20).toString("hex");
};

const generateVerificationLink = (token) => {
  return `http://localhost:3001/verify-email?token=${token}`;
};

const sendVerificationEmail = async (email, verificationLink) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: "renderautotestes@gmail.com",
      pass: "zfyi gkrb cllz wzgg"
    }
  });

  await transporter.sendMail({
    from: '"renderauto" <renderautotestes@gmail.com>',
    to: email,
    subject: "Confirme seu e-mail",
    text: `Clique no link para verificar seu e-mail: ${verificationLink}`,
    html: `<p>Clique no link para verificar seu e-mail: <a href="${verificationLink}">Verificar E-mail</a></p>`,
  });
};

app.post("/users", (req, res) => {
  const { email, password } = req.body;
  const verificationToken = generateVerificationToken();
  const verificationLink = generateVerificationLink(verificationToken);

  const query = "INSERT INTO users (email, senha, verification_token, isVerified) VALUES (?, ?, ?, 0)";
  db.query(query, [email, password, verificationToken], (err, result) => {
    if (err) {
      res.status(500).send("Erro ao salvar no banco de dados.");
    } else {
      sendVerificationEmail(email, verificationLink)
        .then(() => {
          res.status(200).send("Usuário cadastrado com sucesso! Verifique seu e-mail para ativação.");
        })
        .catch((error) => {
          console.error("Erro ao enviar o e-mail:", error);
          res.status(500).send("Erro ao enviar o e-mail de verificação.");
        });
    }
  });
});

app.get("/verify-email", (req, res) => {
  const { token } = req.query;

  const query = "UPDATE users SET isVerified = 1 WHERE verification_token = ?";
  db.query(query, [token], (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(400).send("Token de verificação inválido.");
    } else {
      res.status(200).send("E-mail verificado com sucesso!");
    }
  });
});

app.post("/check-email", (req, res) => {
  const { email } = req.body;

  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], (err, result) => {
    if (err) {
      res.status(500).send("Erro ao acessar o banco de dados.");
    } else if (result.length > 0) {
      res.status(409).send("Este email já está cadastrado.");
    } else {
      res.status(200).send("Email disponível.");
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = ? AND senha = ? AND isVerified = 1";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      res.status(500).send("Erro no servidor.");
    } else if (results.length > 0) {
      res.status(200).send("Login bem-sucedido!");
    } else {
      res.status(401).send("E-mail ou senha incorretos, ou e-mail não verificado.");
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});