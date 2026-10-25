import { Component, AfterViewInit, OnDestroy, inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AiAssistantWidgetComponent } from './components/ai-assistant-widget/ai-assistant-widget.component';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, AiAssistantWidgetComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private ngZone = inject(NgZone);
  private observer?: IntersectionObserver;
  private routerSub?: Subscription;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || typeof window === 'undefined') return;

    this.initObserver();
    this.initGsapScrollAnimations();

    // Re-initialize animations and observers on navigation
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTimeout(() => {
          this.observeElements();
          this.initGsapScrollAnimations();
        }, 80);
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    if (typeof window !== 'undefined') {
      ScrollTrigger.getAll().forEach(t => t.kill());
    }
  }

  /**
   * GSAP & ScrollTrigger Animation Engine
   * Implements 60fps physics-based reveals, showcase slides, button micro-hovers, and footer motion.
   */
  protected initGsapScrollAnimations(): void {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        // 1. Clear previous ScrollTrigger instances to prevent duplicate triggers
        ScrollTrigger.getAll().forEach(t => t.kill());

        const mainContent = document.querySelector('main') || document.body;

        // 2. HERO ENTRANCE TIMELINE
        const heroElements = mainContent.querySelectorAll(
          'h1, h1 + span, h1 + p, section:first-of-type .animate-fade-in-up, section:first-of-type .animate-fade-in-down'
        );
        if (heroElements.length > 0) {
          gsap.fromTo(
            Array.from(heroElements),
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.08,
              ease: 'power3.out',
              clearProps: 'transform,opacity'
            }
          );
        }

        // 3. SHOWCASE SECTIONS ANIMATION (Left/Right Sliding & Content reveals)
        const leftElements = mainContent.querySelectorAll('.scroll-reveal-left, .showcase-image-left');
        leftElements.forEach((el) => {
          gsap.fromTo(el, 
            { opacity: 0, x: -45, scale: 0.96 }, 
            {
              opacity: 1, x: 0, scale: 1, duration: 0.85, ease: 'power3.out', clearProps: 'transform,opacity',
              scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none', once: true }
            }
          );
        });

        const rightElements = mainContent.querySelectorAll('.scroll-reveal-right, .showcase-image-right');
        rightElements.forEach((el) => {
          gsap.fromTo(el, 
            { opacity: 0, x: 45, scale: 0.96 }, 
            {
              opacity: 1, x: 0, scale: 1, duration: 0.85, ease: 'power3.out', clearProps: 'transform,opacity',
              scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none', once: true }
            }
          );
        });

        // 4. IMAGE REVEAL FRAMES (Smooth 16:10 aspect reveal)
        const imageFrames = mainContent.querySelectorAll('.image-reveal');
        imageFrames.forEach((frame) => {
          gsap.fromTo(frame, 
            { opacity: 0, scale: 0.96, y: 20 }, 
            {
              opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out', clearProps: 'transform,opacity',
              scrollTrigger: { 
                trigger: frame, 
                start: 'top 88%', 
                toggleActions: 'play none none none', 
                once: true,
                onEnter: () => frame.classList.add('in-view')
              }
            }
          );
        });

        // 5. SECTION HEADINGS REVEAL ON SCROLL
        const sectionHeadings = Array.from(mainContent.querySelectorAll('h2, h3.text-2xl, h3.text-3xl, h3.text-4xl, h3.text-5xl'));
        sectionHeadings.forEach((heading) => {
          gsap.fromTo(
            heading,
            { opacity: 0, y: 26 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: heading,
                start: 'top 88%',
                toggleActions: 'play none none none',
                once: true
              }
            }
          );
        });

        // 6. CARD GRIDS STAGGERED ENTRANCE ON SCROLL
        const grids = mainContent.querySelectorAll('.grid');
        grids.forEach((grid) => {
          if (grid.closest('.aspect-4\\/3') || grid.classList.contains('footer-nav-grid')) return;

          const cards = grid.querySelectorAll(':scope > div.rounded-3xl, :scope > div.rounded-2xl, :scope > div.theme-card, :scope > div.shadow-card');
          if (cards.length > 0) {
            gsap.fromTo(
              Array.from(cards),
              { opacity: 0, y: 30, scale: 0.97 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.55,
                stagger: 0.07,
                ease: 'power2.out',
                clearProps: 'transform,opacity',
                scrollTrigger: {
                  trigger: grid,
                  start: 'top 86%',
                  toggleActions: 'play none none none',
                  once: true
                }
              }
            );
          }
        });

        // 7. METRICS & COUNTERS PUNCH-IN ON SCROLL
        const metrics = mainContent.querySelectorAll('.font-mono.font-black, .font-mono.font-extrabold, .metric-counter');
        metrics.forEach((metric) => {
          gsap.fromTo(
            metric,
            { scale: 0.75, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: 'back.out(2)',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: metric,
                start: 'top 88%',
                toggleActions: 'play none none none',
                once: true
              }
            }
          );
        });

        // 8. CONTINUOUS FLOATING AMBIENT BADGES
        const floaters = mainContent.querySelectorAll('.gsap-float, .animate-float');
        floaters.forEach((el, index) => {
          gsap.to(el, {
            y: -7,
            duration: 2.4 + (index % 3) * 0.4,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            delay: (index % 4) * 0.2
          });
        });

        // 9. INTERACTIVE MICRO-HOVER ON PRIMARY BUTTONS
        const primaryButtons = mainContent.querySelectorAll('.btn-shimmer, a.bg-brand-orange, button.bg-brand-orange');
        primaryButtons.forEach((btn) => {
          const el = btn as HTMLElement;
          el.onmouseenter = () => {
            gsap.to(el, { scale: 1.03, duration: 0.2, ease: 'power1.out' });
          };
          el.onmouseleave = () => {
            gsap.to(el, { scale: 1.0, duration: 0.22, ease: 'power1.out' });
          };
        });

        // 10. FOOTER SCROLL & AMBIENT ANIMATIONS
        const footer = document.querySelector('footer.footer-global, footer');
        if (footer) {
          // A. Ambient breathing glow
          const glows = footer.querySelectorAll('.footer-ambient-glow');
          glows.forEach((glow, idx) => {
            gsap.to(glow, {
              scale: 1.25,
              opacity: 0.18,
              duration: 4.5 + idx * 0.8,
              yoyo: true,
              repeat: -1,
              ease: 'sine.inOut'
            });
          });

          // B. Dedicated CTA Card Entrance
          const ctaCard = footer.querySelector('.footer-cta-card');
          if (ctaCard) {
            gsap.fromTo(ctaCard, { opacity: 0, y: 45, scale: 0.96 }, {
              opacity: 1, y: 0, scale: 1, duration: 0.85, ease: 'power3.out', clearProps: 'transform,opacity',
              scrollTrigger: { trigger: ctaCard, start: 'top 88%', toggleActions: 'play none none none', once: true }
            });

            const ctaContent = ctaCard.querySelector('.footer-cta-content');
            if (ctaContent) {
              gsap.fromTo(Array.from(ctaContent.children), { opacity: 0, y: 20 }, {
                opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power2.out', clearProps: 'transform,opacity',
                scrollTrigger: { trigger: ctaCard, start: 'top 88%', toggleActions: 'play none none none', once: true }
              });
            }

            const ctaActions = ctaCard.querySelector('.footer-cta-actions');
            if (ctaActions) {
              gsap.fromTo(Array.from(ctaActions.children), { opacity: 0, x: 25 }, {
                opacity: 1, x: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out', clearProps: 'transform,opacity',
                scrollTrigger: { trigger: ctaCard, start: 'top 88%', toggleActions: 'play none none none', once: true }
              });
            }
          }

          // C. 5-Column Navigation Grid Stagger
          const navGrid = footer.querySelector('.footer-nav-grid');
          const navCols = footer.querySelectorAll('.footer-nav-col');
          if (navCols.length > 0) {
            gsap.fromTo(Array.from(navCols), { opacity: 0, y: 35 }, {
              opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: 'power2.out', clearProps: 'transform,opacity',
              scrollTrigger: { trigger: navGrid || navCols[0], start: 'top 90%', toggleActions: 'play none none none', once: true }
            });
          }

          // D. Brand Logo Pop-in
          const brandLogo = footer.querySelector('.footer-brand-logo');
          if (brandLogo) {
            gsap.fromTo(brandLogo, { scale: 0.7, opacity: 0 }, {
              scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)', clearProps: 'transform,opacity',
              scrollTrigger: { trigger: brandLogo, start: 'top 92%', toggleActions: 'play none none none', once: true }
            });
          }

          // E. Bottom Copyright & Legal Links Bar
          const bottomBar = footer.querySelector('.footer-bottom-bar');
          if (bottomBar) {
            gsap.fromTo(bottomBar, { opacity: 0, y: 20 }, {
              opacity: 1, y: 0, duration: 0.65, ease: 'power2.out', clearProps: 'transform,opacity',
              scrollTrigger: { trigger: bottomBar, start: 'top 96%', toggleActions: 'play none none none', once: true }
            });
          }
        }

        ScrollTrigger.refresh();
      }, 50);
    });
  }

  private initObserver(): void {
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

      const mutationObs = new MutationObserver(() => {
        this.observeElements();
      });

      mutationObs.observe(document.body, { childList: true, subtree: true });
    });
  }

  private observeElements(): void {
    if (!this.observer) return;
    const elements = document.querySelectorAll(
      '.scroll-reveal:not(.in-view), .scroll-reveal-scale:not(.in-view), .scroll-reveal-left:not(.in-view), .scroll-reveal-right:not(.in-view), .image-reveal:not(.in-view)'
    );
    elements.forEach(el => this.observer?.observe(el));
  }
}
