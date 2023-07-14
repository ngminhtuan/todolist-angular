import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule]
})
export class RegisterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const inputs = document.querySelectorAll(".input-field");
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
    inputs.forEach((inp) => {
      console.log(inp);

      inp.addEventListener("focus", () => {
        inp.classList.add("active");
      });
      inp.addEventListener("blur", () => {
        if (inp.nodeValue != "") return;
        inp.classList.remove("active");
      });
    });
  }

  // submitApplication(name: string, password: string, email: string) {
  //   console.log(`Homes application received: firstName: ${name}, lastName: ${password}, email: ${email}.`);
  // }

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  // submitApplication() {
  //   this.housingService.submitApplication(
  //     this.applyForm.value.firstName ?? '',
  //     this.applyForm.value.lastName ?? '',
  //     this.applyForm.value.email ?? ''
  //   );
  // }

}
