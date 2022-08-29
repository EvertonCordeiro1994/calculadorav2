function inserir (num){
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num

    var confere = document.getElementById("resultado").innerHTML = numero + num
    
    if(confere.length <=14  ){
       document.getElementById("resultado").innerHTML = numero + num
       

    } else{
        alert("Erro!")
         document.getElementById('resultado').innerHTML = " "
        
    }
   
}

function apagar(){
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado.length){
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else{
        document.getElementById('resultado').innerHTML = "erro"
    }

}

function limpar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = " "
}

