import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- Header Hero Banner -->
    <section class="bg-brand-navy text-white py-16 sm:py-20 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span class="px-3.5 py-1.5 rounded-full bg-orange-500/20 text-brand-orange border border-orange-500/30 text-xs font-bold uppercase tracking-wider inline-block">
          Direct Factory Contact
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Connect With Our Production Team
        </h1>
        <p class="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
          Whether you need a custom swatch pack, bulk production quotation, or technical advice on heat-seal application, we are here 24/7.
        </p>
      </div>
    </section>

    <!-- Main Contact Section -->
    <section class="py-16 sm:py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Left: Contact Form -->
          <div class="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-card border border-slate-200">
            <h2 class="text-2xl font-extrabold text-slate-900 mb-2">Request Swatch Pack or Quote</h2>
            <p class="text-slate-600 text-xs sm:text-sm mb-8">
              Fill in your requirement below. Our merchandising team will respond within 2-4 business hours.
            </p>

            <form (submit)="onSubmit($event)" class="space-y-4">
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Your Name *</label>
                  <input type="text" 
                         [(ngModel)]="formData.name" 
                         name="name" 
                         placeholder="Enter full name" 
                         required 
                         class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange" />
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Email Address *</label>
                  <input type="email" 
                         [(ngModel)]="formData.email" 
                         name="email" 
                         placeholder="name@brand.com" 
                         required 
                         class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Phone / WhatsApp *</label>
                  <input type="tel" 
                         [(ngModel)]="formData.phone" 
                         name="phone" 
                         placeholder="+91 99441 07633" 
                         required 
                         class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange" />
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Service Category</label>
                  <select [(ngModel)]="formData.category" 
                          name="category" 
                          class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange bg-white">
                    <option value="Silicone 3D Printing">3D Silicone Printing</option>
                    <option value="DTF Digital Transfers">DTF Digital Transfers</option>
                    <option value="Woven Damask Labels">Damask Woven Labels</option>
                    <option value="Embossing & Tapes">Garment Embossing &amp; Tapes</option>
                    <option value="Other / Bulk Inquiry">Full Sample Swatch Kit</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Project Details / Fabric Blend</label>
                <textarea rows="4" 
                          [(ngModel)]="formData.message" 
                          name="message" 
                          placeholder="Describe your garment specifications, expected quantity, and turnaround requirements..." 
                          required 
                          class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"></textarea>
              </div>

              <button type="submit" 
                      class="w-full py-4 text-base font-bold text-white bg-brand-orange hover:bg-orange-600 rounded-xl shadow-lg shadow-orange-500/25 transition-all">
                Submit Production Request &rarr;
              </button>

              <div *ngIf="submitted()" class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <svg class="w-5 h-5 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                <span>Thank you! Your request has been sent to our Tiruppur production desk. We will reach out shortly.</span>
              </div>

            </form>
          </div>

          <!-- Right: Contact Cards & Info -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="bg-white p-6 rounded-3xl shadow-card border border-slate-200 space-y-4">
              <div class="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div class="w-11 h-11 rounded-2xl bg-white shadow-sm border border-slate-200 p-1 flex items-center justify-center shrink-0">
                  <img src="favicon.svg" alt="Phoenix Emblem" class="w-full h-full object-contain" />
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center gap-2">
                    <span class="font-black text-xl tracking-tight text-slate-900">PHOENIX</span>
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-900 text-amber-300 text-[9px] font-black uppercase">
                      <span class="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                      TIRUPPUR
                    </span>
                  </div>
                  <span class="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">LABELS, STICKERS &amp; PRINTING</span>
                </div>
              </div>
              
              <div class="space-y-3 text-xs sm:text-sm text-slate-600">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <strong class="text-slate-900 block font-bold">Phoenix Labels, Stickers &amp; Printing</strong>
                    <span>Anupparpalayam Pudur, Tiruppur, Tamil Nadu 641652, India</span>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <span class="text-slate-400 text-xs block">Phone Hotline (24/7)</span>
                    <a href="tel:9944107633" class="font-bold text-slate-900 hover:text-brand-orange transition">+91 9944107633, 9626876200</a>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <span class="text-slate-400 text-xs block">Direct Email</span>
                    <a href="mailto:phoenixlabels1@gmail.com" class="font-bold text-slate-900 hover:text-brand-orange transition">phoenixlabels1&#64;gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Operating Hours & Fast Response Card -->
            <div class="bg-brand-navy p-6 rounded-3xl text-white space-y-3">
              <span class="text-amber-400 font-bold text-xs uppercase tracking-wider block">Production Turnaround</span>
              <h4 class="text-base font-bold">Operating 24/7 for Export Demands</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                Our printing lines and customer support desks operate around the clock to ensure urgent sample requests and bulk production deadlines are fulfilled without delay.
              </p>
            </div>

          </div>

        </div>

        <!-- Tiruppur Innovation Showroom & Archive Library -->
        <div class="mt-16 bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-slate-200">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div class="lg:col-span-6 space-y-4">
              <span class="px-3.5 py-1.5 rounded-full bg-orange-100 text-brand-orange text-xs font-bold uppercase tracking-wider inline-block">
                Tiruppur Innovation Hub
              </span>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Visit Our Merchandising Showroom &amp; Sample Library
              </h2>
              <p class="text-slate-600 text-sm leading-relaxed">
                Planning an apparel collection? Visit our central Tiruppur development center. Review over 500+ physical production swatches, inspect micro-bead caviar prints under magnification, and test heat-transfer adhesives directly on your cut fabric panels using our calibrated pneumatic test presses.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div class="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">&check;</span>
                  <span>500+ Archive Swatches</span>
                </div>
                <div class="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">&check;</span>
                  <span>Live Heat-Press Testing</span>
                </div>
                <div class="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">&check;</span>
                  <span>Same-Day Lab Approvals</span>
                </div>
                <div class="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">&check;</span>
                  <span>Direct Technical Advice</span>
                </div>
              </div>

              <div class="pt-2">
                <a href="tel:9944107633" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition">
                  <span>Schedule Factory Visit</span> &rarr;
                </a>
              </div>
            </div>

            <div class="lg:col-span-6">
              <div class="rounded-3xl overflow-hidden shadow-card border border-slate-100 aspect-[16/10] bg-slate-900 relative group">
                <img src="images/ai/factory_showroom_swatch_desk.jpg" alt="Phoenix Tiruppur Merchandising Showroom" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md p-3 rounded-2xl border border-slate-700/50 text-white text-xs flex items-center justify-between">
                  <span class="font-bold text-amber-300">Merchandiser Discussion Desk</span>
                  <span class="text-slate-300 text-[11px]">Tiruppur, Tamil Nadu</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Google Maps Responsive Embed -->
        <div class="mt-12 rounded-3xl overflow-hidden shadow-card border border-slate-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15658.079030908575!2d77.30891699578227!3d11.149100077224615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba906919dea807b%3A0xbab2ebf05d75a8f1!2sAnupparpalayam%20Pudur%2C%20Tiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1691431436089!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Phoenix Factory Map"></iframe>
        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    category: 'Silicone 3D Printing',
    message: ''
  };

  submitted = signal(false);

  onSubmit(e: Event) {
    e.preventDefault();
    if (this.formData.name && this.formData.email) {
      this.submitted.set(true);
      setTimeout(() => this.submitted.set(false), 8000);
    }
  }
}
