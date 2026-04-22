function nt(t){const e=t/255;return e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92}function ut(t){const e=nt(t[0]),a=nt(t[1]),o=nt(t[2]);return[e*.4124564+a*.3575761+o*.1804375,e*.2126729+a*.7151522+o*.072175,e*.0193339+a*.119192+o*.9503041]}function pt(t){const e=[.95047,1,1.08883],a=s=>s>.008856?Math.cbrt(s):7.787*s+16/116,o=a(t[0]/e[0]),n=a(t[1]/e[1]),h=a(t[2]/e[2]);return[116*n-16,500*(o-n),200*(n-h)]}function U(t){return pt(ut(t))}function gt(t,e,a){const o=(t+16)/116,n=e/500+o,h=o-a/200,s=l=>l>.206897?l*l*l:(l-16/116)/7.787,i=s(n)*.95047,f=s(o),u=s(h)*1.08883,g=i*3.2404542-f*1.5371385-u*.4985314,d=-i*.969266+f*1.8760108+u*.041556,r=i*.0556434-f*.2040259+u*1.0572252,b=l=>Math.max(0,Math.min(255,Math.round((l<=.0031308?12.92*l:1.055*Math.pow(l,1/2.4)-.055)*255)));return[b(g),b(d),b(r)]}function it(t,e){const[a,o,n]=t,[h,s,i]=e,f=1,u=1,g=1,d=Math.sqrt(o*o+n*n),r=Math.sqrt(s*s+i*i),b=(d+r)/2,l=Math.pow(b,7),c=.5*(1-Math.sqrt(l/(l+Math.pow(25,7)))),p=o*(1+c),v=s*(1+c),M=Math.sqrt(p*p+n*n),y=Math.sqrt(v*v+i*i);let x=Math.atan2(n,p)*(180/Math.PI);x<0&&(x+=360);let m=Math.atan2(i,v)*(180/Math.PI);m<0&&(m+=360);const L=h-a,P=y-M;let F;M*y===0?F=0:Math.abs(m-x)<=180?F=m-x:m-x>180?F=m-x-360:F=m-x+360;const j=2*Math.sqrt(M*y)*Math.sin(F*Math.PI/360),H=(a+h)/2,T=(M+y)/2;let k;M*y===0?k=x+m:Math.abs(x-m)<=180?k=(x+m)/2:x+m<360?k=(x+m+360)/2:k=(x+m-360)/2;const w=1-.17*Math.cos((k-30)*Math.PI/180)+.24*Math.cos(2*k*Math.PI/180)+.32*Math.cos((3*k+6)*Math.PI/180)-.2*Math.cos((4*k-63)*Math.PI/180),A=1+.015*(H-50)*(H-50)/Math.sqrt(20+(H-50)*(H-50)),S=1+.045*T,C=1+.015*T*w,I=Math.pow(T,7),$=2*Math.sqrt(I/(I+Math.pow(25,7))),B=30*Math.exp(-Math.pow((k-275)/25,2)),Y=-Math.sin(2*B*Math.PI/180)*$,E=Math.pow(L/(f*A),2)+Math.pow(P/(u*S),2)+Math.pow(j/(g*C),2)+Y*(P/(u*S))*(j/(g*C));return E>0?Math.sqrt(E):0}function V(t){const e=t[0]/255,a=t[1]/255,o=t[2]/255,n=Math.max(e,a,o),h=Math.min(e,a,o);let s=0,i=0;const f=(n+h)/2;if(n!==h){const u=n-h;switch(i=f>.5?u/(2-n-h):u/(n+h),n){case e:s=((a-o)/u+(a<o?6:0))/6;break;case a:s=((o-e)/u+2)/6;break;case o:s=((e-a)/u+4)/6;break}}return[s*360,i,f]}function O(t,e,a){const o=t/360;let n,h,s;if(e<1e-10)n=h=s=a;else{const i=(g,d,r)=>(r<0&&(r+=1),r>1&&(r-=1),r<.16666666666666666?g+(d-g)*6*r:r<.5?d:r<.6666666666666666?g+(d-g)*(.6666666666666666-r)*6:g),f=a<.5?a*(1+e):a+e-a*e,u=2*a-f;n=i(u,f,o+1/3),h=i(u,f,o),s=i(u,f,o-1/3)}return[Math.round(n*255),Math.round(h*255),Math.round(s*255)]}function Q(t){return .299*t[0]+.587*t[1]+.114*t[2]}function xt(t){return(t%360+360)%360}function q(t){return Math.max(0,Math.min(1,t))}function D(t,e,a){return t+(e-t)*a}function lt(t,e,a){return[Math.round(D(t[0],e[0],a)),Math.round(D(t[1],e[1],a)),Math.round(D(t[2],e[2],a))]}function Z(t,e,a){let o=e-t;return o>180&&(o-=360),o<-180&&(o+=360),xt(t+o*a)}function ot(t){const e=Q(t),a=220,o=.35,n=35,h=.55,s=.15,i=q(e/255);let f,u;if(i<.3){const d=i/.3;f=Z(a,n,d*.3),u=D(o,s,d)}else if(i>.7){const d=(i-.7)/.3;f=Z(n*.3,n,d),u=D(s,h,d)}else{const d=(i-.3)/.4;f=Z(a*.1,n*.2,d),u=s}const g=D(.15,.85,i);return O(f,u,g)}function bt(t){const[e,a]=V(t),o=Q(t),h=((e+120)%360+360)%360,s=D(.85,1,a),i=q(o/255),f=i<.5?D(.1,.5,i*2)*.8:D(.5,.9,(i-.5)*2)*1.15;return O(h,s,q(f))}function mt(t){const[e,a,o]=V(t),n=[-25,-12,0,12,25],h=Math.min(4,Math.floor(e%360/72)),s=n[h],i=((e+s)%360+360)%360,f=D(.55,.9,a),u=Math.max(.25,o)*1.12;return O(i,f,q(u))}function vt(t){const[e,a]=V(t),o=Q(t),n=q(o/255);if(a>.5&&o>120){const u=[180,300,270],g=Math.min(2,Math.floor(n*3));return O(u[g],.95,.65)}const s=210,i=D(.08,.35,n),f=D(.08,.45,n);return O(s,i,f)}function yt(t){const[e,a,o]=V(t),n=Q(t),h=q(n/255),s=35,i=D(.75,.55,h),f=Z(e,s,i),u=o*.15+a*(1-i)*.35,g=o*.88;return O(f,q(u),q(g))}function Mt(t){const e=Q(t),a=q(e/255),o=[[255,0,100],[0,200,255],[255,200,0],[150,0,255],[0,255,150],[255,100,0]],n=a*(o.length-1),h=Math.floor(n),s=n-h,i=Math.min(o.length-2,Math.max(0,h));return lt(o[i],o[i+1],s)}function wt(t,e){if(e.length===0)return t;const a=U(t);let o=e[0],n=1/0;for(const h of e){const s=U(h),i=it(a,s);i<n&&(n=i,o=h)}return o}const kt={2:[[30,41,59],[248,250,252]],3:[[15,23,42],[148,163,184],[248,250,252]],4:[[15,23,42],[71,85,105],[203,213,225],[248,250,252]],5:[[15,23,42],[51,65,85],[148,163,184],[226,232,240],[248,250,252]]};function At(t,e,a=128){const o=Q(t),n=Math.max(2,Math.min(5,e)),h=kt[n];if(n===2)return o>a?h[1]:h[0];const s=256/n,i=Math.min(n-1,Math.floor(o/s));return h[i]}function ft(t,e,a){const o=q(a/100);return lt(t,e,o)}function Ct(t,e,a=100,o){let n;switch(e){case"warm_cool":n=ot(t);break;case"fauvism":n=bt(t);break;case"impressionism":n=mt(t);break;case"noir":n=vt(t);break;case"vintage":n=yt(t);break;case"pop_art":n=Mt(t);break;case"custom_palette":n=ot(t);break;default:n=ot(t)}return a<100?ft(t,n,a):n}function St(t){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${t.imgW} ${t.imgH}" width="${t.imgW}" height="${t.imgH}">
<rect width="${t.imgW}" height="${t.imgH}" fill="${t.isTransparent?"transparent":"white"}"/>
<g>${t.fills}</g><g>${t.lines}</g><g>${t.texts}</g>
</svg>`}function Lt(t){return`<!DOCTYPE html>
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
<\/script></body></html>`}function $t(t){return`<!DOCTYPE html>
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
    var fc=document.createElement("canvas"); fc.width=W; fc.height=H;
    var fctx=fc.getContext("2d"), id=fctx.createImageData(W,H), d=id.data;
    var hasFocus = ac.size === 1;
    for(var i=0; i<W*H; i++){
      var lb=mask[i];
      if(ac.has(lb)&&pal[lb]){
        var c=pal[lb]; d[i*4]=c[0]; d[i*4+1]=c[1]; d[i*4+2]=c[2]; d[i*4+3]=255;
      } else {
        d[i*4]=255; d[i*4+1]=255; d[i*4+2]=255; d[i*4+3]=hasFocus ? 40 : 255;
      }
    }
    fctx.putImageData(id,0,0);
    ctx.imageSmoothingEnabled=true; ctx.imageSmoothingQuality="high";
    ctx.drawImage(fc,0,0,W*2,H*2);
    fc.width=0; fc.height=0;
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
var lt = 0, lc = -1;
function tc(i){
  var now = Date.now();
  if (lc === i && (now - lt) < 300) {
    // Double click detected: Isolate color
    ac.clear();
    document.querySelectorAll(".cb").forEach(e=>e.classList.remove("sel"));
    ac.add(i);
    document.getElementById("p"+i).classList.add("sel");
    lt = 0; lc = -1;
  } else {
    // Single click logic
    var el=document.getElementById("p"+i);
    if(ac.has(i)){ ac.delete(i); el.classList.remove("sel"); }
    else { ac.add(i); el.classList.add("sel"); }
    lt = now; lc = i;
  }
  draw();
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
<\/script></body></html>`}function Ht(t,e,a,o){const n=e*a,h=[],s=Math.max(1,Math.floor(n/1e5));for(let r=0;r<n;r+=s){const b=r*4,l=t[b],c=t[b+1],p=t[b+2],v=Math.max(l,c,p),M=Math.min(l,c,p),y=v>0?(v-M)/v:0,x=1+Math.floor(y*3);for(let m=0;m<x;m++)h.push(l,c,p)}const i=new Uint8Array(h),f=r=>{let b=255,l=0,c=255,p=0,v=255,M=0;for(let y=0;y<r.length;y+=3){const x=r[y],m=r[y+1],L=r[y+2];x<b&&(b=x),x>l&&(l=x),m<c&&(c=m),m>p&&(p=m),L<v&&(v=L),L>M&&(M=L)}return{colors:r,count:r.length/3,rMin:b,rMax:l,gMin:c,gMax:p,bMin:v,bMax:M}};let u=[f(i)];const g=Math.min(o*2.5,300);for(;u.length<g;){let r=0,b=-1;for(let x=0;x<u.length;x++){const m=u[x];if(m.count<2)continue;const L=Math.max(m.rMax-m.rMin,m.gMax-m.gMin,m.bMax-m.bMin)*Math.log2(m.count+1);L>b&&(b=L,r=x)}if(b<=0)break;const l=u[r],c=l.rMax-l.rMin>=l.gMax-l.gMin&&l.rMax-l.rMin>=l.bMax-l.bMin?0:l.gMax-l.gMin>=l.bMax-l.bMin?1:2,p=[];for(let x=0;x<l.colors.length;x+=3)p.push([l.colors[x],l.colors[x+1],l.colors[x+2]]);p.sort((x,m)=>x[c]-m[c]);const v=Math.floor(p.length/2),M=new Uint8Array(v*3),y=new Uint8Array((p.length-v)*3);for(let x=0;x<v;x++)M[x*3]=p[x][0],M[x*3+1]=p[x][1],M[x*3+2]=p[x][2];for(let x=v;x<p.length;x++){const m=x-v;y[m*3]=p[x][0],y[m*3+1]=p[x][1],y[m*3+2]=p[x][2]}u.splice(r,1,f(M),f(y))}const d=u.map(r=>{let b=0,l=0,c=0;for(let p=0;p<r.colors.length;p+=3)b+=r.colors[p],l+=r.colors[p+1],c+=r.colors[p+2];return[Math.round(b/r.count),Math.round(l/r.count),Math.round(c/r.count)]});return It(d,t,e,a,o)}function It(t,e,a,o,n){const h=a*o,s=Math.max(1,Math.floor(h/4e4));let i=[t[0]],f=[U(t[0])];for(;i.length<n&&i.length<t.length;){let d=-1,r=0;for(let b=0;b<t.length;b++){const l=U(t[b]);let c=1/0;for(const p of f){const v=(l[0]-p[0])**2+(l[1]-p[1])**2+(l[2]-p[2])**2;v<c&&(c=v)}c>d&&(d=c,r=b)}i.push(t[r]),f.push(U(t[r]))}for(let d=0;d<4;d++){const r=new Float64Array(n),b=new Float64Array(n),l=new Float64Array(n),c=new Float64Array(n);for(let p=0;p<h;p+=s){const v=p*4,M=e[v],y=e[v+1],x=e[v+2],m=U([M,y,x]);let L=1/0,P=0;for(let T=0;T<i.length;T++){const k=(m[0]-f[T][0])**2+(m[1]-f[T][1])**2+(m[2]-f[T][2])**2;k<L&&(L=k,P=T)}const F=Math.max(M,y,x),j=Math.min(M,y,x),H=1+(F>0?(F-j)/F:0)*3;r[P]+=m[0]*H,b[P]+=m[1]*H,l[P]+=m[2]*H,c[P]+=H}for(let p=0;p<i.length;p++)c[p]>0&&(f[p]=[r[p]/c[p],b[p]/c[p],l[p]/c[p]],i[p]=gt(f[p][0],f[p][1],f[p][2]))}const u=[],g=new Set;for(let d=0;d<i.length;d++)if(!g.has(d)){for(let r=d+1;r<i.length;r++){if(g.has(r))continue;const b=it(f[d],f[r]),[l,c]=V(i[d]),p=c>.4?2.5:4.5;b<p&&g.add(r)}u.push(i[d])}return u.map(d=>{const[r,b,l]=V(d);if(b<.05)return d;const c=Math.min(1,b*1.08),p=l<.5?l*.96:Math.min(1,l*1.02);return O(r,c,p)})}function Bt(t,e,a,o){if(o<=0)return t;const n=new Uint8ClampedArray(t.length),h=o,s=30;for(let i=0;i<a;i++)for(let f=0;f<e;f++){const u=(i*e+f)*4,g=t[u],d=t[u+1],r=t[u+2];let b=0,l=0,c=0,p=0;const v=Math.max(0,i-o),M=Math.min(a-1,i+o),y=Math.max(0,f-o),x=Math.min(e-1,f+o);for(let m=v;m<=M;m++)for(let L=y;L<=x;L++){const P=(m*e+L)*4,F=t[P],j=t[P+1],H=t[P+2],T=(L-f)*(L-f)+(m-i)*(m-i),k=(F-g)*(F-g)+(j-d)*(j-d)+(H-r)*(H-r),w=Math.exp(-(T/(2*h*h))-k/(2*s*s));b+=w,l+=F*w,c+=j*w,p+=H*w}n[u]=Math.round(l/b),n[u+1]=Math.round(c/b),n[u+2]=Math.round(p/b),n[u+3]=255}return n}function Pt(t,e,a,o,n){if(o<=1)return t;const h=e*a,s=new Int32Array(h),i=new Int32Array(h);for(let f=0;f<2;f++){s.fill(-1);const u=[];let g=0;for(let c=0;c<h;c++)if(s[c]===-1){const p=t[c];let v=0,M=0;i[M++]=c,s[c]=g;let y=0;for(;v<M;){const x=i[v++];y++;const m=x%e,L=x/e|0;m>0&&s[x-1]===-1&&t[x-1]===p&&(s[x-1]=g,i[M++]=x-1),m<e-1&&s[x+1]===-1&&t[x+1]===p&&(s[x+1]=g,i[M++]=x+1),L>0&&s[x-e]===-1&&t[x-e]===p&&(s[x-e]=g,i[M++]=x-e),L<a-1&&s[x+e]===-1&&t[x+e]===p&&(s[x+e]=g,i[M++]=x+e)}u.push({area:y,color:p,label:g}),g++}const d=u.filter(c=>c.area<o);if(d.length===0)break;const r=new Map;for(const c of d)r.set(c.label,new Map);for(let c=0;c<h;c++){const p=s[c];if(r.has(p)){const v=c%e,M=c/e|0,y=r.get(p),x=m=>{if(s[m]!==p){const P=t[m];y.set(P,(y.get(P)||0)+1)}};v>0&&x(c-1),v<e-1&&x(c+1),M>0&&x(c-e),M<a-1&&x(c+e)}}let b=!1;const l=new Map;for(const c of d){const p=r.get(c.label);if(p.size===0)continue;let v=c.color,M=-1;for(const[y,x]of p.entries()){let m=x;if(n){const L=it(n[c.color],n[y]);m=x*(100/(L+5))}m>M&&(M=m,v=y)}v!==c.color&&(l.set(c.label,v),b=!0)}if(!b)break;for(let c=0;c<h;c++){const p=s[c];l.has(p)&&(t[c]=l.get(p))}}return t}function zt(t,e,a,o){if(o<=1.2)return t;const n=e*a,h=new Uint8Array(t),s=new Float32Array(n).fill(100),i=new Int32Array(n);let f=0,u=0;for(let r=0;r<a;r++)for(let b=0;b<e;b++){const l=r*e+b;let c=!1;(b>0&&t[l-1]!==t[l]||b<e-1&&t[l+1]!==t[l]||r>0&&t[l-e]!==t[l]||r<a-1&&t[l+e]!==t[l])&&(c=!0),c&&(s[l]=0,i[u++]=l)}for(;f<u;){const r=i[f++],b=r%e,l=r/e|0,c=s[r];for(let p=-1;p<=1;p++)for(let v=-1;v<=1;v++){if(v===0&&p===0)continue;const M=b+v,y=l+p;if(M>=0&&M<e&&y>=0&&y<a){const x=y*e+M,m=c+(v===0||p===0?1:1.4);s[x]>m&&(s[x]=m,i[u++]=x)}}}const g=o/2,d=new Uint8Array(n);for(let r=0;r<n;r++)s[r]>0&&s[r]<g&&(d[r]=1);for(let r=0;r<2;r++){const b=new Uint8Array(h);for(let l=0;l<n;l++)if(d[l]){const c=h[l],p=l%e,v=l/e|0;for(let M=-1;M<=1;M++)for(let y=-1;y<=1;y++){const x=(v+M)*e+(p+y);if(x>=0&&x<n&&s[x]<=.1&&h[x]!==c){const m=x+(x-l);m>=0&&m<n&&!d[m]&&(b[x]=c)}}}h.set(b)}return h}function Et(t,e,a,o){const n=new Uint8Array(t.length),h=Math.max(o+2,256),s=new Uint16Array(h);for(let i=0;i<a;i++)for(let f=0;f<e;f++){s.fill(0);for(let d=-1;d<=1;d++){const r=i+d;if(!(r<0||r>=a))for(let b=-1;b<=1;b++){const l=f+b;l<0||l>=e||s[t[r*e+l]]++}}let u=t[i*e+f],g=0;for(let d=0;d<h;d++)s[d]>g&&(g=s[d],u=d);n[i*e+f]=u}return n}function Ft(t,e,a){const o=[];for(let s=1;s<a;s++){let i=0;for(;i<e;){const f=t[s*e+i],u=t[(s-1)*e+i];if(f!==u){const g=i;for(i++;i<e&&t[s*e+i]===f&&t[(s-1)*e+i]===u;)i++;o.push([g,s,i,s])}else i++}}for(let s=1;s<e;s++){let i=0;for(;i<a;){const f=t[i*e+s],u=t[i*e+s-1];if(f!==u){const g=i;for(i++;i<a&&t[i*e+s]===f&&t[i*e+s-1]===u;)i++;o.push([s,g,s,i])}else i++}}let n=0;for(;n<e;){const s=t[n],i=n;for(n++;n<e&&t[n]===s;)n++;o.push([i,0,n,0])}for(n=0;n<e;){const s=t[(a-1)*e+n],i=n;for(n++;n<e&&t[(a-1)*e+n]===s;)n++;o.push([i,a,n,a])}let h=0;for(;h<a;){const s=t[h*e],i=h;for(h++;h<a&&t[h*e]===s;)h++;o.push([0,i,0,h])}for(h=0;h<a;){const s=t[h*e+e-1],i=h;for(h++;h<a&&t[h*e+e-1]===s;)h++;o.push([e,i,e,h])}return o}function ct(t,e,a,o,n){const h=o>0&&n>0&&t[(n-1)*e+(o-1)]?1:0,s=o<e&&n>0&&t[(n-1)*e+o]?1:0,i=o>0&&n<a&&t[n*e+(o-1)]?1:0,f=o<e&&n<a&&t[n*e+o]?1:0;return h<<3|s<<2|f<<1|i}function Tt(t,e){switch(t){case 1:return 2;case 2:return 1;case 3:return 2;case 4:return 0;case 5:return e===1?0:2;case 6:return 1;case 7:return 2;case 8:return 3;case 9:return 3;case 10:return e===2?1:3;case 11:return 3;case 12:return 0;case 13:return 0;case 14:return 1;default:return-1}}function Wt(t,e,a){const o=[];let n=-1,h=-1;t:for(let g=0;g<=a;g++)for(let d=0;d<=e;d++){const r=ct(t,e,a,d,g);if(r>0&&r<15){n=d,h=g;break t}}if(n<0)return[];let s=n,i=h,f=0;const u=e*a*4;for(let g=0;g<u&&!(g>0&&s===n&&i===h);g++){o.push([s,i]);const d=ct(t,e,a,s,i),r=Tt(d,f);if(r<0)break;switch(r){case 0:s++;break;case 1:i++;break;case 2:s--;break;case 3:i--;break}if(f=r,s<-1||s>e+1||i<-1||i>a+1)break}return o}function Yt(t,e,a){const o=e*a,n=new Float32Array(o).fill(-1),h=new Int32Array(o);let s=0,i=0;for(let g=0;g<a;g++)for(let d=0;d<e;d++){const r=g*e+d;if(!t[r])continue;let b=d===0||g===0||d===e-1||g===a-1;if(!b)for(let l=-1;l<=1;l++){for(let c=-1;c<=1;c++)if(!(c===0&&l===0)&&!t[(g+l)*e+(d+c)]){b=!0;break}if(b)break}b&&(n[r]=0,h[i++]=r)}for(;s<i;){const g=h[s++],d=g%e,r=g/e|0,b=n[g];for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){if(c===0&&l===0)continue;const p=d+c,v=r+l;if(p>=0&&p<e&&v>=0&&v<a){const M=v*e+p;if(t[M]&&n[M]<0){const y=c!==0&&l!==0?1.414:1;n[M]=b+y,h[i++]=M}}}}let f=0,u=[0,0];for(let g=0;g<o;g++)n[g]>f&&(f=n[g],u=[g%e,g/e|0]);return{dist:n,maxDist:f,maxLoc:u}}function jt(t,e,a,o,n,h,s){const i=[];if(h<2)return i;if(s<1500||h<10){let r=0,b=0,l=0;for(let c=0;c<t.length;c++)t[c]>r&&(r=t[c],b=c%e,l=c/e|0);return i.push({x:b+o,y:l+n,maxDist:r}),i}const f=Math.max(50,h*3.5),u=Math.max(4,h*.4),g=[],d=Math.max(2,Math.floor(f/4));for(let r=0;r<a;r+=d)for(let b=0;b<e;b+=d){const l=t[r*e+b];if(l<u)continue;let c=!0;const p=Math.ceil(d*1.5);for(let v=-p;v<=p&&c;v+=d)for(let M=-p;M<=p;M+=d){if(M===0&&v===0)continue;const y=b+M,x=r+v;if(y>=0&&y<e&&x>=0&&x<a&&t[x*e+y]>l+.1){c=!1;break}}c&&g.push({x:b,y:r,d:l})}g.sort((r,b)=>b.d-r.d);for(const r of g){let b=!1;for(const l of i){const c=r.x+o-l.x,p=r.y+n-l.y;if(c*c+p*p<f*f){b=!0;break}}b||i.push({x:r.x+o,y:r.y+n,maxDist:r.d})}if(i.length===0){let r=0,b=0,l=0;for(let c=0;c<t.length;c++)t[c]>r&&(r=t[c],b=c%e,l=c/e|0);i.push({x:b+o,y:l+n,maxDist:r})}return i}function Dt(t,e,a,o){const n=[],h=[];for(const s of t)for(const i of s.labelPositions)i.maxDist<2||h.push({lbl:i,id:s.labelId,area:s.area});h.sort((s,i)=>s.area-i.area);for(const s of h){const{lbl:i}=s,u=Math.max(6,Math.min(14,i.maxDist*1.2))*.7;let g=i.x,d=i.y;for(let r=0;r<10;r++){let b=!1,l=g,c=d;for(const p of n){const v=l-p.x,M=c-p.y,y=u+p.r+2;if(v*v+M*M<y*y){const x=Math.sqrt(v*v+M*M)||1,m=(y-x)/x;l+=v*m*.6,c+=M*m*.6,b=!0}}if(b){const p=Math.floor(l),v=Math.floor(c);if(p>=0&&p<e&&v>=0&&v<a&&o[v*e+p]===s.id)g=l,d=c;else break}else break}i.x=g,i.y=d,n.push({x:g,y:d,r:u,id:s.id})}}function Xt(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Rt(t){const e=[];let a=0;for(;a<t.length;){const o=t[a];let n=1;for(;a+n<t.length&&t[a+n]===o&&n<255;)n++;e.push(String.fromCharCode(o,n)),a+=n}return btoa(e.join(""))}function G(t,e){if(t.length<=2)return t;const a=new Uint8Array(t.length);a[0]=1,a[t.length-1]=1;const o=[[0,t.length-1]];for(;o.length;){const[n,h]=o.pop();if(h-n<2)continue;let s=0,i=n;const[f,u]=t[n],[g,d]=t[h],r=g-f,b=d-u,l=Math.sqrt(r*r+b*b);for(let c=n+1;c<h;c++){const[p,v]=t[c],M=l>0?Math.abs(b*p-r*v+g*u-d*f)/l:Math.hypot(p-f,v-u);M>s&&(s=M,i=c)}s>e&&(a[i]=1,o.push([n,i],[i,h]))}return t.filter((n,h)=>a[h])}function ht(t,e=2,a=.8){if(t.length<3)return t;let o=t;for(let n=0;n<e;n++){const h=[o[0]],s=o.length;for(let i=1;i<s-1;i++){const f=o[i-1],u=o[i],g=o[i+1],d=f[0]-u[0],r=f[1]-u[1],b=g[0]-u[0],l=g[1]-u[1],c=Math.sqrt(d*d+r*r)||1,p=Math.sqrt(b*b+l*l)||1;(d*b+r*l)/(c*p)<a?h.push([(f[0]+u[0]*2+g[0])/4,(f[1]+u[1]*2+g[1])/4]):h.push([u[0],u[1]])}h.push(o[s-1]),o=h}return o}function at(t,e=.5,a=2){const o=new Map,n=new Map;for(const[s,i,f,u]of t){const g=`${s},${i}`,d=`${f},${u}`;o.has(g)||o.set(g,[]),o.has(d)||o.set(d,[]),o.get(g).push(d),o.get(d).push(g)}for(const[s,i]of o)n.set(s,i.length);const h=[];for(const[s,i]of o)if(n.get(s)!==2)for(;o.get(s).length>0;){const f=[];let u=s;for(f.push(u.split(",").map(Number));;){const g=o.get(u);if(g.length===0)break;const d=g.shift(),r=o.get(d),b=r.indexOf(u);if(b>-1&&r.splice(b,1),f.push(d.split(",").map(Number)),n.get(d)!==2||d===s)break;u=d}f.length>1&&h.push(f)}for(const[s,i]of o)for(;o.get(s).length>0;){const f=[];let u=s;const g=s;for(f.push(u.split(",").map(Number));;){const d=o.get(u);if(d.length===0)break;const r=d.shift(),b=o.get(r),l=b.indexOf(u);if(l>-1&&b.splice(l,1),f.push(r.split(",").map(Number)),r===g)break;u=r}f.length>1&&h.push(f)}return h.map(s=>ht(G(s,e),a))}function qt(t,e,a,o,n,h,s){if(e===1)return At(t,o,n);if(e===2){if(a==="original")return t;if(s&&s.length>=2){const i=wt(t,s);return h<100?ft(t,i,h):i}return Ct(t,a,h)}else return t}self.onmessage=function(t){const{type:e}=t.data;if(e==="process"){const{imgBuffer:a,width:o,height:n,numColors:h,detail:s}=t.data.payload,i=new Uint8ClampedArray(a),f=o*n,u=(g,d)=>{self.postMessage({type:"progress",msg:g,pct:d})};try{u("Подбор палитры…",5);const g=Ht(i,o,n,Math.max(2,Math.min(h,250))),d=g.length,r=g.map(w=>U(w));u("Подготовка (Сглаживание)…",10);const b=s>=9?0:s>=7?1:s>=4?2:3,l=Bt(i,o,n,b);u("Присвоение цветов…",20);const c=new Uint8Array(f);for(let w=0;w<f;w++){const A=w*4,S=U([l[A],l[A+1],l[A+2]]);let C=1/0,I=0;for(let $=0;$<d;$++){const B=S[0]-r[$][0],Y=S[1]-r[$][1],E=S[2]-r[$][2],W=B*B+Y*Y*1.1+E*E*1.1;W<C&&(C=W,I=$)}c[w]=I}const p=f/5e5,v=Math.max(4,Math.round(p*(12-s)*(12-s)));u("Быстрое объединение мелких зон…",30);const M=Pt(c,o,n,v,r);u("Фильтрация шума…",50);let y=M;const x=s<=4?3:s<=7?2:1;for(let w=0;w<x;w++)y=Et(y,o,n,d);u("Устранение узких зон…",55);const m=s<=4?2.8:s<=7?2.2:1.6;y=zt(y,o,n,m),u("Построение границ…",59);const L=Ft(y,o,n);u("Трассировка контуров…",60);const P=[],F=new Set,j=w=>{const A=new Int32Array(f).fill(-1),S=new Int32Array(f);let C=0;for(let I=0;I<f;I++)if(y[I]===w&&A[I]===-1){let $=0,B=0;S[B++]=I,A[I]=C;let Y=0,E=o,W=n,N=-1,K=-1;for(;$<B;){const z=S[$++];Y++;const X=z%o,R=Math.floor(z/o);X<E&&(E=X),X>N&&(N=X),R<W&&(W=R),R>K&&(K=R),X>0&&y[z-1]===w&&A[z-1]===-1&&(A[z-1]=C,S[B++]=z-1),X<o-1&&y[z+1]===w&&A[z+1]===-1&&(A[z+1]=C,S[B++]=z+1),R>0&&y[z-o]===w&&A[z-o]===-1&&(A[z-o]=C,S[B++]=z-o),R<n-1&&y[z+o]===w&&A[z+o]===-1&&(A[z+o]=C,S[B++]=z+o)}if(Y>=v){const z=N-E+1,X=K-W+1,R=new Uint8Array(z*X);for(let J=0;J<X;J++)for(let _=0;_<z;_++)A[(W+J)*o+(E+_)]===C&&(R[J*z+_]=1);const st=Wt(R,z,X);if(st.length>=3){const J=st.map(([et,dt])=>[et+E,dt+W]),{dist:_,maxDist:tt,maxLoc:rt}=Yt(R,z,X);if(tt>=2){F.add(w);const et=jt(_,z,X,E,W,tt,Y);P.push({points:J,smoothPoints:[],labelId:w,center:[rt[0]+E,rt[1]+W],maxDist:tt,area:Y,labelPositions:et})}}}C++}};for(let w=0;w<d;w++)j(w),u(`Трассировка… ${w+1}/${d}`,60+Math.round(w/d*28));P.sort((w,A)=>A.area-w.area),Dt(P,o,n,y),u("Построение превью…",90);const H=new Uint8ClampedArray(f*4);for(let w=0;w<f;w++){const A=y[w]<d?g[y[w]]:[255,255,255];H[w*4]=A[0],H[w*4+1]=A[1],H[w*4+2]=A[2],H[w*4+3]=255}const T={};for(let w=0;w<d;w++)T[w]=g[w];u("Готово!",100);const k=new Float32Array(L.flat()).buffer;self.postMessage({type:"result",data:{previewBuffer:H.buffer,imgW:o,imgH:n,contoursData:P,colorPalette:T,validLabels:Array.from(F),scaleFactor:1,autoColors:d,autoDetail:s,labelMaskBuffer:y.buffer,boundaryEdgesBuffer:k}},[H.buffer,y.buffer,k])}catch(g){self.postMessage({type:"error",error:g.message})}}if(e==="export_svg"){const{res:a,contourWeight:o,numberWeight:n,colored:h,activeArray:s,showNums:i,isArtisticMode:f,artisticStep:u,artisticPresetId:g,notanLevels:d=2,notanThreshold:r=128,artIntensity:b=100,customArtPalette:l}=t.data.payload,{imgW:c,imgH:p,contoursData:v,colorPalette:M,boundaryEdges:y}=a,x=new Set(s),m=[...v].sort((A,S)=>S.area-A.area),L={},P=g||"original";for(const[A,S]of Object.entries(M)){const C=Number(A),I=S;f?L[C]=qt(I,u,P,d,r,b,l):L[C]=I}let F="";if(f?u>0&&u<3:h)for(const A of m){const S=ht(G(A.points,.4),3);if(S&&S.length>0){const C=f||x.has(A.labelId),I=L[A.labelId];let $=`M ${S[0][0].toFixed(1)} ${S[0][1].toFixed(1)} `;for(let B=1;B<S.length;B++)$+=`L ${S[B][0].toFixed(1)} ${S[B][1].toFixed(1)} `;$+="Z",F+=C&&I?`<path d="${$}" fill="rgb(${I[0]},${I[1]},${I[2]})" stroke="none"/>`:`<path d="${$}" fill="white" stroke="none"/>`}}let H="";if(f?u===0||u===3:!0){const A=y.filter(C=>!(C[0]===0&&C[1]===0&&C[2]===c&&C[3]===0)&&!(C[0]===0&&C[1]===p&&C[2]===c&&C[3]===p)&&!(C[0]===0&&C[1]===0&&C[2]===0&&C[3]===p)&&!(C[0]===c&&C[1]===0&&C[2]===c&&C[3]===p)),S=at(A);if(f&&u===3&&o>0)H=S.map(I=>{const $=G(I,1);if($.length<2)return"";let B=`M ${$[0][0].toFixed(1)} ${$[0][1].toFixed(1)}`;for(let W=1;W<$.length;W++)B+=` L ${$[W][0].toFixed(1)} ${$[W][1].toFixed(1)}`;const Y=`<path d="${B}" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,E=`<path d="${B}" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round"/>`;return Y+E}).join("");else{const C=o===0?0:(f?.6:.2+o/100*.8).toFixed(2),I=o===0?0:(f?1:.5+o/100*1.5).toFixed(2),$=`rgba(40,40,40,${C})`;H=S.map(Y=>{const E=G(Y,1);if(E.length<2)return"";let W=`M ${E[0][0].toFixed(1)} ${E[0][1].toFixed(1)}`;for(let N=1;N<E.length;N++)W+=` L ${E[N][0].toFixed(1)} ${E[N][1].toFixed(1)}`;return`<path d="${W}" fill="none" stroke="${$}" stroke-width="${I}" stroke-linecap="round" stroke-linejoin="round"/>`}).join("")}}let k="";if(i&&!f){const A=(n===0?0:.15+n/100*.85).toFixed(2);for(const S of m)for(const C of S.labelPositions){if(C.maxDist<2.5)continue;const I=Math.max(5,Math.min(12,C.maxDist*1.2)),$=h&&x.has(S.labelId),B=M[S.labelId];let Y=`rgba(51,51,51,${A})`;$&&B&&(Y=.299*B[0]+.587*B[1]+.114*B[2]>140?`rgba(0,0,0,${A})`:`rgba(255,255,255,${A})`);const E=Xt(String(S.labelId+1));k+=`<text x="${C.x.toFixed(1)}" y="${C.y.toFixed(1)}" font-size="${I.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-weight="bold" fill="${Y}">${E}</text>`}}const w=St({imgW:c,imgH:p,isTransparent:f&&u===3,fills:F,lines:H,texts:k});self.postMessage({type:"export_result",data:w})}if(e==="export_html"){const{res:a,contourWeight:o,isArtisticMode:n,origBase64:h,artisticPresetId:s,notanLevels:i=2,notanThreshold:f=128,artIntensity:u=100,customArtPalette:g}=t.data.payload,{imgW:d,imgH:r,colorPalette:b,validLabels:l,contoursData:c,boundaryEdges:p,labelMask:v}=a,M=[...l].sort((k,w)=>k-w),y={};for(const k of M){const w=b[k];w&&(y[k]=w)}const x=Rt(v),m=p.filter(k=>!(k[0]===0&&k[1]===0&&k[2]===d&&k[3]===0)&&!(k[0]===0&&k[1]===r&&k[2]===d&&k[3]===r)&&!(k[0]===0&&k[1]===0&&k[2]===0&&k[3]===r)&&!(k[0]===d&&k[1]===0&&k[2]===d&&k[3]===r)),L=at(m),P=JSON.stringify(L.map(k=>G(k,1).map(([w,A])=>[Math.round(w*10)/10,Math.round(A*10)/10]))),F=JSON.stringify(c.map(k=>({id:k.labelId,lp:k.labelPositions.filter(w=>w.maxDist>=2.5).map(w=>({x:Math.round(w.x*10)/10,y:Math.round(w.y*10)/10,d:Math.round(w.maxDist*10)/10}))}))),j=o===0?0:(.2+o/100*.8).toFixed(2),H=o===0?0:(.5+o/100*1.5).toFixed(2);let T="";if(n){const k=g&&g.length>=2?JSON.stringify(g):"null";T=Lt({imgW:d,imgH:r,palJSON:y,chainsJSON:P,maskRLE:x,notanLevels:i,notanThreshold:f,artIntensity:u,preset:s||"original",customPalJS:k,origBase64:h})}else{const k=M.map(w=>{const A=b[w];if(!A)return"";const C=.299*A[0]+.587*A[1]+.114*A[2]>140?"#000":"#fff";return`<div id="p${w}" class="cb" onclick="tc(${w})" style="background:rgb(${A[0]},${A[1]},${A[2]});color:${C}" title="Цвет ${w+1}"><span>${w+1}</span></div>`}).join("");T=$t({imgW:d,imgH:r,palJSON:y,chainsJSON:P,labelsJSON:F,maskRLE:x,sl:M,lineAlpha:j,lineWidth:H,palButtons:k})}self.postMessage({type:"export_result",data:T})}};
