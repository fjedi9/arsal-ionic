import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.page.html',
  styleUrls: ['./transporte.page.scss'],
})
export class TransportePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  backToMain(){
    this.router.navigate(['/main']);
  }
}
