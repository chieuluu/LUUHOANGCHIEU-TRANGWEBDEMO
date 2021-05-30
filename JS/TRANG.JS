
  // ---------------------------------Slide -Show------------------------------------//
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("hinhanh1");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
 }
 
 //--------------------------------------SẢN PHẨM ROW-------------------------------------------------//
 let row1 = [
{image1:"/IMAGE/SanPhamRow/hat.png",name1:"Hat"},
{image1:"/IMAGE/SanPhamRow/ao5.png",name1:"T-shirt"},
{image1:"/IMAGE/SanPhamRow/balo.png",name1:"Balo"},
{image1:"/IMAGE/SanPhamRow/Handbag1.png",name1:"HandBag"},
{image1:"/IMAGE/SanPhamRow/wallet.png",name1:"Wallet"},
{image1:"/IMAGE/SanPhamRow/Book-Panda.png",name1:"Book"},
{image1:"/IMAGE/SanPhamRow/Teddy.png",name1:"Teddy Bear"},
{image1:"/IMAGE/SanPhamRow/shower.png",name1:"Shower Gel"},
{image1:"/IMAGE/SanPhamRow/pillow.png",name1:"Pillow"},
{image1:"/IMAGE/SanPhamRow/others.png",name1:"Others"},




 ]
 function spdemo(image,name){
   let r =document.getElementById('row')
   r.innerHTML+=`<div class="sp-demo">
   <div class="vong-sp">
   <a href=""><img src="`+image+`" alt="" class="danhmuc1"></a>  
   </div>
   <h4 class="tensp">`+name+`</h4></div>`

 }
 for (let spr of row1){spdemo(spr.image1,spr.name1)}
 //--------------------------SẢN PHẨM SALE---------------------------------//
 let sale = [
   {imageS:"/IMAGE/SanPhamRow/ao5.png",nameS:"Set Quần áo We Bare Bears",priceS1:"280.000VND",priceS:"300.000VND",imageS1:"/IMAGE/sale/icebear.jpg",bonusS:"Giảm giá 50% sản phẩm Grizzly"},
   {imageS:"/IMAGE/SanPhamRow/ao5.png",nameS:"Set Quần áo We Bare Bears",priceS1:"280.000VND",priceS:"300.000VND",imageS1:"/IMAGE/sale/icebear.jpg",bonusS:"Giảm giá 50% sản phẩm Grizzly"},
   {imageS:"/IMAGE/SanPhamRow/ao5.png",nameS:"Set Quần áo We Bare Bears",priceS1:"280.000VND",priceS:"300.000VND",imageS1:"/IMAGE/sale/icebear.jpg",bonusS:"Giảm giá 50% sản phẩm Grizzly"},
   {imageS:"/IMAGE/SanPhamRow/ao5.png",nameS:"Set Quần áo We Bare Bears",priceS1:"280.000VND",priceS:"300.000VND",imageS1:"/IMAGE/sale/icebear.jpg",bonusS:"Giảm giá 50% sản phẩm Grizzly"},
   

 ]
 function spsale(image,name,pricesale,price,imagesale,bonus){
 let s =document.getElementsByClassName('slide-ig')
 s.innerHTML+=`<div id="khung-sale">
<div id="sp-sale"><img src="`+image+`" alt="" class="hinh-sp-sale"></div>
 <div id="link-sp"><a href="" class="link-sp-sale"><h3 class="h3-sale">`+name+`</h3></a></div>
 <div id="gia-sale"><i class="gia-sp-sale">`+pricesale+`</i></div>
 <div id="gia-goc"><i class="sp-goc">Giá gốc</i><br><del class="gia-sp-goc">`+price+`</del></div>
 <div id="bonus-sale">
     <div id="gift-sale"><img src="`+imagesale+`" alt="" class="anh-gift"></div>
     <div id="sale-bonus">`+bonus+`</div>
   </div>
</div> `
}
for( sps of sale){spsale(sps.imageS,sps.nameS,sps.priceS1,sps.priceS,sps.imageS1,sps.bonusS)}

//-------------------------------//
//let sale = [
 // ["/IMAGE/SanPhamRow/ao5.png","Set Quần áo We Bare Bears","280.000VND","300.000VND","/IMAGE/sale/icebear.jpg","Giảm giá 50% sản phẩm Grizzly"]

