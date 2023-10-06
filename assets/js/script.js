function areaDoCirculo(){
    let raioCirculo = parseFloat(document.getElementById('raioCirculo').value);
    let unidadeMedida = document.getElementById('unidadeMedida').value;
    let areaCircular;

    if(unidadeMedida === "m²" && raioCirculo > 0){
        areaCircular = Math.PI * Math.pow(raioCirculo, 2);
        document.getElementById('resultado').textContent = areaCircular.toFixed(2) + ' m²';

    } else if (unidadeMedida === "cm²" && raioCirculo !== 0 && raioCirculo > 0){
        areaCircular = (Math.PI * Math.pow(raioCirculo, 2))/100;
        document.getElementById('resultado').textContent = areaCircular.toFixed(2) + ' cm²';

    } else{
        document.getElementById('resultado').textContent = "NaN";
    }
}


function areaTroncoPiramide(){
    let unidadeMedida = document.getElementById('unidadeMedida').value;
    let baseMaiorTronco = parseFloat(document.getElementById('baseMaiorTronco').value);
    let baseMenorTronco = parseFloat(document.getElementById('baseMenorTronco').value);
    let alturaTronco = parseFloat(document.getElementById('alturaTronco').value);
    let areaTotalPiramide;

    let apotemaMaior = baseMaiorTronco/2;
    let apotemaMenor = baseMenorTronco/2;
    let apotemaTronco = Math.sqrt((Math.pow(alturaTronco, 2) + Math.pow((apotemaMaior - apotemaMenor), 2)));

    let areaLateral = (((baseMaiorTronco + baseMenorTronco) * apotemaTronco)/2)*4;
    let areaMaior = Math.pow(baseMaiorTronco, 2);
    let areaMenor = Math.pow(baseMenorTronco, 2);

    if(unidadeMedida === "m²" && baseMaiorTronco > 0 && baseMenorTronco > 0 && alturaTronco > 0 ){
        areaTotalPiramide = areaMaior + areaMenor + areaLateral;
        document.getElementById('resultado').textContent = areaTotalPiramide.toFixed(2) + ' m²';

    } else if(unidadeMedida === "cm²" && baseMaiorTronco > 0 && baseMenorTronco > 0 && alturaTronco > 0){
        areaTotalPiramide = (areaMaior + areaMenor + areaLateral)/100;
        document.getElementById('resultado').textContent = areaTotalPiramide.toFixed(2) + ' cm²';

    } else{
        document.getElementById('resultado').textContent = "NaN";
    }
}

function areaDoQuadrado(){
    let unidadeMedida = document.getElementById('unidadeMedida').value;
    let comprimentoLado = parseFloat(document.getElementById('ladoQuadrado').value);
    let areaQuadrado;

    if(unidadeMedida === "m²" && comprimentoLado > 0){
        areaQuadrado = Math.pow(comprimentoLado, 2);
        document.getElementById('resultado').textContent = areaQuadrado.toFixed(2) + ' m²';

    } else if(unidadeMedida === "cm²" && comprimentoLado > 0){
        areaQuadrado = (Math.pow(comprimentoLado, 2))/100;
        document.getElementById('resultado').textContent = areaQuadrado + ' cm²';

    } else {
        document.getElementById('resultado').textContent = "NaN";
    }
}

function areaDoRetangulo(){
    let unidadeMedida = document.getElementById('unidadeMedida').value
    let baseRetangulo = parseFloat(document.getElementById('baseRetangulo').value);
    let alturaRetangulo = parseFloat(document.getElementById('alturaRetangulo').value);
    let areaRetangulo;

    if(unidadeMedida === "m²" && baseRetangulo > 0 && alturaRetangulo > 0){
        areaRetangulo = baseRetangulo * alturaRetangulo;
        document.getElementById('resultado').textContent = areaRetangulo.toFixed(2) + ' m²';

    } else if(unidadeMedida === "cm²" && baseRetangulo > 0 && alturaRetangulo > 0){
        areaRetangulo = (baseRetangulo * alturaRetangulo)/100;
        document.getElementById('resultado').textContent = areaRetangulo.toFixed(2) + ' cm²';

    } else{
        document.getElementById('resultado').textContent = "NaN";
    }
}

function coroaDoCirculo(){
    let unidadeMedida = document.getElementById('unidadeMedida').value;
    let raioMaior = parseFloat(document.getElementById('raioMaior').value);
    let raioMenor = parseFloat(document.getElementById('raioMenor').value);
    let areaCoroaCircular;

    if(unidadeMedida === "m²" && raioMaior > 0 && raioMenor > 0){
        areaCoroaCircular = Math.PI * (Math.pow(raioMaior, 2) - Math.pow(raioMenor, 2));
        document.getElementById('resultado').textContent = areaCoroaCircular.toFixed(2) + ' m²';

    } else if(unidadeMedida === "cm²" && raioMaior > 0 && raioMenor > 0){
        areaCoroaCircular = (Math.PI * (Math.pow(raioMaior,2) - Math.pow(raioMenor,2)))/100;
        document.getElementById('resultado').textContent = areaCoroaCircular.toFixed(2) + ' cm²';

    } else{
        document.getElementById('resultado').textContent = "NaN";
    }
}

