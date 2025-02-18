import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
  imports: [FormsModule]
})
export class TodoAddComponent {
  constructor(private firebaseService: FirebaseService, private router: Router) { } 

  async addTodo(form: any) {
    const todo = {
      title: form.title,
      priority: form.priority
    };

    await this.firebaseService.addTodo(todo); 

    this.router.navigate(['/']);
  }
}