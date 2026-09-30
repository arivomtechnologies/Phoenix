import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  template: `
    <!-- Top Live Production Radar (FillTrip Theme) -->
    <div class="bg-brand-navy text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block overflow-hidden">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div class="flex items-center gap-2 shrink-0">
          <span class="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-amber-400">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            LIVE PRODUCTION RADAR:
          </span>
        </div>

        <div class="flex items-center gap-3 overflow-x-auto no-scrollbar whitespace-nowrap text-[11px]">
          <span class="bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/80 flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <strong class="text-white">Silicone 3D Unit:</strong> Active &bull; 48-hr Batch Ready
          </span>

          <span class="text-slate-500">&bull;</span>
          <span class="text-slate-300 font-medium">
            Tiruppur Hub <span class="text-amber-400">&harr;</span> Global Dispatch:
            <span class="text-emerald-400 font-bold">100K Pcs / Day</span>
          </span>

          <span class="text-slate-500">&bull;</span>
          <span class="bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/80 flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <strong class="text-white">DTF Line:</strong> 24h Proofing Active
          </span>

          <span class="text-slate-500">&bull;</span>
          <span class="text-slate-300 font-medium">
            Woven Looms: <span class="text-emerald-400 font-bold">&check; Available Now</span>
          </span>
        </div>

        <div class="flex items-center gap-3 shrink-0 text-slate-400 font-medium">
          <a href="tel:9944107633" class="hover:text-white transition flex items-center gap-1">
            <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            +91 9944107633
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar (FillTrip Theme) -->
    <header class="bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100 transition-all duration-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Brand Logo & Motto -->
          <a routerLink="/" class="flex items-center gap-3 group">
            <img src="images/print/logo.jpeg" alt="Phoenix Labels Logo" class="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
            <div class="flex flex-col">
              <div class="flex items-center gap-1.5">
                <span class="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-brand-orange transition-colors">
                  PHOENIX
                </span>
                <span class="text-[10px] font-semibold tracking-widest text-slate-400 uppercase hidden lg:inline">
                  &bull; Tiruppur
                </span>
              </div>
              <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Labels, Stickers &amp; Printing
              </span>
            </div>
          </a>

          <!-- Centered Navigation Links (FillTrip Pill Style) -->
          <nav class="hidden md:flex items-center space-x-1 lg:space-x-2">
            <a routerLink="/" 
               routerLinkActive="text-brand-blue font-bold after:w-full"
               [routerLinkActiveOptions]="{exact: true}"
               class="relative px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-200">
              Home
            </a>
            
            <a routerLink="/capabilities" 
               routerLinkActive="text-brand-blue font-bold after:w-full"
               class="relative px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-200">
              Capabilities
            </a>

            <a routerLink="/portfolio" 
               routerLinkActive="text-brand-blue font-bold after:w-full"
               class="relative px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-200">
              Portfolio
              <span class="px-1.5 py-0.5 text-[10px] font-bold rounded bg-amber-100 text-amber-800 uppercase tracking-tight">30 Photos</span>
            </a>

            <a routerLink="/quality" 
               routerLinkActive="text-brand-blue font-bold after:w-full"
               class="relative px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-200">
              Factory &amp; Quality
            </a>

            <a routerLink="/contact-us" 
               routerLinkActive="text-brand-blue font-bold after:w-full"
               class="relative px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-200">
              Contact &amp; Support
            </a>
          </nav>

          <!-- Right Action Buttons (FillTrip High-Contrast Design) -->
          <div class="hidden sm:flex items-center gap-3">
            <a href="tel:9944107633" class="px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors flex items-center gap-2">
              <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>Call Factory</span>
            </a>

            <a routerLink="/contact-us" class="px-5 py-2.5 text-sm font-bold text-white bg-brand-orange hover:bg-orange-600 rounded-full shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center gap-2 group">
              <span>Request Samples</span>
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <div class="flex items-center md:hidden">
            <button (click)="toggleMobileMenu()" 
                    type="button" 
                    class="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    aria-label="Toggle Navigation">
              <svg *ngIf="!isMobileMenuOpen()" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg *ngIf="isMobileMenuOpen()" class="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div *ngIf="isMobileMenuOpen()" class="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
        <a routerLink="/" (click)="closeMobileMenu()" 
           routerLinkActive="bg-blue-50 text-brand-blue font-bold"
           [routerLinkActiveOptions]="{exact: true}"
           class="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 transition">
          Home
        </a>
        <a routerLink="/capabilities" (click)="closeMobileMenu()" 
           routerLinkActive="bg-blue-50 text-brand-blue font-bold"
           class="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 transition">
          Capabilities &amp; Printing
        </a>
        <a routerLink="/portfolio" (click)="closeMobileMenu()" 
           routerLinkActive="bg-blue-50 text-brand-blue font-bold"
           class="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 transition flex items-center justify-between">
          <span>Portfolio Showcase</span>
          <span class="px-2 py-0.5 text-xs font-bold rounded bg-amber-100 text-amber-800">30 Photos</span>
        </a>
        <a routerLink="/quality" (click)="closeMobileMenu()" 
           routerLinkActive="bg-blue-50 text-brand-blue font-bold"
           class="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 transition">
          Factory &amp; Quality
        </a>
        <a routerLink="/contact-us" (click)="closeMobileMenu()" 
           routerLinkActive="bg-blue-50 text-brand-blue font-bold"
           class="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 transition">
          Contact &amp; Support
        </a>

        <div class="pt-3 border-t border-slate-100 flex flex-col gap-2">
          <a href="tel:9944107633" class="w-full text-center py-2.5 border border-slate-200 rounded-xl font-semibold text-slate-700 text-sm">
            Call Factory: +91 9944107633
          </a>
          <a routerLink="/contact-us" (click)="closeMobileMenu()" class="w-full text-center py-3 bg-brand-orange text-white font-bold rounded-xl text-sm shadow-md">
            Request Production Samples &rarr;
          </a>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `]
})
export class HeaderComponent {
  isMobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