//]
//function spsale(image,name,pricesale,price,imagesale,bonus){
  //let s=document.getElementsByClassName('silde2')
 // s.innerHTML+=`<div id="khung-sale">
  //<div id="sp-sale"><img src="`+image+`" alt="" class="hinh-sp-sale"></div>
   //<div id="link-sp"><a href="" class="link-sp-sale"><h3 class="h3-sale">`+name+`</h3></a></div>
   //<div id="gia-sale"><i class="gia-sp-sale">`+pricesale+`</i></div>
  // <div id="gia-goc"><i class="sp-goc">Giá gốc</i><br><del class="gia-sp-goc">`+price+`</del></div>
   //<div id="bonus-sale">
     //  <div id="gift-sale"><img src="`+imagesale+`" alt="" class="anh-gift"></div>
      // <div id="sale-bonus">`+bonus+`</div>
    // </div>
  //</div>`
//}
//for (let t=0;t<2;t++){spsale(sale[t][0],sale[t][1])}
//------------------------------------------------------------------------------//
var slideIndexa = 1;
showSlidesa(slideIndexa);

function plusSlidesa(n) {
  showSlidesa(slideIndexa += n);
}

function currentSlidea(n) {
  showSlidesa(slideIndexa = n);
}

function showSlidesa(n) {
  var i;
  var slidesa = document.getElementsByClassName("slide-ig");
  
  if (n > slidesa.length) {slideIndexa = 1}    
  if (n < 1) {slideIndexa = slidesa.length}
  for (i = 0; i < slidesa.length; i++) {
      slidesa[i].style.display = "none";  
  }
  
  slidesa[slideIndexa-1].style.display = "block";  }
  //-----------------------------------------------BANNER---------------------------//

  var slideIndexB = 1;
showSlidesB(slideIndexB);




// Thumbnail image controls
function currentSlideB(n) {
  showSlidesB(slideIndexB = n);
}

function showSlidesB(n) {
  var i;
  var slidesB = document.getElementsByClassName("hinhanh2");
  
  if (n > slidesB.length) {slideIndexB = 1}
  if (n < 1) {slideIndexB = slidesB.length}
  for (i = 0; i < slidesB.length; i++) {
      slidesB[i].style.display = "none";
  }
  
  slidesB[slideIndexB-1].style.display = "block";
 }
 var slideIndexB = 0;
 showSlidesB();
 
 function showSlidesB() {
   var i;
   var slidesB = document.getElementsByClassName("hinhanh2");
   for (i = 0; i < slidesB.length; i++) {
     slidesB[i].style.display = "none";
   }
   slideIndexB++;
   if (slideIndexB > slidesB.length) {slideIndexB = 1}
   slidesB[slideIndexB-1].style.display = "block";
   setTimeout(showSlidesB, 5000); // Change image every 2 seconds
 }
 //-----------------------------BANNER-------------------------------//
 //let banner1 = [
  //{IGb:"/IMAGE/QC/SETAO1.jpg",IGb:"Giảm đến 30%",}
  //]
   //function spbanner (image,name){
     //let b =document.getElementsByClassName('spbanner')
     //b.innerHTML+=`<div class="hinh-banner"><img src="`+image+`" alt="" class="hb"></div><div class="formem"><i class="formb">For Member</i></div><h3 class="h2b">`+name+`</h3>`
  
 //  }
   //for (let spb of banner1){spbanner(spb.IGb,spb.IGb)}

   //KHUNG GỢI Ý------------------------------------------------------------------------------------------------------------------------------------------------------------------
function openPage(pageName, elmnt, color) {
  // ẨN TẤT CẢ THUỘC TÍNH CSS CỦA  class="tabcontent" THEO MẶC ĐỊNH */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
   // TẨY MÀU NỀN CỦA NÚT BUTTON LÀ class="tablinks/buttons
   tablinks = document.getElementsByClassName("tablink");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].style.backgroundColor = "";}
 
   //HIỂN THỊ NỘI DUNG TAB CỤ THỂ
   document.getElementById(pageName).style.display = "inline-block";
 
   //THÊM MÀU CỦA NÚT BUTTON TRÙNG VỚI MÀU TAB
   elmnt.style.backgroundColor = color; 
}
 
 // Get the element with id="defaultOpen" and click on it
//  document.getElementById("defaultOpen").click();
//$( document ).ready(function() {
  //$(".owl-carousel").owlCarousel({ //$(".owl-carousel") === document.getElementByClass(owl-carousel)
    //    loop:true,
      //  nav:true,
        //items: 1,
        //nav:true,
        //navText: ["<'>","<img src='next.png'>"],
  //})
 //--//});

//$(document).ready(function(){

//})