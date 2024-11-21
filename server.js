import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)



const posts = [
    {
      id:1,
      descricao: "Teste eahiuaehiuea",
      imagem: "https://placecats.com/millie/300/150",
    },
    {
      id:2,
      descricao: "Segundo post sobre gatos fofos",
      imagem: "https://placecats.com/marmalade/300/150",
    },
    {
      id:3,
      descricao: "Gatos são os melhores!",
      imagem: "https://placecats.com/garfield/300/150",
    }
  ];

const app = express();

app.use(express.json());

app.listen(3000,() => {
    console.log(" Servidor escutando ...");
});


 async function getTodososPosts(){
 
  const db = conexao.db("imersao-stiverson")
  const colecao = db.collection(posts)
  return colecao.find().toArray()

}

app.get("/posts", async (req, res) => {
    const posts = await getTodososPosts()
    res.status(200).json(posts);
});

// function buscarPostPorID(id){
//     return posts.findIndex((post) => {
//         return post.id === Number(id)
//     })
// }

// app.get("/posts/:id", (req, res) => {
    
//     const index = buscarPostPorID(req.params.id)
//     res.status(200).json(posts[index]);
// });