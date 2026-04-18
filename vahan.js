/* resource */
const re = document.getElementById("resourceBtn");
const remenu = document.getElementById("resourceMenu")

re.addEventListener("mouseenter", () => {
    remenu.classList.add("show");
});

remenu.addEventListener("mouseleave", () => {
    remenu.classList.remove("show");
});

/* service */
const btn = document.getElementById("serviceBtn");
const menu = document.getElementById("serviceMenu");

btn.addEventListener("mouseenter", () => {
    menu.classList.add("show");
});

menu.addEventListener("mouseleave", () => {
    menu.classList.remove("show");
});

/* request call button */
const ss=[`Select Service`,`New Car Inspection(PDI)`,`Used Car Inspection(PDI)`];
const sselect=document.getElementById("ss");

for(let i=0;i<ss.length;i++)
{
    let option=document.createElement("option");
    option.text=ss[i];
    option.value=ss[i];

    sselect.appendChild(option);
}

/* invoice detail */
function generateInvoice(){

let subtotal = 0;

const rows = document.querySelectorAll(".invoice-table tr");

rows.forEach((row,index)=>{

if(index === 0) return;

let price = parseFloat(row.querySelector(".price").innerText);
let qty = parseFloat(row.querySelector(".qty").value);

let rowTotal = price * qty;

row.querySelector(".rowTotal").innerText = rowTotal;

subtotal += rowTotal;

});

let gst = subtotal * 0.18;
let total = subtotal + gst;

document.getElementById("subtotal").innerText = subtotal;
document.getElementById("gst").innerText = gst.toFixed(2);
document.getElementById("total").innerText = total.toFixed(2);

}

function printInvoice(){
    window.print();
}