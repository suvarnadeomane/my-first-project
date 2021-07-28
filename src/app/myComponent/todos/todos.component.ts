import { Component, OnInit ,Input} from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
//@Input() todo!: Todo;
 todos: Todo[];
 title1 = 'my-first-project1';
constructor() {

  this.todos = [{
      sno: 1,
      title: "Item 1",
      desc: "Description for item 1",
      active: true
  },
  {
      sno: 2,
      title: "Item 2",
      desc: "Description for item 2",
      active: true
  },
  {
      sno: 3,
      title: "Item 3",
      desc: "Description for item 3",
      active: true
  }
  ];
  }

  ngOnInit(): void {

  }

}
