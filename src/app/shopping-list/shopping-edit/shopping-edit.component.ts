import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInputRef: ElementRef<HTMLInputElement>;

  constructor(private slService: ShoppingListService) {}

  onAddItem() {
    this.slService.addIngredient(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        +this.amountInputRef.nativeElement.value
      )
    );
  }
}
