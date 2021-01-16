import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable }from 'rxjs';
import { Detail } from './detail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  dataTable = [];
  data$ : Observable<Detail[]>;

 constructor(private http:HttpClient){}
  
  submitdata(val: Detail) {
   this.http.post('https://ng-demo-69b0b-default-rtdb.firebaseio.com/posts.json',val).subscribe(res=> {
   });
  }
//  to get the table data using subscribe

  // getData(){
  //   this.http.get<{[key: string]: Detail}>('https://ng-demo-69b0b-default-rtdb.firebaseio.com/posts.json')
  //   .pipe(map(data=> {
  //     const dataArray: Detail[] = [];
  //     console.log('type of data', typeof(data));
  //     for( const item in data) {
  //       dataArray.push({...data[item]});
  //     }
  //     return dataArray;
  //   })
  //   ).subscribe(res=>{
  //     console.log(res);
  //     this.dataTable = res;
  //     // console.log('data array',this.dataTable);
  //   });
  // }

// to get table data using async pipe to subscribe 

   getAsyncData (){
    this.data$ = this.http.get<{[key:string]: Detail}>('https://ng-demo-69b0b-default-rtdb.firebaseio.com/posts.json')
    .pipe(map(data=> {
      const dataArray: Detail[] = [];
      console.log('type of data', typeof(data));
      for( const item in data) {
        dataArray.push({...data[item]});
      }
      return dataArray;
    })
    );
   }
 }
