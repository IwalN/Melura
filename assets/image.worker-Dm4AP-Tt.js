function gt(t){const e=t/255;return e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92}function Ut(t){const e=gt(t[0]),n=gt(t[1]),r=gt(t[2]);return[e*.4124564+n*.3575761+r*.1804375,e*.2126729+n*.7151522+r*.072175,e*.0193339+n*.119192+r*.9503041]}function Lt(t){const e=[.95047,1,1.08883],n=a=>a>.008856?Math.cbrt(a):7.787*a+16/116,r=n(t[0]/e[0]),o=n(t[1]/e[1]),s=n(t[2]/e[2]);return[116*o-16,500*(r-o),200*(o-s)]}function at(t){return Lt(Ut(t))}function wt(t,e){const[n,r,o]=t,[s,a,i]=e,c=1,f=1,p=1,d=Math.sqrt(r*r+o*o),l=Math.sqrt(a*a+i*i),x=(d+l)/2,u=Math.pow(x,7),_=.5*(1-Math.sqrt(u/(u+Math.pow(25,7)))),m=r*(1+_),b=a*(1+_),w=Math.sqrt(m*m+o*o),h=Math.sqrt(b*b+i*i);let g=Math.atan2(o,m)*(180/Math.PI);g<0&&(g+=360);let y=Math.atan2(i,b)*(180/Math.PI);y<0&&(y+=360);const P=s-n,B=h-w;let C;w*h===0?C=0:Math.abs(y-g)<=180?C=y-g:y-g>180?C=y-g-360:C=y-g+360;const U=2*Math.sqrt(w*h)*Math.sin(C*Math.PI/360),v=(n+s)/2,k=(w+h)/2;let S;w*h===0?S=g+y:Math.abs(g-y)<=180?S=(g+y)/2:g+y<360?S=(g+y+360)/2:S=(g+y-360)/2;const N=1-.17*Math.cos((S-30)*Math.PI/180)+.24*Math.cos(2*S*Math.PI/180)+.32*Math.cos((3*S+6)*Math.PI/180)-.2*Math.cos((4*S-63)*Math.PI/180),F=1+.015*(v-50)*(v-50)/Math.sqrt(20+(v-50)*(v-50)),T=1+.045*k,L=1+.015*k*N,E=Math.pow(k,7),A=2*Math.sqrt(E/(E+Math.pow(25,7))),G=30*Math.exp(-Math.pow((S-275)/25,2)),I=-Math.sin(2*G*Math.PI/180)*A,z=Math.pow(P/(c*F),2)+Math.pow(B/(f*T),2)+Math.pow(U/(p*L),2)+I*(B/(f*T))*(U/(p*L));return z>0?Math.sqrt(z):0}function lt(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,o=Math.max(e,n,r),s=Math.min(e,n,r);let a=0,i=0;const c=(o+s)/2;if(o!==s){const f=o-s;switch(i=c>.5?f/(2-o-s):f/(o+s),o){case e:a=((n-r)/f+(n<r?6:0))/6;break;case n:a=((r-e)/f+2)/6;break;case r:a=((e-n)/f+4)/6;break}}return[a*360,i,c]}function et(t,e,n){const r=t/360;let o,s,a;if(e<1e-10)o=s=a=n;else{const i=(p,d,l)=>(l<0&&(l+=1),l>1&&(l-=1),l<.16666666666666666?p+(d-p)*6*l:l<.5?d:l<.6666666666666666?p+(d-p)*(.6666666666666666-l)*6:p),c=n<.5?n*(1+e):n+e-n*e,f=2*n-c;o=i(f,c,r+1/3),s=i(f,c,r),a=i(f,c,r-1/3)}return[Math.round(o*255),Math.round(s*255),Math.round(a*255)]}function nt(t){return .299*t[0]+.587*t[1]+.114*t[2]}function Tt(t){return(t%360+360)%360}function Y(t){return Math.max(0,Math.min(1,t))}function O(t,e,n){return t+(e-t)*n}function St(t,e,n){return[Math.round(O(t[0],e[0],n)),Math.round(O(t[1],e[1],n)),Math.round(O(t[2],e[2],n))]}function dt(t,e,n){let r=e-t;return r>180&&(r-=360),r<-180&&(r+=360),Tt(t+r*n)}function bt(t){const e=nt(t),n=220,r=.35,o=35,s=.55,a=.15,i=Y(e/255);let c,f;if(i<.3){const d=i/.3;c=dt(n,o,d*.3),f=O(r,a,d)}else if(i>.7){const d=(i-.7)/.3;c=dt(o*.3,o,d),f=O(a,s,d)}else{const d=(i-.3)/.4;c=dt(n*.1,o*.2,d),f=a}const p=O(.15,.85,i);return et(c,f,p)}function It(t){const[e,n]=lt(t),r=nt(t),s=((e+120)%360+360)%360,a=O(.85,1,n),i=Y(r/255),c=i<.5?O(.1,.5,i*2)*.8:O(.5,.9,(i-.5)*2)*1.15;return et(s,a,Y(c))}function zt(t){const[e,n,r]=lt(t),o=[-25,-12,0,12,25],s=Math.min(4,Math.floor(e%360/72)),a=o[s],i=((e+a)%360+360)%360,c=O(.55,.9,n),f=Math.max(.25,r)*1.12;return et(i,c,Y(f))}function Et(t){const[,e]=lt(t),n=nt(t),r=Y(n/255);if(e>.5&&n>120){const c=[180,300,270],f=Math.min(2,Math.floor(r*3));return et(c[f],.95,.65)}const s=210,a=O(.08,.35,r),i=O(.08,.45,r);return et(s,a,i)}function $t(t){const[e,n,r]=lt(t),o=nt(t),s=Y(o/255),a=35,i=O(.75,.55,s),c=dt(e,a,i),f=r*.15+n*(1-i)*.35,p=r*.88;return et(c,Y(f),Y(p))}function Gt(t){const e=nt(t),n=Y(e/255),r=[[255,0,100],[0,200,255],[255,200,0],[150,0,255],[0,255,150],[255,100,0]],o=n*(r.length-1),s=Math.floor(o),a=o-s,i=Math.min(r.length-2,Math.max(0,s));return St(r[i],r[i+1],a)}function Dt(t,e){if(e.length===0)return t;const n=at(t);let r=e[0],o=1/0;for(const s of e){const a=at(s),i=wt(n,a);i<o&&(o=i,r=s)}return r}const Ot={2:[[30,41,59],[248,250,252]],3:[[15,23,42],[148,163,184],[248,250,252]],4:[[15,23,42],[71,85,105],[203,213,225],[248,250,252]],5:[[15,23,42],[51,65,85],[148,163,184],[226,232,240],[248,250,252]]};function Rt(t,e,n=128){const r=nt(t),o=Math.max(2,Math.min(5,e)),s=Ot[o];if(o===2)return r>n?s[1]:s[0];const a=Math.max(0,Math.min(255,r+(128-n))),i=256/o,c=Math.min(o-1,Math.floor(a/i));return s[c]}function At(t,e,n){const r=Y(n/100);return St(t,e,r)}function Ft(t){const e=[],n={};for(const r of Object.keys(t)){const o=Number(r),s=t[o],a=at(s);let i=e.find(c=>wt(c.lab,a)<2);i||(i={lab:a,rgb:s},e.push(i)),n[o]=i.rgb}return n}function Ht(t,e,n=100,r){let o;switch(e){case"warm_cool":o=bt(t);break;case"fauvism":o=It(t);break;case"impressionism":o=zt(t);break;case"noir":o=Et(t);break;case"vintage":o=$t(t);break;case"pop_art":o=Gt(t);break;case"custom_palette":o=bt(t);break;default:o=bt(t)}return n<100?At(t,o,n):o}function jt(t){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${t.imgW} ${t.imgH}" width="${t.imgW}" height="${t.imgH}">
<title>MELURA — раскраска по номерам</title>
<desc>Векторная схема раскраски по номерам: заливки зон, контуры и номера цветов. Сгенерировано в MELURA.</desc>
<rect width="${t.imgW}" height="${t.imgH}" fill="${t.isTransparent?"transparent":"white"}"/>
<g>${t.fills}</g><g>${t.lines}</g><g>${t.texts}</g>
</svg>`}function Yt(t){return`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5,user-scalable=yes,viewport-fit=cover">
<title>MELURA • Art Practicum</title>
<style>
:root {
  --bg: #0f172a; --fg: #f1f5f9; --accent: #6366f1; --card: rgba(30, 41, 59, 0.7);
  --border: rgba(51, 65, 85, 0.8); --shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
body.light {
  --bg: #f8fafc; --fg: #1e293b; --accent: #4f46e5; --card: rgba(255, 255, 255, 0.8);
  --border: rgba(226, 232, 240, 0.8); --shadow: 0 8px 32px rgba(15, 23, 42, 0.1);
}
* { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
html, body { height: 100%; overflow: hidden; overscroll-behavior: none; background: var(--bg); color: var(--fg); font-family: system-ui, -apple-system, sans-serif; transition: background 0.3s; }
.app { display: flex; flex-direction: column; height: 100dvh; position: relative; }

.top { 
  display: flex; gap: 8px; padding: 12px; justify-content: center; z-index: 100;
  background: var(--card); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
}
.btn {
  padding: 0 16px; height: 38px; background: var(--card); color: var(--fg); border: 1px solid var(--border); 
  border-radius: 10px; font-weight: 700; font-size: 12px; cursor: pointer; transition: all 0.2s;
  display: flex; align-items: center; justify-content: center; gap: 6px;
}
.btn.on { background: var(--accent); color: #fff; border-color: var(--accent); box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3); }
.btn:active { transform: scale(0.95); }

.vp { flex: 1; position: relative; overflow: hidden; cursor: grab; touch-action: none; background: var(--bg); }
#cv { position: absolute; top: 0; left: 0; transform-origin: 0 0; will-change: transform; box-shadow: var(--shadow); }

.zu { position: absolute; bottom: 20px; right: 20px; display: flex; flex-direction: column; gap: 8px; z-index: 100; }
@media print {
  .top, .zu, .step-info { display: none !important; }
  html, body, .app, .vp { height: auto !important; overflow: visible !important; background: #fff !important; }
  #cv { position: static !important; transform: none !important; box-shadow: none !important; max-width: 100% !important; height: auto !important; }
}
.zb {
  width: 44px; height: 44px; background: var(--card); backdrop-filter: blur(12px);
  border: 1px solid var(--border); border-radius: 12px; display: flex; justify-content: center;
  align-items: center; cursor: pointer; color: var(--fg); box-shadow: var(--shadow);
}
.theme-btn svg { display: none; }
body.light .theme-btn .moon { display: block; }
body:not(.light) .theme-btn .sun { display: block; }

.step-info {
  position: absolute; top: 70px; left: 50%; transform: translateX(-50%);
  background: var(--accent); color: #fff; padding: 6px 16px; border-radius: 20px;
  font-size: 11px; font-weight: 800; letter-spacing: 1px; pointer-events: none;
  box-shadow: var(--shadow); z-index: 50; transition: 0.3s;
}
</style>
</head>
<body class="light">
<div class="app">
  <div class="top">
    <button class="btn on" onclick="setStep(0)" id="b0">ЭСКИЗ</button>
    <button class="btn" onclick="setStep(1)" id="b1">НОТАН</button>
    <button class="btn" onclick="setStep(2)" id="b2">ЦВЕТА</button>
    <button class="btn" onclick="setStep(3)" id="b3">ФИНАЛ</button>
    <button class="btn theme-btn" onclick="document.body.classList.toggle('light');draw()" aria-label="Тема">
      <svg class="sun" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42"/></svg>
      <svg class="moon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
    </button>
  </div>
  <div class="step-info" id="si">ШАГ 1: КОМПОЗИЦИЯ И ЛИНИИ</div>
  <img id="origImg" src="${t.origBase64}" style="display:none;" onload="draw()" />
  <div class="vp" id="vp">
    <canvas id="cv"></canvas>
    <div class="zu">
      <div class="zb" onclick="mz(1.4)"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M5 12h14"/></svg></div>
      <div class="zb" onclick="mz(0.7)"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14"/></svg></div>
      <div class="zb" onclick="rv()"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg></div>
    </div>
  </div>
</div>
<script>
var W=${t.imgW},H=${t.imgH},pal=${JSON.stringify(t.palJSON)},chains=${t.chainsJSON},maskRLE="${t.maskRLE}";
var notanLevels=${t.notanLevels},notanThreshold=${t.notanThreshold},artIntensity=${t.artIntensity},artisticPresetId="${t.artisticPresetId}";
var customPal=${t.customPalJS};
var raw=atob(maskRLE),mask=new Uint8Array(W*H),mi=0;
for(var ri=0;ri<raw.length;ri+=2){var v=raw.charCodeAt(ri),cnt=raw.charCodeAt(ri+1);for(var ci=0;ci<cnt;ci++){if(mi<mask.length) mask[mi++]=v;}}
var cv=document.getElementById("cv"),ctx=cv.getContext("2d", {alpha:false});
var img=document.getElementById("origImg");
cv.width=W;cv.height=H;cv.style.width=W+"px";cv.style.height=H+"px";
var sc=1,px=0,py=0,vp=document.getElementById("vp"),raf=0,step=0;
var stepMsgs=["ШАГ 1: КОМПОЗИЦИЯ И ЛИНИИ","ШАГ 2: СВЕТОТЕНЕВОЙ РАЗБОР","ШАГ 3: ЦВЕТОВАЯ БАЗА","ШАГ 4: ДЕТАЛИЗАЦИЯ"];

function at(){if(!raf) raf=requestAnimationFrame(()=>{cv.style.transform="translate3d("+px+"px,"+py+"px,0) scale("+sc+")";raf=0;});}
function rv(){var r=vp.getBoundingClientRect(),s=Math.min(r.width/W,r.height/H)*.95;sc=s;px=(r.width-W*s)/2;py=(r.height-H*s)/2;at();}
function mz(f){var r=vp.getBoundingClientRect(),mx=r.width/2,my=r.height/2;px=mx-(mx-px)*f;py=my-(my-py)*f;sc*=f;at();}
function getLum(r,g,b){return 0.299*r+0.587*g+0.114*b;}
function notanColor(r,g,b){
var lum=getLum(r,g,b);
var pals={2:[[30,41,59],[248,250,252]],3:[[15,23,42],[148,163,184],[248,250,252]],4:[[15,23,42],[71,85,105],[203,213,225],[248,250,252]],5:[[15,23,42],[51,65,85],[148,163,184],[226,232,240],[248,250,252]]};
var lv=Math.max(2,Math.min(5,notanLevels)), pal=pals[lv];
if(lv===2) return lum>notanThreshold?pal[1]:pal[0];
var biased=Math.max(0,Math.min(255,lum+(128-notanThreshold)));
var idx=Math.min(lv-1,Math.floor(biased/(256/lv)));
return pal[idx]||pal[0];
}
function nearestCustom(r,g,b){
if(!customPal||customPal.length<2) return[r,g,b];
var best=customPal[0],bd=1e9;
for(var i=0;i<customPal.length;i++){var c=customPal[i];var d=(c[0]-r)**2+(c[1]-g)**2+(c[2]-b)**2;if(d<bd){bd=d;best=c;}}
return best;
}
function applyPresetColor(r,g,b,p){
if(p==="original") return [r,g,b];
var t=getLum(r,g,b)/255,L=(0.15+0.7*t)*255;
if(t<0.3) return[L*0.8,L*0.8,L*1.2]; if(t>0.7) return[L*1.1,L,L*0.8]; return[L,L,L];
}
var stepCache={};
function draw(){
  ctx.fillStyle = "#ffffff"; ctx.fillRect(0,0,W,H);
  if(step===3&&img&&img.src.length>20){ctx.globalAlpha=0.15;ctx.drawImage(img,0,0,W,H);ctx.globalAlpha=1;}
  if(step===1||step===2){
    // Пиксели шагов 1/2 неизменны (параметры «зашиты» в файл), поэтому считаем
    // их ОДИН раз и кэшируем — переключение шагов и смена темы становятся
    // мгновенными без попиксельного прохода W×H на главном потоке.
    if(!stepCache[step]){
      var id=ctx.createImageData(W,H),d=id.data;
      for(var i=0; i<W*H; i++){
        var c=pal[mask[i]]; if(!c){d[i*4]=d[i*4+1]=d[i*4+2]=255;d[i*4+3]=255;continue;}
        var nr=c[0],ng=c[1],nb=c[2];
        if(step===1){var nc=notanColor(nr,ng,nb);nr=nc[0];ng=nc[1];nb=nc[2];}
        else{
          if(artisticPresetId!=="original"){
            var p=customPal&&customPal.length>=2?nearestCustom(nr,ng,nb):applyPresetColor(nr,ng,nb,artisticPresetId);
            var t=artIntensity/100; nr=nr+(p[0]-nr)*t; ng=ng+(p[1]-ng)*t; nb=nb+(p[2]-nb)*t;
          }
        }
        d[i*4]=nr;d[i*4+1]=ng;d[i*4+2]=nb;d[i*4+3]=255;
      }
      stepCache[step]=id;
    }
    ctx.putImageData(stepCache[step],0,0);
  }
  if(step===0||step===3){
    ctx.strokeStyle=step===3?"rgba(0,0,0,0.3)":"rgba(100,116,139,0.8)";
    ctx.lineWidth=step===3?0.5:1.0; ctx.lineCap="round"; ctx.lineJoin="round";
    for(var i=0;i<chains.length;i++){
      var ch=chains[i]; if(ch.length<2)continue;
      ctx.beginPath(); ctx.moveTo(ch[0][0],ch[0][1]); for(var j=1;j<ch.length;j++) ctx.lineTo(ch[j][0],ch[j][1]); ctx.stroke();
    }
  }
}
function setStep(s){step=s;for(var i=0;i<4;i++)document.getElementById("b"+i).className=i===s?"btn on":"btn";document.getElementById("si").textContent=stepMsgs[s];draw();}
var dr=false,dsx,dsy;vp.onmousedown=e=>{dr=true;dsx=e.clientX-px;dsy=e.clientY-py};document.onmousemove=e=>{if(dr){px=e.clientX-dsx;py=e.clientY-dsy;at()}};document.onmouseup=()=>dr=false;
vp.onwheel=e=>{e.preventDefault();var f=e.deltaY<0?1.15:.87,r=vp.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;px=mx-(mx-px)*f;py=my-(my-py)*f;sc*=f;at();}
var td=false,tsx,tsy,tid,tis,tip,tiq,ticx,ticy;
vp.ontouchstart=e=>{if(e.touches.length===1){td=true;tsx=e.touches[0].clientX-px;tsy=e.touches[0].clientY-py;}else if(e.touches.length===2){e.preventDefault();td=false;tid=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);tis=sc;tip=px;tiq=py;var r=vp.getBoundingClientRect();ticx=(e.touches[0].clientX+e.touches[1].clientX)/2-r.left;ticy=(e.touches[0].clientY+e.touches[1].clientY)/2-r.top;}};
vp.ontouchmove=e=>{e.preventDefault();if(e.touches.length===1&&td){px=e.touches[0].clientX-tsx;py=e.touches[0].clientY-tsy;at();}else if(e.touches.length===2){var d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY),f=d/tid,r=vp.getBoundingClientRect(),cx=(e.touches[0].clientX+e.touches[1].clientX)/2-r.left,cy=(e.touches[0].clientY+e.touches[1].clientY)/2-r.top;sc=tis*f;px=cx-(ticx-tip)*f;py=cy-(ticy-tiq)*f;at();}};
vp.ontouchend=e=>{if(!e.touches.length)td=false;else if(e.touches.length===1){td=true;tsx=e.touches[0].clientX-px;tsy=e.touches[0].clientY-py;}};
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) document.body.classList.remove('light');
rv();draw();window.onresize=rv;
<\/script></body></html>`}function Wt(t){return`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5,user-scalable=yes,viewport-fit=cover">
<title>MELURA • Interactive Canvas</title>
<style>
:root {
  --bg: #f8fafc; --fg: #1e293b; --accent: #6366f1; --card: rgba(255, 255, 255, 0.8);
  --border: rgba(226, 232, 240, 0.8); --shadow: 0 8px 32px rgba(15, 23, 42, 0.1);
}
body.dk {
  --bg: #0f172a; --fg: #f1f5f9; --accent: #818cf8; --card: rgba(30, 41, 59, 0.7);
  --border: rgba(51, 65, 85, 0.8); --shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
* { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
html, body { height: 100%; overflow: hidden; overscroll-behavior: none; background: var(--bg); color: var(--fg); font-family: system-ui, -apple-system, sans-serif; }
.app { display: flex; flex-direction: column; height: 100dvh; position: relative; }

.top { 
  display: flex; gap: 12px; padding: 16px; justify-content: center; z-index: 100;
  background: var(--card); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border);
}
.btn {
  padding: 0 20px; height: 42px; background: var(--accent); color: #fff; border: none; border-radius: 12px;
  font-weight: 700; font-size: 13px; cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
}
.btn:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(99, 102, 241, 0.3); }
.btn:active { transform: translateY(0) scale(0.98); }
.btn.sec { background: var(--card); color: var(--fg); border: 1px solid var(--border); box-shadow: none; }
.btn.on { background: #10b981; }

.bar {
  display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; padding: 12px;
  max-height: 25vh; overflow-y: auto; background: var(--card); backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border); z-index: 90;
}
.cb {
  width: 44px; height: 44px; border-radius: 12px; cursor: pointer; border: 2px solid transparent;
  display: flex; justify-content: center; align-items: center; font-weight: 800; font-size: 12px;
  transition: all 0.2s; position: relative; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.cb.sel { transform: scale(1.15) translateY(-2px); border-color: var(--accent); z-index: 5; box-shadow: var(--shadow); }
.cb::after { 
  content: ''; position: absolute; inset: -4px; border: 2px solid var(--accent); 
  border-radius: 16px; opacity: 0; transition: 0.2s; 
}
.cb.sel::after { opacity: 1; }

.vp { flex: 1; position: relative; overflow: hidden; cursor: grab; touch-action: none; background: #ddd; }
.vp::before { content: ''; position: absolute; inset: 0; background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4jtfAAAABlBMVEUAAAD///+l2Z/dAAAAbUlEQVR4Xu3XMQ4AIAgEQTr//9G9AbeSxcY6m8S0S86ZzB3H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9v4B738CcAEdOToAAAAASUVORK5CYII='); opacity: 0.05; pointer-events: none; }
#cv { position: absolute; top: 0; left: 0; transform-origin: 0 0; will-change: transform; filter: drop-shadow(0 20px 50px rgba(0,0,0,0.15)); }

.zu { position: absolute; bottom: 24px; right: 24px; display: flex; flex-direction: column; gap: 8px; z-index: 100; }
.zb {
  width: 48px; height: 48px; background: var(--card); backdrop-filter: blur(16px);
  border: 1px solid var(--border); border-radius: 16px; display: flex; justify-content: center;
  align-items: center; cursor: pointer; color: var(--fg); transition: all 0.2s; box-shadow: var(--shadow);
}
.zb:hover { transform: scale(1.05); background: var(--accent); color: #fff; }

.theme-icon svg { display: none; }
body.dk .theme-icon .sun { display: block; }
body:not(.dk) .theme-icon .moon { display: block; }
@media print {
  .top, .bar, .zu { display: none !important; }
  html, body, .app, .vp { height: auto !important; overflow: visible !important; background: #fff !important; }
  .vp::before { display: none !important; }
  #cv { position: static !important; transform: none !important; filter: none !important; max-width: 100% !important; height: auto !important; }
}
</style>
</head>
<body>
<div class="app">
  <div class="top">
    <button class="btn" onclick="ta()"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> Все цвета</button>
    <button class="btn sec" id="nb" onclick="tn()">Скрыть номера</button>
    <button class="btn sec" onclick="toggleTheme()" aria-label="Тема">
      <div class="theme-icon">
        <svg class="sun" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42"/></svg>
        <svg class="moon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </div>
    </button>
  </div>
  <div class="bar" id="pal">${t.palButtons}</div>
  <div class="vp" id="vp">
    <canvas id="cv"></canvas>
    <div class="zu">
      <div class="zb" onclick="mz(1.4)"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></div>
      <div class="zb" onclick="mz(0.7)"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12h14"/></svg></div>
      <div class="zb" onclick="rv()"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg></div>
      <div class="zb" onclick="fs()"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg></div>
    </div>
  </div>
</div>
<script>
var W=${t.imgW}, H=${t.imgH}, pal=${JSON.stringify(t.palJSON)}, chains=${t.chainsJSON}, lbls=${t.labelsJSON}, ids=[${t.sl.join(",")}];
var ac=new Set(), sn=true, lineAlpha=${t.lineAlpha}, lineWidth=${t.lineWidth};

var cv=document.getElementById("cv"), ctx=cv.getContext("2d", { alpha: false });
// Супер-сэмпл ограничиваем размером фото: мелкие остаются чёткими (до 2×),
// крупные не раздувают видеопамять (макс. сторона холста ~4096) — иначе на
// мобильных/слабых устройствах вкладка падает.
var SS=Math.max(1, Math.min(2, 4096/Math.max(W,H)));
cv.width=Math.round(W*SS); cv.height=Math.round(H*SS); cv.style.width=W+"px"; cv.style.height=H+"px";
var sc=1, px=0, py=0, vp=document.getElementById("vp"), raf=0;

function at(){if(!raf) raf=requestAnimationFrame(()=>{cv.style.transform="translate3d("+px+"px,"+py+"px,0) scale("+sc+")";raf=0;});}
function rv(){var r=vp.getBoundingClientRect(), s=Math.min(r.width/W, r.height/H)*0.95;sc=s;px=(r.width-W*s)/2;py=(r.height-H*s)/2;at();}
function mz(f){var r=vp.getBoundingClientRect(), mx=r.width/2, my=r.height/2;px=mx-(mx-px)*f;py=my-(my-py)*f;sc*=f;at();}
function fs(){if(!document.fullscreenElement) vp.requestFullscreen().catch(()=>{});else document.exitFullscreen();}
function toggleTheme(){document.body.classList.toggle('dk'); draw();}

function ta(){
  if(ac.size === ids.length) { ac.clear(); document.querySelectorAll(".cb").forEach(e=>e.classList.remove("sel")); }
  else { ids.forEach(i=>{ ac.add(i); var el=document.getElementById("p"+i); if(el) el.classList.add("sel"); }); }
  draw();
}
function tn(){
  sn=!sn; document.getElementById("nb").textContent=sn?"Скрыть номера":"Показать номера"; draw();
}

function draw(){
  ctx.fillStyle = "#ffffff"; ctx.fillRect(0,0,cv.width,cv.height);
  ctx.save();
  ctx.globalAlpha = 0.03; ctx.fillStyle = "#000";
  for(var i=0; i<cv.width; i+=8) for(var j=0; j<cv.height; j+=8) if(Math.random()>0.5) ctx.fillRect(i,j,2,2);
  ctx.restore();
  
  if(ac.size>0){
    ctx.save(); ctx.scale(SS,SS); ctx.lineJoin="round";
    var slb = [...lbls].sort((a,b)=>b.a - a.a);
    for(var k=0; k<slb.length; k++){
      var lb=slb[k], id=lb.id;
      var c = [255, 255, 255];
      if(ac.has(id)){
        c = pal[id] || [255, 255, 255];
      }
      ctx.fillStyle="rgb("+c[0]+","+c[1]+","+c[2]+")";
      if(lb.poly && lb.poly.length>0){
        ctx.beginPath(); ctx.moveTo(lb.poly[0][0],lb.poly[0][1]);
        for(var p=1; p<lb.poly.length; p++) ctx.lineTo(lb.poly[p][0],lb.poly[p][1]);
        ctx.closePath(); ctx.fill();
      }
    }
    ctx.restore();
  }
  
  ctx.save(); ctx.scale(SS,SS);
  ctx.strokeStyle = "rgba(40,40,40,"+lineAlpha+")";
  ctx.lineWidth = lineWidth / Math.max(1, sc/SS);
  ctx.lineCap="round"; ctx.lineJoin="round";
  for(var i=0; i<chains.length; i++){
    var ch=chains[i]; if(ch.length<2)continue;
    ctx.beginPath(); ctx.moveTo(ch[0][0],ch[0][1]);
    for(var j=1; j<ch.length; j++) ctx.lineTo(ch[j][0],ch[j][1]);
    ctx.stroke();
  }
  if(sn){
    ctx.textAlign="center"; ctx.textBaseline="middle";
    var numCol = "rgba(10,10,10,0.85)";
    for(var i=0; i<lbls.length; i++){
      var cd=lbls[i]; for(var j=0; j<cd.lp.length; j++){
        var lp=cd.lp[j]; if(lp.d < 2.5) continue; // порог зоны как в редакторе
        var digits = String(cd.id+1).length;
        var fitFs = (3.27*lp.d)/digits;
        var fs = Math.max(5, Math.min(12, lp.d*1.2, fitFs)); // формула кегля 1-в-1 с редактором
        ctx.font="bold "+fs+"px sans-serif";
        var isAct = ac.has(cd.id), col = pal[cd.id];
        var finalCol = numCol;
        if(isAct&&col){
          var lum = .299*col[0]+.587*col[1]+.114*col[2];
          finalCol = lum>140 ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)";
        }
        
        // Рисуем обводку для контраста
        ctx.strokeStyle = (finalCol === "rgba(255,255,255,1)") ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.8)";
        ctx.lineWidth = Math.max(1, fs * 0.15);
        ctx.strokeText(String(cd.id+1), lp.x, lp.y);
        
        ctx.fillStyle = finalCol;
        ctx.fillText(String(cd.id+1), lp.x, lp.y);
      }}
  }
  ctx.restore();
}
var lt = 0, lc = -1, clickTimer = null;
function tc(i){
  var now = Date.now();
  if (lc === i && (now - lt) < 250) {
    clearTimeout(clickTimer);
    if(ac.size === 1 && ac.has(i)) {
      ac.clear();
      ids.forEach(id=>{ if(id!==i) ac.add(id); });
    } else {
      ac.clear();
      ac.add(i);
    }
    document.querySelectorAll(".cb").forEach(e=>{
      if(ac.has(parseInt(e.id.substring(1)))) e.classList.add("sel");
      else e.classList.remove("sel");
    });
    lt = 0; lc = -1;
    draw();
  } else {
    lt = now; lc = i;
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => {
      var el=document.getElementById("p"+i);
      if(ac.has(i)){ ac.delete(i); el.classList.remove("sel"); }
      else { ac.add(i); el.classList.add("sel"); }
      draw();
    }, 250);
  }
}
var dr=false, dsx, dsy; vp.onmousedown=e=>{ dr=true; dsx=e.clientX-px; dsy=e.clientY-py; vp.style.cursor='grabbing'; };
document.onmousemove=e=>{ if(dr){ px=e.clientX-dsx; py=e.clientY-dsy; at(); } };
document.onmouseup=()=>{ dr=false; vp.style.cursor='grab'; };
vp.onwheel=e=>{e.preventDefault(); var f=e.deltaY<0?1.15:.87, r=vp.getBoundingClientRect(), mx=e.clientX-r.left, my=e.clientY-r.top; px=mx-(mx-px)*f; py=my-(my-py)*f; sc*=f; at();};
var td=false, tsx, tsy, tid, tis, tip, tiq, ticx, ticy;
vp.ontouchstart=e=>{if(e.touches.length===1){ td=true; tsx=e.touches[0].clientX-px; tsy=e.touches[0].clientY-py; }else if(e.touches.length===2){e.preventDefault(); td=false; tid=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY); tis=sc; tip=px; tiq=py; var r=vp.getBoundingClientRect(); ticx=(e.touches[0].clientX+e.touches[1].clientX)/2-r.left; ticy=(e.touches[0].clientY+e.touches[1].clientY)/2-r.top;}};
vp.ontouchmove=e=>{e.preventDefault(); if(e.touches.length===1&&td){ px=e.touches[0].clientX-tsx; py=e.touches[0].clientY-tsy; at(); }else if(e.touches.length===2){var d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY), f=d/tid; var r=vp.getBoundingClientRect(), cx=(e.touches[0].clientX+e.touches[1].clientX)/2-r.left, cy=(e.touches[0].clientY+e.touches[1].clientY)/2-r.top; sc=tis*f; px=cx-(ticx-tip)*f; py=cy-(ticy-tiq)*f; at();}};
vp.ontouchend=e=>{if(!e.touches.length) td=false; else if(e.touches.length===1){ td=true; tsx=e.touches[0].clientX-px; tsy=e.touches[0].clientY-py; }};
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) document.body.classList.add('dk');
rv(); draw(); window.onresize=rv;
<\/script></body></html>`}function Nt(t,e,n,r){const o=[];for(const d of t)for(const l of d.labelPositions)l.maxDist<1||o.push({lbl:l,id:d.labelId,area:d.area});o.sort((d,l)=>d.area-l.area);const s=32,a=Math.ceil(e/s),i=Math.ceil(n/s),c=new Array(a*i).fill(null).map(()=>[]),f=(d,l)=>{const x=Math.max(0,Math.min(a-1,Math.floor(d/s)));return Math.max(0,Math.min(i-1,Math.floor(l/s)))*a+x},p=(d,l)=>{const x=Math.floor(d/s),u=Math.floor(l/s),_=[];for(let m=Math.max(0,u-1);m<=Math.min(i-1,u+1);m++)for(let b=Math.max(0,x-1);b<=Math.min(a-1,x+1);b++){const w=m*a+b,h=c[w];for(let g=0;g<h.length;g++)_.push(h[g])}return _};for(const d of o){const{lbl:l}=d,u=Math.max(6,Math.min(14,l.maxDist*1.2))*.7;let _=l.x,m=l.y;for(let w=0;w<10;w++){let h=!1,g=_,y=m;const P=p(g,y);for(let B=0;B<P.length;B++){const C=P[B],U=g-C.x,v=y-C.y,k=u+C.r+2;if(U*U+v*v<k*k){const S=Math.sqrt(U*U+v*v)||1,N=(k-S)/S;g+=U*N*.6,y+=v*N*.6,h=!0}}if(h){const B=Math.floor(g),C=Math.floor(y);if(B>=0&&B<e&&C>=0&&C<n&&r[C*e+B]===d.id)_=g,m=y;else break}else break}l.x=_,l.y=m;const b={x:_,y:m,r:u,id:d.id};c[f(_,m)].push(b)}}function qt(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Xt(t){const e=[];let n=0;for(;n<t.length;){const r=t[n];let o=1;for(;n+o<t.length&&t[n+o]===r&&o<255;)o++;e.push(String.fromCharCode(r,o)),n+=o}return btoa(e.join(""))}function Jt(t,e,n){const r=ht(t,M.__wbindgen_malloc),o=$,s=M.build_smooth_chains_wasm(r,o,e,n);if(s[2])throw W(s[1]);return W(s[0])}function Vt(t,e,n,r,o){const s=ct(t,M.__wbindgen_malloc),a=$;var i=K(o)?0:ht(o,M.__wbindgen_malloc),c=$;const f=M.extract_palette(s,a,e,n,r,i,c);if(f[2])throw W(f[1]);return W(f[0])}function Kt(t,e,n,r,o,s,a,i){const c=ct(t,M.__wbindgen_malloc),f=$,p=ct(e,M.__wbindgen_malloc),d=$;var l=K(i)?0:ht(i,M.__wbindgen_malloc),x=$;const u=M.process_from_mask(c,f,p,d,n,r,o,s,a,l,x);if(u[2])throw W(u[1]);return W(u[0])}function Zt(t,e,n,r,o,s,a){const i=ct(t,M.__wbindgen_malloc),c=$;var f=K(a)?0:ht(a,M.__wbindgen_malloc),p=$;const d=M.process_image(i,c,e,n,r,o,s,f,p);if(d[2])throw W(d[1]);return W(d[0])}function Qt(t,e,n,r,o){const s=ct(t,M.__wbindgen_malloc),a=$,i=M.vectorize_mask(s,a,e,n,r,o);if(i[2])throw W(i[1]);return W(i[0])}function te(){return{__proto__:null,"./wasm_engine_bg.js":{__proto__:null,__wbg_Error_3639a60ed15f87e7:function(e,n){return Error(mt(e,n))},__wbg_Number_a3d737fd183f7dca:function(e){return Number(e)},__wbg_String_8564e559799eccda:function(e,n){const r=String(n),o=yt(r,M.__wbindgen_malloc,M.__wbindgen_realloc),s=$;X().setInt32(e+4,s,!0),X().setInt32(e+0,o,!0)},__wbg___wbindgen_boolean_get_c3dd5c39f1b5a12b:function(e){const n=e,r=typeof n=="boolean"?n:void 0;return K(r)?16777215:r?1:0},__wbg___wbindgen_debug_string_07cb72cfcc952e2b:function(e,n){const r=_t(n),o=yt(r,M.__wbindgen_malloc,M.__wbindgen_realloc),s=$;X().setInt32(e+4,s,!0),X().setInt32(e+0,o,!0)},__wbg___wbindgen_in_2617fa76397620d3:function(e,n){return e in n},__wbg___wbindgen_is_function_2f0fd7ceb86e64c5:function(e){return typeof e=="function"},__wbg___wbindgen_is_object_5b22ff2418063a9c:function(e){const n=e;return typeof n=="object"&&n!==null},__wbg___wbindgen_is_string_eddc07a3efad52e6:function(e){return typeof e=="string"},__wbg___wbindgen_is_undefined_244a92c34d3b6ec0:function(e){return e===void 0},__wbg___wbindgen_jsval_loose_eq_1978f1e77b4bce62:function(e,n){return e==n},__wbg___wbindgen_number_get_dd6d69a6079f26f1:function(e,n){const r=n,o=typeof r=="number"?r:void 0;X().setFloat64(e+8,K(o)?0:o,!0),X().setInt32(e+0,!K(o),!0)},__wbg___wbindgen_string_get_965592073e5d848c:function(e,n){const r=n,o=typeof r=="string"?r:void 0;var s=K(o)?0:yt(o,M.__wbindgen_malloc,M.__wbindgen_realloc),a=$;X().setInt32(e+4,a,!0),X().setInt32(e+0,s,!0)},__wbg___wbindgen_throw_9c75d47bf9e7731e:function(e,n){throw new Error(mt(e,n))},__wbg_call_add9e5a76382e668:function(){return xt(function(e,n){return e.call(n)},arguments)},__wbg_done_b1afd6201ac045e0:function(e){return e.done},__wbg_get_9cfea9b7bbf12a15:function(){return xt(function(e,n){return Reflect.get(e,n)},arguments)},__wbg_get_unchecked_be562b1421656321:function(e,n){return e[n>>>0]},__wbg_get_with_ref_key_6412cf3094599694:function(e,n){return e[n]},__wbg_instanceof_ArrayBuffer_eab9f28fbec23477:function(e){let n;try{n=e instanceof ArrayBuffer}catch{n=!1}return n},__wbg_instanceof_Uint8Array_57d77acd50e4c44d:function(e){let n;try{n=e instanceof Uint8Array}catch{n=!1}return n},__wbg_isArray_c6c6ef8308995bcf:function(e){return Array.isArray(e)},__wbg_isSafeInteger_3c56c421a5b4cce4:function(e){return Number.isSafeInteger(e)},__wbg_iterator_9d68985a1d096fc2:function(){return Symbol.iterator},__wbg_length_0a6ce016dc1460b0:function(e){return e.length},__wbg_length_ba3c032602efe310:function(e){return e.length},__wbg_new_2fad8ca02fd00684:function(){return new Object},__wbg_new_3baa8d9866155c79:function(){return new Array},__wbg_new_46ae4e4ff2a07a64:function(){return new Map},__wbg_new_8454eee672b2ba6e:function(e){return new Uint8Array(e)},__wbg_next_261c3c48c6e309a5:function(e){return e.next},__wbg_next_aacee310bcfe6461:function(){return xt(function(e){return e.next()},arguments)},__wbg_prototypesetcall_fd4050e806e1d519:function(e,n,r){Uint8Array.prototype.set.call(ne(e,n),r)},__wbg_set_6be42768c690e380:function(e,n,r){e[n]=r},__wbg_set_82f7a370f604db70:function(e,n,r){return e.set(n,r)},__wbg_set_f614f6a0608d1d1d:function(e,n,r){e[n>>>0]=r},__wbg_value_f852716acdeb3e82:function(e){return e.value},__wbindgen_cast_0000000000000001:function(e){return e},__wbindgen_cast_0000000000000002:function(e,n){return mt(e,n)},__wbindgen_cast_0000000000000003:function(e){return BigInt.asUintN(64,e)},__wbindgen_init_externref_table:function(){const e=M.__wbindgen_externrefs,n=e.grow(4);e.set(0,void 0),e.set(n+0,void 0),e.set(n+1,null),e.set(n+2,!0),e.set(n+3,!1)}}}}function ee(t){const e=M.__externref_table_alloc();return M.__wbindgen_externrefs.set(e,t),e}function _t(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const o=t.description;return o==null?"Symbol":`Symbol(${o})`}if(e=="function"){const o=t.name;return typeof o=="string"&&o.length>0?`Function(${o})`:"Function"}if(Array.isArray(t)){const o=t.length;let s="[";o>0&&(s+=_t(t[0]));for(let a=1;a<o;a++)s+=", "+_t(t[a]);return s+="]",s}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(n&&n.length>1)r=n[1];else return toString.call(t);if(r=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:r}function ne(t,e){return t=t>>>0,tt().subarray(t/1,t/1+e)}let V=null;function X(){return(V===null||V.buffer.detached===!0||V.buffer.detached===void 0&&V.buffer!==M.memory.buffer)&&(V=new DataView(M.memory.buffer)),V}let ot=null;function re(){return(ot===null||ot.byteLength===0)&&(ot=new Float32Array(M.memory.buffer)),ot}function mt(t,e){return ie(t>>>0,e)}let it=null;function tt(){return(it===null||it.byteLength===0)&&(it=new Uint8Array(M.memory.buffer)),it}function xt(t,e){try{return t.apply(this,e)}catch(n){const r=ee(n);M.__wbindgen_exn_store(r)}}function K(t){return t==null}function ct(t,e){const n=e(t.length*1,1)>>>0;return tt().set(t,n/1),$=t.length,n}function ht(t,e){const n=e(t.length*4,4)>>>0;return re().set(t,n/4),$=t.length,n}function yt(t,e,n){if(n===void 0){const i=st.encode(t),c=e(i.length,1)>>>0;return tt().subarray(c,c+i.length).set(i),$=i.length,c}let r=t.length,o=e(r,1)>>>0;const s=tt();let a=0;for(;a<r;a++){const i=t.charCodeAt(a);if(i>127)break;s[o+a]=i}if(a!==r){a!==0&&(t=t.slice(a)),o=n(o,r,r=a+t.length*3,1)>>>0;const i=tt().subarray(o+a,o+r),c=st.encodeInto(t,i);a+=c.written,o=n(o,r,a,1)>>>0}return $=a,o}function W(t){const e=M.__wbindgen_externrefs.get(t);return M.__externref_table_dealloc(t),e}let pt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});pt.decode();const oe=2146435072;let vt=0;function ie(t,e){return vt+=e,vt>=oe&&(pt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),pt.decode(),vt=e),pt.decode(tt().subarray(t,t+e))}const st=new TextEncoder;"encodeInto"in st||(st.encodeInto=function(t,e){const n=st.encode(t);return e.set(n),{read:t.length,written:n.length}});let $=0,M;function se(t,e){return M=t.exports,V=null,ot=null,it=null,M.__wbindgen_start(),M}async function ae(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(o){if(t.ok&&n(t.type)&&t.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const r=await t.arrayBuffer();return await WebAssembly.instantiate(r,e)}else{const r=await WebAssembly.instantiate(t,e);return r instanceof WebAssembly.Instance?{instance:r,module:t}:r}function n(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}async function Mt(t){if(M!==void 0)return M;t!==void 0&&(Object.getPrototypeOf(t)===Object.prototype?{module_or_path:t}=t:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),t===void 0&&(t=new URL("/Melura/assets/wasm_engine_bg-CLLSPfaT.wasm",import.meta.url));const e=te();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:r}=await ae(await t,e);return se(n)}const ce=`
struct Params {
  width: u32,
  height: u32,
  radius: i32,
  k_colors: u32,
  detail: u32,
  ai_enabled: u32,
};

@group(0) @binding(0) var<uniform> params: Params;
@group(0) @binding(1) var<storage, read> palette: array<vec4<f32>>; // Lab values
@group(0) @binding(2) var<storage, read> paletteRGB: array<vec4<u32>>; // RGB values

@group(1) @binding(0) var<storage, read> imgBuffer: array<u32>;     // RGBA packed
@group(1) @binding(1) var<storage, read_write> outMask: array<u32>;
@group(1) @binding(2) var<storage, read_write> finalMask: array<u32>;
@group(1) @binding(3) var<storage, read> importanceBuffer: array<f32>;  // importance per pixel, 0.0-1.0

fn get_pixel(x: i32, y: i32) -> vec4<f32> {
    let ux = clamp(u32(x), 0u, params.width - 1u);
    let uy = clamp(u32(y), 0u, params.height - 1u);
    let idx = uy * params.width + ux;
    let val = imgBuffer[idx];
    let r = f32(val & 255u);
    let g = f32((val >> 8u) & 255u);
    let b = f32((val >> 16u) & 255u);
    return vec4<f32>(r, g, b, 255.0);
}

fn get_importance(x: i32, y: i32) -> f32 {
    if (params.ai_enabled == 0u) { return 0.5; }
    let ux = clamp(u32(x), 0u, params.width - 1u);
    let uy = clamp(u32(y), 0u, params.height - 1u);
    let idx = uy * params.width + ux;
    return importanceBuffer[idx];
}

fn local_contrast(x: i32, y: i32, c: vec3<f32>) -> f32 {
    let p = get_pixel(x, y).rgb;
    return (abs(p.r - c.r) + abs(p.g - c.g) + abs(p.b - c.b)) / 3.0;
}

fn rgb_to_lab(c: vec3<f32>) -> vec3<f32> {
    var r = c.r / 255.0;
    var g = c.g / 255.0;
    var b = c.b / 255.0;

    r = select(pow((r + 0.055) / 1.055, 2.4), r / 12.92, r <= 0.04045);
    g = select(pow((g + 0.055) / 1.055, 2.4), g / 12.92, g <= 0.04045);
    b = select(pow((b + 0.055) / 1.055, 2.4), b / 12.92, b <= 0.04045);

    var x = (r * 0.4124564 + g * 0.3575761 + b * 0.1804375) / 0.95047;
    var y = (r * 0.2126729 + g * 0.7151522 + b * 0.0721750) / 1.00000;
    var z = (r * 0.0193339 + g * 0.1191920 + b * 0.9503041) / 1.08883;

    x = select(pow(x, 1.0/3.0), 7.787 * x + 16.0 / 116.0, x <= 0.008856);
    y = select(pow(y, 1.0/3.0), 7.787 * y + 16.0 / 116.0, y <= 0.008856);
    z = select(pow(z, 1.0/3.0), 7.787 * z + 16.0 / 116.0, z <= 0.008856);

    return vec3<f32>((116.0 * y) - 16.0, 500.0 * (x - y), 200.0 * (y - z));
}

// sRGB(gamma) <-> линейный свет (компонентно). Усреднение цвета в билатерали
// делаем в линейном свете — фотометрически корректно, меньше "мути" на краях.
fn srgb_to_lin(c: vec3<f32>) -> vec3<f32> {
    let lo = c / 12.92;
    let hi = pow((c + 0.055) / 1.055, vec3<f32>(2.4));
    return select(hi, lo, c <= vec3<f32>(0.04045));
}
fn lin_to_srgb(c: vec3<f32>) -> vec3<f32> {
    let cc = clamp(c, vec3<f32>(0.0), vec3<f32>(1.0));
    let lo = cc * 12.92;
    let hi = 1.055 * pow(cc, vec3<f32>(1.0 / 2.4)) - 0.055;
    return select(hi, lo, cc <= vec3<f32>(0.0031308));
}

@compute @workgroup_size(16, 16)
fn filter_and_quantize(@builtin(global_invocation_id) GlobalInvocationID: vec3<u32>) {
    let ux = GlobalInvocationID.x;
    let uy = GlobalInvocationID.y;
    if (ux >= params.width || uy >= params.height) { return; }

    let x = i32(ux);
    let y = i32(uy);

    var weight_sum = 0.0;
    var c_sum = vec3<f32>(0.0);
    let center = get_pixel(x, y).rgb;
    let center_imp = get_importance(x, y);
    
    // Importance-driven adaptive parameters:
    // High importance (face, eyes) -> small radius, tight sigma_c -> preserve detail
    // Low importance (background) -> large radius, loose sigma_c -> simplify aggressively
    var effective_radius = params.radius;
    var sigma_c = 30.0;

    if (params.ai_enabled == 1u) {
        // РЕЗКОСТЬ по ЛОКАЛЬНОМУ КОНТРАСТУ (а не по важности объекта):
        // гладкая кожа -> большой радиус (всегда сглажена, нет бандинга при любом
        // пресете); край/глаз -> малый радиус (деталь сохраняется).
        let acc = local_contrast(x-1, y, center) + local_contrast(x+1, y, center)
                + local_contrast(x, y-1, center) + local_contrast(x, y+1, center)
                + local_contrast(x-1, y-1, center) + local_contrast(x+1, y+1, center)
                + local_contrast(x-1, y+1, center) + local_contrast(x+1, y-1, center);
        let sharp = min(acc / 8.0 / 25.0, 1.0);
        let r_min = max(1.0, f32(params.radius) / 3.0);
        let r_max = f32(params.radius) + 2.0;
        effective_radius = i32(mix(r_max, r_min, sharp));
        sigma_c = mix(50.0, 10.0, sharp);
    }

    let sigma_s = f32(effective_radius);

    for (var ny = y - effective_radius; ny <= y + effective_radius; ny++) {
        for (var nx = x - effective_radius; nx <= x + effective_radius; nx++) {
            let n_col = get_pixel(nx, ny).rgb;
            let n_imp = get_importance(nx, ny);
            
            let d_s = f32((nx - x) * (nx - x) + (ny - y) * (ny - y));
            var d_c = dot(n_col - center, n_col - center);

            // Importance-based semantic barrier:
            // Large importance difference = different semantic regions = don't blend
            if (params.ai_enabled == 1u) {
                let imp_diff = abs(center_imp - n_imp);
                if (imp_diff > 0.4) {
                    // Strong barrier between very different importance zones
                    d_c += 30000.0 * imp_diff;
                } else if (imp_diff > 0.2) {
                    // Moderate barrier
                    d_c += 5000.0 * imp_diff;
                }
            }

            let weight = exp(-(d_s / (2.0 * sigma_s * sigma_s)) - (d_c / (2.0 * sigma_c * sigma_c)));
            weight_sum += weight;
            c_sum += srgb_to_lin(n_col / 255.0) * weight;
        }
    }
    let filtered = select(center, lin_to_srgb(c_sum / weight_sum) * 255.0, weight_sum > 0.0);

    // 2. Assign Color
    let lab = rgb_to_lab(filtered);
    var best_d = 1e30;
    var best_k = 0u;

    // Приоритет светлоты (L) над цветностью (a,b).
    // L несёт светотень и форму — это главное для сходства с оригиналом.
    // Раньше было L=1.0, a/b=1.1 (перекос в хрому, уплощало объём).
    let WL = 1.30;
    let WC = 0.95;
    for (var i = 0u; i < params.k_colors; i++) {
        let p_lab = palette[i].xyz;
        let diff = lab - p_lab;
        let d = diff.x * diff.x * WL + diff.y * diff.y * WC + diff.z * diff.z * WC;

        if (d < best_d) {
            best_d = d;
            best_k = i;
        }
    }

    let idx = uy * params.width + ux;
    outMask[idx] = best_k;
}

@compute @workgroup_size(16, 16)
fn mode_filter(@builtin(global_invocation_id) GlobalInvocationID: vec3<u32>) {
    let ux = GlobalInvocationID.x;
    let uy = GlobalInvocationID.y;
    if (ux >= params.width || uy >= params.height) { return; }

    let x = i32(ux);
    let y = i32(uy);
    var counts = array<u32, 256>();
    
    for (var ny = y - 1; ny <= y + 1; ny++) {
        for (var nx = x - 1; nx <= x + 1; nx++) {
            let cx = clamp(u32(nx), 0u, params.width - 1u);
            let cy = clamp(u32(ny), 0u, params.height - 1u);
            let idx = cy * params.width + cx;
            let val = outMask[idx];
            counts[val] += 1u;
        }
    }

    let center_idx = uy * params.width + ux;
    var best_v = outMask[center_idx];
    var best_c = counts[best_v];

    for (var i = 0u; i < params.k_colors; i++) {
        if (counts[i] > best_c) {
            best_c = counts[i];
            best_v = i;
        }
    }

    finalMask[center_idx] = best_v;
}
`;class le{device=null;isInitialized=!1;async init(){if(this.isInitialized)return!0;if(!navigator.gpu)return console.warn("WebGPU не поддерживается браузером."),!1;try{const e=await navigator.gpu.requestAdapter();if(!e)throw new Error("Нет доступного GPU адаптера.");return this.device=await e.requestDevice(),this.isInitialized=!0,console.log("WebGPU успешно инициализирован"),!0}catch(e){return console.error("Ошибка инициализации WebGPU:",e),!1}}getDevice(){return this.device}async runPixelPipeline(e,n,r,o,s,a,i=null){if(!this.device)return null;const c=this.device,f=o.length,p=c.createShaderModule({code:ce}),d=c.createBuffer({size:24,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),l=i?1:0,x=new Uint32Array([n,r,s,f,a,l]);c.queue.writeBuffer(d,0,x);const u=new Float32Array(f*4);for(let A=0;A<f;A++){const G=this.rgbToLab(o[A]);u[A*4]=G[0],u[A*4+1]=G[1],u[A*4+2]=G[2],u[A*4+3]=1}const _=c.createBuffer({size:f*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});c.queue.writeBuffer(_,0,u);const m=c.createBuffer({size:Math.max(16,f*16),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});c.queue.writeBuffer(m,0,new Uint32Array(Math.max(4,f*4)));const b=c.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),w=c.createBindGroup({layout:b,entries:[{binding:0,resource:{buffer:d}},{binding:1,resource:{buffer:_}},{binding:2,resource:{buffer:m}}]}),h=c.createBuffer({size:n*r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});c.queue.writeBuffer(h,0,e.buffer,e.byteOffset,e.byteLength);const g=c.createBuffer({size:n*r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),y=c.createBuffer({size:n*r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});let P;if(i)P=c.createBuffer({size:n*r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),c.queue.writeBuffer(P,0,i.buffer,i.byteOffset,i.byteLength);else{const A=new Float32Array(1);A[0]=.5,P=c.createBuffer({size:4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),c.queue.writeBuffer(P,0,A.buffer)}const B=c.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),C=c.createBindGroup({layout:B,entries:[{binding:0,resource:{buffer:h}},{binding:1,resource:{buffer:g}},{binding:2,resource:{buffer:y}},{binding:3,resource:{buffer:P}}]}),U=c.createPipelineLayout({bindGroupLayouts:[b,B]}),v=c.createComputePipeline({layout:U,compute:{module:p,entryPoint:"filter_and_quantize"}}),k=c.createCommandEncoder(),S=Math.ceil(n/16),N=Math.ceil(r/16),F=k.beginComputePass();F.setPipeline(v),F.setBindGroup(0,w),F.setBindGroup(1,C),F.dispatchWorkgroups(S,N,1),F.end();const T=c.createBuffer({size:n*r*4,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST});k.copyBufferToBuffer(g,0,T,0,n*r*4),c.queue.submit([k.finish()]),await T.mapAsync(GPUMapMode.READ);const L=new Uint32Array(T.getMappedRange()),E=new Uint8Array(n*r);for(let A=0;A<E.length;A++)E[A]=L[A];return T.unmap(),h.destroy(),g.destroy(),y.destroy(),T.destroy(),d.destroy(),_.destroy(),m.destroy(),P&&P.destroy(),E}rgbToLab(e){let n=e[0]/255,r=e[1]/255,o=e[2]/255;n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,o=o>.04045?Math.pow((o+.055)/1.055,2.4):o/12.92;let s=(n*.4124564+r*.3575761+o*.1804375)/.95047,a=(n*.2126729+r*.7151522+o*.072175)/1,i=(n*.0193339+r*.119192+o*.9503041)/1.08883;return s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,[116*a-16,500*(s-a),200*(a-i)]}}const ft=new le;function fe(t,e,n,r,o,s,a){if(e===1)return Rt(t,r,o);if(e===2){if(n==="original")return t;if(a&&a.length>=2){const i=Dt(t,a);return s<100?At(t,i,s):i}return Ht(t,n,s)}else return t}let ut=!1;function kt(t,e,n,r){const o=new Float32Array(t.boundary_edges),s=r<=2?.5:r<=4?.4:r<=7?.3:.1,a=Jt(o,s,4),i=1.25,c=a.filter(u=>{const _=u.every(h=>h[1]<=i),m=u.every(h=>h[1]>=n-i),b=u.every(h=>h[0]<=i),w=u.every(h=>h[0]>=e-i);return!(_||m||b||w)}),f=new Uint8Array(t.label_mask),p=new Uint8Array(t.preview_buffer).buffer,d={};t.palette.forEach((u,_)=>{d[_]=u});const l=t.contours.map(u=>({points:u.points,smoothPoints:u.points,labelId:u.label_id,center:u.center,maxDist:u.max_dist,area:u.area,labelPositions:u.label_positions.map(_=>({x:_.x,y:_.y,maxDist:_.max_dist}))}));return Nt(l,e,n,f),{data:{previewBuffer:p,imgW:e,imgH:n,contoursData:l,colorPalette:d,validLabels:t.valid_labels,scaleFactor:1,autoColors:t.palette.size,autoDetail:r,labelMaskBuffer:f.buffer,boundaryEdgesBuffer:o.buffer,chains:c},transfer:[p,f.buffer,o.buffer]}}function ue(t,e,n){if(t<60||e<30||n<15||t<e||e<n)return!1;const r=Math.max(t,e,n),o=Math.min(t,e,n);if(r-o<8||t-n<10)return!1;const[s,a,i]=lt([t,e,n]);return i<.18||i>.95||a<.1||a>.8?!1:s<=55||s>=335}function de(t,e,n,r,o,s,a){if(!o)return 0;const i=e*n,c=i>4e5?2:1,f=[];for(let h=0;h<n;h+=c)for(let g=0;g<e;g+=c){const y=h*e+g;if(o[y]<.45)continue;const B=y*4,C=t[B],U=t[B+1],v=t[B+2];ue(C,U,v)&&f.push({r:C,g:U,b:v,l:.299*C+.587*U+.114*v})}const p=i/(c*c);if(f.length<150||f.length<p*.004)return 0;f.sort((h,g)=>h.l-g.l);const d=Math.max(3,Math.min(6,Math.round(r*.28))),l=[];for(let h=0;h<d;h++){const g=Math.floor(f.length*h/d),y=Math.floor(f.length*(h+1)/d);if(y<=g)continue;let P=0,B=0,C=0;for(let v=g;v<y;v++)P+=f[v].r,B+=f[v].g,C+=f[v].b;const U=y-g;l.push([Math.round(P/U),Math.round(B/U),Math.round(C/U)])}const x=a instanceof Map;let u=-1;const _=x?Array.from(a.keys()):Object.keys(a).map(Number);for(const h of _)h>u&&(u=h);const b=s.filter(Boolean).map(h=>at(h));let w=0;for(const h of l){const g=at(h);let y=!1;for(const P of b)if(wt(g,P)<6){y=!0;break}y||(u++,s[u]=h,x?a.set(u,h):a[u]=h,b.push(g),w++)}return w}function pe(t,e,n,r){const o=e*n,s=new Float32Array(o*3),a=new Uint8Array(o*4),i=2*r+1;for(let c=0;c<n;c++){let f=0,p=0,d=0;for(let l=-r;l<=r;l++){const x=l<0?0:l>=e?e-1:l,u=(c*e+x)*4;f+=t[u],p+=t[u+1],d+=t[u+2]}for(let l=0;l<e;l++){const x=(c*e+l)*3;s[x]=f/i,s[x+1]=p/i,s[x+2]=d/i;const u=l+r+1>=e?e-1:l+r+1,_=l-r<0?0:l-r,m=(c*e+u)*4,b=(c*e+_)*4;f+=t[m]-t[b],p+=t[m+1]-t[b+1],d+=t[m+2]-t[b+2]}}for(let c=0;c<e;c++){let f=0,p=0,d=0;for(let l=-r;l<=r;l++){const u=((l<0?0:l>=n?n-1:l)*e+c)*3;f+=s[u],p+=s[u+1],d+=s[u+2]}for(let l=0;l<n;l++){const x=(l*e+c)*4;a[x]=Math.round(f/i),a[x+1]=Math.round(p/i),a[x+2]=Math.round(d/i),a[x+3]=255;const u=l+r+1>=n?n-1:l+r+1,_=l-r<0?0:l-r,m=(u*e+c)*3,b=(_*e+c)*3;f+=s[m]-s[b],p+=s[m+1]-s[b+1],d+=s[m+2]-s[b+2]}}return a}function he(t,e,n,r,o=1){if(!r||o<=0)return t;const s=e*n;let a=0,i=0;for(let u=0;u<s;u++){const _=r[u];if(_>=1.5){i++;continue}_<.3?a++:_>.6&&i++}if(a<s*.1||i<s*.05)return t;const c=Math.max(3,Math.round(Math.max(e,n)/170*o)),f=pe(t,e,n,c),p=new Uint8Array(t.length),d=.3,l=.58,x=1/(l-d);for(let u=0;u<s;u++){let m=((r[u]>=1.5?1:r[u])-d)*x;m=m<0?0:m>1?1:m;const b=m*m*(3-2*m),w=u*4;p[w]=Math.round(t[w]*b+f[w]*(1-b)),p[w+1]=Math.round(t[w+1]*b+f[w+1]*(1-b)),p[w+2]=Math.round(t[w+2]*b+f[w+2]*(1-b)),p[w+3]=t[w+3]}return p}self.onmessage=async function(t){const{type:e}=t.data;if(e==="process"){const{imgBuffer:n,width:r,height:o,numColors:s,detail:a,importanceMap:i,bgSimplify:c}=t.data.payload,f=new Uint8Array(n),p=i?new Float32Array(i):null,d=he(f,r,o,p,typeof c=="number"?c:1),l=(x,u)=>{self.postMessage({type:"progress",msg:x,pct:u})};try{ut||(l("Инициализация ядра...",2),await Mt(),await ft.init(),ut=!0);let x;if(ft.getDevice()){l("Анализ палитры...",5);const m=Math.min(255,Math.floor(s*1.3)+2),b=Vt(d,r,o,m,p),w=[];if(b instanceof Map)b.forEach((y,P)=>w[P]=y);else for(const y of Object.keys(b))w[Number(y)]=b[y];de(d,r,o,s,p,w,b),l("Глубокая фильтрация (WebGPU)...",20);const h=a>=9?1:a>=7?2:a>=4?3:4,g=await ft.runPixelPipeline(d,r,o,w,h,a,p);if(!g)throw new Error("GPU pipeline returned null");l("Векторизация контуров...",70),x=Kt(d,g,r,o,b,a,s,p)}else{l("Векторизация (CPU-резерв)...",10);const m=Math.min(255,Math.floor(s*1.3)+2);x=Zt(d,r,o,m,a,s,p||void 0)}l("Финальная сборка...",95);const{data:u,transfer:_}=kt(x,r,o,a);l("Готово!",100),self.postMessage({type:"result",data:u},_)}catch(x){console.error(x),self.postMessage({type:"error",error:x.message})}}if(e==="revectorize"){const{maskBuffer:n,palette:r,width:o,height:s,detail:a}=t.data.payload;try{ut||(await Mt(),await ft.init(),ut=!0);const i=new Uint8Array(n),c=Qt(i,r,o,s,a),{data:f,transfer:p}=kt(c,o,s,a);self.postMessage({type:"result",data:f},p)}catch(i){console.error(i),self.postMessage({type:"error",error:i.message})}}if(e==="export_svg"){const{res:n,numberWeight:r,colored:o,activeArray:s,showNums:a,isArtisticMode:i,artisticStep:c,artisticPresetId:f,notanLevels:p=2,notanThreshold:d=128,artIntensity:l=100,customArtPalette:x,showContours:u=!0,transparentBg:_}=t.data.payload,{imgW:m,imgH:b,contoursData:w,colorPalette:h}=n,g=new Set(s),y=[...w].sort((T,L)=>L.area-T.area);let P={};for(const[T,L]of Object.entries(h)){const E=Number(T),A=L;i?P[E]=fe(A,c,f||"original",p,d,l,x):P[E]=A}i&&(P=Ft(P));const B=[];if(i?c>0&&c<3:o)for(const T of y){const L=T.points;if(L&&L.length>0){const E=i||g.has(T.labelId),A=P[T.labelId];let G=`M ${L[0][0].toFixed(1)} ${L[0][1].toFixed(1)} `;for(let I=1;I<L.length;I++)G+=`L ${L[I][0].toFixed(1)} ${L[I][1].toFixed(1)} `;G+="Z",B.push(E&&A?`<path d="${G}" fill="rgb(${A[0]},${A[1]},${A[2]})"/>`:`<path d="${G}" fill="white"/>`)}}const U=B.join("");let v="";if((i?c===0||c===3:!0)&&u){const T=n.chains,L=(I,z=60)=>{if(I.length<2)return I;const R=[I[0]];for(let H=1;H<I.length;H++){const[j,D]=I[H-1],[rt,J]=I[H],q=Math.hypot(rt-j,J-D),Z=Math.max(1,Math.ceil(q/z));for(let Q=1;Q<=Z;Q++)R.push([j+(rt-j)*(Q/Z),D+(J-D)*(Q/Z)])}return R},E=I=>{if(I.length<2)return"";const z=L(I,60);let R=`M ${z[0][0].toFixed(1)} ${z[0][1].toFixed(1)}`;if(z.length===2)return R+=` L ${z[1][0].toFixed(1)} ${z[1][1].toFixed(1)}`,R;const H=z.length,j=.15;for(let D=0;D<H-1;D++){const rt=z[D===0?0:D-1],J=z[D],q=z[D+1],Z=z[D+2>=H?H-1:D+2],Q=J[0]+(q[0]-rt[0])*j,Pt=J[1]+(q[1]-rt[1])*j,Bt=q[0]-(Z[0]-J[0])*j,Ct=q[1]-(Z[1]-J[1])*j;R+=` C ${Q.toFixed(1)} ${Pt.toFixed(1)}, ${Bt.toFixed(1)} ${Ct.toFixed(1)}, ${q[0].toFixed(1)} ${q[1].toFixed(1)}`}return R},A=i?"rgba(40,40,40,0.6)":"rgba(40,40,40,0.4)";v=T.map(I=>{const z=E(I);return z?`<path d="${z}" fill="none" stroke="${A}" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round"/>`:""}).join("")}const S=[];if(a&&!i){const T=(.15+r/100*.85).toFixed(2);for(const L of y)for(const E of L.labelPositions){if(E.maxDist<2.5)continue;const A=String(L.labelId+1).length,G=3.27*E.maxDist/A,I=Math.max(5,Math.min(12,E.maxDist*1.2,G)),z=o&&g.has(L.labelId),R=h[L.labelId];let H=`rgba(51,51,51,${T})`;z&&R&&(H=.299*R[0]+.587*R[1]+.114*R[2]>140?`rgba(0,0,0,${T})`:`rgba(255,255,255,${T})`);const j=qt(String(L.labelId+1));S.push(`<text x="${E.x.toFixed(1)}" y="${E.y.toFixed(1)}" font-size="${I.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-weight="bold" fill="${H}">${j}</text>`)}}const N=S.join(""),F=jt({imgW:m,imgH:b,isTransparent:_??(i&&c===3),fills:U,lines:v,texts:N});self.postMessage({type:"export_result",data:F})}if(e==="export_html"){const{res:n,contourWeight:r,isArtisticMode:o,origBase64:s,artisticPresetId:a,notanLevels:i=2,notanThreshold:c=128,artIntensity:f=100,customArtPalette:p}=t.data.payload,{imgW:d,imgH:l,colorPalette:x,validLabels:u,contoursData:_,labelMask:m}=n,b=[...u].sort((v,k)=>v-k),w={};for(const v of b){const k=x[v];k&&(w[v]=k)}const h=Xt(m),g=n.chains,y=JSON.stringify(g.map(v=>v.map(([k,S])=>[Math.round(k*10)/10,Math.round(S*10)/10]))),P=JSON.stringify(_.map(v=>({id:v.labelId,a:v.area,poly:v.points.map(([k,S])=>[Math.round(k*10)/10,Math.round(S*10)/10]),lp:v.labelPositions.filter(k=>k.maxDist>=2.5).map(k=>({x:Math.round(k.x*10)/10,y:Math.round(k.y*10)/10,d:Math.round(k.maxDist*10)/10}))}))),B=String(r===0?"0":(.2+r/100*.8).toFixed(2)),C=String(r===0?"0":(.5+r/100*1.5).toFixed(2));let U="";if(o){const v=p&&p.length>=2?JSON.stringify(p):"null";U=Yt({imgW:d,imgH:l,palJSON:w,chainsJSON:y,maskRLE:h,notanLevels:i,notanThreshold:c,artIntensity:f,artisticPresetId:a||"original",customPalJS:v,origBase64:s})}else{const v=b.map(k=>{const S=x[k];if(!S)return"";const F=.299*S[0]+.587*S[1]+.114*S[2]>140?"#000":"#fff";return`<div id="p${k}" class="cb" onclick="tc(${k})" style="background:rgb(${S[0]},${S[1]},${S[2]});color:${F}" title="Цвет ${k+1}"><span>${k+1}</span></div>`}).join("");U=Wt({imgW:d,imgH:l,palJSON:w,chainsJSON:y,labelsJSON:P,sl:b,lineAlpha:B,lineWidth:C,palButtons:v})}self.postMessage({type:"export_result",data:U})}};
