import { Component } from '@angular/core';
import { NavController, Events, AlertController, Platform } from 'ionic-angular';
import { CasaPage } from '../casa/casa';
import { UfamPage } from '../ufam/ufam';
import { Status } from '../../assets/Models/Status';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cr: number = 4.5;
  fome: number = 100;
  energia: number = 100;

  status: Status;

  constructor(public navCtrl: NavController, public event: Events, public alertCtrl: AlertController,
            public platform: Platform) {
    this.platform = platform;
    this.status = new Status();
  }

  ionViewDidEnter(){
    this.event.subscribe('didAtividade', (alteraStatus)=>{
      this.status = alteraStatus;
    });
    this.event.subscribe('died', (status)=>{
      this.status.died();
      this.alertDied();
    });
    this.event.subscribe('ganhou', (status)=>{
      this.alertWin();
    })
  }

  alertDied(){
    let alert = this.alertCtrl.create({
      title: 'Você PERDEU',
      buttons: [{
        text: "Recomeçar",
        handler: () =>{
          this.status.restart();
        }
      },
    {
      text: "Desisto",
      handler: ()=>{
        this.platform.exitApp();
      }
    }]
    });
    alert.present();
  }

  alertWin(){
    let alert = this.alertCtrl.create({
      title: 'Você Ganhou',
      buttons: [{
        text: "Recomeçar",
        handler: () =>{
          this.status.restart();
        }
      },
    {
      text: "Desisto",
      handler: ()=>{
        this.platform.exitApp();
      }
    }]
    });
    alert.present();
  }

  goToHome(){
    this.navCtrl.push(CasaPage,{
      cr: this.status.cr,
      fome: this.status.fome,
      energia: this.status.energia
    });
  }

  goToUFAM(){
    this.navCtrl.push(UfamPage,{
      cr: this.status.cr,
      fome: this.status.fome,
      energia: this.status.energia
    });
  }
}
