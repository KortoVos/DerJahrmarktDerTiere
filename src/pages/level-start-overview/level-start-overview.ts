import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LevelStartOverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-level-start-overview',
  templateUrl: 'level-start-overview.html',
})
export class LevelStartOverviewPage {
  stor_lvl:level;
  test:string = "test333";
  visitors:visitor[] = new Array();
  allAnimalTyps:animal_type[] = new Array();
  allowdAnimalTyps:animal_type[] = new Array();
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
    this.visitors= new Array();
    this.allAnimalTyps = new Array();
    this.allowdAnimalTyps = new Array();
    var lvlsPromise = this.storage.get('lvls').then((lvls) => {
      this.stor_lvl = lvls[navParams.get("lvl_id")]
      this.test = this.stor_lvl.name;
    });
    var animalTypsPromise = this.storage.get('anymalTyps').then((typs) => {
      this.allAnimalTyps=typs;
    });
    Promise.all([lvlsPromise,animalTypsPromise]).then(res=>{
      this.stor_lvl.possibleVisitorAnimalTypeId.forEach(el=>{
        this.allowdAnimalTyps.push(this.allAnimalTyps[el]);
        
      })
      this.generateVisitors();
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LevelStartOverviewPage');
  }

  generateVisitors(){
    var i:number = 0;
    this.visitors = new Array();
    
    while(i<this.stor_lvl.id*10){
      var animaleTypeId = getRndInteger(0,this.allowdAnimalTyps.length)
      if(this.allowdAnimalTyps[animaleTypeId].dificulty<=(this.stor_lvl.id*10-i)){
        this.visitors.push({
          animalType:this.allowdAnimalTyps[animaleTypeId],
          name:this.allowdAnimalTyps[animaleTypeId].name
        })
        i+=this.allowdAnimalTyps[animaleTypeId].dificulty;
      }
    }
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min) ) + min;
    }
  }


}
