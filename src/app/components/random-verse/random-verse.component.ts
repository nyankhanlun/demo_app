import { Component, OnInit } from '@angular/core';
import { BibleService } from '../../services/bible.service';

@Component({
  selector: 'app-random-verse',
  templateUrl: './random-verse.component.html',
  styleUrls: ['./random-verse.component.scss']
})
export class RandomVerseComponent implements OnInit {
  currentVerse: { verse: string; reference: string } | null = null;
  allUsed = false;

  constructor(private bibleService: BibleService) {}

  ngOnInit(): void {
    this.getNewVerse();
  }

  getNewVerse() {
    const verse = this.bibleService.getRandomVerse();
    if (verse) {
      this.currentVerse = verse;
      this.allUsed = false;
    } else {
      this.allUsed = true;
    }
  }

  resetVerses() {
    this.bibleService.resetVerses();
    this.allUsed = false;
    this.getNewVerse();
  }
}
