import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ProductComponent, CategoryComponent,
     NaviComponent,RouterModule,VatAddedPipe,FormsModule,FilterPipePipe, ReactiveFormsModule , ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Mehmet Akif Şanlan';
  
}
