const intro=document.querySelector('#intro');document.querySelector('#enter').addEventListener('click',()=>{intro.classList.add('hide');setTimeout(()=>document.querySelector('#letter').scrollIntoView({behavior:'smooth'}),450)});
const audio=document.querySelector('#audio'),music=document.querySelector('#music');music.addEventListener('click',async()=>{try{if(audio.paused){await audio.play();music.classList.add('playing')}else{audio.pause();music.classList.remove('playing')}}catch{alert('音楽を使う場合は audio/birthday.mp3 を入れてください。')}});
const letter=`19歳のお誕生日、おめでとう。

今日という日は、フランちゃんにとって
新しい一年が始まる特別な日。

嬉しいことも、ちょっと疲れる日も、
全部ひっくるめて、素敵な思い出になりますように。

そして、何よりも元気でいてね。
寒くなってきたから、ちゃんと暖かくして、
無理をしすぎた日は、ちゃんと休んでください。

大きなことはできないけれど、
19歳という大切な日に、
少しでも「嬉しい」と思ってもらえたらいいなと思って
このサイトを作りました。

これからの一年、
今まで以上にたくさん笑えますように。
そして、フランちゃんらしい毎日が
ずっと続きますように。

19歳のお誕生日、本当におめでとう。♡`;
let started=false;function typeLetter(){if(started)return;started=true;const el=document.querySelector('#letterText');let i=0;function tick(){el.textContent=letter.slice(0,i++);if(i<=letter.length)setTimeout(tick,17)}tick()}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');if(e.target.id==='letter')typeLetter()}}),{threshold:.12});document.querySelectorAll('.section-label,.paper,.center-heading,.photo,.ending-inner').forEach(el=>{el.classList.add('reveal');observer.observe(el)});new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)typeLetter()}),{threshold:.2}).observe(document.querySelector('#letter'));
const wishes=['そろそろ寒くなるから、ちゃんと暖かい服を着てね。🧣','寒い日に、無理して薄着で出かけないでね。','忙しくても、ご飯はちゃんと食べてね。','疲れた日は、頑張りすぎずにちゃんと休んでね。','夜更かししすぎないで、ちゃんと寝てね。🌙','寒い日は温かいものを飲んで、身体を冷やさないでね。☕','嫌なことがあった日は、一人で全部抱え込まないでね。','誰かを大切にするのと同じくらい、自分も大切にしてね。','19歳の一年、いっぱい笑って、素敵な思い出を作ってね。','そしてこれからも、ずっとフランちゃんらしくいてください。♡'];let wi=-1;const wb=document.querySelector('#wishBtn');wb.addEventListener('click',()=>{wi++;if(wi>=wishes.length){document.querySelector('#ending').scrollIntoView({behavior:'smooth'});return}document.querySelector('#wishCard').classList.add('active');document.querySelector('#wishNum').textContent=String(wi+1).padStart(2,'0');const t=document.querySelector('#wishText');t.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:400});t.textContent=wishes[wi];document.querySelector('#progress').style.width=((wi+1)/10*100)+'%';wb.textContent=wi===9?'最後のメッセージ ♡':'次のメッセージ ♡'});
const photos=[...document.querySelectorAll('.photo')],lb=document.querySelector('#lightbox'),big=document.querySelector('#largePhoto');let idx=0;function showPhoto(i){idx=(i+6)%6;big.src=`images/photo${idx+1}.jpg`;document.querySelector('#count').textContent=String(idx+1).padStart(2,'0')+' / 06';lb.classList.add('open');document.body.classList.add('lock')}photos.forEach(p=>p.addEventListener('click',()=>showPhoto(+p.dataset.i)));function close(){lb.classList.remove('open');document.body.classList.remove('lock')}document.querySelector('#close').addEventListener('click',close);document.querySelector('#prev').addEventListener('click',()=>showPhoto(idx-1));document.querySelector('#next').addEventListener('click',()=>showPhoto(idx+1));lb.addEventListener('click',e=>{if(e.target===lb)close()});document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')showPhoto(idx-1);if(e.key==='ArrowRight')showPhoto(idx+1)});const glow=document.querySelector('.glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
