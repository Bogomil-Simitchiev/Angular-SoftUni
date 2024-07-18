import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  id!: string | null;
  constructor(private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');

  }

}
