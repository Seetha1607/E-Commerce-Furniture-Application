import { Component } from '@angular/core';
import { CartService } from './Services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nook & Cranny Furnitures';
  public searchTerm !: string;

  constructor(private cart:CartService){}

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this. cart.search.next(this.searchTerm);
  }
}
