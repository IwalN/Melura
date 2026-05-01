function lt(t){const e=t/255;return e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92}function kt(t){const e=lt(t[0]),c=lt(t[1]),n=lt(t[2]);return[e*.4124564+c*.3575761+n*.1804375,e*.2126729+c*.7151522+n*.072175,e*.0193339+c*.119192+n*.9503041]}function At(t){const e=[.95047,1,1.08883],c=s=>s>.008856?Math.cbrt(s):7.787*s+16/116,n=c(t[0]/e[0]),o=c(t[1]/e[1]),h=c(t[2]/e[2]);return[116*o-16,500*(n-o),200*(o-h)]}function G(t){return At(kt(t))}function $t(t,e,c){const n=(t+16)/116,o=e/500+n,h=n-c/200,s=l=>l>.206897?l*l*l:(l-16/116)/7.787,i=s(o)*.95047,f=s(n),u=s(h)*1.08883,g=i*3.2404542-f*1.5371385-u*.4985314,d=-i*.969266+f*1.8760108+u*.041556,r=i*.0556434-f*.2040259+u*1.0572252,b=l=>Math.max(0,Math.min(255,Math.round((l<=.0031308?12.92*l:1.055*Math.pow(l,1/2.4)-.055)*255)));return[b(g),b(d),b(r)]}function ht(t,e){const[c,n,o]=t,[h,s,i]=e,f=1,u=1,g=1,d=Math.sqrt(n*n+o*o),r=Math.sqrt(s*s+i*i),b=(d+r)/2,l=Math.pow(b,7),a=.5*(1-Math.sqrt(l/(l+Math.pow(25,7)))),p=n*(1+a),y=s*(1+a),w=Math.sqrt(p*p+o*o),m=Math.sqrt(y*y+i*i);let x=Math.atan2(o,p)*(180/Math.PI);x<0&&(x+=360);let v=Math.atan2(i,y)*(180/Math.PI);v<0&&(v+=360);const S=h-c,T=m-w;let z;w*m===0?z=0:Math.abs(v-x)<=180?z=v-x:v-x>180?z=v-x-360:z=v-x+360;const X=2*Math.sqrt(w*m)*Math.sin(z*Math.PI/360),j=(c+h)/2,E=(w+m)/2;let A;w*m===0?A=x+v:Math.abs(x-v)<=180?A=(x+v)/2:x+v<360?A=(x+v+360)/2:A=(x+v-360)/2;const L=1-.17*Math.cos((A-30)*Math.PI/180)+.24*Math.cos(2*A*Math.PI/180)+.32*Math.cos((3*A+6)*Math.PI/180)-.2*Math.cos((4*A-63)*Math.PI/180),I=1+.015*(j-50)*(j-50)/Math.sqrt(20+(j-50)*(j-50)),M=1+.045*E,$=1+.015*E*L,k=Math.pow(E,7),H=2*Math.sqrt(k/(k+Math.pow(25,7))),P=30*Math.exp(-Math.pow((A-275)/25,2)),F=-Math.sin(2*P*Math.PI/180)*H,C=Math.pow(S/(f*I),2)+Math.pow(T/(u*M),2)+Math.pow(X/(g*$),2)+F*(T/(u*M))*(X/(g*$));return C>0?Math.sqrt(C):0}function K(t){const e=t[0]/255,c=t[1]/255,n=t[2]/255,o=Math.max(e,c,n),h=Math.min(e,c,n);let s=0,i=0;const f=(o+h)/2;if(o!==h){const u=o-h;switch(i=f>.5?u/(2-o-h):u/(o+h),o){case e:s=((c-n)/u+(c<n?6:0))/6;break;case c:s=((n-e)/u+2)/6;break;case n:s=((e-c)/u+4)/6;break}}return[s*360,i,f]}function Q(t,e,c){const n=t/360;let o,h,s;if(e<1e-10)o=h=s=c;else{const i=(g,d,r)=>(r<0&&(r+=1),r>1&&(r-=1),r<.16666666666666666?g+(d-g)*6*r:r<.5?d:r<.6666666666666666?g+(d-g)*(.6666666666666666-r)*6:g),f=c<.5?c*(1+e):c+e-c*e,u=2*c-f;o=i(u,f,n+1/3),h=i(u,f,n),s=i(u,f,n-1/3)}return[Math.round(o*255),Math.round(h*255),Math.round(s*255)]}function tt(t){return .299*t[0]+.587*t[1]+.114*t[2]}function St(t){return(t%360+360)%360}function J(t){return Math.max(0,Math.min(1,t))}function N(t,e,c){return t+(e-t)*c}function vt(t,e,c){return[Math.round(N(t[0],e[0],c)),Math.round(N(t[1],e[1],c)),Math.round(N(t[2],e[2],c))]}function it(t,e,c){let n=e-t;return n>180&&(n-=360),n<-180&&(n+=360),St(t+n*c)}function at(t){const e=tt(t),c=220,n=.35,o=35,h=.55,s=.15,i=J(e/255);let f,u;if(i<.3){const d=i/.3;f=it(c,o,d*.3),u=N(n,s,d)}else if(i>.7){const d=(i-.7)/.3;f=it(o*.3,o,d),u=N(s,h,d)}else{const d=(i-.3)/.4;f=it(c*.1,o*.2,d),u=s}const g=N(.15,.85,i);return Q(f,u,g)}function Ct(t){const[e,c]=K(t),n=tt(t),h=((e+120)%360+360)%360,s=N(.85,1,c),i=J(n/255),f=i<.5?N(.1,.5,i*2)*.8:N(.5,.9,(i-.5)*2)*1.15;return Q(h,s,J(f))}function Lt(t){const[e,c,n]=K(t),o=[-25,-12,0,12,25],h=Math.min(4,Math.floor(e%360/72)),s=o[h],i=((e+s)%360+360)%360,f=N(.55,.9,c),u=Math.max(.25,n)*1.12;return Q(i,f,J(u))}function Ht(t){const[e,c]=K(t),n=tt(t),o=J(n/255);if(c>.5&&n>120){const u=[180,300,270],g=Math.min(2,Math.floor(o*3));return Q(u[g],.95,.65)}const s=210,i=N(.08,.35,o),f=N(.08,.45,o);return Q(s,i,f)}function It(t){const[e,c,n]=K(t),o=tt(t),h=J(o/255),s=35,i=N(.75,.55,h),f=it(e,s,i),u=n*.15+c*(1-i)*.35,g=n*.88;return Q(f,J(u),J(g))}function Pt(t){const e=tt(t),c=J(e/255),n=[[255,0,100],[0,200,255],[255,200,0],[150,0,255],[0,255,150],[255,100,0]],o=c*(n.length-1),h=Math.floor(o),s=o-h,i=Math.min(n.length-2,Math.max(0,h));return vt(n[i],n[i+1],s)}function Bt(t,e){if(e.length===0)return t;const c=G(t);let n=e[0],o=1/0;for(const h of e){const s=G(h),i=ht(c,s);i<o&&(o=i,n=h)}return n}const Tt={2:[[30,41,59],[248,250,252]],3:[[15,23,42],[148,163,184],[248,250,252]],4:[[15,23,42],[71,85,105],[203,213,225],[248,250,252]],5:[[15,23,42],[51,65,85],[148,163,184],[226,232,240],[248,250,252]]};function zt(t,e,c=128){const n=tt(t),o=Math.max(2,Math.min(5,e)),h=Tt[o];if(o===2)return n>c?h[1]:h[0];const s=256/o,i=Math.min(o-1,Math.floor(n/s));return h[i]}function yt(t,e,c){const n=J(c/100);return vt(t,e,n)}function Ft(t,e,c=100,n){let o;switch(e){case"warm_cool":o=at(t);break;case"fauvism":o=Ct(t);break;case"impressionism":o=Lt(t);break;case"noir":o=Ht(t);break;case"vintage":o=It(t);break;case"pop_art":o=Pt(t);break;case"custom_palette":o=at(t);break;default:o=at(t)}return c<100?yt(t,o,c):o}function jt(t){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${t.imgW} ${t.imgH}" width="${t.imgW}" height="${t.imgH}">
<rect width="${t.imgW}" height="${t.imgH}" fill="${t.isTransparent?"transparent":"white"}"/>
<g>${t.fills}</g><g>${t.lines}</g><g>${t.texts}</g>
</svg>`}function Et(t){return`<!DOCTYPE html>
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
<\/script></body></html>`}function Wt(t,e,c,n){const o=e*c,h=[],s=Math.max(1,Math.floor(o/1e5));for(let r=0;r<o;r+=s){const b=r*4,l=t[b],a=t[b+1],p=t[b+2],y=Math.max(l,a,p),w=Math.min(l,a,p),m=y>0?(y-w)/y:0,x=1+Math.floor(m*3);for(let v=0;v<x;v++)h.push(l,a,p)}const i=new Uint8Array(h),f=r=>{let b=255,l=0,a=255,p=0,y=255,w=0;for(let m=0;m<r.length;m+=3){const x=r[m],v=r[m+1],S=r[m+2];x<b&&(b=x),x>l&&(l=x),v<a&&(a=v),v>p&&(p=v),S<y&&(y=S),S>w&&(w=S)}return{colors:r,count:r.length/3,rMin:b,rMax:l,gMin:a,gMax:p,bMin:y,bMax:w}};let u=[f(i)];const g=Math.min(n*2.5,300);for(;u.length<g;){let r=0,b=-1;for(let x=0;x<u.length;x++){const v=u[x];if(v.count<2)continue;const S=Math.max(v.rMax-v.rMin,v.gMax-v.gMin,v.bMax-v.bMin)*Math.log2(v.count+1);S>b&&(b=S,r=x)}if(b<=0)break;const l=u[r],a=l.rMax-l.rMin>=l.gMax-l.gMin&&l.rMax-l.rMin>=l.bMax-l.bMin?0:l.gMax-l.gMin>=l.bMax-l.bMin?1:2,p=[];for(let x=0;x<l.colors.length;x+=3)p.push([l.colors[x],l.colors[x+1],l.colors[x+2]]);p.sort((x,v)=>x[a]-v[a]);const y=Math.floor(p.length/2),w=new Uint8Array(y*3),m=new Uint8Array((p.length-y)*3);for(let x=0;x<y;x++)w[x*3]=p[x][0],w[x*3+1]=p[x][1],w[x*3+2]=p[x][2];for(let x=y;x<p.length;x++){const v=x-y;m[v*3]=p[x][0],m[v*3+1]=p[x][1],m[v*3+2]=p[x][2]}u.splice(r,1,f(w),f(m))}const d=u.map(r=>{let b=0,l=0,a=0;for(let p=0;p<r.colors.length;p+=3)b+=r.colors[p],l+=r.colors[p+1],a+=r.colors[p+2];return[Math.round(b/r.count),Math.round(l/r.count),Math.round(a/r.count)]});return Dt(d,t,e,c,n)}function Dt(t,e,c,n,o){const h=c*n,s=Math.max(1,Math.floor(h/4e4));let i=[t[0]],f=[G(t[0])];for(;i.length<o&&i.length<t.length;){let d=-1,r=0;for(let b=0;b<t.length;b++){const l=G(t[b]);let a=1/0;for(const p of f){const y=(l[0]-p[0])**2+(l[1]-p[1])**2+(l[2]-p[2])**2;y<a&&(a=y)}a>d&&(d=a,r=b)}i.push(t[r]),f.push(G(t[r]))}for(let d=0;d<4;d++){const r=new Float64Array(o),b=new Float64Array(o),l=new Float64Array(o),a=new Float64Array(o);for(let p=0;p<h;p+=s){const y=p*4,w=e[y],m=e[y+1],x=e[y+2],v=G([w,m,x]);let S=1/0,T=0;for(let E=0;E<i.length;E++){const A=(v[0]-f[E][0])**2+(v[1]-f[E][1])**2+(v[2]-f[E][2])**2;A<S&&(S=A,T=E)}const z=Math.max(w,m,x),X=Math.min(w,m,x),j=1+(z>0?(z-X)/z:0)*3;r[T]+=v[0]*j,b[T]+=v[1]*j,l[T]+=v[2]*j,a[T]+=j}for(let p=0;p<i.length;p++)a[p]>0&&(f[p]=[r[p]/a[p],b[p]/a[p],l[p]/a[p]],i[p]=$t(f[p][0],f[p][1],f[p][2]))}const u=[],g=new Set;for(let d=0;d<i.length;d++)if(!g.has(d)){for(let r=d+1;r<i.length;r++){if(g.has(r))continue;const b=ht(f[d],f[r]),[l,a]=K(i[d]),p=a>.4?2.5:4.5;b<p&&g.add(r)}u.push(i[d])}return u.map(d=>{const[r,b,l]=K(d);if(b<.05)return d;const a=Math.min(1,b*1.08),p=l<.5?l*.96:Math.min(1,l*1.02);return Q(r,a,p)})}function Xt(t,e,c,n){if(n<=0)return t;const o=new Uint8ClampedArray(t.length),h=n,s=30;for(let i=0;i<c;i++)for(let f=0;f<e;f++){const u=(i*e+f)*4,g=t[u],d=t[u+1],r=t[u+2];let b=0,l=0,a=0,p=0;const y=Math.max(0,i-n),w=Math.min(c-1,i+n),m=Math.max(0,f-n),x=Math.min(e-1,f+n);for(let v=y;v<=w;v++)for(let S=m;S<=x;S++){const T=(v*e+S)*4,z=t[T],X=t[T+1],j=t[T+2],E=(S-f)*(S-f)+(v-i)*(v-i),A=(z-g)*(z-g)+(X-d)*(X-d)+(j-r)*(j-r),L=Math.exp(-(E/(2*h*h))-A/(2*s*s));b+=L,l+=z*L,a+=X*L,p+=j*L}o[u]=Math.round(l/b),o[u+1]=Math.round(a/b),o[u+2]=Math.round(p/b),o[u+3]=255}return o}function xt(t,e,c,n,o){if(n<=1)return t;const h=e*c,s=new Int32Array(h),i=new Int32Array(h);for(let f=0;f<2;f++){s.fill(-1);const u=[];let g=0;for(let a=0;a<h;a++)if(s[a]===-1){const p=t[a];let y=0,w=0;i[w++]=a,s[a]=g;let m=0;for(;y<w;){const x=i[y++];m++;const v=x%e,S=x/e|0;v>0&&s[x-1]===-1&&t[x-1]===p&&(s[x-1]=g,i[w++]=x-1),v<e-1&&s[x+1]===-1&&t[x+1]===p&&(s[x+1]=g,i[w++]=x+1),S>0&&s[x-e]===-1&&t[x-e]===p&&(s[x-e]=g,i[w++]=x-e),S<c-1&&s[x+e]===-1&&t[x+e]===p&&(s[x+e]=g,i[w++]=x+e)}u.push({area:m,color:p,label:g}),g++}const d=u.filter(a=>a.area<n);if(d.length===0)break;const r=new Map;for(const a of d)r.set(a.label,new Map);for(let a=0;a<h;a++){const p=s[a];if(r.has(p)){const y=a%e,w=a/e|0,m=r.get(p),x=v=>{if(s[v]!==p){const T=t[v];m.set(T,(m.get(T)||0)+1)}};y>0&&x(a-1),y<e-1&&x(a+1),w>0&&x(a-e),w<c-1&&x(a+e)}}let b=!1;const l=new Map;for(const a of d){const p=r.get(a.label);if(p.size===0)continue;let y=a.color,w=-1;for(const[m,x]of p.entries()){let v=x;if(o){const S=ht(o[a.color],o[m]);v=x*(100/(S+5))}v>w&&(w=v,y=m)}y!==a.color&&(l.set(a.label,y),b=!0)}if(!b)break;for(let a=0;a<h;a++){const p=s[a];l.has(p)&&(t[a]=l.get(p))}}return t}function Rt(t,e,c,n){if(n<=1.2)return t;const o=e*c,h=new Uint8Array(t),s=new Float32Array(o).fill(100),i=new Int32Array(o);let f=0,u=0;for(let r=0;r<c;r++)for(let b=0;b<e;b++){const l=r*e+b;let a=!1;(b>0&&t[l-1]!==t[l]||b<e-1&&t[l+1]!==t[l]||r>0&&t[l-e]!==t[l]||r<c-1&&t[l+e]!==t[l])&&(a=!0),a&&(s[l]=0,i[u++]=l)}for(;f<u;){const r=i[f++],b=r%e,l=r/e|0,a=s[r];for(let p=-1;p<=1;p++)for(let y=-1;y<=1;y++){if(y===0&&p===0)continue;const w=b+y,m=l+p;if(w>=0&&w<e&&m>=0&&m<c){const x=m*e+w,v=a+(y===0||p===0?1:1.4);s[x]>v&&(s[x]=v,i[u++]=x)}}}const g=n/2,d=new Uint8Array(o);for(let r=0;r<o;r++)s[r]>0&&s[r]<g&&(d[r]=1);for(let r=0;r<2;r++){const b=new Uint8Array(h);for(let l=0;l<o;l++)if(d[l]){const a=h[l],p=l%e,y=l/e|0;for(let w=-1;w<=1;w++)for(let m=-1;m<=1;m++){const x=(y+w)*e+(p+m);if(x>=0&&x<o&&s[x]<=.1&&h[x]!==a){const v=x+(x-l);v>=0&&v<o&&!d[v]&&(b[x]=a)}}}h.set(b)}return h}function qt(t,e,c,n){const o=new Uint8Array(t.length),h=Math.max(n+2,256),s=new Uint16Array(h);for(let i=0;i<c;i++)for(let f=0;f<e;f++){s.fill(0);for(let d=-1;d<=1;d++){const r=i+d;if(!(r<0||r>=c))for(let b=-1;b<=1;b++){const l=f+b;l<0||l>=e||s[t[r*e+l]]++}}let u=t[i*e+f],g=0;for(let d=0;d<h;d++)s[d]>g&&(g=s[d],u=d);o[i*e+f]=u}return o}function Nt(t,e,c){const n=[];for(let s=1;s<c;s++){let i=0;for(;i<e;){const f=t[s*e+i],u=t[(s-1)*e+i];if(f!==u){const g=i;for(i++;i<e&&t[s*e+i]===f&&t[(s-1)*e+i]===u;)i++;n.push([g,s,i,s])}else i++}}for(let s=1;s<e;s++){let i=0;for(;i<c;){const f=t[i*e+s],u=t[i*e+s-1];if(f!==u){const g=i;for(i++;i<c&&t[i*e+s]===f&&t[i*e+s-1]===u;)i++;n.push([s,g,s,i])}else i++}}let o=0;for(;o<e;){const s=t[o],i=o;for(o++;o<e&&t[o]===s;)o++;n.push([i,0,o,0])}for(o=0;o<e;){const s=t[(c-1)*e+o],i=o;for(o++;o<e&&t[(c-1)*e+o]===s;)o++;n.push([i,c,o,c])}let h=0;for(;h<c;){const s=t[h*e],i=h;for(h++;h<c&&t[h*e]===s;)h++;n.push([0,i,0,h])}for(h=0;h<c;){const s=t[h*e+e-1],i=h;for(h++;h<c&&t[h*e+e-1]===s;)h++;n.push([e,i,e,h])}return n}function bt(t,e,c,n,o){const h=n>0&&o>0&&t[(o-1)*e+(n-1)]?1:0,s=n<e&&o>0&&t[(o-1)*e+n]?1:0,i=n>0&&o<c&&t[o*e+(n-1)]?1:0,f=n<e&&o<c&&t[o*e+n]?1:0;return h<<3|s<<2|f<<1|i}function Ut(t,e){switch(t){case 1:return 2;case 2:return 1;case 3:return 2;case 4:return 0;case 5:return e===1?0:2;case 6:return 1;case 7:return 2;case 8:return 3;case 9:return 3;case 10:return e===2?1:3;case 11:return 3;case 12:return 0;case 13:return 0;case 14:return 1;default:return-1}}function Ot(t,e,c){const n=[];let o=-1,h=-1;t:for(let g=0;g<=c;g++)for(let d=0;d<=e;d++){const r=bt(t,e,c,d,g);if(r>0&&r<15){o=d,h=g;break t}}if(o<0)return[];let s=o,i=h,f=0;const u=e*c*4;for(let g=0;g<u&&!(g>0&&s===o&&i===h);g++){n.push([s,i]);const d=bt(t,e,c,s,i),r=Ut(d,f);if(r<0)break;switch(r){case 0:s++;break;case 1:i++;break;case 2:s--;break;case 3:i--;break}if(f=r,s<-1||s>e+1||i<-1||i>c+1)break}return n}function Jt(t,e,c){const n=e*c,o=new Float32Array(n).fill(-1),h=new Int32Array(n);let s=0,i=0;for(let g=0;g<c;g++)for(let d=0;d<e;d++){const r=g*e+d;if(!t[r])continue;let b=d===0||g===0||d===e-1||g===c-1;if(!b)for(let l=-1;l<=1;l++){for(let a=-1;a<=1;a++)if(!(a===0&&l===0)&&!t[(g+l)*e+(d+a)]){b=!0;break}if(b)break}b&&(o[r]=0,h[i++]=r)}for(;s<i;){const g=h[s++],d=g%e,r=g/e|0,b=o[g];for(let l=-1;l<=1;l++)for(let a=-1;a<=1;a++){if(a===0&&l===0)continue;const p=d+a,y=r+l;if(p>=0&&p<e&&y>=0&&y<c){const w=y*e+p;if(t[w]&&o[w]<0){const m=a!==0&&l!==0?1.414:1;o[w]=b+m,h[i++]=w}}}}let f=0,u=[0,0];for(let g=0;g<n;g++)o[g]>f&&(f=o[g],u=[g%e,g/e|0]);return{dist:o,maxDist:f,maxLoc:u}}function _t(t,e,c,n,o,h,s){const i=[];if(h<2)return i;if(s<1500||h<10){let r=0,b=0,l=0;for(let a=0;a<t.length;a++)t[a]>r&&(r=t[a],b=a%e,l=a/e|0);return i.push({x:b+n,y:l+o,maxDist:r}),i}const f=Math.max(50,h*3.5),u=Math.max(4,h*.4),g=[],d=Math.max(2,Math.floor(f/4));for(let r=0;r<c;r+=d)for(let b=0;b<e;b+=d){const l=t[r*e+b];if(l<u)continue;let a=!0;const p=Math.ceil(d*1.5);for(let y=-p;y<=p&&a;y+=d)for(let w=-p;w<=p;w+=d){if(w===0&&y===0)continue;const m=b+w,x=r+y;if(m>=0&&m<e&&x>=0&&x<c&&t[x*e+m]>l+.1){a=!1;break}}a&&g.push({x:b,y:r,d:l})}g.sort((r,b)=>b.d-r.d);for(const r of g){let b=!1;for(const l of i){const a=r.x+n-l.x,p=r.y+o-l.y;if(a*a+p*p<f*f){b=!0;break}}b||i.push({x:r.x+n,y:r.y+o,maxDist:r.d})}if(i.length===0){let r=0,b=0,l=0;for(let a=0;a<t.length;a++)t[a]>r&&(r=t[a],b=a%e,l=a/e|0);i.push({x:b+n,y:l+o,maxDist:r})}return i}function Vt(t,e,c,n){const o=[],h=[];for(const s of t)for(const i of s.labelPositions)i.maxDist<2||h.push({lbl:i,id:s.labelId,area:s.area});h.sort((s,i)=>s.area-i.area);for(const s of h){const{lbl:i}=s,u=Math.max(6,Math.min(14,i.maxDist*1.2))*.7;let g=i.x,d=i.y;for(let r=0;r<10;r++){let b=!1,l=g,a=d;for(const p of o){const y=l-p.x,w=a-p.y,m=u+p.r+2;if(y*y+w*w<m*m){const x=Math.sqrt(y*y+w*w)||1,v=(m-x)/x;l+=y*v*.6,a+=w*v*.6,b=!0}}if(b){const p=Math.floor(l),y=Math.floor(a);if(p>=0&&p<e&&y>=0&&y<c&&n[y*e+p]===s.id)g=l,d=a;else break}else break}i.x=g,i.y=d,o.push({x:g,y:d,r:u,id:s.id})}}function Gt(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Qt(t){const e=[];let c=0;for(;c<t.length;){const n=t[c];let o=1;for(;c+o<t.length&&t[c+o]===n&&o<255;)o++;e.push(String.fromCharCode(n,o)),c+=o}return btoa(e.join(""))}function st(t,e){if(t.length<=2)return t;const c=new Uint8Array(t.length);c[0]=1,c[t.length-1]=1;const n=[[0,t.length-1]];for(;n.length;){const[o,h]=n.pop();if(h-o<2)continue;let s=0,i=o;const[f,u]=t[o],[g,d]=t[h],r=g-f,b=d-u,l=Math.sqrt(r*r+b*b);for(let a=o+1;a<h;a++){const[p,y]=t[a],w=l>0?Math.abs(b*p-r*y+g*u-d*f)/l:Math.hypot(p-f,y-u);w>s&&(s=w,i=a)}s>e&&(c[i]=1,n.push([o,i],[i,h]))}return t.filter((o,h)=>c[h])}function ft(t,e=2,c=.8){if(t.length<3)return t;let n=t;for(let o=0;o<e;o++){const h=[n[0]],s=n.length;for(let i=1;i<s-1;i++){const f=n[i-1],u=n[i],g=n[i+1],d=f[0]-u[0],r=f[1]-u[1],b=g[0]-u[0],l=g[1]-u[1],a=Math.sqrt(d*d+r*r)||1,p=Math.sqrt(b*b+l*l)||1;(d*b+r*l)/(a*p)<c?h.push([(f[0]+u[0]*2+g[0])/4,(f[1]+u[1]*2+g[1])/4]):h.push([u[0],u[1]])}h.push(n[s-1]),n=h}return n}function mt(t,e=.1,c=4){const n=new Map,o=new Map;for(const[s,i,f,u]of t){const g=`${s},${i}`,d=`${f},${u}`;n.has(g)||n.set(g,[]),n.has(d)||n.set(d,[]),n.get(g).push(d),n.get(d).push(g)}for(const[s,i]of n)o.set(s,i.length);const h=[];for(const[s,i]of n)if(o.get(s)!==2)for(;n.get(s).length>0;){const f=[];let u=s;for(f.push(u.split(",").map(Number));;){const g=n.get(u);if(g.length===0)break;const d=g.shift(),r=n.get(d),b=r.indexOf(u);if(b>-1&&r.splice(b,1),f.push(d.split(",").map(Number)),o.get(d)!==2||d===s)break;u=d}f.length>1&&h.push(f)}for(const[s,i]of n)for(;n.get(s).length>0;){const f=[];let u=s;const g=s;for(f.push(u.split(",").map(Number));;){const d=n.get(u);if(d.length===0)break;const r=d.shift(),b=n.get(r),l=b.indexOf(u);if(l>-1&&b.splice(l,1),f.push(r.split(",").map(Number)),r===g)break;u=r}f.length>1&&h.push(f)}return h.map(s=>ft(st(s,e),c))}function Zt(t,e,c,n,o,h,s){if(e===1)return zt(t,n,o);if(e===2){if(c==="original")return t;if(s&&s.length>=2){const i=Bt(t,s);return h<100?yt(t,i,h):i}return Ft(t,c,h)}else return t}self.onmessage=function(t){const{type:e}=t.data;if(e==="process"){const{imgBuffer:c,width:n,height:o,numColors:h,detail:s}=t.data.payload,i=new Uint8ClampedArray(c),f=n*o,u=(g,d)=>{self.postMessage({type:"progress",msg:g,pct:d})};try{u("Подбор палитры…",5);const g=Wt(i,n,o,Math.max(2,Math.min(h,250))),d=g.length,r=g.map(M=>G(M));u("Подготовка (Сглаживание)…",10);const b=s>=9?1:s>=7?2:s>=4?3:4,l=Xt(i,n,o,b);u("Присвоение цветов…",20);const a=new Uint8Array(f);for(let M=0;M<f;M++){const $=M*4,k=G([l[$],l[$+1],l[$+2]]);let H=1/0,P=0;for(let F=0;F<d;F++){const C=k[0]-r[F][0],Y=k[1]-r[F][1],W=k[2]-r[F][2],D=C*C+Y*Y*1.1+W*W*1.1;D<H&&(H=D,P=F)}a[M]=P}const p=f/5e5,y=Math.max(8,Math.round(p*(12-s)*(12-s)));u("Быстрое объединение мелких зон…",30);const w=xt(a,n,o,y,r);u("Фильтрация шума…",50);let m=w;const x=s<=4?4:s<=7?3:2;for(let M=0;M<x;M++)m=qt(m,n,o,d);u("Устранение узких зон…",55);const v=s<=4?3:s<=7?2.4:2;m=Rt(m,n,o,v),u("Финальная очистка мелких артефактов…",58),m=xt(m,n,o,y,r),u("Построение границ…",59);const S=Nt(m,n,o),T=new Map;for(let M=0;M<S.length;M++){const $=S[M],k=`${$[0]},${$[1]}`,H=`${$[2]},${$[3]}`;T.set(k,(T.get(k)||0)+1),T.set(H,(T.get(H)||0)+1)}const z=new Set;for(const[M,$]of T)$!==2&&z.add(M);z.add("0,0"),z.add(`${n},0`),z.add(`0,${o}`),z.add(`${n},${o}`),u("Трассировка контуров…",60);const X=[],j=new Set;for(let M=0;M<f;M++)j.add(m[M]);const E=M=>{const $=new Int32Array(f).fill(-1),k=new Int32Array(f);let H=0;for(let P=0;P<f;P++)if(m[P]===M&&$[P]===-1){let F=0,C=0;k[C++]=P,$[P]=H;let Y=0,W=n,D=o,Z=-1,et=-1;for(;F<C;){const B=k[F++];Y++;const q=B%n,U=Math.floor(B/n);q<W&&(W=q),q>Z&&(Z=q),U<D&&(D=U),U>et&&(et=U),q>0&&m[B-1]===M&&$[B-1]===-1&&($[B-1]=H,k[C++]=B-1),q<n-1&&m[B+1]===M&&$[B+1]===-1&&($[B+1]=H,k[C++]=B+1),U>0&&m[B-n]===M&&$[B-n]===-1&&($[B-n]=H,k[C++]=B-n),U<o-1&&m[B+n]===M&&$[B+n]===-1&&($[B+n]=H,k[C++]=B+n)}if(Y>0){const B=Z-W+1,q=et-D+1,U=new Uint8Array(B*q);for(let O=0;O<q;O++)for(let _=0;_<B;_++)$[(D+O)*n+(W+_)]===H&&(U[O*B+_]=1);const dt=Ot(U,B,q);if(dt.length>=3){const O=dt.map(([R,ot])=>[R+W,ot+D]);let _=-1;for(let R=0;R<O.length;R++)if(z.has(`${O[R][0]},${O[R][1]}`)){_=R;break}let nt=[];if(_===-1)nt=ft(st(O,.1),4);else{const R=O.slice(_).concat(O.slice(0,_));R.push(R[0]);const ot=[];let rt=[R[0]];for(let V=1;V<R.length;V++)rt.push(R[V]),z.has(`${R[V][0]},${R[V][1]}`)&&(ot.push(rt),rt=[R[V]]);for(const V of ot){const gt=ft(st(V,.1),4);for(let ct=0;ct<gt.length-1;ct++)nt.push(gt[ct])}}const{dist:Mt,maxDist:ut,maxLoc:pt}=Jt(U,B,q),wt=_t(Mt,B,q,W,D,ut,Y);X.push({points:nt,smoothPoints:nt,labelId:M,center:[pt[0]+W,pt[1]+D],maxDist:ut,area:Y,labelPositions:wt})}}H++}};for(let M=0;M<d;M++)E(M),u(`Трассировка… ${M+1}/${d}`,60+Math.round(M/d*28));X.sort((M,$)=>$.area-M.area),Vt(X,n,o,m),u("Построение превью…",90);const A=new Uint8ClampedArray(f*4);for(let M=0;M<f;M++){const $=m[M]<d?g[m[M]]:[255,255,255];A[M*4]=$[0],A[M*4+1]=$[1],A[M*4+2]=$[2],A[M*4+3]=255}const L={};for(let M=0;M<d;M++)L[M]=g[M];u("Готово!",100);const I=new Float32Array(S.flat()).buffer;self.postMessage({type:"result",data:{previewBuffer:A.buffer,imgW:n,imgH:o,contoursData:X,colorPalette:L,validLabels:Array.from(j),scaleFactor:1,autoColors:d,autoDetail:s,labelMaskBuffer:m.buffer,boundaryEdgesBuffer:I}},[A.buffer,m.buffer,I])}catch(g){self.postMessage({type:"error",error:g.message})}}if(e==="export_svg"){const{res:c,contourWeight:n,numberWeight:o,colored:h,activeArray:s,showNums:i,isArtisticMode:f,artisticStep:u,artisticPresetId:g,notanLevels:d=2,notanThreshold:r=128,artIntensity:b=100,customArtPalette:l}=t.data.payload,{imgW:a,imgH:p,contoursData:y,colorPalette:w,boundaryEdges:m}=c,x=new Set(s),v=[...y].sort((I,M)=>M.area-I.area),S={},T=g||"original";for(const[I,M]of Object.entries(w)){const $=Number(I),k=M;f?S[$]=Zt(k,u,T,d,r,b,l):S[$]=k}let z="";if(f?u>0&&u<3:h)for(const I of v){const M=I.points;if(M&&M.length>0){const $=f||x.has(I.labelId),k=S[I.labelId];let H=`M ${M[0][0].toFixed(1)} ${M[0][1].toFixed(1)} `;for(let P=1;P<M.length;P++)H+=`L ${M[P][0].toFixed(1)} ${M[P][1].toFixed(1)} `;H+="Z",z+=$&&k?`<path d="${H}" fill="rgb(${k[0]},${k[1]},${k[2]})" stroke="rgb(${k[0]},${k[1]},${k[2]})" stroke-width="0.6" stroke-linejoin="round"/>`:`<path d="${H}" fill="white" stroke="white" stroke-width="0.6" stroke-linejoin="round"/>`}}let j="";if(f?u===0||u===3:!0){const I=m.filter(k=>!(k[1]===0&&k[3]===0)&&!(k[1]===p&&k[3]===p)&&!(k[0]===0&&k[2]===0)&&!(k[0]===a&&k[2]===a)),M=mt(I,.1,4),$=k=>{if(k.length<2)return"";for(let C=0;C<k.length-1;C++){const Y=k[C+1][0]-k[C][0],W=k[C+1][1]-k[C][1];if(Y*Y+W*W>4e4)return""}let H=`M ${k[0][0].toFixed(1)} ${k[0][1].toFixed(1)}`;if(k.length===2)return H+=` L ${k[1][0].toFixed(1)} ${k[1][1].toFixed(1)}`,H;const P=k.length,F=.15;for(let C=0;C<P-1;C++){const Y=k[C===0?0:C-1],W=k[C],D=k[C+1],Z=k[C+2>=P?P-1:C+2],et=W[0]+(D[0]-Y[0])*F,B=W[1]+(D[1]-Y[1])*F,q=D[0]-(Z[0]-W[0])*F,U=D[1]-(Z[1]-W[1])*F;H+=` C ${et.toFixed(1)} ${B.toFixed(1)}, ${q.toFixed(1)} ${U.toFixed(1)}, ${D[0].toFixed(1)} ${D[1].toFixed(1)}`}return H};if(f&&u===3&&n>0){const k=n/50;j=M.map(P=>{const F=$(P);if(!F)return"";const C=`<path d="${F}" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="${(2.5*k).toFixed(2)}" stroke-linecap="round" stroke-linejoin="round"/>`,Y=`<path d="${F}" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="${(1*k).toFixed(2)}" stroke-linecap="round" stroke-linejoin="round"/>`;return C+Y}).join("")}else{const k=n===0?0:f?.6:.2+n/100*.8,H=n===0?0:f?1:.5+n/100*1.5;if(H>0){const P=`rgba(40,40,40,${k.toFixed(2)})`;j=M.map(C=>{const Y=$(C);return Y?`<path d="${Y}" fill="none" stroke="${P}" stroke-width="${H.toFixed(2)}" stroke-linecap="round" stroke-linejoin="round"/>`:""}).join("")}}}let A="";if(i&&!f){const I=(o===0?0:.15+o/100*.85).toFixed(2);for(const M of v)for(const $ of M.labelPositions){if($.maxDist<2.5)continue;const k=Math.max(5,Math.min(12,$.maxDist*1.2)),H=h&&x.has(M.labelId),P=w[M.labelId];let F=`rgba(51,51,51,${I})`;H&&P&&(F=.299*P[0]+.587*P[1]+.114*P[2]>140?`rgba(0,0,0,${I})`:`rgba(255,255,255,${I})`);const C=Gt(String(M.labelId+1));A+=`<text x="${$.x.toFixed(1)}" y="${$.y.toFixed(1)}" font-size="${k.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-weight="bold" fill="${F}">${C}</text>`}}const L=jt({imgW:a,imgH:p,isTransparent:f&&u===3,fills:z,lines:j,texts:A});self.postMessage({type:"export_result",data:L})}if(e==="export_html"){const{res:c,contourWeight:n,isArtisticMode:o,origBase64:h,artisticPresetId:s,notanLevels:i=2,notanThreshold:f=128,artIntensity:u=100,customArtPalette:g}=t.data.payload,{imgW:d,imgH:r,colorPalette:b,validLabels:l,contoursData:a,boundaryEdges:p,labelMask:y}=c,w=[...l].sort((A,L)=>A-L),m={};for(const A of w){const L=b[A];L&&(m[A]=L)}const x=Qt(y),v=p.filter(A=>!(A[1]===0&&A[3]===0)&&!(A[1]===r&&A[3]===r)&&!(A[0]===0&&A[2]===0)&&!(A[0]===d&&A[2]===d)),S=mt(v),T=JSON.stringify(S.map(A=>st(A,.1).map(([L,I])=>[Math.round(L*10)/10,Math.round(I*10)/10]))),z=JSON.stringify(a.map(A=>({id:A.labelId,a:A.area,poly:A.points.map(([L,I])=>[Math.round(L*10)/10,Math.round(I*10)/10]),lp:A.labelPositions.filter(L=>L.maxDist>=2.5).map(L=>({x:Math.round(L.x*10)/10,y:Math.round(L.y*10)/10,d:Math.round(L.maxDist*10)/10}))}))),X=String(n===0?"0":(.2+n/100*.8).toFixed(2)),j=String(n===0?"0":(.5+n/100*1.5).toFixed(2));let E="";if(o){const A=g&&g.length>=2?JSON.stringify(g):"null";E=Et({imgW:d,imgH:r,palJSON:m,chainsJSON:T,maskRLE:x,notanLevels:i,notanThreshold:f,artIntensity:u,preset:s||"original",customPalJS:A,origBase64:h})}else{const A=w.map(L=>{const I=b[L];if(!I)return"";const $=.299*I[0]+.587*I[1]+.114*I[2]>140?"#000":"#fff";return`<div id="p${L}" class="cb" onclick="tc(${L})" style="background:rgb(${I[0]},${I[1]},${I[2]});color:${$}" title="Цвет ${L+1}"><span>${L+1}</span></div>`}).join("");E=Yt({imgW:d,imgH:r,palJSON:m,chainsJSON:T,labelsJSON:z,maskRLE:x,sl:w,lineAlpha:X,lineWidth:j,palButtons:A})}self.postMessage({type:"export_result",data:E})}};
//# sourceMappingURL=image.worker-Dec36IMf.js.map
