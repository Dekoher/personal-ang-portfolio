import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
  speed: number;
  counter: number;
  text: string;
  welcomeTextArray: any;
  constructor() {
    this.welcomeTextArray = {
      text1: "New things are comming...",
      text2: "|",
    };
    this.text = 'typewriter';
    this.counter = 0;
    this.speed = 50;
  }

  ngOnInit(): void {
    this.typewriter();
  }

  typewriter() {
    const numbers = interval(100);
    const title = numbers.pipe(take(this.welcomeTextArray.text1.length));
    const titleContent = document.querySelector('#title');
    const subtitle = numbers.pipe(take(this.welcomeTextArray.text2.length));
    title.subscribe((x) => {
      // console.log('Next: ', x);
      document.querySelector('#title').innerHTML += this.welcomeTextArray.text1.charAt(x);
      // console.log(titleContent.textContent);
      if (titleContent.textContent === this.welcomeTextArray.text1) {
        subtitle.subscribe((x) => {
          document.querySelector('.blinking-cursor').innerHTML += this.welcomeTextArray.text2.charAt(x);
        });
      }
    });
  }

}
