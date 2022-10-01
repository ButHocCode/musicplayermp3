const hinhnen = document.querySelector('.hinhnen img')
const tenbaihat = document.querySelector('.tenbaihat')
const thanhhienthi = document.querySelector('.thanhhienthi input')
const nutmusic = document.querySelector('.nutmusic')
const nutlui = document.querySelector('.nutlui')
const nutplaynhac = document.querySelector('.nutplaynhac')
const nuttien = document.querySelector('.nuttien')
const nutquaylai = document.querySelector('.quaylai')
const nutbat = document.querySelector('.nutbattat')
const appmusic = document.querySelector('.appmusic')
const danhsachbaihat = document.querySelector('.danhsachbaihat')
const audio = document.querySelector('.audio')
const dieuchinhamthanh = document.querySelector('.dieuchinhamthanh')
const thoigianbatdau = document.querySelector('.thoigianbatdau')
const thoigianketthuc = document.querySelector('.thoigianketthuc')
const hieuungtheonhac = document.querySelector('.hieuungtheonhac')
const baihat =document.querySelectorAll('.baihat')
const newnhac = document.querySelectorAll('.newnhac')
const hieuungtheonhactwo = document.querySelector('.hieuungtheonhactwo')
let randombaihaykhong = false
let currentSong = 0;
let quyenchoinhac = false;
let quaylaihayk = false;
let thoigiancapnhat ;
// function nutbattat(){
// appmusic.classList.toggle('remove')
// danhsachbaihat.classList.toggle('remove')
// }
// lấy nhạc 
var listnhac = [
 {
  id:1,
  img:'./image/hinh1.jpg',
  tennhac:'hello 2',
  song:'./song/bai1.mp3'
 },
 {
  id:2,
  img:'./image/hinh2.jpg',
  tennhac:'hello',
  song:'./song/bai2.mp3'
 },
 {
  id:3,
  img:'./image/hinh3.jpg',
  tennhac:'hello',
  song:'./song/bai3.mp3'
 },
 {
  id:4,
  img:'./image/hinh4.jpg',
  tennhac:'hello',
  song:'./song/bai4.mp3'
 },
 {
  id:5,
  img:'./image/hinh5.jpg',
  tennhac:'hello',
  song:'./song/bai5.mp3'
 },
 {
  id:6,
  img:'./image/hinh6.jpg',
  tennhac:'hello',
  song:'./song/bai1.mp3'
 },
 {
  id:7,
  img:'./image/hinh7.jpg',
  tennhac:'hello',
  song:'./song/bai2.mp3'
 },
 {
  id:8,
  img:'./image/hinh8.jpg',
  tennhac:'hello',
  song:'./song/bai3.mp3'
 },
]
listnhac.forEach((item , index)=>{
 var newnhac = document.createElement('div')
 newnhac.innerHTML = `
 <div class="baihat ${index === currentSong ? 'active':''} ">
 <div class="sothutu">${item.id}</div>
 <div class="hinh">
  <img src=${item.img} alt="">
 </div>
 <div class="ten">${item.tennhac} </div>
 <div class="icon">
  <i class="fa-solid fa-download"></i>
 </div>
</div>
 
 `
 danhsachbaihat.appendChild(newnhac)
 })
// tải bài hát lên 
function tainhac(){
 hinhnen.src = listnhac[currentSong].img
 tenbaihat.innerHTML = listnhac[currentSong].tennhac
 audio.src = listnhac[currentSong].song
 thoigiancapnhat = setInterval(updateTime,1000)
 randomColor()

}
tainhac(currentSong)
// sử lí play hay pause
function choinhac(){
if(quyenchoinhac == false){
 playsong()
}else{
 pausesong()
}
}
// playsong()
function playsong(){
 audio.play()
 quyenchoinhac = true
 hinhnen.classList.add('animation')
hieuungtheonhac.classList.add('tailenxuong')


 nutplaynhac.innerHTML = '<i class="fa-solid fa-pause"></i>'
}
// pause nhạc
function pausesong(){
 audio.pause()
 quyenchoinhac = false
 hinhnen.classList.remove('animation')
 nutplaynhac.innerHTML = '<i class="fa-solid fa-play"></i>'


}
// tiến độ bài hát
audio.ontimeupdate = function(){
 if(audio.duration){
  const hienthi = Math.floor((audio.currentTime / audio.duration)*100)
  thanhhienthi.value = hienthi

 }
}
thanhhienthi.onchange = function(e){
 const tuanhac = (audio.duration / 100) * e.target.value
 audio.currentTime = tuanhac

}
// next bài 
function tienbai(){
 if(currentSong <listnhac.length - 1 && randombaihaykhong == false){
  currentSong = currentSong + 1


 }else if(currentSong < listnhac.length - 1 && randombaihaykhong == true){
  let randomnhac = Number.parseInt(Math.random() * listnhac.length)
  currentSong = randomnhac
 }else{
  currentSong = 0
 }

 tainhac(currentSong)
 playsong()

}
function luibai(){
 if(currentSong > 0){
  currentSong = currentSong -1
  tainhac(currentSong)
  hienthibaihatdcchay()
  playsong()
 }else{
  currentSong = listnhac.length - 1
  tainhac()
  playsong()
 }
 scroll()

}
// lập lại bài
nutquaylai.onclick = function(){
 quaylaihayk = !quaylaihayk
 nutquaylai.classList.toggle('active',quaylaihayk)
}

audio.onended = function(){
 if(quaylaihayk){
  audio.play()
 }else{
  nuttien.click()
 }
}
// âm thanh
function thaydoiamthanh(){
 audio.volume = dieuchinhamthanh.value / 100
}
// thay đổi màu nền
function randomColor(){
 let number = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e']
 let a;

 function xuli(a){
  for(let i=0; i<6;i++){
   let x = Math.round(Math.random()* 14)
   let y = number[x]
   a+= y
  }
  return a;
 }
 let mau1 = xuli('#');
 let mau2 = xuli('#');
var angle = 'to right';
let doimau = 'linear-gradient('+ angle + ',' + mau1 + ',' + mau2 + ")"
document.body.style.background = doimau
}
// thời gian 
function reset(){
 thoigianbatdau.textContent = "00:00";
 thoigianketthuc.textContent = "00:00";
 thanhhienthi.value = 0
}
// update thời gian 
function updateTime(){
 let phuthientai = Math.floor(audio.currentTime / 60)
 let giayhientai = Math.floor(audio.currentTime - phuthientai*60)
 let durationphut = Math.floor(audio.duration / 60)
 let durationgiay = Math.floor(audio.duration - durationphut*60)

 if(giayhientai<10){ giayhientai = '0' + giayhientai}
 if(phuthientai<10){ phuthientai = '0' + phuthientai}
 if(durationgiay<10){ durationgiay = '0' + durationgiay}
 if(durationphut<10){ durationphut = '0' + durationphut}

thoigianbatdau.textContent = phuthientai + ':' + giayhientai
thoigianketthuc.textContent = durationphut +':' + durationgiay
} 

// random bài hát

function randombai(){
 if(randombaihaykhong){
  pauserandom()
 }else{
  playrandom()
 }
}
function playrandom(){
 randombaihaykhong = true;
nutmusic.classList.add('active')
}
function  pauserandom(){
 randombaihaykhong = false;
nutmusic.classList.remove('active')
}
