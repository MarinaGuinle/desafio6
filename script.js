

// constuctor

class Producto {
    constructor (nombre, precio, stock,descuento){
        this.nombre= nombre;
        this.precio= precio;
        this.stock= stock;
        this.descuento= descuento;
    }

    // método

    describirProducto(){
     alert (" estas comprando un " + (this.nombre) + " cuesta " + (this.precio)  );
    }
}

//  instanciar

let producto1 = new Producto("alimento gato","$100", true, true);
let producto2 = new Producto ("alimento perro","$200",true, true)

producto1.describirProducto()
producto2.describirProducto()

 function buscaElDescuento () {
    let producto = prompt("Que quiere comprar?")
    let precio = parseInt(prompt("ingrese su precio y veremos que beneficios tiene"))

    if (producto != "" && precio !="") {

        if (precio > 150){
        alert("El precio es: " + precio + " tenés un descuento del 30% en tu " + producto);  
       }

        else{
        alert("tanés que comprar un producto de mayor valor para obtener descuento :(")   
        }

    }

}

 buscaElDescuento()
 
 confirm("deseas seguir sumando productos?")





