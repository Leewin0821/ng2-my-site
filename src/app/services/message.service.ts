import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }

  body = 'Awesome Man'

  setMessage(value) {
    this.body = value
  }
}
