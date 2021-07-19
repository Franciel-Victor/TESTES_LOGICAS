window.onload = function(){
    for(var linha = 0; linha < 10; linha+=1){
        for(var coluna = 0; coluna < linha; coluna+=1){
            document.write(" *");
       }
        document.write("<br>");
    }
}