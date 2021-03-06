import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { CardComponent } from './components/card/card.component';
import { MessageService } from './services/message.service';
import { TopicService } from './services/topic.service';
import 'hammerjs';

@NgModule( {
  declarations: [
    AppComponent,
    SimpleFormComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    { provide: MessageService, useClass: MessageService },
    { provide: TopicService, useClass: TopicService },
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
