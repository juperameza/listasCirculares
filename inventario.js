export default class Inventario {
  constructor() {
    this.inicio = null;
    
  }
  buscar(base){
    let temp=this.inicio;
    do{
      if(temp.base==base){
        return temp;
      }
      temp=temp.siguiente;
    }while(temp!=this.inicio);
    return null;
  }
  
  agregar(nuevo){
    
   
    if (this.inicio==null){
    this.inicio=nuevo;
    nuevo.siguiente=this.inicio;
    nuevo.anterior=this.inicio;
    return nuevo;
    
  }
   
  else {
    if(this.buscar(nuevo.base)==null){
    let ultimo=this.inicio.anterior;
    nuevo.siguiente=this.inicio;
    nuevo.anterior=ultimo;
    this.inicio.anterior.siguiente
    ultimo.siguiente=nuevo;
    this.inicio.anterior=nuevo;
   return nuevo;
  }
  return null
}

}

 

  eliminar(base){
    let temp =null;
    if (base==this.inicio.base){
      temp=this.inicio;                                  
       temp.anterior.siguiente=temp.siguiente;
        temp.siguiente.anterior=temp.anterior;
        this.inicio=temp.siguiente;
        temp.siguiente=null;
        temp.anterior=null;
      return temp;
    }
    temp=this.buscar(base);
  temp.anterior.siguiente=temp.siguiente              
temp.siguiente.anterior=temp.anterior                   
temp.anterior=null
temp.siguiente=null

    return temp;
  }
  
  list(){
    let res='';
  if (this.inicio!=null){
    let temp=this.inicio;
    do{
      res += temp.infoHtml() ;
      temp=temp.siguiente;
    }while(temp!=this.inicio);
  }
  return res;
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
  
  

  
crearTarjeta(base,horas, minutos){
  let temp = this.buscar(base);
let resultado=`<div>
Empezamos en la base ${temp.base} a las ${horas}:00 y trabajaremos ${minutos} minutos
</div>`;
let min=0;
  for (let i = minutos; i >0; i-=temp.siguiente.minutos) {
  
    min+=temp.siguiente.minutos
    if(min>=60){
      min-=60;
      horas++
    }
   else if(min==60){
    min-=60;
    horas++
  }
 
  resultado+=`<div>
      Llego a la base ${temp.siguiente.base} a las ${horas}:${min<10?"0"+min:min}
  </div>`;
  temp=temp.siguiente;
  console.log(i)
  if(i-temp.siguiente.minutos<0){
   resultado+= `<div>
      Se quedo a ${temp.siguiente.minutos-i} minutos de la base ${temp.siguiente.base}
  </div>`
  }
  }
return resultado;
}
}
