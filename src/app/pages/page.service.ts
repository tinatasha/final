import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PageService {

  private username: string;
  private clientid='4f8a27ae35957c057c07';
  private clientsecret='acae2b29ac728e44f6eb9c4532dcb30eb9f022bf';
  constructor(private http:Http) {
    console.log("service working");
    this.username = "CollinsMuiruri";
   }
   getUserInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map(res => res.json());
   }

   getUserRepos(){
     return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map(res => res.json());
   }
   updateUser(username:string){
     this.username = username;
   }
   }
   // 16343c4bc7e78f0d8ab3ce93de0f15a77f64104e
