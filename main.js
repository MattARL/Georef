window.addEventListener("load", () => {
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("sw.js")
    .then( e => {
        console.log("Registrado com susseso");
    })
    .catch( err => {
        console.log("Erro");
        console.log(err);
    })
} else{
    console.log("Navegador antigo, sem suporte a sw")
}
});