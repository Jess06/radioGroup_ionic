import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public Genero:string;
  public Formulario:any;
  constructor(public navCtrl: NavController,
  public _form : FormBuilder) {
                    this.Formulario=this._form.group({                      
                      "Genero":["",Validators.required],
                      "Escolaridad":["",Validators.required]
                    });                                                                 
  }
  Evento(val)
  {                 
        this.Genero=val;            
  }

  submit()
   {     
     var valores=this.Formulario.value;         
    console.log(valores);
    
   }  
}
