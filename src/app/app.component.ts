import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  selectedNumber: number =0; // Store the selected number
  multiplicationTable: number[] = [];    // Array to hold the multiplication table

  // Method to generate the multiplication table
  printTable() :void {
      this.multiplicationTable = []; // Clear previous results

     // Check if a number is selected
      for (let i = 1; i <= 10; i++) {
        this.multiplicationTable.push(this.selectedNumber * i); // Calculate and add to the table
      }
    
  }
  
}
