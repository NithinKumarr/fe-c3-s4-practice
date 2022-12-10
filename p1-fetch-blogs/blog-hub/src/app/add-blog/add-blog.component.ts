import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../services/BLOGS.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent{

  blog: Blog = {};
  constructor(private service:BlogService) { }

  saveBlog() {
    if(this.blog.title){
    this.service.adddata(this.blog).subscribe({
      next:val=>{alert("blog")
      this.blog={}},
    error:err=>console.log(err)
    })
  }
}
}
