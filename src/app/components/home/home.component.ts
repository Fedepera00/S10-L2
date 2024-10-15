import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  active: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  tags: string[] = [];
  filteredPosts: Post[] = [];
  selectedTag: string | null = null;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.filteredPosts = this.posts;
    this.tags = this.postService.getTags();
  }

  filterByTag(tag: string) {
    this.selectedTag = tag;
    this.filteredPosts = this.postService.getPostsByTag(tag);
  }
}
