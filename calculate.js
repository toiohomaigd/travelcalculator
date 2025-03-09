function Calculate()
{
    // variables
    let economy = document.getElementById("economy").value;
    let distance = document.getElementById("distance").value;
    let fuel = document.getElementById("fuel").value;

    // calculate fuel / distance cost
    litreCost = (economy * fuel) / 100;

    // display
    document.getElementById("display").innerHTML = "This trip cost you $" + Math.round((litreCost * distance));
}