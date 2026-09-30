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
    <header class="bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200/80 transition-all duration-200">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 gap-4">
          
          <!-- Brand Logo & Label Lockup (Strictly Single-Line & Shrink-0) -->
          <a routerLink="/" class="flex items-center gap-3 group shrink-0 select-none">
            
            <!-- Crisp CMYK Printing Butterfly Emblem -->
            <div class="w-11 h-11 rounded-2xl bg-white shadow-sm border border-slate-200/90 p-1.5 flex items-center justify-center shrink-0 group-hover:border-brand-orange/40 transition-colors">
              <svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Antennae -->
                <path d="M48 38 C45 28, 38 22, 34 20" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M52 38 C55 28, 62 22, 66 20" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
                
                <!-- Cyan Top Petal -->
                <path d="M50 48 C42 36, 42 22, 50 14 C58 22, 58 36, 50 48 Z" fill="#00a8e8"/>
                
                <!-- Yellow Right Petal -->
                <path d="M52 50 C64 42, 78 42, 86 50 C78 58, 64 58, 52 50 Z" fill="#facc15"/>
                
                <!-- Magenta Bottom Petal -->
                <path d="M50 52 C58 64, 58 78, 50 86 C42 78, 42 64, 50 52 Z" fill="#e11d48"/>
                
                <!-- Black Left Petal -->
                <path d="M48 50 C36 58, 22 58, 14 50 C22 42, 36 42, 48 50 Z" fill="#1e293b"/>
                
                <!-- Center Core Dot -->
                <circle cx="50" cy="50" r="3.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
              </svg>
            </div>

            <!-- Typography & Tiruppur Badge -->
            <div class="flex flex-col whitespace-nowrap">
              <div class="flex items-center gap-2">
                <span class="font-black text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-brand-orange transition-colors">
                  PHOENIX
                </span>
                <span class="px-2 py-0.5 text-[9px] font-black tracking-widest rounded-md bg-slate-100 text-slate-600 uppercase border border-slate-200">
                  TIRUPPUR
                </span>
              </div>
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block -mt-0.5">
                LABELS, STICKERS &amp; PRINTING
              </span>
            </div>
          </a>

          <!-- Centered Navigation Links (Strictly Single-Line with FillTrip Active Underline) -->
          <nav class="hidden lg:flex items-center space-x-1 xl:space-x-3 h-full shrink-0">
            
            <a routerLink="/" 
               routerLinkActive="text-brand-blue font-bold after:w-full"
               [routerLinkActiveOptions]="{exact: true}"
               class="relative h-20 flex items-center px-3 xl:px-3.5 text-xs xl:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-200">
              Home
            </a>
            
            <a routerLink="/capabilities" 
               routerLinkActive="text-brand-blue font-bold after:w-full"
               class="relative h-20 flex items-center px-3 xl:px-3.5 text-xs xl:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-200">
              Capabilities
            </a>

            <!-- Portfolio Link with Single-Line Pill Badge -->
            <a routerLink="/portfolio" 
               routerLinkActive="text-brand-blue font-bold after:w-full"
               class="relative h-20 flex items-center px-3 xl:px-3.5 text-xs xl:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-200">
              <span>Portfolio</span>
              <span class="ml-1.5 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-full bg-amber-100 text-amber-800 border border-amber-300/60 whitespace-nowrap inline-flex items-center shrink-0">
                30 Samples
              </span>
            </a>

            <!-- Factory & Quality (Strictly Single-Line) -->
            <a routerLink="/quality" 
               routerLinkActive="text-brand-blue font-bold after:w-full"
               class="relative h-20 flex items-center px-3 xl:px-3.5 text-xs xl:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-200">
              Factory &amp; Quality
            </a>

            <!-- Contact & Support (Strictly Single-Line) -->
            <a routerLink="/contact-us" 
               routerLinkActive="text-brand-blue font-bold after:w-full"
               class="relative h-20 flex items-center px-3 xl:px-3.5 text-xs xl:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-200">
              Contact &amp; Support
            </a>
          </nav>

          <!-- Right Action Buttons (Strictly Single-Line & Shrink-0) -->
          <div class="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0">
            
            <!-- Call Factory Button -->
            <a href="tel:9944107633" 
               class="whitespace-nowrap px-3.5 xl:px-4 py-2 xl:py-2.5 text-xs xl:text-sm font-bold text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors inline-flex items-center gap-2 shrink-0">
              <svg class="w-4 h-4 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>Call Factory</span>
            </a>

            <!-- Request Samples Button -->
            <a routerLink="/contact-us" 
               class="whitespace-nowrap px-4 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-bold text-white bg-brand-orange hover:bg-orange-600 rounded-full shadow-md shadow-orange-500/25 hover:shadow-orange-500/35 transition-all inline-flex items-center gap-1.5 xl:gap-2 shrink-0 group">
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
      <div *ngIf="isMobileMenuOpen()" class="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
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
