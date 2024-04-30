// Import necessary Angular modules and your directives
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import your directives
import { ReadonlyDirective } from './directives/readonly.directive';
import { NoWhitespaceDirective } from './directives/no-whitespace.directive';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';

@NgModule({
  declarations: [
    // Declare your directives here
    ReadonlyDirective,
    NoWhitespaceDirective,
    NumbersOnlyDirective,
    // Declare your components here
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
