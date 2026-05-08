export const ACCENT = '#FF6A00';
export const FG = '#1a1a1a';
export const BG = '#f0eee9';
export const MUTED = 'rgba(26,26,26,0.55)';
export const BORDER = 'rgba(26,26,26,0.12)';

export const NOISE = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' /></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.5'/></svg>")`;

export const IMAGES = {
  mixer:        '/fleet-hero.jpg',
  slab:         'https://images.unsplash.com/photo-1564013434775-f71db0030976?w=900&q=80',
  pump:         '/Concrete_pump2-No_BS.jpg',
  concreteLevel: '/service-readymix.jpg',
  detailLevel:  'https://images.unsplash.com/photo-1685464196339-46a985b2049b?w=900&q=80',
  heavyWork:    'https://plus.unsplash.com/premium_photo-1683121530725-e9ddd6c74ef1?w=900&q=80',
  road:         '/1554269447380.png',
};

export const NAV_LINKS = ['Services', 'Fleet', 'Calculator', 'Yards', 'Contact'];

export const CONTACTS = [
  ['Direct dispatch', '(647) 465-1114'],
  ['Quote desk',      'info@yyzconcrete.com'],
  ['After hours',     '(647) 465-1114'],
];

export const FOOTER_COLS = [
  ['Services',  ['Ready-Mix', 'Pumping', 'Road Reconstruction', 'Specialty Mixes']],
  ['Company',   ['About', 'Fleet', 'Plants', 'Careers']],
  ['Resources', ['Calculator', 'Spec Sheets', 'Safety']],
];

export const STATS = [
  ['58',   'YEARS POURING',    'GTA'],
  ['01',   'PLANT',            'ETOBICOKE'],
  ['9 m³', 'PER MIXER',        '60-TRUCK FLEET'],
  ['<2 H', 'QUOTE TURNAROUND', 'OFFICE HOURS'],
];

export const SERVICES = [
  {
    n: '01', title: 'Ready-Mix Delivery',
    specs: ['15 – 50 MPa', 'Same-day dispatch', 'Onsite slump test'],
    img: '/service-readymix.jpg',
  },
  {
    n: '02', title: 'Concrete Pumping',
    specs: ['32 m + 38 m boom', 'Line pumps to 200 m', 'High-rise rated'],
    img: '/Concrete_pump2-No_BS.jpg',
  },
  {
    n: '03', title: 'Road Reconstruction & Concrete',
    specs: ['Municipal & highway grade', 'Full-depth reclamation', 'Curb, gutter & sidewalk'],
    img: '/1554269447380.png',
  },
];
