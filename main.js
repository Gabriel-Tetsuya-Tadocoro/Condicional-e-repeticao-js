const f = document.getElementById("formulario")

f.addEventListener("submit", function(e){
    e.preventDefault();

    const v1 = Number(document.getElementById("num1").value)
    const v2 = Number(document.getElementById("num2").value)

    const soma = v1+v2

    document.getElementById("resultado").textContent=soma
    
    var desc = soma
    if (desc>500)
        document.getElementById("desconto").textContent=(soma*0.10)
    else if (desc>100)
        document.getElementById("desconto").textContent=(soma*0.05)

    var compra_com_desconto = soma
    if (compra_com_desconto>500)
        document.getElementById("valor_com_desconto").textContent=(soma-(soma*0.10))
    else if (compra_com_desconto>100)
        document.getElementById("valor_com_desconto").textContent=(soma-(soma*0.05))

      


})