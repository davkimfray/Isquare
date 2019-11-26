import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentorship',
  templateUrl: './mentorship.component.html',
  styleUrls: ['./mentorship.component.css']
})
export class MentorshipComponent implements OnInit {
  slides = ['1.jpg', '2.png', '3.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
