export interface ProductionSample {
  id: number;
  filename: string;
  title: string;
  technique: string;
  category: 'silicone' | 'dtf' | 'woven' | 'specialty';
  categoryLabel: string;
  application: string;
}

export const FACTORY_PRODUCTION_SAMPLES: ProductionSample[] = [
  {
    id: 1,
    filename: '1.jpeg',
    title: 'High-Density 3D Raised Silicone Athletic Badge',
    technique: 'Medical-Grade High-Density Silicone Heat Transfer',
    category: 'silicone',
    categoryLabel: '3D Silicone Print',
    application: 'Performance Activewear & Compression Knits'
  },
  {
    id: 2,
    filename: '2.jpeg',
    title: 'Industrial Full-Color DTF Digital Transfer',
    technique: '2400 DPI CMYK+W High-Resolution Film Transfer',
    category: 'dtf',
    categoryLabel: 'DTF Digital Line',
    application: 'Cotton, Polyester & Fleece Apparel'
  },
  {
    id: 3,
    filename: '3.jpeg',
    title: 'Ultrasonic Soft-Edge Damask Woven Neck Label',
    technique: 'Ultra-Fine 50-Denier High-Pick Damask Weave',
    category: 'woven',
    categoryLabel: 'Damask Woven',
    application: 'Luxury Knitwear, Shirts & T-Shirts'
  },
  {
    id: 4,
    filename: '4.jpeg',
    title: 'Heat-Debossed Heritage Leather Denim Patch',
    technique: 'Thermo-Debossed Genuine Leather with Rivets',
    category: 'woven',
    categoryLabel: 'Leather Trim',
    application: 'Denim, Outerwear & Heavy Jackets'
  },
  {
    id: 5,
    filename: '5.jpeg',
    title: 'Tactile Micro-Caviar Bead Dimensional Graphic',
    technique: 'Raised Polymer Micro-Bead Heat Seal',
    category: 'specialty',
    categoryLabel: 'Caviar Texture',
    application: 'Fashion Tops, Hoodies & Streetwear'
  },
  {
    id: 6,
    filename: '6.jpeg',
    title: 'Night-Safety Reflective Micro-Glass Transfer',
    technique: 'High-Candlepower Retro-Reflective Glass Beads',
    category: 'specialty',
    categoryLabel: 'Reflective Safety',
    application: 'Running Apparel, Cyclewear & Safety Outerwear'
  },
  {
    id: 7,
    filename: '7.jpeg',
    title: 'Volumetric Puff 3D Foam Graphic on Fleece',
    technique: 'Heat-Expanding Rounded Foam Ink Print',
    category: 'specialty',
    categoryLabel: 'Puff Foam 3D',
    application: 'Sweatshirts, Hoodies & Casual Knits'
  },
  {
    id: 8,
    filename: '8.jpeg',
    title: 'Custom Molded Silicone Waterproof Badge',
    technique: 'Dual-Layer Micro-Injected Flexible Silicone',
    category: 'silicone',
    categoryLabel: 'Molded Silicone',
    application: 'Jackets, Outdoor Caps & Backpacks'
  },
  {
    id: 9,
    filename: '9.jpeg',
    title: 'Precision-Cut High-Density 3D Sticker Transfer',
    technique: 'Vertical Sharp-Wall Elastomeric Vinyl Transfer',
    category: 'silicone',
    categoryLabel: 'High-Density Sticker',
    application: 'Tracksuits, Leggings & Jerseys'
  },
  {
    id: 10,
    filename: '10.jpeg',
    title: 'Optical Prismatic Rainbow Color-Shifting Transfer',
    technique: 'Multi-Spectrum Iridescent Reflective Foil',
    category: 'specialty',
    categoryLabel: 'Rainbow Foil',
    application: 'Trendy Activewear & Festival Apparel'
  },
  {
    id: 11,
    filename: '11.jpeg',
    title: 'Metallic Caviar Micro-Bead High-Relief Lettering',
    technique: 'Precision Micro-Bead Thermal Bonding',
    category: 'specialty',
    categoryLabel: 'Metallic Caviar Beads',
    application: 'Premium Streetwear & Statement Fleece'
  },
  {
    id: 12,
    filename: '12.jpeg',
    title: 'Authentic Vintage Distressed Crack Print',
    technique: 'Engineered Stretch-Cracking Screen Inks',
    category: 'specialty',
    categoryLabel: 'Crack Print',
    application: 'Vintage Graphic Tees & Denim Tops'
  },
  {
    id: 13,
    filename: '13.jpeg',
    title: 'Custom Branded Silicone Aglet & Cord Tipping',
    technique: 'Molded Seamless Silicone Aglet Sealing',
    category: 'woven',
    categoryLabel: 'Drawstring Tipping',
    application: 'Hoodie Drawcords, Shorts & Track Pants'
  },
  {
    id: 14,
    filename: '14.jpeg',
    title: 'High-Luster Mirror Metallic Gold Foil Transfer',
    technique: 'Thermal Release Hot-Stamp Metallic Foil',
    category: 'specialty',
    categoryLabel: 'Metallic Foil',
    application: 'Clubwear, Athleisure & Branded Tees'
  },
  {
    id: 15,
    filename: '15.jpeg',
    title: 'Velvety Soft-Touch Electrostatic Flock Transfer',
    technique: 'High-Density 0.5mm Nylon Suede Fibers',
    category: 'specialty',
    categoryLabel: 'Velvet Flock',
    application: 'Casual Knitwear, Polos & Sweatshirts'
  },
  {
    id: 16,
    filename: '16.jpeg',
    title: 'Sonic-Bonded Seamless Waterproof Garment Label',
    technique: 'High-Frequency Ultrasonic Polymer Welding',
    category: 'specialty',
    categoryLabel: 'Sonic Weld',
    application: 'Seam-Free Undergarments & Active Wear'
  },
  {
    id: 17,
    filename: '17.jpeg',
    title: 'Embossed Continuous Twill Seam Binding Tape',
    technique: 'Heat-Pressed Lettering on Polyester Twill',
    category: 'woven',
    categoryLabel: 'Embossed Tape',
    application: 'Shoulder Taping & Collar Seam Binding'
  },
  {
    id: 18,
    filename: '18.jpeg',
    title: 'Lenticular Dynamic 3D Motion Shift Badge',
    technique: 'Dual-Image Micro-Prismatic Lenticular Film',
    category: 'specialty',
    categoryLabel: 'Lenticular 3D',
    application: 'Kids Garments, Sportswear & Outerwear'
  },
  {
    id: 19,
    filename: '19.jpeg',
    title: 'Custom Engraved Matte Alloy Zipper Puller',
    technique: 'Die-Cast Zinc Alloy with Antique Silver Plating',
    category: 'woven',
    categoryLabel: 'Metal Hardware',
    application: 'Zippers on Jackets, Hoodies & Bags'
  },
  {
    id: 20,
    filename: '20.jpeg',
    title: '3D Raised Silicone Print on Compression Lycra',
    technique: '4-Way Stretch Elastic Silicone Inks',
    category: 'silicone',
    categoryLabel: 'Silicone Elastic',
    application: 'Compression Leggings, Gym Wear & Swimwear'
  },
  {
    id: 21,
    filename: '21.jpeg',
    title: 'Textured Toothpick Micro-Spike Tactile Print',
    technique: 'Columnar High-Viscosity Silicone Extrusion',
    category: 'silicone',
    categoryLabel: 'Toothpick Print',
    application: 'Tactile Grips, Sportswear & Streetwear'
  },
  {
    id: 22,
    filename: '22.jpeg',
    title: 'Silky Satin Center-Fold Care & Content Label',
    technique: 'Fine High-Density Polyester Satin Weaving',
    category: 'woven',
    categoryLabel: 'Satin Woven',
    application: 'Inner Neck Labels & Side-Seam Care Tags'
  },
  {
    id: 23,
    filename: '23.jpeg',
    title: 'Zero-Flake Crystalline Glitter Graphic Transfer',
    technique: 'Polyurethane Enclosed Micro-Glitter Transfer',
    category: 'specialty',
    categoryLabel: 'Glitter Shimmer',
    application: 'Womenswear, Childrenswear & Partywear'
  },
  {
    id: 24,
    filename: '24.jpeg',
    title: 'Permanent Thermo-Debossed Fabric Relief',
    technique: 'Direct High-Tonnage Heat-Press Debossing',
    category: 'specialty',
    categoryLabel: 'Fabric Deboss',
    application: 'Fleece, Velvet, Heavy Cotton & Terry'
  },
  {
    id: 25,
    filename: '25.jpeg',
    title: 'FSC-Certified Multi-Ply Paperboard Hang Tag',
    technique: 'Matte Lamination with Spot UV & Brass Eyelet',
    category: 'woven',
    categoryLabel: 'Hang Tags',
    application: 'Retail Brand Pricing & Garment Storytelling'
  },
  {
    id: 26,
    filename: '26.jpeg',
    title: 'High-Gloss Gel Dimensional Embellishment',
    technique: 'Clear High-Gloss Silicone Dome Transfer',
    category: 'silicone',
    categoryLabel: 'Gloss Gel',
    application: 'Graphic Tees & Performance Tops'
  },
  {
    id: 27,
    filename: '27.jpeg',
    title: 'Breathable Vapor-Infused Digital Transfer',
    technique: 'Zero-Hand-Feel Micro-Porous DTF Transfer',
    category: 'dtf',
    categoryLabel: 'DTF Breathable',
    application: 'Technical Mesh, Jerseys & Athletic Wear'
  },
  {
    id: 28,
    filename: '28.jpeg',
    title: 'Dual-Sided Dimensional Silicone Zipper Puller',
    technique: 'Dual-Cavity Vulcanized Silicone Injection',
    category: 'silicone',
    categoryLabel: 'Silicone Puller',
    application: 'Outerwear, Windbreakers & Bags'
  },
  {
    id: 29,
    filename: '29.jpeg',
    title: 'Ombre Multi-Color Reflective Running Graphic',
    technique: 'Gradient Color-Infused Reflective Film',
    category: 'specialty',
    categoryLabel: 'Gradient Reflective',
    application: 'Athletic Running Tees & Windcheaters'
  },
  {
    id: 30,
    filename: '30.jpeg',
    title: 'High-Definition Damask Mitre-Fold Neck Label',
    technique: 'Micro-Denier Yarn Damask with Mitre Fold',
    category: 'woven',
    categoryLabel: 'Damask Mitre',
    application: 'Designer Brands & Export Polo Collars'
  }
];
