import { Component, OnInit } from '@angular/core';
import { RandomuserService } from '../randomuser/randomuser.service'

@Component({
  selector: 'app-randomuser',
  standalone: false,
  templateUrl: './randomuser.component.html',
  styleUrl: './randomuser.component.css'
})
export class RandomuserComponent implements OnInit {

  user: any;

  constructor(private randomuserService: RandomuserService) { }

  ngOnInit(): void {
    this.randomuserService.getRandomUser().subscribe((data: any) => {
      this.user = data.results[0];
    });
  }
}
