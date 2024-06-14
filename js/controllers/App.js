import { AppCont } from "./AppCont.js"

class App{
    version = "0.0.1";
    AppCont;

    constructor(appCtr){
        this.AppCont = appCtr;
    }
}

let appInstance = new App(new AppCont());

export { appInstance }