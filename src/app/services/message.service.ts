import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  body = 'Awesome Man';

  constructor() { }

  setMessage(value) {
    this.body = value;
  }
}
