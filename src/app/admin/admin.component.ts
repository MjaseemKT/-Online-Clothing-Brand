import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  type: string = '';
  id: string = '';
  name: string = '';
  color: string = '';
  size: string = '';
  images: string[] = [];
  MRPPrice: string = '';
  offerPrice: string = '';
  formData: any[] = []; 

  constructor(private router: Router) { }

  ngOnInit(): void {
   
    this.loadFormData();

    
  }

  onSubmit(): void {
   
    if (!this.type || !this.name || !this.color || !this.size || !this.MRPPrice || !this.offerPrice || this.images.length === 0) {
      alert("Please fill in all fields and select at least one image.");
      return;
    }
  
    const formData = {
      id: this.generateId(),
      type: this.type,
      name: this.name,
      color: this.color,
      size: this.size,
      images: this.images,
      MRPPrice: this.MRPPrice,
      offerPrice: this.offerPrice
    };
  
    let existingData = JSON.parse(localStorage.getItem(this.type) || '[]');
    existingData.push(formData);
    localStorage.setItem(this.type, JSON.stringify(existingData));
  
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

  resetForm(): void {
    this.type = '';
    this.id = '';
    this.name = '';
    this.color = '';
    this.size = '';
    this.images = [];
    this.MRPPrice = '';
    this.offerPrice = '';
  }



  loadFormData(): void {
    const types = ['pants', 't-shirt', 'shirt', 'jeans'];
    types.forEach(type => {
      const storedDetails = localStorage.getItem(type);
      if (storedDetails) {
          const items = JSON.parse(storedDetails);
      
        const filteredItems = items.filter((item: { type: string; }) => item.type === type);
              localStorage.setItem(type, JSON.stringify(filteredItems));
             
              filteredItems.forEach((item: { id: any; }) => {
                  const index = this.formData.findIndex(existingItem => existingItem.id === item.id);
                  if (index === -1) {
                      this.formData.push(item);
                  }
                })
                }
    });
  }
  
 

  onImageSelected(event: any): void {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = () => {
        this.images.push(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  delete(data: any): void {
    if (confirm("Are you sure you want to delete this entry?")) {
      const index = this.formData.indexOf(data);
      if (index !== -1) {
        this.formData.splice(index, 1);
        localStorage.setItem(data.type, JSON.stringify(this.formData.filter(item => item.type === data.type)));
      }
      alert("Deleted Successfully");
    }
  }

  edit(data: any): void {
    data.isEditing = true;
    this.type = data.type;
    this.id = data.id;
    this.name = data.name;
    this.color = data.color;
    this.size = data.size;
    this.MRPPrice = data.MRPPrice;
    this.offerPrice = data.offerPrice;
    this.images = data.images;
  }

  save(data: any) {
    const editedData = {
      type: this.type,
      id: this.id,
      name: this.name,
      color: this.color,
      size: this.size,
      MRPPrice: this.MRPPrice,
      offerPrice: this.offerPrice,
      images: this.images,
    
    };
  
    const typeData = JSON.parse(localStorage.getItem(data.type) || '[]');
    const index = typeData.findIndex((item: any) => item.id === data.id);
  
    if (index !== -1) {
      typeData[index] = editedData;
      localStorage.setItem(data.type, JSON.stringify(typeData));
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
