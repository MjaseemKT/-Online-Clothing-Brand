import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminwComponent } from './adminw/adminw.component';
import { PopupcartComponent } from './popupcart/popupcart.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { PopupwishComponent } from './popupwish/popupwish.component';
import { ShirtComponent } from './shirt/shirt.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { PantsComponent } from './pants/pants.component';
import { JeansComponent } from './jeans/jeans.component';
import { KurtiComponent } from './kurti/kurti.component';
import { SareeComponent } from './saree/saree.component';
import { LeggingsComponent } from './leggings/leggings.component';
import { ChuridarComponent } from './churidar/churidar.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AboutComponent } from './about/about.component';
import { PopupreceiptComponent } from './popupreceipt/popupreceipt.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'adminw', component: AdminwComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'cart', component: PopupcartComponent},
  { path: 'women', component: WomenComponent},
  { path: 'men', component: MenComponent},
  { path: 'wish', component: PopupwishComponent},
  { path: 'shirt', component: ShirtComponent},
  { path: 'tshirt', component: TshirtComponent},
  { path: 'pants', component: PantsComponent},
  { path: 'jeans', component: JeansComponent},
  { path: 'kurti', component: KurtiComponent},
  { path: 'saree', component: SareeComponent},
  { path: 'leggings', component: LeggingsComponent},
  { path: 'churidar', component: ChuridarComponent},
  { path: 'productdetails', component: ProductdetailsComponent},
  { path: 'orderdetails', component: OrderdetailsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'receipt', component: PopupreceiptComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



