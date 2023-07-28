import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent {
  constructor(private apiService: ApiService) { }

  getTasksFromApi(): void {
    this.apiService.getTasks().subscribe(data => {
      console.log(data);
      
    })
  }

  ngOnInit(): void {
    this.getTasksFromApi()
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



  }

}
