import Inventario from "./inventario.js";
import Producto from "./producto.js";
 class App {
    constructor(){
      this._inventory= new Inventario();
      const btnRegister= document.getElementById("btnAdd");
      const  btnBuscar=document.getElementById("btnSearch");
        const  btnEliminar=document.getElementById("btnDelete");
        const  btnListar=document.getElementById("btnList");
        const  btnListarReves=document.getElementById("btnInvList");
       const btmRandom=document.getElementById("ranDom")
        btnEliminar.addEventListener("click",  this._deleteProduct)
        btnListarReves.addEventListener("click",  this._inverseListProducts)
        btnListar.addEventListener("click",  this._listProducts)
      btnBuscar.addEventListener("click",  this._searchProduct)
      btnRegister.addEventListener("click", this._addProduct)   
     btmRandom.addEventListener("click",this._random) 
    }
      readForm(){
        let inpCodigo=document.getElementById("txtCodigo");
        let inpNombre=document.getElementById("txtNombre");
        let inpCantidad=document.getElementById("txtCantidad");
        let inpCosto=document.getElementById("txtCosto");
        let codigo=Number(inpCodigo.value);
        let nombre=inpNombre.value;
        let cantidad=Number(inpCantidad.value);
        let costo=Number(inpCosto.value);
        if(codigo&&nombre&&cantidad&&costo){
            inpCodigo.value="";
            inpNombre.value="";
            inpCantidad.value="";
            inpCosto.value=""; 
            return new Producto(codigo, nombre, cantidad, costo);
        }
        return null;
    }
    _addProduct=()=>{
      let producto= this.readForm();
      if(producto==null){
        document.getElementById("resultado").innerHTML="Error todos los campos son requeridos";
        return;
      }
      if(this._inventory.contar()>=20){
        document.getElementById("resultado").innerHTML="Error maximo 20 productos";
        return
      }
      let added=this._inventory.agregar(producto);
      if(added==null){
        document.getElementById("resultado").innerHTML="Error producto ya registrado";
        return;
      }
      document.getElementById("resultado").innerHTML=`Agregaste el producto ${producto.infoHtml()}`;
      console.log(this._inventory)
    }
    _searchProduct=()=>{
      let codigo=document.getElementById('txtCodigo').value;
    let buscado=this._inventory.buscar(codigo);
    let detalles=document.getElementById('resultado');
    if (buscado==null)
      detalles.innerHTML = "<h3>No se encontro la codigo buscada</h3>";
    else
      detalles.innerHTML = "<h3>encontramos</h3>" + buscado.infoHtml()
    }
    _deleteProduct=()=>{
      let detalles=document.getElementById('resultado');
      let codigo=document.getElementById('txtCodigo').value;
      let elim = this._inventory.eliminar(codigo)
    if (elim==null)
      detalles.innerHTML = "<h3>El codigo que deseas eliminar no se encuentra</h3>";
    else{
      detalles.innerHTML = "<h3>Eliminaste el producto</h3>" + elim.infoHtml()
     
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
      for (let i = 0; i < 19; i++) {
        let r = Math.floor(Math.random()*20);
     
        this._inventory.agregar(new Producto(r,Math.floor(Math.random()*20),Math.floor(Math.random()*20),Math.floor(Math.random()*20)))
    }
    }
  }
 new App();

  //interacción con el usuario

  
  
  
  