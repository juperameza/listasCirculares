export default class Inventario {
  constructor() {
    this.inicio = null;
    
  }
  buscar(codigo){
    let temp=this.inicio;
    while(temp!=null){
      if(temp.codigo>codigo){
        console.log("Vesion")
         return null
      }
      else if(temp.codigo==codigo)
        return temp;
      temp=temp.siguiente;
    }

  }
  
  agregar(nuevo) {
    if(this.buscar(nuevo.codigo)==null){
      if (this.inicio == null) {
         this.inicio = nuevo;
         return nuevo
      }
    else if(nuevo.codigo<this.inicio.codigo) {
      nuevo.siguiente=this.inicio
      this.inicio.anterior=nuevo
      this.inicio=nuevo 
       return nuevo
     }

     else{
      let temp=this.inicio
      while(temp.siguiente!=null){
        temp=temp.siguiente;
        if(temp.codigo>nuevo.codigo){
          nuevo.siguiente=temp
          nuevo.anterior=temp.anterior
          temp.anterior=nuevo
          nuevo.anterior.siguiente=nuevo
          return nuevo;
        }
      }
      if(temp.codigo<nuevo.codigo){
        temp.siguiente=nuevo
        nuevo.anterior=temp
        return nuevo 
      }
       
     }
    }
    else{
    return null;
  }
  } 

 

  eliminar(codigo){
    let temp =null;
    if (codigo==this.inicio.codigo){
      temp=this.inicio;                                  
       this.inicio=this.inicio.siguiente
      this.inicio.anterior=null;
      temp.anterior=null
      temp.siguiente=null
      return temp;
    }
    temp=this.buscar(codigo);
  
    temp.anterior.siguiente=temp.siguiente              
temp.siguiente.anterior=temp.anterior                   
temp.anterior=null
temp.siguiente=null

    return temp;
  }
  
  list(){
    if (!this.inicio)
      return '';
    else
      return this._listarRec(this.inicio);
  }
  _listarRec(n){
    if (n.siguiente==null)
      return n.infoHtml();
    else
      return n.infoHtml() + '\n' + this._listarRec(n.siguiente);
  }        
  inverseList(){
    if (!this.inicio)
      return '';
    else
      return this._listarRecInverso(this.inicio);
  }
  _listarRecInverso(n){
    if (n.siguiente==null)
      return n.infoHtml();
    else
      return   this._listarRecInverso(n.siguiente) + n.infoHtml() ;
  }  
  
  

  contar(){
    let resultado=0;
          if (!this.inicio)
            return 0;
          let temp=this.inicio;
          while(temp!=null){
           resultado++
            temp=temp.siguiente;
          }
          return resultado;
}
}
