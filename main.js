
//CAULCULOS
let sueldo = 0;
let alquilerPago = 0, serviciosPublicosPago = 0 , supermercadoPago = 0, comidasAfueraPago = 0;
let combustiblePago = 0, mantinimientoAuto = 0, publicoPago = 0;
let seguroMedigoPago = 0, medicamentosPago = 0, consultasMedicasPago = 0;
let continuar = true;

function pedirSueldo (){
    sueldo = Number(prompt("Ingrese su sueldo"))
    while (isNaN(sueldo)) {
    alert("ingrese un numero por favor")
    sueldo = Number(prompt("Ingrese su sueldo"))
    }
    calcularGastos()
}
pedirSueldo()


function calcularGastos() {
    alquilerPago = sueldo * 0.20;
    serviciosPublicosPago = sueldo * 0.06;
    supermercadoPago = sueldo * 0.15;
    comidasAfueraPago = sueldo * 0.05;
    combustiblePago = sueldo * 0.02;
    mantinimientoAuto = sueldo * 0.12;
    publicoPago = sueldo * 0.2;
    seguroMedigoPago = sueldo * 0.25;
    medicamentosPago = sueldo * 0.25;
    consultasMedicasPago = sueldo * 0.25;
}





// ARRAYS
let categoria = '';
const categoriasValidas = ["alimentacion", "salud", "transporte","gastos basicos"];


function procesarGastos(categoria) {
    if (categoria.toLowerCase() === "salud") {
        let salud = new Salud(seguroMedigoPago, medicamentosPago, consultasMedicasPago);
        console.table(salud); 
    } 
    else if (categoria.toLowerCase() === "transporte") {
        let transporte = new Transporte(combustiblePago, mantinimientoAuto, publicoPago);
        console.table(transporte);
    } 
    else if (categoria.toLowerCase() === "alimentacion") {
        let alimentos = new Alimentacion(supermercadoPago, comidasAfueraPago);
        console.table(alimentos);
    } 
    else if (categoria.toLowerCase() === "gastos basicos") {
        let basicos = new GastosBasicos(alquilerPago, serviciosPublicosPago);
        console.table(basicos);
    }
    else{
        console.log("FIN")
    }
}

class GastosBasicos {
    constructor(alquiler, serviciosPublicos) {
        this.alquiler = alquiler
        this.serviciosPublicos = serviciosPublicos
    }
}

class Alimentacion {
    constructor(supermercado, comidaAfuera) {
        this.supermercado = supermercado
        this.comidaAfuera = comidaAfuera

    }
}
class Transporte {
    constructor(combustible, mantinimientoAuto, publico) {
        this.combustible = combustible
        this.mantinimientoAuto = mantinimientoAuto
        this.publico = publico
    }
}
class Salud {
    constructor(seguroMedico, medicamentos, consultasMedicas) {
        this.seguroMedico = seguroMedico
        this.medicamentos = medicamentos
        this.consultasMedicas = consultasMedicas

    }
}



function noIngreseNumeros() {
    while (!isNaN(categoria) && categoria !== '' || categoria.match(/\d/)) {
        alert("Porfavor no ingrese numeros")
        categoria = prompt("Ingrese su tipo de gasto " + categoriasValidas);

    }
}


function ingreseUnaDeNuestrasCategoria() {
    while (!categoriasValidas.includes(categoria.toLowerCase())) { 
        alert("Por favor ingrese una de nuestras categorías sugeridas " + categoriasValidas);
        categoria = prompt("Ingrese su tipo de gasto " + categoriasValidas );
    }
}

while (continuar) {
    categoria = prompt("Ingrese su tipo de gasto " + categoriasValidas);
    noIngreseNumeros()
    ingreseUnaDeNuestrasCategoria()
    procesarGastos(categoria)
    eliminarCategoria()

    let agregarOtracategoria = prompt("¿Desea agregar otra categoria mas? (sí/no)");
    if (agregarOtracategoria !== "si") {
        continuar = false;
    }
}

function eliminarCategoria() {

    const eliminar = (categoria) => {
        let index = categoriasValidas.indexOf(categoria)
        if(index != -1){
            categoriasValidas.splice(index,1);
        }
    }
    eliminar (categoria)
}
