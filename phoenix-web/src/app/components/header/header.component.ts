import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  template: `
    <!-- ========================================================================= -->
    <!-- 1. MAIN NAVIGATION BAR (FILLTRIP THEME - TOP OF SCREEN)                   -->
    <!-- All elements strictly single-line (whitespace-nowrap & shrink-0)         -->
    <!-- ========================================================================= -->
    <!-- ========================================================================= -->
    <!-- 1. MAIN NAVIGATION BAR (FILLTRIP THEME - TOP OF SCREEN)                   -->
    <!-- All elements strictly single-line (whitespace-nowrap & shrink-0)         -->
    <!-- ========================================================================= -->
    <header class="bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200/90 transition-all duration-200">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 gap-4">
          
          <!-- Brand Logo & Label Lockup (Redesigned Modern Emblem, Typography & Tiruppur Badge) -->
          <a routerLink="/" class="flex items-center gap-3.5 group shrink-0 select-none">
            
            <!-- Redesigned High-Definition CMYK Printing Emblem -->
            <div class="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200/90 p-1.5 flex items-center justify-center shrink-0 group-hover:border-brand-orange/50 group-hover:shadow-md transition-all duration-300">
              <svg class="w-full h-full transform group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <!-- Vibrant Process CMYK Gradients -->
                  <linearGradient id="cmykCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#38bdf8"/>
                    <stop offset="100%" stop-color="#0284c7"/>
                  </linearGradient>
                  <linearGradient id="cmykYellow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#fde047"/>
                    <stop offset="100%" stop-color="#eab308"/>
                  </linearGradient>
                  <linearGradient id="cmykMagenta" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#fb7185"/>
                    <stop offset="100%" stop-color="#e11d48"/>
                  </linearGradient>
                  <linearGradient id="cmykBlack" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#475569"/>
                    <stop offset="100%" stop-color="#0f172a"/>
                  </linearGradient>
                </defs>

                <!-- Soft Circular Frame -->
                <circle cx="50" cy="50" r="45" stroke="#f1f5f9" stroke-width="2.5" fill="#f8fafc"/>
                
                <!-- Fluid Antennae Arcs with Terminals -->
                <path d="M47 37 C42 25, 33 18, 25 17" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="25" cy="17" r="2.2" fill="#0f172a"/>

                <path d="M53 37 C58 25, 67 18, 75 17" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="75" cy="17" r="2.2" fill="#0f172a"/>

                <!-- Top Cyan Wing (Smooth Bezier) -->
                <path d="M50 47 C37 32, 33 16, 50 11 C67 16, 63 32, 50 47 Z" fill="url(#cmykCyan)"/>
                
                <!-- Right Yellow Wing -->
                <path d="M53 50 C68 37, 84 33, 89 50 C84 67, 68 63, 53 50 Z" fill="url(#cmykYellow)"/>
                
                <!-- Bottom Magenta Wing -->
                <path d="M50 53 C63 68, 59 84, 50 89 C41 84, 37 68, 50 53 Z" fill="url(#cmykMagenta)"/>
                
                <!-- Left Black/Carbon Wing -->
                <path d="M47 50 C32 63, 16 67, 11 50 C16 33, 32 37, 47 50 Z" fill="url(#cmykBlack)"/>
                
                <!-- Center Precision Core Dot -->
                <circle cx="50" cy="50" r="5.2" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/>
                <circle cx="50" cy="50" r="2.4" fill="#f97316"/>
              </svg>
            </div>

            <!-- Redesigned Company Name & Tags Lockup -->
            <div class="flex flex-col whitespace-nowrap">
              
              <!-- Row 1: Company Name + Redesigned Tiruppur Badge -->
              <div class="flex items-center gap-2.5">
                <span class="font-black text-2xl sm:text-[26px] tracking-tight text-slate-900 group-hover:text-brand-orange transition-colors">
                  PHOENIX
                </span>
                
                <!-- Modern Tiruppur Live Hub Pill Badge -->
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 text-amber-300 text-[10px] font-black tracking-wider uppercase shadow-xs border border-slate-800">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  TIRUPPUR
                </span>
              </div>

              <!-- Row 2: Redesigned Wide-Tracked Tagline -->
              <div class="flex items-center gap-2 -mt-0.5">
                <span class="text-[9.5px] font-extrabold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-600 transition-colors">
                  LABELS &bull; STICKERS &bull; PRINTING
                </span>
              </div>

            </div>
          </a>

          <!-- Centered Navigation Links (Strictly matching user design from media_1790765922477.png) -->
          <nav class="hidden lg:flex items-center space-x-1 xl:space-x-3 h-full shrink-0">
            
            <!-- Home -->
            <a routerLink="/" 
               routerLinkActive="text-brand-blue font-bold after:w-full"
               [routerLinkActiveOptions]="{exact: true}"
               class="relative h-20 flex items-center px-3 xl:px-3.5 text-xs xl:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-200">
              Home
            </a>
            
            <!-- Capabilities -->
            <a routerLink="/capabilities" 
               routerLinkActive="text-brand-blue font-bold after:w-full"
               class="relative h-20 flex items-center px-3 xl:px-3.5 text-xs xl:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-200">
              Capabilities
            </a>

            <!-- Portfolio with 30 SAMPLES Tag -->
            <a routerLink="/portfolio" 
               routerLinkActive="text-brand-blue font-bold after:w-full"
               class="relative h-20 flex items-center px-3 xl:px-3.5 text-xs xl:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-200">
              <span>Portfolio</span>
              <span class="ml-1.5 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-full bg-amber-100 text-amber-800 border border-amber-300/60 whitespace-nowrap inline-flex items-center shrink-0">
                30 SAMPLES
              </span>
            </a>

            <!-- Factory & Quality -->
            <a routerLink="/quality" 
               routerLinkActive="text-brand-blue font-bold after:w-full"
               class="relative h-20 flex items-center px-3 xl:px-3.5 text-xs xl:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-200">
              Factory &amp; Quality
            </a>

            <!-- Contact & Support -->
            <a routerLink="/contact-us" 
               routerLinkActive="text-brand-blue font-bold after:w-full"
               class="relative h-20 flex items-center px-3 xl:px-3.5 text-xs xl:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-200">
              Contact &amp; Support
            </a>
          </nav>

          <!-- Right Action Buttons (Strictly Single-Line & High-Contrast FillTrip Style) -->
          <div class="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0">
            
            <!-- Call Factory Button -->
            <a href="tel:9944107633" 
               class="whitespace-nowrap px-4 py-2.5 text-xs xl:text-sm font-bold text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all inline-flex items-center gap-2 shrink-0">
              <svg class="w-4 h-4 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>Call Factory</span>
            </a>

            <!-- High-Contrast Orange Pill Button (FillTrip Primary CTA Style) -->
            <a routerLink="/contact-us" 
               class="whitespace-nowrap px-5 py-2.5 text-xs xl:text-sm font-bold text-white bg-brand-orange hover:bg-orange-600 active:scale-95 rounded-full shadow-md shadow-orange-500/25 hover:shadow-orange-500/35 transition-all inline-flex items-center gap-2 shrink-0 group">
              <span>Request Samples</span>
              <svg class="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>

          <!-- Mobile / Tablet Hamburger Toggle (Shown when below lg: 1024px) -->
          <div class="flex items-center lg:hidden shrink-0">
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
      <div *ngIf="isMobileMenuOpen()" class="lg:hidden border-t border-slate-100 bg-white px-4 pt-4 pb-6 space-y-3 shadow-xl animate-fadeIn">
        <div class="flex items-center gap-3 pb-3 border-b border-slate-100">
          <div class="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200 p-1 flex items-center justify-center shrink-0">
            <img src="favicon.svg" alt="Phoenix Emblem" class="w-full h-full object-contain" />
          </div>
          <div class="flex flex-col whitespace-nowrap">
            <div class="flex items-center gap-2">
              <span class="font-black text-xl tracking-tight text-slate-900">PHOENIX</span>
              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-900 text-amber-300 text-[9px] font-black uppercase">
                <span class="w-1 h-1 rounded-full bg-emerald-400"></span>
                TIRUPPUR
              </span>
            </div>
            <span class="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">LABELS, STICKERS &amp; PRINTING</span>
          </div>
        </div>

        <a routerLink="/" (click)="closeMobileMenu()" 
           routerLinkActive="bg-blue-50 text-brand-blue font-bold"
           [routerLinkActiveOptions]="{exact: true}"
           class="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 transition whitespace-nowrap">
          Home
        </a>
        <a routerLink="/capabilities" (click)="closeMobileMenu()" 
           routerLinkActive="bg-blue-50 text-brand-blue font-bold"
           class="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 transition whitespace-nowrap">
          Capabilities &amp; Printing
        </a>
        <a routerLink="/portfolio" (click)="closeMobileMenu()" 
           routerLinkActive="bg-blue-50 text-brand-blue font-bold"
           class="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 transition flex items-center justify-between whitespace-nowrap">
          <span>Portfolio Showcase</span>
          <span class="px-2 py-0.5 text-xs font-bold rounded-full bg-amber-100 text-amber-800">30 Samples</span>
        </a>
        <a routerLink="/quality" (click)="closeMobileMenu()" 
           routerLinkActive="bg-blue-50 text-brand-blue font-bold"
           class="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 transition whitespace-nowrap">
          Factory &amp; Quality
        </a>
        <a routerLink="/contact-us" (click)="closeMobileMenu()" 
           routerLinkActive="bg-blue-50 text-brand-blue font-bold"
           class="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 transition whitespace-nowrap">
          Contact &amp; Support
        </a>

        <div class="pt-3 border-t border-slate-100 flex flex-col gap-2">
          <a href="tel:9944107633" class="w-full text-center py-2.5 border border-slate-200 rounded-xl font-semibold text-slate-700 text-sm whitespace-nowrap">
            Call Factory: +91 9944107633
          </a>
          <a routerLink="/contact-us" (click)="closeMobileMenu()" class="w-full text-center py-3 bg-brand-orange text-white font-bold rounded-xl text-sm shadow-md whitespace-nowrap">
            Request Production Samples &rarr;
          </a>
        </div>
      </div>
    </header>

    <!-- ========================================================================= -->
    <!-- 2. LIVE PRODUCTION RADAR: CONTINUOUS HORIZONTALLY MOVING MARQUEE TICKER    -->
    <!-- (Directly Below Navbar - Matching FillTrip Live Corridor Radar)            -->
    <!-- ========================================================================= -->
    <div class="bg-brand-navy text-slate-300 text-xs py-2.5 border-b border-slate-800 overflow-hidden relative shadow-sm">
      <div class="max-w-[1440px] mx-auto flex items-center">
        
        <!-- Pinned Static Label on Left with Pulsing Green Ping -->
        <div class="shrink-0 bg-brand-navy z-20 px-4 sm:px-6 flex items-center gap-2 border-r border-slate-800 shadow-[4px_0_12px_rgba(15,23,42,0.9)]">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="font-black uppercase tracking-wider text-amber-400 text-[11px] whitespace-nowrap">
            LIVE PRODUCTION RADAR:
          </span>
        </div>

        <!-- Marquee Viewport with Infinite Seamless Scrolling Animation -->
        <div class="overflow-hidden flex-1 relative cursor-pointer" title="Hover to pause radar">
          <div class="animate-marquee flex items-center gap-8 whitespace-nowrap text-[11px]">
            
            <!-- MARQUEE SET 1 -->
            <div class="flex items-center gap-6 whitespace-nowrap">
              
              <!-- Item 1: Silicone -->
              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap">
                  🟢 18 Lines Running
                </span>
                <span class="text-slate-200 font-bold whitespace-nowrap">₹3.50 / Pc</span>
                <span class="text-amber-400 font-semibold whitespace-nowrap">• 48h Batch Ready</span>
                <span class="text-white font-medium whitespace-nowrap">Silicone 3D Unit</span>
              </div>

              <span class="text-slate-600 font-bold">&bull;</span>

              <!-- Item 2: Dispatch Corridor -->
              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="text-slate-300 font-medium whitespace-nowrap">Tiruppur Hub <span class="text-amber-400 font-bold">&harr;</span> Global Dispatch:</span>
                <span class="text-emerald-400 font-extrabold bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700 whitespace-nowrap">100K Pcs / Day</span>
              </div>

              <span class="text-slate-600 font-bold">&bull;</span>

              <!-- Item 3: DTF Digital Line -->
              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap">
                  🔵 DTF Line Active
                </span>
                <span class="text-slate-200 font-bold whitespace-nowrap">2400 DPI CMYK+W</span>
                <span class="text-cyan-400 font-semibold whitespace-nowrap">• 24h Proofing SLA</span>
              </div>

              <span class="text-slate-600 font-bold">&bull;</span>

              <!-- Item 4: Damask Looms -->
              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap">
                  🟡 Looms Available
                </span>
                <span class="text-white font-medium whitespace-nowrap">Damask Woven Labels</span>
                <span class="text-emerald-400 font-bold whitespace-nowrap">• 0 Setup Sampling</span>
              </div>

              <span class="text-slate-600 font-bold">&bull;</span>

              <!-- Item 5: Quality Testing Benchmark -->
              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="bg-purple-500/15 text-purple-300 border border-purple-500/30 px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap">
                  🟣 QC Lab Verified
                </span>
                <span class="text-slate-300 font-medium whitespace-nowrap">OEKO-TEX Std 100</span>
                <span class="text-amber-400 font-semibold whitespace-nowrap">• 50+ Industrial Wash Grade</span>
              </div>

              <span class="text-slate-600 font-bold">&bull;</span>
            </div>

            <!-- MARQUEE SET 2 (EXACT DUPLICATE FOR INFINITE SEAMLESS LOOP) -->
            <div class="flex items-center gap-6 whitespace-nowrap" aria-hidden="true">
              
              <!-- Item 1: Silicone -->
              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap">
                  🟢 18 Lines Running
                </span>
                <span class="text-slate-200 font-bold whitespace-nowrap">₹3.50 / Pc</span>
                <span class="text-amber-400 font-semibold whitespace-nowrap">• 48h Batch Ready</span>
                <span class="text-white font-medium whitespace-nowrap">Silicone 3D Unit</span>
              </div>

              <span class="text-slate-600 font-bold">&bull;</span>

              <!-- Item 2: Dispatch Corridor -->
              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="text-slate-300 font-medium whitespace-nowrap">Tiruppur Hub <span class="text-amber-400 font-bold">&harr;</span> Global Dispatch:</span>
                <span class="text-emerald-400 font-extrabold bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700 whitespace-nowrap">100K Pcs / Day</span>
              </div>

              <span class="text-slate-600 font-bold">&bull;</span>

              <!-- Item 3: DTF Digital Line -->
              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap">
                  🔵 DTF Line Active
                </span>
                <span class="text-slate-200 font-bold whitespace-nowrap">2400 DPI CMYK+W</span>
                <span class="text-cyan-400 font-semibold whitespace-nowrap">• 24h Proofing SLA</span>
              </div>

              <span class="text-slate-600 font-bold">&bull;</span>

              <!-- Item 4: Damask Looms -->
              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap">
                  🟡 Looms Available
                </span>
                <span class="text-white font-medium whitespace-nowrap">Damask Woven Labels</span>
                <span class="text-emerald-400 font-bold whitespace-nowrap">• 0 Setup Sampling</span>
              </div>

              <span class="text-slate-600 font-bold">&bull;</span>

              <!-- Item 5: Quality Testing Benchmark -->
              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="bg-purple-500/15 text-purple-300 border border-purple-500/30 px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap">
                  🟣 QC Lab Verified
                </span>
                <span class="text-slate-300 font-medium whitespace-nowrap">OEKO-TEX Std 100</span>
                <span class="text-amber-400 font-semibold whitespace-nowrap">• 50+ Industrial Wash Grade</span>
              </div>

              <span class="text-slate-600 font-bold">&bull;</span>
            </div>

          </div>
        </div>

        <!-- Right Quick Phone Shortcut (Hidden on small screens) -->
        <div class="hidden xl:flex items-center gap-2 shrink-0 bg-brand-navy z-20 px-4 border-l border-slate-800 text-slate-300 shadow-[-4px_0_12px_rgba(15,23,42,0.9)]">
          <a href="tel:9944107633" class="hover:text-white transition flex items-center gap-1.5 font-bold text-[11px] whitespace-nowrap">
            <svg class="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span class="whitespace-nowrap">+91 9944107633</span>
          </a>
        </div>

      </div>
    </div>
  `
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
