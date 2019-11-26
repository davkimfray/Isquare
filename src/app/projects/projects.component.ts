import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  cardHeight = 135;
  projects = [1, 2, 3];
  mobile = false;
  slides = ['1.jpg', '2.png', '3.jpg'];


  constructor() {
  }

  ngOnInit() {
    if (window.screen.width <= 400) {
      this.mobile = true;
      this.cardHeight = 135;
    } else if (window.screen.width <= 768) {
      this.mobile = true;
      this.cardHeight = 60;
    }
  }

}
