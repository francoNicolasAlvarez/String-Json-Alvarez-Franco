let json={};

const button = document.querySelector("button");


let texto="";
button.addEventListener("click", () =>{
texto=document.getElementById('textarea').value;

//creo un array con la divicion que hace split dividiendo cuando encuentra una ","
//y hago trim y slice para eliminar los espacios y las comillas que se crean cuando se divide
let arr = ((texto.trim()).slice(1,-1)).split(",");


//let firsArray= (texto.slice(texto.indexOf("["),texto.indexOf("]")+1)).replace(`\n`," ");


arr.forEach(element => {
    //a cada elemento del array arr lo divido y creo un nuevo array "a" en cada ciclo 
    a = element.split(":");
    
    //pregunto si el segundo elemento del array, que es el valor de la propiedad
    //es un numero al intentar convertirlo en un float con el parse
    if(!isNaN(parseFloat(a[1]))){        
        
        //siempre que cree un string con split le agrega comillas dobles al final
        //asi que siempre que intente guardar una nueva propiedad debo volver a borrarlas
        json[(a[0].trim()).slice(1,-1)] = parseFloat(a[1]);

    }
    else if(a[1].trim()==="true"){
        //el las proximas condiciones elimino los espacios y comparo la palabra que queda
        //con uno de los posibles resultados no strings y no numericos y se lo asigno si es
        json[(a[0].trim()).slice(1,-1)] = true;
    } 
    else if(a[1].trim()==="false"){
        json[(a[0].trim()).slice(1,-1)] = false;
    } 
    else if(a[1].trim()==="null"){
        json[(a[0].trim()).slice(1,-1)] = null;
    }
    else if (a[1].indexOf("[")>0){
        
        /* en esta ocacion intente hacer un corte cuando empieze y termine en []
        respectivamente, pero como hayh "," dentro del parentesis esto no puede funcionar
        /(json[(a[1].trim()).slice(a[1].indexOf("["),a[1].indexOf("]")+1)]);
        json[(a[0].trim()).slice(1,-1)] = json[a[1].slice(a[1].indexOf("["),a[1].indexOf("]")+1)];
        */


        //creo un array separando directamente del texto inicial lo que se encontraba entre corchetes 
        //y luego se lo doy al json, lo guarda como un texto dentro del array
        let saveArray=[(texto.slice(texto.indexOf("["),texto.indexOf("]")+1)).slice(1,-1)];
                
        json[(a[0].trim()).slice(1,-1)]=saveArray;
    }  
    else {  
        try{
            //si paso todas las condiciones le digo que guarde directamente los valores
      json[(a[0].trim()).slice(1,-1)]=(a[1].trim()).slice(1,-1);
        }
        catch{}
    }
});



}
)


