import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface BibleVerse {
  verse: string;
  reference: string;
}

@Injectable({
  providedIn: 'root'
})
export class BibleService {
  private verses: BibleVerse[] = [];
  private usedVerses: Set<number> = new Set();

  constructor(private http: HttpClient) {
    this.loadVerses();
  }

  private loadVerses() {
    this.http.get<BibleVerse[]>('/assets/bible-verses.json').subscribe(data => {
      this.verses = data;
    });
  }

  getRandomVerse(): BibleVerse | null {
    if (this.usedVerses.size === this.verses.length) {
      // All verses have been used
      return null;
    }

    let index;
    do {
      index = Math.floor(Math.random() * this.verses.length);
    } while (this.usedVerses.has(index));

    this.usedVerses.add(index);
    return this.verses[index];
  }

  resetVerses() {
    this.usedVerses.clear();
  }
}
