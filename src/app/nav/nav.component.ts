import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output()
  navigationString = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(input: string) {
    this.navigationString.emit(input);
  }
}
