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
    let res='';
    if (this.inicio!=null){
      let temp=this.inicio.anterior;
      do{
        res += temp.infoHtml() ;
        temp=temp.anterior;
      }while(temp!=this.inicio.anterior);
    }
    return res;
  }



  
crearTarjeta(base,horas, minuto){
  let temp = this.buscar(base);
let resultado=`<div>
Empezamos en la base ${temp.base} a las ${horas}:00 y trabajaremos ${minuto>1?minuto+ " minutos": minuto+" minuto"}
</div>`;
let rawMin=0;
let min=0;
if(minuto>= temp.siguiente.minutos){
  for (let i =temp.siguiente.minutos; i <=minuto; i+=temp.siguiente.minutos) {
    rawMin+=temp.siguiente.minutos;
    min+=temp.siguiente.minutos;
    
    if(min>=60){
      min-=60;
      horas++
    }
   else if(min==60){
    min-=60;
    horas++
  }
 if(horas>12){
  horas=1;
 }
  resultado+=`<div>
      Llego a la base ${temp.siguiente.base} a las ${horas}:${min<10?"0"+min:min}
  </div>`;
  temp=temp.siguiente;
  if(minuto-rawMin<temp.siguiente.minutos&&minuto-rawMin!=0){
      let hr=0;
      let minaux=temp.siguiente.minutos-(minuto-rawMin);
      if(minaux>=60){
        minaux-=60;
        hr++
      }
     else if(minaux==60){
      minaux-=60;
      hr++
    }
    if(hr==0){
     resultado+= `<div>
        Se quedo a ${minaux>1?minaux+ " minutos": minaux+" minuto"} de la base ${temp.siguiente.base}
    </div>`
  }
  else{
  resultado+= `<div>
  Se quedo a ${hr>1?hr+" horas":hr+" hora"} y ${minaux>1?minaux+ " minutos": minaux+" minuto"}  de la base ${temp.siguiente.base}
  </div>`
  }
  }

  }
}
return resultado;
}
}
