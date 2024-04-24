import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { AdminwComponent } from './adminw/adminw.component';
import { PopupcartComponent } from './popupcart/popupcart.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { PopupwishComponent } from './popupwish/popupwish.component';
import { PantsComponent } from './pants/pants.component';
import { JeansComponent } from './jeans/jeans.component';
import { ShirtComponent } from './shirt/shirt.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { KurtiComponent } from './kurti/kurti.component';
import { SareeComponent } from './saree/saree.component';
import { LeggingsComponent } from './leggings/leggings.component';
import { ChuridarComponent } from './churidar/churidar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AboutComponent } from './about/about.component';
import { PopupreceiptComponent } from './popupreceipt/popupreceipt.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AdminwComponent,
    PopupcartComponent,
    WomenComponent,
    MenComponent,
    PopupwishComponent,
    PantsComponent,
    JeansComponent,
    ShirtComponent,
    TshirtComponent,
    KurtiComponent,
    SareeComponent,
    LeggingsComponent,
    ChuridarComponent,
    ProductdetailsComponent,
    OrderdetailsComponent,
    AboutComponent,
    PopupreceiptComponent,
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
