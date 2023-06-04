let boton_aum = document.getElementById("mas");
let boton_dism = document.getElementById("menos");
let value = 0;

//function cantidadesEnCarrito(){

    boton_aum. addEventListener("click", () =>{
        value = value + 1 ;
        document.getElementById("carrito").value= value; 
    
    });

    boton_dism. addEventListener("click", () =>{

        if (value > 0) value = value - 1;      
        document.getElementById("carrito").value = value;

})