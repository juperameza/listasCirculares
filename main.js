import Inventario from "./inventario.js";
import Base from "./parada.js";
 class App {
    constructor(){
      this._inventory= new Inventario();
      const btnRegister= document.getElementById("btnAdd");
      const  btnBuscar=document.getElementById("btnSearch");
        const  btnEliminar=document.getElementById("btnDelete");
        const  btnListar=document.getElementById("btnList");
        // const  btnListarReves=document.getElementById("btnInvList");
       const btmRandom=document.getElementById("ranDom")
       const btnTarjeta=document.getElementById("btnTarjeta")
       btnTarjeta.addEventListener("click",this.readTarjeta);
        btnEliminar.addEventListener("click",  this._deleteProduct)
        // btnListarReves.addEventListener("click",  this._inverseListProducts)
        btnListar.addEventListener("click",  this._listProducts)
      btnBuscar.addEventListener("click",  this._searchProduct)
      btnRegister.addEventListener("click", this._addProduct)   
     btmRandom.addEventListener("click",this._random) 
    }
      readForm(){
        let inpBase=document.getElementById("txtBase");
        let inpMinutos=document.getElementById("txtMinutos");
       
        let base=inpBase.value;
        let minutos=Number(inpMinutos.value);

        if(base&&minutos){
            inpBase.value="";
            inpMinutos.value="";
            return new Base(base, minutos);
        }
        return null;
    }
    readTarjeta=()=>{
      let div= document.getElementById("resultadoTarjeta");
      let inpBase=document.getElementById("tarjetaBase");
      let inpMinutos=document.getElementById("tarjetaMinutos");
      let inpHoras=document.getElementById("tarjetaHora");
      let base=inpBase.value;
      let minutos=Number(inpMinutos.value);
      let horas = Number(inpHoras.value);
      if(horas<0 || horas>12){
        div.innerHTML="Favor ingresar la hora en formato de 12 horas";
        return;
      }
      if(base&&minutos&&horas){
          inpBase.value="";
          inpMinutos.value="";
          inpHoras.value="";
          let resultado= this._inventory.crearTarjeta(base,horas, minutos);
        div.innerHTML =resultado;
        return
      }
      div.innerHTML="Todos los datos son necesarios";
    }
    _addProduct=()=>{
      let base= this.readForm();
      if(base==null){
        document.getElementById("resultado").innerHTML="Error todos los campos son requeridos";
        return;
      }
      if(this._inventory.contar()>=20){
        document.getElementById("resultado").innerHTML="Error maximo 20 Bases";
        return
      }
      
      let added=this._inventory.agregar(base);
      if(added==null){
        document.getElementById("resultado").innerHTML="Error Base ya registrado";
        return;
      }
      document.getElementById("resultado").innerHTML=`Agregaste el Base ${base.infoHtml()}`;
      console.log(this._inventory)
    }
    _searchProduct=()=>{
      let base=document.getElementById('txtBase').value;
    let buscado=this._inventory.buscar(base);
    let detalles=document.getElementById('resultado');
    if (buscado==null)
      detalles.innerHTML = "<h3>No se encontro la base buscada</h3>";
    else
      detalles.innerHTML = "<h3>encontramos</h3>" + buscado.infoHtml()
    }
    _deleteProduct=()=>{
      let detalles=document.getElementById('resultado');
      let base=document.getElementById('txtBase').value;
      let elim = this._inventory.eliminar(base)
    if (elim==null)
      detalles.innerHTML = "<h3>El base que deseas eliminar no se encuentra</h3>";
    else{
      detalles.innerHTML = "<h3>Eliminaste el Base</h3>" + elim.infoHtml()
     
    }
    
     
    }
    _listProducts=()=>{
      let detalles=document.getElementById('resultado');
      detalles.innerHTML=this._inventory.list();
    }
    _inverseListProducts=()=>{
      let detalles=document.getElementById('resultado');
      detalles.innerHTML=this._inventory.inverseList();
      }
    
    

 _random=()=>{
      for (let i = 0; i <=20; i++) {
        let r = Math.floor(Math.random()*80);
     
        this._inventory.agregar(new Base(r,Math.floor(Math.random()*80)))
    }
    }
  }
 new App();

  //interacción con el usuario

  
  
  
  