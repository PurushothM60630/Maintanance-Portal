import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(private router: Router) { }
  isMenuOpen = true;
  contentMargin = 240;

  ngOnInit(): void {
  }
  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  logout(){
    this.router.navigate(['mainlogin']);
    window.onpopstate = function () {
      window.history.forward();
  }
 
}
}
