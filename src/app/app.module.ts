import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatToolbarModule
} from '@angular/Material'

import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { QuestionComponent } from './question/question.component'
import { ApiService } from './api.service'
import { QuestionsComponent } from './questions/questions.component'
import { HomeComponent } from './home/home.component'
import { NavComponent } from './nav/nav.component'
import { QuizComponent } from './quiz/quiz.component'
import { QuizzesComponent } from './quizzes/quizzes.component'

const routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizId', component: QuestionComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'quiz', component: QuizComponent }]

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizzesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule
  ],

  providers: [ApiService],
   bootstrap: [AppComponent]
})
 export class AppModule { } 