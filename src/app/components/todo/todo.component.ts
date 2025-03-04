import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
   todo:Todo[] = [];
   constructor(private todoService:TodoService) { }

   ngOnInit(): void {
     this.getTodos();
   }

   getTodos(){
      this.todoService.getTodos().subscribe(response=>{
        this.todo = response
      });
   }
}
