const categoria = document.getElementById("categoria");
const cantidad = document.getElementById("cantidad");
const resumen = document.getElementById("resumen");
const total = document.getElementById("totalTexto");

resumen.addEventListener("click",()=>{
    if(parseInt(cantidad.value)){
        if(categoria.value!="Seleccione una Categoría"){
            let totalInt=200*cantidad.value;
            if(categoria.value=="Estudiante"){
                totalInt=totalInt*0.20;
            }else if(categoria.value=="Trainee"){
                totalInt=totalInt*0.50;
            }else if(categoria.value=="Junior"){
                totalInt=totalInt*0.85;
            }
            total.textContent="Total a Pagar:$"+totalInt;
        }else{
            total.textContent="Total a Pagar:$";
        }
        
    }
    
});