import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface SampleItem {
  id: number;
  filename: string;
  category: 'silicone' | 'dtf' | 'woven' | 'specialty';
  title: string;
  technique: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Portfolio Header -->
    <section class="bg-brand-navy text-white py-16 sm:py-20 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span class="px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30 text-xs font-bold uppercase tracking-wider inline-block">
          Authentic Production Archive
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Factory Portfolio &amp; Swatch Gallery
        </h1>
        <p class="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
          Explore 30 verified production samples manufactured at our Tiruppur facility. Every photo represents real export order deliverables.
        </p>

        <!-- Category Filter Tabs (FillTrip Pill Style) -->
        <div class="pt-6 flex flex-wrap items-center justify-center gap-2">
          <button *ngFor="let tab of filterTabs"
                  (click)="activeCategory.set(tab.key)"
                  [class.bg-brand-orange]="activeCategory() === tab.key"
                  [class.text-white]="activeCategory() === tab.key"
                  [class.shadow-md]="activeCategory() === tab.key"
                  [class.bg-slate-800]="activeCategory() !== tab.key"
                  [class.text-slate-300]="activeCategory() !== tab.key"
                  class="px-4 py-2 rounded-full text-xs font-bold transition-all border border-slate-700">
            {{ tab.label }} ({{ getCategoryCount(tab.key) }})
          </button>
        </div>
      </div>
    </section>

    <!-- Photo Grid -->
    <section class="py-16 bg-slate-50 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <div *ngFor="let item of filteredSamples()"
               (click)="openLightbox(item)"
               class="group relative rounded-3xl overflow-hidden bg-white shadow-card border border-slate-200/80 cursor-pointer aspect-square hover:shadow-float transition-all duration-300">
            
            <img [src]="'images/gallery/' + item.filename" 
                 [alt]="item.title" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
              <span class="text-[10px] uppercase font-bold text-amber-400 tracking-wider">{{ item.technique }}</span>
              <h4 class="text-sm font-bold leading-snug">{{ item.title }}</h4>
              <span class="text-[11px] text-slate-300 mt-1 flex items-center gap-1 font-medium">
                <span>Click to inspect</span> &rarr;
              </span>
            </div>

            <span class="absolute top-3 right-3 bg-slate-900/75 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              #{{ item.id }}
            </span>
          </div>
        </div>

      </div>
    </section>

    <!-- Full-Screen Lightbox Modal -->
    <div *ngIf="activeLightboxItem()" 
         class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
         (click)="closeLightbox()">
      
      <button (click)="closeLightbox()" 
              class="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 transition"
              aria-label="Close Lightbox">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>

      <div class="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl p-4" 
           (click)="$event.stopPropagation()">
        
        <div class="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
          <img [src]="'images/gallery/' + activeLightboxItem()!.filename" 
               [alt]="activeLightboxItem()!.title" 
               class="max-w-full max-h-full object-contain" />
        </div>

        <div class="mt-4 flex items-center justify-between text-white">
          <div>
            <span class="text-xs uppercase font-bold text-amber-400 block">{{ activeLightboxItem()!.technique }}</span>
            <h3 class="text-base font-bold">{{ activeLightboxItem()!.title }}</h3>
          </div>

          <div class="flex items-center gap-2">
            <button (click)="prevLightbox()" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button (click)="nextLightbox()" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  `
})
export class PortfolioComponent {
  activeCategory = signal<'all' | 'silicone' | 'dtf' | 'woven' | 'specialty'>('all');
  activeLightboxItem = signal<SampleItem | null>(null);

  filterTabs = [
    { key: 'all' as const, label: 'All Samples' },
    { key: 'silicone' as const, label: '3D Silicone & Rubber' },
    { key: 'dtf' as const, label: 'DTF & Digital Transfers' },
    { key: 'woven' as const, label: 'Woven Labels & Patches' },
    { key: 'specialty' as const, label: 'Specialty Embellishments' }
  ];

  samples: SampleItem[] = Array.from({ length: 30 }, (_, i) => {
    const id = i + 1;
    let cat: 'silicone' | 'dtf' | 'woven' | 'specialty' = 'silicone';
    let tech = '3D Silicone Print';
    let title = `Phoenix Export Sample #${id}`;

    if (id % 4 === 1) {
      cat = 'silicone';
      tech = '3D Raised Silicone Print';
      title = `High-Density Silicone Badge #${id}`;
    } else if (id % 4 === 2) {
      cat = 'dtf';
      tech = 'Industrial DTF Digital Transfer';
      title = `Full-Color DTF Graphic Transfer #${id}`;
    } else if (id % 4 === 3) {
      cat = 'woven';
      tech = 'Damask Woven / Leather Trim';
      title = `Custom Woven Neck & Hem Tag #${id}`;
    } else {
      cat = 'specialty';
      tech = 'Embossed & Reflective Print';
      title = `Dimensional Embellishment #${id}`;
    }

    return {
      id,
      filename: `${id}.jpeg`,
      category: cat,
      title,
      technique: tech
    };
  });

  filteredSamples = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') return this.samples;
    return this.samples.filter(s => s.category === cat);
  });

  getCategoryCount(cat: string): number {
    if (cat === 'all') return this.samples.length;
    return this.samples.filter(s => s.category === cat).length;
  }

  openLightbox(item: SampleItem) {
    this.activeLightboxItem.set(item);
  }

  closeLightbox() {
    this.activeLightboxItem.set(null);
  }

  nextLightbox() {
    const cur = this.activeLightboxItem();
    if (!cur) return;
    const idx = this.samples.findIndex(s => s.id === cur.id);
    this.activeLightboxItem.set(this.samples[(idx + 1) % this.samples.length]);
  }

  prevLightbox() {
    const cur = this.activeLightboxItem();
    if (!cur) return;
    const idx = this.samples.findIndex(s => s.id === cur.id);
    this.activeLightboxItem.set(this.samples[(idx - 1 + this.samples.length) % this.samples.length]);
  }
}
