import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LevelStartOverviewPage } from './level-start-overview';

@NgModule({
  declarations: [
    LevelStartOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(LevelStartOverviewPage),
  ],
})
export class LevelStartOverviewPageModule {}
