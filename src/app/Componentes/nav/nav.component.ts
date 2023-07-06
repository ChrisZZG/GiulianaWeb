import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    onClick(): void {
      const hamburger = document.querySelector('.hamburger');
      this.onClick = function(){
        let navBar = document.querySelector('.nav-bar');
        navBar.classList.toggle('active');
      }
    }
    
}
