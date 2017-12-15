import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) { }//only for use when u want to inject something like service

  //initalization do in here ex: fetching stuff
  ngOnInit() {//lifecycle run autometiclly when the component is generate    we want to fetch item thourgh the service
    console.log('ngOninit ran')
    this.itemService.getItems().subscribe(items => {
      console.log(items)
      this.items = items;
    });
  }

  deleteItem(event, item){
    this.itemService.deleteItem(item);
  }

}
