window.onload = function(){
    alert("Enter the figures and click Calculate Costs");
var costOfSales, sales;
var mark_up, noOfUnits, dmc, dlc, foc, sdc, ac;
var dmcpu, dlcpu, pcpu, focpu, cpfgpu, sdcpu, acpu, vcpu, sppu, tfc, cpu, bep;

function roundOff(x){
    return parseFloat(x).toFixed(2);
}

function calculateCosts(){
    
    mark_up = Number(document.getElementById("mark_up").value);
    noOfUnits = Number(document.getElementById("noOfUnits").value);
    dmc = Number(document.getElementById("dmc").value);
    dlc = Number(document.getElementById("dlc").value);
    foc = Number(document.getElementById("foc").value);
    sdc = Number(document.getElementById("sdc").value);
    ac = Number(document.getElementById("ac").value);
    costOfSales = dmc+dlc+foc;
    sales = costOfSales * ((100+mark_up)/100);
    
    dmcpu = dmc/noOfUnits;
    dlcpu = dlc/noOfUnits;
    pcpu = dmcpu + dlcpu;
    focpu = foc/noOfUnits;
    cpfgpu = (dmc+dlc+foc)/noOfUnits;
    sdcpu = sdc/noOfUnits;
    acpu = ac/noOfUnits;
    vcpu = dmcpu + dlcpu + sdcpu;
    sppu = sales/noOfUnits;
    tfc = foc + ac;
    cpu = sppu - vcpu;
    bep = tfc/cpu;
    
    document.getElementById("dmcpu").innerHTML = "Direct material cost per unit: " + roundOff(dmcpu);
    document.getElementById("dlcpu").innerHTML = "Direct labour cost per unit: " + roundOff(dlcpu);
    document.getElementById("pcpu").innerHTML = "Prime cost per unit: " + roundOff(pcpu);
    document.getElementById("focpu").innerHTML = "Factory overhead cost per unit: " + roundOff(focpu);
    document.getElementById("cpfgpu").innerHTML = "Cost of production of finished goods per unit: " + roundOff(cpfgpu);
    document.getElementById("sdcpu").innerHTML = "Selling and distribution cost per unit: " + roundOff(sdcpu);
    document.getElementById("acpu").innerHTML = "Administration cost per unit: " + roundOff(acpu);
    document.getElementById("vcpu").innerHTML = "Variable cost per unit: " + roundOff(vcpu);
    document.getElementById("sppu").innerHTML = "Selling price per unit: " + roundOff(sppu);
    document.getElementById("tfc").innerHTML = "Total fixed costs: " + roundOff(tfc);
    document.getElementById("cpu").innerHTML = "Contribution per unit: " + roundOff(cpu);
    document.getElementById("bep").innerHTML = "Break-even point: " + Math.ceil(parseFloat(bep)) + " units";
}

document.getElementById("button").addEventListener("click",calculateCosts)

}
