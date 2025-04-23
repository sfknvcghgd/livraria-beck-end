let livros = require("./livros.json")

function mostralivros(){
    console.log("Título - Autor - Ano - PÁGINAS - Preço")
    livros.forEach((livro) => {
        console.log(livro.titulo + " - " + livro.autor + " - " + "ano:" + livro.ano  + "   páginas" + " - " + livro.paginas + "  preço: R$ " + livro.preco )
    })
}

//json = javaScript object notattion 
//gera um arquivo json dos livros 
function criarArquivo(){
    let livrosTexto = JSON.stringify(livros);
    const fs = require('fs');
    fs.writeFileSync("livros.json", livrosTexto);
    
} 
//criarArquivo();

function adicionaLivro(titulo,autor,editora,ano,sinopse,paginas,genero,preco){
    livros.push({
        titulo:titulo,
        autor:autor,
        editora:editora,
        ano:ano,
        sinope:sinopse,
        paginas:paginas,
        genero:genero,
        preco:preco
    });
    console.log("Livro adicionado com suxesso!");
}

adicionaLivro("A Culpa é das Estrelas", "John Green", "Intrínseca" , 2012,
"Hazel e Gus, dois jovens com câncer, se apaixonam e vivem uma história de amor marcada por desafios e emoções.", 288 , 
 ["romance", "drama"],24.90);

mostralivros()

