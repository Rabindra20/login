import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  constructor(private router: Router,
    private authGuardService: AuthGuardService) { }

  ngOnInit() {
  }
  logout() {
    this.authGuardService.logout();
    this.router.navigate(['/login']);
  }
}

