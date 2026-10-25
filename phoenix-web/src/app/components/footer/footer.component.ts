import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <footer class="footer-global bg-[#0A1120] text-slate-400 pt-16 pb-12 relative overflow-hidden border-t border-slate-800/90 font-sans">
      <!-- Ambient subtle background lighting (Breathing glow driven by GSAP) -->
      <div class="footer-ambient-glow absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 blur-[140px] pointer-events-none rounded-full"></div>
      <div class="footer-ambient-glow absolute bottom-0 left-10 w-96 h-96 bg-amber-500/5 blur-[140px] pointer-events-none rounded-full"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        
        <!-- ========================================================================= -->
        <!-- 1. DEDICATED FULL-WIDTH CALL-TO-ACTION CARD                               -->
        <!-- ========================================================================= -->
        <div class="footer-cta-card relative rounded-3xl p-8 sm:p-10 lg:p-12 overflow-hidden border border-orange-500/30 bg-gradient-to-r from-[#0E1E38] via-[#132542] to-[#0B172B] shadow-2xl">
          <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-orange-500/15 blur-[80px] pointer-events-none rounded-full"></div>
          
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div class="footer-cta-content max-w-2xl space-y-3">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Accepting Export &amp; Domestic Sampling Batches</span>
              </div>
              <h3 class="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Ready to Elevate Your Apparel Brand Trims?
              </h3>
              <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
                From high-density 3D silicone prints to photographic DTF transfers and damask woven labels, Phoenix manufactures export-grade trims with guaranteed 50+ wash durability.
              </p>
              <div class="flex items-center gap-3 text-xs text-slate-400 flex-wrap pt-1">
                <span class="flex items-center gap-1.5 text-orange-400 font-medium">⚡ 24h Swatch Dispatch</span>
                <span class="text-slate-600">&bull;</span>
                <span class="flex items-center gap-1.5 text-emerald-400 font-medium">🛡️ OEKO-TEX Standard 100</span>
                <span class="text-slate-600">&bull;</span>
                <span class="flex items-center gap-1.5 text-amber-400 font-medium">🏭 100K+ Daily Production</span>
              </div>
            </div>

            <div class="footer-cta-actions flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
              <a routerLink="/contact-us" 
                 class="btn-shimmer active:scale-95 px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-xl shadow-orange-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer">
                <span>Request Free Swatch Box</span>
                <span>&rarr;</span>
              </a>
              <a 
                href="https://wa.me/919944107633?text=Hi%20Phoenix%20Labels,%20I%20would%20like%20to%20discuss%20sampling%20and%20printing%20production." 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-5 py-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs">
                <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/></svg>
                <span>WhatsApp Factory</span>
              </a>
            </div>
          </div>
        </div>

        <!-- ========================================================================= -->
        <!-- 2. MAIN 5-COLUMN FOOTER NAVIGATION GRID                                   -->
        <!-- ========================================================================= -->
        <div class="footer-nav-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-8 border-b border-slate-800/80">
          
          <!-- Column 1: Company Profile (2 Cols Wide on Large) -->
          <div class="footer-nav-col lg:col-span-2 space-y-4">
            <div class="flex items-center gap-3">
              <div class="footer-brand-logo bg-white p-1 rounded-xl shadow-lg border border-slate-700/60 w-11 h-11 flex items-center justify-center shrink-0">
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

            <p class="text-xs sm:text-sm leading-relaxed text-slate-400 max-w-sm">
              Tiruppur’s leading garment accessories manufacturing company for over a decade. We engineer international-standard silicone 3D prints, DTF digital transfers, woven labels, and apparel branding trims for export houses and domestic brands.
            </p>

            <div class="space-y-2 pt-1 text-xs">
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

            <!-- Share & Quick Social Actions -->
            <div class="flex items-center gap-2 pt-2">
              <button 
                (click)="shareWebsite()" 
                title="Share Website"
                class="footer-social-btn h-8 px-3 rounded-lg border border-slate-700 bg-white/5 hover:bg-orange-500/20 hover:border-orange-500/40 text-slate-300 hover:text-orange-400 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer">
                <svg class="w-3.5 h-3.5 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                <span>{{ websiteShared() ? 'Copied Link!' : 'Share Website' }}</span>
              </button>
            </div>
          </div>

          <!-- Column 2: Core Capabilities -->
          <div class="footer-nav-col space-y-3">
            <h4 class="text-white text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              Printing Specialties
            </h4>
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
          <div class="footer-nav-col space-y-3">
            <h4 class="text-white text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Apparel Accessories
            </h4>
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

          <!-- Column 4: Factory QR Code & Swatch Alerts -->
          <div class="footer-nav-col space-y-4">
            <h4 class="text-white text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Connect With Factory
            </h4>
            
            <!-- QR Code Card -->
            <div class="bg-slate-800/80 p-3 rounded-2xl border border-slate-700/80 flex items-center gap-3">
              <img src="images/print/qr-code.png" alt="Scan QR Code" class="w-14 h-14 bg-white p-1 rounded-lg shrink-0" />
              <div class="text-[11px]">
                <span class="text-white font-bold block">Instant Digital Card</span>
                <span class="text-slate-400 block text-[10px]">Scan to save factory contact on WhatsApp</span>
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

        <!-- ========================================================================= -->
        <!-- 3. BOTTOM COPYRIGHT & DEVELOPER CREDIT BAR                                -->
        <!-- ========================================================================= -->
        <div class="footer-bottom-bar pt-4 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div class="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left flex-wrap">
            <p>&copy; {{ currentYear }} Phoenix Labels, Stickers &amp; Printing. All Rights Reserved. Tiruppur, India.</p>
            
            <!-- Developed by Arivom Technologies Badge with Parity Styling -->
            <div class="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/80 text-[11px] shadow-sm hover:border-amber-400/50 transition-all">
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
  websiteShared = signal(false);

  subscribe(event: Event) {
    event.preventDefault();
    if (this.emailInput.trim()) {
      this.subscribed.set(true);
      this.emailInput = '';
      setTimeout(() => this.subscribed.set(false), 5000);
    }
  }

  shareWebsite(): void {
    if (typeof window !== 'undefined') {
      const shareData = {
        title: 'Phoenix Labels, Stickers & Printing | Tiruppur',
        text: 'Tiruppur’s premier manufacturing hub for 3D silicone printing, DTF transfers, and woven labels.',
        url: window.location.origin
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        navigator.share(shareData).catch(() => {
          this.copyToClipboard(shareData.url);
        });
      } else {
        this.copyToClipboard(shareData.url);
      }
    }
  }

  private copyToClipboard(url: string): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        this.websiteShared.set(true);
        setTimeout(() => this.websiteShared.set(false), 2500);
      });
    }
  }
}
