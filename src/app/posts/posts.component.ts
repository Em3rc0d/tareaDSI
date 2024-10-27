import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../servicios/posts.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  comments: any[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  loadComments(postId: number): void {
    this.postsService.getComments(postId).subscribe((data) => {
      this.comments = data;
    });
  }
}