function poligonoRegular(){
    let unidadeMedida = document.getElementById('unidadeMedida').value;
    let numeroLados = parseInt(document.getElementById('numeroLados').value);
    let comprimentoLado = parseFloat(document.getElementById('comprimentoLado').value);
    let apotema;
    let areaTriangulo;
    let areaPoligonoRegular;

    if(unidadeMedida === "m²" && numeroLados === 5 && comprimentoLado > 0){
        apotema = comprimentoLado / (2 * Math.tan(Math.PI/numeroLados));
        areaTriangulo = (comprimentoLado * apotema)/2;
        areaPoligonoRegular = areaTriangulo * numeroLados;

        document.getElementById('resultado').textContent = areaPoligonoRegular.toFixed(2) + ' m²';

    } else if(unidadeMedida === "cm²" && numeroLados === 5 && comprimentoLado > 0){
        apotema = comprimentoLado / (2 * Math.tan(Math.PI/numeroLados));
        areaTriangulo = (comprimentoLado * apotema)/2;
        areaPoligonoRegular = (areaTriangulo * numeroLados)/100;

        document.getElementById('resultado').textContent = areaPoligonoRegular.toFixed(2) + ' cm²';

    } else if(unidadeMedida === "m²" && numeroLados === 6 && comprimentoLado > 0){
        apotema = comprimentoLado / (2 * Math.tan(Math.PI/numeroLados));
        areaTriangulo = (comprimentoLado * apotema)/2;
        areaPoligonoRegular = areaTriangulo * numeroLados;

        document.getElementById('resultado').textContent = areaPoligonoRegular.toFixed(2) + ' m²';

    } else if(unidadeMedida === "cm²" && numeroLados === 6 && comprimentoLado > 0){
        apotema = comprimentoLado / (2 * Math.tan(Math.PI/numeroLados));
        areaTriangulo = (comprimentoLado * apotema)/2;
        areaPoligonoRegular = (areaTriangulo * numeroLados)/100;

        document.getElementById('resultado').textContent = areaPoligonoRegular.toFixed(2) + ' cm²';

    } else if(unidadeMedida === "m²" && numeroLados === 7 && comprimentoLado > 0){
        apotema = comprimentoLado / (2 * Math.tan(Math.PI/numeroLados));
        areaTriangulo = (comprimentoLado * apotema)/2;
        areaPoligonoRegular = areaTriangulo * numeroLados;

        document.getElementById('resultado').textContent = areaPoligonoRegular.toFixed(2) + ' m²';

    } else if(unidadeMedida === "m²" && numeroLados === 7 && comprimentoLado > 0){
        apotema = comprimentoLado / (2 * Math.tan(Math.PI/numeroLados));
        areaTriangulo = (comprimentoLado * apotema)/2;
        areaPoligonoRegular = areaTriangulo * numeroLados;

        document.getElementById('resultado').textContent = areaPoligonoRegular.toFixed(2) + ' m²';

    } else{
        document.getElementById('resultado').textContent = "NaN";
    }
}


function areaTrapezio(){
    let unidadeMedida = document.getElementById('unidadeMedida').value;
    let baseMaiorTrapezio = parseFloat(document.getElementById('baseMaiorTrapezio').value);
    let baseMenorTrapezio = parseFloat(document.getElementById('baseMenorTrapezio').value);
    let alturaTrapezio = parseFloat(document.getElementById('alturaTrapezio').value);
    let areaTrapezio;

    if(unidadeMedida === "m²" && baseMaiorTrapezio > 0 && baseMenorTrapezio > 0 && alturaTrapezio > 0){
        areaTrapezio = ((baseMaiorTrapezio + baseMenorTrapezio) * alturaTrapezio)/2;
        document.getElementById('resultado').textContent = areaTrapezio.toFixed(2) + ' m²';

    } else if(unidadeMedida === "cm²" && baseMaiorTrapezio > 0 && baseMenorTrapezio > 0 && alturaTrapezio > 0){
        areaTrapezio = (((baseMaiorTrapezio + baseMenorTrapezio) * alturaTrapezio)/2)/100;
        document.getElementById('resultado').textContent = areaTrapezio.toFixed(2) + ' cm²';

    } else{
        document.getElementById('resultado').textContent = "NaN";
    }
}

function areaSetorCircularAninhado(){
    let unidadeMedida = document.getElementById('unidadeMedida').value;
    let raioCircular = parseFloat(document.getElementById('raioSetorCircular').value);
    let anguloSetor = parseFloat(document.getElementById('anguloSetorCircular').value);
    let areaTotalSetor;

    let areaSetor = (anguloSetor / 360) * Math.PI * Math.pow(raioCircular, 2);
    let raioDoTriangulo = raioCircular * Math.sin((anguloSetor / 2) * (Math.PI / 180));
    let areaDoTriangulo = 0.5 * Math.pow(raioDoTriangulo, 2);
    let areaCirculoMaior = Math.PI * Math.pow(raioCircular, 2);

    if(unidadeMedida === "m²" && raioCircular > 0 && anguloSetor > 0){
        areaTotalSetor = areaSetor - areaDoTriangulo + areaCirculoMaior;
        document.getElementById('resultado').textContent = areaTotalSetor.toFixed(2) + ' m²';

    } else if(unidadeMedida === "cm²" && raioCircular > 0 && anguloSetor > 0){
        areaTotalSetor = (areaSetor - areaDoTriangulo + areaCirculoMaior)/100;
        
        document.getElementById('resultado').textContent = areaTotalSetor.toFixed(2) + ' cm²';

    } else{
        document.getElementById('resultado').textContent = "NaN";
    }
}


function clean(){
    document.getElementById('resultado').textContent = "";
}



/*Menu*/
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/open_menu02.svg";
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_menu02.svg";
    }
}    
