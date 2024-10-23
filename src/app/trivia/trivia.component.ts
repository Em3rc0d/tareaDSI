import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../../servicios/trivia.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trivia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  selectedAnswer: string | null = null;
  score: number = 0;

  constructor(private triviaService: TriviaService) {}

  ngOnInit(): void {
    this.loadTriviaQuestions();
  }

  loadTriviaQuestions(): void {
    this.triviaService.getTriviaQuestions().subscribe(data => {
      this.questions = data.results;
    });
  }

  nextQuestion(): void {
    if (this.selectedAnswer === this.questions[this.currentQuestionIndex].correct_answer) {
      this.score++;
    }
    this.selectedAnswer = null; // Reset selected answer
    this.currentQuestionIndex++;
  }

  isLastQuestion(): boolean {
    return this.currentQuestionIndex >= this.questions.length - 1;
  }

  getAnswers(): string[] {
    const correctAnswer = this.questions[this.currentQuestionIndex]?.correct_answer;
    const incorrectAnswers = this.questions[this.currentQuestionIndex]?.incorrect_answers;
    return correctAnswer ? [correctAnswer, ...incorrectAnswers] : [];
  }

  isAnswerSelected(answer: string): boolean {
    return this.selectedAnswer === answer;
  }

  isCorrectAnswer(answer: string): boolean {
    return answer === this.questions[this.currentQuestionIndex]?.correct_answer;
  }
}
