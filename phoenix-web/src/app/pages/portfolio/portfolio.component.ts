import { Component, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FACTORY_PRODUCTION_SAMPLES, ProductionSample } from '../../data/samples.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Portfolio Header -->
    <section class="bg-brand-navy text-white py-16 sm:py-20 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span class="animate-fade-in-down px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30 text-xs font-bold uppercase tracking-wider inline-block">
          Authentic Production Archive
        </span>
        <h1 class="animate-fade-in-up delay-150 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Factory Portfolio &amp; Swatch Gallery
        </h1>
        <p class="animate-fade-in-up delay-250 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
          Explore 30 verified production samples manufactured at our Tiruppur facility. Every item reflects real export order deliverables with calibrated wash-durability and tactile quality.
        </p>

        <!-- Category Filter Tabs (FillTrip Pill Style) -->
        <div class="animate-fade-in-up delay-300 pt-6 flex flex-wrap items-center justify-center gap-2">
          <button *ngFor="let tab of filterTabs"
                  (click)="activeCategory.set(tab.key)"
                  [class.bg-brand-orange]="activeCategory() === tab.key"
                  [class.text-white]="activeCategory() === tab.key"
                  [class.shadow-md]="activeCategory() === tab.key"
                  [class.bg-slate-800]="activeCategory() !== tab.key"
                  [class.text-slate-300]="activeCategory() !== tab.key"
                  class="hover-lift-sm active:scale-95 px-4 py-2 rounded-full text-xs font-bold transition-all border border-slate-700 whitespace-nowrap">
            {{ tab.label }} ({{ getCategoryCount(tab.key) }})
          </button>
        </div>
      </div>
    </section>

    <!-- Photo Grid -->
    <section class="py-16 bg-slate-50 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div *ngFor="let item of filteredSamples(); let i = index"
               (click)="openLightbox(item)"
               class="scroll-reveal image-reveal group relative rounded-3xl overflow-hidden bg-white shadow-card border border-slate-200/80 cursor-pointer aspect-square hover-lift hover:shadow-2xl hover:border-slate-300 transition-all duration-300"
               [ngClass]="'stagger-' + ((i % 4) + 1)">
            
            <img [src]="'images/gallery/' + item.filename" 
                 [alt]="item.title" 
                 loading="lazy"
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <span class="text-[10px] uppercase font-black text-amber-400 tracking-wider">{{ item.categoryLabel }}</span>
              <h4 class="text-sm font-bold leading-snug mt-1">{{ item.title }}</h4>
              <p class="text-xs text-slate-300 mt-1 line-clamp-1 font-medium">{{ item.technique }}</p>
              <span class="text-[11px] text-amber-300 mt-2 flex items-center gap-1 font-bold">
                <span>Click to zoom &amp; inspect</span> &rarr;
              </span>
            </div>

            <span class="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-amber-300 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-700/80 transition-transform duration-300 group-hover:scale-105">
              {{ item.categoryLabel }}
            </span>
          </div>
        </div>

      </div>
    </section>

    <!-- Full-Screen Lightbox Modal with Click-To-Zoom and Cancel -->
    <div *ngIf="activeLightboxItem()" 
         class="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 select-none animate-fadeIn"
         (click)="closeLightbox()">
      
      <!-- Top Bar -->
      <div class="relative z-50 flex items-center justify-between w-full max-w-6xl mx-auto py-1 gap-4" (click)="$event.stopPropagation()">
        <div class="flex items-center gap-3 min-w-0">
          <span class="px-3.5 py-1.5 rounded-full bg-slate-900 text-amber-400 font-extrabold text-xs border border-slate-700 shadow-md whitespace-nowrap shrink-0">
            {{ activeLightboxItem()!.categoryLabel }}
          </span>
          <div class="flex flex-col min-w-0">
            <h3 class="text-sm sm:text-base font-extrabold text-white tracking-tight truncate">
              {{ activeLightboxItem()!.title }}
            </h3>
            <span class="text-[11px] font-medium text-slate-400 hidden sm:inline truncate">
              {{ activeLightboxItem()!.technique }} &bull; {{ activeLightboxItem()!.application }}
            </span>
          </div>
        </div>

        <!-- Zoom Controls -->
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

        <!-- Fixed Cancel Button -->
        <button (click)="closeLightbox()" 
                type="button"
                class="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-2xl flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer shrink-0"
                aria-label="Cancel and Close Modal">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
          <span>Cancel &times;</span>
        </button>
      </div>

      <!-- Center Stage -->
      <div class="relative flex-1 flex items-center justify-center overflow-hidden my-2 sm:my-4" (click)="$event.stopPropagation()">
        
        <!-- Prev Arrow -->
        <button (click)="prevLightbox($event)" 
                type="button"
                class="absolute left-2 sm:left-6 z-40 p-3 rounded-full bg-slate-900/85 hover:bg-slate-800 text-white border border-slate-700 hover:scale-110 transition shadow-2xl"
                aria-label="Previous Sample">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
        </button>

        <!-- Center Image with Click to Zoom -->
        <div class="relative max-h-[72vh] flex items-center justify-center transition-all duration-300"
             [class.cursor-zoom-in]="!isZoomed()"
             [class.cursor-zoom-out]="isZoomed()"
             (click)="toggleZoom()"
             title="Click directly to Zoom in / Zoom out">
          <img [src]="'images/gallery/' + activeLightboxItem()!.filename" 
               [alt]="activeLightboxItem()!.title" 
               class="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl transition-transform duration-300 ease-out select-none border border-slate-800/80"
               [style.transform]="'scale(' + zoomLevel() + ')'" />
        </div>

        <!-- Next Arrow -->
        <button (click)="nextLightbox($event)" 
                type="button"
                class="absolute right-2 sm:right-6 z-40 p-3 rounded-full bg-slate-900/85 hover:bg-slate-800 text-white border border-slate-700 hover:scale-110 transition shadow-2xl"
                aria-label="Next Sample">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
        </button>

      </div>

      <!-- Bottom Bar -->
      <div class="relative z-50 flex items-center justify-between w-full max-w-4xl mx-auto px-4 py-2.5 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 text-white text-xs shadow-xl" (click)="$event.stopPropagation()">
        <div class="flex items-center gap-2 min-w-0">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
          <span class="text-slate-300 text-xs font-medium truncate">
            <strong class="text-white">{{ activeLightboxItem()!.title }}</strong> &bull; {{ activeLightboxItem()!.technique }}
          </span>
        </div>

        <div class="flex items-center gap-3 shrink-0">
          <span class="text-slate-400 text-[11px] hidden sm:inline">Press ESC to Cancel &bull; Click to Zoom</span>
          <button (click)="closeLightbox()" 
                  type="button"
                  class="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold text-slate-200 hover:text-white transition whitespace-nowrap">
            Close &times;
          </button>
        </div>
      </div>

    </div>
  `
})
export class PortfolioComponent {
  activeCategory = signal<'all' | 'silicone' | 'dtf' | 'woven' | 'specialty'>('all');
  activeLightboxIndex = signal<number | null>(null);
  zoomLevel = signal(1);
  isZoomed = signal(false);

  filterTabs = [
    { key: 'all' as const, label: 'All Samples' },
    { key: 'silicone' as const, label: '3D Silicone Prints' },
    { key: 'dtf' as const, label: 'DTF Digital Transfers' },
    { key: 'woven' as const, label: 'Woven & Leather Trims' },
    { key: 'specialty' as const, label: 'Specialty Embellishments' }
  ];

  samples: ProductionSample[] = FACTORY_PRODUCTION_SAMPLES;

  filteredSamples = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') return this.samples;
    return this.samples.filter(s => s.category === cat);
  });

  activeLightboxItem = computed<ProductionSample | null>(() => {
    const idx = this.activeLightboxIndex();
    return idx !== null ? this.samples[idx] : null;
  });

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.activeLightboxIndex() !== null) {
      if (event.key === 'Escape') this.closeLightbox();
      if (event.key === 'ArrowLeft') this.prevLightbox();
      if (event.key === 'ArrowRight') this.nextLightbox();
    }
  }

  getCategoryCount(cat: string): number {
    if (cat === 'all') return this.samples.length;
    return this.samples.filter(s => s.category === cat).length;
  }

  openLightbox(item: ProductionSample) {
    const idx = this.samples.findIndex(s => s.id === item.id);
    this.activeLightboxIndex.set(idx >= 0 ? idx : 0);
    this.zoomLevel.set(1);
    this.isZoomed.set(false);
  }

  closeLightbox() {
    this.activeLightboxIndex.set(null);
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

  prevLightbox(event?: Event) {
    event?.stopPropagation();
    this.zoomLevel.set(1);
    this.isZoomed.set(false);
    this.activeLightboxIndex.update(idx => 
      (idx === null || idx === 0) ? this.samples.length - 1 : idx - 1
    );
  }

  nextLightbox(event?: Event) {
    event?.stopPropagation();
    this.zoomLevel.set(1);
    this.isZoomed.set(false);
    this.activeLightboxIndex.update(idx => 
      (idx === null || idx === this.samples.length - 1) ? 0 : idx + 1
    );
  }
}
