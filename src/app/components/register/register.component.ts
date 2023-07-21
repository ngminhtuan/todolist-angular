import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent {
  // @ViewChildren('inputField') inputFields!: QueryList<ElementRef>;
  constructor() { }
  // ngAfterViewInit(): void {
  //   this.inputFields.forEach(input => {
  //     input.nativeElement.addEventListener("focus", () => {
  //       input.nativeElement.classList.add("active");
  //     });
  //     input.nativeElement.addEventListener("blur", () => {
  //       if (input.nativeElement.value != "") return;
  //       input.nativeElement.classList.remove("active");
  //     });
  //   });
  // }

  ngOnInit(): void {
    const toggle_btn = document.querySelectorAll(".toggle");
    const main = document.querySelector("main");
    const images = document.querySelectorAll(".image");
    const bullets = document.querySelectorAll(".bullets span");

    const moveSlider = (event: any) => {
      let index: string = event.srcElement.dataset.value;
      let currentImage = document.querySelector(`.img-${index}`);
      let currentSpan = document.querySelector(`.bullet-${index}`)
      images.forEach((img) => img.classList.remove("show"));
      currentImage?.classList.add("show");

      bullets.forEach((bull) => bull.classList.remove("active"));
      currentSpan?.classList.add("active")
    }

    bullets.forEach((bullet) => {
      bullet.addEventListener("click", moveSlider);
    });
    toggle_btn.forEach((btn) => {
      btn.addEventListener("click", () => {
        main?.classList.toggle("sign-up-mode");
      });
    });

  }

}
