export default class Producto{
    constructor(codigo, nombre, cantidad, costo){
      this.codigo=codigo;
      this.nombre=nombre;
      this.cantidad=cantidad;
      this.costo=costo;
      this.siguiente=null;
      this.anterior=null;
    }
   getCodigo(){
       return this.codigo;
   }
   getNombre(){
       return this.nombre;
   }
   getCantidad(){
       return this.cantidad;
   }
   getCosto(){
       return this.costo;
   }
   getPrecioFinal(){
       return this.costo*this.cantidad;
   }
    infoHtml(){
      return `
                <div>
                    <h3>${this.codigo} - ${this.nombre}</h3>
                    <p> $${this.costo} ${this.cantidad} Precio final=${this.getPrecioFinal()}</p>
                </div>
            `;
    }
   
  }