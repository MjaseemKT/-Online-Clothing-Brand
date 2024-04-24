import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] ,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HomeComponent {
  images: string[] = [
    '/assets/images/home1cloth.jpg',
    '/assets/images/home2cloth.jpg',
    '/assets/images/home3cloth.jpg',
    '/assets/images/home3cloth.jpg',
    '/assets/images/home4cloth.jpg',
    '/assets/images/home4cloth.jpg'
  ];
  currentIndex = 0;
 

  images2: string[] = [
    '/assets/images/home01cloth.jpg',
    '/assets/images/home02cloth.png',
    '/assets/images/home02cloth.png',
    '/assets/images/home03cloth.jpeg',
    '/assets/images/home04cloth.avif',
    '/assets/images/home01cloth.jpg',
  ];

  images3: string[] = [
    '/assets/images/homeadd3.jpg',
    '/assets/images/homeadd3.jpg',
    '/assets/images/homeadd4.jpg',
    '/assets/images/homeadd6.webp',
    '/assets/images/homeadd3.jpg',
    '/assets/images/homeadd4.jpg',
    '/assets/images/homeadd3.jpg',
    ];

  
  constructor(private router: Router){}
  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);

    
  }



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

  gotomen(): void {
    this.router.navigate(['/men']); 
  }
}
