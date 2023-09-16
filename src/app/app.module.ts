import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './Counter/counter.module';
import { HeroesModule } from './Heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';


// import { HeroComponent } from './Heroes/hero/hero.component';
// import { ListComponent } from './Heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
