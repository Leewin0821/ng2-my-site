import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component'
import { SimpleFormComponent } from './simple-form/simple-form.component'
import { MessageService } from './message.service'
import { TopicService } from './topic.service'

@NgModule( {
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: MessageService, useClass: MessageService },
    { provide: TopicService, useClass: TopicService },
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
