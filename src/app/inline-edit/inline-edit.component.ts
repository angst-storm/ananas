import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.css']
})
export class InlineEditComponent {
  public edit: boolean = false;

  @Input()
  public value: string = '';

  @Output()
  public onValueChanged: EventEmitter<string> = new EventEmitter<string>()
}
