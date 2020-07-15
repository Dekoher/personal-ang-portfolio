import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  speed: number;
  counter: number;
  text: string;
  welcomeTextArray: any;
  constructor() {
    this.welcomeTextArray = {
      text1: "Hi there! 👋🏻 I'm Diego Herrera",
      text2: "Frontend Developer"
    };
    this.text = 'typewriter';
    console.log('text=>', this.text.length);
    this.counter = 0;
    this.speed = 50;
  }

  ngOnInit(): void {
    const hamburger = document.querySelector('.hamburger-container');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      links.forEach((link) => {
        link.classList.toggle('fade');
      });
    });
    this.typewriter();
  }

  typewriter() {
    const numbers = interval(100);
    const title = numbers.pipe(take(this.welcomeTextArray.text1.length));
    const subtitle = numbers.pipe(take(this.welcomeTextArray.text1.length));
    title.subscribe((x) => {
      // console.log('Next: ', x);
      document.getElementById('title').innerHTML += this.welcomeTextArray.text1.charAt(x);
    });
    subtitle.subscribe((x) => {
      // console.log('Next: ', x);
      document.getElementById('subtitle').innerHTML += this.welcomeTextArray.text2.charAt(x);
    });
  }
}
