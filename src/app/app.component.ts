import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      storage.set('lvls', [
        {
          id:"1",
          name:"Das Eröffnungs Event",
          isWon:true,
          possibleVisitorAnimalTypeId:[0,1]
        },
        {
          id:"2",
          name:"Der Zweite Tag",
          possibleVisitorAnimalTypeId:[0,1]
        },
      ]);
      storage.set('anymalTyps', [
        {
          name:"Schaf",
          dificulty:1
        },
        {
          name:"Wolf",
          dificulty:5
        },
        {
          name:"Hase",
          dificulty:1
        }
      ]);
      storage.set('booth', [
        {
          name:"bbq",
          needsId:[0]
        },
        {
          name:"Schießbude",
          needsId:[1]
        },
      ]);
      storage.set('needs', [
        {
          name:"Hunger",
        },
        {
          name:"Spaß",
        },
      ]);
    });
  }
}
declare global {
  interface level{
    id:number;
    name: string;
    isWon?:boolean;
    earnedMoney?:number;
    possibleVisitorAnimalTypeId:number[];
  }

  interface visitor{
    id?:number;
    name?: string;
    animalType:animal_type;
  }
  interface animal_type{
    name:string;
    dificulty:number;
    icon?:string;
  }
  interface needs{
    name:string;
  }
  interface booth{
    name:string;
    needsId:number[];
  }
}
