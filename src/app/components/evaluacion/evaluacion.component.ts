import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { evaluationService } from '../../services/evaluation.service'

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {
  showButton = false;
  constructor(private evaluationService: evaluationService, private router: Router) {}

  ngOnInit() {
  }
onSubmit(form): void {
    this.evaluationService. createEvaluation(form.value).subscribe(res => {
      this.router.navigateByUrl('/ModuloLetras');
      this.showButton = true;
    });
  }

  navigateToModule(): void {
    this.router.navigateByUrl('/principal');
  }
}
