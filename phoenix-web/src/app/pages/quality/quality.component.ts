import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quality',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Header Hero Banner -->
    <section class="bg-brand-navy text-white py-16 sm:py-20 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span class="animate-fade-in-down px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider inline-block">
          International Quality Benchmarks
        </span>
        <h1 class="animate-fade-in-up delay-150 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Factory Standards &amp; Testing Laboratory
        </h1>
        <p class="animate-fade-in-up delay-250 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
          For over a decade, Phoenix has adhered to rigorous international apparel criteria, ensuring our prints and trims withstand harsh industrial laundering and daily wear.
        </p>
      </div>
    </section>

    <!-- Lab Testing Section 1: Wash Fastness & Chemical Safety -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="scroll-reveal-left lg:col-span-6 space-y-5">
            <span class="px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wider">
              In-House Quality Control &bull; ISO Standards
            </span>
            <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">
              Rigorous Laboratory Validation for Every Batch
            </h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              Every production lot undergoes comprehensive laboratory testing prior to dispatch. We evaluate tensile stretch recovery, rub resistance, and accelerated industrial wash cycles to meet stringent US &amp; EU export criteria.
            </p>

            <div class="space-y-3 pt-2">
              <div class="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors duration-200">
                <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">&check;</span>
                <div>
                  <strong class="text-xs text-slate-900 block font-bold">OEKO-TEX Standard 100 Certified Inks</strong>
                  <span class="text-xs text-slate-500">Free from harmful phthalates, heavy metals, formaldehyde, and PVC allergens.</span>
                </div>
              </div>

              <div class="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors duration-200">
                <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">&check;</span>
                <div>
                  <strong class="text-xs text-slate-900 block font-bold">ISO 105-C06 Wash Durability</strong>
                  <span class="text-xs text-slate-500">Guaranteed grade 4-5 color fastness through 50+ commercial wash and dry cycles.</span>
                </div>
              </div>

              <div class="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors duration-200">
                <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">&check;</span>
                <div>
                  <strong class="text-xs text-slate-900 block font-bold">Martindale Abrasion &amp; Crockmeter Testing</strong>
                  <span class="text-xs text-slate-500">Zero crocking or surface flaking across dry and wet friction standards.</span>
                </div>
              </div>
            </div>
          </div>

          <div class="scroll-reveal-right lg:col-span-6">
            <div class="rounded-3xl overflow-hidden shadow-card border border-slate-100 aspect-[16/10] bg-slate-900 relative group hover-lift hover:shadow-2xl transition-all duration-300 image-reveal">
              <img src="images/ai/quality_testing_lab.jpg" alt="Textile Quality Testing Lab" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/60 text-white text-xs flex items-center justify-between transition-transform duration-300 group-hover:translate-y-[-2px] z-20">
                <div>
                  <span class="text-amber-400 font-bold block text-[11px] uppercase tracking-wider">Durability Benchmarking</span>
                  <span class="text-slate-300">ISO 105-C06 / AATCC 61 4A Launder-Ometer Suite</span>
                </div>
                <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full font-bold text-[10px]">GRADE 4-5 CERTIFIED</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Lab Testing Section 2: Spectrophotometer & Color Science Suite -->
    <section class="py-16 sm:py-24 bg-slate-900 text-white border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="scroll-reveal-left lg:col-span-6 order-2 lg:order-1">
            <div class="rounded-3xl overflow-hidden shadow-2xl border border-slate-800 aspect-[16/10] bg-slate-950 relative group hover-lift transition-all duration-300 image-reveal">
              <img src="images/ai/spectrophotometer_color_lab.jpg" alt="Spectrophotometer Color Matching Lab" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/60 text-white text-xs flex items-center justify-between transition-transform duration-300 group-hover:translate-y-[-2px] z-20">
                <div>
                  <span class="text-cyan-400 font-bold block text-[11px] uppercase tracking-wider">Digital Chromatic Accuracy</span>
                  <span class="text-slate-300">X-Rite Digital Spectrophotometer &bull; D65 Daylight</span>
                </div>
                <span class="px-2.5 py-1 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full font-bold text-[10px]">&Delta;E &lt; 0.5 TOLERANCE</span>
              </div>
            </div>
          </div>

          <div class="scroll-reveal-right lg:col-span-6 space-y-5 order-1 lg:order-2">
            <span class="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider">
              Spectrophotometer Color Matching
            </span>
            <h2 class="text-3xl font-extrabold text-white tracking-tight">
              Sub-Zero &Delta;E Color Precision Across Every Run
            </h2>
            <p class="text-slate-300 text-sm leading-relaxed">
              Brand color identity allows zero compromises. Utilizing digital spectrophotometers, computerized ink formulation systems, and calibrated multi-illuminant light booths (D65 daylight, TL84 store lighting, and Incandescent A), we guarantee exact color fidelity between lab-dips, bulk sampling, and commercial mass production.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover-lift-sm hover:border-cyan-500/50 transition-all duration-200">
                <span class="text-cyan-400 font-black text-lg block">&Delta;E &lt; 0.5</span>
                <strong class="text-xs text-white block mt-0.5">Ultra-Tight Tolerance</strong>
                <p class="text-[11px] text-slate-400 mt-1 leading-normal">Imperceptible to the naked human eye, matching global retail brand specs.</p>
              </div>

              <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover-lift-sm hover:border-amber-500/50 transition-all duration-200">
                <span class="text-amber-400 font-black text-lg block">Triple Illuminant</span>
                <strong class="text-xs text-white block mt-0.5">Metamerism Control</strong>
                <p class="text-[11px] text-slate-400 mt-1 leading-normal">Verified under D65 daylight, CWF showroom lighting, and tungsten home lamps.</p>
              </div>

              <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover-lift-sm hover:border-emerald-500/50 transition-all duration-200">
                <span class="text-emerald-400 font-black text-lg block">Pantone TCX / TPX</span>
                <strong class="text-xs text-white block mt-0.5">Textile Color Swatches</strong>
                <p class="text-[11px] text-slate-400 mt-1 leading-normal">Full Pantone Cotton and Synthetic library for instantaneous digital recipes.</p>
              </div>

              <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover-lift-sm hover:border-purple-500/50 transition-all duration-200">
                <span class="text-purple-400 font-black text-lg block">Rheometer Viscosity</span>
                <strong class="text-xs text-white block mt-0.5">Fluidity Rheology</strong>
                <p class="text-[11px] text-slate-400 mt-1 leading-normal">Monitored ink viscosity prevents bleed and produces crisp 3D edge sharpness.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- The 4 Phoenix Core Pillars -->
    <section class="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="scroll-reveal text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span class="text-brand-orange text-xs font-bold uppercase tracking-wider">Our Commitment</span>
          <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">The 4 Pillars of Phoenix Service</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="scroll-reveal stagger-1 bg-white p-6 rounded-3xl shadow-card border border-slate-100 space-y-3 hover-lift hover:shadow-xl hover:border-blue-200 transition-all duration-300 group cursor-default">
            <div class="w-10 h-10 rounded-2xl bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-lg group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
              1
            </div>
            <h3 class="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors">Customer Satisfaction</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Every sample run and export consignment is backed by our full defect replacement policy.
            </p>
          </div>

          <div class="scroll-reveal stagger-2 bg-white p-6 rounded-3xl shadow-card border border-slate-100 space-y-3 hover-lift hover:shadow-xl hover:border-blue-200 transition-all duration-300 group cursor-default">
            <div class="w-10 h-10 rounded-2xl bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-lg group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
              2
            </div>
            <h3 class="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors">Unmatched Quality</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Automated vision-inspection systems catch microscopic imperfections before rolls are packaged.
            </p>
          </div>

          <div class="scroll-reveal stagger-3 bg-white p-6 rounded-3xl shadow-card border border-slate-100 space-y-3 hover-lift hover:shadow-xl hover:border-blue-200 transition-all duration-300 group cursor-default">
            <div class="w-10 h-10 rounded-2xl bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-lg group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
              3
            </div>
            <h3 class="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors">Continuous Innovation</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Regularly introducing novel inks, micro-embossing techniques, and eco-certified sustainable trims.
            </p>
          </div>

          <div class="scroll-reveal stagger-4 bg-white p-6 rounded-3xl shadow-card border border-slate-100 space-y-3 hover-lift hover:shadow-xl hover:border-blue-200 transition-all duration-300 group cursor-default">
            <div class="w-10 h-10 rounded-2xl bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-lg group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
              4
            </div>
            <h3 class="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors">24/7 Production Support</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              On-call technical assistance for temperature calibration, rapid lab turnaround, and global shipment tracking.
            </p>
          </div>

        </div>

      </div>
    </section>
  `
})
export class QualityComponent {}
