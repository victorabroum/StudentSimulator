import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Atividades } from '../../assets/Models/Atividades';
import { Status } from '../../assets/Models/Status';

@IonicPage()
@Component({
  selector: 'page-casa',
  templateUrl: 'casa.html',
})
export class CasaPage {

  status: Status;
  atividades: Atividades;

  constructor(public navCtrl: NavController, public navParams: NavParams, public event: Events) {

    this.status = new Status(this.navParams.get('cr'), 
                        this.navParams.get('fome'), 
                        this.navParams.get('energia'));
    this.atividades = new Atividades();
  }

  doAtividade(tipo){
    this.status.cr += this.atividades.listaAtividades[tipo].atv.getCR();
    this.status.fome += this.atividades.listaAtividades[tipo].atv.getFome();
    this.status.energia += this.atividades.listaAtividades[tipo].atv.getEnergia();

    if(this.status.statusOkay()){
      if(this.status.fome >= 100) this.status.fome = 100;
      if(this.status.energia >= 100) this.status.energia = 100;
  
      this.event.publish('didAtividade', this.status);
    }else{
      this.event.publish('died', this.status);
      this.navCtrl.pop();
    }

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CasaPage');
  }

}
