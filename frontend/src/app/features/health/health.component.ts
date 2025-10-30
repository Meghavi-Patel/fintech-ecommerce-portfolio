import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-health',
  imports: [],
  templateUrl: './health.html',
  styleUrl: './health.scss',
  template: `<p *ngIf="msg">Backend: {{ msg }}</p>`,
})
export class HealthComponent implements OnInit {
  msg = 'Loading...';
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.healthCheck().subscribe({
      next: (data) => {
        this.msg = data.status;
      },
      error: (err) => {
        this.msg = 'Error connecting to backend';
        console.error(err);
      },
    });
  }
}
