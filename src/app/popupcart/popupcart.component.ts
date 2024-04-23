import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-popupcart',
  templateUrl: './popupcart.component.html',
  styleUrls: ['./popupcart.component.css']
})
export class PopupcartComponent {
  cartlist: any[] = [];
  cardDetails: CardDetails = {
    cardholderName: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  };
  shippingDetails: Details = {
    name: '',
    address: '',
    state: '',
    district: '',
    pin: '',
    phone: '',
    email: '',
    landmark: '',
    shippingId: 0
  };
  showFormSection2: boolean = false;
  name: any;



  constructor(private router: Router ) { }

  ngOnInit(): void {
    this.loadcartlist();
  }




 

  loadcartlist() {
    this.cartlist = JSON.parse(localStorage.getItem('cart') || '[]');

    this.cartlist.forEach(item => {
      if (!item.quantity) {
        item.quantity = 1;
      }
    });


    const uniqueItems: any[] = [];
    const uniqueIds = new Set();

  
    
    this.cartlist.forEach(item => {
      if (!uniqueIds.has(item.id)) {
        uniqueItems.push(item);
        uniqueIds.add(item.id);
      }
    });
    this.cartlist = uniqueItems;

    localStorage.setItem('cart', JSON.stringify(this.cartlist));
  }

  
  removeFromcartlist(item: any) {
    this.cartlist = this.cartlist.filter(cartItem => cartItem.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(this.cartlist));
  }

  incrementQuantity(item: any) {
    item.quantity++;
  }

  decrementQuantity(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }

  calculateTotalPrice2(): number {
    let totalPrice = 0;
    for (const item of this.cartlist) {
      totalPrice += this.calculateTotalPrice(item);
    }
    return totalPrice;
  }

  calculateTotalPrice3(): number {
    const subtotal = this.calculateTotalPrice2(); 
    const shipping = 20;
    const totalPrice = subtotal + shipping;
    return totalPrice;
  }

  calculateTotalPrice(item: any) {
    return item.offerPrice * item.quantity;
  }

  gotohome(): void {
    this.router.navigate(['/men']); 
  }

  submitForm(): void {
    if (!this.isValid()) {
      alert('Please fill in all fields and enter valid data.');
      return;
    }
 
   
    this.saveCartItemsToLocal();
  
    this.clearCartItemsFromLocalStorage();
   
    this.clearForm();
  

    window.alert("Your order has been submitted successfully.");

    this.gotoreceipt();
  }
 
  saveCartItemsToLocal(): void {
    const existingItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as any[];
    
    const shippingDetails = JSON.parse(localStorage.getItem('shippingDetails') || '[]') as Details[];
    const lastShippingId = shippingDetails.length > 0 ? shippingDetails[shippingDetails.length - 1].shippingId : null;
    const currentDate = new Date().toLocaleDateString(); 
    this.cartlist.forEach(item => {
        existingItems.push({
            cardholderName: this.name, 
            productName: item.name, 
            id: item.id,
            quantity: item.quantity,
            totalPrice: this.calculateTotalPrice(item),
            shippingId: lastShippingId ,
            date: currentDate 
        });
    });
    
    localStorage.setItem('cartItems', JSON.stringify(existingItems));
    this.saveReceiptToLocal();
}


saveReceiptToLocal(): void {
  const receipt: any[] = [];

  const shippingDetails = JSON.parse(localStorage.getItem('shippingDetails') || '[]') as Details[];
  const lastShippingId = shippingDetails.length > 0 ? shippingDetails[shippingDetails.length - 1].shippingId : null;

 

  this.cartlist.forEach(item => {
    const receiptItem = {
      productName: item.name, 
      quantity: item.quantity,
      totalPrice: this.calculateTotalPrice(item),
      shippingId: lastShippingId,
     
    };
    receipt.push(receiptItem);
  });

  localStorage.setItem('receipt', JSON.stringify(receipt));
}


  

  isValid(): boolean {
   
    if (
      this.cardDetails.cardholderName.trim() === '' ||
      this.cardDetails.cardNumber.trim() === '' ||
      this.cardDetails.expiration.trim() === '' ||
      this.cardDetails.cvv.trim() === ''
    ) {
      return false;
    }

   
    if (!/^\d{16}$/.test(this.cardDetails.cardNumber)) {
      alert('Card number must be a 12-digit number.');
      return false;
    }

    
    if (!/^\d{6}$/.test(this.cardDetails.expiration)) {
      alert('Expiration must be a 6-digit number.');
      return false;
    }

    
    if (!/^\d{3}$/.test(this.cardDetails.cvv)) {
      alert('CVV must be a 3-digit number.');
      return false;
    }

    return true;
  }



  clearForm(): void {
   
    this.cardDetails = {
      cardholderName: '',
      cardNumber: '',
      expiration: '',
      cvv: ''
    };
  }

  clearCartItemsFromLocalStorage(): void {
   
    localStorage.removeItem('cart');
}








submitForm2(): void {
  if (!this.isValid2()) {
    alert('Please fill in all fields and enter valid data.');
    return;
  }

 
  this.saveDetailsToLocal();

 
  alert('Details saved successfully.');

  this.toggleSections();
 
 
}

isValid2(): boolean {
  
  if (!this.shippingDetails.name || !this.shippingDetails.address || !this.shippingDetails.state ||
      !this.shippingDetails.district || !this.shippingDetails.pin || !this.shippingDetails.phone ||
      !this.shippingDetails.email || !this.shippingDetails.landmark) {
    return false;
  }

 
  if (!/^\d{10}$/.test(this.shippingDetails.phone)) {
    alert('Phone number must be a 10-digit number.');
    return false;
  }

  
  if (!/^\d{6}$/.test(this.shippingDetails.pin)) {
    alert('PIN code must be a 6-digit number.');
    return false;
  }

  
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(this.shippingDetails.email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  return true;
}

saveDetailsToLocal(): void {
  const existingDetails = JSON.parse(localStorage.getItem('shippingDetails') || '[]') as Details[];

  let uniqueId: number;
  do {
      uniqueId = Math.floor(1000000000 + Math.random() * 9000000000);
  } while (existingDetails.some(detail => detail.shippingId === uniqueId)); 

 
  this.shippingDetails.shippingId = uniqueId;

  
  existingDetails.push(this.shippingDetails);

  localStorage.setItem('shippingDetails', JSON.stringify(existingDetails));
}





toggleSections() {
  this.showFormSection2 = !this.showFormSection2;
}

gotoreceipt(): void {
  this.router.navigate(['/receipt']); 
}


}

interface CardDetails {
  cardholderName: string;
  cardNumber: string;
  expiration: string;
  cvv: string;
}

interface Details {
 
  shippingId: number;
  name: string;
  address: string;
  state: string;
  district: string;
  pin: string;
  phone: string;
  email: string;
  landmark: string;
}

