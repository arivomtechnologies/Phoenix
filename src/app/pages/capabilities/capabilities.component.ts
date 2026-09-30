import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-capabilities',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Header Hero Banner -->
    <section class="bg-brand-navy text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span class="px-3.5 py-1.5 rounded-full bg-blue-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider inline-block mb-4">
          Tiruppur Manufacturing Infrastructure
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
          Industrial Printing &amp; Custom Trim Engineering
        </h1>
        <p class="text-slate-300 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed font-normal">
          Explore our complete range of specialized garment embellishment and labeling machinery. Calibrated for high-volume export runs with zero compromises on wash durability, elasticity, or tactile luxury.
        </p>
      </div>
    </section>

    <!-- Deep-Dive Technology Sections (5 Comprehensive AI-Powered Showcase Modules) -->
    <section class="py-16 sm:py-24 bg-white space-y-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        
        <!-- Technology 1: 3D Silicone Printing -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 space-y-5">
            <span class="px-3 py-1 rounded-full bg-rose-100 text-brand-magenta text-xs font-bold uppercase tracking-wider">
              High-Performance Activewear
            </span>
            <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">
              High-Density 3D Silicone Heat Transfers
            </h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              Our 3D silicone transfers are liquid-molded with medical-grade elastomeric silicone inks. They deliver tactile dimensional relief up to 1.5mm thickness, a silky matte hand-feel, and unmatched elasticity that moves with 4-way stretch fabrics without micro-fissures or cracking.
            </p>

            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="text-xs font-bold text-slate-400 uppercase block">Elongation</span>
                <span class="text-sm font-extrabold text-slate-900">Up to 300% Stretch Recovery</span>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="text-xs font-bold text-slate-400 uppercase block">Press Parameters</span>
                <span class="text-sm font-extrabold text-slate-900">150&deg;C &ndash; 160&deg;C &bull; 12-15s &bull; Cold Peel</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="rounded-3xl overflow-hidden shadow-card border border-slate-100 aspect-[16/10] bg-slate-900 group">
              <img src="images/ai/hero_silicone_apparel.jpg" alt="Silicone 3D Transfer Detail" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

        <!-- Technology 2: DTF Digital Transfer Printing -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 lg:order-2 space-y-5">
            <span class="px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wider">
              Photorealistic Digital CMYK+W
            </span>
            <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">
              Industrial Direct-To-Film (DTF) Digital Lines
            </h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              Equipped with industrial multi-head Atexco DTF printers and automated powder shaker curing tunnels, our digital transfer division produces over 100,000 prints daily. Perfect for intricate multi-color gradients, photorealistic art, and custom brand graphics on knits and fleece.
            </p>

            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="text-xs font-bold text-slate-400 uppercase block">Resolution</span>
                <span class="text-sm font-extrabold text-slate-900">Up to 2400 DPI Micro-Drops</span>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="text-xs font-bold text-slate-400 uppercase block">Fabric Compatibility</span>
                <span class="text-sm font-extrabold text-slate-900">Cotton, Poly, Spandex, Fleece</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6 lg:order-1">
            <div class="rounded-3xl overflow-hidden shadow-card border border-slate-100 aspect-[16/10] bg-slate-900 group">
              <img src="images/ai/dtf_printing_facility.jpg" alt="DTF Printing Line" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

        <!-- Technology 3: Woven Labels & Heritage Leather Trims -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 space-y-5">
            <span class="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              Denim &amp; Knitwear Branding
            </span>
            <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">
              Damask Woven Labels &amp; Leather Badges
            </h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              We weave high-density damask labels with ultrasonic soft edges that eliminate neck irritation. Our trim division also crafts embossed genuine leather and PU patches, molded PVC waterproof badges, and branded metal zipper pullers for outerwear and denim.
            </p>

            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="text-xs font-bold text-slate-400 uppercase block">Weave Types</span>
                <span class="text-sm font-extrabold text-slate-900">High-Density Damask &bull; Satin Weft</span>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="text-xs font-bold text-slate-400 uppercase block">Finishes</span>
                <span class="text-sm font-extrabold text-slate-900">Ultrasonic Cut &bull; Center / Mitre Fold</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="rounded-3xl overflow-hidden shadow-card border border-slate-100 aspect-[16/10] bg-slate-900 group">
              <img src="images/ai/luxury_woven_labels.jpg" alt="Woven and Leather Trims" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

        <!-- Technology 4: Garment Embossing & Ultrasonic Seam Bonding (NEW AI ASSET) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 lg:order-2 space-y-5">
            <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Dimensional Relief &amp; Seam-Free Bonding
            </span>
            <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">
              Fabric Embossing &amp; Ultrasonic Sonic Seam Taping
            </h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              Our precision thermo-forming hydraulic embossing presses create sunken and raised textural reliefs directly into heavy fleece, terry, and velvet without degrading fabric hand. Combined with high-frequency ultrasonic seam bonding, we eliminate conventional stitching lines for chafeless activewear and jackets.
            </p>

            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="text-xs font-bold text-slate-400 uppercase block">Debossing Depth</span>
                <span class="text-sm font-extrabold text-slate-900">Up to 2.0mm Permanent Thermo-Relief</span>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="text-xs font-bold text-slate-400 uppercase block">Seam Strength</span>
                <span class="text-sm font-extrabold text-slate-900">100% Waterproof Sonic Bond</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6 lg:order-1">
            <div class="rounded-3xl overflow-hidden shadow-card border border-slate-100 aspect-[16/10] bg-slate-900 group">
              <img src="images/ai/garment_embossing_sonic_weld.jpg" alt="Garment Embossing and Ultrasonic Seam Bonding" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

        <!-- Technology 5: Reflective & Prismatic Rainbow Transfers (NEW AI ASSET) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 space-y-5">
            <span class="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
              Night-Safety &amp; Dynamic Optics
            </span>
            <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">
              High-Candlepower Reflective &amp; Prismatic Rainbow Foil
            </h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              Engineered with microscopic glass bead retro-reflective layers, our night-safety transfers exceed EN ISO 20471 international safety standards with 500+ cd/(lx·m²) candlepower. For trend-forward fashion, our prismatic iridescent rainbow transfers shift colors from electric cyan to magenta under dynamic lighting.
            </p>

            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="text-xs font-bold text-slate-400 uppercase block">Reflective Standard</span>
                <span class="text-sm font-extrabold text-slate-900">EN ISO 20471 Certified</span>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="text-xs font-bold text-slate-400 uppercase block">Optics</span>
                <span class="text-sm font-extrabold text-slate-900">360&deg; Multi-Spectrum Prismatic Shift</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="rounded-3xl overflow-hidden shadow-card border border-slate-100 aspect-[16/10] bg-slate-900 group">
              <img src="images/ai/reflective_iridescent_activewear.jpg" alt="Reflective Activewear Transfer" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Technical Parameters Table -->
    <section class="py-16 bg-slate-50 border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-2xl font-extrabold text-slate-900 mb-6 text-center">Comprehensive Heat Press &amp; Application Guidelines</h3>
        
        <div class="bg-white rounded-3xl shadow-card border border-slate-200 overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs sm:text-sm text-slate-600">
              <thead class="bg-slate-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th class="p-4">Print Technique</th>
                  <th class="p-4">Temperature</th>
                  <th class="p-4">Dwell Time</th>
                  <th class="p-4">Pressure</th>
                  <th class="p-4">Peel Method</th>
                  <th class="p-4">Wash Durability</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50">
                  <td class="p-4 font-bold text-slate-900">3D Raised Silicone</td>
                  <td class="p-4">150&deg;C &ndash; 160&deg;C</td>
                  <td class="p-4">12 &ndash; 15 sec</td>
                  <td class="p-4">High (4-5 bar)</td>
                  <td class="p-4 text-brand-blue font-semibold">Cold Peel</td>
                  <td class="p-4 text-emerald-600 font-bold">50+ Cycles</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 font-bold text-slate-900">DTF Digital Transfer</td>
                  <td class="p-4">145&deg;C &ndash; 155&deg;C</td>
                  <td class="p-4">10 &ndash; 12 sec</td>
                  <td class="p-4">Medium (3-4 bar)</td>
                  <td class="p-4 text-brand-blue font-semibold">Warm / Cold</td>
                  <td class="p-4 text-emerald-600 font-bold">45+ Cycles</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 font-bold text-slate-900">Garment Debossing / Embossing</td>
                  <td class="p-4">165&deg;C &ndash; 175&deg;C</td>
                  <td class="p-4">15 &ndash; 20 sec</td>
                  <td class="p-4">High (5-6 bar)</td>
                  <td class="p-4 text-brand-blue font-semibold">Instant Release</td>
                  <td class="p-4 text-emerald-600 font-bold">Permanent Shape</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 font-bold text-slate-900">Reflective Micro-Glass</td>
                  <td class="p-4">140&deg;C &ndash; 150&deg;C</td>
                  <td class="p-4">10 &ndash; 12 sec</td>
                  <td class="p-4">Medium (3 bar)</td>
                  <td class="p-4 text-brand-blue font-semibold">Cold Peel</td>
                  <td class="p-4 text-emerald-600 font-bold">40+ Cycles</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 font-bold text-slate-900">Sonic Welded Tape / Aglets</td>
                  <td class="p-4">170&deg;C &ndash; 180&deg;C</td>
                  <td class="p-4">8 &ndash; 10 sec</td>
                  <td class="p-4">High (5 bar)</td>
                  <td class="p-4 text-brand-blue font-semibold">Cold Peel</td>
                  <td class="p-4 text-emerald-600 font-bold">50+ Cycles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="mt-8 text-center">
          <a routerLink="/contact-us" class="px-8 py-4 text-sm font-bold text-white bg-brand-orange hover:bg-orange-600 rounded-full shadow-lg shadow-orange-500/25 transition-all inline-flex items-center gap-2">
            <span>Request Custom Tech Specs Pack</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>
      </div>
    </section>
  `
})
export class CapabilitiesComponent {}
