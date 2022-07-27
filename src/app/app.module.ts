import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PushNotificationService } from './push-notification.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormcomComponent } from './formcom/formcom.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    FormcomComponent
  ],

  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  providers: [PushNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
