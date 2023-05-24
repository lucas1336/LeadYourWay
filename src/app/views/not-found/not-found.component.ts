import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  routePath!: string;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.routePath = this.route.snapshot.url.join('/');
  }
}
