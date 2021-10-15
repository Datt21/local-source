import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ItemComplete } from '../../models/item-complete.model';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  keyword = 'name';
  @Input() data: ItemComplete[] = [];
  @Input() placeholder = '';
  @Input() disabled = false;
  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  @Output() onSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectEvent(item): void {
    // do something with selected item
    this.onSelected.emit(item);
  }

  onChangeSearch(val: string): void {
    // fetch remote data from here
    this.onSearch.emit(val);
  }

  onFocused(e): void {
    // do something when input is focused
  }

}
