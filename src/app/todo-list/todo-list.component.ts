import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule, RouterModule],
})
export class TodoListComponent implements OnInit {
  todos: Observable<Todo[]> | undefined;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.todos = this.firebaseService.getTodos();
  }

  deleteTodo(id: string) {
    this.firebaseService.deleteTodo(id);
  }
}