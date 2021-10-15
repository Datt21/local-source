import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-master-table',
  templateUrl: './button-master-table.component.html',
  styleUrls: ['./button-master-table.component.scss']
})
export class ButtonMasterTableComponent implements OnInit {
  @Input() visibleCopy = false;
  @Input() visibleDetail = true;
  @Input() visibleEdit = true;
  @Input() visibleDelete = true;

  @Output() onCopy = new EventEmitter<void>();
  @Output() onViewDetail = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  btnCopyClick() {
    this.onCopy.emit();
  }

  btnDetailClick() {
    this.onViewDetail.emit();
  }

  btnEditClick() {
    this.onEdit.emit();
  }

  btnDeleteClick() {
    this.onDelete.emit();
  }

}
