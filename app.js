function  calcular(){
    let salario_hora = document.getElementById("salario_hora").value
    let qtd_hora = document.getElementById("quantidade_horas").value
    let total = parseFloat(salario_hora) * parseFloat(qtd_hora) 
    document.getElementById("resultado").innerText = total
}