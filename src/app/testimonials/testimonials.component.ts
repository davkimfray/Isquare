import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  slides = ['1.jpg', '2.png', '3.jpg', '4.png'];

  constructor() { }

  ngOnInit() {
  }

}
