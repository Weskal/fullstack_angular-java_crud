import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee Management System';

  reloadPage(event: Event) {
  event.preventDefault();  // previne navegação SPA
  window.location.href = '/employees';  // força recarregar a página
}
}

