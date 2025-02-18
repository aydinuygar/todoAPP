import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, deleteDoc, doc, addDoc, serverTimestamp, DocumentReference, DocumentData } from '@angular/fire/firestore'; // Import DocumentReference and DocumentData
import { Observable } from 'rxjs';
import { Todo } from '../todo.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }

  getTodos(): Observable<Todo[]> {
    const todosCollection = collection(this.firestore, 'todos');
    return collectionData(todosCollection, { idField: 'id' }) as Observable<Todo[]>;
  }

  deleteTodo(id: string) {
    const todoDoc = doc(this.firestore, 'todos', id);
    return deleteDoc(todoDoc);
  }

  addTodo(todo: any): Promise<DocumentReference<DocumentData>> { 
    const todosCollection = collection(this.firestore, 'todos');
    return addDoc(todosCollection, { ...todo, createdAt: serverTimestamp() });
  }
}