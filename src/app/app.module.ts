import { RoutingModule } from './routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './backbone/header/header.component';
import { FooterComponent } from './backbone/footer/footer.component';
import { ItemcardComponent } from './components/itemcard/itemcard.component';
import { BlogcardComponent } from './components/blogcard/blogcard.component';
import { EventcardComponent } from './components/eventcard/eventcard.component';
import { ItemDitailcardComponent } from './components/item-ditailcard/item-ditailcard.component';
import { HomeComponent } from './pages/home/home.component';
import { TopImageComponent } from './components/top-image/top-image.component';
import { GamesComponent } from './pages/games/games.component';
import { ServicesComponent } from './pages/services/services.component';
import { DitailsComponent } from './pages/ditails/ditails.component';
import { EventComponent } from './pages/event/event.component';
import { LoginComponent } from './modals/login/login.component';
import { RegisterComponent } from './modals/register/register.component';
import { NotificationComponent } from './modals/notification/notification.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemcardComponent,
    BlogcardComponent,
    EventcardComponent,
    ItemDitailcardComponent,
    HomeComponent,
    TopImageComponent,
    GamesComponent,
    ServicesComponent,
    DitailsComponent,
    EventComponent,
    LoginComponent,
    RegisterComponent,
    NotificationComponent,
    EquipmentComponent,
  ],
  imports: [BrowserModule, RoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
