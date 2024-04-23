// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'country'
// })
// export class CountryPipe implements PipeTransform {
//   transform(price: any, countryCode: string): string {
   
//     if (typeof price !== 'number' || isNaN(price)) {
//       return ''; 
//     }

//     switch(countryCode) {
//       case 'IND':
//         return '₹' + price.toFixed(2);
//       case 'EU':
//         return '€' + price.toFixed(2);
//       case 'US':
//         return '$' + price.toFixed(2);
//       default:
//         return price.toFixed(2);
//     }
//   }
// }
