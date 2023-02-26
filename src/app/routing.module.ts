import { GamesComponent } from './pages/games/games.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ItemDitailcardComponent } from './components/item-ditailcard/item-ditailcard.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'games',
        component: GamesComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'ditails/:id',
        component: ItemDitailcardComponent,
      },
      {
        path: 'equipment',
        component: EquipmentComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
