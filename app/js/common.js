var burger = document.querySelector('.burger');
var burger_close = document.querySelector('.burger_close');
var main_navigation = document.querySelector('.main_navigation');

if(document.body.clientWidth	< 768){
	close_menu();

	burger.onclick = function() {
		main_navigation.classList.remove('hide_nav');
	}	

	burger_close.onclick = function() {
		close_menu();
	}

	$(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
	    let block = $(".main_navigation"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
	    if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
	        && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
					close_menu();
	    }
	});
}

function close_menu() {
	main_navigation.classList.add('hide_nav');
}



window.onload = function() {
	// advantages
	$('.carousel_wrapper').owlCarousel({
			loop: true,
			nav: false,
			responsiveClass: true,
			margin: 0,
			padding: 0,
			dots: false,
			responsive: {
	    0: {
	      items: 1
	     },
	     576: {
	       items: 2
	     },
	     1200: {
	        items: 3
	     },
	     1600: {
	        items: 4
	     }
	  }
	});

	var advantage_carousel=$(".advantage_carousel"); 
	advantage_carousel.owlCarousel(); 

	$(".adv_right_arr").click(function(){ 
		advantage_carousel.trigger("next.owl.carousel"); 
	}); 
	$(".adv_left_arr").click(function(){ 
		advantage_carousel.trigger("prev.owl.carousel"); 
	}); 

	setMaxHeightByWrapper ("adw_carousel_img_wrapper", "adw_carousel_img");
	setMaxHeightAllBlocks("adv_title_wrapper");
	setMaxHeightAllBlocks("adv_content");


	// specialist
	setMaxHeightByWrapper ("spec_carousel_img_wrapper", "spec_carousel_img");
	setMaxHeightAllBlocks("spec_title_wrapper");
	setMaxHeightAllBlocks("spec_content");

	var spec_carousel=$(".spec_carousel"); 
	spec_carousel.owlCarousel(); 

	$(".spec_right_arr").click(function(){ 
		spec_carousel.trigger("next.owl.carousel"); 
	}); 
	$(".spec_left_arr").click(function(){ 
		spec_carousel.trigger("prev.owl.carousel"); 
	}); 

	//callback
	var callback_carousel=$(".callback_carousel"); 
	callback_carousel.owlCarousel(); 

	$(".callback_right_arr").click(function(){ 
		callback_carousel.trigger("next.owl.carousel"); 
	}); 
	$(".callback_left_arr").click(function(){ 
		callback_carousel.trigger("prev.owl.carousel"); 
	}); 

	setMaxHeightAllBlocks("callback_content");

 //blog
	$('.blog_carousel').owlCarousel({
			loop: true,
			nav: false,
			responsiveClass: true,
			margin: 0,
			padding: 0,
			dots: false,
			responsive: {
	    0: {
	      items: 1
	     },		    
	     576: {
	      items: 2
	     },	    
	     992: {
	      items: 1
	     },
	     1200: {
	       items: 2
	     }
	  }
	});

	setMaxHeightByWrapper("blog_carousel_img_wrapper", "blog_carousel_img");
	setMaxHeightByWrapper("blog_right_part_img_wrapper", "blog_right_part_img");
	setMaxHeightAllBlocks("blog_carousel_title");
	setMaxHeightAllBlocks("blog_carousel_content");

	var blog_carousel=$(".blog_carousel"); 
	blog_carousel.owlCarousel(); 

	$(".blog_right_arr").click(function(){ 
		blog_carousel.trigger("next.owl.carousel"); 
	}); 
	$(".blog_left_arr").click(function(){ 
		blog_carousel.trigger("prev.owl.carousel"); 
	}); 

}// end window.onload



////animate (set viewportchecker)
//jQuery(document).ready(function() {
// jQuery('.fadeInDown_anim').addClass("hidden").viewportChecker({
//    classToAdd: 'visible animated initial fadeInDown delay-10s',
//   offset: 0,
//   repeat: true
// });
//});

