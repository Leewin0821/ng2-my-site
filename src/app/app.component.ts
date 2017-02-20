import { Component, Inject } from '@angular/core';
import { MessageService } from './services/message.service';
import { TopicService } from './services/topic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heal World';
  message = this.messageService.body;
  topics = this.topicService.topics;
  constructor(@Inject(MessageService) private messageService,
              @Inject(TopicService) private topicService) {}
}
