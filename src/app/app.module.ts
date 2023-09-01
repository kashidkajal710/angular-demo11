import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsModule  } from '@angular/forms';
import { CustomStyleDirective } from './directive1/custom-style.directive';
import { DirComponentComponent } from './dir-component/dir-component.component';
import { PipeComponent } from './pipe/pipe.component';
import { MyLowerCasePipe } from './pipes/my-lower-case.pipe';
import { PipeAssingenmentComponent } from './pipe-assingenment/pipe-assingenment.component';
import { SearchpipePipe } from './pipes/searchpipe.pipe';
import { FormComponentComponent } from './form-component/form-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CustomStyleDirective,
    DirComponentComponent,
    PipeComponent,
    MyLowerCasePipe,
    PipeAssingenmentComponent,
    SearchpipePipe,
    FormComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
