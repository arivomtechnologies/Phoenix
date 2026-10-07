import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <footer class="bg-brand-navy text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Main Footer Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          <!-- Column 1: Company Profile (2 Cols Wide on Large) -->
          <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center gap-3">
              <div class="bg-white p-1 rounded-xl shadow-lg border border-slate-700/60 w-11 h-11 flex items-center justify-center shrink-0">
                <img src="favicon.svg" alt="Phoenix Labels Logo" class="w-full h-full object-contain" />
              </div>
              <div class="flex flex-col whitespace-nowrap">
                <div class="flex items-center gap-2">
                  <span class="text-white font-black text-xl sm:text-[22px] tracking-tight block">PHOENIX</span>
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 text-[9.5px] font-black tracking-wider uppercase border border-slate-700 shadow-xs">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    TIRUPPUR
                  </span>
                </div>
                <span class="text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-400 block -mt-0.5">
                  LABELS &bull; STICKERS &bull; PRINTING
                </span>
              </div>
            </div>

            <p class="text-sm leading-relaxed text-slate-400 max-w-sm">
              Tiruppur’s leading garment accessories manufacturing company for over a decade. We engineer international-standard silicone 3D prints, DTF digital transfers, woven labels, and apparel branding trims for export houses and domestic brands.
            </p>

            <div class="space-y-2 pt-2 text-xs">
              <div class="flex items-start gap-2.5">
                <svg class="w-4 h-4 text-brand-orange shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Anupparpalayam Pudur, Tiruppur, Tamil Nadu 641652, India</span>
              </div>
              <div class="flex items-center gap-2.5">
                <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:9944107633" class="hover:text-white transition">+91 9944107633, +91 9626876200</a>
              </div>
              <div class="flex items-center gap-2.5">
                <svg class="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:phoenixlabels1@gmail.com" class="hover:text-white transition">phoenixlabels1&#64;gmail.com</a>
              </div>
            </div>
          </div>

          <!-- Column 2: Core Capabilities -->
          <div class="space-y-3">
            <h4 class="text-white text-sm font-bold tracking-wider uppercase">Printing Specialties</h4>
            <ul class="space-y-2 text-xs">
              <li><a routerLink="/capabilities" class="hover:text-white transition">3D Silicone Printing</a></li>
              <li><a routerLink="/capabilities" class="hover:text-white transition">D.T.F. Digital Transfers</a></li>
              <li><a routerLink="/capabilities" class="hover:text-white transition">High-Density 3D Stickers</a></li>
              <li><a routerLink="/capabilities" class="hover:text-white transition">Garment Embossing</a></li>
              <li><a routerLink="/capabilities" class="hover:text-white transition">Reflective &amp; Multi-Reflective</a></li>
              <li><a routerLink="/capabilities" class="hover:text-white transition">Puff &amp; Sugar Prints</a></li>
              <li><a routerLink="/capabilities" class="hover:text-white transition">Flock &amp; Weld Prints</a></li>
            </ul>
          </div>

          <!-- Column 3: Apparel Trims & Tags -->
          <div class="space-y-3">
            <h4 class="text-white text-sm font-bold tracking-wider uppercase">Apparel Accessories</h4>
            <ul class="space-y-2 text-xs">
              <li><a routerLink="/capabilities" class="hover:text-white transition">Damask Woven Labels</a></li>
              <li><a routerLink="/capabilities" class="hover:text-white transition">Leather &amp; PU Denim Patches</a></li>
              <li><a routerLink="/capabilities" class="hover:text-white transition">Lenticular Motion Badges</a></li>
              <li><a routerLink="/capabilities" class="hover:text-white transition">Molded Rubber Badges</a></li>
              <li><a routerLink="/capabilities" class="hover:text-white transition">Custom Zipper Pullers</a></li>
              <li><a routerLink="/capabilities" class="hover:text-white transition">Embossed &amp; Debossed Tapes</a></li>
              <li><a routerLink="/capabilities" class="hover:text-white transition">Hang Tags &amp; Drawstring Tipping</a></li>
            </ul>
          </div>

          <!-- Column 4: QR Code & Newsletter -->
          <div class="space-y-4">
            <h4 class="text-white text-sm font-bold tracking-wider uppercase">Connect With Factory</h4>
            
            <!-- QR Code Card -->
            <div class="bg-slate-800/80 p-3 rounded-2xl border border-slate-700/80 flex items-center gap-3">
              <img src="images/print/qr-code.png" alt="Scan QR Code" class="w-16 h-16 bg-white p-1 rounded-lg shrink-0" />
              <div class="text-[11px]">
                <span class="text-white font-bold block">Instant Digital Card</span>
                <span class="text-slate-400 block">Scan to save factory contact on WhatsApp</span>
              </div>
            </div>

            <!-- Newsletter Card -->
            <form (submit)="subscribe($event)" class="space-y-2">
              <label class="text-[11px] font-semibold text-slate-300 block">Receive Swatch &amp; Production Alerts</label>
              <div class="flex gap-2">
                <input type="email" 
                       [(ngModel)]="emailInput" 
                       name="email" 
                       placeholder="Enter your email" 
                       required 
                       class="bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs px-3 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-orange w-full" />
                <button type="submit" 
                        class="bg-brand-orange hover:bg-orange-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition shrink-0">
                  Join
                </button>
              </div>
              <p *ngIf="subscribed()" class="text-emerald-400 text-[11px] font-medium flex items-center gap-1">
                &check; Thank you for subscribing to Phoenix!
              </p>
            </form>
          </div>

        </div>

        <!-- Bottom Copyright & Developer Credit -->
        <div class="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div class="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left flex-wrap">
            <p>&copy; {{ currentYear }} Phoenix Labels, Stickers &amp; Printing. All Rights Reserved. Tiruppur, India.</p>
            
            <!-- Developed by Arivom Technologies Badge -->
            <div class="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/80 text-[11px]">
              <span class="text-slate-400">Developed by</span>
              <a href="https://arivomtechnologies.com/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="text-amber-400 hover:text-amber-300 font-bold transition-colors inline-flex items-center gap-1 hover:underline"
                 title="Visit Arivom Technologies">
                <span>Arivom Technologies</span>
              </a>
              <span class="text-slate-500 font-normal">&bull;</span>
              <a href="mailto:arivomtechnologies@gmail.com"
                 class="text-slate-300 hover:text-white font-medium transition-colors"
                 title="Email Arivom Technologies">
                arivomtechnologies&#64;gmail.com
              </a>
            </div>
          </div>

          <div class="flex items-center gap-6 text-slate-400">
            <a routerLink="/" class="hover:text-slate-200 transition">Privacy Policy</a>
            <a routerLink="/" class="hover:text-slate-200 transition">Terms of Supply</a>
            <a routerLink="/quality" class="hover:text-slate-200 transition">OEKO-TEX Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  emailInput = '';
  subscribed = signal(false);

  subscribe(event: Event) {
    event.preventDefault();
    if (this.emailInput.trim()) {
      this.subscribed.set(true);
      this.emailInput = '';
      setTimeout(() => this.subscribed.set(false), 5000);
    }
  }
}
