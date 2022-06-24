let json={};

const button = document.querySelector("button");


let texto="";
button.addEventListener("click", () =>{
texto=document.getElementById('textarea').value;

let arr = ((texto.trim()).slice(1,-1)).split(",");

//let firsArray= (texto.slice(texto.indexOf("["),texto.indexOf("]")+1)).replace(`\n`," ");

arr.forEach(element => {
    a = element.split(":");
    
    if(!isNaN(parseFloat(a[1]))){        
        
        json[(a[0].trim()).slice(1,-1)] = parseFloat(a[1]);
    }
    else if(a[1].trim()==="true"){
        json[(a[0].trim()).slice(1,-1)] = true;
    } 
    else if(a[1].trim()==="false"){
        json[(a[0].trim()).slice(1,-1)] = false;
    } 
    else if(a[1].trim()==="null"){
        json[(a[0].trim()).slice(1,-1)] = null;
    }
    else if (a[1].indexOf("[")>0){
        
        (json[(a[1].trim()).slice(a[1].indexOf("["),a[1].indexOf("]")+1)]);
        json[(a[0].trim()).slice(1,-1)] = json[a[1].slice(a[1].indexOf("["),a[1].indexOf("]")+1)];
        
    }  
    else {  
        try{
      json[(a[0].trim()).slice(1,-1)]=(a[1].trim()).slice(1,-1);
        }
        catch{}
    }
});



}
)


