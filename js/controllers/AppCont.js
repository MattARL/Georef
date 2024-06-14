export class AppCont{
    constructor(){
        console.log("Construtor do AppCont rodou");
        let btnToggleDrawer = document.getElementById("btnToggleDrawer");
        btnToggleDrawer.addEventListener('click', ()=>{
            window.app.AppCont.MenuDrawer();
        });
    }

    MenuDrawer(){
        let drawerElm = document.getElementById("drawerMenu");
        if (drawerElm.style.display == 'block') {
            drawerElm.style.display = 'none';
        } else {
            drawerElm.style.display = 'block';
        }
    } 
 } 

 function success(position) {
     console.log(position);
 }
 function error() {
     console.log("Posição atual não encontrada");
 }
 if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(success, error);
 } else {
     console.log("O navegador não suporta geolocalização");
 }

 function exibirMapa() {
    document.getElementById('map').style.display = 'block';

    var mymap = L.map('map').setView([latitude, longitude], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    var marker = L.marker([-25.363, 131.044]).addTo(mymap)
        .bindPopup("Minha Localização").openPopup();
}