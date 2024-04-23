import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {

  constructor(private router: Router) { }

 
  
  gotopants(): void {
    this.router.navigate(['/pants']); 
  }

  gotojeans(): void {
    this.router.navigate(['/jeans']); 
  }


  gototshirt(): void {
    this.router.navigate(['/tshirt']); 
  }


  gotoshirt(): void {
    this.router.navigate(['/shirt']); 
  }
}

