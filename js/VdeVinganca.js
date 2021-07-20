window.addEventListener("load", function(){
    for(linha = 0; linha < 6; linha+=1){
        for(coluna = 0; coluna <= 10; coluna+=1){
           if((coluna == linha)||(coluna == 10-linha)){
                document.write("*");
           }else{
                document.write("_");
           }
        }
        document.write("<br>");
    }
});