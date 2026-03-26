function tt(t){const e=t/255;return e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92}function pt(t){const e=tt(t[0]),s=tt(t[1]),o=tt(t[2]);return[e*.4124564+s*.3575761+o*.1804375,e*.2126729+s*.7151522+o*.072175,e*.0193339+s*.119192+o*.9503041]}function mt(t){const e=[.95047,1,1.08883],s=c=>c>.008856?Math.cbrt(c):7.787*c+16/116,o=s(t[0]/e[0]),n=s(t[1]/e[1]),r=s(t[2]/e[2]);return[116*n-16,500*(o-n),200*(n-r)]}function U(t){return mt(pt(t))}function gt(t,e,s){const o=(t+16)/116,n=e/500+o,r=o-s/200,c=d=>d>.206897?d*d*d:(d-16/116)/7.787,i=c(n)*.95047,l=c(o),f=c(r)*1.08883,u=i*3.2404542-l*1.5371385-f*.4985314,h=-i*.969266+l*1.8760108+f*.041556,a=i*.0556434-l*.2040259+f*1.0572252,m=d=>Math.max(0,Math.min(255,Math.round((d<=.0031308?12.92*d:1.055*Math.pow(d,1/2.4)-.055)*255)));return[m(u),m(h),m(a)]}function lt(t,e){const[s,o,n]=t,[r,c,i]=e,l=1,f=1,u=1,h=Math.sqrt(o*o+n*n),a=Math.sqrt(c*c+i*i),m=(h+a)/2,d=Math.pow(m,7),p=.5*(1-Math.sqrt(d/(d+Math.pow(25,7)))),y=o*(1+p),b=c*(1+p),g=Math.sqrt(y*y+n*n),v=Math.sqrt(b*b+i*i);let S=Math.atan2(n,y)*(180/Math.PI);S<0&&(S+=360);let M=Math.atan2(i,b)*(180/Math.PI);M<0&&(M+=360);const P=r-s,H=v-g;let z;g*v===0?z=0:Math.abs(M-S)<=180?z=M-S:M-S>180?z=M-S-360:z=M-S+360;const k=2*Math.sqrt(g*v)*Math.sin(z*Math.PI/360),I=(s+r)/2,w=(g+v)/2;let x;g*v===0?x=S+M:Math.abs(S-M)<=180?x=(S+M)/2:S+M<360?x=(S+M+360)/2:x=(S+M-360)/2;const L=1-.17*Math.cos((x-30)*Math.PI/180)+.24*Math.cos(2*x*Math.PI/180)+.32*Math.cos((3*x+6)*Math.PI/180)-.2*Math.cos((4*x-63)*Math.PI/180),C=1+.015*(I-50)*(I-50)/Math.sqrt(20+(I-50)*(I-50)),F=1+.045*w,$=1+.015*w*L,j=Math.pow(w,7),T=2*Math.sqrt(j/(j+Math.pow(25,7))),W=30*Math.exp(-Math.pow((x-275)/25,2)),B=-Math.sin(2*W*Math.PI/180)*T,Y=Math.pow(P/(l*C),2)+Math.pow(H/(f*F),2)+Math.pow(k/(u*$),2)+B*(H/(f*F))*(k/(u*$));return Y>0?Math.sqrt(Y):0}function G(t){const e=t[0]/255,s=t[1]/255,o=t[2]/255,n=Math.max(e,s,o),r=Math.min(e,s,o);let c=0,i=0;const l=(n+r)/2;if(n!==r){const f=n-r;switch(i=l>.5?f/(2-n-r):f/(n+r),n){case e:c=((s-o)/f+(s<o?6:0))/6;break;case s:c=((o-e)/f+2)/6;break;case o:c=((e-s)/f+4)/6;break}}return[c*360,i,l]}function N(t,e,s){const o=t/360;let n,r,c;if(e<1e-10)n=r=c=s;else{const i=(u,h,a)=>(a<0&&(a+=1),a>1&&(a-=1),a<.16666666666666666?u+(h-u)*6*a:a<.5?h:a<.6666666666666666?u+(h-u)*(.6666666666666666-a)*6:u),l=s<.5?s*(1+e):s+e-s*e,f=2*s-l;n=i(f,l,o+1/3),r=i(f,l,o),c=i(f,l,o-1/3)}return[Math.round(n*255),Math.round(r*255),Math.round(c*255)]}function _(t){return .299*t[0]+.587*t[1]+.114*t[2]}function nt(t){return(t%360+360)%360}function q(t){return Math.max(0,Math.min(1,t))}function E(t,e,s){return t+(e-t)*s}function at(t,e,s){return[Math.round(E(t[0],e[0],s)),Math.round(E(t[1],e[1],s)),Math.round(E(t[2],e[2],s))]}function Q(t,e,s){let o=e-t;return o>180&&(o-=360),o<-180&&(o+=360),nt(t+o*s)}const bt={2:[[30,41,59],[248,250,252]],3:[[15,23,42],[148,163,184],[248,250,252]],4:[[15,23,42],[71,85,105],[203,213,225],[248,250,252]],5:[[15,23,42],[51,65,85],[148,163,184],[226,232,240],[248,250,252]]};function xt(t,e,s=128){const o=_(t),n=Math.max(2,Math.min(5,e)),r=bt[n];if(n===2)return o>s?r[1]:r[0];const c=256/n,i=Math.min(n-1,Math.floor(o/c));return r[i]}function yt(t,e){if(e.length===0)return t;const s=U(t);let o=e[0],n=1/0;for(const r of e){const c=U(r),i=lt(s,c);i<n&&(n=i,o=r)}return o}function et(t){const e=_(t),s=220,o=.35,n=35,r=.55,c=.15,i=q(e/255);let l,f;if(i<.3){const h=i/.3;l=Q(s,n,h*.3),f=E(o,c,h)}else if(i>.7){const h=(i-.7)/.3;l=Q(n*.3,n,h),f=E(c,r,h)}else{const h=(i-.3)/.4;l=Q(s*.1,n*.2,h),f=c}const u=E(.15,.85,i);return N(l,f,u)}function vt(t){const[e,s]=G(t),o=_(t),r=nt(e+120),c=E(.85,1,s),i=q(o/255),l=i<.5?E(.1,.5,i*2)*.8:E(.5,.9,(i-.5)*2)*1.15;return N(r,c,q(l))}function Mt(t){const[e,s,o]=G(t),n=[-25,-12,0,12,25],r=Math.min(4,Math.floor(e%360/72)),c=n[r],i=nt(e+c),l=E(.55,.9,s),f=Math.max(.25,o)*1.12;return N(i,l,q(f))}function wt(t){const[e,s]=G(t),o=_(t),n=q(o/255);if(s>.5&&o>120){const f=[180,300,270],u=Math.min(2,Math.floor(n*3)),h=f[u];return N(h,.95,.65)}const c=210,i=E(.08,.35,n),l=E(.08,.45,n);return N(c,i,l)}function kt(t){const[e,s,o]=G(t),n=_(t),r=q(n/255),c=35,i=E(.75,.55,r),l=Q(e,c,i),f=o*.15+s*(1-i)*.35,u=o*.88;return N(l,q(f),q(u))}function St(t){const e=_(t),s=q(e/255),o=[[255,0,100],[0,200,255],[255,200,0],[150,0,255],[0,255,150],[255,100,0]],n=s*(o.length-1),r=Math.floor(n),c=n-r,i=Math.min(o.length-2,Math.max(0,r)),l=o[i],f=o[i+1];return at(l,f,c)}function ft(t,e,s){const o=q(s/100);return at(t,e,o)}function $t(t,e,s=100,o){let n;switch(e){case"warm_cool":n=et(t);break;case"fauvism":n=vt(t);break;case"impressionism":n=Mt(t);break;case"noir":n=wt(t);break;case"vintage":n=kt(t);break;case"pop_art":n=St(t);break;case"custom_palette":n=et(t);break;default:n=et(t)}return s<100?ft(t,n,s):n}function Ct(t,e,s,o){const n=e*s,r=Math.max(1,Math.floor(n/6e4)),c=[];for(let d=0;d<n;d+=r){const p=d*4;c.push(t[p],t[p+1],t[p+2])}const i=[],l=Math.max(1,Math.floor(n/2e4));for(let d=0;d<n;d+=l){const p=d*4,y=t[p],b=t[p+1],g=t[p+2],v=Math.max(y,b,g),S=Math.min(y,b,g);if(v>0&&(v-S)/v>.3)for(let M=0;M<3;M++)i.push(y,b,g)}const f=new Uint8Array(c.length+i.length);f.set(new Uint8Array(c)),f.set(new Uint8Array(i),c.length);const u=d=>{let p=255,y=0,b=255,g=0,v=255,S=0;for(let M=0;M<d.length;M+=3){const P=d[M],H=d[M+1],z=d[M+2];P<p&&(p=P),P>y&&(y=P),H<b&&(b=H),H>g&&(g=H),z<v&&(v=z),z>S&&(S=z)}return{colors:d,count:d.length/3,rMin:p,rMax:y,gMin:b,gMax:g,bMin:v,bMax:S}},h=[u(f)],a=Math.min(o*2,o+20);for(;h.length<a;){let d=0,p=-1;for(let k=0;k<h.length;k++){const I=h[k];if(I.count<2)continue;const w=Math.max(I.rMax-I.rMin,I.gMax-I.gMin,I.bMax-I.bMin)*Math.sqrt(I.count);w>p&&(p=w,d=k)}if(p<=0)break;const y=h[d],b=y.rMax-y.rMin,g=y.gMax-y.gMin,v=y.bMax-y.bMin;let S=0;b>=g&&b>=v?S=0:g>=b&&g>=v?S=1:S=2;const M=[];for(let k=0;k<y.colors.length;k+=3)M.push([y.colors[k],y.colors[k+1],y.colors[k+2]]);M.sort((k,I)=>k[S]-I[S]);const P=Math.floor(M.length/2),H=new Uint8Array(P*3),z=new Uint8Array((M.length-P)*3);for(let k=0;k<P;k++)H[k*3]=M[k][0],H[k*3+1]=M[k][1],H[k*3+2]=M[k][2];for(let k=P;k<M.length;k++){const I=k-P;z[I*3]=M[k][0],z[I*3+1]=M[k][1],z[I*3+2]=M[k][2]}h.splice(d,1,u(H),u(z))}const m=h.map(d=>{let p=0,y=0,b=0;for(let g=0;g<d.colors.length;g+=3)p+=d.colors[g],y+=d.colors[g+1],b+=d.colors[g+2];return[Math.round(p/d.count),Math.round(y/d.count),Math.round(b/d.count)]});return Lt(m,t,e,s,o)}function Lt(t,e,s,o,n){const r=s*o,c=Math.max(1,Math.floor(r/3e4)),i=[t[0]],l=[U(t[0])];for(;i.length<n&&i.length<t.length;){let m=-1,d=0;for(let p=0;p<t.length;p++){const y=U(t[p]);let b=1/0;for(const g of l){const v=y[0]-g[0],S=y[1]-g[1],M=y[2]-g[2];b=Math.min(b,v*v+S*S+M*M)}b>m&&(m=b,d=p)}i.push(t[d]),l.push(U(t[d]))}let f=i.slice(),u=f.map(m=>U(m));for(let m=0;m<3;m++){const d=new Float64Array(n),p=new Float64Array(n),y=new Float64Array(n),b=new Float64Array(n);for(let g=0;g<r;g+=c){const v=g*4,S=U([e[v],e[v+1],e[v+2]]);let M=1/0,P=0;for(let I=0;I<f.length;I++){const w=S[0]-u[I][0],x=S[1]-u[I][1],L=S[2]-u[I][2],C=w*w+x*x+L*L;C<M&&(M=C,P=I)}const H=Math.max(e[v],e[v+1],e[v+2]),z=Math.min(e[v],e[v+1],e[v+2]),k=1+(H>0?(H-z)/H:0)*2;d[P]+=S[0]*k,p[P]+=S[1]*k,y[P]+=S[2]*k,b[P]+=k}for(let g=0;g<f.length;g++)b[g]>0&&(u[g]=[d[g]/b[g],p[g]/b[g],y[g]/b[g]],f[g]=gt(u[g][0],u[g][1],u[g][2]))}const h=[],a=new Set;for(let m=0;m<f.length;m++)if(!a.has(m)){h.push(f[m]);for(let d=m+1;d<f.length;d++){if(a.has(d))continue;lt(u[m],u[d])<4&&a.add(d)}}return h.map(([m,d,p])=>{const[y,b,g]=G([m,d,p]);if(b<.05)return[m,d,p];const v=N(y,Math.min(1,b*1.15),g);return[v[0],v[1],v[2]]})}function It(t,e,s,o){if(o<=0)return t;const n=new Uint8ClampedArray(t.length),r=o,c=30;for(let i=0;i<s;i++)for(let l=0;l<e;l++){const f=(i*e+l)*4,u=t[f],h=t[f+1],a=t[f+2];let m=0,d=0,p=0,y=0;const b=Math.max(0,i-o),g=Math.min(s-1,i+o),v=Math.max(0,l-o),S=Math.min(e-1,l+o);for(let M=b;M<=g;M++)for(let P=v;P<=S;P++){const H=(M*e+P)*4,z=t[H],k=t[H+1],I=t[H+2],w=(P-l)*(P-l)+(M-i)*(M-i),x=(z-u)*(z-u)+(k-h)*(k-h)+(I-a)*(I-a),L=Math.exp(-(w/(2*r*r))-x/(2*c*c));m+=L,d+=z*L,p+=k*L,y+=I*L}n[f]=Math.round(d/m),n[f+1]=Math.round(p/m),n[f+2]=Math.round(y/m),n[f+3]=255}return n}function Pt(t,e,s,o){if(o<=1)return t;const n=e*s,r=new Int32Array(n),c=new Int32Array(n),i=new Int32Array(n);let l=!0,f=0;for(;l&&f<5;){l=!1,r.fill(-1),c.fill(0);let u=0;for(let a=0;a<n;a++)if(r[a]===-1){const m=t[a];let d=0,p=0;i[p++]=a,r[a]=u;let y=0;for(;d<p;){const b=i[d++];y++;const g=b%e,v=Math.floor(b/e);g>0&&r[b-1]===-1&&t[b-1]===m&&(r[b-1]=u,i[p++]=b-1),g<e-1&&r[b+1]===-1&&t[b+1]===m&&(r[b+1]=u,i[p++]=b+1),v>0&&r[b-e]===-1&&t[b-e]===m&&(r[b-e]=u,i[p++]=b-e),v<s-1&&r[b+e]===-1&&t[b+e]===m&&(r[b+e]=u,i[p++]=b+e)}c[u]=y,u++}const h=new Uint8Array(t);for(let a=0;a<n;a++){const m=r[a];if(c[m]<o){const d=a%e,p=Math.floor(a/e);let y=t[a],b=0;const g={},v=S=>{if(c[r[S]]>=c[m]&&t[S]!==t[a]){const M=t[S];g[M]=(g[M]||0)+1,g[M]>b&&(b=g[M],y=M)}};d>0&&v(a-1),d<e-1&&v(a+1),p>0&&v(a-e),p<s-1&&v(a+e),y!==t[a]&&(h[a]=y,l=!0)}}t.set(h),f++}return t}function At(t,e,s,o){const n=new Uint8Array(t.length),r=Math.max(o+2,256),c=new Uint16Array(r);for(let i=0;i<s;i++)for(let l=0;l<e;l++){c.fill(0);for(let h=-1;h<=1;h++){const a=i+h;if(!(a<0||a>=s))for(let m=-1;m<=1;m++){const d=l+m;d<0||d>=e||c[t[a*e+d]]++}}let f=t[i*e+l],u=0;for(let h=0;h<r;h++)c[h]>u&&(u=c[h],f=h);n[i*e+l]=f}return n}function Ht(t,e,s){const o=[];for(let n=1;n<s;n++){let r=0;for(;r<e;)if(t[n*e+r]!==t[(n-1)*e+r]){const c=r;for(;r<e&&t[n*e+r]!==t[(n-1)*e+r];)r++;o.push([c,n,r,n])}else r++}for(let n=1;n<e;n++){let r=0;for(;r<s;)if(t[r*e+n]!==t[r*e+n-1]){const c=r;for(;r<s&&t[r*e+n]!==t[r*e+n-1];)r++;o.push([n,c,n,r])}else r++}return o.push([0,0,e,0],[0,s,e,s],[0,0,0,s],[e,0,e,s]),o}function zt(t,e,s){const o=new Float32Array(e*s).fill(-1),n=[];for(let l=0;l<s;l++)for(let f=0;f<e;f++){const u=l*e+f;if(!t[u])continue;let h=f===0||l===0||f===e-1||l===s-1;if(!h){for(const a of[u-1,u+1,u-e,u+e])if(!t[a]){h=!0;break}}h&&(o[u]=0,n.push(u))}let r=0;for(;r<n.length;){const l=n[r++],f=l/e|0,u=l%e,h=[u>0?l-1:-1,u<e-1?l+1:-1,f>0?l-e:-1,f<s-1?l+e:-1];for(const a of h)a>=0&&t[a]&&o[a]<0&&(o[a]=o[l]+1,n.push(a))}let c=0,i=[0,0];for(let l=0;l<o.length;l++)o[l]>c&&(c=o[l],i=[l%e,l/e|0]);return{dist:o,maxDist:c,maxLoc:i}}function Ft(t,e,s,o,n,r,c){const i=[];if(r<2.5)return i;if(c<2e3||r<8){let a=0,m=0,d=0;for(let p=0;p<t.length;p++)t[p]>a&&(a=t[p],m=p%e,d=p/e|0);return i.push({x:m+o,y:d+n,maxDist:a}),i}const l=Math.max(60,r*4),f=Math.max(4,r*.3),u=[],h=Math.max(1,Math.floor(l/3));for(let a=0;a<s;a+=h)for(let m=0;m<e;m+=h){const d=t[a*e+m];if(d<f)continue;let p=!0;for(let y=-h;y<=h&&p;y+=h)for(let b=-h;b<=h;b+=h){if(b===0&&y===0)continue;const g=m+b,v=a+y;g>=0&&g<e&&v>=0&&v<s&&t[v*e+g]>d+1&&(p=!1)}p&&u.push({x:m,y:a,d})}u.sort((a,m)=>m.d-a.d);for(const a of u){let m=!1;for(const d of i){const p=a.x+o-d.x,y=a.y+n-d.y;if(p*p+y*y<l*l){m=!0;break}}m||i.push({x:a.x+o,y:a.y+n,maxDist:a.d})}if(i.length===0){let a=0,m=0,d=0;for(let p=0;p<t.length;p++)t[p]>a&&(a=t[p],m=p%e,d=p/e|0);i.push({x:m+o,y:d+n,maxDist:a})}return i}function jt(t){const e=[];for(const s of t)for(const o of s.labelPositions){if(o.maxDist<2)continue;const r=Math.max(6,Math.min(14,o.maxDist*1.2))*.55;let c=o.x,i=o.y;for(let l=0;l<6;l++){let f=!1;for(const u of e){const h=c-u.x,a=i-u.y,m=r+u.r+1;if(h*h+a*a<m*m){const d=Math.sqrt(h*h+a*a)||1;c+=h/d*2,i+=a/d*2,f=!0;break}}if(!f)break}o.x=c,o.y=i,e.push({x:c,y:i,r})}}function ct(t,e,s,o,n){const r=o>0&&n>0&&t[(n-1)*e+(o-1)]?1:0,c=o<e&&n>0&&t[(n-1)*e+o]?1:0,i=o>0&&n<s&&t[n*e+(o-1)]?1:0,l=o<e&&n<s&&t[n*e+o]?1:0;return r<<3|c<<2|l<<1|i}function Tt(t,e){switch(t){case 1:return 3;case 2:return 0;case 3:return 0;case 4:return 1;case 5:return e===0?3:1;case 6:return 1;case 7:return 0;case 8:return 2;case 9:return 3;case 10:return e===1?2:0;case 11:return 0;case 12:return 2;case 13:return 3;case 14:return 2;default:return-1}}function Wt(t,e,s){const o=[];let n=-1,r=-1;t:for(let u=0;u<=s;u++)for(let h=0;h<=e;h++){const a=ct(t,e,s,h,u);if(a>0&&a<15){n=h,r=u;break t}}if(n<0)return[];let c=n,i=r,l=0;const f=(e+s)*4;for(let u=0;u<f&&!(u>0&&c===n&&i===r);u++){o.push([c,i]);const h=ct(t,e,s,c,i),a=Tt(h,l);if(a<0)break;switch(a){case 0:c++;break;case 1:i++;break;case 2:c--;break;case 3:i--;break}if(l=a,c<-1||c>e+1||i<-1||i>s+1)break}return o}function V(t,e){if(t.length<=2)return t;const s=new Uint8Array(t.length);s[0]=1,s[t.length-1]=1;const o=[[0,t.length-1]];for(;o.length;){const[n,r]=o.pop();if(r-n<2)continue;let c=0,i=n;const[l,f]=t[n],[u,h]=t[r],a=u-l,m=h-f,d=Math.sqrt(a*a+m*m);for(let p=n+1;p<r;p++){const[y,b]=t[p],g=d>0?Math.abs(m*y-a*b+u*f-h*l)/d:Math.hypot(y-l,b-f);g>c&&(c=g,i=p)}c>e&&(s[i]=1,o.push([n,i],[i,r]))}return t.filter((n,r)=>s[r])}function Bt(t,e){if(t.length<4)return t;let s=t;for(let o=0;o<e;o++){const n=[],r=s.length;for(let c=0;c<r;c++){const i=s[(c-1+r)%r],l=s[c],f=s[(c+1)%r];n.push([(i[0]+l[0]*2+f[0])/4,(i[1]+l[1]*2+f[1])/4])}s=n}return s}function Yt(t,e){if(t.length<3)return t;let s=t;for(let o=0;o<e;o++){const n=[s[0]],r=s.length;for(let c=1;c<r-1;c++){const i=s[c-1],l=s[c],f=s[c+1];n.push([(i[0]+l[0]*2+f[0])/4,(i[1]+l[1]*2+f[1])/4])}n.push(s[r-1]),s=n}return s}function Dt(t){const e=t.length;if(e<3)return[];const s=[],o=.2;for(let n=0;n<e;n++){const r=t[(n-1+e)%e],c=t[n],i=t[(n+1)%e],l=t[(n+2)%e];s.push([c[0]+(i[0]-r[0])*o,c[1]+(i[1]-r[1])*o,i[0]-(l[0]-c[0])*o,i[1]-(l[1]-c[1])*o,i[0],i[1]])}return s}function rt(t){const e=new Map,s=(c,i)=>`${c},${i}`;for(const[c,i,l,f]of t){const u=s(c,i),h=s(l,f);e.has(u)||e.set(u,new Set),e.has(h)||e.set(h,new Set),e.get(u).add(h),e.get(h).add(u)}const o=new Set,n=[],r=c=>{const i=[];let l=c,f="";for(;;){o.add(l);const[u,h]=l.split(",").map(Number);i.push([u,h]);const a=e.get(l);let m="";for(const d of a)if(d!==f&&!o.has(d)){m=d;break}if(!m)break;f=l,l=m}i.length>=2&&n.push(i)};for(const[c,i]of e)o.has(c)||i.size===2||r(c);for(const[c]of e)o.has(c)||r(c);return n.map(c=>{const i=V(c,.5);return Yt(i,3)})}function Xt(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Et(t){const e=[];let s=0;for(;s<t.length;){const o=t[s];let n=1;for(;s+n<t.length&&t[s+n]===o&&n<255;)n++;e.push(String.fromCharCode(o,n)),s+=n}return btoa(e.join(""))}function Rt(t,e,s,o,n,r,c){if(.299*t[0]+.587*t[1]+.114*t[2],e===1)return xt(t,o,n);if(e===3){if(c&&c.length>=2){const i=yt(t,c);return r<100?ft(t,i,r):i}return $t(t,s,r)}else return t}self.onmessage=function(t){const{type:e}=t.data;if(e==="process"){const{imgBuffer:s,width:o,height:n,numColors:r,detail:c}=t.data.payload,i=new Uint8ClampedArray(s),l=o*n,f=(u,h)=>{self.postMessage({type:"progress",msg:u,pct:h})};try{f("Подбор палитры…",5);const u=Ct(i,o,n,Math.max(2,Math.min(r,250))),h=u.length,a=u.map(w=>U(w));f("Подготовка (Сглаживание)…",10);const m=c>=9?0:c>=7?1:c>=4?2:3,d=It(i,o,n,m);f("Присвоение цветов…",20);const p=new Uint8Array(l);for(let w=0;w<l;w++){const x=w*4,L=U([d[x],d[x+1],d[x+2]]);let C=1/0,F=0;for(let $=0;$<h;$++){const j=L[0]-a[$][0],T=L[1]-a[$][1],W=L[2]-a[$][2],B=j*j+T*T*1.1+W*W*1.1;B<C&&(C=B,F=$)}p[w]=F}const y=l/5e5,b=Math.max(4,Math.round(y*(12-c)*(12-c)));f("Быстрое объединение мелких зон…",30);const g=Pt(p,o,n,b);f("Фильтрация шума…",50);let v=g;const S=c<=4?3:c<=7?2:1;for(let w=0;w<S;w++)v=At(v,o,n,h);f("Построение границ…",59);const M=Ht(v,o,n);f("Трассировка контуров…",60);const P=[],H=new Set,z=w=>{const x=new Int32Array(l).fill(-1),L=new Int32Array(l);let C=0;for(let F=0;F<l;F++)if(v[F]===w&&x[F]===-1){let $=0,j=0;L[j++]=F,x[F]=C;let T=0,W=o,B=n,Y=-1,D=-1;for(;$<j;){const A=L[$++];T++;const X=A%o,R=Math.floor(A/o);X<W&&(W=X),X>Y&&(Y=X),R<B&&(B=R),R>D&&(D=R),X>0&&v[A-1]===w&&x[A-1]===-1&&(x[A-1]=C,L[j++]=A-1),X<o-1&&v[A+1]===w&&x[A+1]===-1&&(x[A+1]=C,L[j++]=A+1),R>0&&v[A-o]===w&&x[A-o]===-1&&(x[A-o]=C,L[j++]=A-o),R<n-1&&v[A+o]===w&&x[A+o]===-1&&(x[A+o]=C,L[j++]=A+o)}if(T>=b){const A=Y-W+1,X=D-B+1,R=new Uint8Array(A*X);for(let O=0;O<X;O++)for(let J=0;J<A;J++)x[(B+O)*o+(W+J)]===C&&(R[O*A+J]=1);const ot=Wt(R,A,X);if(ot.length>=3){const O=ot.map(([K,ut])=>[K+W,ut+B]),J=V(O,.8),st=Bt(J,3),ht=Dt(st),{dist:dt,maxDist:Z,maxLoc:it}=zt(R,A,X);if(Z>=2){H.add(w);const K=Ft(dt,A,X,W,B,Z,T);P.push({points:st,smoothPoints:ht,labelId:w,center:[it[0]+W,it[1]+B],maxDist:Z,area:T,labelPositions:K})}}}C++}};for(let w=0;w<h;w++)z(w),f(`Трассировка… ${w+1}/${h}`,60+Math.round(w/h*28));P.sort((w,x)=>x.area-w.area),jt(P),f("Построение превью…",90);const k=new Uint8ClampedArray(l*4);for(let w=0;w<l;w++){const x=v[w]<h?u[v[w]]:[255,255,255];k[w*4]=x[0],k[w*4+1]=x[1],k[w*4+2]=x[2],k[w*4+3]=255}const I={};for(let w=0;w<h;w++)I[w]=u[w];f("Готово!",100),self.postMessage({type:"result",data:{previewBuffer:k.buffer,imgW:o,imgH:n,contoursData:P,colorPalette:I,validLabels:Array.from(H),scaleFactor:1,autoColors:h,autoDetail:c,labelMaskBuffer:v.buffer,boundaryEdges:M}},[k.buffer,v.buffer])}catch(u){self.postMessage({type:"error",error:u.message})}}if(e==="export_svg"){const{res:s,contourWeight:o,numberWeight:n,colored:r,activeArray:c,showNums:i,isArtisticMode:l,artisticStep:f,artisticPresetId:u,notanLevels:h=2,notanThreshold:a=128,artIntensity:m=100,customArtPalette:d}=t.data.payload,{imgW:p,imgH:y,contoursData:b,colorPalette:g,boundaryEdges:v}=s,S=new Set(c),M=[...b].sort((C,F)=>F.area-C.area),P={},H=u||"warm_cool";for(const[C,F]of Object.entries(g)){const $=Number(C),j=F;l?P[$]=Rt(j,f,H,h,a,m,d):P[$]=j}let z="";if(l?f>0&&f<4:r){for(const C of M)if(C.smoothPoints&&C.smoothPoints.length>0){const F=l||S.has(C.labelId),$=P[C.labelId];let j=`M ${C.smoothPoints[0][4].toFixed(1)} ${C.smoothPoints[0][5].toFixed(1)} `;for(let T=0;T<C.smoothPoints.length;T++){const[W,B,Y,D,A,X]=C.smoothPoints[T];j+=`C ${W.toFixed(1)} ${B.toFixed(1)}, ${Y.toFixed(1)} ${D.toFixed(1)}, ${A.toFixed(1)} ${X.toFixed(1)} `}j+="Z",z+=F&&$?`<path d="${j}" fill="rgb(${$[0]},${$[1]},${$[2]})" stroke="none"/>`:`<path d="${j}" fill="white" stroke="none"/>`}}let I="";if(l?f===0||f===4:!0){const C=v.filter($=>!($[0]===0&&$[1]===0&&$[2]===p&&$[3]===0)&&!($[0]===0&&$[1]===y&&$[2]===p&&$[3]===y)&&!($[0]===0&&$[1]===0&&$[2]===0&&$[3]===y)&&!($[0]===p&&$[1]===0&&$[2]===p&&$[3]===y)),F=rt(C);if(l&&f===4)I=F.map(j=>{const T=V(j,1);if(T.length<2)return"";let W=`M ${T[0][0].toFixed(1)} ${T[0][1].toFixed(1)}`;for(let D=1;D<T.length;D++)W+=` L ${T[D][0].toFixed(1)} ${T[D][1].toFixed(1)}`;const B=`<path d="${W}" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,Y=`<path d="${W}" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round"/>`;return B+Y}).join("");else{const $=l?.6:(.2+o/100*.8).toFixed(2),j=l?1:(.5+o/100*1.5).toFixed(2),T=`rgba(40,40,40,${$})`;I=F.map(B=>{const Y=V(B,1);if(Y.length<2)return"";let D=`M ${Y[0][0].toFixed(1)} ${Y[0][1].toFixed(1)}`;for(let A=1;A<Y.length;A++)D+=` L ${Y[A][0].toFixed(1)} ${Y[A][1].toFixed(1)}`;return`<path d="${D}" fill="none" stroke="${T}" stroke-width="${j}" stroke-linecap="round" stroke-linejoin="round"/>`}).join("")}}let x="";if(i&&!l){const C=(.15+n/100*.85).toFixed(2);for(const F of M)for(const $ of F.labelPositions){if($.maxDist<2.5)continue;const j=Math.max(5,Math.min(12,$.maxDist*1.2)),T=r&&S.has(F.labelId),W=g[F.labelId];let B=`rgba(51,51,51,${C})`;T&&W&&(B=.299*W[0]+.587*W[1]+.114*W[2]>140?`rgba(0,0,0,${C})`:`rgba(255,255,255,${C})`);const Y=Xt(String(F.labelId+1));x+=`<text x="${$.x.toFixed(1)}" y="${$.y.toFixed(1)}" font-size="${j.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-weight="bold" fill="${B}">${Y}</text>`}}const L=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${p} ${y}" width="${p}" height="${y}">
      <rect width="${p}" height="${y}" fill="${l&&f===4?"transparent":"white"}"/>
      <g>${z}</g><g>${I}</g><g>${x}</g>
    </svg>`;self.postMessage({type:"export_result",data:L})}if(e==="export_html"){const{res:s,contourWeight:o,isArtisticMode:n,origBase64:r,artisticPresetId:c,notanLevels:i=2,notanThreshold:l=128,artIntensity:f=100,customArtPalette:u}=t.data.payload,{imgW:h,imgH:a,colorPalette:m,validLabels:d,contoursData:p,boundaryEdges:y,labelMask:b}=s,g=[...d].sort((x,L)=>x-L),v={};for(const x of g){const L=m[x];L&&(v[x]=L)}const S=Et(b),M=y.filter(x=>!(x[0]===0&&x[1]===0&&x[2]===h&&x[3]===0)&&!(x[0]===0&&x[1]===a&&x[2]===h&&x[3]===a)&&!(x[0]===0&&x[1]===0&&x[2]===0&&x[3]===a)&&!(x[0]===h&&x[1]===0&&x[2]===h&&x[3]===a)),P=rt(M),H=JSON.stringify(P.map(x=>V(x,1).map(([L,C])=>[Math.round(L*10)/10,Math.round(C*10)/10]))),z=JSON.stringify(p.map(x=>({id:x.labelId,lp:x.labelPositions.filter(L=>L.maxDist>=2.5).map(L=>({x:Math.round(L.x*10)/10,y:Math.round(L.y*10)/10,d:Math.round(L.maxDist*10)/10}))}))),k=(.2+o/100*.8).toFixed(2),I=(.5+o/100*1.5).toFixed(2);let w="";if(n){const x=u&&u.length>=2?JSON.stringify(u):"null";w=`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5,user-scalable=yes">
<title>Урок живописи</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%;overflow:hidden;overscroll-behavior:none;font-family:system-ui,-apple-system,sans-serif;background:#0f172a;color:#e2e8f0;display:flex;flex-direction:column}
body.light{background:#f1f5f9;color:#334155}
.top{display:flex;gap:6px;padding:12px;justify-content:center;background:#1e293b;border-bottom:1px solid #334155;z-index:10;flex-wrap:wrap}
body.light .top{background:#ffffff;border-bottom:1px solid #e2e8f0}
.btn{padding:10px 16px;background:#334155;color:#94a3b8;border:none;border-radius:8px;cursor:pointer;font-weight:700;font-size:13px;transition:0.2s;display:flex;align-items:center;justify-content:center}
body.light .btn{background:#e2e8f0;color:#64748b}
.btn.on{background:#6366f1;color:#fff;box-shadow:0 4px 12px rgba(99,102,241,0.3)}
body.light .btn.on{background:#6366f1;color:#fff}
.vp{flex:1;position:relative;overflow:hidden;cursor:grab;touch-action:none;background:#0f172a}
body.light .vp{background:#f1f5f9}
.vp:active{cursor:grabbing}
#cv{position:absolute;top:0;left:0;transform-origin:0 0;will-change:transform;image-rendering:auto}
.zu{position:absolute;bottom:12px;right:12px;display:flex;gap:6px;z-index:100}
.zb{width:40px;height:40px;background:rgba(30,41,59,.92);border:1px solid #475569;border-radius:50%;font-size:18px;font-weight:700;display:flex;justify-content:center;align-items:center;cursor:pointer;color:#e2e8f0}
body.light .zb{background:rgba(255,255,255,.92);border:1px solid #cbd5e1;color:#334155}
.theme-btn svg{display:none}
body.light .theme-btn .moon{display:block}
body:not(.light) .theme-btn .sun{display:block}
</style>
</head>
<body class="light">
<script>
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.remove('light');
  }
<\/script>
<div class="top">
<button class="btn on" onclick="setStep(0)" id="b0">Эскиз</button>
<button class="btn" onclick="setStep(1)" id="b1">Тень</button>
<button class="btn" onclick="setStep(2)" id="b2">База</button>
<button class="btn" onclick="setStep(3)" id="b3">Арт</button>
<button class="btn" onclick="setStep(4)" id="b4">Детали</button>
<button class="btn theme-btn" onclick="document.body.classList.toggle('light');draw()" aria-label="Тема">
 <svg class="sun" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42"/></svg>
 <svg class="moon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
</button>
</div>
<img id="origImg" src="${r}" style="display:none;" onload="draw()" />
<div class="vp" id="vp"><canvas id="cv"></canvas>
<div class="zu"><div class="zb" onclick="mz(1.3)">+</div><div class="zb" onclick="mz(.77)">&minus;</div><div class="zb" onclick="rv()">⟳</div></div>
</div>
<script>
var W=${h},H=${a},pal=${JSON.stringify(v)},chains=${H},maskRLE="${S}";
var notanLevels=${i},notanThreshold=${l},artIntensity=${f};
var customPal=${x};
var raw=atob(maskRLE),mask=new Uint8Array(W*H),mi=0;
for(var ri=0;ri<raw.length;ri+=2){var v=raw.charCodeAt(ri),cnt=raw.charCodeAt(ri+1);for(var ci=0;ci<cnt;ci++){if(mi<mask.length) mask[mi++]=v;}}
var cv=document.getElementById("cv"),ctx=cv.getContext("2d");
var img=document.getElementById("origImg");
cv.width=W;cv.height=H;cv.style.width=W+"px";cv.style.height=H+"px";
var sc=1,px=0,py=0,vp=document.getElementById("vp"),raf=0,step=0;
function at(){if(!raf) raf=requestAnimationFrame(()=>{cv.style.transform="translate3d("+px+"px,"+py+"px,0) scale("+sc+")";raf=0;});}
function rv(){var r=vp.getBoundingClientRect(),s=Math.min(r.width/W,r.height/H)*.92;sc=s;px=(r.width-W*s)/2;py=(r.height-H*s)/2;at();}
function mz(f){var r=vp.getBoundingClientRect(),mx=r.width/2,my=r.height/2;px=mx-(mx-px)*f;py=my-(my-py)*f;sc*=f;at();}
function hslToRgb(h,s,l){
 var r,g,b; if(s<1e-10){r=g=b=l;}else{
 var q=l<0.5?l*(1+s):l+s-l*s,p=2*l-q,H=h/360;
 var f=function(t){if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;};
 r=f(H+1/3);g=f(H);b=f(H-1/3);} return [Math.round(r*255),Math.round(g*255),Math.round(b*255)];
}
function rgbToHsl(r,g,b){
 r/=255;g/=255;b/=255; var mx=Math.max(r,g,b),mn=Math.min(r,g,b),h=0,s=0,l=(mx+mn)/2;
 if(mx!==mn){var d=mx-mn;s=l>0.5?d/(2-mx-mn):d/(mx+mn);switch(mx){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}h/=6;}
 return [h*360,s,l];
}
function getLum(r,g,b){return 0.299*r+0.587*g+0.114*b;}
function notanColor(r,g,b){
 var lum=getLum(r,g,b);
 var palettes={2:[[30,41,59],[248,250,252]],3:[[15,23,42],[148,163,184],[248,250,252]],4:[[15,23,42],[71,85,105],[203,213,225],[248,250,252]],5:[[15,23,42],[51,65,85],[148,163,184],[226,232,240],[248,250,252]]};
 var p=palettes[notanLevels]||palettes[2];
 if(notanLevels===2) return lum>notanThreshold?p[1]:p[0];
 var step=256/notanLevels;
 var idx=Math.min(notanLevels-1,Math.floor(lum/step));
 return p[idx];
}
function nearestCustom(r,g,b){
 if(!customPal||customPal.length<2) return [r,g,b];
 var best=customPal[0],bd=1e9;
 for(var i=0;i<customPal.length;i++){var c=customPal[i];var d=(c[0]-r)*(c[0]-r)+(c[1]-g)*(c[1]-g)+(c[2]-b)*(c[2]-b);if(d<bd){bd=d;best=c;}}
 return best;
}
function blendInt(orig,styled,intensity){
 var t=intensity/100;
 return [Math.round(orig[0]+(styled[0]-orig[0])*t),Math.round(orig[1]+(styled[1]-orig[1])*t),Math.round(orig[2]+(styled[2]-orig[2])*t)];
}
function draw(){
 ctx.clearRect(0,0,W,H);
 if(step===4 && img && img.src.length > 20){
 ctx.filter = document.body.classList.contains('light') ? "brightness(0.9)" : "brightness(0.6)";
 ctx.drawImage(img,0,0,W,H);
 ctx.filter = "none";
 } else {
 ctx.fillStyle="#fff";
 ctx.fillRect(0,0,W,H);
 }
 if(step>0&&step<4){
 var id=ctx.createImageData(W,H),d=id.data;
 for(var i=0;i<W*H;i++){
 var c=pal[mask[i]];
 if(c){
 var nr=c[0],ng=c[1],nb=c[2];
 if(step===1){
  var nc=notanColor(c[0],c[1],c[2]);
  nr=nc[0];ng=nc[1];nb=nc[2];
 }
 else if(step===3){
  if(customPal&&customPal.length>=2){
   var styled=nearestCustom(c[0],c[1],c[2]);
   if(artIntensity<100){var bl=blendInt(c,styled,artIntensity);nr=bl[0];ng=bl[1];nb=bl[2];}
   else{nr=styled[0];ng=styled[1];nb=styled[2];}
  } else {
   var lum=getLum(c[0],c[1],c[2]);
   var hsl=rgbToHsl(c[0],c[1],c[2]),nh=hsl[0],ns=Math.min(100,hsl[1]*1.5+30);
   if(lum<50){nh=240;ns=60;}else if(lum<110){nh=320;ns=50;}else if(lum<180){nh=15;ns=70;}else{nh=45;ns=80;}
   var styled2=hslToRgb(nh,ns,hsl[2]);
   if(artIntensity<100){var bl2=blendInt(c,styled2,artIntensity);nr=bl2[0];ng=bl2[1];nb=bl2[2];}
   else{nr=styled2[0];ng=styled2[1];nb=styled2[2];}
  }
 }
 d[i*4]=nr;d[i*4+1]=ng;d[i*4+2]=nb;d[i*4+3]=255;
 }else{d[i*4]=255;d[i*4+1]=255;d[i*4+2]=255;d[i*4+3]=255;}
 }
 ctx.putImageData(id,0,0);
 }
 if(step===0||step===4){
 ctx.strokeStyle=step===4?"rgba(255,255,255,0.8)":"rgba(40,40,40,0.8)";
 if(step===4){
 ctx.lineWidth=2.5; ctx.strokeStyle="rgba(0,0,0,0.4)"; ctx.lineCap="round"; ctx.lineJoin="round";
 ctx.beginPath();
 for(var i=0;i<chains.length;i++){ var ch=chains[i]; if(ch.length<2)continue; ctx.moveTo(ch[0][0],ch[0][1]); for(var j=1;j<ch.length;j++) ctx.lineTo(ch[j][0],ch[j][1]); }
 ctx.stroke();
 ctx.strokeStyle="rgba(255,255,255,0.8)";
 }
 ctx.lineWidth=1.0; ctx.lineCap="round"; ctx.lineJoin="round";
 ctx.beginPath();
 for(var i=0;i<chains.length;i++){
 var ch=chains[i]; if(ch.length<2)continue;
 ctx.moveTo(ch[0][0],ch[0][1]); for(var j=1;j<ch.length;j++) ctx.lineTo(ch[j][0],ch[j][1]);
 }
 ctx.stroke();
 }
}
function setStep(s){step=s;for(var i=0;i<5;i++)document.getElementById("b"+i).className=i===s?"btn on":"btn";draw();}
var dr=false,dsx,dsy;
vp.onmousedown=function(e){dr=true;dsx=e.clientX-px;dsy=e.clientY-py};
document.onmousemove=function(e){if(dr){px=e.clientX-dsx;py=e.clientY-dsy;at()}};
document.onmouseup=function(){dr=false};
vp.onwheel=function(e){e.preventDefault();var f=e.deltaY<0?1.15:.87,r=vp.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;px=mx-(mx-px)*f;py=my-(my-py)*f;sc*=f;at();};
var td=false,tsx,tsy,tid,tis,tip,tiq,ticx,ticy;
vp.ontouchstart=function(e){
 if(e.touches.length===1){td=true;tsx=e.touches[0].clientX-px;tsy=e.touches[0].clientY-py;}
 else if(e.touches.length===2){e.preventDefault();td=false;tid=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);tis=sc;tip=px;tiq=py;var r=vp.getBoundingClientRect();ticx=(e.touches[0].clientX+e.touches[1].clientX)/2-r.left;ticy=(e.touches[0].clientY+e.touches[1].clientY)/2-r.top;}
};
vp.ontouchmove=function(e){
 e.preventDefault();
 if(e.touches.length===1&&td){px=e.touches[0].clientX-tsx;py=e.touches[0].clientY-tsy;at();}
 else if(e.touches.length===2){var d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY),f=d/tid,r=vp.getBoundingClientRect(),cx=(e.touches[0].clientX+e.touches[1].clientX)/2-r.left,cy=(e.touches[0].clientY+e.touches[1].clientY)/2-r.top;sc=tis*f;px=cx-(ticx-tip)*f;py=cy-(ticy-tiq)*f;at();}
};
vp.ontouchend=function(e){if(!e.touches.length)td=false;else if(e.touches.length===1){td=true;tsx=e.touches[0].clientX-px;tsy=e.touches[0].clientY-py;}};
document.onkeydown=function(e){if(e.key>='1'&&e.key<='5'){setStep(parseInt(e.key)-1);}if(e.key==='0'){setStep(0);}};
rv();draw();window.onresize=function(){rv()};
<\/script></body></html>`}else w=`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5,user-scalable=yes">
<title>Раскраска по номерам</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}html,body{height:100%;overflow:hidden;overscroll-behavior:none}body{font-family:system-ui,-apple-system,sans-serif;background:#f1f5f9;display:flex;flex-direction:column;height:100dvh;color:#334155}body.dk{background:#0f172a;color:#e2e8f0}.top{display:flex;gap:6px;padding:8px;justify-content:center;flex-wrap:wrap;flex-shrink:0}.btn{padding:8px 16px;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:700;font-size:13px;user-select:none;touch-action:manipulation;min-height:40px;display:flex;align-items:center;justify-content:center}.btn:active{transform:scale(.96)}.btn.on{background:#16a34a}.btn.sec{background:#475569}body.dk .btn.sec{background:#334155}.btn svg{display:none}body.dk .btn .sun{display:block}body:not(.dk) .btn .moon{display:block}.bar{display:flex;gap:4px;flex-wrap:wrap;justify-content:center;padding:8px 12px;background:#fff;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;max-height:20vh;overflow-y:auto;flex-shrink:0;-webkit-overflow-scrolling:touch}body.dk .bar{background:#1e293b;border-color:#334155}.cb{width:38px;height:38px;border-radius:8px;cursor:pointer;border:2px solid rgba(0,0,0,.1);display:flex;justify-content:center;align-items:center;font-weight:700;font-size:11px;user-select:none;transition:transform .1s;touch-action:manipulation;min-width:38px}.cb.sel{outline:3px solid #6366f1;outline-offset:1px;transform:scale(1.1);z-index:2}.vp{flex:1;position:relative;overflow:hidden;cursor:grab;touch-action:none;background:#e2e8f0}body.dk .vp{background:#1e293b}.vp:active{cursor:grabbing}#cv{position:absolute;top:0;left:0;transform-origin:0 0;will-change:transform;image-rendering:auto}.zu{position:absolute;bottom:12px;right:12px;display:flex;gap:6px;z-index:100}.zb{width:40px;height:40px;background:rgba(255,255,255,.92);border:1px solid #cbd5e1;border-radius:50%;font-size:18px;font-weight:700;display:flex;justify-content:center;align-items:center;cursor:pointer;color:#334155}body.dk .zb{background:rgba(30,41,59,.92);border-color:#475569;color:#e2e8f0}.zb:active{transform:scale(.9)}
</style>
</head>
<body>
<script>
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dk');
  }
<\/script>
<div class="top">
<button class="btn" onclick="ta()">Все цвета</button>
<button class="btn sec" id="nb" onclick="tn()">Скрыть №</button>
<button class="btn sec" onclick="document.body.classList.toggle('dk');draw()" aria-label="Переключить тему">
 <svg class="sun" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42"/></svg>
 <svg class="moon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
</button>
</div>
<div class="bar" id="pal">${g.map(L=>{const C=m[L];if(!C)return"";const $=.299*C[0]+.587*C[1]+.114*C[2]>140?"#000":"#fff";return`<div id="p${L}" class="cb" onclick="tc(${L})" style="background:rgb(${C[0]},${C[1]},${C[2]});color:${$}" title="Цвет ${L+1}"><span>${L+1}</span></div>`}).join("")}</div>
<div class="vp" id="vp"><canvas id="cv"></canvas><div class="zu"><div class="zb" onclick="mz(1.3)">+</div><div class="zb" onclick="mz(.77)">&minus;</div><div class="zb" onclick="rv()">⟳</div></div></div>
<script>
var W=${h},H=${a},pal=${JSON.stringify(v)},chains=${H},lbls=${z},maskRLE="${S}",ids=[${g.join(",")}],ac=new Set(),sn=true,lineAlpha=${k},lineWidth=${I},raw=atob(maskRLE),mask=new Uint8Array(W*H),mi=0;
for(var ri=0;ri<raw.length;ri+=2){var v=raw.charCodeAt(ri),cnt=raw.charCodeAt(ri+1);for(var ci=0;ci<cnt;ci++){if(mi<mask.length) mask[mi++]=v;}}
var cv=document.getElementById("cv"),ctx=cv.getContext("2d");cv.width=W*2;cv.height=H*2;cv.style.width=W+"px";cv.style.height=H+"px";
var sc=1,px=0,py=0,vp=document.getElementById("vp"),raf=0;
function at(){if(!raf) raf=requestAnimationFrame(()=>{cv.style.transform="translate3d("+px+"px,"+py+"px,0) scale("+sc+")";raf=0;});}
function rv(){var r=vp.getBoundingClientRect(),s=Math.min(r.width/W,r.height/H)*.92;sc=s;px=(r.width-W*s)/2;py=(r.height-H*s)/2;at();}
function mz(f){var r=vp.getBoundingClientRect(),mx=r.width/2,my=r.height/2;px=mx-(mx-px)*f;py=my-(my-py)*f;sc*=f;at();}
function draw(){
ctx.clearRect(0,0,cv.width,cv.height);ctx.fillStyle="#fff";ctx.fillRect(0,0,cv.width,cv.height);
if(ac.size>0){var fc=document.createElement("canvas");fc.width=W;fc.height=H;var fctx=fc.getContext("2d"),id=fctx.createImageData(W,H),d=id.data;for(var i=0;i<W*H;i++){var lb=mask[i];if(ac.has(lb)&&pal[lb]){var c=pal[lb];d[i*4]=c[0];d[i*4+1]=c[1];d[i*4+2]=c[2];d[i*4+3]=255;}else{d[i*4]=255;d[i*4+1]=255;d[i*4+2]=255;d[i*4+3]=255;}}fctx.putImageData(id,0,0);ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality="high";ctx.drawImage(fc,0,0,W*2,H*2);fc.width=0;fc.height=0;}
ctx.save();ctx.scale(2,2);ctx.strokeStyle="rgba(40,40,40,"+lineAlpha+")";ctx.lineWidth=lineWidth;ctx.lineCap="round";ctx.lineJoin="round";
for(var i=0;i<chains.length;i++){var ch=chains[i];if(ch.length<2)continue;ctx.beginPath();ctx.moveTo(ch[0][0],ch[0][1]);for(var j=1;j<ch.length;j++)ctx.lineTo(ch[j][0],ch[j][1]);ctx.stroke();}
if(sn){ctx.textAlign="center";ctx.textBaseline="middle";for(var i=0;i<lbls.length;i++){var cd=lbls[i];for(var j=0;j<cd.lp.length;j++){var lp=cd.lp[j];if(lp.d<2.5)continue;var fs=Math.max(7,Math.min(16,lp.d*1.3));ctx.font="bold "+fs+"px sans-serif";var isAct=ac.has(cd.id),col=pal[cd.id];if(isAct&&col){var lum=.299*col[0]+.587*col[1]+.114*col[2];ctx.fillStyle=lum>140?"rgba(0,0,0,0.75)":"rgba(255,255,255,0.9)";}else{ctx.fillStyle="rgba(51,51,51,0.75)";}ctx.fillText(String(cd.id+1),lp.x,lp.y);}}}ctx.restore();
}
function tc(i){var el=document.getElementById("p"+i);if(ac.has(i)){ac.delete(i);el.classList.remove("sel");}else{ac.add(i);el.classList.add("sel");}draw();}
function ta(){if(ac.size===ids.length){ac.clear();document.querySelectorAll(".cb").forEach(e=>e.classList.remove("sel"));}else{ids.forEach(i=>{ac.add(i);document.getElementById("p"+i).classList.add("sel");});}draw();}
function tn(){sn=!sn;var b=document.getElementById("nb");b.textContent=sn?"Скрыть №":"Показать №";if(!sn)b.classList.add("on");else b.classList.remove("on");draw();}
var dr=false,dsx,dsy;vp.onmousedown=function(e){dr=true;dsx=e.clientX-px;dsy=e.clientY-py};document.onmousemove=function(e){if(dr){px=e.clientX-dsx;py=e.clientY-dsy;at()}};document.onmouseup=function(){dr=false};
vp.onwheel=function(e){e.preventDefault();var f=e.deltaY<0?1.15:.87,r=vp.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;px=mx-(mx-px)*f;py=my-(my-py)*f;sc*=f;at();};
var td=false,tsx,tsy,tid,tis,tip,tiq,ticx,ticy;
vp.ontouchstart=function(e){if(e.touches.length===1){td=true;tsx=e.touches[0].clientX-px;tsy=e.touches[0].clientY-py;}else if(e.touches.length===2){e.preventDefault();td=false;tid=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);tis=sc;tip=px;tiq=py;var r=vp.getBoundingClientRect();ticx=(e.touches[0].clientX+e.touches[1].clientX)/2-r.left;ticy=(e.touches[0].clientY+e.touches[1].clientY)/2-r.top;}};
vp.ontouchmove=function(e){e.preventDefault();if(e.touches.length===1&&td){px=e.touches[0].clientX-tsx;py=e.touches[0].clientY-tsy;at();}else if(e.touches.length===2){var d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY),f=d/tid,r=vp.getBoundingClientRect(),cx=(e.touches[0].clientX+e.touches[1].clientX)/2-r.left,cy=(e.touches[0].clientY+e.touches[1].clientY)/2-r.top;sc=tis*f;px=cx-(ticx-tip)*f;py=cy-(ticy-tiq)*f;at();}};
vp.ontouchend=function(e){if(!e.touches.length)td=false;else if(e.touches.length===1){td=true;tsx=e.touches[0].clientX-px;tsy=e.touches[0].clientY-py;}};
rv();draw();window.onresize=function(){rv()};
<\/script></body></html>`;self.postMessage({type:"export_result",data:w})}};
