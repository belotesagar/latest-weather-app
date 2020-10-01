import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent implements OnInit, OnChanges {

  constructor() {
    console.log(`default page constructor called...`);
  }
  @Input() myValue = "sagar";

  ngOnInit(): void {
    console.log(`default page ngOnInit called...`);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(`default page ngOnChanges called...`);

  }

}
