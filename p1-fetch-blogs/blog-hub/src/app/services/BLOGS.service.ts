import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
public getdata(){
  let myObservable=this.http.get("http://localhost:3000/blogs");
  return myObservable;
}
  constructor(private http:HttpClient) { }
  public adddata(data:any){
    return this.http.post("http://localhost:3000/blogs",data);
  }
}
