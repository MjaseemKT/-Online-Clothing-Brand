import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css'],
  
})
export class OrderdetailsComponent {
  cartItems: any[] = [];
  shippingDetailsList: Details[] = [];
  carttable: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.cartItems = storedCartItems.map((item: any) => ({ ...item, isEditing: false }));

   
    const storedShippingDetails = JSON.parse(localStorage.getItem('shippingDetails') || '[]');
    this.shippingDetailsList = storedShippingDetails.map((detail: Details, index: number) => ({ ...detail, serial: index + 1, isEditing2: false }));
  }

  deleteCartItem(index: number): void {
    if (confirm("Are you sure you want to delete this entry?")) {
    
    this.cartItems.splice(index, 1);
    
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    alert("Deleted Successfully");
    }
  }

  edit(data: any) {
    data.isEditing = true; 
    
    data.originalData = { ...data };
  }

  save(data: any) {
   
    data.isEditing = false;
   
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  deleteShippingDetail(index: number): void {
    if (confirm("Are you sure you want to delete this entry?")) {
  
    this.shippingDetailsList.splice(index, 1);
   
    this.updateSerialNumbers();
    
    localStorage.setItem('shippingDetails', JSON.stringify(this.shippingDetailsList));
    alert("Deleted Successfully");
    }
  }

  saveShippingDetail(index: number): void {
    this.shippingDetailsList[index].isEditing2 = false; 
   
    this.shippingDetailsList[index].originalData = { ...this.shippingDetailsList[index] };
    localStorage.setItem('shippingDetails', JSON.stringify(this.shippingDetailsList));
  }

  editShippingDetail(index: number): void {
   
    this.shippingDetailsList[index].isEditing2 = true;
  
    localStorage.setItem('shippingDetails', JSON.stringify(this.shippingDetailsList));
  }

  updateSerialNumbers(): void {
    
    this.shippingDetailsList.forEach((detail, index) => detail.serial = index + 1);
  }

  gotoadmin(): void {
    this.router.navigate(['/admin']); 
  }
  
  gotoadminw(): void {
    this.router.navigate(['/adminw']); 
  }
  
  gotoorder(): void {
    this.router.navigate(['/orderdetails']); 
  }
  
  gotohome(): void {
    this.router.navigate(['/']); 
  }

  exportToExcel(): void {
    if (this.cartItems.length === 0) {
      alert("No data to export.");
      return;
    }
    
    const fileName = 'ordered_items.xlsx';
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('carttable'));
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, fileName);
  }
  
  exportShippingTableToExcel(): void {
    if (this.shippingDetailsList.length === 0) {
      alert("No data to export.");
      return;
    }
  
    const fileName = 'shipping_details.xlsx';
    const header = ['SL.No', 'shippingId','Name', 'Address', 'State', 'District', 'PIN', 'Phone', 'Email', 'Landmark'];
    const data = this.shippingDetailsList.map((detail, index) => [
      index + 1,
      detail.shippingId,
      detail.name,
      detail.address,
      detail.state,
      detail.district,
      detail.pin,
      detail.phone,
      detail.email,
      detail.landmark
    ]);
  
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([header, ...data]);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, fileName);
  }
  
  onDateChange(item: any) {
   
    console.log(item.date);
}

 
}

interface Details {
shippingId: any;
  originalData: { isEditing2: any; serial: number; name: string; address: string; state: string; district: string; pin: string; phone: string; email: string; landmark: string; };
isEditing2: any;
  serial: number;
  name: string;
  address: string;
  state: string;
  district: string;
  pin: string;
  phone: string;
  email: string;
  landmark: string;
}
