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
        <span class="px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider inline-block">
          International Quality Benchmarks
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Factory Standards &amp; Testing Laboratory
        </h1>
        <p class="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
          For over a decade, Phoenix has adhered to rigorous international apparel criteria, ensuring our prints and trims withstand harsh industrial laundering and daily wear.
        </p>
      </div>
    </section>

    <!-- Lab Testing Section (with AI-Generated Image) -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-5">
            <span class="px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wider">
              In-House Quality Control
            </span>
            <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">
              Rigorous Laboratory Validation for Every Batch
            </h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              Every production lot undergoes comprehensive laboratory testing prior to dispatch. We evaluate Delta E color deviations under standardized daylight illuminants (D65/TL84), test tensile stretch recovery, and run accelerated industrial wash cycles.
            </p>

            <div class="space-y-3 pt-2">
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">&check;</span>
                <div>
                  <strong class="text-xs text-slate-900 block font-bold">OEKO-TEX Standard 100 Certified Inks</strong>
                  <span class="text-xs text-slate-500">Free from harmful phthalates, heavy metals, formaldehyde, and PVC allergens.</span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">&check;</span>
                <div>
                  <strong class="text-xs text-slate-900 block font-bold">ISO 105-C06 Wash Durability</strong>
                  <span class="text-xs text-slate-500">Guaranteed grade 4-5 color fastness through 50+ commercial wash and dry cycles.</span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">&check;</span>
                <div>
                  <strong class="text-xs text-slate-900 block font-bold">Spectrophotometer Precision</strong>
                  <span class="text-xs text-slate-500">Exact Pantone matching ensuring seamless brand consistency across garments.</span>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="rounded-3xl overflow-hidden shadow-card border border-slate-100 aspect-[16/10] bg-slate-900">
              <img src="images/ai/quality_testing_lab.jpg" alt="Textile Quality Testing Lab" class="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- The 4 Phoenix Core Pillars -->
    <section class="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span class="text-brand-orange text-xs font-bold uppercase tracking-wider">Our Commitment</span>
          <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">The 4 Pillars of Phoenix Service</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-white p-6 rounded-3xl shadow-card border border-slate-100 space-y-3">
            <div class="w-10 h-10 rounded-2xl bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-lg">
              1
            </div>
            <h3 class="text-base font-bold text-slate-900">Customer Satisfaction</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Our clients are central to everything we do. We offer custom swatch engineering, rapid digital mockups, and proactive production communication.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl shadow-card border border-slate-100 space-y-3">
            <div class="w-10 h-10 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h3 class="text-base font-bold text-slate-900">Constant Innovation</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Continuous equipment upgrades to high-speed roll DTF, multi-color high-density silicone stations, and ultrasonic label slitting.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl shadow-card border border-slate-100 space-y-3">
            <div class="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg">
              3
            </div>
            <h3 class="text-base font-bold text-slate-900">Competitive Pricing</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Direct factory pricing from Tiruppur. No middlemen markups, bulk export volume discounts, and highly optimized raw material sourcing.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl shadow-card border border-slate-100 space-y-3">
            <div class="w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg">
              4
            </div>
            <h3 class="text-base font-bold text-slate-900">24/7 Service Support</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              The backbone of our operations. On-call technical support for printing line setup, temperature calibration, and rapid turnaround.
            </p>
          </div>

        </div>

      </div>
    </section>
  `
})
export class QualityComponent {}
