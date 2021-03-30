import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
