/* ==========================================================================
   TacnaGo 2026 — Lógica de la aplicación
   ========================================================================== */
'use strict';

/* ---------------- ICONOS SVG ---------------- */
const P = {
  compass:'M12 2a10 10 0 100 20 10 10 0 000-20zm3.5 6.5l-2 5-5 2 2-5 5-2z',
  nav:'M3 11l19-9-9 19-2-8-8-2z',
  search:'M11 3a8 8 0 105.3 14l4.4 4.4 1.4-1.4-4.4-4.4A8 8 0 0011 3zm0 2a6 6 0 110 12 6 6 0 010-12z',
  map:'M9 2L3 5v17l6-3 6 3 6-3V2l-6 3-6-3zm0 2.2l6 3v12.6l-6-3V4.2z',
  award:'M12 2a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8zM8 15.2L6 22l6-2.5L18 22l-2-6.8a8 8 0 01-8 0z',
  pin:'M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z',
  clock:'M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6l5 3 1-1.7-4-2.3V7z',
  bus:'M4 16V6a3 3 0 013-3h10a3 3 0 013 3v10a2 2 0 01-1 1.7V19a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-1.3A2 2 0 014 16zm2-8v4h12V8H6zm1.5 8a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zm9 0a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z',
  star:'M12 2l2.9 6.3 6.8.8-5 4.7 1.3 6.8L12 17.3 6 20.6l1.3-6.8-5-4.7 6.8-.8L12 2z',
  check:'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z',
  checkc:'M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15l-4-4 1.4-1.4L11 14.2l5.6-5.6L18 10l-7 7z',
  x:'M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z',
  cal:'M7 2v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2V2h-2v2H9V2H7zM5 9h14v11H5V9z',
  coffee:'M4 3h13v7a5 5 0 01-5 5H9a5 5 0 01-5-5V3zm14 1h2a3 3 0 010 6h-2V8h2a1 1 0 000-2h-2V4zM3 19h16v2H3v-2z',
  utensils:'M7 2v8a3 3 0 002 2.8V22h2V12.8A3 3 0 0013 10V2h-2v7H10V2H8v7H7V2zm10 0c-1.7 0-3 2.7-3 6 0 2.4.8 4.2 2 5v9h2V2z',
  landmark:'M12 2L2 8v2h20V8L12 2zM4 12v7H3v2h18v-2h-1v-7h-2v7h-3v-7h-2v7h-2v-7H9v7H6v-7H4z',
  bag:'M7 7V6a5 5 0 1110 0v1h3v14H4V7h3zm2 0h6V6a3 3 0 10-6 0v1z',
  cart:'M3 3h2.2l3 11.2A2 2 0 0010.2 16h7.4a2 2 0 001.9-1.4l2.1-7H7M9 20a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z',
  user:'M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.2-8 5v3h16v-3c0-2.8-3.6-5-8-5z',
  users:'M9 12a4 4 0 100-8 4 4 0 000 8zm8 0a3 3 0 100-6 3 3 0 000 6zM1 20c0-3 3.6-5 8-5s8 2 8 5v2H1v-2zm17.5-4.6c2.7.6 4.5 2.1 4.5 4.6v2h-4v-2c0-1.7-.2-3.2-.5-4.6z',
  swap:'M8 3L4 7l4 4V8h9V6H8V3zm8 10v3H7v2h9v3l4-4-4-4z',
  info:'M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  alert:'M12 2L1 21h22L12 2zm1 15h-2v-2h2v2zm0-4h-2V9h2v4z',
  bed:'M3 7h2v6h7V9h5a4 4 0 014 4v7h-2v-3H5v3H3V7zm5 1a2 2 0 110 4 2 2 0 010-4z',
  phone:'M6.6 2A2 2 0 004.7 3.4L3.3 7a2 2 0 00.4 2.1l2 2a16 16 0 007.2 7.2l2 2a2 2 0 002.1.4l3.6-1.4A2 2 0 0022 17.4V21a1 1 0 01-1 1C10.5 22 2 13.5 2 3a1 1 0 011-1h3.6z',
  ticket:'M3 7a2 2 0 012-2h14a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 000-4V7zm6 1v8h2V8H9z',
  heart:'M12 21s-8-5-8-10a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 11c0 5-8 10-8 10z',
  list:'M3 5h2v2H3V5zm4 0h14v2H7V5zM3 11h2v2H3v-2zm4 0h14v2H7v-2zM3 17h2v2H3v-2zm4 0h14v2H7v-2z',
  chat:'M4 3h16a2 2 0 012 2v10a2 2 0 01-2 2H9l-5 4V5a2 2 0 012-2z',
  globe:'M12 2a10 10 0 100 20 10 10 0 000-20zm0 2c1.3 0 2.8 2.3 3.3 6H8.7C9.2 6.3 10.7 4 12 4zM4.3 10h3.2a21 21 0 000 4H4.3a8 8 0 010-4zm0 6h3.5c.5 2.5 1.4 4.4 2.3 5.3A8 8 0 014.3 16zm5.2 0h5a9 9 0 01-2.5 5.3A9 9 0 019.5 16zm7 0h3.2a8 8 0 01-5.8 5.3c1-1 1.9-2.8 2.6-5.3zm.3-2a21 21 0 000-4h3.2a8 8 0 010 4h-3.2zM9.3 10h5.4a19 19 0 010 4H9.3a19 19 0 010-4zM13.9 2.7A8 8 0 0119.7 8h-3.2c-.6-2.5-1.5-4.3-2.6-5.3z',
  sun:'M12 7a5 5 0 100 10 5 5 0 000-10zm0-5h0v3h0V2zm0 17v3M2 12h3m14 0h3M4.2 4.2l2.1 2.1m11.4 11.4l2.1 2.1M19.8 4.2l-2.1 2.1M6.3 17.7l-2.1 2.1',
  moon:'M12 3a9 9 0 109 9 7 7 0 01-9-9z',
  refresh:'M12 5V2L7 6l5 4V7a5 5 0 11-5 5H5a7 7 0 107-7z',
  share:'M18 16a3 3 0 00-2.2 1l-6-3.4a3 3 0 000-1.2l6-3.4A3 3 0 1015 7l-6 3.4a3 3 0 100 3.2l6 3.4A3 3 0 1018 16z',
  plus:'M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5z',
  trash:'M9 3h6l1 2h4v2H4V5h4l1-2zM6 9h12l-1 12H7L6 9z',
  send:'M2 21l21-9L2 3v7l15 2-15 2v7z',
  camera:'M9 3h6l1.5 2H20a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h3.5L9 3zm3 5a5 5 0 100 10 5 5 0 000-10z',
  layers:'M12 2l10 6-10 6L2 8l10-6zm0 11.3L4.2 8.6 2 10l10 6 10-6-2.2-1.4L12 13.3z',
  money:'M12 6a6 6 0 100 12 6 6 0 000-12zm0 2c.6 0 1 .4 1 1h1v1h-2.5a.5.5 0 000 1h1a2.5 2.5 0 010 5H13v1h-1v-1h-1v-1h2.5a.5.5 0 000-1h-1a2.5 2.5 0 010-5H12V8z',
  foot:'M7 3c1.7 0 3 2 3 4.5S8.7 12 7 12s-3-2-3-4.5S5.3 3 7 3zm10 3c1.4 0 2.5 1.7 2.5 3.8S18.4 13.5 17 13.5 14.5 11.9 14.5 9.8 15.6 6 17 6zM4 14h6v4a3 3 0 01-6 0v-4zm10 1.5h6V19a3 3 0 01-6 0v-3.5z',
  id:'M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm5 3a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4 17c0-2 2-3 4-3s4 1 4 3H4zm10-8h6v2h-6V9zm0 4h6v2h-6v-2z',
  mountain:'M2 20h20L14.5 6l-3.8 6.6L8.2 9 2 20zm13-13.6l.5-.9.5.9-.5.3-.5-.3z',
  village:'M12 3l9 7h-2.5v11h-5v-6h-3v6h-5V10H3l9-7z',
  logout:'M10 3H5a2 2 0 00-2 2v14a2 2 0 002 2h5v-2H5V5h5V3zm6.5 4.5L15 9l2 2H9v2h8l-2 2 1.5 1.5L21 12l-4.5-4.5z',
  up:'M12 7l6 6-1.4 1.4L12 9.8l-4.6 4.6L6 13l6-6z',
  down:'M12 17l-6-6 1.4-1.4L12 14.2l4.6-4.6L18 11l-6 6z',
  mail:'M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm1.5 2L12 12l7.5-5h-15z',
  lock:'M12 2a5 5 0 00-5 5v3H6a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V11a1 1 0 00-1-1h-1V7a5 5 0 00-5-5zm-3 8V7a3 3 0 116 0v3H9zm3 4a1.5 1.5 0 01.8 2.8V19h-1.6v-2.2A1.5 1.5 0 0112 14z',
  target:'M12 2v3.1A7 7 0 005.1 12H2v2h3.1A7 7 0 0012 20.9V24h2v-3.1A7 7 0 0020.9 14H24v-2h-3.1A7 7 0 0014 5.1V2h-2zm1 5.2A4.8 4.8 0 1112 16.8 4.8 4.8 0 0113 7.2zm-1 2.8a2 2 0 100 4 2 2 0 000-4z',
  flag:'M5 3h2v18H5V3zm3 1h11l-2.5 4L19 12H8V4z',
  play:'M8 5l11 7-11 7V5z',
  chevron:'M9 6l6 6-6 6',
  arrowl:'M15 6l-6 6 6 6'
};
function ico(n, s=18, sw){
  const d = P[n] || P.info;
  if(n==='sun'||n==='chevron'||n==='arrowl'||n==='up'||n==='down') return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
  return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="${d}"/></svg>`;
}

/* ---------------- ESTADO Y CUENTAS ---------------- */
const KEY = 'tacnago_v2';
const OLDKEY = 'tacnago_v1';

const defaultProfile = () => ({
  stamps:[], points:0, reviews:[], plan:[], coupons:[], lastDay:null, photos:{},
  routesDone:[], tour:{ active:false, idx:0 }
});

let S = {
  lang:'es', theme:'dark', tab:'home', view:null,
  user:null,                 // correo de la cuenta con sesión abierta
  accounts:{}, profiles:{},
  q:'', cat:'all', food:'all', bus:'all', zone:'all',
  routeOnMap:null, detail:null, chat:[],
  authMode:'in', authMsg:'', geo:null, geoState:'off'
};

/* Hash simple para guardar la contraseña sin dejarla en texto plano.
   Es un prototipo local: no sustituye a un servidor de autenticación real. */
function hashPass(txt){
  let a = 0x811c9dc5, b = 0x9e3779b9;
  const str = 'tacnago::' + txt;
  for(let i=0;i<str.length;i++){
    const c = str.charCodeAt(i);
    a = Math.imul(a ^ c, 0x01000193);
    b = Math.imul(b + c, 0x85ebca6b) ^ (b >>> 13);
  }
  return ((a>>>0).toString(16).padStart(8,'0')) + ((b>>>0).toString(16).padStart(8,'0'));
}

function seedAccounts(){
  USERS.forEach(u=>{
    if(!S.accounts[u.email]){
      S.accounts[u.email] = {
        email:u.email, name:u.name, fullName:u.fullName,
        role:u.role, roleEn:u.roleEn, avatar:u.avatar, color:u.color,
        badge:u.badge, badgeEn:u.badgeEn, pass:hashPass(SEED_PASSWORD), team:true
      };
    }
    if(!S.profiles[u.email]) S.profiles[u.email] = defaultProfile();
  });
}

function migrateV1(){
  try{
    const raw = localStorage.getItem(OLDKEY);
    if(!raw) return;
    const old = JSON.parse(raw);
    if(!old.profiles) return;
    USERS.forEach(u=>{
      const prev = old.profiles[u.id];
      if(prev && S.profiles[u.email]){
        const cur = S.profiles[u.email];
        if(!cur.stamps.length && !cur.points){
          Object.keys(prev).forEach(k=>{ cur[k] = prev[k]; });
        }
      }
    });
    if(old.lang) S.lang = old.lang;
    if(old.theme) S.theme = old.theme;
  }catch(e){}
}

function load(){
  try{
    const raw = localStorage.getItem(KEY);
    if(raw) Object.assign(S, JSON.parse(raw));
  }catch(e){ console.warn('Sin almacenamiento previo'); }
  if(!S.accounts) S.accounts = {};
  if(!S.profiles) S.profiles = {};
  seedAccounts();
  migrateV1();
  // completar campos que falten en perfiles guardados con versiones anteriores
  Object.keys(S.profiles).forEach(k=>{
    const d = defaultProfile();
    Object.keys(d).forEach(f=>{ if(S.profiles[k][f] === undefined) S.profiles[k][f] = d[f]; });
  });
  if(S.user && !S.accounts[S.user]) S.user = null;
}

function save(){
  try{
    localStorage.setItem(KEY, JSON.stringify({
      lang:S.lang, theme:S.theme, user:S.user, accounts:S.accounts, profiles:S.profiles
    }));
    return true;
  }catch(e){ return false; }   // normalmente: se llenó el almacenamiento del navegador
}

const me = () => S.profiles[S.user] || defaultProfile();
const meUser = () => S.accounts[S.user] || { name:'—', avatar:'?', color:'#64748B', role:'', roleEn:'' };
const t = k => (I18N[S.lang][k] || I18N.es[k] || k);
const EN = () => S.lang==='en';

/* Devuelve los datos de quien firmó una reseña, sea cuenta nueva o semilla */
function who(id){
  if(S.accounts[id]) return S.accounts[id];
  const u = USERS.find(x=>x.id===id);
  if(u && S.accounts[u.email]) return S.accounts[u.email];
  return { name:'Visitante', avatar:'V', color:'#64748B', role:'', roleEn:'' };
}

/* ---------- Autenticación local ---------- */
function doLogin(email, pass){
  email = (email||'').trim().toLowerCase();
  const acc = S.accounts[email];
  if(!acc || acc.pass !== hashPass(pass||'')){
    S.authMsg = t('wrongPass'); render(); return;
  }
  S.user = email; S.authMsg = ''; S.tab = 'home'; S.view = null;
  save(); render(); dailyStreak();
  toast(t('welcomeBack') + ', ' + acc.name, 'good');
}

function doRegister(name, email, pass){
  name = (name||'').trim();
  email = (email||'').trim().toLowerCase();
  if(!name || !email || !pass){ S.authMsg = t('fillAll'); render(); return; }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ S.authMsg = t('badEmail'); render(); return; }
  if(pass.length < 6){ S.authMsg = t('shortPass'); render(); return; }
  if(S.accounts[email]){ S.authMsg = t('emailTaken'); render(); return; }

  const palette = ['#C2182B','#1D6FD0','#8B3FD0','#0E8F6B','#C47F17','#D4452A','#50607A'];
  const initials = name.trim().split(/\s+/).slice(0,2).map(w=>w[0].toUpperCase()).join('');
  S.accounts[email] = {
    email, name:name.split(/\s+/)[0], fullName:name,
    role:'Visitante de TacnaGo', roleEn:'TacnaGo visitor',
    avatar:initials || name[0].toUpperCase(),
    color:palette[Object.keys(S.accounts).length % palette.length],
    badge:'Nuevo explorador', badgeEn:'New explorer',
    pass:hashPass(pass), team:false
  };
  S.profiles[email] = defaultProfile();
  S.user = email; S.authMsg = ''; S.tab = 'home'; S.view = null;
  save(); render(); dailyStreak();
  toast(t('accountCreated') + ' · ' + S.accounts[email].name, 'good');
}

function doLogout(){
  S.user = null; S.authMode = 'in'; S.authMsg = ''; S.view = null; S.tab = 'home';
  save(); render();
}

function switchUser(email){
  if(!S.accounts[email]) return;
  S.user = email; S.view = null;
  save(); render();
  toast((EN()?'Profile: ':'Perfil: ') + S.accounts[email].name, 'good');
}
function toggleLang(){ S.lang = S.lang==='es'?'en':'es'; save(); render(); }
function toggleTheme(){ S.theme = S.theme==='dark'?'light':'dark'; save(); render(); }

/* ---------- Geolocalización ---------- */
function locate(){
  if(!navigator.geolocation){ toast(EN()?'Location not available':'Ubicación no disponible'); return; }
  S.geoState = 'wait'; render();
  navigator.geolocation.getCurrentPosition(
    p=>{ S.geo = { lat:p.coords.latitude, lng:p.coords.longitude }; S.geoState='ok'; render();
         toast(EN()?'Location found':'Ubicación obtenida','good'); },
    ()=>{ S.geoState = 'deny'; render();
          toast(EN()?'Could not get your location':'No se pudo obtener tu ubicación'); },
    { enableHighAccuracy:true, timeout:10000, maximumAge:60000 }
  );
}
function haversine(a, b){
  const R = 6371000, rad = x => x*Math.PI/180;
  const dLat = rad(b.lat-a.lat), dLng = rad(b.lng-a.lng);
  const h = Math.sin(dLat/2)**2 + Math.cos(rad(a.lat))*Math.cos(rad(b.lat))*Math.sin(dLng/2)**2;
  return 2*R*Math.asin(Math.sqrt(h));
}
function fmtDist(m){
  if(m < 1000) return Math.round(m/10)*10 + ' m';
  return (m/1000).toFixed(m < 10000 ? 1 : 0) + ' km';
}

/* ---------------- UTILIDADES ---------------- */
const place = id => PLACES.find(p=>p.id===id);
const catOf = id => CATEGORIES.find(c=>c.id===id);
const today = () => new Date().getDay();
const isOpen = p => p.openDays.includes(today());
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function catName(c){ return EN() ? c.nameEn : c.name; }
function pSub(p){ return EN() && p.subEn ? p.subEn : p.sub; }
function pSched(p){ return EN() && p.scheduleEn ? p.scheduleEn : p.schedule; }
function pPrice(p){ return EN() && p.priceEn ? p.priceEn : p.price; }

function allReviews(){
  const mine = [];
  Object.keys(S.profiles).forEach(uid=>{
    (S.profiles[uid].reviews||[]).forEach(r => mine.push({...r, userId:uid}));
  });
  return [...SEED_REVIEWS, ...mine];
}
const reviewsOf = id => allReviews().filter(r=>r.placeId===id)
  .sort((a,b)=> (b.date||'').localeCompare(a.date||''));

function levelOf(pts){
  let l = LEVELS[0];
  LEVELS.forEach(x=>{ if(pts >= x.min) l = x; });
  return l;
}
function nextLevel(pts){ return LEVELS.find(x=>x.min > pts) || null; }
function lvlName(l){ return EN() ? l.nameEn : l.name; }

function addPoints(n, why){
  me().points += n;
  save();
  toast(`+${n} ${t('points')} · ${why}`, 'pts');
}

/* ---------------- TOASTS ---------------- */
function toast(msg, kind=''){
  const box = document.getElementById('toast');
  const el = document.createElement('div');
  el.className = 'tst ' + kind;
  el.innerHTML = (kind==='pts'? ico('award',16) : kind==='good'? ico('checkc',16) : ico('info',16)) + '<span>'+msg+'</span>';
  box.appendChild(el);
  setTimeout(()=>{ el.style.transition='.3s'; el.style.opacity='0'; setTimeout(()=>el.remove(),300); }, 2300);
}

/* ---------------- CABECERA DE IMAGEN POR CATEGORÍA ---------------- */
const CATART = {
  atractivos:{ g:['#8E0F1E','#C2182B','#7A4A08'], glyph:'landmark' },
  cafeterias:{ g:['#6B4A12','#C47F17','#8E5A14'], glyph:'coffee' },
  restaurantes:{ g:['#7A1F12','#D4452A','#9E3A14'], glyph:'utensils' },
  comerciales:{ g:['#123A6B','#1D6FD0','#1A2E6B'], glyph:'bag' },
  ferias:{ g:['#3F1A6B','#8B3FD0','#5A1F7A'], glyph:'cart' },
  naturaleza:{ g:['#0A5B45','#0E8F6B','#13624C'], glyph:'mountain' },
  provincias:{ g:['#6B3C15','#9A5B2E','#4F2E12'], glyph:'village' },
  servicios:{ g:['#2C3A4F','#50607A','#1F2938'], glyph:'bus' }
};
const PHOTO_MISS = new Set();   // lugares que aún no tienen foto en la carpeta fotos/

function headerArt(p, h=150){
  const a = CATART[p.cat] || CATART.atractivos;
  const seed = parseInt(p.id.slice(1),10) || 1;
  const ang = 110 + (seed % 7) * 11;
  const hue = ((seed % 5) - 2) * 7;
  const style = [
    `background-image:`,
    `repeating-linear-gradient(${45+(seed%4)*20}deg,`,
    `rgba(255,255,255,.055) 0 2px, rgba(255,255,255,0) 2px 16px),`,
    `radial-gradient(120% 130% at ${12+(seed%6)*14}% -10%, ${a.g[0]} 0%, rgba(0,0,0,0) 62%),`,
    `linear-gradient(${ang}deg, ${a.g[1]} 0%, ${a.g[2]} 100%)`
  ].join(' ');

  const base = `<div class="phimg" style="${style};filter:hue-rotate(${hue}deg) saturate(${1 + (seed%3)*0.08})"></div>`;
  const glyph = `<div class="glyph" style="color:rgba(255,255,255,.34)">${ico(a.glyph, h>170 ? 66 : 50)}</div>`;

  // 1º la foto que el usuario cargó en su celular, 2º la foto oficial del repositorio
  const mine = (me().photos || {})[p.id];
  const src = mine || (PHOTO_MISS.has(p.id) ? null : `fotos/${p.id}.jpg`);

  if(src){
    return base + glyph +
      `<img class="phimg realphoto" src="${src}" alt="" loading="lazy" decoding="async"
            onload="this.classList.add('loaded')" onerror="photoMiss(this,'${p.id}')">` +
      `<div class="shade"></div>`;
  }
  return base + glyph + `<div class="shade"></div>`;
}

/* Si no existe fotos/pX.jpg prueba .png, y si tampoco está se queda el degradado */
function photoMiss(el, id){
  if(el.dataset.alt !== '1'){ el.dataset.alt = '1'; el.src = 'fotos/' + id + '.png'; return; }
  PHOTO_MISS.add(id);
  el.remove();
}

/* ---------------- FILTRADO ---------------- */
function filtered(){
  const q = S.q.trim().toLowerCase();
  return PLACES.filter(p=>{
    const okQ = !q ||
      p.name.toLowerCase().includes(q) ||
      p.address.toLowerCase().includes(q) ||
      (p.sub||'').toLowerCase().includes(q) ||
      (p.history||'').toLowerCase().includes(q) ||
      p.bus.some(b=>b.toLowerCase().includes(q)) ||
      catOf(p.cat).name.toLowerCase().includes(q);
    const okC = S.cat==='all' || p.cat===S.cat;
    const okF = S.food==='all' || p.food===S.food;
    const okB = S.bus==='all' || p.bus.includes(S.bus);
    const okZ = S.zone==='all' || p.zone===S.zone;
    return okQ && okC && okF && okB && okZ;
  });
}
const allBusLines = [...new Set(PLACES.flatMap(p=>p.bus))].sort((a,b)=>a.localeCompare(b,'es',{numeric:true}));

/* ==========================================================================
   RENDER
   ========================================================================== */
function render(){
  document.documentElement.setAttribute('data-theme', S.theme);
  const app = document.getElementById('app');
  const main = document.getElementById('main');

  if(!S.user){
    app.classList.add('auth');
    document.getElementById('hdr').innerHTML = '';
    document.getElementById('nav').innerHTML = '';
    document.getElementById('tourbar').innerHTML = '';
    main.innerHTML = screenAuth();
    return;
  }
  app.classList.remove('auth');
  renderHeader();
  main.innerHTML = S.view ? viewScreen() : tabScreen();
  renderNav();
  renderTourBar();
  if(S.tab==='map' && !S.view) initMap();
  main.scrollTop = 0;
  window.scrollTo(0,0);
  // deja visible el filtro activo dentro de las tiras horizontales
  setTimeout(()=>{
    document.querySelectorAll('.scroller').forEach(sc=>{
      const on = sc.querySelector('.pill.on');
      if(on && on.scrollIntoView) on.scrollIntoView({ inline:'center', block:'nearest' });
    });
  }, 30);
}

/* ================= PANTALLA DE INICIO DE SESIÓN ================= */
function screenAuth(){
  const f = S.authForm || {};
  const reg = S.authMode === 'up';
  return `<div class="authwrap">
    <div class="authlogo">${ico('compass',34)}</div>
    <h1 class="authtitle">TacnaGo <span>2026</span></h1>
    <p class="authsub">${EN()?'The best of Tacna in one place':'Lo mejor de Tacna en un solo lugar'}</p>

    <div class="authcard">
      <div class="authtabs">
        <button class="${!reg?'on':''}" onclick="S.authMode='in';S.authMsg='';render()">${t('signIn')}</button>
        <button class="${reg?'on':''}" onclick="S.authMode='up';S.authMsg='';render()">${t('signUp')}</button>
      </div>

      ${reg? `<label class="fld">${ico('user',14)}
        <input id="au_name" type="text" placeholder="${t('yourName')}" value="${esc(f.name||'')}"
          oninput="authKeep()"></label>`:''}

      <label class="fld">${ico('mail',14)}
        <input id="au_mail" type="email" inputmode="email" autocomplete="username"
          placeholder="${t('email')}" value="${esc(f.email||'')}" oninput="authKeep()"></label>

      <label class="fld">${ico('lock',14)}
        <input id="au_pass" type="password" autocomplete="current-password"
          placeholder="${t('password')}" value="${esc(f.pass||'')}"
          oninput="authKeep()" onkeydown="if(event.key==='Enter')authSubmit()"></label>

      ${S.authMsg? `<div class="autherr">${ico('alert',13)} ${esc(S.authMsg)}</div>`:''}

      <button class="btn primary" onclick="authSubmit()">
        ${ico(reg?'plus':'logout',15)} ${reg? t('createAccount') : t('enter')}</button>
    </div>

    <div class="authquick">
      <div class="authquick-h">${ico('users',13)} ${t('quickAccess')}</div>
      <div class="qgrid">
        ${USERS.map(u=>`<button class="qacc" onclick="doLogin('${u.email}','${SEED_PASSWORD}')">
          <span class="qav" style="background:${u.color}">${u.avatar}</span>
          <b>${u.name}</b></button>`).join('')}
      </div>
      <div class="note" style="margin-top:10px">${ico('info',13)}<span>
        ${EN()?'Team password':'Contraseña del equipo'}: <b>${SEED_PASSWORD}</b> · ${t('localNote')}</span></div>
    </div>

    <div class="authfoot">
      <button onclick="toggleLang()">${ico('globe',13)} ${S.lang==='es'?'English':'Español'}</button>
      <button onclick="toggleTheme()">${S.theme==='dark'?ico('moon',13):ico('sun',13)} ${t('theme')}</button>
    </div>
  </div>`;
}
function authKeep(){
  S.authForm = {
    name:(document.getElementById('au_name')||{}).value || '',
    email:(document.getElementById('au_mail')||{}).value || '',
    pass:(document.getElementById('au_pass')||{}).value || ''
  };
}
function authSubmit(){
  authKeep();
  const f = S.authForm;
  if(S.authMode==='up') doRegister(f.name, f.email, f.pass);
  else doLogin(f.email, f.pass);
}

/* ---------- Cabecera ---------- */
function renderHeader(){
  const u = meUser(); const p = me(); const lv = levelOf(p.points);
  document.getElementById('hdr').innerHTML = `
    <div class="brandrow">
      <div class="brand">
        <div class="logo">${ico('compass',21)}</div>
        <div>
          <h1>TacnaGo<span class="yr">2026</span></h1>
          <p>${EN()?'The best of Tacna in one place':'Lo mejor de Tacna en un solo lugar'}</p>
        </div>
      </div>
      <div class="avrow">
        ${[meUser(), ...Object.values(S.accounts).filter(a=>a.email!==S.user)].slice(0,4).map(x=>`<button class="av ${x.email===S.user?'on':''}"
            style="background:${x.color}" onclick="switchUser('${x.email}')" title="${esc(x.fullName||x.name)}">
            ${x.avatar}${x.email===S.user?'<i class="dot"></i>':''}</button>`).join('')}
      </div>
    </div>
    <div class="userbar">
      <span class="who">${EN()?'Active':'Activo'}: <b>${u.name}</b> · ${lv.icon} ${lvlName(lv)}</span>
      <div class="row" style="gap:7px">
        <span class="pts">${ico('award',13)} ${p.points}</span>
        <div class="hdr-actions">
          <button class="iconbtn" onclick="toggleLang()">${S.lang.toUpperCase()}</button>
          <button class="iconbtn" onclick="toggleTheme()">${S.theme==='dark'?ico('moon',14):ico('sun',14)}</button>
        </div>
      </div>
    </div>`;
}

/* ---------- Navegación ---------- */
const TABS = [
  {id:'home', ic:'compass', k:'home'},
  {id:'routes', ic:'nav', k:'routes'},
  {id:'explore', ic:'search', k:'explore'},
  {id:'map', ic:'map', k:'map'},
  {id:'profile', ic:'award', k:'profile'}
];
function renderNav(){
  document.getElementById('nav').innerHTML = TABS.map(x=>
    `<button class="${S.tab===x.id&&!S.view?'on':''}" onclick="go('${x.id}')">
       ${ico(x.ic,21)}<span>${t(x.k)}</span></button>`).join('');
}
function go(tab){ S.tab = tab; S.view = null; render(); }
function openView(v){ S.view = v; render(); }
function closeView(){ S.view = null; render(); }

/* ==========================================================================
   PANTALLAS POR PESTAÑA
   ========================================================================== */
function tabScreen(){
  switch(S.tab){
    case 'home': return screenHome();
    case 'routes': return screenRoutes();
    case 'explore': return screenExplore();
    case 'map': return screenMap();
    case 'profile': return screenProfile();
  }
}

/* ---------- INICIO ---------- */
function screenHome(){
  const fairs = PLACES.filter(p=>p.cat==='ferias' && isOpen(p));
  const u = meUser();
  const tools = [
    {v:'coupons', ic:'ticket', k:'coupons', c:'var(--amber)'},
    {v:'assistant', ic:'chat', k:'assistant', c:'var(--crimson-l)'},
    {v:'tour', ic:'flag', k:'tour', c:'var(--green)'},
    {v:'lodging', ic:'bed', k:'lodging', c:'var(--blue)'},
    {v:'events', ic:'cal', k:'events', c:'var(--purple)'},
    {v:'border', ic:'globe', k:'border', c:'var(--amber)'},
    {v:'emergency', ic:'phone', k:'emergency', c:'var(--red)'},
    {v:'fx', ic:'swap', k:'converter', c:'var(--green)'},
    {v:'credits', ic:'users', k:'credits', c:'var(--tx2)'}
  ];
  return `<div class="pad stack">
    <div class="hero">
      <span class="eyebrow">${t('welcome')}</span>
      <h3>${t('whatToday')}, ${u.name}?</h3>
      <div class="searchwrap">
        ${ico('search',17)}
        <input id="homeq" type="text" placeholder="${t('searchPh')}" value="${esc(S.q)}"
          oninput="S.q=this.value" onkeydown="if(event.key==='Enter'){S.cat='all';go('explore')}">
      </div>
    </div>

    ${fairs.length? `<div class="banner">
      <div class="row grow">
        <div class="ico">${ico('cal',18)}</div>
        <div class="grow">
          <b>${fairs.length} ${t('fairsOpen')}</b>
          <span>${fairs.map(f=>f.name).join(' · ')}</span>
        </div>
      </div>
      <button class="btn sm primary" onclick="S.cat='ferias';go('explore')">${t('seeFairs')}</button>
    </div>` : ''}

    <div>
      <div class="sec-h"><h2>${ico('layers',15)} ${t('directory')}</h2><span class="cnt">${PLACES.length} ${t('sites')}</span></div>
      <div class="catgrid">
        ${CATEGORIES.map(c=>`
          <button class="cat" style="--c:${c.color}" onclick="S.cat='${c.id}';S.food='all';go('explore')">
            <div class="ci">${ico(c.icon,19)}</div>
            <span class="cc">${PLACES.filter(x=>x.cat===c.id).length}</span>
            <div class="cn">${catName(c)}</div>
          </button>`).join('')}
      </div>
    </div>

    <div>
      <div class="sec-h"><h2>${ico('nav',15)} ${t('curatedRoutes')}</h2>
        <button class="link" onclick="go('routes')">${t('seeAll')} →</button></div>
      <div class="stack">${ROUTES.slice(0,2).map(r=>routeMini(r)).join('')}</div>
    </div>

    <div>
      <div class="sec-h"><h2>${ico('compass',15)} ${t('tools')}</h2></div>
      <div class="toolgrid">
        ${tools.map(x=>`<button class="tool" style="--c:${x.c}" onclick="openView('${x.v}')">
          <div class="ti">${ico(x.ic,17)}</div><span>${t(x.k)}</span></button>`).join('')}
      </div>
    </div>

    ${fxWidget()}
  </div>`;
}

function routeMini(r){
  const done = r.stops.filter(id=>me().stamps.includes(id)).length;
  return `<div class="route" style="--c:${r.color}">
    <div class="rtop">
      <div class="between">
        <span class="tag">${EN()?r.typeEn:r.type}</span>
        <span style="font-size:10.5px;color:var(--tx3);font-weight:700">
          ${ico('clock',11)} ${r.duration} · ${ico('foot',11)} ${r.distance}</span>
      </div>
      <h3>${EN()?r.titleEn:r.title}</h3>
      <p class="rdesc">${EN()?r.descEn:r.desc}</p>
      <div class="progbar"><i style="width:${(done/r.stops.length*100)}%"></i></div>
      <div class="between" style="margin-top:10px">
        <span style="font-size:11.5px;font-weight:800;color:var(--amber)">${t('budget')}: ${r.budget}</span>
        <button class="btn sm primary" onclick="showRoute('${r.id}')">${t('seeOnMap')} ${ico('chevron',12)}</button>
      </div>
    </div>
  </div>`;
}

/* ---------- RUTAS ---------- */
function screenRoutes(){
  return `<div class="pad stack">
    <div class="card p">
      <h2 style="margin:0;font-size:16px;font-weight:900;display:flex;align-items:center;gap:8px">
        ${ico('nav',19)} ${EN()?'6 guided tourist routes':'6 rutas turísticas guiadas'}</h2>
      <p style="margin:6px 0 0;font-size:12px;color:var(--tx2);line-height:1.5">
        ${EN()?'Curated itineraries to explore Tacna by interest. Mark each stop to collect your digital stamps and earn points.'
              :'Itinerarios curados para explorar Tacna según tus intereses. Marca cada parada para ganar sellos digitales y puntos.'}</p>
    </div>
    ${ROUTES.map((r,i)=>routeFull(r,i)).join('')}
  </div>`;
}
function routeFull(r,i){
  const stops = r.stops.map(place);
  const done = stops.filter(p=>me().stamps.includes(p.id)).length;
  const complete = done===stops.length;
  return `<div class="route" style="--c:${r.color}">
    <div class="rtop">
      <div class="between">
        <span style="font-size:9.5px;font-weight:900;color:var(--tx3);letter-spacing:1px">
          ${EN()?'ROUTE':'RUTA'} 0${i+1}</span>
        <span class="tag">${EN()?r.typeEn:r.type}</span>
      </div>
      <h3>${EN()?r.titleEn:r.title}</h3>
      <p class="rdesc">${EN()?r.descEn:r.desc}</p>
      <div class="meta3">
        <div><b>${t('duration')}</b>${r.duration}</div>
        <div><b>${t('distance')}</b>${r.distance}</div>
        <div><b>${t('budget')}</b>${r.budget}</div>
      </div>
      <div class="transline">${ico('bus',14)} ${t('transport')}: ${EN()?r.transportEn:r.transport}</div>
      <div class="progbar"><i style="width:${done/stops.length*100}%"></i></div>
      <div style="font-size:10.5px;color:${complete?'#34D399':'var(--tx3)'};font-weight:800;margin-top:6px;text-align:right">
        ${done}/${stops.length} ${complete? '· '+t('routeDone') : t('stamps')}</div>
    </div>
    <div class="stopslist">
      <div style="font-size:10px;font-weight:800;color:var(--tx3);letter-spacing:.7px;text-transform:uppercase">
        ${t('stops')} (${stops.length})</div>
      ${stops.map((p,n)=>{
        const has = me().stamps.includes(p.id);
        return `<div class="stop">
          <div class="row grow" style="min-width:0">
            <span class="stopn">${n+1}</span>
            <div class="si grow" onclick="openPlace('${p.id}')" style="cursor:pointer">
              <b>${esc(p.name)}</b><span>${ico('bus',9)} ${p.bus.join(' · ')}</span>
            </div>
          </div>
          <button class="minibtn ${has?'done':''}" onclick="toggleStamp('${p.id}','${r.id}')">
            ${ico(has?'checkc':'award',12)} ${has?t('stampEarned'):t('markVisit')}</button>
        </div>`;
      }).join('')}
    </div>
    <div style="padding:12px;display:grid;grid-template-columns:1fr auto;gap:8px;border-top:1px solid var(--line)">
      <button class="btn primary" onclick="showRoute('${r.id}')">${ico('map',15)} ${t('seeOnMap')}</button>
      <button class="btn ghost" style="width:auto;padding:11px 14px" onclick="shareRoute('${r.id}')">${ico('share',15)}</button>
    </div>
  </div>`;
}
function showRoute(id){ S.routeOnMap = id; go('map'); }
function shareRoute(id){
  const r = ROUTES.find(x=>x.id===id);
  const txt = `🗺️ ${EN()?r.titleEn:r.title} — TacnaGo\n\n${EN()?r.descEn:r.desc}\n\n`+
    r.stops.map((s,i)=>`${i+1}. ${place(s).name} (${EN()?'bus':'combi'} ${place(s).bus.slice(0,2).join(', ')})`).join('\n')+
    `\n\n⏱ ${r.duration} · 💰 ${r.budget}\n\n${EN()?'Shared from TacnaGo 2026':'Compartido desde TacnaGo 2026'}`;
  shareText(txt);
}
function shareText(txt){
  if(navigator.share){ navigator.share({text:txt}).catch(()=>{}); }
  else window.open('https://wa.me/?text='+encodeURIComponent(txt),'_blank');
}

/* ---------- EXPLORAR ---------- */
function screenExplore(){
  const list = filtered();
  const active = S.cat!=='all' || S.bus!=='all' || S.q || S.food!=='all' || S.zone!=='all';
  return `<div class="pad stack">
    <div class="searchwrap">
      ${ico('search',17)}
      <input type="text" placeholder="${t('searchPh')}" value="${esc(S.q)}"
        oninput="S.q=this.value;refreshList()">
    </div>
    <div class="scroller">
      <button class="pill ${S.cat==='all'?'on':''}" onclick="S.cat='all';S.food='all';render()">${t('allCats')}</button>
      ${CATEGORIES.map(c=>`<button class="pill ${S.cat===c.id?'on':''}"
        onclick="S.cat='${c.id}';S.food='all';render()">${catName(c)}</button>`).join('')}
    </div>
    ${S.cat==='restaurantes'? `<div class="scroller">
      <button class="pill ${S.food==='all'?'on':''}" onclick="S.food='all';render()">${t('food')}: ${t('allCats')}</button>
      ${FOOD_TYPES.map(f=>`<button class="pill ${S.food===f?'on':''}" onclick="S.food='${f}';render()">${f}</button>`).join('')}
    </div>`:''}
    <div class="scroller">
      <button class="pill ${S.zone==='all'?'on':''}" onclick="S.zone='all';render()">${t('allZones')}</button>
      ${ZONES.map(z=>`<button class="pill ${S.zone===z.id?'on':''}" onclick="S.zone='${z.id}';render()">
        ${EN()?z.shortEn:z.short} · ${PLACES.filter(p=>p.zone===z.id).length}</button>`).join('')}
    </div>
    <div class="selrow">
      <label>${ico('bus',14)} ${t('line')}</label>
      <select onchange="S.bus=this.value;refreshList()">
        <option value="all">${t('allLines')}</option>
        ${allBusLines.map(b=>`<option value="${esc(b)}" ${S.bus===b?'selected':''}>${esc(b)}</option>`).join('')}
      </select>
    </div>
    <div class="between" style="font-size:11.5px;color:var(--tx2);padding:0 2px">
      <span id="cnt">${t('showing')} <b>${list.length}</b> ${t('found')}</span>
      ${active?`<button class="link" style="color:var(--crimson-l);font-weight:800;font-size:11.5px"
        onclick="S.q='';S.cat='all';S.food='all';S.bus='all';S.zone='all';render()">${ico('refresh',12)} ${t('clear')}</button>`:''}
    </div>
    <div class="stack" id="plist">${list.length? list.map(placeCard).join('') : emptyBox(t('noResults'))}</div>
  </div>`;
}
function refreshList(){
  const list = filtered();
  const el = document.getElementById('plist');
  if(el) el.innerHTML = list.length? list.map(placeCard).join('') : emptyBox(t('noResults'));
  const c = document.getElementById('cnt');
  if(c) c.innerHTML = `${t('showing')} <b>${list.length}</b> ${t('found')}`;
}
function emptyBox(msg){ return `<div class="empty"><div class="eico">🔍</div>${msg}</div>`; }

function placeCard(p){
  const c = catOf(p.cat);
  const has = me().stamps.includes(p.id);
  const nrev = reviewsOf(p.id).length;
  return `<div class="place" onclick="openPlace('${p.id}')">
    <div class="ph">
      ${headerArt(p)}
      <div class="chips">
        <span class="chip">${catName(c)}</span>
        ${p.cat==='ferias'? `<span class="chip ${isOpen(p)?'ok':'no'}">${isOpen(p)?'● '+t('openToday'):t('closedToday')}</span>`:''}
      </div>
      ${has?`<div class="stampmark">${ico('award',13)}</div>`:''}
      <div class="foot">
        <h4>${esc(p.name)}</h4>
        <span class="rate">${ico('star',11)} ${p.rating}</span>
      </div>
    </div>
    <div class="pbody">
      <div class="zoneline">
        <span class="zb" style="--zc:${zoneOf(p.zone).color}">${ico(p.zone==='ciudad'?'foot':'bus',10)} ${EN()?zoneOf(p.zone).shortEn:zoneOf(p.zone).short}</span>
        <span>${p.travel ? esc(p.travel) : t('inCity')}</span>
      </div>
      <p class="desc">${esc(p.history)}</p>
      <div class="prow">
        <span class="addr">${ico('pin',12)}<span>${esc(p.address)}</span></span>
        <span class="price">${pPrice(p)}</span>
      </div>
      <div class="buses">
        ${ico('bus',13)}
        ${p.bus.map(b=>`<span class="bus">${esc(b)}</span>`).join('')}
        <span style="margin-left:auto;font-size:10px;color:var(--tx3)">${nrev} ${nrev===1? t('reviewOne') : t('reviews').toLowerCase()}</span>
      </div>
    </div>
  </div>`;
}

/* ---------- MAPA ---------- */
function activeRoute(){
  if(!S.routeOnMap) return null;
  if(S.routeOnMap === 'custom'){
    const stops = me().plan.filter(id=>place(id));
    if(!stops.length) return null;
    return { id:'custom', title:t('tour'), titleEn:t('tour'), color:'#E09B1E', stops, custom:true };
  }
  return ROUTES.find(x=>x.id===S.routeOnMap) || null;
}
function screenMap(){
  const r = activeRoute();
  return `<div id="mapview">
    <div id="mapbar">
      <div class="between" style="margin-bottom:8px">
        <span style="font-size:11.5px;font-weight:800;text-transform:uppercase;letter-spacing:.6px;
          color:var(--tx2);display:flex;align-items:center;gap:6px">${ico('map',15)} ${EN()?'Tacna map':'Mapa de Tacna'}</span>
        <div class="row" style="gap:6px">
          <button class="btn sm ghost" onclick="locate()" title="${t('useLocation')}">${ico('target',13)}</button>
          ${r?`<button class="btn sm ghost" onclick="S.routeOnMap=null;render()">${ico('x',12)} ${EN()?'Clear':'Quitar'}</button>`:''}
        </div>
      </div>
      ${r? `<div style="background:color-mix(in srgb,${r.color} 16%,transparent);border:1px solid ${r.color}66;
        border-radius:11px;padding:9px 11px;font-size:11.5px;font-weight:700">
        ${ico(r.custom?'flag':'nav',13)} ${EN()?r.titleEn:r.title} · ${r.stops.length} ${EN()?'stops':'paradas'}</div>`
      : `<div class="scroller">
          <button class="pill ${S.cat==='all'?'on':''}" onclick="S.cat='all';render()">${t('allCats')}</button>
          ${CATEGORIES.map(c=>`<button class="pill ${S.cat===c.id?'on':''}" onclick="S.cat='${c.id}';render()">${catName(c)}</button>`).join('')}
        </div>`}
    </div>
    <div style="flex:1;position:relative">
      <div id="mapc"></div>
      <div class="maploading" id="mapload"><div style="text-align:center">
        <div class="spin"></div>
        <div style="font-size:11.5px;color:var(--tx3)">${EN()?'Loading map…':'Cargando mapa…'}</div></div></div>
    </div>
  </div>`;
}

let _map = null;
function initMap(){
  if(!window.L){
    setTimeout(initMap, 350);
    return;
  }
  const el = document.getElementById('mapc');
  if(!el) return;
  if(_map){ _map.remove(); _map = null; }
  const map = L.map(el, {zoomControl:true, attributionControl:true}).setView([-18.0137,-70.2508], 13);
  _map = map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom:19, attribution:'&copy; OpenStreetMap'
  }).addTo(map);

  const r = activeRoute();
  let list = r ? r.stops.map(place) : (S.cat==='all'? PLACES : PLACES.filter(p=>p.cat===S.cat));

  const tour = me().tour;
  const curId = (r && r.custom && tour && tour.active) ? r.stops[tour.idx] : null;

  const pts = [];
  list.forEach((p,i)=>{
    const col = r ? r.color : catOf(p.cat).color;
    const isCur = p.id === curId;
    const done = r && r.custom && tour && tour.active && i < tour.idx;
    const icon = L.divIcon({ className:'', iconSize:[26,26], iconAnchor:[13,26],
      html:`<div class="pin ${isCur?'pulse':''}" style="background:${done? '#0E8F6B' : col}${isCur?';transform:rotate(-45deg) scale(1.25)':''}">
              <b>${r? (done? '✓' : i+1) : ''}</b></div>` });
    const m = L.marker([p.lat,p.lng],{icon}).addTo(map);
    pts.push([p.lat,p.lng]);
    m.bindPopup(`<div style="min-width:170px">
      <b style="font-size:13px;display:block;margin-bottom:3px">${esc(p.name)}</b>
      <span style="font-size:10px;background:var(--bg3);padding:2px 6px;border-radius:5px;color:var(--tx2)">${esc(pSub(p))}</span>
      <div style="font-size:10.5px;color:var(--tx2);margin:6px 0">🚍 ${p.bus.join(', ')}</div>
      <button onclick="openPlace('${p.id}')" style="width:100%;background:${col};color:#fff;border:none;
        padding:6px;border-radius:8px;font-size:11px;font-weight:800;cursor:pointer">
        ${EN()?'View details':'Ver ficha'}</button></div>`);
  });

  // marcador de la posición del usuario
  if(S.geo){
    L.marker([S.geo.lat, S.geo.lng], { icon: L.divIcon({ className:'', iconSize:[18,18], iconAnchor:[9,9],
      html:'<div class="mepin"></div>' }) }).addTo(map).bindPopup(EN()?'You are here':'Estás aquí');
    pts.push([S.geo.lat, S.geo.lng]);
  }

  let bounds = null;
  if(r && pts.length>1){
    const stopPts = r.stops.map(place).filter(Boolean).map(x=>[x.lat,x.lng]);
    const line = L.polyline(stopPts,{color:r.color, weight:4, opacity:.85, dashArray:'9,7'}).addTo(map);
    bounds = L.latLngBounds(pts);
  } else if(pts.length){
    bounds = L.latLngBounds(pts);
  }
  const fit = ()=>{
    map.invalidateSize();
    if(bounds) map.fitBounds(bounds,{padding:[40,40], maxZoom:16});
    const l = document.getElementById('mapload'); if(l) l.style.display='none';
  };
  setTimeout(fit, 220);
  setTimeout(fit, 650);
}

/* ---------- PERFIL / PASAPORTE ---------- */
function screenProfile(){
  const u = meUser(), p = me();
  const lv = levelOf(p.points), nx = nextLevel(p.points);
  const pct = nx ? Math.min(100, ((p.points - lv.min)/(nx.min - lv.min))*100) : 100;
  const seedId = (USERS.find(x=>x.email===S.user)||{}).id;
  const myRevs = (p.reviews||[]).map(r=>({...r,userId:S.user}))
    .concat(SEED_REVIEWS.filter(r=>r.userId===seedId));
  return `<div class="pad stack">
    <div class="profcard">
      <div class="row">
        <div class="bigav" style="background:${u.color}">${u.avatar}</div>
        <div class="grow">
          <div style="font-size:16px;font-weight:900;line-height:1.15">${esc(u.fullName)}</div>
          <div style="font-size:11.5px;color:var(--tx2);font-weight:600;margin-top:2px">${EN()?u.roleEn:u.role}</div>
          <div style="font-size:10.5px;color:var(--tx3);margin-top:1px">${esc(u.email||'')}</div>
          <span class="lvlbadge" style="background:${lv.color};margin-top:6px;display:inline-block">
            ${lv.icon} ${lvlName(lv)}</span>
        </div>
      </div>
      <div class="statgrid">
        <div class="stat"><b>${p.points}</b><span>${t('points')}</span></div>
        <div class="stat"><b>${p.stamps.length}/${PLACES.length}</b><span>${t('stamps')}</span></div>
        <div class="stat"><b>${(p.coupons||[]).length}</b><span>${EN()?'coupons':'cupones'}</span></div>
      </div>
      <div style="margin-top:12px">
        <div class="between" style="font-size:10.5px;color:var(--tx3);font-weight:700;margin-bottom:5px">
          <span>${t('progress')}</span>
          <span>${nx? `${nx.min - p.points} ${t('points')} → ${lvlName(nx)}` : (EN()?'Max level':'Nivel máximo')}</span>
        </div>
        <div class="progbar"><i style="width:${pct}%"></i></div>
      </div>
    </div>

    <div class="card p">
      <div class="sec-h" style="margin-bottom:9px"><h2>${ico('users',14)} ${t('accounts')}</h2></div>
      <div class="catgrid">
        ${Object.values(S.accounts).map(x=>{
          const px = S.profiles[x.email] || defaultProfile();
          return `<button class="cat" style="--c:${x.color};${x.email===S.user?'border-color:'+x.color:''}"
            onclick="switchUser('${x.email}')">
            <div class="ci" style="width:32px;height:32px;font-size:11px;font-weight:900">${x.avatar}</div>
            <div class="cn">${esc(x.name)}</div>
            <div style="position:relative;z-index:1;font-size:10px;color:var(--tx3);font-weight:700;margin-top:2px">
              ${px.stamps.length} ${t('stamps')} · ${px.points} pts</div>
          </button>`;
        }).join('')}
      </div>
      <div class="note" style="margin-top:10px">${ico('info',13)}<span>${t('localNote')}</span></div>
    </div>

    <div>
      <div class="sec-h"><h2>${ico('award',14)} ${t('passport')}</h2>
        <span class="cnt">${p.stamps.length} / ${PLACES.length}</span></div>
      <div class="stampgrid">
        ${PLACES.map(pl=>{
          const on = p.stamps.includes(pl.id);
          return `<button class="sstamp ${on?'on':'locked'}" onclick="openPlace('${pl.id}')">
            <div class="sc">${on?'🏷️':'🔒'}</div>
            <b>${esc(pl.name)}</b></button>`;
        }).join('')}
      </div>
    </div>

    <div class="card p">
      <div class="sec-h" style="margin-bottom:9px"><h2>${ico('star',14)} ${t('myReviews')} (${myRevs.length})</h2></div>
      <div class="stack">
        ${myRevs.length? myRevs.map(r=>{
          const pl = place(r.placeId);
          return `<div class="rev">
            <div class="rh"><b>${esc(pl?pl.name:'—')}</b><div class="stars">${starsHtml(r.rating)}</div></div>
            <p>${esc(r.text)}</p>
            <div style="font-size:9.5px;color:var(--tx3);text-align:right;margin-top:5px">${r.date}</div>
          </div>`;}).join('')
        : `<div class="empty" style="padding:20px">${t('noReviews')}</div>`}
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      <button class="btn ghost" onclick="openView('credits')">${ico('info',15)} ${t('credits')}</button>
      <button class="btn ghost" onclick="doLogout()">${ico('logout',15)} ${t('signOut')}</button>
    </div>
  </div>`;
}
function starsHtml(n){
  return [1,2,3,4,5].map(i=>`<span class="star ${i<=n?'':'off'}">${ico('star',12)}</span>`).join('');
}

/* ==========================================================================
   FICHA DE LUGAR (modal)
   ========================================================================== */
function openPlace(id){ S.detail = id; renderModal(); }
function closePlace(){ S.detail = null; document.getElementById('modal').innerHTML=''; }

function renderModal(){
  const p = place(S.detail); if(!p) return;
  const c = catOf(p.cat);
  const has = me().stamps.includes(p.id);
  const inPlan = me().plan.includes(p.id);
  const revs = reviewsOf(p.id);
  const avg = revs.length ? (revs.reduce((a,r)=>a+r.rating,0)/revs.length).toFixed(1) : p.rating;

  document.getElementById('modal').innerHTML = `
  <div class="ovl" onclick="if(event.target===this)closePlace()">
    <div class="sheet">
      <button class="closer" onclick="closePlace()">${ico('x',17)}</button>
      <div class="sheethead">
        ${headerArt(p,150)}
        <div class="ht">
          <span class="chip" style="background:${c.color}">${catName(c)}</span>
          <h2>${esc(p.name)}</h2>
        </div>
      </div>
      <div class="pad stack">
        <div class="between">
          <span class="rate" style="background:var(--bg3);color:var(--amber)">${ico('star',13)} ${avg} · ${revs.length} ${revs.length===1? t('reviewOne') : t('reviews').toLowerCase()}</span>
          ${p.cat==='ferias'? `<span class="chip ${isOpen(p)?'ok':'no'}" style="position:static">${isOpen(p)?'● '+t('openToday'):t('closedToday')}</span>`:''}
          <span class="price">${pPrice(p)}</span>
        </div>

        <div class="infogrid">
          <div><div class="k">${t('address')}</div>
            <div class="v">${ico('pin',13)} <span>${esc(p.address)}</span></div></div>
          <div><div class="k">${t('schedule')}</div>
            <div class="v">${ico('clock',13)} <span>${esc(pSched(p))}</span></div></div>
        </div>

        <div class="block">
          <h4>${ico('info',12)} ${t('about')}</h4>
          <p>${esc(p.history)}</p>
        </div>

        ${p.tip? `<div class="tipbox"><h4>${ico('award',12)} ${t('tip')}</h4><p>${esc(p.tip)}</p></div>`:''}

        <div class="block">
          <h4 style="color:var(--blue)">${ico('bus',13)} ${t('buses')}</h4>
          <div class="zoneline" style="margin:0 0 9px">
            <span class="zb" style="--zc:${zoneOf(p.zone).color}">${ico(p.zone==='ciudad'?'foot':'bus',10)} ${EN()?zoneOf(p.zone).nameEn:zoneOf(p.zone).name}</span>
            <span>${p.travel ? t('travelTime')+': '+esc(p.travel) : t('inCity')}</span>
          </div>
          <div class="buses" style="margin:0">
            ${p.bus.map(b=>`<span class="bus" style="font-size:11px;padding:5px 9px">${esc(b)}</span>`).join('')}
          </div>
        </div>

        <button class="btn ${has?'ok':'amber'}" onclick="toggleStamp('${p.id}')">
          ${ico(has?'checkc':'award',16)} ${has? t('stampGot') : t('getStamp')+' (+'+POINTS.visit+' pts)'}</button>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <button class="btn ghost" onclick="togglePlan('${p.id}')">
            ${ico(inPlan?'check':'plus',14)} ${inPlan? t('inPlan') : t('addPlan')}</button>
          <button class="btn ghost" onclick="sharePlace('${p.id}')">${ico('share',14)} ${t('share')}</button>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <button class="btn ghost" onclick="mapsTo(${p.lat},${p.lng},'${esc(p.name)}')">${ico('nav',14)} ${t('howToGet')}</button>
          <button class="btn ghost" onclick="locateOnMap('${p.id}')">${ico('map',14)} ${t('map')}</button>
        </div>
        <label class="btn ghost" style="cursor:pointer">
          ${ico('camera',14)} ${EN()?'Add my photo':'Agregar mi foto'}
          <input type="file" accept="image/*" style="display:none" onchange="addPhoto('${p.id}',this)">
        </label>
        <div class="note">${ico('info',13)}<span>${EN()
          ? 'Official team photo for this place: upload it to the repository as'
          : 'Foto oficial del equipo para este sitio: súbanla al repositorio como'}
          <b style="color:var(--amber);font-family:ui-monospace,monospace">fotos/${p.id}.jpg</b></span></div>

        <div class="block">
          <h4>${ico('star',12)} ${t('reviews')} (${revs.length})</h4>
          <div style="display:flex;flex-direction:column;gap:9px;margin-top:9px">
            <div style="background:var(--bg2);border:1px solid var(--line);border-radius:12px;padding:11px">
              <div class="between" style="margin-bottom:8px">
                <span style="font-size:11px;font-weight:700;color:var(--tx2)">${t('publishAs')} <b style="color:var(--tx)">${meUser().name}</b></span>
                <div class="starpick" id="sp">
                  ${[1,2,3,4,5].map(i=>`<button onclick="setStar(${i})" data-i="${i}"
                    style="color:${i<=5?'var(--amber)':'var(--line)'}">${ico('star',17)}</button>`).join('')}
                </div>
              </div>
              <textarea id="revtx" rows="2" placeholder="${t('writeReview')}"></textarea>
              <button class="btn primary" style="margin-top:8px" onclick="postReview('${p.id}')">
                ${ico('send',14)} ${t('publish')} (+${POINTS.review} pts)</button>
            </div>
            ${revs.length? revs.map(revHtml).join('') : `<div class="empty" style="padding:18px">${t('noReviews')}</div>`}
          </div>
        </div>
      </div>
    </div>
  </div>`;
  _star = 5;
}
let _star = 5;
function setStar(i){
  _star = i;
  document.querySelectorAll('#sp button').forEach(b=>{
    b.style.color = (+b.dataset.i <= i) ? 'var(--amber)' : 'var(--line)';
  });
}
function revHtml(r){
  const u = who(r.userId);
  return `<div class="rev">
    <div class="rh">
      <div class="ra">
        <div class="rav" style="background:${u.color}">${u.avatar}</div>
        <div><b>${esc(u.name)}</b><span class="rr">${EN()?(u.roleEn||''):(u.role||'')}</span></div>
      </div>
      <div class="stars">${starsHtml(r.rating)}</div>
    </div>
    <p>${esc(r.text)}</p>
    <div style="font-size:9.5px;color:var(--tx3);text-align:right;margin-top:5px">${r.date||''}</div>
  </div>`;
}
function postReview(id){
  const el = document.getElementById('revtx');
  const txt = (el.value||'').trim();
  if(!txt){ toast(EN()?'Write something first':'Escribe tu reseña primero'); return; }
  me().reviews.push({ id:'r'+Date.now(), placeId:id, rating:_star, text:txt,
    date:new Date().toISOString().slice(0,10) });
  addPoints(POINTS.review, EN()?'review published':'reseña publicada');
  if(!me().stamps.includes(id)) toggleStamp(id, null, true);
  save(); renderModal();
}
function toggleStamp(id, routeId, silent){
  const p = me();
  const i = p.stamps.indexOf(id);
  if(i>=0){
    p.stamps.splice(i,1);
  } else {
    p.stamps.push(id);
    if(!silent) addPoints(POINTS.visit, EN()?'new stamp':'nuevo sello');
    // bonificación por ruta completa
    ROUTES.forEach(r=>{
      if(r.stops.includes(id) && r.stops.every(s=>p.stamps.includes(s))){
        if(!p.routesDone) p.routesDone = [];
        if(!p.routesDone.includes(r.id)){
          p.routesDone.push(r.id);
          addPoints(POINTS.route, (EN()?'route completed: ':'ruta completada: ')+(EN()?r.titleEn:r.title));
        }
      }
    });
  }
  save();
  if(S.detail) renderModal();
  render();
}
function togglePlan(id){
  const p = me(); const i = p.plan.indexOf(id);
  if(i>=0){ p.plan.splice(i,1); toast(EN()?'Removed from plan':'Quitado de tu plan'); }
  else { p.plan.push(id); toast(EN()?'Added to your plan':'Agregado a tu plan','good'); }
  save();
  if(S.detail) renderModal();
  if(S.view==='tour') render();
}
function sharePlace(id){
  const p = place(id);
  shareText(`📍 ${p.name} — TacnaGo\n\n${p.history}\n\n🏠 ${p.address}\n🕐 ${p.schedule}\n🚍 ${EN()?'Bus':'Combis'}: ${p.bus.join(', ')}\n💰 ${p.price}\n🗺️ https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`);
}
function mapsTo(lat,lng,name){
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,'_blank');
}
function locateOnMap(id){
  const p = place(id);
  closePlace(); S.routeOnMap = null; S.cat = p.cat; go('map');
  setTimeout(()=>{ if(_map) _map.setView([p.lat,p.lng],16); }, 700);
}
function addPhoto(id, input){
  const f = input.files && input.files[0]; if(!f) return;
  const rd = new FileReader();
  rd.onload = ev => {
    const img = new Image();
    img.onload = () => {
      // se intenta la mejor calidad y se va bajando hasta que entre en el almacenamiento
      const pasos = [[1600,.86],[1280,.84],[1024,.80],[800,.74],[640,.66]];
      const previa = me().photos[id];
      for(const [maxW, q] of pasos){
        const escala = Math.min(1, maxW / img.width);
        const cv = document.createElement('canvas');
        cv.width  = Math.max(1, Math.round(img.width  * escala));
        cv.height = Math.max(1, Math.round(img.height * escala));
        const ctx = cv.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, cv.width, cv.height);
        let datos;
        try{ datos = cv.toDataURL('image/jpeg', q); }catch(err){ continue; }
        me().photos[id] = datos;
        if(save()){
          renderModal(); render();
          toast((EN()?'Photo saved':'Foto guardada') + ' · ' + cv.width + 'px', 'good');
          return;
        }
      }
      // no entró ni en la calidad más baja: se deja todo como estaba
      if(previa === undefined) delete me().photos[id]; else me().photos[id] = previa;
      save(); renderModal();
      toast(EN() ? 'No space left on this device for more photos'
                 : 'Este dispositivo ya no tiene espacio para más fotos');
    };
    img.src = ev.target.result;
  };
  rd.readAsDataURL(f);
}

/* ==========================================================================
   VISTAS SECUNDARIAS
   ========================================================================== */
function viewScreen(){
  const back = (title) => `<div class="between pad" style="padding-bottom:0">
      <button class="btn sm ghost" onclick="closeView()">${ico('arrowl',14)} ${t('back')}</button>
      <b style="font-size:13px">${title}</b></div>`;
  switch(S.view){
    case 'fx': return back(t('converter')) + `<div class="pad stack">${fxWidget(true)}</div>`;
    case 'coupons': return back(t('coupons')) + viewCoupons();
    case 'tour': return back(t('tour')) + viewTour();
    case 'lodging': return back(t('lodging')) + viewLodging();
    case 'events': return back(t('events')) + viewEvents();
    case 'border': return back(t('border')) + viewBorder();
    case 'emergency': return back(t('emergency')) + viewEmergency();
    case 'assistant': return back(t('assistant')) + viewAssistant();
    case 'credits': return back(t('credits')) + viewCredits();
  }
  return '';
}

/* ---------- CONVERTIDOR DE MONEDA ---------- */
let FXV = { amount:100, from:'PEN' };
function fxWidget(big){
  const v = parseFloat(FXV.amount)||0;
  const pen = v / FX[FXV.from];
  const out = {
    PEN: pen.toFixed(2),
    CLP: Math.round(pen*FX.CLP).toLocaleString('es-PE'),
    BOB: (pen*FX.BOB).toFixed(2),
    USD: (pen*FX.USD).toFixed(2)
  };
  return `<div class="card p" id="fxbox">
    <div class="sec-h" style="margin-bottom:10px">
      <h2>${ico('swap',14)} ${t('converter')}</h2>
      <span class="cnt">PEN · CLP · BOB · USD</span>
    </div>
    <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:9px">
      <div>
        <div style="font-size:10px;color:var(--tx3);font-weight:700;margin-bottom:4px">${t('amount')}</div>
        <input type="number" inputmode="decimal" style="width:100%" value="${FXV.amount}"
          oninput="FXV.amount=this.value;fxUpdate()">
      </div>
      <div>
        <div style="font-size:10px;color:var(--tx3);font-weight:700;margin-bottom:4px">${t('from')}</div>
        <select style="width:100%" onchange="FXV.from=this.value;fxUpdate()">
          <option value="PEN" ${FXV.from==='PEN'?'selected':''}>PEN · Soles</option>
          <option value="CLP" ${FXV.from==='CLP'?'selected':''}>CLP · Pesos</option>
          <option value="BOB" ${FXV.from==='BOB'?'selected':''}>BOB · Bolivianos</option>
          <option value="USD" ${FXV.from==='USD'?'selected':''}>USD · Dólares</option>
        </select>
      </div>
    </div>
    <div class="fx3" id="fxout" style="grid-template-columns:repeat(4,1fr)">
      <div class="fxc"><span>Soles</span><b style="color:var(--crimson-l)">S/ ${out.PEN}</b></div>
      <div class="fxc"><span>Pesos</span><b style="color:var(--blue)">$${out.CLP}</b></div>
      <div class="fxc"><span>Bs</span><b style="color:var(--amber)">${out.BOB}</b></div>
      <div class="fxc"><span>USD</span><b style="color:var(--green)">$${out.USD}</b></div>
    </div>
    ${big? `<div class="note" style="margin-top:11px">${ico('alert',14)}<span>${t('fxNote')}</span></div>`:''}
  </div>`;
}
function fxUpdate(){
  const v = parseFloat(FXV.amount)||0;
  const pen = v / FX[FXV.from];
  const el = document.getElementById('fxout');
  if(!el) return;
  el.innerHTML = `
    <div class="fxc"><span>Soles</span><b style="color:var(--crimson-l)">S/ ${pen.toFixed(2)}</b></div>
    <div class="fxc"><span>Pesos</span><b style="color:var(--blue)">$${Math.round(pen*FX.CLP).toLocaleString('es-PE')}</b></div>
    <div class="fxc"><span>Bs</span><b style="color:var(--amber)">${(pen*FX.BOB).toFixed(2)}</b></div>
    <div class="fxc"><span>USD</span><b style="color:var(--green)">$${(pen*FX.USD).toFixed(2)}</b></div>`;
}

/* ---------- PUNTOS Y CUPONES ---------- */
function viewCoupons(){
  const p = me();
  const mine = p.coupons || [];
  return `<div class="pad stack">
    <div class="profcard">
      <div class="between">
        <div>
          <div style="font-size:10.5px;color:var(--tx3);font-weight:800;text-transform:uppercase;letter-spacing:.7px">
            ${EN()?'Your balance':'Tu saldo'}</div>
          <div style="font-size:30px;font-weight:900;color:var(--amber);line-height:1.1">${p.points}</div>
          <div style="font-size:11px;color:var(--tx2);font-weight:700">${t('points')}</div>
        </div>
        <div style="font-size:42px">🎟️</div>
      </div>
    </div>

    <div class="card p">
      <div class="sec-h" style="margin-bottom:9px"><h2>${ico('info',14)} ${t('howPoints')}</h2></div>
      <div style="display:flex;flex-direction:column;gap:7px;font-size:12px">
        ${[[POINTS.visit,t('perVisit')],[POINTS.review,t('perReview')],[POINTS.route,t('perRoute')],[POINTS.streak,t('perStreak')]]
          .map(([n,l])=>`<div class="between" style="background:var(--bg);border:1px solid var(--line);
            border-radius:10px;padding:8px 11px">
            <span style="color:var(--tx2)">${l}</span>
            <b style="color:var(--amber)">+${n}</b></div>`).join('')}
      </div>
    </div>

    ${mine.length? `<div>
      <div class="sec-h"><h2>${ico('ticket',14)} ${t('myCoupons')}</h2><span class="cnt">${mine.length}</span></div>
      <div class="stack">${mine.map(mc=>{
        const c = COUPONS.find(x=>x.id===mc.id); const pl = place(c.placeId);
        return `<div class="coupon got">
          <div class="grow">
            <b style="font-size:13px;display:block">${EN()?c.titleEn:c.title}</b>
            <span style="font-size:11px;color:var(--tx2)">${esc(pl.name)}</span>
            <div class="codebox" style="margin-top:8px">${mc.code}</div>
          </div></div>`;}).join('')}</div>
    </div>`:''}

    <div>
      <div class="sec-h"><h2>${ico('ticket',14)} ${EN()?'Available coupons':'Cupones disponibles'}</h2></div>
      <div class="stack">
        ${COUPONS.map(c=>{
          const pl = place(c.placeId);
          const got = mine.some(m=>m.id===c.id);
          const can = p.points >= c.cost;
          return `<div class="coupon ${got?'got':''}">
            <div class="cprice"><b>${c.cost}</b><span>pts</span></div>
            <div class="grow">
              <b style="font-size:12.5px;display:block;line-height:1.2">${EN()?c.titleEn:c.title}</b>
              <span style="font-size:11px;color:var(--tx2)">${esc(pl.name)}</span>
              <div style="font-size:10.5px;color:var(--tx3);margin-top:3px">${EN()?c.descEn:c.desc}</div>
            </div>
            <button class="btn sm ${got?'ok':can?'amber':'ghost'}" ${got||!can?'disabled':''}
              onclick="redeem('${c.id}')">
              ${got? t('redeemed') : can? t('redeem') : t('notEnough')+' '+(c.cost-p.points)}</button>
          </div>`;
        }).join('')}
      </div>
    </div>

    <div class="note">${ico('alert',14)}<span>${EN()
      ? 'Prototype: coupons are a demonstration of the loyalty module. Real agreements with businesses are part of the next project phase.'
      : 'Prototipo: los cupones demuestran el módulo de fidelización. Los convenios reales con los negocios corresponden a la siguiente fase del proyecto.'}</span></div>
  </div>`;
}
function redeem(id){
  const c = COUPONS.find(x=>x.id===id); const p = me();
  if(p.points < c.cost){ toast(EN()?'Not enough points':'Te faltan puntos'); return; }
  p.points -= c.cost;
  if(!p.coupons) p.coupons = [];
  const code = 'TG-' + Math.random().toString(36).slice(2,6).toUpperCase() + '-' + Math.random().toString(36).slice(2,5).toUpperCase();
  p.coupons.push({ id, code, date:new Date().toISOString().slice(0,10) });
  save(); render();
  toast((EN()?'Coupon redeemed: ':'Cupón canjeado: ')+code, 'good');
}

/* ---------- MI RECORRIDO ---------- */
function viewTour(){
  const p = me();
  const list = p.plan.map(place).filter(Boolean);
  if(!list.length){
    return `<div class="pad stack">
      <div class="empty"><div class="eico">🧭</div>${t('tourEmpty')}</div>
      <button class="btn primary" onclick="closeView();go('explore')">${ico('search',15)} ${t('addPlaces')}</button>
    </div>`;
  }
  const total = list.reduce((a,x)=>a+(x.soles||0),0);
  const walk = routeLength(list);
  const active = p.tour && p.tour.active;

  return `<div class="pad stack">
    ${active ? tourCard() : ''}

    <div class="card p">
      <div class="between">
        <div>
          <div class="kpi-k">${t('stopsChosen')}</div>
          <div class="kpi-v">${list.length}</div>
        </div>
        <div style="text-align:center">
          <div class="kpi-k">${t('distance')}</div>
          <div class="kpi-v" style="color:var(--blue)">${walk < 1000 ? Math.round(walk)+' m' : (walk/1000).toFixed(1)+' km'}</div>
        </div>
        <div style="text-align:right">
          <div class="kpi-k">${t('planTotal')}</div>
          <div class="kpi-v" style="color:var(--amber)">S/ ${total}</div>
        </div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      <button class="btn ghost" onclick="optimizePlan()">${ico('target',14)} ${t('optimize')}</button>
      <button class="btn ghost" onclick="showCustomOnMap()">${ico('map',14)} ${t('myRoute')}</button>
    </div>

    ${!active ? `<button class="btn primary" onclick="startTour()">
        ${ico('play',15)} ${t('tourStart')} (${list.length} ${t('stops').toLowerCase()})</button>`
      : `<button class="btn ghost" onclick="endTour()">${ico('x',14)} ${t('tourFinish')}</button>`}

    ${(S.geoState!=='ok' && !active) ? `<button class="btn ghost" onclick="locate()">
        ${ico('target',14)} ${S.geoState==='wait'? t('locating') : t('useLocation')}</button>` : ''}

    <div class="stack">
      ${list.map((x,i)=>tourStopRow(x,i,list.length)).join('')}
    </div>

    <button class="btn ghost" onclick="closeView();go('explore')">${ico('plus',14)} ${t('addPlaces')}</button>
    <button class="btn ghost" onclick="shareTour()">${ico('share',14)} ${t('shareWhatsapp')}</button>
  </div>`;
}

function tourStopRow(x, i, n){
  const p = me();
  const active = p.tour && p.tour.active;
  const cur = active && p.tour.idx === i;
  const past = active && i < p.tour.idx;
  const d = S.geo ? haversine(S.geo, x) : null;
  return `<div class="stop ${cur?'cur':''} ${past?'past':''}">
    <div class="row grow" style="min-width:0">
      <span class="stopn ${cur?'on':''} ${past?'ok':''}">${past? '✓' : i+1}</span>
      <div class="si grow" onclick="openPlace('${x.id}')" style="cursor:pointer">
        <b>${esc(x.name)}</b>
        <span>${ico('bus',9)} ${x.bus.slice(0,3).join(' · ')} · ${pPrice(x)}${d!==null? ' · '+fmtDist(d):''}</span>
      </div>
    </div>
    <div class="ordbtns">
      <button class="minibtn" onclick="movePlan(${i},-1)" ${i===0?'disabled':''}>${ico('up',12)}</button>
      <button class="minibtn" onclick="movePlan(${i},1)" ${i===n-1?'disabled':''}>${ico('down',12)}</button>
      <button class="minibtn" onclick="togglePlan('${x.id}')">${ico('trash',11)}</button>
    </div>
  </div>`;
}

/* Tarjeta grande del destino actual mientras el recorrido está activo */
function tourCard(){
  const p = me();
  const list = p.plan.map(place).filter(Boolean);
  const i = p.tour.idx;
  if(i >= list.length) return '';
  const x = list[i];
  const d = S.geo ? haversine(S.geo, x) : null;
  const open = isOpen(x);
  return `<div class="tourcard">
    <div class="between">
      <span class="tourtag">${ico('flag',12)} ${t('tourStop')} ${i+1} ${t('tourOf')} ${list.length}</span>
      <span class="chip ${open?'ok':'no'}" style="position:static">${open? '● '+t('openToday') : t('closedToday')}</span>
    </div>
    <h3>${esc(x.name)}</h3>
    <p class="tcsub">${esc(pSub(x))} · ${esc(x.address)}</p>
    <div class="tcrow">
      <span>${ico('clock',12)} ${esc(pSched(x))}</span>
      <span>${ico('bus',12)} ${x.bus.slice(0,3).join(', ')}</span>
    </div>
    ${d!==null
      ? `<div class="tcdist">${ico('target',14)} ${fmtDist(d)} ${t('away')}</div>`
      : `<button class="btn sm ghost" style="width:100%;margin-top:9px" onclick="locate()">
           ${ico('target',13)} ${S.geoState==='wait'? t('locating') : t('useLocation')}</button>`}
    <div class="tcdots">
      ${list.map((_,k)=>`<i class="${k<i?'done':k===i?'now':''}"></i>`).join('')}
    </div>
    <button class="btn amber" style="margin-top:11px" onclick="tourArrive()">
      ${ico('checkc',16)} ${t('tourArrived')} (+${POINTS.visit} pts)</button>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
      <button class="btn ghost" onclick="mapsTo(${x.lat},${x.lng},'${esc(x.name)}')">${ico('nav',14)} ${t('howToGet')}</button>
      <button class="btn ghost" onclick="tourSkip()">${ico('chevron',14)} ${t('tourSkip')}</button>
    </div>
  </div>`;
}

/* Barra flotante que recuerda el recorrido en curso desde cualquier pestaña */
function renderTourBar(){
  const el = document.getElementById('tourbar');
  if(!el) return;
  const p = me();
  const list = p.plan.map(place).filter(Boolean);
  const on = p.tour && p.tour.active && p.tour.idx < list.length && S.view !== 'tour';
  const app = document.getElementById('app');
  if(!on){ el.innerHTML = ''; el.classList.remove('show'); if(app) app.classList.remove('tourOn'); return; }
  if(app) app.classList.add('tourOn');
  const x = list[p.tour.idx];
  const d = S.geo ? haversine(S.geo, x) : null;
  el.classList.add('show');
  el.innerHTML = `<button class="tbar" onclick="openView('tour')">
    <span class="tbn">${p.tour.idx+1}/${list.length}</span>
    <span class="grow" style="text-align:left;min-width:0">
      <b>${t('tourNext')}</b>
      <span>${esc(x.name)}${d!==null? ' · '+fmtDist(d):''}</span>
    </span>
    ${ico('chevron',16)}
  </button>`;
}

/* ---------- Acciones del recorrido ---------- */
function movePlan(i, dir){
  const p = me(), j = i + dir;
  if(j < 0 || j >= p.plan.length) return;
  const tmp = p.plan[i]; p.plan[i] = p.plan[j]; p.plan[j] = tmp;
  save(); render();
}

function routeLength(list){
  let m = 0;
  for(let i=1;i<list.length;i++) m += haversine(list[i-1], list[i]);
  return m;
}

/* Ordena las paradas por cercanía empezando en la primera que el usuario eligió */
function optimizePlan(){
  const p = me();
  const pts = p.plan.map(place).filter(Boolean);
  if(pts.length < 3){ toast(EN()?'Add at least three stops':'Agrega al menos tres paradas'); return; }
  const before = routeLength(pts);
  const rest = pts.slice();
  const order = [ S.geo ? rest.splice(nearestIdx(S.geo, rest),1)[0] : rest.shift() ];
  while(rest.length){
    const k = nearestIdx(order[order.length-1], rest);
    order.push(rest.splice(k,1)[0]);
  }
  p.plan = order.map(x=>x.id);
  const after = routeLength(order);
  save(); render();
  const saved = Math.max(0, before - after);
  toast(EN()
    ? `Reordered${saved>50? ' · '+fmtDist(saved)+' shorter':''}`
    : `Reordenado${saved>50? ' · '+fmtDist(saved)+' menos':''}`, 'good');
}
function nearestIdx(from, arr){
  let best = 0, bd = Infinity;
  arr.forEach((x,i)=>{ const d = haversine(from, x); if(d < bd){ bd = d; best = i; } });
  return best;
}

function startTour(){
  const p = me();
  if(!p.plan.length) return;
  p.tour = { active:true, idx:0 };
  save(); render();
  toast(EN()?'Trail started. Head to stop 1.':'Recorrido iniciado. Ve a la parada 1.', 'good');
}

function tourArrive(){
  const p = me();
  const list = p.plan.map(place).filter(Boolean);
  const x = list[p.tour.idx];
  if(!x) return;
  if(!p.stamps.includes(x.id)) toggleStamp(x.id, null, false);
  advanceTour();
}
function tourSkip(){ advanceTour(); }

function advanceTour(){
  const p = me();
  const list = p.plan.map(place).filter(Boolean);
  p.tour.idx++;
  if(p.tour.idx >= list.length){
    p.tour.active = false;
    p.tour.idx = 0;
    p.points += POINTS.route;
    save(); render();
    toast(`🏁 ${t('tourDone')} +${POINTS.route} ${t('points')}`, 'pts');
    return;
  }
  save(); render();
  const next = list[p.tour.idx];
  toast(`${t('tourNext')}: ${next.name}`, 'good');
}

function endTour(){
  const p = me();
  p.tour = { active:false, idx:0 };
  save(); render();
}

function showCustomOnMap(){
  S.routeOnMap = 'custom';
  closeView(); go('map');
}

function shareTour(){
  const list = me().plan.map(place).filter(Boolean);
  const total = list.reduce((a,x)=>a+(x.soles||0),0);
  const km = (routeLength(list)/1000).toFixed(1);
  shareText(`🧭 ${EN()?'My trail in Tacna':'Mi recorrido por Tacna'} — TacnaGo\n\n`+
    list.map((x,i)=>`${i+1}. ${x.name}\n   🚍 ${x.bus.slice(0,2).join(', ')} · 💰 ${x.price}`).join('\n')+
    `\n\n📏 ${km} km · 💰 ${EN()?'approx.':'aprox.'} S/ ${total}\n\n${EN()?'Made with TacnaGo 2026':'Hecho con TacnaGo 2026'}`);
}

/* ---------- HOSPEDAJE ---------- */
function viewLodging(){
  return `<div class="pad stack">
    <div class="card p">
      <h3 style="margin:0;font-size:15px;font-weight:900">${ico('bed',17)} ${t('lodging')}</h3>
      <p style="margin:6px 0 0;font-size:12px;color:var(--tx2);line-height:1.55">${t('lodgingNote')}</p>
    </div>
    <div>
      <div class="sec-h"><h2>${ico('search',14)} ${t('searchIn')}</h2></div>
      <div class="linkbtns">
        ${LODGING_SEARCH.map(l=>`<a class="lbtn" style="background:${l.color}" href="${l.url}" target="_blank" rel="noopener">
          ${ico('globe',14)} ${l.name}</a>`).join('')}
      </div>
    </div>
    <div>
      <div class="sec-h"><h2>${ico('pin',14)} ${t('zonesTitle')}</h2></div>
      <div class="stack">
        ${LODGING_ZONES.map(z=>`<div class="zone">
          <div class="between">
            <b style="font-size:13.5px;font-weight:800">${EN()?z.zoneEn:z.zone}</b>
            <span class="zr">${z.range}</span>
          </div>
          <p style="margin:6px 0 0;font-size:12px;color:var(--tx2);line-height:1.5">${EN()?z.descEn:z.desc}</p>
          <div class="buses" style="margin-top:9px">
            ${ico('bus',13)}${z.bus.map(b=>`<span class="bus">${esc(b)}</span>`).join('')}
          </div>
          <button class="btn sm ghost" style="margin-top:10px;width:100%"
            onclick="window.open('https://www.google.com/maps/search/hospedaje+${encodeURIComponent(z.zone)}+Tacna','_blank')">
            ${ico('map',13)} ${EN()?'See this area on the map':'Ver esta zona en el mapa'}</button>
        </div>`).join('')}
      </div>
    </div>
    <div class="note">${ico('info',14)}<span>${EN()
      ?'Price ranges are indicative and compiled by the project team. Confirm availability and rates directly with each lodging.'
      :'Los rangos de precio son referenciales y fueron recopilados por el equipo. Confirma disponibilidad y tarifas directamente con cada hospedaje.'}</span></div>
  </div>`;
}

/* ---------- EVENTOS ---------- */
function viewEvents(){
  const m = new Date().getMonth()+1;
  const MN = EN()? ['','JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
                 : ['','ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SET','OCT','NOV','DIC'];
  const sorted = [...EVENTS].sort((a,b)=>{
    const da = (a.month - m + 12) % 12, db = (b.month - m + 12) % 12;
    return da - db;
  });
  return `<div class="pad stack">
    <div class="card p">
      <h3 style="margin:0;font-size:15px;font-weight:900">${ico('cal',17)} ${t('events')}</h3>
      <p style="margin:6px 0 0;font-size:12px;color:var(--tx2)">${EN()
        ?'The dates that give you a reason to visit Tacna, ordered from the current month.'
        :'Las fechas que dan una razón para visitar Tacna, ordenadas desde el mes actual.'}</p>
    </div>
    ${sorted.map(e=>`<div class="evt">
      <div class="ed"><b>${MN[e.month]}</b><span>${e.month===m?(EN()?'now':'ahora'):''}</span></div>
      <div class="grow">
        <h4>${EN()?e.nameEn:e.name}</h4>
        <div style="font-size:10.5px;color:var(--amber);font-weight:800;margin-bottom:4px">${e.date}</div>
        <p>${EN()?e.descEn:e.desc}</p>
      </div>
    </div>`).join('')}
    <div class="note">${ico('alert',14)}<span>${EN()
      ?'Dates may vary each year. Confirm with the Regional Tourism Office before travelling.'
      :'Las fechas pueden variar cada año. Confirma con la Dirección Regional de Comercio Exterior y Turismo antes de viajar.'}</span></div>
  </div>`;
}

/* ---------- FRONTERA ---------- */
function viewBorder(){
  return `<div class="pad stack">
    <div class="card p">
      <h3 style="margin:0;font-size:15px;font-weight:900">${ico('globe',17)} ${t('border')}</h3>
      <p style="margin:6px 0 0;font-size:12px;color:var(--tx2)">${EN()
        ?'Tacna is Peru\u2019s main land border city. This is what a first-time visitor needs to know.'
        :'Tacna es la principal ciudad fronteriza terrestre del Perú. Esto es lo que necesita saber quien cruza por primera vez.'}</p>
    </div>
    ${BORDER_INFO.map(b=>`<div class="block">
      <h4>${ico(b.icon,13)} ${EN()?b.titleEn:b.title}</h4>
      <p>${EN()?b.textEn:b.text}</p>
    </div>`).join('')}
    <div class="note">${ico('alert',14)}<span>${t('borderNote')}</span></div>
  </div>`;
}

/* ---------- EMERGENCIAS ---------- */
function viewEmergency(){
  return `<div class="pad stack">
    <div class="card p" style="border-color:rgba(194,24,43,.5)">
      <h3 style="margin:0;font-size:15px;font-weight:900;color:var(--crimson-l)">${ico('phone',17)} ${t('emergency')}</h3>
      <p style="margin:6px 0 0;font-size:12px;color:var(--tx2)">${t('emergencyNote')}</p>
    </div>
    ${EMERGENCY.map(e=>`<a class="emg" href="tel:${e.n.replace(/[^0-9]/g,'')}">
      <span class="en">${e.n}</span>
      <div class="grow"><b>${EN()?e.nameEn:e.name}</b><span>${EN()?e.descEn:e.desc}</span></div>
      ${ico('phone',16)}
    </a>`).join('')}
    <div class="block">
      <h4>${ico('info',12)} ${EN()?'Safety tips in Tacna':'Recomendaciones de seguridad en Tacna'}</h4>
      <p>${EN()
        ?'Use formal taxis or apps, keep your documents and phone out of sight in crowded markets, carry small bills at the fairs, and agree on a meeting point with your group before entering a large market.'
        :'Usa taxis formales o aplicaciones, mantén documentos y celular fuera de la vista en los mercadillos concurridos, lleva billetes pequeños a las ferias y acuerda un punto de encuentro con tu grupo antes de entrar a un mercado grande.'}</p>
    </div>
  </div>`;
}

/* ==========================================================================
   ASISTENTE VICU
   ========================================================================== */
function viewAssistant(){
  if(!S.chat.length) S.chat = [{who:'bot', text:t('assistantHi')}];
  const quick = EN()
    ? ['What fair is open today?','Where can I eat cheap?','What bus goes to Calientes?','Plan for one day','Free places','Best coffee']
    : ['¿Qué feria abre hoy?','¿Dónde como barato?','¿Qué bus va a Calientes?','Plan de un día','Lugares gratis','El mejor café'];
  return `<div>
    <div class="pad" style="padding-bottom:0">
      <div class="card p row">
        <div class="vicu">🦙</div>
        <div class="grow">
          <b style="font-size:14px">Vicu</b>
          <div style="font-size:11px;color:var(--tx2)">${EN()?'Your local guide · answers only with TacnaGo data'
            :'Tu guía local · responde solo con datos de TacnaGo'}</div>
        </div>
      </div>
    </div>
    <div class="chat" id="chat">
      ${S.chat.map(m=>`<div class="msg ${m.who==='bot'?'bot':'me'}">${m.text}</div>`).join('')}
    </div>
    <div class="qbtns">
      ${quick.map(q=>`<button class="qb" onclick="ask('${q.replace(/'/g,"\\'")}')">${q}</button>`).join('')}
    </div>
    <div class="chatbar">
      <input id="cin" type="text" placeholder="${t('typeQuestion')}"
        onkeydown="if(event.key==='Enter'){ask(this.value);this.value=''}">
      <button onclick="const i=document.getElementById('cin');ask(i.value);i.value=''">${ico('send',17)}</button>
    </div>
  </div>`;
}
function ask(q){
  q = (q||'').trim(); if(!q) return;
  S.chat.push({who:'me', text:esc(q)});
  S.chat.push({who:'bot', text:answer(q)});
  render();
  setTimeout(()=>{ const c=document.getElementById('chat'); if(c) c.scrollIntoView({block:'end',behavior:'smooth'}); },60);
}
function pLink(p){ return `<b>${esc(p.name)}</b>`; }
function listOf(arr, extra){
  return arr.slice(0,5).map(p=>`• ${pLink(p)}${extra?' — '+extra(p):''}`).join('<br>');
}
function answer(qRaw){
  const q = qRaw.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const has = (...w)=> w.some(x=>q.includes(x));
  // coincidencia por palabra completa: evita que "grandes" active "andes"
  const word = (...w)=> w.some(x=> new RegExp('(^|[^a-z0-9])' + x + '([^a-z0-9]|$)').test(q));
  const DAYS = EN()? ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
                   : ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];

  // feria abierta hoy
  if(has('feria','cachina','fair','market') && has('hoy','today','abre','open')){
    const f = PLACES.filter(p=>p.cat==='ferias' && isOpen(p));
    if(!f.length) return EN()?`No fairs are open today (${DAYS[today()]}). The Agronómica market opens every day.`
      :`Hoy (${DAYS[today()]}) no abre ninguna feria grande. La Feria La Agronómica abre todos los días.`;
    return (EN()?`Today (${DAYS[today()]}) these fairs are open:<br>`:`Hoy (${DAYS[today()]}) abren estas ferias:<br>`)
      + listOf(f, p=>`${pSched(p)} · 🚍 ${p.bus.slice(0,2).join(', ')}`);
  }
  // transporte a un lugar
  if(has('bus','combi','ruta','linea','línea','llego','llegar','get to','how do i get')){
    const found = PLACES.filter(p=> q.includes(p.name.toLowerCase().split(' ')[0]) ||
      p.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').split(' ').some(w=>w.length>4 && q.includes(w)));
    if(found.length) return found.slice(0,3).map(p=>
      (EN()?`To reach <b>${esc(p.name)}</b> take: 🚍 ${p.bus.join(', ')}.<br>📍 ${esc(p.address)}`
          :`Para llegar a <b>${esc(p.name)}</b> toma: 🚍 ${p.bus.join(', ')}.<br>📍 ${esc(p.address)}`)).join('<br><br>');
    return EN()?'Tell me the place and I will give you the bus lines. For example: "what bus goes to the Cathedral?"'
              :'Dime el lugar y te doy las líneas de combi. Por ejemplo: "¿qué bus va a la Catedral?"';
  }
  // barato: si pregunta por comida, solo restaurantes y cafeterías
  if(has('barato','economico','económico','cheap','poco presupuesto','budget')){
    const food = has('comer','como','comida','eat','food','almorzar','almuerzo','cenar','desayun');
    const pool = food
      ? PLACES.filter(p=>(p.cat==='restaurantes'||p.cat==='cafeterias') && p.soles>0)
      : PLACES.filter(p=>p.soles>0 && p.soles<=30);
    const cheap = [...pool].sort((a,b)=>a.soles-b.soles);
    return (food
        ? (EN()?'The cheapest places to eat in the database:<br>':'Los lugares más económicos para comer:<br>')
        : (EN()?'The cheapest options in our database:<br>':'Las opciones más económicas de la base de datos:<br>'))
      + listOf(cheap, p=>`${pPrice(p)} · 🚍 ${p.bus[0]}`);
  }
  // gratis
  if(has('gratis','free','sin pagar','no pagar')){
    const free = PLACES.filter(p=>p.soles===0);
    return (EN()?'Free places in Tacna:<br>':'Lugares gratuitos en Tacna:<br>') + listOf(free, p=>pSched(p));
  }
  // comer / restaurante
  if(has('comer','comida','restaurante','eat','food','almuerzo','cenar','picante')){
    const r = [...PLACES].filter(p=>p.cat==='restaurantes').sort((a,b)=>b.rating-a.rating);
    return (EN()?'Best rated restaurants:<br>':'Los restaurantes mejor calificados:<br>')
      + listOf(r, p=>`${p.sub} · ${pPrice(p)} · ⭐ ${p.rating}`);
  }
  // café
  if(has('cafe','café','coffee','desayun','breakfast')){
    const c = [...PLACES].filter(p=>p.cat==='cafeterias').sort((a,b)=>b.rating-a.rating);
    return (EN()?'Coffee shops with the best ratings:<br>':'Las cafeterías mejor calificadas:<br>')
      + listOf(c, p=>`${pSched(p)} · ⭐ ${p.rating}`);
  }
  // compras
  if(has('comprar','compras','shopping','mercadillo','ropa','tecnologia','tecnología')){
    const s = PLACES.filter(p=>p.cat==='comerciales');
    return (EN()?'Where to shop in Tacna:<br>':'Dónde comprar en Tacna:<br>')
      + listOf(s, p=>`${pSub(p)} · 🚍 ${p.bus.slice(0,2).join(', ')}`);
  }
  // plan de días
  if(has('plan','itinerario','itinerary','dia','día','day','que hago','qué hago','what to do')){
    const n = q.includes('2')||q.includes('dos')||q.includes('two') ? 2 : 1;
    if(n===1){
      const r = ROUTES.find(x=>x.id==='r6');
      return (EN()?`For one day I recommend the <b>${r.titleEn}</b> (${r.duration}, ${r.budget}):<br>`
                 :`Para un día te recomiendo la <b>${r.title}</b> (${r.duration}, ${r.budget}):<br>`)
        + r.stops.map((s,i)=>`${i+1}. ${place(s).name}`).join('<br>')
        + (EN()?`<br>🚍 ${r.transportEn}`:`<br>🚍 ${r.transport}`);
    }
    const a = ROUTES.find(x=>x.id==='r1'), b = ROUTES.find(x=>x.id==='r5');
    return (EN()?`Two days in Tacna:<br><br><b>Day 1 — ${a.titleEn}</b><br>`:`Dos días en Tacna:<br><br><b>Día 1 — ${a.title}</b><br>`)
      + a.stops.map(s=>'• '+place(s).name).join('<br>')
      + (EN()?`<br><br><b>Day 2 — ${b.titleEn}</b><br>`:`<br><br><b>Día 2 — ${b.title}</b><br>`)
      + b.stops.map(s=>'• '+place(s).name).join('<br>');
  }
  // historia / museos
  if(has('museo','museum','historia','history','monumento','cultural')){
    const a = PLACES.filter(p=>p.cat==='atractivos');
    return (EN()?'Attractions and history in Tacna:<br>':'Atractivos e historia de Tacna:<br>')
      + listOf(a, p=>`${pPrice(p)} · ${pSched(p)}`);
  }
  // frontera
  if(has('frontera','chile','arica','border','bolivia')){
    return (EN()?'Tacna connects with Arica (Chile) through the Santa Rosa – Chacalluta integrated border control. Shared taxis and buses leave all day from the International Terminal and the trip usually takes 1.5 to 2.5 hours. Check the <b>Border information</b> section in the app for documents and customs.'
               :'Tacna se conecta con Arica (Chile) por el control integrado Santa Rosa – Chacalluta. Del Terminal Internacional salen colectivos y buses todo el día y el viaje suele tomar entre 1.5 y 2.5 horas. Revisa la sección <b>Información de frontera</b> de la app para documentos y aduana.');
  }
  // moneda
  if(has('moneda','cambio','peso','boliviano','sol','dolar','dólar','currency','exchange')){
    return (EN()?'Use the <b>Currency converter</b> on the home screen: it converts soles, Chilean pesos, bolivianos and dollars. Rates are indicative — confirm at an exchange office.'
               :'Usa el <b>Convertidor de moneda</b> en la pantalla de inicio: convierte soles, pesos chilenos, bolivianos y dólares. Los tipos de cambio son referenciales, confírmalos en una casa de cambio.');
  }
  // emergencia
  if(has('emergencia','policia','policía','emergency','police','hospital','robo')){
    return (EN()?'Emergency numbers in Peru: Police <b>105</b>, Fire <b>116</b>, Medical <b>106</b>, Tourist info <b>1817</b>. You can call them from the Emergency section.'
               :'Números de emergencia en Perú: Policía <b>105</b>, Bomberos <b>116</b>, Médica <b>106</b>, Información turística <b>1817</b>. Puedes llamarlos desde la sección Emergencias.');
  }
  // puntos
  if(has('punto','cupon','cupón','points','coupon','sello','stamp','premio')){
    return (EN()?`You earn ${POINTS.visit} points per stamp, ${POINTS.review} per review and ${POINTS.route} for completing a whole route. Exchange them for coupons in the Points & coupons section. You have <b>${me().points}</b> points.`
               :`Ganas ${POINTS.visit} puntos por sello, ${POINTS.review} por reseña y ${POINTS.route} por completar una ruta entera. Cámbialos por cupones en la sección Puntos y cupones. Tienes <b>${me().points}</b> puntos.`);
  }
  // naturaleza, playa y costa
  if(has('playa','beach','humedal','laguna','catarata','naturaleza','nature','boca del rio','costa','litoral') || word('ite')){
    const n = PLACES.filter(p=>p.cat==='naturaleza');
    return (EN()?'Nature and coast around Tacna:<br>':'Naturaleza y costa de Tacna:<br>')
      + listOf(n, p=>`${p.travel || t('inCity')} · 🚍 ${p.bus[0]}`);
  }
  // provincias y pueblos andinos
  if(has('tarata','ticaco','ilabaya','provincia','pueblo','andeneria','andenería','candarave','aricota') || word('andes','andino')){
    const pr = PLACES.filter(p=>p.cat==='provincias' || p.zone==='andes');
    return (EN()?'Andean towns and provinces:<br>':'Provincias y pueblos andinos:<br>')
      + listOf(pr, p=>`${p.travel || ''} · 🚍 ${p.bus[0]}`);
  }
  // llegada: terminal y aeropuerto
  if(has('aeropuerto','airport','terminal','vuelo','flight','llegar a tacna','arrive')){
    const sv = PLACES.filter(p=>p.cat==='servicios');
    return (EN()?'Arrival points in Tacna:<br>':'Puntos de llegada a Tacna:<br>')
      + listOf(sv, p=>`${esc(p.address)} · 🚍 ${p.bus.slice(0,2).join(', ')}`);
  }

  // búsqueda genérica
  const hits = PLACES.filter(p=>{
    const n = (p.name+' '+p.sub+' '+p.history+' '+p.address).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    return q.split(/\s+/).filter(w=>w.length>3).some(w=>n.includes(w));
  });
  if(hits.length) return (EN()?'I found this in the TacnaGo database:<br>':'Encontré esto en la base de TacnaGo:<br>')
    + listOf(hits, p=>`${pSub(p)} · 🚍 ${p.bus.slice(0,2).join(', ')}`);

  return EN()
    ? 'I only answer with information stored in TacnaGo, so I will not invent places. Try asking about fairs open today, bus lines, where to eat, free places, or a one-day plan.'
    : 'Solo respondo con la información guardada en TacnaGo, así que no invento lugares. Prueba preguntándome por las ferias que abren hoy, líneas de combi, dónde comer, lugares gratis o un plan de un día.';
}

/* ---------- CRÉDITOS ---------- */
function viewCredits(){
  return `<div class="pad stack">
    <div class="profcard" style="text-align:center">
      <div style="width:58px;height:58px;margin:0 auto;border-radius:18px;
        background:linear-gradient(145deg,var(--crimson-l),var(--crimson-d));display:grid;place-items:center;
        border:1px solid rgba(255,255,255,.25)">${ico('compass',28)}</div>
      <h3 style="margin:11px 0 2px;font-size:19px;font-weight:900">TacnaGo 2026</h3>
      <p style="margin:0;font-size:12px;color:var(--tx2)">${EN()?'Mobile app to promote tourism in Tacna'
        :'Aplicación móvil para promocionar el turismo en Tacna'}</p>
    </div>
    <div class="card p">
      <h4 style="margin:0 0 9px;font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.7px;color:var(--tx3)">
        ${EN()?'Team':'Equipo'}</h4>
      <div class="stack">
        ${USERS.map(u=>`<div class="row">
          <div class="rav" style="background:${u.color};width:34px;height:34px;border-radius:11px;font-size:12px">${u.avatar}</div>
          <div class="grow"><b style="font-size:12.5px;display:block">${esc(u.fullName)}</b>
            <span style="font-size:10.5px;color:var(--tx2)">${EN()?u.roleEn:u.role}</span></div>
        </div>`).join('')}
      </div>
    </div>
    <div class="card p" style="font-size:12px;color:var(--tx2);line-height:1.7">
      <b style="color:var(--tx);display:block;margin-bottom:5px">IESTP "Francisco de Paula Gonzales Vigil" — Tacna</b>
      ${EN()?'Programme':'Programa'}: Arquitectura de Plataformas y Servicios de TI (APSTI)<br>
      ${EN()?'Course':'Unidad didáctica'}: Innovación Tecnológica · IV ${EN()?'semester':'semestre'}<br>
      ${EN()?'Advisor':'Docente asesor'}: Freddy Santos Juarez Condori<br>
      ${EN()?'Year':'Año'}: 2026 · Tacna, Perú
    </div>
    <div class="card p" style="font-size:11.5px;color:var(--tx2);line-height:1.7">
      <b style="color:var(--tx);display:block;margin-bottom:5px">${EN()?'Technology':'Tecnología'}</b>
      ${EN()?'Progressive Web App (installable), OpenStreetMap + Leaflet, geolocation, local storage on the device, offline mode with service worker. Accounts are stored on the device itself; a server such as Firebase Authentication would be the next step for accounts shared across phones.'
            :'Aplicación web progresiva (instalable), OpenStreetMap + Leaflet, geolocalización, almacenamiento local en el dispositivo y modo sin conexión con service worker. Las cuentas se guardan en el propio dispositivo; un servidor como Firebase Authentication sería el siguiente paso para que la misma cuenta funcione en varios celulares.'}
    </div>
    <div class="note">${ico('alert',14)}<span>${EN()
      ?'Prototype for academic purposes. Addresses, hours, bus lines and prices were compiled by the team and must be verified before public release.'
      :'Prototipo con fines académicos. Direcciones, horarios, líneas de transporte y precios fueron recopilados por el equipo y deben verificarse antes de una publicación pública.'}</span></div>
    <button class="btn ghost" onclick="resetAll()">${ico('refresh',14)} ${EN()?'Reset this profile data':'Reiniciar los datos de este perfil'}</button>
  </div>`;
}
function resetAll(){
  if(!confirm(EN()?'Reset stamps, points, reviews and plan for this profile?'
                  :'¿Reiniciar sellos, puntos, reseñas y plan de este perfil?')) return;
  S.profiles[S.user] = defaultProfile();
  save(); render(); toast(EN()?'Profile reset':'Perfil reiniciado','good');
}

/* ==========================================================================
   INICIO DE LA APLICACIÓN
   ========================================================================== */
function dailyStreak(){
  if(!S.user) return;
  const d = new Date().toISOString().slice(0,10);
  const p = me();
  if(p.lastDay !== d){
    p.lastDay = d;
    p.points += POINTS.streak;
    save();
    setTimeout(()=>toast(`+${POINTS.streak} ${t('points')} · ${EN()?'daily visit':'visita del día'}`,'pts'), 900);
  }
}

/* --- instalación PWA --- */
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', e=>{
  e.preventDefault(); deferredPrompt = e;
  const b = document.getElementById('install');
  if(b && !localStorage.getItem('tg_install_dismiss')) b.classList.add('show');
});
function doInstall(){
  if(!deferredPrompt){ document.getElementById('install').classList.remove('show'); return; }
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(()=>{ deferredPrompt=null; document.getElementById('install').classList.remove('show'); });
}
function dismissInstall(){
  localStorage.setItem('tg_install_dismiss','1');
  document.getElementById('install').classList.remove('show');
}

/* --- conexión --- */
function netState(){
  const b = document.getElementById('offbar');
  if(!b) return;
  b.classList.toggle('show', !navigator.onLine);
  b.textContent = t('offline');
}
window.addEventListener('online', netState);
window.addEventListener('offline', netState);

/* --- arranque --- */
function boot(){
  load();
  document.getElementById('install').innerHTML = `
    <div style="font-size:26px">📲</div>
    <div class="grow"><b>${t('installTitle')}</b><p>${t('installText')}</p></div>
    <div style="display:flex;flex-direction:column;gap:5px">
      <button class="btn sm amber" onclick="doInstall()">${t('install')}</button>
      <button class="btn sm ghost" style="background:rgba(0,0,0,.25);border-color:rgba(255,255,255,.2);color:#fff"
        onclick="dismissInstall()">${t('later')}</button>
    </div>`;
  render();
  if(S.user) dailyStreak();
  netState();
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  }
}
document.addEventListener('DOMContentLoaded', boot);
