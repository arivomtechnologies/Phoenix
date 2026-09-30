import { Component, AfterViewInit, inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private ngZone = inject(NgZone);
  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId) || typeof window === 'undefined') return;

    this.initObserver();

    // Re-observe elements on route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTimeout(() => this.observeElements(), 60);
        setTimeout(() => this.observeElements(), 300);
      });
  }

  private initObserver() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-scale, .scroll-reveal-left, .scroll-reveal-right, .image-reveal'
      ).forEach(el => el.classList.add('in-view'));
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            this.observer?.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      });

      this.observeElements();

      // Catch dynamically rendered items (e.g. portfolio filter switches)
      const mutationObs = new MutationObserver(() => {
        this.observeElements();
      });

      mutationObs.observe(document.body, { childList: true, subtree: true });
    });
  }

  private observeElements() {
    if (!this.observer) return;
    const elements = document.querySelectorAll(
      '.scroll-reveal:not(.in-view), .scroll-reveal-scale:not(.in-view), .scroll-reveal-left:not(.in-view), .scroll-reveal-right:not(.in-view), .image-reveal:not(.in-view)'
    );
    elements.forEach(el => this.observer?.observe(el));
  }
}

