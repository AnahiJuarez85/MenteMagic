import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LetterService } from '../../services/letter.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
<<<<<<< HEAD:src/app/components/add-edit/add-edit.component.ts
  showButton = false;
=======
>>>>>>> 46380839fbf683a9a0d4e580c99502545f454b03:frontend/src/app/components/add-edit/add-edit.component.ts

  constructor(private letterService: LetterService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form): void {
    this.letterService.createLetter(form.value).subscribe(res => {
      this.router.navigateByUrl('/ModuloLetras');
<<<<<<< HEAD:src/app/components/add-edit/add-edit.component.ts
      this.showButton = true;
    });
  }

  navigateToModule(): void {
    this.router.navigateByUrl('/principal');
  }
=======
    });
  }
>>>>>>> 46380839fbf683a9a0d4e580c99502545f454b03:frontend/src/app/components/add-edit/add-edit.component.ts
}
    
  
