const nome = "Denver Ritter";
let nome2 = "";
let pessoaDeFault = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "programador"
}
let nomes =["Marcelo eltz", "Maria Silva", "Pedro Silva"]
let pessoas = [
    {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "programador"
    },
    {
    nome: "Maria Silva",
    idade: "25",
    trabalho: "UX/UI Designer"
    }
]

function alterarNome(){
    nome2 = "Maria Silva";
    console.log ("valor alterado:");
    console.log ("nome2");
}

function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log ("valor alterado recebendo um nome:")
    console.log ("nome2");
}

function imprimirPessoa (pessoa){
    console.log(pessoa);

    console.log("nome:");
    console.log(pessoa.nome);
    
    console.log("idade:");
    console.log(pessoa.idade);
    
    console.log("trabalho:");
    console.log(pessoa.trabalho);
}
function adicionaPessoas(pessoa){
    pessoas.push(pessoa)
}

function imprimirPessoas (){
    console.log("-----imprimir pessoas----");
    pessoas.forEach((item) =>{
        console.log("nome");
        console.log(item.nome);

        console.log("idade:");
        console.log(item.idade);

        console.log("trabalho:");
        console.log(item.trabalho);
    })
};

imprimirPessoas();

adicionaPessoas({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "porteiro"
})

console.log(pessoas)

//imprimirPessoa(pessoaDeFault);

//imprimirPessoa({
    //nome: "Maria Silva",
    //idade: "25",
   //trabalho: "UX/UI Designer"})

//recebeEalteraNome("João Silva Pereira");

//recebeEalteraNome("Maria Silva");

//alterarNome();