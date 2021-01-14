import { Component } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  dataTable = [];
 constructor(private http:HttpClient){}
  
  submitdata(val: {name: string; age: number; gender: string; address: string}) {
   this.http.post('https://ng-demo-69b0b-default-rtdb.firebaseio.com/posts.json',val).subscribe(res=> {
   });
  }

  getData(){
    this.http.get('https://ng-demo-69b0b-default-rtdb.firebaseio.com/posts.json')
    .pipe(map(data=> {
      const dataArray = [];
      for( const item in data) {
        dataArray.push({...data[item]});
      }
      return dataArray;
    })
    ).subscribe(res=>{
      console.log(res);
      this.dataTable = res;
      console.log('data array',this.dataTable);
    });
  }
}
