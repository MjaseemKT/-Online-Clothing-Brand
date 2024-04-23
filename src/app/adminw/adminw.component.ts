import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminw',
  templateUrl: './adminw.component.html',
  styleUrls: ['./adminw.component.css']
})
export class AdminwComponent {
  typez: string = '';
  id: string = '';
  name: string = '';
  color: string = '';
  size: string = '';
  images: string[] = [];
  MRPPrice: string = '';
  offerPrice: string = '';
  formData2: any[] = []; 
  NumberOfQuantity: string = '';

  constructor(private router: Router) { }

  onSubmit(): void {
    
    if (!this.typez || !this.name || !this.color || !this.size || !this.MRPPrice || !this.offerPrice  || this.images.length === 0) {
      alert("Please fill in all fields and select at least one image.");
      return;
    }
  
    const formData2 = {
      id: this.generateId(), 
      typez: this.typez,
      name: this.name,
      color: this.color,
      size: this.size,
      images: this.images,
      MRPPrice: this.MRPPrice,
      offerPrice: this.offerPrice
    };
  
    let existingData = JSON.parse(localStorage.getItem(this.typez) || '[]');
    existingData.push(formData2);
    localStorage.setItem(this.typez, JSON.stringify(existingData));
  
    this.resetForm();
    this.loadFormData();
    alert("Data Sved Successfully .")
  }
  
  generateId(): string {
    const chars = '0123456789';
    let id = '';
    for (let i = 0; i < 6; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
   
  resetForm() {
    this.typez = '';
    this.id = '';
    this.name = '';
    this.color = '';
    this.size = '';
    this.NumberOfQuantity ='';
    this.images = [];
    this.MRPPrice = '';
    this.offerPrice = '';
  }

 
    ngOnInit(): void {
   
      this.loadFormData();
  
      
    }

    loadFormData(): void {
      const typezs = ['kurti', 'saree', 'leggings', 'churidar'];
      typezs.forEach(typez => {
          const storedDetails = localStorage.getItem(typez);
          if (storedDetails) {
              const items = JSON.parse(storedDetails);
              
              const filteredItems = items.filter((item: { typez: string; }) => item.typez === typez);
              localStorage.setItem(typez, JSON.stringify(filteredItems));
             
              filteredItems.forEach((item: { id: any; }) => {
                  const index = this.formData2.findIndex(existingItem => existingItem.id === item.id);
                  if (index === -1) {
                      this.formData2.push(item);
                  }
              });
          }
      });
  }

  
  
  onImageSelected(event: any) {
    const file = event.target.files[0];
    this.convertToBase64(file).then((base64Image: string) => {
      this.images.push(base64Image);
    });
  }

  convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = error => reject(error);
    });
  }

  delete(data: any) {
    if (confirm("Are you sure you want to delete this entry?")) {
    const index = this.formData2.indexOf(data);
    if (index !== -1) {
      this.formData2.splice(index, 1);
      localStorage.setItem(data.typez, JSON.stringify(this.formData2.filter(item => item.typez === data.typez)));
    }
    alert("Deleted Successfully");
  }
  }
  
  edit(data: any) {
    data.isEditing = true; 

    this.typez = data.typez;
    this.id = data.id;
    this.name = data.name;
    this.color = data.color;
    this.size = data.size;
    this.NumberOfQuantity = data.NumberOfQuantity;
    this.MRPPrice = data.MRPPrice;
    this.offerPrice = data.offerPrice;
    this.images = data.images;
  }

  save(data: any) {
    const editedData = {
      typez: this.typez,
      id: this.id,
      name: this.name,
      color: this.color,
      size: this.size,
      MRPPrice: this.MRPPrice,
      offerPrice: this.offerPrice,
      images: this.images,
      NumberOfQuantity: this.NumberOfQuantity,
    };
  
    const typezData = JSON.parse(localStorage.getItem(data.typez) || '[]');
    const index = typezData.findIndex((item: any) => item.id === data.id);
  
    if (index !== -1) {
      typezData[index] = editedData;
      localStorage.setItem(data.typez, JSON.stringify(typezData));
      data.isEditing = false;
      this.resetForm();
      
    this.loadFormData();
    }
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
}