// ScrollReveal animate (set viewportchecker)
//ScrollReveal().reveal('.anim2',{ 
// 	delay:300,
// 	reset: true
// });

// ScrollReveal().reveal('.anim3',{ 
// 	delay: 500,
// 	reset: true
// });

// ScrollReveal().reveal('.anim4',{ 
// 	delay: 700,
// 	reset: true
// });

// ScrollReveal().reveal('.anim5',{ 
// 	delay: 900,
// 	reset: true
// });





// window.onload = function() {

// //image resizer
//   setMaxHeightByWrapper ("projects_carousel_img_wrapper", "projects_carousel_img");
// // Simple height
//	setMaxHeightAllBlocks (blockClass)

// /// click out
// 	$(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
// 	    let block = $(".main_nav"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
// 	    if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
// 	        && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
// 	      burger_button.classList.remove('hide_burger');
// 	      main_nav.classList.add('hide_main_nav');
// 	    }
// 	});
// }

//document.body.clientWidth

// $(document).ready(function() {
//    $("#form_popup").submit(function() {
//       $.ajax({
//          type: "POST",
//          url: "simple_mail.php",
//          data: $(this).serialize()
//       }).done(function() {
//          $(this).find("inpu, textarea").val("");
//          alertDone();
//          $("#form_popup").trigger("reset");
//       }).fail(function() {
//         alert('Ошибка соединения');
//       });
//       return false;
//    });
// });


//////////////////name of selected file
// var wnt_file_top = document.querySelector('.wnt_file_top');
// document.getElementById('fileToUpload').onchange = function () {
// let fname = this.value;
// let fname_mass = fname.split('\\');
// fname = fname_mass[fname_mass.length-1];
// wnt_file_top.innerText = fname;
// };

// var want_file = document.querySelector('.want_file');
// document.getElementById('fileToUpload_want').onchange = function () {
// let fname = this.value;
// let fname_mass = fname.split('\\');
// fname = fname_mass[fname_mass.length-1];
// want_file.innerText = fname;
// };


/////////////////////////////////scroll menu
// $(document).ready(function() {
// $("a.scroll").click(function() {
// $("html, body").animate({
// scrollTop: $($(this).attr("href")).offset().top + "px"
// }, {
// duration: 500,
// easing: "swing"
// });
// return false;
// });
// });




//////for path length SVG
// totalLength(); 
// function totalLength () { 
// var path = document.querySelector('.fil0'); 
// var len = Math.round(path.getTotalLength()); 
// console.log(len); 
// }







///////////////////////////////owl functions
//$('.logotypes_carousel').owlCarousel({
//		loop: true,
//		nav: false,
//		responsiveClass: true,
//		margin: 0,
//		padding: 0,
//		dots: false,
//		responsive: {
//     0: {
//       items: 1
//      },
//      576: {
//        items: 2
//      },
//      1200: {
//         items: 3
//      }
//   }
//});

///center by click and swipe
// set data-position(0++) in HTML


//var review_carousel = $('.review_carousel');

// $(document).on('click', '.owl-item>div', function() {
//   review_carousel.trigger('to.owl.carousel', $(this).data( 'position' ) );
// 	changeQuote(this.querySelector('.center'));
// });

// review_carousel.on('dragged.owl.carousel', function(event) {
// 	changeQuote();
// })

// changeQuote();
// function changeQuote(){
// 	let review_carousel_js = document.querySelector('.review_carousel')
// 	let review_carousel_text = review_carousel_js.querySelector('.center').querySelector('.personal_quote').innerText;
// 	document.querySelector('.change_quote').innerText = review_carousel_text;
// }

//$(window).scroll(function(){
//
//    var st = $(this).scrollTop();
//
//    $(".lift").css({
//        "transform" : "translate(0%, " + st/30+ "%)"
//    });    
//});


