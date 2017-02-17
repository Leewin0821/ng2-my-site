import { Component, Inject } from '@angular/core';
import { MessageService } from './message.service'
import { TopicService } from './topic.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heal World'
  constructor(@Inject(MessageService) private messageService,
              @Inject(TopicService) private topicService) {}
}
