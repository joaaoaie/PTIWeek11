import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloPtiComponent } from './hello-pti/hello-pti.component';
import { UserItemComponent } from './user-item/user-item.component';
import { MhsComponent } from './mhs/mhs.component';
import { TestNgmodelComponent } from './test-ngmodel/test-ngmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloPtiComponent,
    UserItemComponent,
    MhsComponent,
    TestNgmodelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
