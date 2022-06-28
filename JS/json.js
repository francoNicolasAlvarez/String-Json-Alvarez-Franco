let json = {};

const button = document.querySelector("button");

//funcion que reduce el texto y elimina las comillas en los bordes de los string
function trimTxt(j){
   return (j.trim()).slice(1, -1);
}

let texto = "";
button.addEventListener("click", () => {
    texto = document.getElementById('textarea').value;

    //creo un array con la divicion que hace split dividiendo cuando encuentra una ","
    //y hago trim y slice para eliminar los espacios y las comillas que se crean cuando se divide con trimTxt
    let arr = (trimTxt(texto)).split(",");
    
    arr.forEach(element => {
        //a cada elemento del array arr lo divido y creo un nuevo array "a" 
        //en cada ciclo con la la key en la posicion[0] y el valor en la posicion[1]
        
        a = element.split(":");

        //pregunto si el segundo elemento del array, que es el valor de la propiedad
        //es un numero al intentar convertirlo en un float con el parse
        if (!isNaN(parseFloat(a[1]))) {

            //siempre que cree un string con split le agrega comillas dobles al final
            //asi que siempre que intente guardar una nueva propiedad debo volver a borrarlas
            json[trimTxt(a[0])] = parseFloat(a[1]);
            
        }
        else if (a[1].trim() === "true") {
            //el las proximas condiciones elimino los espacios y comparo la palabra que queda
            //con uno de los posibles resultados no strings y no numericos y se lo asigno si es
            json[trimTxt(a[0])] = true;
        }
        else if (a[1].trim() === "false") {
            json[trimTxt(a[0])] = false;
        }
        else if (a[1].trim() === "null") {
            json[trimTxt(a[0])] = null;
        }
        else if (a[1].indexOf("[") > 0) {

            

            //creo un array separando directamente del texto inicial lo que se encontraba entre corchetes 
            //y luego se lo doy al json, lo guarda como un texto dentro del array
            let saveArray = [(texto.slice(texto.indexOf("["), texto.indexOf("]") + 1))];

            //json[(a[0].trim()).slice(1, -1)] = saveArray;
           json[trimTxt(a[0])]=saveArray;
        }
        else {
            try {
                //si paso todas las condiciones le digo que guarde directamente los valores
                json[trimTxt(a[0])] = trimTxt(a[1]);
            }
            catch { }
        }
    });
    alert(`El bloque de texto se a voncertido en un objeto JSON de nombre "json"`)
})


