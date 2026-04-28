function at(t){const e=t/255;return e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92}function kt(t){const e=at(t[0]),l=at(t[1]),o=at(t[2]);return[e*.4124564+l*.3575761+o*.1804375,e*.2126729+l*.7151522+o*.072175,e*.0193339+l*.119192+o*.9503041]}function At(t){const e=[.95047,1,1.08883],l=i=>i>.008856?Math.cbrt(i):7.787*i+16/116,o=l(t[0]/e[0]),n=l(t[1]/e[1]),h=l(t[2]/e[2]);return[116*n-16,500*(o-n),200*(n-h)]}function G(t){return At(kt(t))}function St(t,e,l){const o=(t+16)/116,n=e/500+o,h=o-l/200,i=a=>a>.206897?a*a*a:(a-16/116)/7.787,s=i(n)*.95047,f=i(o),u=i(h)*1.08883,g=s*3.2404542-f*1.5371385-u*.4985314,d=-s*.969266+f*1.8760108+u*.041556,r=s*.0556434-f*.2040259+u*1.0572252,b=a=>Math.max(0,Math.min(255,Math.round((a<=.0031308?12.92*a:1.055*Math.pow(a,1/2.4)-.055)*255)));return[b(g),b(d),b(r)]}function ht(t,e){const[l,o,n]=t,[h,i,s]=e,f=1,u=1,g=1,d=Math.sqrt(o*o+n*n),r=Math.sqrt(i*i+s*s),b=(d+r)/2,a=Math.pow(b,7),c=.5*(1-Math.sqrt(a/(a+Math.pow(25,7)))),p=o*(1+c),y=i*(1+c),w=Math.sqrt(p*p+n*n),m=Math.sqrt(y*y+s*s);let x=Math.atan2(n,p)*(180/Math.PI);x<0&&(x+=360);let v=Math.atan2(s,y)*(180/Math.PI);v<0&&(v+=360);const S=h-l,I=m-w;let B;w*m===0?B=0:Math.abs(v-x)<=180?B=v-x:v-x>180?B=v-x-360:B=v-x+360;const Y=2*Math.sqrt(w*m)*Math.sin(B*Math.PI/360),E=(l+h)/2,j=(w+m)/2;let A;w*m===0?A=x+v:Math.abs(x-v)<=180?A=(x+v)/2:x+v<360?A=(x+v+360)/2:A=(x+v-360)/2;const $=1-.17*Math.cos((A-30)*Math.PI/180)+.24*Math.cos(2*A*Math.PI/180)+.32*Math.cos((3*A+6)*Math.PI/180)-.2*Math.cos((4*A-63)*Math.PI/180),L=1+.015*(E-50)*(E-50)/Math.sqrt(20+(E-50)*(E-50)),M=1+.045*j,k=1+.015*j*$,H=Math.pow(j,7),C=2*Math.sqrt(H/(H+Math.pow(25,7))),P=30*Math.exp(-Math.pow((A-275)/25,2)),F=-Math.sin(2*P*Math.PI/180)*C,z=Math.pow(S/(f*L),2)+Math.pow(I/(u*M),2)+Math.pow(Y/(g*k),2)+F*(I/(u*M))*(Y/(g*k));return z>0?Math.sqrt(z):0}function K(t){const e=t[0]/255,l=t[1]/255,o=t[2]/255,n=Math.max(e,l,o),h=Math.min(e,l,o);let i=0,s=0;const f=(n+h)/2;if(n!==h){const u=n-h;switch(s=f>.5?u/(2-n-h):u/(n+h),n){case e:i=((l-o)/u+(l<o?6:0))/6;break;case l:i=((o-e)/u+2)/6;break;case o:i=((e-l)/u+4)/6;break}}return[i*360,s,f]}function Z(t,e,l){const o=t/360;let n,h,i;if(e<1e-10)n=h=i=l;else{const s=(g,d,r)=>(r<0&&(r+=1),r>1&&(r-=1),r<.16666666666666666?g+(d-g)*6*r:r<.5?d:r<.6666666666666666?g+(d-g)*(.6666666666666666-r)*6:g),f=l<.5?l*(1+e):l+e-l*e,u=2*l-f;n=s(u,f,o+1/3),h=s(u,f,o),i=s(u,f,o-1/3)}return[Math.round(n*255),Math.round(h*255),Math.round(i*255)]}function tt(t){return .299*t[0]+.587*t[1]+.114*t[2]}function $t(t){return(t%360+360)%360}function J(t){return Math.max(0,Math.min(1,t))}function R(t,e,l){return t+(e-t)*l}function vt(t,e,l){return[Math.round(R(t[0],e[0],l)),Math.round(R(t[1],e[1],l)),Math.round(R(t[2],e[2],l))]}function ot(t,e,l){let o=e-t;return o>180&&(o-=360),o<-180&&(o+=360),$t(t+o*l)}function ft(t){const e=tt(t),l=220,o=.35,n=35,h=.55,i=.15,s=J(e/255);let f,u;if(s<.3){const d=s/.3;f=ot(l,n,d*.3),u=R(o,i,d)}else if(s>.7){const d=(s-.7)/.3;f=ot(n*.3,n,d),u=R(i,h,d)}else{const d=(s-.3)/.4;f=ot(l*.1,n*.2,d),u=i}const g=R(.15,.85,s);return Z(f,u,g)}function Ct(t){const[e,l]=K(t),o=tt(t),h=((e+120)%360+360)%360,i=R(.85,1,l),s=J(o/255),f=s<.5?R(.1,.5,s*2)*.8:R(.5,.9,(s-.5)*2)*1.15;return Z(h,i,J(f))}function Lt(t){const[e,l,o]=K(t),n=[-25,-12,0,12,25],h=Math.min(4,Math.floor(e%360/72)),i=n[h],s=((e+i)%360+360)%360,f=R(.55,.9,l),u=Math.max(.25,o)*1.12;return Z(s,f,J(u))}function Ht(t){const[e,l]=K(t),o=tt(t),n=J(o/255);if(l>.5&&o>120){const u=[180,300,270],g=Math.min(2,Math.floor(n*3));return Z(u[g],.95,.65)}const i=210,s=R(.08,.35,n),f=R(.08,.45,n);return Z(i,s,f)}function It(t){const[e,l,o]=K(t),n=tt(t),h=J(n/255),i=35,s=R(.75,.55,h),f=ot(e,i,s),u=o*.15+l*(1-s)*.35,g=o*.88;return Z(f,J(u),J(g))}function Bt(t){const e=tt(t),l=J(e/255),o=[[255,0,100],[0,200,255],[255,200,0],[150,0,255],[0,255,150],[255,100,0]],n=l*(o.length-1),h=Math.floor(n),i=n-h,s=Math.min(o.length-2,Math.max(0,h));return vt(o[s],o[s+1],i)}function Pt(t,e){if(e.length===0)return t;const l=G(t);let o=e[0],n=1/0;for(const h of e){const i=G(h),s=ht(l,i);s<n&&(n=s,o=h)}return o}const Tt={2:[[30,41,59],[248,250,252]],3:[[15,23,42],[148,163,184],[248,250,252]],4:[[15,23,42],[71,85,105],[203,213,225],[248,250,252]],5:[[15,23,42],[51,65,85],[148,163,184],[226,232,240],[248,250,252]]};function zt(t,e,l=128){const o=tt(t),n=Math.max(2,Math.min(5,e)),h=Tt[n];if(n===2)return o>l?h[1]:h[0];const i=256/n,s=Math.min(n-1,Math.floor(o/i));return h[s]}function yt(t,e,l){const o=J(l/100);return vt(t,e,o)}function Et(t,e,l=100,o){let n;switch(e){case"warm_cool":n=ft(t);break;case"fauvism":n=Ct(t);break;case"impressionism":n=Lt(t);break;case"noir":n=Ht(t);break;case"vintage":n=It(t);break;case"pop_art":n=Bt(t);break;case"custom_palette":n=ft(t);break;default:n=ft(t)}return l<100?yt(t,n,l):n}function jt(t){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${t.imgW} ${t.imgH}" width="${t.imgW}" height="${t.imgH}">
<rect width="${t.imgW}" height="${t.imgH}" fill="${t.isTransparent?"transparent":"white"}"/>
<g>${t.fills}</g><g>${t.lines}</g><g>${t.texts}</g>
</svg>`}function Ft(t){return`<!DOCTYPE html>
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
@media (max-width: 640px) { .zu { display: none !important; } }
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
var notanLevels=${t.notanLevels},notanThreshold=${t.notanThreshold},artIntensity=${t.artIntensity},preset="${t.preset}";
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
var p2=[[30,41,59],[248,250,252]], p3=[[15,23,42],[148,163,184],[248,250,252]];
if(notanLevels===2) return lum>notanThreshold?p2[1]:p2[0];
var idx=Math.min(notanLevels-1,Math.floor(lum/(256/notanLevels)));
return p3[idx]||p3[0];
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
function draw(){
  ctx.fillStyle = "#ffffff"; ctx.fillRect(0,0,W,H);
  if(step===3&&img&&img.src.length>20){ctx.globalAlpha=0.15;ctx.drawImage(img,0,0,W,H);ctx.globalAlpha=1;}
  if(step===1||step===2){
    var id=ctx.createImageData(W,H),d=id.data;
    for(var i=0; i<W*H; i++){
      var c=pal[mask[i]]; if(!c){d[i*4]=d[i*4+1]=d[i*4+2]=255;d[i*4+3]=255;continue;}
      var nr=c[0],ng=c[1],nb=c[2];
      if(step===1){var nc=notanColor(nr,ng,nb);nr=nc[0];ng=nc[1];nb=nc[2];}
      else{
        if(preset!=="original"){
          var p=customPal&&customPal.length>=2?nearestCustom(nr,ng,nb):applyPresetColor(nr,ng,nb,preset);
          var t=artIntensity/100; nr=nr+(p[0]-nr)*t; ng=ng+(p[1]-ng)*t; nb=nb+(p[2]-nb)*t;
        }
      }
      d[i*4]=nr;d[i*4+1]=ng;d[i*4+2]=nb;d[i*4+3]=255;
    }
    ctx.putImageData(id,0,0);
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
<\/script></body></html>`}function Yt(t){return`<!DOCTYPE html>
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
.vp::before { content: ''; position: absolute; inset: 0; background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4jtfAAAABlBMVEUAAAD///+l2Z/dAAAAbUlEQVR4Xu3XMQ4AIAgEQTr//9G9AbeSxcY6m8S0S86ZzB3H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9p7H9v4B738CcAEdOToAAAAASUVORK5CYII='); opacity: 0.05; pointer-events: none; }
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
var W=${t.imgW}, H=${t.imgH}, pal=${JSON.stringify(t.palJSON)}, chains=${t.chainsJSON}, lbls=${t.labelsJSON}, maskRLE="${t.maskRLE}", ids=[${t.sl.join(",")}];
var ac=new Set(), sn=true, lineAlpha=${t.lineAlpha}, lineWidth=${t.lineWidth};
var raw=atob(maskRLE), mask=new Uint8Array(W*H), mi=0;
for(var ri=0;ri<raw.length;ri+=2){var v=raw.charCodeAt(ri), cnt=raw.charCodeAt(ri+1); for(var ci=0;ci<cnt;ci++){if(mi<mask.length) mask[mi++]=v;}}

var cv=document.getElementById("cv"), ctx=cv.getContext("2d", { alpha: false });
cv.width=W*2; cv.height=H*2; cv.style.width=W+"px"; cv.style.height=H+"px";
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
    ctx.save(); ctx.scale(2,2); ctx.lineJoin="round";
    var slb = [...lbls].sort((a,b)=>b.a - a.a);
    for(var k=0; k<slb.length; k++){
      var lb=slb[k], id=lb.id;
      if(ac.has(id)){
        var c=pal[id]; if(!c) continue;
        ctx.fillStyle="rgb("+c[0]+","+c[1]+","+c[2]+")";
        ctx.strokeStyle=ctx.fillStyle; ctx.lineWidth=0.6;
        if(lb.poly && lb.poly.length>0){
          ctx.beginPath(); ctx.moveTo(lb.poly[0][0],lb.poly[0][1]);
          for(var p=1; p<lb.poly.length; p++) ctx.lineTo(lb.poly[p][0],lb.poly[p][1]);
          ctx.closePath(); ctx.fill(); ctx.stroke();
        }
      }
    }
    ctx.restore();
  }
  
  ctx.save(); ctx.scale(2,2);
  ctx.strokeStyle = "rgba(40,40,40,"+lineAlpha+")";
  ctx.lineWidth = lineWidth / Math.max(1, sc/2);
  ctx.lineCap="round"; ctx.lineJoin="round";
  for(var i=0; i<chains.length; i++){
    var ch=chains[i]; if(ch.length<2)continue;
    ctx.beginPath(); ctx.moveTo(ch[0][0],ch[0][1]);
    for(var j=1; j<ch.length; j++) ctx.lineTo(ch[j][0],ch[j][1]);
    ctx.stroke();
  }
  if(sn){
    ctx.textAlign="center"; ctx.textBaseline="middle";
    var numCol = "rgba(51,65,85,0.7)";
    for(var i=0; i<lbls.length; i++){
      var cd=lbls[i]; for(var j=0; j<cd.lp.length; j++){
        var lp=cd.lp[j]; if(lp.d < 2.5/Math.max(0.5, sc)) continue;
        var fs = Math.max(6, Math.min(16, lp.d*1.2)) / Math.max(1, sc/4); ctx.font="bold "+fs+"px sans-serif";
        var isAct = ac.has(cd.id), col = pal[cd.id];
        if(isAct&&col){
          var lum = .299*col[0]+.587*col[1]+.114*col[2];
          ctx.fillStyle = lum>140 ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.9)";
        } else { ctx.fillStyle = numCol; }
        ctx.fillText(String(cd.id+1), lp.x, lp.y);
      }}
  }
  ctx.restore();
}
var lt = 0, lc = -1, clickTimer = null;
function tc(i){
  var now = Date.now();
  if (lc === i && (now - lt) < 300) {
    clearTimeout(clickTimer);
    ac.clear();
    document.querySelectorAll(".cb").forEach(e=>e.classList.remove("sel"));
    ac.add(i);
    document.getElementById("p"+i).classList.add("sel");
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
    }, 300);
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
<\/script></body></html>`}function Wt(t,e,l,o){const n=e*l,h=[],i=Math.max(1,Math.floor(n/1e5));for(let r=0;r<n;r+=i){const b=r*4,a=t[b],c=t[b+1],p=t[b+2],y=Math.max(a,c,p),w=Math.min(a,c,p),m=y>0?(y-w)/y:0,x=1+Math.floor(m*3);for(let v=0;v<x;v++)h.push(a,c,p)}const s=new Uint8Array(h),f=r=>{let b=255,a=0,c=255,p=0,y=255,w=0;for(let m=0;m<r.length;m+=3){const x=r[m],v=r[m+1],S=r[m+2];x<b&&(b=x),x>a&&(a=x),v<c&&(c=v),v>p&&(p=v),S<y&&(y=S),S>w&&(w=S)}return{colors:r,count:r.length/3,rMin:b,rMax:a,gMin:c,gMax:p,bMin:y,bMax:w}};let u=[f(s)];const g=Math.min(o*2.5,300);for(;u.length<g;){let r=0,b=-1;for(let x=0;x<u.length;x++){const v=u[x];if(v.count<2)continue;const S=Math.max(v.rMax-v.rMin,v.gMax-v.gMin,v.bMax-v.bMin)*Math.log2(v.count+1);S>b&&(b=S,r=x)}if(b<=0)break;const a=u[r],c=a.rMax-a.rMin>=a.gMax-a.gMin&&a.rMax-a.rMin>=a.bMax-a.bMin?0:a.gMax-a.gMin>=a.bMax-a.bMin?1:2,p=[];for(let x=0;x<a.colors.length;x+=3)p.push([a.colors[x],a.colors[x+1],a.colors[x+2]]);p.sort((x,v)=>x[c]-v[c]);const y=Math.floor(p.length/2),w=new Uint8Array(y*3),m=new Uint8Array((p.length-y)*3);for(let x=0;x<y;x++)w[x*3]=p[x][0],w[x*3+1]=p[x][1],w[x*3+2]=p[x][2];for(let x=y;x<p.length;x++){const v=x-y;m[v*3]=p[x][0],m[v*3+1]=p[x][1],m[v*3+2]=p[x][2]}u.splice(r,1,f(w),f(m))}const d=u.map(r=>{let b=0,a=0,c=0;for(let p=0;p<r.colors.length;p+=3)b+=r.colors[p],a+=r.colors[p+1],c+=r.colors[p+2];return[Math.round(b/r.count),Math.round(a/r.count),Math.round(c/r.count)]});return Dt(d,t,e,l,o)}function Dt(t,e,l,o,n){const h=l*o,i=Math.max(1,Math.floor(h/4e4));let s=[t[0]],f=[G(t[0])];for(;s.length<n&&s.length<t.length;){let d=-1,r=0;for(let b=0;b<t.length;b++){const a=G(t[b]);let c=1/0;for(const p of f){const y=(a[0]-p[0])**2+(a[1]-p[1])**2+(a[2]-p[2])**2;y<c&&(c=y)}c>d&&(d=c,r=b)}s.push(t[r]),f.push(G(t[r]))}for(let d=0;d<4;d++){const r=new Float64Array(n),b=new Float64Array(n),a=new Float64Array(n),c=new Float64Array(n);for(let p=0;p<h;p+=i){const y=p*4,w=e[y],m=e[y+1],x=e[y+2],v=G([w,m,x]);let S=1/0,I=0;for(let j=0;j<s.length;j++){const A=(v[0]-f[j][0])**2+(v[1]-f[j][1])**2+(v[2]-f[j][2])**2;A<S&&(S=A,I=j)}const B=Math.max(w,m,x),Y=Math.min(w,m,x),E=1+(B>0?(B-Y)/B:0)*3;r[I]+=v[0]*E,b[I]+=v[1]*E,a[I]+=v[2]*E,c[I]+=E}for(let p=0;p<s.length;p++)c[p]>0&&(f[p]=[r[p]/c[p],b[p]/c[p],a[p]/c[p]],s[p]=St(f[p][0],f[p][1],f[p][2]))}const u=[],g=new Set;for(let d=0;d<s.length;d++)if(!g.has(d)){for(let r=d+1;r<s.length;r++){if(g.has(r))continue;const b=ht(f[d],f[r]),[a,c]=K(s[d]),p=c>.4?2.5:4.5;b<p&&g.add(r)}u.push(s[d])}return u.map(d=>{const[r,b,a]=K(d);if(b<.05)return d;const c=Math.min(1,b*1.08),p=a<.5?a*.96:Math.min(1,a*1.02);return Z(r,c,p)})}function Xt(t,e,l,o){if(o<=0)return t;const n=new Uint8ClampedArray(t.length),h=o,i=30;for(let s=0;s<l;s++)for(let f=0;f<e;f++){const u=(s*e+f)*4,g=t[u],d=t[u+1],r=t[u+2];let b=0,a=0,c=0,p=0;const y=Math.max(0,s-o),w=Math.min(l-1,s+o),m=Math.max(0,f-o),x=Math.min(e-1,f+o);for(let v=y;v<=w;v++)for(let S=m;S<=x;S++){const I=(v*e+S)*4,B=t[I],Y=t[I+1],E=t[I+2],j=(S-f)*(S-f)+(v-s)*(v-s),A=(B-g)*(B-g)+(Y-d)*(Y-d)+(E-r)*(E-r),$=Math.exp(-(j/(2*h*h))-A/(2*i*i));b+=$,a+=B*$,c+=Y*$,p+=E*$}n[u]=Math.round(a/b),n[u+1]=Math.round(c/b),n[u+2]=Math.round(p/b),n[u+3]=255}return n}function xt(t,e,l,o,n){if(o<=1)return t;const h=e*l,i=new Int32Array(h),s=new Int32Array(h);for(let f=0;f<2;f++){i.fill(-1);const u=[];let g=0;for(let c=0;c<h;c++)if(i[c]===-1){const p=t[c];let y=0,w=0;s[w++]=c,i[c]=g;let m=0;for(;y<w;){const x=s[y++];m++;const v=x%e,S=x/e|0;v>0&&i[x-1]===-1&&t[x-1]===p&&(i[x-1]=g,s[w++]=x-1),v<e-1&&i[x+1]===-1&&t[x+1]===p&&(i[x+1]=g,s[w++]=x+1),S>0&&i[x-e]===-1&&t[x-e]===p&&(i[x-e]=g,s[w++]=x-e),S<l-1&&i[x+e]===-1&&t[x+e]===p&&(i[x+e]=g,s[w++]=x+e)}u.push({area:m,color:p,label:g}),g++}const d=u.filter(c=>c.area<o);if(d.length===0)break;const r=new Map;for(const c of d)r.set(c.label,new Map);for(let c=0;c<h;c++){const p=i[c];if(r.has(p)){const y=c%e,w=c/e|0,m=r.get(p),x=v=>{if(i[v]!==p){const I=t[v];m.set(I,(m.get(I)||0)+1)}};y>0&&x(c-1),y<e-1&&x(c+1),w>0&&x(c-e),w<l-1&&x(c+e)}}let b=!1;const a=new Map;for(const c of d){const p=r.get(c.label);if(p.size===0)continue;let y=c.color,w=-1;for(const[m,x]of p.entries()){let v=x;if(n){const S=ht(n[c.color],n[m]);v=x*(100/(S+5))}v>w&&(w=v,y=m)}y!==c.color&&(a.set(c.label,y),b=!0)}if(!b)break;for(let c=0;c<h;c++){const p=i[c];a.has(p)&&(t[c]=a.get(p))}}return t}function Rt(t,e,l,o){if(o<=1.2)return t;const n=e*l,h=new Uint8Array(t),i=new Float32Array(n).fill(100),s=new Int32Array(n);let f=0,u=0;for(let r=0;r<l;r++)for(let b=0;b<e;b++){const a=r*e+b;let c=!1;(b>0&&t[a-1]!==t[a]||b<e-1&&t[a+1]!==t[a]||r>0&&t[a-e]!==t[a]||r<l-1&&t[a+e]!==t[a])&&(c=!0),c&&(i[a]=0,s[u++]=a)}for(;f<u;){const r=s[f++],b=r%e,a=r/e|0,c=i[r];for(let p=-1;p<=1;p++)for(let y=-1;y<=1;y++){if(y===0&&p===0)continue;const w=b+y,m=a+p;if(w>=0&&w<e&&m>=0&&m<l){const x=m*e+w,v=c+(y===0||p===0?1:1.4);i[x]>v&&(i[x]=v,s[u++]=x)}}}const g=o/2,d=new Uint8Array(n);for(let r=0;r<n;r++)i[r]>0&&i[r]<g&&(d[r]=1);for(let r=0;r<2;r++){const b=new Uint8Array(h);for(let a=0;a<n;a++)if(d[a]){const c=h[a],p=a%e,y=a/e|0;for(let w=-1;w<=1;w++)for(let m=-1;m<=1;m++){const x=(y+w)*e+(p+m);if(x>=0&&x<n&&i[x]<=.1&&h[x]!==c){const v=x+(x-a);v>=0&&v<n&&!d[v]&&(b[x]=c)}}}h.set(b)}return h}function qt(t,e,l,o){const n=new Uint8Array(t.length),h=Math.max(o+2,256),i=new Uint16Array(h);for(let s=0;s<l;s++)for(let f=0;f<e;f++){i.fill(0);for(let d=-1;d<=1;d++){const r=s+d;if(!(r<0||r>=l))for(let b=-1;b<=1;b++){const a=f+b;a<0||a>=e||i[t[r*e+a]]++}}let u=t[s*e+f],g=0;for(let d=0;d<h;d++)i[d]>g&&(g=i[d],u=d);n[s*e+f]=u}return n}function Nt(t,e,l){const o=[];for(let i=1;i<l;i++){let s=0;for(;s<e;){const f=t[i*e+s],u=t[(i-1)*e+s];if(f!==u){const g=s;for(s++;s<e&&t[i*e+s]===f&&t[(i-1)*e+s]===u;)s++;o.push([g,i,s,i])}else s++}}for(let i=1;i<e;i++){let s=0;for(;s<l;){const f=t[s*e+i],u=t[s*e+i-1];if(f!==u){const g=s;for(s++;s<l&&t[s*e+i]===f&&t[s*e+i-1]===u;)s++;o.push([i,g,i,s])}else s++}}let n=0;for(;n<e;){const i=t[n],s=n;for(n++;n<e&&t[n]===i;)n++;o.push([s,0,n,0])}for(n=0;n<e;){const i=t[(l-1)*e+n],s=n;for(n++;n<e&&t[(l-1)*e+n]===i;)n++;o.push([s,l,n,l])}let h=0;for(;h<l;){const i=t[h*e],s=h;for(h++;h<l&&t[h*e]===i;)h++;o.push([0,s,0,h])}for(h=0;h<l;){const i=t[h*e+e-1],s=h;for(h++;h<l&&t[h*e+e-1]===i;)h++;o.push([e,s,e,h])}return o}function bt(t,e,l,o,n){const h=o>0&&n>0&&t[(n-1)*e+(o-1)]?1:0,i=o<e&&n>0&&t[(n-1)*e+o]?1:0,s=o>0&&n<l&&t[n*e+(o-1)]?1:0,f=o<e&&n<l&&t[n*e+o]?1:0;return h<<3|i<<2|f<<1|s}function Ut(t,e){switch(t){case 1:return 2;case 2:return 1;case 3:return 2;case 4:return 0;case 5:return e===1?0:2;case 6:return 1;case 7:return 2;case 8:return 3;case 9:return 3;case 10:return e===2?1:3;case 11:return 3;case 12:return 0;case 13:return 0;case 14:return 1;default:return-1}}function Ot(t,e,l){const o=[];let n=-1,h=-1;t:for(let g=0;g<=l;g++)for(let d=0;d<=e;d++){const r=bt(t,e,l,d,g);if(r>0&&r<15){n=d,h=g;break t}}if(n<0)return[];let i=n,s=h,f=0;const u=e*l*4;for(let g=0;g<u&&!(g>0&&i===n&&s===h);g++){o.push([i,s]);const d=bt(t,e,l,i,s),r=Ut(d,f);if(r<0)break;switch(r){case 0:i++;break;case 1:s++;break;case 2:i--;break;case 3:s--;break}if(f=r,i<-1||i>e+1||s<-1||s>l+1)break}return o}function Jt(t,e,l){const o=e*l,n=new Float32Array(o).fill(-1),h=new Int32Array(o);let i=0,s=0;for(let g=0;g<l;g++)for(let d=0;d<e;d++){const r=g*e+d;if(!t[r])continue;let b=d===0||g===0||d===e-1||g===l-1;if(!b)for(let a=-1;a<=1;a++){for(let c=-1;c<=1;c++)if(!(c===0&&a===0)&&!t[(g+a)*e+(d+c)]){b=!0;break}if(b)break}b&&(n[r]=0,h[s++]=r)}for(;i<s;){const g=h[i++],d=g%e,r=g/e|0,b=n[g];for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++){if(c===0&&a===0)continue;const p=d+c,y=r+a;if(p>=0&&p<e&&y>=0&&y<l){const w=y*e+p;if(t[w]&&n[w]<0){const m=c!==0&&a!==0?1.414:1;n[w]=b+m,h[s++]=w}}}}let f=0,u=[0,0];for(let g=0;g<o;g++)n[g]>f&&(f=n[g],u=[g%e,g/e|0]);return{dist:n,maxDist:f,maxLoc:u}}function _t(t,e,l,o,n,h,i){const s=[];if(h<2)return s;if(i<1500||h<10){let r=0,b=0,a=0;for(let c=0;c<t.length;c++)t[c]>r&&(r=t[c],b=c%e,a=c/e|0);return s.push({x:b+o,y:a+n,maxDist:r}),s}const f=Math.max(50,h*3.5),u=Math.max(4,h*.4),g=[],d=Math.max(2,Math.floor(f/4));for(let r=0;r<l;r+=d)for(let b=0;b<e;b+=d){const a=t[r*e+b];if(a<u)continue;let c=!0;const p=Math.ceil(d*1.5);for(let y=-p;y<=p&&c;y+=d)for(let w=-p;w<=p;w+=d){if(w===0&&y===0)continue;const m=b+w,x=r+y;if(m>=0&&m<e&&x>=0&&x<l&&t[x*e+m]>a+.1){c=!1;break}}c&&g.push({x:b,y:r,d:a})}g.sort((r,b)=>b.d-r.d);for(const r of g){let b=!1;for(const a of s){const c=r.x+o-a.x,p=r.y+n-a.y;if(c*c+p*p<f*f){b=!0;break}}b||s.push({x:r.x+o,y:r.y+n,maxDist:r.d})}if(s.length===0){let r=0,b=0,a=0;for(let c=0;c<t.length;c++)t[c]>r&&(r=t[c],b=c%e,a=c/e|0);s.push({x:b+o,y:a+n,maxDist:r})}return s}function Vt(t,e,l,o){const n=[],h=[];for(const i of t)for(const s of i.labelPositions)s.maxDist<2||h.push({lbl:s,id:i.labelId,area:i.area});h.sort((i,s)=>i.area-s.area);for(const i of h){const{lbl:s}=i,u=Math.max(6,Math.min(14,s.maxDist*1.2))*.7;let g=s.x,d=s.y;for(let r=0;r<10;r++){let b=!1,a=g,c=d;for(const p of n){const y=a-p.x,w=c-p.y,m=u+p.r+2;if(y*y+w*w<m*m){const x=Math.sqrt(y*y+w*w)||1,v=(m-x)/x;a+=y*v*.6,c+=w*v*.6,b=!0}}if(b){const p=Math.floor(a),y=Math.floor(c);if(p>=0&&p<e&&y>=0&&y<l&&o[y*e+p]===i.id)g=a,d=c;else break}else break}s.x=g,s.y=d,n.push({x:g,y:d,r:u,id:i.id})}}function Gt(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Qt(t){const e=[];let l=0;for(;l<t.length;){const o=t[l];let n=1;for(;l+n<t.length&&t[l+n]===o&&n<255;)n++;e.push(String.fromCharCode(o,n)),l+=n}return btoa(e.join(""))}function Q(t,e){if(t.length<=2)return t;const l=new Uint8Array(t.length);l[0]=1,l[t.length-1]=1;const o=[[0,t.length-1]];for(;o.length;){const[n,h]=o.pop();if(h-n<2)continue;let i=0,s=n;const[f,u]=t[n],[g,d]=t[h],r=g-f,b=d-u,a=Math.sqrt(r*r+b*b);for(let c=n+1;c<h;c++){const[p,y]=t[c],w=a>0?Math.abs(b*p-r*y+g*u-d*f)/a:Math.hypot(p-f,y-u);w>i&&(i=w,s=c)}i>e&&(l[s]=1,o.push([n,s],[s,h]))}return t.filter((n,h)=>l[h])}function st(t,e=2,l=.8){if(t.length<3)return t;let o=t;for(let n=0;n<e;n++){const h=[o[0]],i=o.length;for(let s=1;s<i-1;s++){const f=o[s-1],u=o[s],g=o[s+1],d=f[0]-u[0],r=f[1]-u[1],b=g[0]-u[0],a=g[1]-u[1],c=Math.sqrt(d*d+r*r)||1,p=Math.sqrt(b*b+a*a)||1;(d*b+r*a)/(c*p)<l?h.push([(f[0]+u[0]*2+g[0])/4,(f[1]+u[1]*2+g[1])/4]):h.push([u[0],u[1]])}h.push(o[i-1]),o=h}return o}function mt(t,e=.1,l=4){const o=new Map,n=new Map;for(const[i,s,f,u]of t){const g=`${i},${s}`,d=`${f},${u}`;o.has(g)||o.set(g,[]),o.has(d)||o.set(d,[]),o.get(g).push(d),o.get(d).push(g)}for(const[i,s]of o)n.set(i,s.length);const h=[];for(const[i,s]of o)if(n.get(i)!==2)for(;o.get(i).length>0;){const f=[];let u=i;for(f.push(u.split(",").map(Number));;){const g=o.get(u);if(g.length===0)break;const d=g.shift(),r=o.get(d),b=r.indexOf(u);if(b>-1&&r.splice(b,1),f.push(d.split(",").map(Number)),n.get(d)!==2||d===i)break;u=d}f.length>1&&h.push(f)}for(const[i,s]of o)for(;o.get(i).length>0;){const f=[];let u=i;const g=i;for(f.push(u.split(",").map(Number));;){const d=o.get(u);if(d.length===0)break;const r=d.shift(),b=o.get(r),a=b.indexOf(u);if(a>-1&&b.splice(a,1),f.push(r.split(",").map(Number)),r===g)break;u=r}f.length>1&&h.push(f)}return h.map(i=>st(Q(i,e),l))}function Zt(t,e,l,o,n,h,i){if(e===1)return zt(t,o,n);if(e===2){if(l==="original")return t;if(i&&i.length>=2){const s=Pt(t,i);return h<100?yt(t,s,h):s}return Et(t,l,h)}else return t}self.onmessage=function(t){const{type:e}=t.data;if(e==="process"){const{imgBuffer:l,width:o,height:n,numColors:h,detail:i}=t.data.payload,s=new Uint8ClampedArray(l),f=o*n,u=(g,d)=>{self.postMessage({type:"progress",msg:g,pct:d})};try{u("Подбор палитры…",5);const g=Wt(s,o,n,Math.max(2,Math.min(h,250))),d=g.length,r=g.map(M=>G(M));u("Подготовка (Сглаживание)…",10);const b=i>=9?1:i>=7?2:i>=4?3:4,a=Xt(s,o,n,b);u("Присвоение цветов…",20);const c=new Uint8Array(f);for(let M=0;M<f;M++){const k=M*4,H=G([a[k],a[k+1],a[k+2]]);let C=1/0,P=0;for(let F=0;F<d;F++){const z=H[0]-r[F][0],W=H[1]-r[F][1],X=H[2]-r[F][2],U=z*z+W*W*1.1+X*X*1.1;U<C&&(C=U,P=F)}c[M]=P}const p=f/5e5,y=Math.max(8,Math.round(p*(12-i)*(12-i)));u("Быстрое объединение мелких зон…",30);const w=xt(c,o,n,y,r);u("Фильтрация шума…",50);let m=w;const x=i<=4?4:i<=7?3:2;for(let M=0;M<x;M++)m=qt(m,o,n,d);u("Устранение узких зон…",55);const v=i<=4?3:i<=7?2.4:2;m=Rt(m,o,n,v),u("Финальная очистка мелких артефактов…",58),m=xt(m,o,n,y,r),u("Построение границ…",59);const S=Nt(m,o,n),I=new Map;for(let M=0;M<S.length;M++){const k=S[M],H=`${k[0]},${k[1]}`,C=`${k[2]},${k[3]}`;I.set(H,(I.get(H)||0)+1),I.set(C,(I.get(C)||0)+1)}const B=new Set;for(const[M,k]of I)k!==2&&B.add(M);B.add("0,0"),B.add(`${o},0`),B.add(`0,${n}`),B.add(`${o},${n}`),u("Трассировка контуров…",60);const Y=[],E=new Set;for(let M=0;M<f;M++)E.add(m[M]);const j=M=>{const k=new Int32Array(f).fill(-1),H=new Int32Array(f);let C=0;for(let P=0;P<f;P++)if(m[P]===M&&k[P]===-1){let F=0,z=0;H[z++]=P,k[P]=C;let W=0,X=o,U=n,it=-1,rt=-1;for(;F<z;){const T=H[F++];W++;const q=T%o,O=Math.floor(T/o);q<X&&(X=q),q>it&&(it=q),O<U&&(U=O),O>rt&&(rt=O),q>0&&m[T-1]===M&&k[T-1]===-1&&(k[T-1]=C,H[z++]=T-1),q<o-1&&m[T+1]===M&&k[T+1]===-1&&(k[T+1]=C,H[z++]=T+1),O>0&&m[T-o]===M&&k[T-o]===-1&&(k[T-o]=C,H[z++]=T-o),O<n-1&&m[T+o]===M&&k[T+o]===-1&&(k[T+o]=C,H[z++]=T+o)}if(W>0){const T=it-X+1,q=rt-U+1,O=new Uint8Array(T*q);for(let N=0;N<q;N++)for(let _=0;_<T;_++)k[(U+N)*o+(X+_)]===C&&(O[N*T+_]=1);const dt=Ot(O,T,q);if(dt.length>=3){const N=dt.map(([D,nt])=>[D+X,nt+U]);let _=-1;for(let D=0;D<N.length;D++)if(B.has(`${N[D][0]},${N[D][1]}`)){_=D;break}let et=[];if(_===-1)et=st(Q(N,.1),4);else{const D=N.slice(_).concat(N.slice(0,_));D.push(D[0]);const nt=[];let ct=[D[0]];for(let V=1;V<D.length;V++)ct.push(D[V]),B.has(`${D[V][0]},${D[V][1]}`)&&(nt.push(ct),ct=[D[V]]);for(const V of nt){const gt=st(Q(V,.1),4);for(let lt=0;lt<gt.length-1;lt++)et.push(gt[lt])}}const{dist:Mt,maxDist:ut,maxLoc:pt}=Jt(O,T,q),wt=_t(Mt,T,q,X,U,ut,W);Y.push({points:et,smoothPoints:et,labelId:M,center:[pt[0]+X,pt[1]+U],maxDist:ut,area:W,labelPositions:wt})}}C++}};for(let M=0;M<d;M++)j(M),u(`Трассировка… ${M+1}/${d}`,60+Math.round(M/d*28));Y.sort((M,k)=>k.area-M.area),Vt(Y,o,n,m),u("Построение превью…",90);const A=new Uint8ClampedArray(f*4);for(let M=0;M<f;M++){const k=m[M]<d?g[m[M]]:[255,255,255];A[M*4]=k[0],A[M*4+1]=k[1],A[M*4+2]=k[2],A[M*4+3]=255}const $={};for(let M=0;M<d;M++)$[M]=g[M];u("Готово!",100);const L=new Float32Array(S.flat()).buffer;self.postMessage({type:"result",data:{previewBuffer:A.buffer,imgW:o,imgH:n,contoursData:Y,colorPalette:$,validLabels:Array.from(E),scaleFactor:1,autoColors:d,autoDetail:i,labelMaskBuffer:m.buffer,boundaryEdgesBuffer:L}},[A.buffer,m.buffer,L])}catch(g){self.postMessage({type:"error",error:g.message})}}if(e==="export_svg"){const{res:l,contourWeight:o,numberWeight:n,colored:h,activeArray:i,showNums:s,isArtisticMode:f,artisticStep:u,artisticPresetId:g,notanLevels:d=2,notanThreshold:r=128,artIntensity:b=100,customArtPalette:a}=t.data.payload,{imgW:c,imgH:p,contoursData:y,colorPalette:w,boundaryEdges:m}=l,x=new Set(i),v=[...y].sort((L,M)=>M.area-L.area),S={},I=g||"original";for(const[L,M]of Object.entries(w)){const k=Number(L),H=M;f?S[k]=Zt(H,u,I,d,r,b,a):S[k]=H}let B="";if(f?u>0&&u<3:h)for(const L of v){const M=st(Q(L.points,.4),3);if(M&&M.length>0){const k=f||x.has(L.labelId),H=S[L.labelId];let C=`M ${M[0][0].toFixed(1)} ${M[0][1].toFixed(1)} `;for(let P=1;P<M.length;P++)C+=`L ${M[P][0].toFixed(1)} ${M[P][1].toFixed(1)} `;C+="Z",B+=k&&H?`<path d="${C}" fill="rgb(${H[0]},${H[1]},${H[2]})" stroke="none"/>`:`<path d="${C}" fill="white" stroke="none"/>`}}let E="";if(f?u===0||u===3:!0){const L=m.filter(k=>!(k[0]===0&&k[1]===0&&k[2]===c&&k[3]===0)&&!(k[0]===0&&k[1]===p&&k[2]===c&&k[3]===p)&&!(k[0]===0&&k[1]===0&&k[2]===0&&k[3]===p)&&!(k[0]===c&&k[1]===0&&k[2]===c&&k[3]===p)),M=mt(L);if(f&&u===3&&o>0)E=M.map(H=>{const C=Q(H,.1);if(C.length<2)return"";let P=`M ${C[0][0].toFixed(1)} ${C[0][1].toFixed(1)}`;for(let W=1;W<C.length;W++)P+=` L ${C[W][0].toFixed(1)} ${C[W][1].toFixed(1)}`;const F=`<path d="${P}" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,z=`<path d="${P}" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round"/>`;return F+z}).join("");else{const k=o===0?"0":(f?.6:.2+o/100*.8).toFixed(2),H=o===0?"0":(f?1:.5+o/100*1.5).toFixed(2),C=`rgba(40,40,40,${k})`;E=M.map(F=>{const z=Q(F,.1);if(z.length<2)return"";let W=`M ${z[0][0].toFixed(1)} ${z[0][1].toFixed(1)}`;for(let X=1;X<z.length;X++)W+=` L ${z[X][0].toFixed(1)} ${z[X][1].toFixed(1)}`;return`<path d="${W}" fill="none" stroke="${C}" stroke-width="${H}" stroke-linecap="round" stroke-linejoin="round"/>`}).join("")}}let A="";if(s&&!f){const L=(n===0?0:.15+n/100*.85).toFixed(2);for(const M of v)for(const k of M.labelPositions){if(k.maxDist<2.5)continue;const H=Math.max(5,Math.min(12,k.maxDist*1.2)),C=h&&x.has(M.labelId),P=w[M.labelId];let F=`rgba(51,51,51,${L})`;C&&P&&(F=.299*P[0]+.587*P[1]+.114*P[2]>140?`rgba(0,0,0,${L})`:`rgba(255,255,255,${L})`);const z=Gt(String(M.labelId+1));A+=`<text x="${k.x.toFixed(1)}" y="${k.y.toFixed(1)}" font-size="${H.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-weight="bold" fill="${F}">${z}</text>`}}const $=jt({imgW:c,imgH:p,isTransparent:f&&u===3,fills:B,lines:E,texts:A});self.postMessage({type:"export_result",data:$})}if(e==="export_html"){const{res:l,contourWeight:o,isArtisticMode:n,origBase64:h,artisticPresetId:i,notanLevels:s=2,notanThreshold:f=128,artIntensity:u=100,customArtPalette:g}=t.data.payload,{imgW:d,imgH:r,colorPalette:b,validLabels:a,contoursData:c,boundaryEdges:p,labelMask:y}=l,w=[...a].sort((A,$)=>A-$),m={};for(const A of w){const $=b[A];$&&(m[A]=$)}const x=Qt(y),v=p.filter(A=>!(A[0]===0&&A[1]===0&&A[2]===d&&A[3]===0)&&!(A[0]===0&&A[1]===r&&A[2]===d&&A[3]===r)&&!(A[0]===0&&A[1]===0&&A[2]===0&&A[3]===r)&&!(A[0]===d&&A[1]===0&&A[2]===d&&A[3]===r)),S=mt(v),I=JSON.stringify(S.map(A=>Q(A,.1).map(([$,L])=>[Math.round($*10)/10,Math.round(L*10)/10]))),B=JSON.stringify(c.map(A=>({id:A.labelId,a:A.area,poly:A.points.map(([$,L])=>[Math.round($*10)/10,Math.round(L*10)/10]),lp:A.labelPositions.filter($=>$.maxDist>=2.5).map($=>({x:Math.round($.x*10)/10,y:Math.round($.y*10)/10,d:Math.round($.maxDist*10)/10}))}))),Y=String(o===0?"0":(.2+o/100*.8).toFixed(2)),E=String(o===0?"0":(.5+o/100*1.5).toFixed(2));let j="";if(n){const A=g&&g.length>=2?JSON.stringify(g):"null";j=Ft({imgW:d,imgH:r,palJSON:m,chainsJSON:I,maskRLE:x,notanLevels:s,notanThreshold:f,artIntensity:u,preset:i||"original",customPalJS:A,origBase64:h})}else{const A=w.map($=>{const L=b[$];if(!L)return"";const k=.299*L[0]+.587*L[1]+.114*L[2]>140?"#000":"#fff";return`<div id="p${$}" class="cb" onclick="tc(${$})" style="background:rgb(${L[0]},${L[1]},${L[2]});color:${k}" title="Цвет ${$+1}"><span>${$+1}</span></div>`}).join("");j=Yt({imgW:d,imgH:r,palJSON:m,chainsJSON:I,labelsJSON:B,maskRLE:x,sl:w,lineAlpha:Y,lineWidth:E,palButtons:A})}self.postMessage({type:"export_result",data:j})}};
//# sourceMappingURL=image.worker-BwWX52VP.js.map
