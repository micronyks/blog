import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class UserService{
  user="user : micronyks";
  students:any;
  constructor(private http:Http){
    console.log('UserService fired');
  }

  public getJson() {
    return  this.http
            .get('./students.json').map(t=>t.json())
            .toPromise()
            .then(
              (response) => {
               // console.log('response:',response);
              },
              (error) => {
                //console.log('Error:',error);
              }
            );
  }

  public GetStudents(){
    return this.http.get('./students.json').map(t=> {return t.json()[0].id});
  }
}