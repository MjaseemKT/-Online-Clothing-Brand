import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {

 

  constructor(private router: Router) { }




  
  gotokurti(): void {
    this.router.navigate(['/kurti']); 
  }

  gotosaree(): void {
    this.router.navigate(['/saree']); 
  }


  gotoleggings(): void {
    this.router.navigate(['/leggings']); 
  }


  gotochuridar(): void {
    this.router.navigate(['/churidar']); 
  }
}




