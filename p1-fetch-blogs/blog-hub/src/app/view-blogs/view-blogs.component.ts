import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import {BlogService} from '../services/BLOGS.service';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private service:BlogService) { }
 
  ngOnInit(): void {
    this.service.getdata().subscribe({
      next:(val:any)=>this.blogs=val,
      error:err=>console.log(err)
    })

  }

}
