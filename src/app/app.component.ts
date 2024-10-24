import { Component, inject, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { LoginService } from './services/login/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnDestroy {
  private router = inject(Router);
  loginService = inject(LoginService);

  private logoutSubscription: Subscription | null = null;

  logout() {
    this.logoutSubscription = this.loginService.logout().subscribe({
      next: (_) => {
        this.navigateToLogin();
      },
      error: (_) => {
        this.navigateToLogin();
      },
    });
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  navigateHome() {
    this.router.navigate(['home']);
  }

  ngOnDestroy(): void {
    this.logoutSubscription?.unsubscribe();
  }
}
