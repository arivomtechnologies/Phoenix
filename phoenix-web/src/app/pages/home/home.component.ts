import { Component, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FACTORY_PRODUCTION_SAMPLES, ProductionSample } from '../../data/samples.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- ========================================================================= -->
    <!-- 1. HERO SECTION (MODELED DIRECTLY AFTER FILLTRIP)                          -->
    <!-- ========================================================================= -->
    <section class="relative bg-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: Display Copy & Action Buttons -->
          <div class="lg:col-span-7 space-y-6">
            
            <!-- Pill Badge (FillTrip Style) -->
            <div class="animate-fade-in-down inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-brand-blue text-xs font-bold tracking-wide shadow-xs">
              <span class="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              <span>PRECISION TEXTILE PRINTING &amp; APPAREL ACCESSORIES</span>
            </div>

            <!-- Massive Display Headline (FillTrip Typography) -->
            <h1 class="animate-fade-in-up delay-150 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Never Settle For Ordinary Trims.
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 mt-2">
                Turn Apparel Labels Into Brand Distinction.
              </span>
            </h1>

            <!-- Descriptive Lead Subtitle -->
            <p class="animate-fade-in-up delay-250 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Phoenix pairs advanced 3D raised silicone printing, ultra-vivid DTF digital transfers, and luxury woven damask trims with Tiruppur’s premier textile ecosystem. Exporters and apparel brands eliminate lead-time bottlenecks, achieve international wash-fastness standards, and elevate garment perceived value.
            </p>

            <!-- Action Buttons (FillTrip High-Contrast CTAs) -->
            <div class="animate-fade-in-up delay-300 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a routerLink="/contact-us" 
                 class="btn-shimmer hover-lift-sm px-7 py-4 text-base font-bold text-white bg-brand-orange hover:bg-orange-600 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-2 group whitespace-nowrap active:scale-95">
                <span>Request Production Samples</span>
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>

              <a routerLink="/capabilities" 
                 class="hover-lift-sm px-7 py-4 text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-full shadow-sm hover:shadow-md transition-all text-center whitespace-nowrap active:scale-95">
                Explore 21+ Capabilities
              </a>
            </div>

            <!-- Trust Micro-Badges -->
            <div class="animate-fade-in-up delay-400 pt-6 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-500">
              <span class="flex items-center gap-1.5 transition-colors hover:text-slate-900 cursor-default">
                <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                OEKO-TEX Standard 100 Inks
              </span>
              <span class="flex items-center gap-1.5 transition-colors hover:text-slate-900 cursor-default">
                <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                50+ Industrial Wash Durability
              </span>
              <span class="flex items-center gap-1.5 transition-colors hover:text-slate-900 cursor-default">
                <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                24h Rapid Swatch Turnaround
              </span>
            </div>

          </div>

          <!-- Right Column: Interactive Card Preview (FillTrip Style) -->
          <div class="lg:col-span-5 animate-fade-in-scale delay-200">
            <div class="relative bg-white rounded-3xl p-4 sm:p-5 shadow-float border border-slate-100 group hover-lift transition-all duration-300">
              
              <!-- Floating Pill Badge on top of Card -->
              <div class="mb-3.5 flex items-center justify-between">
                <span class="px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold tracking-tight inline-flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-brand-orange animate-ping"></span>
                  Export Batch Active
                </span>
                <span class="text-[11px] font-bold text-slate-400">Tiruppur Hub Unit #4</span>
              </div>

              <!-- Main Hero Image (AI-Generated 3D Silicone Apparel) -->
              <div class="relative rounded-2xl overflow-hidden shadow-inner aspect-[16/10] bg-slate-900 image-reveal in-view">
                <img src="images/ai/hero_silicone_apparel.jpg" 
                     alt="High-Density 3D Silicone Printing on Apparel" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                <!-- Floating Overlay Glassmorphic Badge -->
                <div class="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white flex items-center justify-between transition-transform duration-300 group-hover:translate-y-[-2px] z-20">
                  <div>
                    <span class="text-[10px] uppercase font-bold tracking-wider text-amber-400 block">Matched Batch Run</span>
                    <span class="text-xs font-bold text-white block">3D Silicone Heat Transfer &bull; 25,000 Pcs</span>
                  </div>
                  <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-lg text-xs font-bold shrink-0">
                    &check; QC Passed
                  </span>
                </div>
              </div>

              <!-- Bottom Footer Card Link (FillTrip Style) -->
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                  </div>
                  <div>
                    <span class="text-xs font-bold text-slate-800 block">Tiruppur Apparel Corridor</span>
                    <span class="text-[11px] text-slate-500 block">Bangalore &bull; Chennai &bull; Mumbai &bull; Export</span>
                  </div>
                </div>

                <a routerLink="/capabilities" class="text-xs font-bold text-brand-blue hover:text-blue-700 flex items-center gap-1 transition-colors group-hover:translate-x-1 duration-200">
                  <span>How It Works</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 2. LIVE MANUFACTURING METRIC COUNTERS                                     -->
    <!-- ========================================================================= -->
    <section class="py-12 bg-slate-900 text-white border-y border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          
          <div class="scroll-reveal stagger-1 space-y-1 p-3 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 hover-lift-sm cursor-default">
            <span class="text-3xl sm:text-4xl font-extrabold text-amber-400 block tracking-tight">10+ Years</span>
            <span class="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider block">Tiruppur Hub Leadership</span>
          </div>

          <div class="scroll-reveal stagger-2 space-y-1 p-3 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 hover-lift-sm cursor-default">
            <span class="text-3xl sm:text-4xl font-extrabold text-white block tracking-tight">100,000+</span>
            <span class="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider block">Pieces Daily Output</span>
          </div>

          <div class="scroll-reveal stagger-3 space-y-1 p-3 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 hover-lift-sm cursor-default">
            <span class="text-3xl sm:text-4xl font-extrabold text-emerald-400 block tracking-tight">24 Hours</span>
            <span class="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider block">Digital Proofing SLA</span>
          </div>

          <div class="scroll-reveal stagger-4 space-y-1 p-3 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 hover-lift-sm cursor-default">
            <span class="text-3xl sm:text-4xl font-extrabold text-cyan-400 block tracking-tight">99.8%</span>
            <span class="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider block">Color Accuracy Rate</span>
          </div>

        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 3. FEATURED INNOVATIONS (AI GENERATED PRODUCTION CARDS)                   -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="scroll-reveal text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span class="px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wider">
            Industrial Excellence
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cutting-Edge Apparel Branding Technologies
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            Equipped with state-of-the-art automated machinery, Phoenix delivers bespoke finishes for knitwear, denim, outerwear, and high-performance activewear.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Card 1: 3D Silicone Heat Transfer -->
          <div class="scroll-reveal stagger-1 bg-white rounded-3xl overflow-hidden shadow-card border border-slate-100 flex flex-col group hover-lift hover:shadow-2xl hover:border-slate-200 transition-all duration-300">
            <div class="relative aspect-[16/10] overflow-hidden bg-slate-100 image-reveal">
              <img src="images/ai/hero_silicone_apparel.jpg" alt="Silicone 3D Printing" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <span class="absolute top-3 left-3 bg-brand-navy/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm group-hover:bg-brand-orange transition-colors duration-300 z-20">
                High-Density Silicone
              </span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-orange transition-colors duration-200">3D Silicone Heat Transfers</h3>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Tactile, raised elastomeric prints with flawless edge definition. Superior elongation and elasticity without cracking on poly-spandex and compression activewear.
                </p>
              </div>
              <a routerLink="/capabilities" class="text-xs font-bold text-brand-orange hover:text-orange-700 flex items-center gap-1.5 pt-2">
                <span>View Technical Specs</span>
                <svg class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>

          <!-- Card 2: DTF Digital Transfer Printing -->
          <div class="scroll-reveal stagger-2 bg-white rounded-3xl overflow-hidden shadow-card border border-slate-100 flex flex-col group hover-lift hover:shadow-2xl hover:border-slate-200 transition-all duration-300">
            <div class="relative aspect-[16/10] overflow-hidden bg-slate-100 image-reveal">
              <img src="images/ai/dtf_printing_facility.jpg" alt="DTF Industrial Facility" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <span class="absolute top-3 left-3 bg-brand-navy/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm group-hover:bg-brand-orange transition-colors duration-300 z-20">
                Direct-To-Film
              </span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-orange transition-colors duration-200">Automated DTF Digital Lines</h3>
                <p class="text-xs text-slate-600 leading-relaxed">
                  High-definition CMYK+White digital printing on PET films with automated powder shaker curing. Razor-sharp photorealistic gradients with zero color count limitations.
                </p>
              </div>
              <a routerLink="/capabilities" class="text-xs font-bold text-brand-orange hover:text-orange-700 flex items-center gap-1.5 pt-2">
                <span>Explore DTF Production</span>
                <svg class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>

          <!-- Card 3: Woven Labels & Leather Trims -->
          <div class="scroll-reveal stagger-3 bg-white rounded-3xl overflow-hidden shadow-card border border-slate-100 flex flex-col group hover-lift hover:shadow-2xl hover:border-slate-200 transition-all duration-300">
            <div class="relative aspect-[16/10] overflow-hidden bg-slate-100 image-reveal">
              <img src="images/ai/luxury_woven_labels.jpg" alt="Woven and Leather Trims" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <span class="absolute top-3 left-3 bg-brand-navy/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm group-hover:bg-brand-orange transition-colors duration-300 z-20">
                Luxury Trims
              </span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-orange transition-colors duration-200">Woven Damask &amp; Leather Badges</h3>
                <p class="text-xs text-slate-600 leading-relaxed">
                  High-density damask weaving, heat-pressed genuine and PU leather patches with rivets, molded rubber badges, and customized metal zipper pullers.
                </p>
              </div>
              <a routerLink="/capabilities" class="text-xs font-bold text-brand-orange hover:text-orange-700 flex items-center gap-1.5 pt-2">
                <span>Inspect Trims Portfolio</span>
                <svg class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 4. 21+ PRINTING & ACCESSORY CAPABILITIES MATRIX                           -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div class="space-y-2 max-w-xl">
            <span class="text-brand-orange font-bold text-xs uppercase tracking-wider">Full Production Catalog</span>
            <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">21+ Specialized Manufacturing Techniques</h2>
            <p class="text-slate-600 text-sm">Every technique calibrated for international wash resistance, softness, and vibrant aesthetic appeal.</p>
          </div>
          <a routerLink="/contact-us" class="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition shrink-0 self-start md:self-auto hover-lift-sm">
            Download Tech Specs PDF &rarr;
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div *ngFor="let cap of capabilities; let idx = index" 
               [class]="'scroll-reveal stagger-' + ((idx % 6) + 1) + ' p-4 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-blue-300 hover:shadow-md hover-lift-sm transition-all duration-300 flex items-start gap-3.5 group cursor-pointer'">
            <span class="w-7 h-7 rounded-xl bg-blue-100/80 text-brand-blue flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:bg-brand-blue group-hover:text-white group-hover:scale-110 transition-all duration-300">
              {{ idx + 1 }}
            </span>
            <div>
              <h4 class="text-sm font-bold text-slate-900 mb-1 group-hover:text-brand-blue transition-colors duration-200">{{ cap.name }}</h4>
              <p class="text-xs text-slate-500 leading-normal">{{ cap.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 5. REAL PRODUCTION GALLERY: CONTINUOUS AUTO-MOVING DUAL-TRACK CAROUSEL    -->
    <!-- (30 Factory Samples Auto-Streaming with Pause on Hover & Click to Enlarge)-->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      
      <!-- Section Header -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div class="scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div class="space-y-3">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>AUTO-STREAMING FACTORY SAMPLES &bull; HOVER TO FREEZE</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Factory Sample Gallery
            </h2>
            <p class="text-slate-400 text-sm max-w-2xl font-normal">
              30 authentic garment labels, silicone 3D prints, DTF transfers, and woven tags manufactured at our Tiruppur facility. Auto-moving continuous stream — hover to freeze or click to inspect in high resolution.
            </p>
          </div>

          <!-- Controls: Pause/Play & View All Portfolio Link -->
          <div class="flex items-center gap-3 shrink-0">
            <button (click)="toggleGalleryPause()" 
                    type="button"
                    class="px-4 py-2.5 rounded-full text-xs font-bold border transition-all hover-lift-sm flex items-center gap-2 active:scale-95"
                    [ngClass]="isGalleryPaused() ? 'bg-emerald-600 text-white border-emerald-500 hover:bg-emerald-500' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'">
              <span *ngIf="!isGalleryPaused()">⏸️ Pause Auto-Move</span>
              <span *ngIf="isGalleryPaused()">▶️ Resume Auto-Move</span>
            </button>

            <a routerLink="/portfolio" class="btn-shimmer hover-lift-sm px-5 py-2.5 rounded-full bg-brand-orange hover:bg-orange-600 text-xs font-bold text-white transition-all shadow-md shadow-orange-500/20 whitespace-nowrap active:scale-95">
              Explore All 30 Samples &rarr;
            </a>
          </div>
        </div>
      </div>

      <!-- Marquee Wrapper with Edge Fade Gradients -->
      <div class="scroll-reveal relative w-full overflow-hidden space-y-5">
        
        <!-- Left & Right Gradient Vignettes -->
        <div class="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none"></div>

        <!-- Track 1: Moving Left (Samples 1 to 15) -->
        <div class="overflow-hidden flex">
          <div class="animate-gallery-marquee flex items-center gap-4 py-1"
               [class.paused]="isGalleryPaused()">
            
            <!-- Set 1 (Row 1) -->
            <div *ngFor="let item of row1Samples"
                 (click)="openSampleModal(item)"
                 class="group relative w-56 sm:w-64 h-56 sm:h-64 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer shadow-lg shrink-0 transition-all duration-300 hover:scale-105 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/20">
              <img [src]="'images/gallery/' + item.filename" 
                   [alt]="item.title" 
                   loading="lazy"
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
              <div class="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-sm text-amber-300 font-extrabold text-[10px] px-2.5 py-1 rounded-full border border-amber-400/30 transition-transform duration-300 group-hover:scale-105 z-20">
                {{ item.categoryLabel }}
              </div>

              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 z-20">
                <span class="text-[10px] uppercase font-black text-amber-400 tracking-wider">{{ item.categoryLabel }}</span>
                <h4 class="text-xs font-bold text-white leading-snug line-clamp-2 mt-0.5">{{ item.title }}</h4>
                <span class="text-[11px] text-slate-300 flex items-center gap-1 font-semibold mt-1">
                  <span class="line-clamp-1">{{ item.technique }}</span> &bull; <span>Click to zoom</span> &rarr;
                </span>
              </div>
            </div>

            <!-- Set 2 (Exact duplicate for seamless infinite loop) -->
            <div *ngFor="let item of row1Samples"
                 (click)="openSampleModal(item)"
                 aria-hidden="true"
                 class="group relative w-56 sm:w-64 h-56 sm:h-64 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer shadow-lg shrink-0 transition-all duration-300 hover:scale-105 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/20">
              <img [src]="'images/gallery/' + item.filename" 
                   [alt]="item.title" 
                   loading="lazy"
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
              <div class="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-sm text-amber-300 font-extrabold text-[10px] px-2.5 py-1 rounded-full border border-amber-400/30 transition-transform duration-300 group-hover:scale-105 z-20">
                {{ item.categoryLabel }}
              </div>

              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 z-20">
                <span class="text-[10px] uppercase font-black text-amber-400 tracking-wider">{{ item.categoryLabel }}</span>
                <h4 class="text-xs font-bold text-white leading-snug line-clamp-2 mt-0.5">{{ item.title }}</h4>
                <span class="text-[11px] text-slate-300 flex items-center gap-1 font-semibold mt-1">
                  <span class="line-clamp-1">{{ item.technique }}</span> &bull; <span>Click to zoom</span> &rarr;
                </span>
              </div>
            </div>

          </div>
        </div>

        <!-- Track 2: Moving Reverse/Right (Samples 16 to 30) -->
        <div class="overflow-hidden flex">
          <div class="animate-gallery-marquee-reverse flex items-center gap-4 py-1"
               [class.paused]="isGalleryPaused()">
            
            <!-- Set 1 (Row 2) -->
            <div *ngFor="let item of row2Samples"
                 (click)="openSampleModal(item)"
                 class="group relative w-56 sm:w-64 h-56 sm:h-64 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer shadow-lg shrink-0 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20">
              <img [src]="'images/gallery/' + item.filename" 
                   [alt]="item.title" 
                   loading="lazy"
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
              <div class="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-sm text-cyan-300 font-extrabold text-[10px] px-2.5 py-1 rounded-full border border-cyan-400/30 transition-transform duration-300 group-hover:scale-105 z-20">
                {{ item.categoryLabel }}
              </div>

              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 z-20">
                <span class="text-[10px] uppercase font-black text-cyan-300 tracking-wider">{{ item.categoryLabel }}</span>
                <h4 class="text-xs font-bold text-white leading-snug line-clamp-2 mt-0.5">{{ item.title }}</h4>
                <span class="text-[11px] text-slate-300 flex items-center gap-1 font-semibold mt-1">
                  <span class="line-clamp-1">{{ item.technique }}</span> &bull; <span>Click to zoom</span> &rarr;
                </span>
              </div>
            </div>

            <!-- Set 2 (Exact duplicate for seamless infinite loop) -->
            <div *ngFor="let item of row2Samples"
                 (click)="openSampleModal(item)"
                 aria-hidden="true"
                 class="group relative w-56 sm:w-64 h-56 sm:h-64 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer shadow-lg shrink-0 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20">
              <img [src]="'images/gallery/' + item.filename" 
                   [alt]="item.title" 
                   loading="lazy"
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
              <div class="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-sm text-cyan-300 font-extrabold text-[10px] px-2.5 py-1 rounded-full border border-cyan-400/30 transition-transform duration-300 group-hover:scale-105 z-20">
                {{ item.categoryLabel }}
              </div>

              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 z-20">
                <span class="text-[10px] uppercase font-black text-cyan-300 tracking-wider">{{ item.categoryLabel }}</span>
                <h4 class="text-xs font-bold text-white leading-snug line-clamp-2 mt-0.5">{{ item.title }}</h4>
                <span class="text-[11px] text-slate-300 flex items-center gap-1 font-semibold mt-1">
                  <span class="line-clamp-1">{{ item.technique }}</span> &bull; <span>Click to zoom</span> &rarr;
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 6. RAPID SWATCH & PRODUCTION INQUIRY CTA (MERCHANDISER SWATCH BOX)       -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-24 bg-brand-navy relative overflow-hidden text-white border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="scroll-reveal-left lg:col-span-7 space-y-6">
            <span class="px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold uppercase tracking-wider inline-block">
              Complimentary For Apparel Buying Houses &amp; Exporters
            </span>
            <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Request Your Curated 2026 Textile Swatch &amp; Sample Box
            </h2>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              Touch and feel actual production quality before placing bulk orders. Our custom kit is packed with tactile silicone hardness cards, photorealistic DTF transfers, damask woven labels, and embossed leather patches.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div class="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800 hover-lift-sm hover:border-slate-700 transition-all duration-300">
                <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">&check;</span>
                <div>
                  <strong class="text-xs text-white block">15x 3D Silicone Touch Swatches</strong>
                  <span class="text-[11px] text-slate-400">Shore hardness 20A to 60A on poly-lycra &amp; cotton</span>
                </div>
              </div>

              <div class="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800 hover-lift-sm hover:border-slate-700 transition-all duration-300">
                <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">&check;</span>
                <div>
                  <strong class="text-xs text-white block">10x DTF Multi-Fabric Test Strips</strong>
                  <span class="text-[11px] text-slate-400">Cold-peel &amp; hot-peel on fleece, nylon, and twill</span>
                </div>
              </div>

              <div class="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800 hover-lift-sm hover:border-slate-700 transition-all duration-300">
                <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">&check;</span>
                <div>
                  <strong class="text-xs text-white block">8x Ultrasonic Damask Woven Labels</strong>
                  <span class="text-[11px] text-slate-400">Ultra-soft edges with no scratch on necklines</span>
                </div>
              </div>

              <div class="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800 hover-lift-sm hover:border-slate-700 transition-all duration-300">
                <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">&check;</span>
                <div>
                  <strong class="text-xs text-white block">Heat-Press Calibration Guide</strong>
                  <span class="text-[11px] text-slate-400">Exact time, temperature (&deg;C), and pressure bar cards</span>
                </div>
              </div>
            </div>

            <div class="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a routerLink="/contact-us" class="btn-shimmer hover-lift-sm w-full sm:w-auto text-center px-8 py-4 text-sm font-bold text-white bg-brand-orange hover:bg-orange-600 rounded-full shadow-lg shadow-orange-500/30 transition-all active:scale-95">
                Order Free Merchandiser Swatch Kit &rarr;
              </a>
              <a href="tel:9944107633" class="hover-lift-sm w-full sm:w-auto text-center px-6 py-4 text-sm font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full transition-all active:scale-95">
                Call Desk: +91 99441 07633
              </a>
            </div>
          </div>

          <div class="scroll-reveal-right lg:col-span-5">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group hover-lift transition-all duration-500 image-reveal">
              <img src="images/ai/swatch_box_merchandiser_kit.jpg" alt="Phoenix Textile Swatch & Sample Box" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/60 text-white text-[11px] font-bold z-20">
                <span class="text-amber-400">&starf;</span> 2026 EXPORT EDITION
              </div>
              <div class="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/60 text-white text-xs flex items-center justify-between transition-transform duration-300 group-hover:translate-y-[-2px] z-20">
                <div>
                  <strong class="text-white block text-xs">Direct Merchandiser Dispatch</strong>
                  <span class="text-[11px] text-slate-400">Shipped within 24-48 Hours</span>
                </div>
                <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full font-bold text-[10px]">ZERO SAMPLE FEE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 7. FULL-SCREEN LIGHTBOX MODAL WITH CLICK-TO-ZOOM & FIXED CANCEL BUTTON    -->
    <!-- ========================================================================= -->
    <div *ngIf="currentSample()" 
         class="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 select-none animate-fadeIn"
         (click)="closeSampleModal()">
      
      <!-- Top Fixed Header Bar (Always Visible at Top of Viewport) -->
      <div class="relative z-50 flex items-center justify-between w-full max-w-6xl mx-auto py-1 gap-4" (click)="$event.stopPropagation()">
        
        <!-- Left: Proper Title & Technique (NO raw image filename!) -->
        <div class="flex items-center gap-3 min-w-0">
          <span class="px-3.5 py-1.5 rounded-full bg-slate-900 text-amber-400 font-extrabold text-xs border border-slate-700 shadow-md whitespace-nowrap shrink-0">
            {{ currentSample()!.categoryLabel }}
          </span>
          <div class="flex flex-col min-w-0">
            <h3 class="text-sm sm:text-base font-extrabold text-white tracking-tight truncate">
              {{ currentSample()!.title }}
            </h3>
            <span class="text-[11px] font-medium text-slate-400 hidden sm:inline truncate">
              {{ currentSample()!.technique }} &bull; {{ currentSample()!.application }}
            </span>
          </div>
        </div>

        <!-- Center: Interactive Zoom Toolbar -->
        <div class="flex items-center gap-1.5 bg-slate-900/95 px-3 py-1.5 rounded-full border border-slate-700/80 shadow-xl text-white text-xs shrink-0">
          <button (click)="zoomOut()" 
                  type="button"
                  [disabled]="zoomLevel() <= 1"
                  class="p-1 hover:text-amber-400 disabled:opacity-30 disabled:hover:text-white transition" 
                  title="Zoom Out">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
          </button>
          
          <button (click)="toggleZoom()" 
                  type="button"
                  class="px-2 font-bold hover:text-amber-400 transition flex items-center gap-1" 
                  title="Click to Toggle Zoom">
            <span>{{ zoomLevel() }}x</span>
            <span class="text-[10px] text-slate-400 hidden sm:inline">{{ isZoomed() ? '(Click to Fit)' : '(Click to Zoom)' }}</span>
          </button>

          <button (click)="zoomIn()" 
                  type="button"
                  [disabled]="zoomLevel() >= 3"
                  class="p-1 hover:text-amber-400 disabled:opacity-30 disabled:hover:text-white transition" 
                  title="Zoom In">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </button>
        </div>

        <!-- Right: Prominent CANCEL / CLOSE Button (Impossible to Miss) -->
        <button (click)="closeSampleModal()" 
                type="button"
                class="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-2xl flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer shrink-0"
                aria-label="Cancel and Close Modal">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
          <span>Cancel &times;</span>
        </button>

      </div>

      <!-- Main Center Stage with Click-To-Zoom Image -->
      <div class="relative flex-1 flex items-center justify-center overflow-hidden my-2 sm:my-4" (click)="$event.stopPropagation()">
        
        <!-- Prev Arrow (Left) -->
        <button (click)="prevSample($event)" 
                type="button"
                class="absolute left-2 sm:left-6 z-40 p-3 rounded-full bg-slate-900/85 hover:bg-slate-800 text-white border border-slate-700 hover:scale-110 transition shadow-2xl"
                aria-label="Previous Sample">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
        </button>

        <!-- Center Image: Click directly to Zoom in or out -->
        <div class="relative max-h-[72vh] flex items-center justify-center transition-all duration-300"
             [class.cursor-zoom-in]="!isZoomed()"
             [class.cursor-zoom-out]="isZoomed()"
             (click)="toggleZoom()"
             title="Click directly to Zoom in / Zoom out">
          <img [src]="'images/gallery/' + currentSample()!.filename" 
               [alt]="currentSample()!.title" 
               class="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl transition-transform duration-300 ease-out select-none border border-slate-800/80"
               [style.transform]="'scale(' + zoomLevel() + ')'" />
        </div>

        <!-- Next Arrow (Right) -->
        <button (click)="nextSample($event)" 
                type="button"
                class="absolute right-2 sm:right-6 z-40 p-3 rounded-full bg-slate-900/85 hover:bg-slate-800 text-white border border-slate-700 hover:scale-110 transition shadow-2xl"
                aria-label="Next Sample">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
        </button>

      </div>

      <!-- Bottom Floating Instructions & Footer Bar -->
      <div class="relative z-50 flex items-center justify-between w-full max-w-4xl mx-auto px-4 py-2.5 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 text-white text-xs shadow-xl" (click)="$event.stopPropagation()">
        <div class="flex items-center gap-2 min-w-0">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
          <span class="text-slate-300 text-xs font-medium truncate">
            <strong class="text-white">{{ currentSample()!.title }}</strong> &bull; {{ currentSample()!.technique }}
          </span>
        </div>

        <div class="flex items-center gap-3 shrink-0">
          <span class="text-slate-400 text-[11px] hidden sm:inline">Press ESC to Cancel &bull; Click to Zoom</span>
          <button (click)="closeSampleModal()" 
                  type="button"
                  class="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold text-slate-200 hover:text-white transition whitespace-nowrap">
            Close &times;
          </button>
        </div>
      </div>

    </div>
  `
})
export class HomeComponent {
  selectedSampleIndex = signal<number | null>(null);
  zoomLevel = signal(1);
  isZoomed = signal(false);
  isGalleryPaused = signal(false);

  samples: ProductionSample[] = FACTORY_PRODUCTION_SAMPLES;
  row1Samples: ProductionSample[] = FACTORY_PRODUCTION_SAMPLES.slice(0, 15);
  row2Samples: ProductionSample[] = FACTORY_PRODUCTION_SAMPLES.slice(15, 30);

  currentSample = computed<ProductionSample | null>(() => {
    const idx = this.selectedSampleIndex();
    return idx !== null ? this.samples[idx] : null;
  });

  capabilities = [
    { name: 'High-Density 3D Stickers', desc: 'Thick, dimensional rubberized graphics with sharp vertical walls for activewear.' },
    { name: '3D Silicone Print', desc: 'Superior elasticity, silky hand-feel, and ultra-high wash durability on Lycra.' },
    { name: 'Garment Embossing & Debossing', desc: 'Heat-pressed raised and sunken fabric reliefs that retain structure indefinitely.' },
    { name: 'D.T.F. Digital Transfers', desc: 'High-resolution CMYK photorealistic graphics with zero color or detail limitations.' },
    { name: 'Crack & Distressed Prints', desc: 'Authentic vintage distressed aesthetics engineered to crack naturally with fabric stretch.' },
    { name: 'Tooth Pick Prints', desc: 'Micro-column textured raised patterns offering tactile grip and dimensional aesthetics.' },
    { name: 'Lenticular 3D Motion Badges', desc: 'Dynamic visual illusion badges shifting images or text depending on viewing angle.' },
    { name: 'Vinyl Heat Press Transfers', desc: 'Crisp, bold graphic film transfers ideal for jerseys, team uniforms, and numbers.' },
    { name: 'Reflective & Multi-Reflective', desc: 'High-candlepower micro-glass bead technology for night-running safety and style.' },
    { name: 'Rainbow Multi-Tone Prints', desc: 'Iridescent color-shifting inks changing spectrum under changing ambient light.' },
    { name: 'Weld Print & Sonic Bonding', desc: 'Seamless welded polymer application eliminating traditional stitching lines.' },
    { name: 'Branded Zipper Pullers', desc: 'Custom molded silicone, rubber, and zinc-alloy pullers engraved with brand marks.' },
    { name: 'Genuine & PU Leather Labels', desc: 'Hot-stamped, debossed, and rivet-mounted heritage labels for denim and jackets.' },
    { name: 'Molded Rubber Patches', desc: 'Flexible PVC and silicone waterproof badges for outerwear, caps, and bags.' },
    { name: 'Sugar & Glitter Prints', desc: 'Granular crystalline and glitter transfers with clear top-coat zero flake loss.' },
    { name: 'Puff / Foam 3D Prints', desc: 'Heat-expanding foam inks creating rounded, soft-touch 3D typographic effects.' },
    { name: 'Drawstring Cord Tipping', desc: 'Custom branded rubber, metal, and silicone aglets sealed onto hoodie drawcords.' },
    { name: 'Hang Tags & Price Tickets', desc: 'FSC-certified paperboard tags with UV gloss, matte lamination, and foil stamping.' },
    { name: 'Damask Woven Labels', desc: 'Ultra-fine polyester and satin yarns woven at high pick-densities for neck labels.' },
    { name: 'Embossed & Debossed Tapes', desc: 'Branded twill and grosgrain seam bindings with raised brand lettering.' },
    { name: 'Flock Velvety Transfers', desc: 'Dense synthetic fibers creating a luxurious velvet, soft-touch textile surface.' }
  ];

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.selectedSampleIndex() !== null) {
      if (event.key === 'Escape') this.closeSampleModal();
      if (event.key === 'ArrowLeft') this.prevSample();
      if (event.key === 'ArrowRight') this.nextSample();
    }
  }

  toggleGalleryPause() {
    this.isGalleryPaused.update(v => !v);
  }

  openSampleModal(sample: ProductionSample) {
    const idx = this.samples.findIndex(s => s.id === sample.id);
    this.selectedSampleIndex.set(idx >= 0 ? idx : 0);
    this.zoomLevel.set(1);
    this.isZoomed.set(false);
  }

  closeSampleModal() {
    this.selectedSampleIndex.set(null);
    this.zoomLevel.set(1);
    this.isZoomed.set(false);
  }

  toggleZoom() {
    if (this.zoomLevel() === 1) {
      this.zoomLevel.set(2);
      this.isZoomed.set(true);
    } else {
      this.zoomLevel.set(1);
      this.isZoomed.set(false);
    }
  }

  zoomIn() {
    this.zoomLevel.update(z => {
      const next = Math.min(+(z + 0.5).toFixed(1), 3);
      this.isZoomed.set(next > 1);
      return next;
    });
  }

  zoomOut() {
    this.zoomLevel.update(z => {
      const next = Math.max(+(z - 0.5).toFixed(1), 1);
      this.isZoomed.set(next > 1);
      return next;
    });
  }

  prevSample(event?: Event) {
    event?.stopPropagation();
    this.zoomLevel.set(1);
    this.isZoomed.set(false);
    this.selectedSampleIndex.update(idx => 
      (idx === null || idx === 0) ? this.samples.length - 1 : idx - 1
    );
  }

  nextSample(event?: Event) {
    event?.stopPropagation();
    this.zoomLevel.set(1);
    this.isZoomed.set(false);
    this.selectedSampleIndex.update(idx => 
      (idx === null || idx === this.samples.length - 1) ? 0 : idx + 1
    );
  }
}
