import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BibleService } from 'src/app/services/bible.service';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';

@Component({
  selector: 'app-him-bible',
  templateUrl: './him-bible.component.html',
  styleUrls: ['./him-bible.component.scss']
})
export class HimBibleComponent implements OnInit {

  @ViewChild('screen', { static: true }) screen: any;

  showClickMe: boolean = false;
  currentVerse: { verse: string; reference: string } | null = null;
  allUsed = false;
  url: string = '';
  text: string = 'NewYear_Bible_Verse';
  isLinkCopied: boolean = false;
  img: string= '';

  constructor(private router: Router, private bibleService: BibleService, private captureService: NgxCaptureService) { }

  ngOnInit(): void {
    // this.url = window.location.origin;
    const baseUrl = window.location.origin; // Base URL (e.g., https://example.com)
    const relativeUrl = this.router.url;   // Relative route
    this.url = baseUrl + relativeUrl;
    this.showClickMe = true;
  }

  generateBible() {
    this.showClickMe = false;
    const verse = this.bibleService.getRandomVerse();
    if (verse) {
      this.currentVerse = verse;
      this.allUsed = false;

    } else {
      this.allUsed = true;
    }

  }

  shareOnFacebook() {
    console.log("this url ", this.url)
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.url)}`;
    window.open(fbUrl, '_blank');
  }

  shareOnX() {
    // this.url = 'https://unsplash.com/photos/brown-and-white-gift-box-HZuJfZlXVQY'
    const xUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.url)}&text=${encodeURIComponent(this.text)}`;
    window.open(xUrl, '_blank');
  }

  copyLink() {
    navigator.clipboard.writeText(this.url).then(() => {
      this.isLinkCopied = true;
      setTimeout(() => this.isLinkCopied = false, 3000); // Reset message after 3 seconds
    }).catch(err => {
      console.error('Error copying link: ', err);
    });
  }

  download() {
    this.captureService
      .getImage(this.screen.nativeElement, true)
      .pipe(
        tap((img: string) => {
          this.img = img;
        }),
        tap((img) => this.captureService.downloadImage(img))
      )
      .subscribe();
  }

}
