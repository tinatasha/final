import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import{PageService } from './pages/page.service';
// import { Bootstrap } from '@angular/core'


import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [HttpModule, PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
