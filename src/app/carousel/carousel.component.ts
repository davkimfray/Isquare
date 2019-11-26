import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slides = ['1.jpg', '2.png', '3.jpg', '4.png'];

  constructor() { }

  ngOnInit() {
  }

}
