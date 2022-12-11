import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  //to recieve values from parent use input in child
  @Input() item:string | undefined
  @Input() serverMsg:string | undefined
    //to send values from child to parent use output in child
  //onCancel is an user defined event
  @Output()  onCancel = new EventEmitter()
  @Output() onDelete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  
  cancel(){
    //occur the onCancel event here using emit()
    this.onCancel.emit()
  }

  deleteChild(){
    let deteleConfirm=true
    this.onDelete.emit([this.item,deteleConfirm])
    this.item=""
  }
}
