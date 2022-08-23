import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getNews().subscribe ( (result) => {
      this.articles = result['data'];
      console.log(result['data'])
    })
  }

}
