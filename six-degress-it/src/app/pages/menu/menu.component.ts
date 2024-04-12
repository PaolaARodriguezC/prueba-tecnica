import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  username: string = '';
  url = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>(this.url).subscribe(
      (response) =>{
        this.username = response.title
      }
    )
  }

}
