counter = 0;
scounter = 0;
ecounter = 0;
rev = [];
sav = [];
exp = [];

function revenue() {
    rev = []

    trev = 0;

    for (let i = 0; i < counter; i++) {
        var rdata = 0;
        var rdata = document.getElementById("r" + i).value;
        rev.push(parseInt(rdata));
    }

    for (let r = 0; r < rev.length; r++) {
        trev += rev[r];
    }


    document.getElementById("revenue").innerHTML = "Your total revenue is " + parseInt(trev);
}

function savings() {
    sav = []

    tsav = 0;

    for (let i = 0; i < scounter; i++) {
        var sdata = 0;
        var sdata = document.getElementById("s" + i).value;
        sav.push(parseInt(sdata));
    }

    for (let s = 0; s < sav.length; s++) {
        tsav += sav[s];
    }


    document.getElementById("savings").innerHTML = "Your total savings is " + parseInt(tsav);
}

function expance() {
    exp = []

    texp = 0;

    for (let i = 0; i < ecounter; i++) {
        var edata = 0;
        var edata = document.getElementById("e" + i).value;
        exp.push(parseInt(edata));
    }

    for (let e = 0; e < exp.length; e++) {
        texp += exp[e];
    }


    document.getElementById("expance").innerHTML = "Your total expance is " + parseInt(texp);
}

function balance() {
    var texp_tsav = parseInt(texp) + parseInt(tsav);
    var balance = parseInt(trev) - parseInt(texp_tsav)
    document.getElementById("balance").innerHTML = "Your total balance remaining is " + parseInt(balance);
}

function rrow() {
    var rtable = document.getElementById("rtable");
    var rows = rtable.rows.length;
    var r = rtable.insertRow(rows);
    var c1 = r.insertCell(0);
    var c2 = r.insertCell(1);
    var roll = document.createElement("input");
    var name = document.createElement("input");
    roll.type = "text";
    roll.placeholder = "Revenue " + counter;
    name.type = "number";
    name.id = "r" + counter;
    counter = counter + 1;
    c1.appendChild(roll);
    c2.appendChild(name);
}

function srow() {
    var stable = document.getElementById("stable");
    var rows = stable.rows.length;
    var r = stable.insertRow(rows);
    var c1 = r.insertCell(0);
    var c2 = r.insertCell(1);
    var roll = document.createElement("input");
    var name = document.createElement("input");
    roll.type = "text";
    roll.placeholder = "Savings " + scounter;
    name.type = "number";
    name.id = "s" + scounter;
    scounter = scounter + 1;
    c1.appendChild(roll);
    c2.appendChild(name);
}

function erow() {
    var etable = document.getElementById("etable");
    var rows = etable.rows.length;
    var r = etable.insertRow(rows);
    var c1 = r.insertCell(0);
    var c2 = r.insertCell(1);
    var roll = document.createElement("input");
    var name = document.createElement("input");
    roll.type = "text";
    roll.placeholder = "Expance " + ecounter;
    name.type = "number";
    name.id = "e" + ecounter;
    ecounter = ecounter + 1;
    c1.appendChild(roll);
    c2.appendChild(name);
}