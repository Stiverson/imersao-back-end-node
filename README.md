
# Imersão Dev Back-end - Alura 🚀

Este repositório contém os projetos e atividades desenvolvidos durante a **Imersão Dev Back-end** da [Alura](https://www.alura.com.br), realizada na semana de **18/11/2024 a 22/11/2024**.

## Sobre o Evento

A imersão tem como objetivo explorar os conceitos e práticas essenciais do desenvolvimento de back-end utilizando **Node.js** e **Express**, com foco em APIs, servidores e boas práticas.  
Cada dia da semana será dedicado a um tema específico, evoluindo o aprendizado com exemplos práticos e incrementais.

### **Cronograma**
- **Dia 1 (18/11/2024)**: Introdução a APIs e Servidores com Node.js e Express.
- **Dia 2 (19/11/2024)**: Trabalhando com rotas e parâmetros dinâmicos.
- **Dia 3 (20/11/2024)**: Conexão com bancos de dados.
- **Dia 4 (21/11/2024)**: Implementação de uma API REST completa.
- **Dia 5 (22/11/2024)**: Deploy e boas práticas em projetos back-end.

---

## Dia 1: Introdução a APIs e Servidores

Hoje, na primeira aula, aprendemos a configurar um servidor básico com o framework **Express** e criar uma rota simples que responde a uma requisição GET.

### Implementação do Servidor

O código desenvolvido está no arquivo `server.js`:

```javascript
import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
  res.status(200).send("Boas vindas à imersão!");
});
```

---

## Como Rodar o Projeto Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. Instale as dependências do Node.js:
   ```bash
   npm install
   ```

3. Execute o servidor:
   ```bash
   node server.js
   ```

4. Acesse no navegador ou via ferramentas como Postman: `http://localhost:3000/api`

