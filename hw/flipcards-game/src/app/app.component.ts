import { Component, OnInit } from '@angular/core';
import { cardData } from './components/card/card.component';
import { MatDialog } from '@angular/material/dialog';
import { RestartDialogComponent } from './components/restart-dialog/restart-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flipcards-game';

  cardIDs = [
    '2C',
    '2D',
    '3H',
    '3S',
    'KC',
    'KS',
  ];

  cards: cardData[] = [];
  flipedCards: cardData[] = [];
  count: number = 0;

  constructor(public dialog: MatDialog) { };

  ngOnInit(): void {
    this.setUp();
  }

  setUp(): void {
    this.cards = [];
    this.cardIDs.forEach((id) => {
      const card: cardData = {
        id: id,
        state: 'default'
      }
      this.cards.push({ ...card });
      this.cards.push({ ...card });
    });
    this.cards = this.shuffle(this.cards);
  }

  shuffle(arr: any[]): any[] {
    return arr.map(item => [Math.random(), item]).sort((a, b) => a[0] - b[0]).map((item) => item[1]);
  }

  cardClicked(index: number): void {
    const card = this.cards[index];

    if (card.state === 'default' && this.flipedCards.length < 2) {
      card.state = 'flipped';
      this.flipedCards.push(card);
      if (this.flipedCards.length === 2) {
        this.checkMatch();
      }
    } else if (card.state === 'flipped') {
      card.state = 'default';
      this.flipedCards.pop();
    }
  }

  checkMatch(): void {
    setTimeout(() => {
      const card1 = this.flipedCards[0];
      const card2 = this.flipedCards[1];
      const result = card1.id === card2.id ? 'matched' : 'default';
      card1.state = result;
      card2.state = result;
      this.flipedCards = [];

      if (result === 'matched') {
        this.count++;

        if (this.count === this.cardIDs.length) {
          const dialogRef = this.dialog.open(RestartDialogComponent);

          dialogRef.afterClosed().subscribe(() => {
            this.count = 0;
            this.setUp();
          });
        }
      }
    }, 1000);
  }
}
