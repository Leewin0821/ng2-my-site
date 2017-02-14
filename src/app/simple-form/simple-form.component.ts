import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor(private message: MessageService) {
    this.message = message
  }

  ngOnInit() {
  }

  onClick(value) {
    this.message.setMessage(value)
  }

}
