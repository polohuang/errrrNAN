!function(e){var a={};function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)t.d(n,r,function(a){return e[a]}.bind(null,r));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a){let t,n=document.querySelector(".now-playing"),r=(document.querySelector(".track-art"),document.querySelector(".track-name")),i=document.querySelector(".track-artist"),o=document.querySelector(".playpause-track"),s=(document.querySelector(".next-track"),document.querySelector(".prev-track"),document.querySelector(".seek_slider")),l=document.querySelector(".volume_slider"),m=document.querySelector(".current-time"),c=document.querySelector(".total-duration"),h=0,u=!1,p=document.createElement("audio");function d(e){clearInterval(t),m.textContent="00:00",c.textContent="00:00",s.value=0,p.src=M[e].path,p.load(),r.textContent=M[e].name,i.textContent=M[e].artist,n.textContent="PLAYING "+(e+1)+" OF "+M.length,t=setInterval(S,1e3),p.addEventListener("ended",y),function(){let e="rgb("+(Math.floor(256*Math.random())+64)+","+(Math.floor(256*Math.random())+64)+","+(Math.floor(256*Math.random())+64)+")";document.body.style.background=e}()}function k(){p.play(),u=!0,o.innerHTML='<i class="fa fa-pause-circle fa-5x"></i>'}function y(){h<M.length-1?h+=1:h=0,d(h),k()}function S(){let e=0;if(!isNaN(p.duration)){e=p.currentTime*(100/p.duration),s.value=e;let a=Math.floor(p.currentTime/60),t=Math.floor(p.currentTime-60*a),n=Math.floor(p.duration/60),r=Math.floor(p.duration-60*n);t<10&&(t="0"+t),r<10&&(r="0"+r),a<10&&(a="0"+a),n<10&&(n="0"+n),m.textContent=a+":"+t,c.textContent=n+":"+r}}document.getElementsByClassName("playpause-track")[0].addEventListener("click",(function(){u?(p.pause(),u=!1,o.innerHTML='<i class="fa fa-play-circle fa-5x"></i>'):k()})),document.getElementsByClassName("next-track")[0].addEventListener("click",y),document.getElementsByClassName("prev-track")[0].addEventListener("click",(function(){h>0?h-=1:h=M.length;d(h),k()})),document.getElementsByClassName("seek_slider")[0].addEventListener("click",(function(){seekto=p.duration*(s.value/100),p.currentTime=seekto})),document.getElementsByClassName("volume_slider")[0].addEventListener("click",(function(){p.volume=l.value/100})),window.onload=function(){M.sort(()=>Math.random()-.5),M=M.slice(0,30),d(h)};let M=[{artist:"Alec Benjamin",name:"Let Me Down Slowly",path:"tracks/Alec Benjamin-Let Me Down Slowly.mp3"},{artist:"Alok, Martin Jensen, Jason Derulo",name:"Don't Cry For Me",path:"tracks/Alok, Martin Jensen, Jason Derulo-Don't Cry For Me.mp3"},{artist:"Anne Marie",name:"To Be Young",path:"tracks/Anne Marie-To Be Young.mp3"},{artist:"Anne-Marie & James Arthur",name:"Rewrite The Stars",path:"tracks/Anne-Marie & James Arthur-Rewrite The Stars.mp3"},{artist:"Anne-Marie",name:"2002",path:"tracks/Anne-Marie-2002.mp3"},{artist:"Anne-Marie",name:"BIRTHDAY",path:"tracks/Anne-Marie-BIRTHDAY.mp3"},{artist:"Anne-Marie",name:"Ciao Adios",path:"tracks/Anne-Marie-Ciao Adios.mp3"},{artist:"Ariana Grande",name:"Positions",path:"tracks/Ariana Grande-Positions.mp3"},{artist:"Ava Max",name:"Kings & Queens",path:"tracks/Ava Max-Kings & Queens.mp3"},{artist:"Becky Hill, Sigala",name:"Heaven On My Mind",path:"tracks/Becky Hill, Sigala-Heaven On My Mind.mp3"},{artist:"BTS",name:"Dynamite",path:"tracks/BTS-Dynamite.mp3"},{artist:"Charlie Puth",name:"Attention",path:"tracks/Charlie Puth-Attention.mp3"},{artist:"Charlie Puth",name:"Girlfriend",path:"tracks/Charlie Puth-Girlfriend.mp3"},{artist:"Charlie Puth",name:"How Long",path:"tracks/Charlie Puth-How Long.mp3"},{artist:"Charlie Puth",name:"One Call Away",path:"tracks/Charlie Puth-One Call Away.mp3"},{artist:"Charlie Puth",name:"The Way I Am",path:"tracks/Charlie Puth-The Way I Am.mp3"},{artist:"Charlie Puth",name:"We Don't Talk Anymore",path:"tracks/Charlie Puth-We Don't Talk Anymore.mp3"},{artist:"Clean Bandit and Mabel",name:"Tick Tock",path:"tracks/Clean Bandit and Mabel-Tick Tock.mp3"},{artist:"Clean Bandit",name:"Rockabye",path:"tracks/Clean Bandit-Rockabye.mp3"},{artist:"Clean Bandit",name:"Solo",path:"tracks/Clean Bandit-Solo.mp3"},{artist:"Dua Lipa",name:"Hallucinate",path:"tracks/Dua Lipa-Hallucinate.mp3"},{artist:"Ed Sheeran & Justin Bieber",name:"I Don't Care",path:"tracks/Ed Sheeran & Justin Bieber-I Don't Care.mp3"},{artist:"Ed Sheeran",name:"Perfect",path:"tracks/Ed Sheeran-Perfect.mp3"},{artist:"Ed Sheeran",name:"South of the Border",path:"tracks/Ed Sheeran-South of the Border.mp3"},{artist:"Ed Sheeran",name:"Shape of You",path:"tracks/Ed Sheeran-Shape of You.mp3"},{artist:"Ed Sheeran",name:"Photograph",path:"tracks/Ed Sheeran-Photograph.mp3"},{artist:"Ed Sheeran",name:"Galway Girl",path:"tracks/Ed Sheeran-Galway Girl.mp3"},{artist:"Ed Sheeran",name:"I See Fire",path:"tracks/Ed Sheeran-I See Fire.mp3"},{artist:"Ed Sheeran",name:"Thinking Out Load",path:"tracks/Ed Sheeran-Thinking Out Load.mp3"},{artist:"Ed Sheeran",name:"Supermarket Flowers",path:"tracks/Ed Sheeran-Supermarket Flowers.mp3"},{artist:"Ella Henderson",name:"Take Care Of You",path:"tracks/Ella Henderson-Take Care Of You.mp3"},{artist:"HRVY",name:"Me Because Of You",path:"tracks/HRVY-Me Because Of You.mp3"},{artist:"Jason Derulo",name:"Savage Love",path:"tracks/Jason Derulo-Savage Love.mp3"},{artist:"Joel Corry x MNEK",name:"Head & Heart",path:"tracks/Joel Corry x MNEK-Head & Heart.mp3"},{artist:"Katy Perry",name:"Smile",path:"tracks/Katy Perry-Smile.mp3"},{artist:"Lady Gaga, Ariana Grande",name:"Rain On Me",path:"tracks/Lady Gaga, Ariana Grande-Rain On Me.mp3"},{artist:"Lauv",name:"fxxk, i'm lonely",path:"tracks/Lauv-fxxk, i'm lonely.mp3"},{artist:"Little Mix",name:"Break Up Song",path:"tracks/Little Mix-Break Up Song.mp3"},{artist:"Little Mix",name:"Holiday",path:"tracks/Little Mix-Holiday.mp3"},{artist:"Little Mix",name:"Sweet Melody",path:"tracks/Little Mix-Sweet Melody.mp3"},{artist:"Maroon 5",name:"Memories",path:"tracks/Maroon 5-Memories.mp3"},{artist:"Maroon 5",name:"Nobody's Love",path:"tracks/Maroon 5-Nobody's Love.mp3"},{artist:"Marshmello & Anne-Marie",name:"FRIENDS",path:"tracks/Marshmello & Anne-Marie-FRIENDS.mp3"},{artist:"Miley Cyrus",name:"Midnight Sky",path:"tracks/Miley Cyrus-Midnight Sky.mp3"},{artist:"Sam Smith",name:"My Oasis",path:"tracks/Sam Smith-My Oasis.mp3"},{artist:"Shawn Mendes & Hailee Steinfeld",name:"Stitches",path:"tracks/Shawn Mendes & Hailee Steinfeld-Stitches.mp3"},{artist:"Shawn Mendes",name:"There's Nothing Holding Me Back",path:"tracks/Shawn Mendes-There's Nothing Holding Me Back.mp3"},{artist:"Shawn Mendes, Camila Cabello",name:"Señorita",path:"tracks/Shawn Mendes, Camila Cabello-Señorita.mp3"},{artist:"Shawn Mendes, Camila Cabello",name:"Señorita",path:"tracks/Shawn Mendes, Camila Cabello-Señorita.mp3"},{artist:"Skylar Grey",name:"Everything I need",path:"tracks/Skylar Grey-Everything I need.mp3"},{artist:"Taylor Swift",name:"Cardigan",path:"tracks/Taylor Swift-Cardigan.mp3"},{artist:"Zedd & Jasmine Thompson",name:"Funny",path:"tracks/Zedd & Jasmine Thompson-Funny.mp3"}]}]);