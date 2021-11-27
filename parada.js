export default class Parada{
    constructor(base, minutos,){
      this.base=base;
    
      this.minutos=minutos;
    
      this.siguiente=null;
      this.anterior=null;
    }
   getbase(){
       return this.base;
   }
   getminutos(){
       return this.minutos;
   }
    infoHtml(){
      return `
                <div>
                   Base ${this.base} tarda ${this.minutos} minutos
                </div>
            `;
    }
   
  }