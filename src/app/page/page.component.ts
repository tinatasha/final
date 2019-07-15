import { Component, OnInit } from '@angular/core';
import {PageService} from '../pages/page.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  user: any[];
  repos: any[];
  username:string;
  constructor(private pageService: PageService) {
   }

   searchUser(){
     this.pageService.updateUser(this.username);
     this.pageService.getUserInfo().subscribe(user =>{
       console.log(user);
       this.user = user;
     });
     this.pageService.getUserRepos().subscribe(repos =>{
       console.log(repos);
       this.repos = repos;
     });
   }

  ngOnInit() {
  }

}
