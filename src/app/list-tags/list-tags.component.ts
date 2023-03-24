import { Component } from '@angular/core';

@Component({
  selector: 'app-list-tags',
  templateUrl: './list-tags.component.html',
  styleUrls: ['./list-tags.component.scss']
})
export class ListTagsComponent {
  myArray: any[] = [
    "apple",
    "banana",
    "orange",
    "grape",
    "kiwi",
    "strawberry",
    "blueberry",
    "watermelon",
    "pineapple",
    "peach",
    "mango",
    "pear",
    "lemon",
    "lime",
    "coconut",
    "avocado",
    "tomato",
    "carrot",
    "broccoli",
    "cauliflower",
    "cucumber",
    "potato",
    "onion",
    "garlic",
    "pepper",
    "salt",
    "sugar",
    "flour",
    "butter",
    "milk",
    "cheese",
    "bread",
    "chicken",
    "beef",
    "pork",
    "fish"
  ];
  oldIndex=0;
  newIndex=0;
  changeBackgroundColor(index: number) {
    this.oldIndex=this.newIndex;
    this.newIndex=index;
    document.getElementById(`${this.newIndex}`)?.classList.add('dark-btn')
    document.getElementById(`${this.oldIndex}`)?.classList.remove('dark-btn')
  }
}
