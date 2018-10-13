import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LevelStartOverviewPage } from '../level-start-overview/level-start-overview';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lvls:level[] = new Array();

  constructor(public navCtrl: NavController,private storage: Storage) {
    this.storage.get('lvls').then((lvls) => {
      lvls.map(lvl=>{this.lvls.push(lvl)})
    });
  }

  getNextLvlId(){
    for (let index = 0; index < this.lvls.length; index++) {
      if(!this.lvls[index].isWon){return index}
    }
  }

  startNextLevel(){
    this.navCtrl.push(LevelStartOverviewPage,{
      lvl_id:this.getNextLvlId()
    });
  }

}
