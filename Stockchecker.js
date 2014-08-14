 var abv = 0;
 var abw = 0;
 
 function CalculateABW (abv){
  return abv *0.8;
}

var volume1 = 0; // 0.7 litres is equal to 70 cl
var grossWeight1 = 0;
var tareWeight1 = 0;
var netWeight1 = 0;

function CalculateNetWeight (grossWeight, tareWeight){
  return (grossWeight - tareWeight);
}

var density = 0
var alcoholDensities = new Array(11);
  alcoholDensities[0] = 0.997385;
  alcoholDensities[1] = 0.981236;
  alcoholDensities[2] = 0.96803;
  alcoholDensities[3] = 0.953063;
  alcoholDensities[4] = 0.934269;
  alcoholDensities[5] = 0.912835;
  alcoholDensities[6] = 0.890092;
  alcoholDensities[7] = 0.866586;
  alcoholDensities[8] = 0.842326;
  alcoholDensities[9] = 0.816768;

function CalculateDensity(){

if ((abw > 0) && (abw <= 10)){

  density = alcoholDensities[0];  
}

else if ((abw > 10) && (abw <= 20)){

  density = alcoholDensities[1];  
}

else if ((abw > 20) && (abw <= 30)){

  density = alcoholDensities[2];  
}
else if ((abw > 30) && (abw <= 40)){

  density = alcoholDensities[3];  
}
else if ((abw > 40) && (abw <= 50)){

  density = alcoholDensities[4];  
}
else if ((abw > 50) && (abw <=60)){

  density = alcoholDensities[5];  
}
else if ((abw > 60) && (abw <= 70)){

  density = alcoholDensities[6];  
}
else if ((abw > 70) && (abw <= 80)){

  density = alcoholDensities[7];  
}
else if ((abw > 80) && (abw <= 90)){

  density = alcoholDensities[8];  
}
else if ((abw > 90) && (abw < 100)){

  density = alcoholDensities[9];  
}
else if (abw == 10){

  density = alcoholDensities[10];  
}
}

function VerveIt(){
   


abv = document.getElementById("ABVInput").value;

abw = CalculateABW(abv);

document.getElementById("ABW").value = abw;
  
grossWeight1 = document.getElementById("CurrentWeightInput").value;

tareWeight1 = document.getElementById("DefaultWeightInput").value;

netWeight1 = CalculateNetWeight(grossWeight1, tareWeight1);

document.getElementById("CMassDisplay").value = netWeight1;

CalculateDensity();

document.getElementById("DensityDisplay").value = density;
  
 }


