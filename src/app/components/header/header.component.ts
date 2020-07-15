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
  // welcomeTextArray: any;
  constructor() {
    // this.welcomeTextArray = {
    //   text1: 
    // };
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
      console.log('navLinks=>', navLinks);
      links.forEach((link) => {
        console.log('link=>', link);
        link.classList.toggle('fade');
      });
    });
    // const numbers = interval(100);
    // const takeFourNumbers = numbers.pipe(take(this.text.length));
    // takeFourNumbers.subscribe((x) => {
    //   console.log('Next: ', x);
    //   document.getElementById('demo').innerHTML += this.text.charAt(x);
    // });
  }
}
