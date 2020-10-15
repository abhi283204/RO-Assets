// Core API

$(window).on('load', function () {
	//Wow animation (common script)
	var wow = new WOW(
		{
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true
		}
	);
	wow.init();

 

});

$(function () {
	"use strict";

	//accordion function (common script)
	$('.investor-content').hide();
	$('.investor-title').click(function () {
		$('.investor-title').removeClass('active');
		$('.investor-content').slideUp('normal');
		if ($(this).next().is(':hidden') == true) {
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('active');
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		}
	});

	//footer links accordion (common script)
	if ($(window).width() < 991) {
		$('.footer-link-list').hide();
	}
	$('.ft-link-title').click(function () {
		if ($(window).width() < 991) {
			$('.ft-link-title').removeClass('active');
			$('.footer-link-list').slideUp('normal');
			if ($(this).next().is(':hidden') == true) {
				//ADD THE ON CLASS TO THE BUTTON
				$(this).addClass('active');
				//OPEN THE SLIDE
				$(this).next().slideDown('normal');
			}
		}
	});

	$(window).resize(function(){
		if ($(window).width() < 991) {
			$('.footer-link-list').hide();
		}else {
			$('.footer-link-list').show();
		}
	});

	// Month Toggle (common script)
	$('.share-dt-sort li a.more').on('click',function(e){
		e.preventDefault();
		var $list = $(this).next('.drop-month');
		$list.slideToggle();
		$('.drop-month').not($list).slideUp();
	});
	$('.drop-month li a').on('click', function(e){
		e.preventDefault();
		$('.drop-month').prev().text($(this).text());
		if($('.drop-month').is(':visible')) {
			$('.drop-month').hide();
		}
	});

	//for addclass on page load (common script)
	$(".menu-list li a").each(function () {
		if (this.href == window.location) {
			$(this).parent('li').addClass("active");
		};
	});
	$(".menu-list li ul.sub-menu-list li a").each(function () {
		if (this.href == window.location) {
			$(this).parents('.menu-list li').addClass("active");
		}
		;
	});

	$(window).on('load', 'resize', function () {
		if ($(window).width() < 1024) {
			if ($(".menu-list li").hasClass('active')) {
				var $this = $(".menu-list li.active");
				$this.children('.sub-menu-ar').toggle();
			}
		}
	});
	$(document).ready(function () {
		if ($(window).width() < 1024) {
			if ($(".menu-list li").hasClass('active')) {
				var $this = $(".menu-list li.active");
				// $this.children('.sub-menu-ar').toggle();
			}
		}


        //for calculating each table th width on the basis of td width
        // var arrOfTable1=[],
        //     i=0;
        // $('table.props td').each(function() {
        //     var mWid = $(this).outerWidth()
        //     arrOfTable1.push(mWid);
        //     $(this).css("width",mWid+"px");
        // });
        //
        // $('table.props th').each(function() {
        //     $(this).css("width",arrOfTable1[i]+"px");
        //     i++;
        // });
        //
        //
        // if (window.location.pathname == '/watchlist.html') {
        //     var arrOfTable1=[],
        //         i=0;
        //     $('table.props td').each(function() {
        //         var mWid = $(this).outerWidth()
        //         arrOfTable1.push(mWid);
        //         $(this).css("width",mWid+"px");
        //     });
        //
        //     $('table.props th').each(function() {
        //         $(this).css("width",arrOfTable1[i]+"px");
        //         i++;
        //     });
        //
        //     var tbodys = $('table.props tbody').height();
        //     $(window).scroll(function() {
        //         if ($(window).scrollTop() >= $('table.props').offset().top-20) {
        //
        //             $('table.props thead').each(function() {
        //                 $(this).addClass('fixeds');
        //             });
        //
        //             // form remove class fixeds once the table is end
        //             if($(window).scrollTop() > (tbodys + $('table.props').offset().top-20)) {
        //                 // $('table.props thead').removeClass('fixeds');
        //                 $('table.props thead').each(function() {
        //                     $(this).removeClass('fixeds');
        //                 });
        //             }
        //
        //             //for calculating each thead width on the basis of tbody width
        //             var arrOfTable=[],
        //                 i=0;
        //             $('table.props tbody').each(function() {
        //                 var mWid = $(this).width();
        //                 arrOfTable.push(mWid);
        //             });
        //
        //             $('table.props thead').each(function() {
        //                 $(this).css("width",arrOfTable[i]+"px");
        //                 i++;
        //
        //             });
        //
        //         }else {
        //             $('.fixed-table-wrap thead').removeClass('fixeds');
        //
        //         }
        //     });
        // }else {
        //     console.log('other page');
        // }





	});
	// $("ul.sub-menu-list li").each(function() {
	// 	$('ul.sub-menu-list li.active').parents().find('.sub-menu-ar').parent().addClass('active').next().removeClass('active');
	// });

	//menu black background show function (common script)

    if ($(window).width() > 1023) {
        $(".sub-item").hover(
            function () {
                $(".overlay-bg").addClass('active');
            }, function () {
                $(".overlay-bg").removeClass('active');
            }
        );

        // $(".menu-list  > li .sub-menu-ar").hide();
        // $(".menu-list  > li.more-menu > a").on('mouseenter', function(){
        //     // $(".menu-list  > li .sub-menu-ar").slideUp();
        //     $(this).parent().find(".sub-menu-ar").show();
        // });
        // $(".menu-list  > li a").on('mouseout', function(){
        //     // $(".menu-list  > li .sub-menu-ar").slideUp();
        //     $(this).parent().find(".sub-menu-ar").hide();
        // });
	};


	//Place order scroll bar
	$(".place-opt-bx, .watch-list-wrap .list, .notify-popups .ntfy-info-area, .notify-popup .ntfy-info-area, .place-search-list, .watch-tab-lst .search-dp-list, .bank-list-wrap").mCustomScrollbar({
		theme: "minimal-dark"
	});


	//banner action function (home page script)
	if ($(window).width() > 767) {
		$('.banner-action').click(function () {
			$(this).parents('li').addClass('active');
			$(this).parents('li').siblings().removeClass('active');
			var tab = $(this).attr("href");
			$(".tabcontent").not(tab).css("display", "none");
			$(tab).slideDown(1200);

			$("body, html").animate({
				scrollTop: $( $(this).attr('href')).offset().top - 200+ "px"
			}, 1200);

			wow.init();
			return false;
		});

		$('.close-btn').click(function () {
			$(this).parents('li').removeClass('active');
			$(".tabcontent").slideUp(600);
			return false;
		});
	}

	if ($(window).width() <= 767) {
		$('.banner-action').click(function () {
			$(this).parents('li').addClass('active');
			$(this).parents('li').siblings().removeClass('active');
			return false;
		});
		$(".ban-cont1").on("click", function(){
			$("#transacts").clone().appendTo(".ban-main-cont1");
			$(".ban-main-cont2 #returns").remove();
			$(".ban-main-cont3 #researchs").remove();
		});
		$(".remove-ban-cont1").on("click", function(){
			$(this).parents('li').removeClass('active');
			$(".ban-main-cont1 #transacts").remove();
		});
		$(".ban-cont2").on("click", function(){
			$('#returns').clone().appendTo(".ban-main-cont2");
			$(".ban-main-cont1 #transacts").remove();
			$(".ban-main-cont3 #researchs").remove();
		});
		$(".remove-ban-cont2").on("click", function(){
			$(this).parents('li').removeClass('active');
			$(".ban-main-cont2 #returns").remove();
		});
		$(".ban-cont3").on("click", function(){
			$('#researchs').clone().appendTo(".ban-main-cont3");
			$(".ban-main-cont1 #transacts").remove();
			$(".ban-main-cont2 #returns").remove();
		});
		$(".remove-ban-cont3").on("click", function(){
			$(this).parents('li').removeClass('active');
			$(".ban-main-cont3 #researchs").remove();
		});
	}

	//down action function (common script)
	$(".down-arrow .scrolls").on("click", function (e) {
		e.preventDefault();
		$("body, html").animate({
			scrollTop: $('#scroll-position').offset().top - 70
		}, 600);
	});

	$(".scrollify li a").on("click", function (e) {
		e.preventDefault();
		var target = $(this).attr('href');
		$("body, html").animate({
			scrollTop: $(target).offset().top - 100
		}, 600);
	});

	//watchlist delete function (watchlist script)
	$(".delete-func").click(function (e) {
		$(this).parents('tr').remove();
		e.stopPropagation();
	});

	//successfully message scroll (common script)
	$(".add-scrip").click(function () {
		$('#scrip-successfully').show();

		setTimeout(function () {
			$('#scrip-successfully').hide();
		}, 1500);
	});
	$(".new-watchlist").click(function () {
		$('#watchlist-successfully').show();

		setTimeout(function () {
			$('#watchlist-successfully').hide();
		}, 1500);
	});

	//smooth scroll (common script)
	$(".smoothscroll").click(function (e) {
		e.preventDefault();
		$("body, html").animate({
			scrollTop: $($(this).attr('href')).offset().top - 85 + "px"
		}, 600);
	});

	//advance search (common script)
	$(".advanc-search-click").on("click", function (e) {
		$(this).parents('li').addClass('active');
		$(this).parents('.order-top-action').next('.advance-drop-menu').toggle();
		$('.overlay-bg').toggleClass('popoverlay');
	});


	//Order book (common script)
	$(".orderbk-action-btn").click(function (e) {
		e.stopPropagation();
	});

	//Order book advance menu cancel script (common script)
	$(".cancel-adv-menu").click(function (e) {
		$(this).parents('.advance-drop-menu').hide();
		$(this).parents('.advance-drop-menu').prev('.order-top-action').children('li.active').removeClass();
		$('.overlay-bg').removeClass('popoverlay')
	});

	//Order book advance menu cancel script (common script)
	$(".overlay-bg").click(function () {
		$(this).removeClass('active');
		$('.sub-menu-ar').hide();
	});


	//upload extension validation for pan online page
	$('.uploadBtn').on('change', function () {
		var ext = this.value.match(/\.(.+)$/)[1];
		var vals = $(this).val();
		switch (ext) {
			case 'pdf':
			case 'bmp':
			case 'jpg':
			case 'jpeg':
			case 'png':
			case 'gif':
				$('.uploadBtn').attr('disabled', false);
				$(".uploadFile").val(vals);
				break;
			default:
				$('.uploadFile').after("<span class='uploadfilerror'>Please select ('pdf','bmp','gif','png','jpg','jpeg')</span>");
				setTimeout(function () {
					$('.uploadfilerror').fadeOut();
				}, 3000);

				$(".uploadFile").val();
				this.value = '';
		}
	});

	//Section Close on other side click Script (common script)
	$(document).on("click", function (e) {
		var p = $(e.target).closest('.menu-list  > li a, .post-admin, .bank-list ul li .wrapper .bank-detail .from-control, .header-left, .header-left, .dropdown-frst,.edit-icons, .drop-action, .action-drop, .share-load-detail, .editable-field .value-ip, .icon-ic_search, .header-search-wrap, .watchlist-dropdown,.place-order-search, .place-order-link, .textfields .select2-container,.hint,.search-typeahead,.search-detail .scrip-detail,.editable-input, .icon-Modify,.textfields .info-icon a, span.value-selected,span.selectArrow,.watchlist-dropdown,.watchlist-option-bx .dropmenu-ar, .share-load-detail a.icon.icon-shares, .watch-tab-lst li').length;
		if (!p) {
			$(".menu-lt-ar").removeClass('active');
			$(".overlay-bg").removeClass('active');
			$("body").removeClass('overflownone');
			$(".hamburger li").removeClass();
			$(".menue").removeClass('active');
			$(".header-search-wrap").hide();
			$('.dropdown-menu-right, .dropmenu-ar, .action-drop').hide();
			$('.place-order-search').hide();
			$(".overlay-bg").removeClass('selected');
			$('.placeorder-info.info-popup .textfields .hint').hide();
			$(".overlay-bg").removeClass('active-overlay');
			$('.search-detail .scrip-detail').hide();
			$('.editable-field .editable-input').attr('disabled', 'disabled');
			$('.editable-field .editable-input').css('border-bottom', '0');
			$('.textfields .info-icon').removeClass('opacitycss');
			$('.textfields .hint').hide();
			$('.watchlist-option-bx .dropmenu-ar').hide();
			$('.editable-sec .save-icon').hide();
			$('.editable-sec .cancel-icon').hide();
			$('.editable-sec .edit-icon').show();
			$('.share-pop, .place-search-list').hide();
			$('.admin-popup, .menu-list  > li .sub-menu-ar').slideUp();
		}
		/*var a = $(e.target).closest('.menu-list').length;
		 if (!a) {
		 $('.sub-menu-ar').hide();
		 }
		 */
		if ($(window).width() > 767) {
			var q = $(e.target).closest('.banner-list li, .banner-main-content').length;
			if (!q) {
				$('.banner-action').parents('li').removeClass('active');
				$('.close-btn').removeClass('active');
				$('.banner-action').show();
				$(".tabcontent").fadeOut();
			}
		}
	});


	//(Custom) - Hamburger fucntion on the left top side menu (common script)
	var breadtop = $(".hamburger li:nth-child(1)"),
		beef = $(".hamburger li:nth-child(2)"),
		breadbottom = $(".hamburger li:nth-child(3)");
	$(".menue").on('click', function () {
		if (beef.hasClass("rot-45deg")) {
			breadtop.removeClass("rot45deg");
			beef.removeClass("rot-45deg");
			breadbottom.removeClass("hidden");
			$(".menu-lt-ar").removeClass('active');
			$("body").removeClass('overflownone');
			$(".overlay-bg").removeClass('active');
			$(this).removeClass('active');
		} else {
			breadbottom.addClass("hidden");
			breadtop.addClass("rot45deg");
			beef.addClass("rot-45deg");
			$(".menu-lt-ar").addClass('active');
			$("body").addClass('overflownone');
			$(".overlay-bg").addClass('active');
			$(this).addClass('active');
		}
	});

	//hamburgar menu (common script)
	if ($(window).width() <= 1023) {
		$('.sub-menu-dt-ar, .sub-menu-ar').hide();
	}
	$('.menu-list-dt > li > a, .menu-list > li > a').click(function () {
		if ($(window).width() <= 1023) {
			$('.menu-list-dt > li > a, .menu-list > li > a').parent().removeClass('active');
			$('.sub-menu-dt-ar, .sub-menu-ar').slideUp('normal');
			if ($(this).next().is(':hidden') == true) {
				//ADD THE ON CLASS TO THE BUTTON
				$(this).parent().addClass('active');
				//OPEN THE SLIDE
				$(this).next().slideDown('normal');
			}
		}
	});
	/*$(window).resize(function(){
		if ($(window).width() <= 1023) {
	 $('.sub-menu-dt-ar, .sub-menu-ar').hide();
		}else {
	 $('.sub-menu-dt-ar, .sub-menu-ar').show();
		}
	 });*/

	//for converting tab to accordion (common script)
	$(".common-tabs .tab-content .accordion-heading").click(function () {
		if (false == $(this).next().is(':visible')) {
			$(".common-tabs .tab-content .tab-pane").slideUp(600);
			$(".common-tabs .tab-content .accordion-heading span").addClass('plus');
			$(".common-tabs .tab-content .accordion-heading span").removeClass('minus');
		}
		$(this).next().slideToggle(600);
		$(this).children('.plus, .minus').toggleClass("plus minus");
	});
	$('.common-tabs .tab-content .tab-pane:eq(0)').show();


	//converting tabs into accordion for pan online page
	$(".nested-tabs .tab-content .accordion-heading").click(function () {
		if(false == $(this).next().is(':visible')) {
			$(".nested-tabs .tab-content .tab-pane").slideUp(600);
			$(".nested-tabs .tab-content .accordion-heading span").addClass('plus');
			$(".nested-tabs .tab-content .accordion-heading span").removeClass('minus');
		}
		$(this).next().slideToggle(600);
		$(this).children('.plus, .minus').toggleClass("plus minus");
	});
	$('.nested-tabs .tab-content .tab-pane:eq(0)').show();

	//equity toggle menu (market pages script)
	$(".dropdown-frst, span.edit-icons").click(function () {
		$('.overlay-bg').addClass("active");
		$(this).parents('li').children('.dropdown-menu-right').toggle();
	});
	//equity toggle menu (market & watchlist pages script)
	$(".search-dp-list ul li a").click(function () {
		$('.dropdown-frst').hide();
		$('.dropdown-scd').show();
		$('.overlay-bg').removeClass('active');
		var selectData = $(this).html();
		$(this).parents('li').children().find('.title-val').html(selectData);
		console.log(selectData);
		$('.watchlist-option-bx .dropmenu-ar').hide();
		$(".my-script-list .scrips-dt-bx p.title-val").each(function () {
			if ($(this).text().length > 16)
				$(this).text($(this).text().substring(0, 16) + '...');
		});
	});
	$(".my-script-list .scrips-dt-bx p.title-val").each(function () {
		if ($(this).text().length > 16)
			$(this).text($(this).text().substring(0, 16) + '...');
	});

	//equity toggle menu (watchlist pages script)
	$(".watchlist-dropdown").click(function () {
		$('.overlay-bg').addClass("active");
		$(this).parents('li').children('.dropmenu-ar').toggle();
	});

	//heat map page active (market equity pages script)
	$(".heat-map-list li a").click(function () {
		// event.preventDefault();
		$(this).parent().addClass("active");
		$(this).parent().siblings().removeClass("active");
	});
	$(".share-dt-sort li a, .sentiments a .circle-bx").click(function () {
		// event.preventDefault();
		$(this).parent().addClass("active");
		$(this).parent().siblings().removeClass("active");
	});

	//Qoutes down arrow toggle action transition (common script)
	$(".high-low-sec .down-arrow a").click(function (e) {
		$(this).parents().prev().find('.expandable-data').slideToggle("slow");
		$(this).parents('.down-arrow').toggleClass("up-arrow");
		// e.stopPropagation();
	});

	//Qoutes down arrow toggle action transition (common script)
	$(".high-low-sec .down-arrow a").click(function () {
		var data_height = $(this).parents('.high-low-sec').children('.high-low-area').find('.data-list-dt').height();
		if ($(this).parents('.high-low-sec').children('.high-low-area').find('.datalist-height').height() > 72) {
			$(this).parents('.high-low-sec').children('.high-low-area').find('.datalist-height').animate({
				height: 72
			}, 700);
		} else {
			$(this).parents('.high-low-sec').children('.high-low-area').find('.datalist-height').animate({
				height: data_height
			}, 700);
		}
	});

	//Place order checked toggle action (place order page script)
	$(".placemkt-ord .checkbox .css-checkbox").click(function () {
		var isChecked = this.checked;

		if (isChecked) {
			$(this).parents(".placemkt-ord").find(".place-mkt-lt").children('.form-control').prop("disabled", true);
			$('.amt-input').prop("disabled", true);
		} else {
			$(this).parents(".placemkt-ord").find(".place-mkt-lt").children('.form-control').prop("disabled", false);
            $('.amt-input').prop("disabled", false);
		}
	});

	//Place order checked toggle action (place order page script)
	$(".addnew-watch").keyup(function (e) {
		if (e.keyCode == 13) {
			$('#addnew-watchlist-modal').hide();
			$('.modal-backdrop').hide();
			$('#addnew-watchlist-next-modal').modal("show");
		}
	});

	//Menu Place Order action (common script)
	$('.more-menu').hover(function () {
		$('.place-order-search').hide();
		$('.overlay-bg').removeClass('selected')
	});


	//(Custom) - This function identify the target and after clicking show the bootstrap tab on the same page (common script)
	var url = document.location.toString();
	if (url.match('#')) {
		console.log(url);
		$('.tab-structure li a[href=#'+url.split('#')[1]+']').tab('show');
	}

	// If watchlist place order popup select then fields show (watchlist page script)
	$(".select-date").change(function () {
		if ($(this).val() == "dateselect") {
			$(this).parents('.placeord-info-bx').next('.alert-scr').toggle();
			$('#watchlist-order-modal .place-opt-bx').mCustomScrollbar('scrollTo', '#alert-scr');
		} else {
			$(this).parents('.placeord-info-bx').next('.alert-scr').slideUp();
		}
	});


	// If derivatives select then fields show (watchlist page script)
	$(".addnew-select-bx").change(function () {
		if ($(this).val() == "Derivatives") {
			$(this).parents('.addnew-opt-ar').next('.addnew-opt-ar').find('.select-opt-show').addClass('show');
		} else {
			$(this).parents('.addnew-opt-ar').next('.addnew-opt-ar').find('.select-opt-show').removeClass('show');
		}
	});

	//list item to replace on select box in mobile (common script)
	if ($(window).width() <= 767){
		$('.btn-wrap button.btn-toggle').on('click',function(e){
			e.preventDefault();
			var $list = $(this).parent().next('.share-dt-sort');
			$list.slideToggle();
			$('ul.toggle-list').not($list).slideUp();
		});
		$('ul.toggle-list li a').on('click', function(e){
			e.preventDefault();
			var vals = $(this).html();
			$(this).parents().prev('.btn-wrap').find('button.btn-toggle span.text').html(vals);
			if($('ul.toggle-list').is(':visible')) {
				$('ul.toggle-list').hide();
			}
		});
	}else {
		$('ul.toggle-list').show();
	}

	$(document).on("click", function (e) {
		if ($(window).width() < 767) {
			var p = $(e.target).closest('.btn-wrap button.btn-toggle').length;
			if (!p) {
				var $list = $(this).parent().next('.share-dt-sort');
				$list.slideToggle();
				$('ul.toggle-list').not($list).slideUp();
			}
			var p1 = $(e.target).closest('.btn-wrap button.btn-radio-toggle').length;
			if (!p1) {
				var $list = $(this).parent().next('.toggle-radio');
				$list.slideToggle();
				$('.toggle-radio').not($list).slideUp();
			}
		}
	});


	//radio button covert in select box (common script)
	var winwidth = $(window).width();
	if(winwidth <= 767) {
		$('.toggle-radio').hide();
		$('.btn-wrap button.btn-radio-toggle').on('click',function(e){
			//e.preventDefault();
			var $list = $(this).parent().next('.toggle-radio');
			$list.slideToggle();
			$('.toggle-radio').not($list).slideUp();
		});
		$('.toggle-radio .css-label').on('click', function(e){
			//e.preventDefault();
			$(this).parent().parent().prev().find('span.radio-list').text($(this).text());
			if($('.toggle-radio').is(':visible')) {
				$('.toggle-radio').hide();
			}
		});
	} else {
		$('.toggle-radio').show();
	}

	//login password max lenght
	$(".password-input").keyup(function () {
		this.value = this.value.replace(/[^0-9\.]/g, '');

		if (this.value.length == this.maxLength) {
			var $next = $(this).parents('li').next('li').children('.input-container').find('.password-input');

			if ($next.length) {
				$next.focus();
			}
			else {
				$(this).blur();
			}
		}
	});

	//Login checked toggle action (place order page script)
	$(".sector-opt .css-radio").click(function () {
		if ($(this).attr('id') == 'dob1' || $(this).attr('id') == 'dob2') {
			$(this).parents(".login-pan-pin").children('.dob-area').show();
			$(this).parents(".login-pan-pin").children('.pan-area').hide();
			console.log('checked');
		} else {
			$(this).parents(".login-pan-pin").children('.dob-area').hide();
			$(this).parents(".login-pan-pin").children('.pan-area').show();
			console.log('unchecked');
		}
	});


	$(window).load(function () {
		setTimeout(function () {
			$('#session-expired-modal').modal("show");
		}, 10000);
		
		$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw( false );
		
		//tablesorter
		$('.tab-pane.active').find('table').trigger('applyWidgets');
	})

	//Login unlock (login script)
	$('.unlock-userid').on('click', function () {
		$('.login-online-ar').hide();
		$('.account-locked').show();
	});

	//Login unlock (login script)
	$('.set-rpin').on('click', function () {
		$('.login-online-ar .login-pan-pin').hide();
		$('.login-online-ar .login-r-pin').show();
	});

	//Login unlock (login script)
	$('.unlock-form').on('click', function () {
		$('.account-locked').hide();
		$('.unlock-account').show();
	});

	//Login unlock (login script)
	$('.successful-unlock').on('click', function () {
		$('.unlock-account').hide();
		$('.successfully-unlock').show();
	});

	//Login unlock (login script)
	$('.login-online').on('click', function () {
		$('.successfully-unlock').hide();
		$('.login-online-ar').show();
	});
	
	//Terminal header toggle
	$('.header-arrow-bx').on('click', function () {
		$(this).parents(".terminal-header-hidden").toggleClass('toggle');
		$(this).children(".hd-arrow").toggleClass('hd-arrow-up');
	});

	//for header search (common script)
	$('.search-links i.icon-ic_search, .close-icon a').on('click',function(){
		$('.header-search-wrap').slideToggle('slow');
		$('input.search-nput').focus();
		$('.overlay-bg').addClass('active');
	});
	$('.close-icon a').on('click',function(){
		$('.overlay-bg').removeClass('active');
	});
	$('.search-input').keyup(function () {
		var valThis = this.value.toLowerCase(),
			lenght  = this.value.length;

		$('.search-list-wrap .recent-list>li div.name').each(function () {
			var text  = $(this).text(),
				textL = text.toLowerCase(),
				htmlR = '<b>' + text.substr(0, lenght) + '</b>' + text.substr(lenght);
			(textL.indexOf(valThis) == 0) ? $(this).html(htmlR).parent().show() : $(this).parent().hide();
		});
		$('.search-list-wrap').show();
		$('.recent-search-wrap').hide();
	});
	$('.search-list-wrap .recent-list>li div.name').on('click',function(){
		var content= $(this).text();
		$('.search-input').val(content);
	});

	$('.main-section .search-inputs').each(function () {
		$('.main-section .search-inputs').keyup(function () {
			var valThis = this.value.toLowerCase(),
				lenght = this.value.length;

			$('.main-section .search-list-wraps .recent-list>li div.name').each(function () {
				var text = $(this).text(),
					textL = text.toLowerCase(),
					htmlR = '<b>' + text.substr(0, lenght) + '</b>' + text.substr(lenght);
				(textL.indexOf(valThis) == 0) ? $(this).html(htmlR).parent().show() : $(this).parent().hide();
			});
			$('.main-section .search-list-wraps').show();
		});
	});
	$('.search-list-wraps .recent-list>li div.name').on('click', function () {
		var content = $(this).text();
		$('.search-inputs').val(content);
		$(this).parents('.min-container').children('.scrip-detail').toggle();
		$('.search-list-wraps').toggle();
	});

	// group search for place order page
	$('.place-search .place-search-inputs').each(function () {
		$('.place-search .place-search-inputs').keyup(function () {
			var valThis = this.value.toLowerCase(),
				lenght = this.value.length;

			$('.place-search .place-search-list .order-list .recent-list>li div.name').each(function () {
				var text = $(this).text(),
					textL = text.toLowerCase(),
					htmlR = '<b>' + text.substr(0, lenght) + '</b>' + text.substr(lenght);
				(textL.indexOf(valThis) == 0) ? $(this).html(htmlR).parent().show() : $(this).parent().hide();
			});
			$('.place-search .place-search-list').show();

			$(".order-list").filter(function () {
				return $(this).find("li:visible").length == 0;
			}).hide();
		});
	});
	$('.place-search-list .order-list .recent-list>li div.name').on('click', function () {
		var content = $(this).text();
		$('.place-search-inputs').val(content);
		$('.place-search-list').toggle();
	});

	//header place order toggle (common script)
	$('.place-order-link').on('click', function () {
		$('.place-order-search').slideToggle();
		$('.overlay-bg').toggleClass('selected');
	});
	$('.recent-list').on('click', function (e) {
		e.preventDefault();
		$(this).parent().next('.scrip-detail').toggle();
	});

	//star rating (common script)
	$('.input-star').rating({displayOnly: true, step: 0.5});

	//datepickers (common script)
	$('#datePicker').datepicker({
		format: "mm/dd/yyyy",
		todayHighlight: true,
	}).on('changeDate', function(e) {
		$('.datepicker').hide();
	});
	$('.datePicker').datepicker({
		format: "dd MM yyyy",
		todayHighlight: true,
	}).on('changeDate', function(e) {
		$('.datepicker').hide();
	});
	$('.datePickerTab').datepicker({
		format: "MM dd",
		todayHighlight: true,
	}).on('changeDate', function(e) {
		$('.datepicker').hide();
	});


	$('.derivatives-bann .month-time-tx').on('click', function(e){
		e.stopPropagation();
		return false;
	});

	//datepickers parents class(common script)
	$(".icondate").click(function () {
		$(this).next(".datePickerTab").focus();
	});

	//for calender pck on button click (common script)
	$('.calendar-pick').datepicker({
		format: 'dd-mm-yyyy',
		autoclose: true,
		forceParse: false,
		Default: true,
		pickDate: true,
		todayHighlight: true,
	});

	//for div height calculation
	divheight();
	eligheight();
	contheight();
	// footernav();

	//select
	if($('.country-select').length) {
		$(".country-select").msDropdown({roundedBorder:false});
	}

	// var parentElement = $(".select-wrap");
    $(".select").select2({
    	minimumResultsForSearch: -1,
        // dropdownParent: parentElement,
    });
	
	$(".selectTerminal").select2({
    	minimumResultsForSearch: -1,
        dropdownCssClass: 'epicColor'
    });

	// Malihu Scroll
	$(".horizontalScroll").mCustomScrollbar({
		axis:"x",
		theme: "dark",
		autoExpandHorizontalScroll: true,
		mouseWheel:{enable: false}
	});


	/*if ($(window).width() < 1023) {
	 $(".header-lt-sec .menu-lt-ar").mCustomScrollbar({
	 axis:"x",
	 theme: "dark",
	 autoExpandHorizontalScroll: true,
	 mouseWheel:{ scrollAmount: 600}
	 });
	 }*/

	//DataTable re-adjust on tab Script_______________________________________________
	//DataTable re-adjust on tab Script_______________________________________________
	$('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
		$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw( false );
	});

	$('.watchdata-table').DataTable({
		"bPaginate": false,
		"ordering": false,
		"searching": false,
		footer: true,
	});

	//for datatable
	$(".data-table thead tr").append("<th></th>");
	$(".data-table tbody tr").append("<td></td>");
	$('.data-table').DataTable({
		"bPaginate": false,
		"ordering": true,
		"searching": false,
		rowReorder: {
			selector: 'td:nth-child(2)'
		},
		responsive: {
			details: {
				type: 'column',
				target: -1
			}
		},
		columnDefs: [{
			className: 'control',
			orderable: false,
			targets: -1
		}]
	});

	var table = $(".data-table").DataTable();
	var spanSorting = '<span class="arrow-hack sort">&nbsp;&nbsp;&nbsp;</span>',
		spanAsc = '<span class="arrow-hack asc">&nbsp;&nbsp;&nbsp;</span>',
		spanDesc = '<span class="arrow-hack desc">&nbsp;&nbsp;&nbsp;</span>';
	$(".data-table").on('click', 'th', function () {
		$(".data-table thead th").each(function (i, th) {
			$(th).find('.arrow-hack').remove();
			var html = $(th).html(),
				cls = $(th).attr('class');
			switch (cls) {
				case 'sorting_asc' :
					$(th).html(html + spanAsc);
					break;
				case 'sorting_desc' :
					$(th).html(html + spanDesc);
					break;
				case 'text-left sorting_desc' :
					$(th).html(html + spanDesc);
					break;
				case 'text-left sorting_asc' :
					$(th).html(html + spanAsc);
					break;
				default :
					$(th).html(html + spanSorting);
					break;
			}
		});
	});
	$(".data-table th").first().click().click();


	// dataable with pagination
	$(".paging-table thead tr").append("<th></th>");
	$(".paging-table tbody tr").append("<td></td>");
	$('.paging-table').DataTable({
		"searching": false,
		"lengthChange": false,
		"sPagingType": "simple",
		"iDisplayLength": 5,
		language: {
			paginate: {
				next: '&#10095;',
				previous: '&#10094;'
			}
		},
		rowReorder: {
			selector: 'td:nth-child(2)'
		},
		responsive: {
			details: {
				type: 'column',
				target: -1
			}
		},
		columnDefs: [{
			className: 'control',
			orderable: false,
			targets: -1
		}],
		"fnDrawCallback": function (oSettings) {
			if (oSettings._iDisplayLength >= oSettings.fnRecordsDisplay()) {
				$(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
			}
		}
	});
	$.fn.dataTable.ext.pager.numbers_length = 5;
	var table = $('.paging-table').DataTable();
	//for adding sorting arrow to datable
	$(".paging-table").on('click', 'th', function () {
		$(".paging-table thead th").each(function (i, th) {
			$(th).find('.arrow-hack').remove();
			var html = $(th).html(),
				cls = $(th).attr('class');
			switch (cls) {
				case 'sorting_asc' :
					$(th).html(html + spanAsc);
					break;
				case 'sorting_desc' :
					$(th).html(html + spanDesc);
					break;
				case 'text-left sorting_desc' :
					$(th).html(html + spanDesc);
					break;
				case 'text-left sorting_asc' :
					$(th).html(html + spanAsc);
					break;
				default :
					$(th).html(html + spanSorting);
					break;
			}
		});
	});
	$(".paging-table th").first().click().click();

	// dataable with pagination for Notification Page
	$(".ntfy-paging-table thead tr").append("<th></th>");
	$(".ntfy-paging-table tbody tr").append("<td></td>");
	$('.ntfy-paging-table').DataTable({
		"searching": false,
		"lengthChange": false,
		"sPagingType": "simple",
		"iDisplayLength": 10,
		"ordering": false,
		language: {
			paginate: {
				next: '&#10095;',
				previous: '&#10094;'
			}
		},
		rowReorder: {
			selector: 'td:nth-child(2)'
		},
		responsive: {
			details: {
				type: 'column',
				target: -1
			}
		},
		columnDefs: [{
			className: 'control',
			orderable: false,
			targets: -1
		}],
		"fnDrawCallback": function (oSettings) {
			if (oSettings._iDisplayLength >= oSettings.fnRecordsDisplay()) {
				$(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
			}
		}
	});
	$.fn.dataTable.ext.pager.numbers_length = 5;
	var table = $('.ntfy-paging-table').DataTable();

	//for adding sorting arrow to datable
	$(".ntfy-paging-table").on('click', 'th', function () {
		$(".ntfy-paging-table thead th").each(function (i, th) {
			$(th).find('.arrow-hack').remove();
			var html = $(th).html(),
				cls = $(th).attr('class');
			switch (cls) {
				case 'sorting_asc' :
					$(th).html(html + spanAsc);
					break;
				case 'sorting_desc' :
					$(th).html(html + spanDesc);
					break;
				case 'text-left sorting_desc' :
					$(th).html(html + spanDesc);
					break;
				case 'text-left sorting_asc' :
					$(th).html(html + spanAsc);
					break;
				default :
					$(th).html(html + spanSorting);
					break;
			}
		});
	});
	$(".ntfy-paging-table th").first().click().click();

	$('.ntfy-paging-table tbody tr').on('click', function (e) {
		e.preventDefault();
		$(this).addClass('read');
	});
	$('.notify-link').on('click', function (e) {
		e.stopPropagation();
	});

	//read more aur less using jquery for Nitifiaction page
	var showTotalChar = 205, showChar = "More", hideChar = "Less";
	$('.collapsed-text').each(function () {
		var content = $(this).text();
		if (content.length > showTotalChar) {
			var con = content.substr(0, showTotalChar);
			var hcon = content.substr(showTotalChar, content.length - showTotalChar);
			var txt = con + '<span class="morectnt"><span>' + hcon + '</span>&nbsp;&nbsp;<a href="" class="expand-text">' + showChar + '</a></span>';
			$(this).html(txt);
		}
	});
	$(".expand-text").click(function () {
		if ($(this).hasClass("sample")) {
			$(this).removeClass("sample");
			$(this).text(showChar);
		} else {
			$(this).addClass("sample");
			$(this).text(hideChar);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});



	//Only sorting datatable
	var sorttable = $(".sorting-table").DataTable({
		"bPaginate": false,
		"ordering": true,
		"searching": false,
		"columnDefs": [{
			"targets": 'no-sort',
			"orderable": false,
		}]
	});
	$(".sorting-table").on('click', 'th', function () {
		$(".sorting-table thead th").each(function (i, th) {
			$(th).find('.arrow-hack').remove();
			var html = $(th).html(),
				cls = $(th).attr('class');
			switch (cls) {
				case 'sorting_asc' :
					$(th).html(html + spanAsc);
					break;
				case 'sorting_desc' :
					$(th).html(html + spanDesc);
					break;
				case 'text-left sorting_desc' :
					$(th).html(html + spanDesc);
					break;
				case 'text-left sorting_asc' :
					$(th).html(html + spanAsc);
					break;
				default :
					$(th).html(html + spanSorting);
					break;
			}
		});
	});
	$(".sorting-table th").first().click().click();


	$('.modal').on('shown.bs.modal', function (e) {
		$.fn.dataTable.tables({visible: true, api: true}).columns.adjust();
		$(".dataTables_scrollBody").mCustomScrollbar({
			theme: "minimal-dark"
		});
	});

	$('#myTable').DataTable({
		"scrollY": 200,
		ordering: false,
		"paging": false
	});
	
	$('.tab-datatbl').DataTable({
		"scrollY": 280,
		ordering: false,
		"paging": false
	});
	
	
    $('.tab-datatbl-mkt').DataTable({
        "scrollY": 225,
        ordering: false,
        "paging": false
    });

    $('.tab-datatbl-scanner').DataTable({
        "scrollY": 390,
        ordering: false,
        "paging": false
    });

   /* var viewportheight  = $('html').height() ;
    var halfbody = viewportheight / 2 - 35;
    $('.table-vwprt-hght .dataTables_scrollBody').height(halfbody);


    var halfbodys = viewportheight / 2 - 120;
    $('.table-vwprt-hghts .dataTables_scrollBody').height(halfbodys);

    var halfbodyss = viewportheight / 1.6;
    $('.table-vwprt-hghtss .dataTables_scrollBody').height(halfbodyss);
	
	
    var first = $('.terminal-chart-ar').height();
    var second = $('.terminal-plc-bt').height();
    var third = $('.terminal-plc-dat').height();
    var fourth = $('.terminal-header').height();
    var totals = first + second + third + fourth;
    var totaldivheight = viewportheight - totals - 235;
    $('.tablecalculatedhght').height(totaldivheight ) ;*/


	//Only sorting datatable
	$(".sorting-scroll-table").DataTable({
		"bPaginate": false,
		"ordering": true,
		"searching": false,
		"scrollY": "350px",
		"columnDefs": [{
			"targets": 'no-sort',
			"orderable": true,
		}]
	});


	//for filter table in head
	var dtable = $('.filter-table').DataTable({
		"bPaginate": false,
		"ordering": true,
		"columnDefs": [{
			"targets": 0,
			"orderable": false,
		}]
	});
	$(".filter-table").on('click', 'th.a', function () {
		$(".filter-table thead th.a").each(function (i, th) {
			$(th).find('.arrow-hack').remove();
			var html = $(th).html(),
				cls = $(th).attr('class');
			switch (cls) {
				case 'a sorting_asc' :
					$(th).html(html + spanAsc);
					break;
				case 'a sorting_desc' :
					$(th).html(html + spanDesc);
					break;
				case 'a text-left sorting_desc' :
					$(th).html(html + spanDesc);
					break;
				case 'a text-left sorting_asc' :
					$(th).html(html + spanAsc);
					break;
				default :
					$(th).html(html + spanSorting);
					break;
			}
		});
	});
	$(".filter-table th.a").last().click().click();
	$('.filter-table .filter').on('keyup change', function () {
		dtable.search('');
		dtable.column($(this).data('columnIndex')).search(this.value).draw();
	});


	// activate jquery masonry 
	$('.news-blocks').masonry({
		itemSelector: '.blocks'
	});


	// for Carousal
	$(".list-carousel").owlCarousel({
		autoPlay: false,
		center: true,
		items: 6,
		loop: false,
		navigation: true,
		navigationText: ["", ""],
		rewindNav: true,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [979, 3]
	});
	
	$(".list-carousel-mkt").owlCarousel({
		autoPlay: false,
		center: true,
		items: 7,
		loop: false,
		navigation: true,
		navigationText: ["", ""],
		rewindNav: true,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [979, 3]
	});

	$(".list-carousel-four").owlCarousel({
		autoPlay: false,
		center: true,
		items: 4,
		loop: false,
		navigation: true,
		navigationText: ["", ""],
		rewindNav: true,
		itemsDesktop: [1199, 4],
		itemsDesktopSmall: [979, 4]
	});

	$(".four-list").owlCarousel({
		autoPlay: false,
		center: true,
		items: 3,
		loop: false,
		navigation: true,
		navigationText: ["", ""],
		rewindNav: true,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [979, 3]
	});

	$(".slider-carousel").owlCarousel({
		autoPlay: false,
		center: true,
		items: 1,
		loop: false,
		navigation: true,
		navigationText: ["", ""],
		rewindNav: true,
		itemsDesktop: [1199, 1],
		itemsDesktopSmall: [979, 1]
	});
	$(".currency-carousel").owlCarousel({
		autoPlay: false,
		center: true,
		items: 1,
		loop: false,
		navigation: true,
		navigationText: ["", ""],
		mouseDrag: false,
		rewindNav: true,
		itemsDesktop: [1199, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [479, 1],
	});

	$(".recommon-carousal").owlCarousel({
		autoPlay: true,
		items: 3,
		loop: true,
		navigation: true,
		navigationText: ["", ""],
		mouseDrag: true,
		rewindNav: true,
		itemsDesktop: [1199, 2],
		itemsDesktopSmall: [979, 2],
		itemsTablet: [768, 1],
		itemsMobile: [479, 1],
	});
	
	//Bootstrap typehead for autocompelete 
	var autocompeletval = [{"label": "Axis Bank Ltd"}, {"label": "Antique Brass"}, {"label": "Apricot"}, {"label": "Violet Blue"}, {"label": "Wild Strawberry"}, {"label": "Wild Watermelon"}, {"label": "Wisteria"}, {"label": "Yellow"}, {"label": "Yellow Green"}, {"label": "Yellow Orange"}];

	$('.search-typeahead').autocompleter({
		highlightMatches: true,
		source: autocompeletval,
		template: '{{ label }} ',
		hint: true,
		empty: false,
		limit: 10,
		callback: function (value, index, selected) {
			if (selected) {
				$(this).parents('.append-scrip .addon').parents().next().children('.toggle-ltp').css('opacity', "1");
			}
		}
	});


	//for dropdown info popup
	$('.textfields .select2-container').on('click', function () {
		$(this).parent().children('.hint').toggle();
		$('.opacitycss').removeClass('opacitycss');
		$(this).parent().children('.info-icon').toggleClass('opacitycss');
	});


	//for toggle div
	$('.search-detail .tt-dataset').on('click', function () {
		$(this).parents('.search-detail').find('.scrip-detail').toggle();
		$(this).parent('.twitter-typeahead').children('.tt-menu').toggle();
		$('.overlay-bg').addClass('active-overlay');
		$('.scrip-detail,.search-typeahead ').css('z-index', '999');
	});
	$('.search-detail .search-typeahead').on('keypress', function () {
		$(this).parents('.search-detail').find('.scrip-detail').hide();
		$('.overlay-bg').removeClass('active-overlay');
		$('.scrip-detail,.search-typeahead ').css('z-index', '0');
	});

	//watchlist place order popup
	var boolean = true;
	$('.placeorder-info .expand-field').on('click', function (e) {
		e.preventDefault();
		boolean ? $('.hidden-field').show() : $('.hidden-field').slideUp(800);
		boolean ? boolean = false : boolean = true;
		$('.hidden-field').toggleClass('expand');
		$('.expand-field span.icon').text(function (i, text) {
			return text === "+" ? "-" : "+";
		});
		$('.expand-field span.txt').text(function (i, text) {
			return text === "Show optional fields" ? "Hide optional fields" : "Show optional fields";
		});

		$('#watchlist-order-modal .place-opt-bx').mCustomScrollbar('scrollTo', '#scroll-hidden');


		return false;
	});



	//toggle hidden field on click for place order page
    $(".hidden-fields").hide();
    $(".pl-ord-expand").on('click',function(){
        $(".hidden-fields").slideToggle();
        $('.pl-ord-expand span.icon').text(function (i, text) {
               return text === "+" ? "-" : "+";
        });
        $('.pl-ord-expand span.txt').text(function (i, text) {
           return text === "Show optional fields" ? "Hide optional fields" : "Show optional fields";
        });
    });
	$(".b-ord-expand").on('click',function(){
        $(".hidden-fields").slideToggle();
        $('.b-ord-expand span.icon').text(function (i, text) {
            return text === "+" ? "-" : "+";
        });
    });
	
	//for enable input on click
	$('.editable-sec .icon-Modify').on('click', function () {
		$('.editable-input').removeAttr('disabled');
		$('.editable-input').focus();
		$('.editable-input').css('border-bottom', '1px solid #dedede');
		$('.editable-sec .save-icon').show();
		$('.editable-sec .cancel-icon').show();
		$('.editable-sec .edit-icon').hide();
	});
	$('.editable-sec .save-icon').on('click', function () {
		$('.editable-input').attr('disabled', 'disabled');
		$('.editable-input').css('border-bottom', 'none');
		$('.editable-sec .save-icon').hide();
		$('.editable-sec .cancel-icon').hide();
		$('.editable-sec .edit-icon').show();
	});

	//add and remove class active in accordion
	/*$('.main-accordion .panel-heading .panel-title').on('click', function(){
	 $(this).addClass('active').siblings().removeClass('active');
	 });*/

	//for button click remove active-overlay class
	$('.duration-wrap .btn-wrap .btn-confirm').on('click', function () {
		$('.overlay-bg').removeClass(' active-overlay');
		$('.scrip-detail').hide();
	});


	//for remove tr on click
	$('.popup-table .remove-action a').click(function (e) {
		$(this).closest('tr').remove()
	});

	//for disabling input box on check box click
	$('.check-disable').change(function () {
		$(this).parents().prev().children('.input-disable').attr('disabled', this.checked)
	});

	//for removing body overflow when popup is open
	$('.modal').on('show.bs.modal', function (e) {
		$('body').addClass('open-modal');
	});
	$('.modal').on('hide.bs.modal', function (e) {
		$('body').removeClass('open-modal');
	});
	$(document.body).on('hide.bs.modal', function () {
		$('body').removeClass('open-modal');
	});


	//appendling list on value enter in input box
	$('.btn-create').on('click', function (e) {
		var val = $(this).parents('.setalert-script-cont').find('.add-input').val();
		console.log(val);
		$('.watch-list-wrap ul.list').append('<li><span class="icon"><span class="icon-Select-Index1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span></span></span> <span class="text">' + val + '</span></li>');
		e.preventDefault();
	});


	//for toggling div on input box click
	$('.basket-table tr td .qty-input').on('keypress', function () {
		var a = $(this).parents().next().html();
		console.log(a);
		$(this).parents().next().children().css('opacity', "1");
	});

	//appen tr in table on bvutton click
	$('.row-appen-wrap a').click(function (event) {
		event.preventDefault();
		var newRow = $('<tr><td><div class="checkbox"><input type="checkbox" id="bskChecked2" class="css-checkbox"><label class="css-label" for="bskChecked2"></label></div></td><td  class="text-left"><div class="placeord-radio"><span class="radio-list"><input type="radio" id="bskplacebuy3" name="placebuy2" class="css-radio" checked><label class="css-label" for="bskplacebuy3">Buy</label></span><span class="radio-list"><input type="radio" id="bskplacesell3" name="placebuy2" class="css-radio"><label class="css-label" for="bskplacesell3">Sell</label></span></div></td><td class="text-left"><div class="addon"><input type="text" name="search" value="" class="search-typeahead" autocomplete="off" spellcheck="false" placeholder="Axis Bank Ltd"><span class="search-icon"><i class="icon-ic_search"></i></span></div><select class="select"><option value="nifty50">NSE</option><option value="nifty50">BSE</option></select></td> <td><p class="toggle-ltp">2,087.25 <span class="loss-col  green-col">16.70 (6.17%)</span><p></td> <td class="text-left"><select class="select"><option value="nifty50">Delivery</option><option value="nifty50">Pending</option></select></td><td class="text-left"><select class="select"><option value="nifty50">Market</option><option value="nifty50">Limit</option></select></td><td class="text-center"><input type="text" name="" placeholder="10" class="form-control qty-input"></td><td><span class="toggle-price">20,030.54</span></td></tr>');
		$(this).parent().prev().find('.append-scrip').append(newRow);

		//for toggling div on input box click
		$('.basket-table tr td .tt-dataset').on('click', function () {
			$(this).parents('.addon').parents().next().children('.toggle-ltp').css('opacity', "1");
		});
		$('.basket-table tr td .qty-input').on('keypress', function () {
			var a = $(this).parents().next().html();
			console.log(a);
			$(this).parents().next().children().css('opacity', "1");
		});

		//SELECT2 ON CLICK
		$(".select").select2({
			minimumResultsForSearch: -1,
		});

		//FOR AUTO SUGGESTION ON CLICK
		$(function () {
			$('.search-typeahead').autocompleter({
				highlightMatches: true,
				source: autocompeletval,
				template: '{{ label }} ',
				hint: true,
				empty: false,
				limit: 10,
				callback: function (value, index, selected) {
					if (selected) {
						$(this).parents('.append-scrip .addon').parents().next().children('.toggle-ltp').css('opacity', "1");
					}
				}
			});
		});

	});

	//for add and remove active class on click
	$('.sorting-lst li.list a').on('click', function () {
		$('.sorting-lst li.list.active').removeClass('active');
		$(this).parent().addClass('active');
	});

	//for truncating word count
	$(".desc.report-info").each(function (i) {
		var len = $(this).text().length;
		if (len > 320) {
			$(this).text($(this).text().substr(0, 320) + '...');
		}
	});

	$('.owl-wrapper-outer .owl-wrapper .owl-item .item').on('click', function () {
		$('.owl-wrapper-outer .owl-wrapper .owl-item').removeClass('active');
		$(this).parent().addClass('active');
	});

	blockheight();


	//tablesorter function for bootstrap tab
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		$('.tab-pane.active').find('table').trigger('applyWidgets');
		$(window).resize();
	});

	//tablesorter on total order table
	var $table1 = $('.table1Acc').on('pagerInitialized pagerComplete', function (e, c) {
			var i, pages = '', t = [],
				cur = c.page + 1,
				start = cur > 1 ? (c.totalPages - cur < 3 ? -3 + (c.totalPages - cur) : -1) : 0,
				end = cur < 3 ? 5 - cur : 2;
			for (i = start; i < end; i++) {
				if (cur + i >= 1 && cur + i < c.totalPages) {
					t.push(cur + i);
				}
			}
			// make sure first and last page are included in the pagination
			if ($.inArray(1, t) === -1) {
				t.push(1);
			}
			if ($.inArray(c.totalPages, t) === -1) {
				t.push(c.totalPages);
			}
			// sort the list
			t = t.sort(function (a, b) {
				return a - b;
			});
			// make links and spacers
			$.each(t, function (j, v) {
				pages += '<a href="#" class="' + (v === cur ? 'current' : '') + '">' + v + '</a>';
				pages += j < t.length - 1 && ( t[j + 1] - 1 !== v ) ? ' ... ' : ( j >= t.length - 1 ? '' : '' );
			});
			$('.pagecount').html(pages);
		})

		.tablesorter({
			theme: 'blue',
			// this is the default setting
			cssChildRow: "tablesorter-childRow",

			// initialize zebra and filter widgets
			widgets: ["zebra", "filter"],

			widgetOptions: {
				// filter_anyMatch replaced! Instead use the filter_external option
				// Set to use a jQuery selector (or jQuery object) pointing to the
				// external filter (column specific or any match)
				filter_external: '.search',
				// add a default type search to the first name column
				filter_defaultFilter: {1: '~{query}'},
				// include column filters
				filter_columnFilters: false,
				filter_placeholder: {search: 'Search...'},
				filter_saveFilters: true,
				filter_reset: '.reset'
			}
		}).tablesorterPager({
			// target the pager markup - see the HTML block below
			container: $(".pager"),
			size: 10,
			output: 'showing: {startRow} to {endRow} ({totalRows})'
		});
	// hide child rows - get in the habit of not using .hide()
	// See http://jsfiddle.net/Mottie/u507846y/ & https://github.com/jquery/jquery/issues/1767
	// and https://github.com/jquery/jquery/issues/2308
	// This won't be a problem in jQuery v3.0+
	$table1.find('.tablesorter-childRow td').addClass('hidden');

	// Toggle child row content (td), not hiding the row since we are using rowspan
	// Using delegate because the pager plugin rebuilds the table after each page change
	// "delegate" works in jQuery 1.4.2+; use "live" back to v1.3; for older jQuery - SOL
	$table1.delegate('.toggle', 'click', function () {
		// use "nextUntil" to toggle multiple child rows
		// toggle table cells instead of the row
		$(this)
			.closest('tr')
			.nextUntil('tr.tablesorter-hasChildRow')
			.find('td')
			.toggleClass('hidden');
		$(this).toggleClass('active');
		return false;
	});
	// Toggle filter_childRows option
	$('button.toggle-combined').click(function () {
		var wo = $table1[0].config.widgetOptions,
			o = !wo.filter_childRows;
		wo.filter_childRows = o;
		$('.state1').html(o.toString());
		// update filter; include false parameter to force a new search
		$table1.trigger('search', false);
		return false;
	});
	$('.pager .right .pagecount').on('click', 'a', function () {
		$(this)
			.addClass('current')
			.siblings()
			.removeClass('current');
		$table1.trigger('pageSet', $(this).html());
		return false;
	});
	//End tablesorter on pending table






	//tablesorter One on pending table
	var table1AccOne = $('.table1AccOne')
		.on('pagerInitialized pagerComplete', function (e, c) {
			var i, pages = '', t = [],
				cur = c.page + 1,
				start = cur > 1 ? (c.totalPages - cur < 3 ? -3 + (c.totalPages - cur) : -1) : 0,
				end = cur < 3 ? 5 - cur : 2;
			for (i = start; i < end; i++) {
				if (cur + i >= 1 && cur + i < c.totalPages) {
					t.push(cur + i);
				}
			}
			// make sure first and last page are included in the pagination
			if ($.inArray(1, t) === -1) {
				t.push(1);
			}
			if ($.inArray(c.totalPages, t) === -1) {
				t.push(c.totalPages);
			}
			// sort the list
			t = t.sort(function (a, b) {
				return a - b;
			});
			// make links and spacers
			$.each(t, function (j, v) {
				pages += '<a href="#" class="' + (v === cur ? 'current' : '') + '">' + v + '</a>';
				pages += j < t.length - 1 && ( t[j + 1] - 1 !== v ) ? ' ... ' : ( j >= t.length - 1 ? '' : '' );
			});
			$('.pagecountOne').html(pages);
		})
		.tablesorter({
			theme: 'blue',
			// this is the default setting
			cssChildRow: "tablesorter-childRow",

			// initialize zebra and filter widgets
			widgets: ["zebra", "filter"],

			widgetOptions: {
				// filter_anyMatch replaced! Instead use the filter_external option
				// Set to use a jQuery selector (or jQuery object) pointing to the
				// external filter (column specific or any match)
				filter_external: '.search',
				// add a default type search to the first name column
				filter_defaultFilter: {1: '~{query}'},
				// include column filters
				filter_columnFilters: false,
				filter_placeholder: {search: 'Search...'},
				filter_saveFilters: true,
				filter_reset: '.reset'
			}

		}).tablesorterPager({
			// target the pager markup - see the HTML block below
			container: $(".pagerOne"),
			size: 10,
			output: 'showing: {startRow} to {endRow} ({totalRows})'
		});
	// hide child rows - get in the habit of not using .hide()
	// See http://jsfiddle.net/Mottie/u507846y/ & https://github.com/jquery/jquery/issues/1767
	// and https://github.com/jquery/jquery/issues/2308
	// This won't be a problem in jQuery v3.0+
	table1AccOne.find('.tablesorter-childRow td').addClass('hidden');
	// Toggle child row content (td), not hiding the row since we are using rowspan
	// Using delegate because the pager plugin rebuilds the table after each page change
	// "delegate" works in jQuery 1.4.2+; use "live" back to v1.3; for older jQuery - SOL
	table1AccOne.delegate('.toggle', 'click', function () {
		// use "nextUntil" to toggle multiple child rows
		// toggle table cells instead of the row
		$(this)
			.closest('tr')
			.nextUntil('tr.tablesorter-hasChildRow')
			.find('td')
			.toggleClass('hidden');
		return false;
	});
	// Toggle filter_childRows option
	$('button.toggle-combined').click(function () {
		var wo = table1AccOne[0].config.widgetOptions,
			o = !wo.filter_childRows;
		wo.filter_childRows = o;
		$('.state1').html(o.toString());
		// update filter; include false parameter to force a new search
		table1AccOne.trigger('search', false);
		return false;
	});

	$('.pagerOne .right .pagecountOne').on('click', 'a', function () {
		$(this)
			.addClass('current')
			.siblings()
			.removeClass('current');
		table1AccOne.trigger('pageSet', $(this).html());
		return false;
	});
	//End tablesorter Two on pending table


	//tablesorter Two on pending table
	var table1AccTwo = $('.table1AccTwo')
		.on('pagerInitialized pagerComplete', function (e, c) {
			var i, pages = '', t = [],
				cur = c.page + 1,
				start = cur > 1 ? (c.totalPages - cur < 3 ? -3 + (c.totalPages - cur) : -1) : 0,
				end = cur < 3 ? 5 - cur : 2;
			for (i = start; i < end; i++) {
				if (cur + i >= 1 && cur + i < c.totalPages) {
					t.push(cur + i);
				}
			}
			// make sure first and last page are included in the pagination
			if ($.inArray(1, t) === -1) {
				t.push(1);
			}
			if ($.inArray(c.totalPages, t) === -1) {
				t.push(c.totalPages);
			}
			// sort the list
			t = t.sort(function (a, b) {
				return a - b;
			});
			// make links and spacers
			$.each(t, function (j, v) {
				pages += '<a href="#" class="' + (v === cur ? 'current' : '') + '">' + v + '</a>';
				pages += j < t.length - 1 && ( t[j + 1] - 1 !== v ) ? ' ... ' : ( j >= t.length - 1 ? '' : '' );
			});
			$('.pagecountTwo').html(pages);
		})
		.tablesorter({
			theme: 'blue',
			// this is the default setting
			cssChildRow: "tablesorter-childRow",

			// initialize zebra and filter widgets
			widgets: ["zebra", "filter"],

			widgetOptions: {
				// filter_anyMatch replaced! Instead use the filter_external option
				// Set to use a jQuery selector (or jQuery object) pointing to the
				// external filter (column specific or any match)
				filter_external: '.search',
				// add a default type search to the first name column
				filter_defaultFilter: {1: '~{query}'},
				// include column filters
				filter_columnFilters: false,
				filter_placeholder: {search: 'Search...'},
				filter_saveFilters: true,
				filter_reset: '.reset'
			}
		}).tablesorterPager({
			// target the pager markup - see the HTML block below
			container: $(".pagerTwo"),
			size: 10,
			output: 'showing: {startRow} to {endRow} ({totalRows})'
		});
	// hide child rows - get in the habit of not using .hide()
	// See http://jsfiddle.net/Mottie/u507846y/ & https://github.com/jquery/jquery/issues/1767
	// and https://github.com/jquery/jquery/issues/2308
	// This won't be a problem in jQuery v3.0+
	table1AccTwo.find('.tablesorter-childRow td').addClass('hidden');

	// Toggle child row content (td), not hiding the row since we are using rowspan
	// Using delegate because the pager plugin rebuilds the table after each page change
	// "delegate" works in jQuery 1.4.2+; use "live" back to v1.3; for older jQuery - SOL
	table1AccTwo.delegate('.toggle', 'click', function () {
		// use "nextUntil" to toggle multiple child rows
		// toggle table cells instead of the row
		$(this)
			.closest('tr')
			.nextUntil('tr.tablesorter-hasChildRow')
			.find('td')
			.toggleClass('hidden');
		return false;
	});
	// Toggle filter_childRows option
	$('button.toggle-combined').click(function () {
		var wo = table1AccTwo[0].config.widgetOptions,
			o = !wo.filter_childRows;
		wo.filter_childRows = o;
		$('.state1').html(o.toString());
		// update filter; include false parameter to force a new search
		table1AccTwo.trigger('search', false);
		return false;
	});
	$('.pagerTwo .right .pagecountTwo').on('click', 'a', function () {
		$(this)
			.addClass('current')
			.siblings()
			.removeClass('current');
		table1AccTwo.trigger('pageSet', $(this).html());
		return false;
	});
	//End tablesorter Two on pending table

	//Start tablesorter Three on pending table
	var table1AccThree = $('.table1AccThree')
		.on('pagerInitialized pagerComplete', function (e, c) {
			var i, pages = '', t = [],
				cur = c.page + 1,
				start = cur > 1 ? (c.totalPages - cur < 3 ? -3 + (c.totalPages - cur) : -1) : 0,
				end = cur < 3 ? 5 - cur : 2;
			for (i = start; i < end; i++) {
				if (cur + i >= 1 && cur + i < c.totalPages) {
					t.push(cur + i);
				}
			}
			// make sure first and last page are included in the pagination
			if ($.inArray(1, t) === -1) {
				t.push(1);
			}
			if ($.inArray(c.totalPages, t) === -1) {
				t.push(c.totalPages);
			}
			// sort the list
			t = t.sort(function (a, b) {
				return a - b;
			});
			// make links and spacers
			$.each(t, function (j, v) {
				pages += '<a href="#" class="' + (v === cur ? 'current' : '') + '">' + v + '</a>';
				pages += j < t.length - 1 && ( t[j + 1] - 1 !== v ) ? ' ... ' : ( j >= t.length - 1 ? '' : '' );
			});
			$('.pagecountThree').html(pages);
		})
		.tablesorter({
			theme: 'blue',
			// this is the default setting
			cssChildRow: "tablesorter-childRow",

			// initialize zebra and filter widgets
			widgets: ["zebra", "filter"],

			widgetOptions: {
				// filter_anyMatch replaced! Instead use the filter_external option
				// Set to use a jQuery selector (or jQuery object) pointing to the
				// external filter (column specific or any match)
				filter_external: '.search',
				// add a default type search to the first name column
				filter_defaultFilter: {1: '~{query}'},
				// include column filters
				filter_columnFilters: false,
				filter_placeholder: {search: 'Search...'},
				filter_saveFilters: true,
				filter_reset: '.reset'
			}
		}).tablesorterPager({
			// target the pager markup - see the HTML block below
			container: $(".pagerThree"),
			size: 10,
			output: 'showing: {startRow} to {endRow} ({totalRows})'
		});
	// hide child rows - get in the habit of not using .hide()
	// See http://jsfiddle.net/Mottie/u507846y/ & https://github.com/jquery/jquery/issues/1767
	// and https://github.com/jquery/jquery/issues/2308
	// This won't be a problem in jQuery v3.0+
	table1AccThree.find('.tablesorter-childRow td').addClass('hidden');

	// Toggle child row content (td), not hiding the row since we are using rowspan
	// Using delegate because the pager plugin rebuilds the table after each page change
	// "delegate" works in jQuery 1.4.2+; use "live" back to v1.3; for older jQuery - SOL
	table1AccThree.delegate('.toggle', 'click', function () {
		// use "nextUntil" to toggle multiple child rows
		// toggle table cells instead of the row
		$(this)
			.closest('tr')
			.nextUntil('tr.tablesorter-hasChildRow')
			.find('td')
			.toggleClass('hidden');
		return false;
	});
	// Toggle filter_childRows option
	$('button.toggle-combined').click(function () {
		var wo = table1AccThree[0].config.widgetOptions,
			o = !wo.filter_childRows;
		wo.filter_childRows = o;
		$('.state1').html(o.toString());
		// update filter; include false parameter to force a new search
		table1AccThree.trigger('search', false);
		return false;
	});
	$('.pagerThree .right .pagecountThree').on('click', 'a', function () {
		$(this)
			.addClass('current')
			.siblings()
			.removeClass('current');
		table1AccThree.trigger('pageSet', $(this).html());
		return false;
	});
	//End tablesorter Three on pending table

	//fund view scroll
	$(".cash-info-wrap .customscroll, .tminal-scroll .dataTables_scrollBody, .mkt-mover-scroll, .tab-datat-body, .tab-datat-corporate, .vertical-scroll").mCustomScrollbar({
		theme: "minimal-dark"
	});

	//toggle portfolio div for portfolio page
	$('.toggle-portfolio').on('click', function () {
		$(this).next().slideToggle();
	});

	//horizontal mcustomescroller for Capital Gainer/Looser Page
	$(".horizontal-scroll").mCustomScrollbar({
		axis: "x",
		theme: "dark-3",
	});

	//toggleing text on click on Transaction History Page
	$('a.toggle-view').on('click', function () {
		$(this).toggleClass('selected');
		$(this).text(function (i, text) {
			return text === "View" ? "Close" : "View";
		});
	});
	
	//toggleing text on click on NCD order book Page
    $('.ndc-ordtable a.toggle-ncdview').on('click', function () {
        $(this).toggleClass('selected');
        $(this).text(function (i, text) {
            return text === "View Details" ? "Hide Details" : "View Details";
        });
    });
	
	$('.careers-accod .panel-heading .acco-link .viewlink').on('click', function () {
        $(this).text(function (i, text) {
            return text === "View Details" ? "Hide Details" : "View Details";
        });
    });

	//for option radio toggle on click in quotes equity page
	$('.radio-list input[name=options1]').bind('change', function () {
		var showOrHide = ($(this).val() == 2) ? true : false;
		$('.hidden-option-list').toggleClass('opt-toggle')
		$('.hidden-option-list').toggle(showOrHide);
		$('.fno-area .tranding-select-opt.left').toggleClass('left-v');
		$('.fno-area .tranding-select-opt.middle').toggleClass('middle-v');
		$('.fno-area .tranding-select-opt.right').toggleClass('right-v');
	});
	
	//expand function	
	$(".terminal-expand").click(function (e) {
        e.preventDefault();        
        var $this = $(this);
        $(this).parents('.terminal-fulscr').toggleClass('panel-fullscreen', function(){
             var halfbodyss = viewportheight / 1.6;
             $('.panel-fullscreen .table-vwprt-hght .dataTables_scrollBody').height(halfbodyss);
		});
        $(this).children().toggleClass('icon-Expand icon-compac');
		$('body').toggleClass('block');
		//tablesorter
		$('.tab-pane.active').find('table').trigger('applyWidgets');

    });

    $(".terminal-expands").click(function (e) {
        e.preventDefault();
        var $this = $(this);
        $(this).parents('.terminal-fulscr').addClass('panel-fullscreen');
    	$('.icon-Expand').toggleClass('icon-Expand icon-compac');
    });


	
	$('.drop-action').on('click', function(){
        var currentContent = $(this).parents('.watch-action').next('.action-drop');
        $('.action-drop').not(currentContent).hide();
        currentContent.toggle();
	});


    $('.sentiments a span').on('click', function(){
    	switch(true) {
			case $(this).hasClass('red-col'):
				$('.news-sorted-table .webTab-table tr.red-cont').show("slow");
                $('.news-sorted-table .webTab-table tr.white-cont').hide();
                $('.news-sorted-table .webTab-table tr.green-cont').hide();
                $('.news-sorted-table .webTab-table tr.red-cont .tbl-num').addClass('red-col');
                break;
            case $(this).hasClass('green-col'):
                $('.news-sorted-table .webTab-table tr.red-cont').hide();
                $('.news-sorted-table .webTab-table tr.white-cont').hide();
                $('.news-sorted-table .webTab-table tr.green-cont').show("slow");
                $('.news-sorted-table .webTab-table tr.green-cont .tbl-num').addClass('green-col');
                break;
            case $(this).hasClass('white-col'):
                $('.news-sorted-table .webTab-table tr.red-cont').hide();
                $('.news-sorted-table .webTab-table tr.white-cont').show("slow");
                $('.news-sorted-table .webTab-table tr.green-cont').hide();
                break;
		}
	});

	//preventing  parent click event
	$('.watch-action-toggle li a').on('click', function (event) {
		event.stopPropagation();
		var href = $(this).data('target');
		var id = $(this).data('id');
		$(href).data('id', id).modal('show');
	});
    $('.table-popups tr td.text-right').on('click', function (event) {
        event.stopPropagation();
    });

	$('.table-popups-position .position-tabl tr th .edit-btn').on('click', function (ev) {
		ev.stopPropagation();
		var $td = $(this).parent('th');
		var c = $td.prevAll().length;
		var tdVal = c + 1;
		$(this).parents('thead').next('tbody').children('tr').find('td:nth-child(' + tdVal + ')').find('.num-ip').attr('disabled', false);
		$(this).hide().next('.save-btn').show();
		// var tdNum = $();
		// $().find('.form-control').attr('disabled', false);
		console.log(c)
	});

	$('.table-popups-position .position-tabl tr th .save-btn').on('click', function (ev) {
		ev.stopPropagation();
		var $td = $(this).parent('th');
		var c = $td.prevAll().length;
		var tdVal = c + 1;
		$(this).parents('thead').next('tbody').children('tr').find('td:nth-child(' + tdVal + ')').find('.num-ip').attr('disabled', true);
		$(this).hide().prev('.edit-btn').show();
		console.log(c)
	});

	//profile popup post login pages
	$('.search-links a.post-admin').on('click', function () {
		$('.admin-popup').slideToggle();
		$('.notify-popup').slideUp();
	});

	//Notification popup post login pages
	$('.post-notify').on('click', function () {
		$('.notify-popup').slideToggle();
		$('.admin-popup').slideUp();
	});

	$('.terminal-notify').on('click', function(){
        $('.notify-popups').slideToggle();
        $('.notify-popup').hide();
	});
	
	//script for toggling pre login build wealth on click
	$('.build-wlth-link').on('click', function(){
		$('.build-wlth-toggle').slideToggle();
	});
    $('.build-mob-link').on('click', function(){
        $('.build-mob-toggle').slideToggle();
    });


	//script for build wealth guided portfolio page
	$('.action-wrap .expandable-btn').on('click', function(){
		$(this).toggleClass('active');
		$(this).parents('.explore-wrapper').children('.banner-toggle-wrap').slideToggle('slow');
        $('html, body').animate({
            scrollTop: $("#banner-toggle-wrap").offset().top - 150
        }, 800);
	});
	
	//toggling div on click for report page
	$('.view-rpt-dtail').on('click', function(){
		$(this).parents().prev().children('.hidden-cnt-wrap').slideToggle().addClass('active');
		$('.trding-report-wrap').hide();
        $(this).parent('.view-link').next('.padination-wraps').show();
        $(this).hide();
		return false;
	});

	$('.report-nv-lst li a').on('click', function(e){
		e.preventDefault();

		if($('.report-tab .tab-pane').hasClass('active')){
            $('.trding-report-wrap').show();
		}
	});
	
	//toggling attribute on click for guided portfolio
	$('.edit-goal-click').on('click', function(){
		$('.form-control').removeAttr('disabled');
        $('.form-control').focus();
        $('.select').removeAttr('disabled');
		$('.select2-container').removeClass('select2-container--disabled');
	});
	
	$('.bank-list ul li .wrapper.selected .bank-detail').show();
    //on click toggle for Manage funds page
    $('.bank-list ul li .wrapper').on('click', function(e){
        e.preventDefault();
        var $list = $(this).children('.bank-detail');
        var $lists = $(this).addClass('selected');
        $list.slideToggle();
        $('.bank-detail').not($list).slideUp();
        $('.bank-list ul li .wrapper').not($lists).removeClass('selected');
    });
    $('.bank-list ul li .wrapper .bank-detail').on('click', function(e){
        e.stopPropagation();
    });
    $('.bank-list ul li .wrapper .bank-detail .addon .from-control').keypress(function(){
		$(this).parents('.addon').children('.icon').find('.fontsize').show();
	});

    //tabs click event for onboarding page
    $('#onbrdingconfrm').click(function(e){
        e.preventDefault();
        $('.tabs-right a[href="#kyccheck"]').tab('show');
        if($('.tabs-right > li').hasClass('active')) {
            $('.tabs-right > li.active a').find('.circle').children('.active-font').removeClass('hidden');
            $('.tabs-right > li.active a').find('.circle').children('.unselicon').addClass('hidden');
        }
        $("#onbrdingconfrm").modal("hide");

    });



    $('.tabs-right > li a').on('click', function(){
        if($('.tabs-right > li').hasClass('active')) {
            $(this).find('.circle').children('.active-font').removeClass('hidden');
            $(this).find('.circle').children('.unselicon').addClass('hidden');
        }
	});




    $('.otp-inputs').on("keyup", function(e) {
        var Length = $(this).attr("maxlength");
        if ($(this).val().length >= parseInt(Length)) {
            $(this).removeClass("productkey1").addClass("productkey2");
            $(this).next('.otp-inputs').focus();
        } else if ($(this).val().length > parseInt(Length)) {
            $(this).removeClass("productkey2").addClass("productkey1");
            $(this).prev('.otp-inputs').focus();
        }
    });


    $('.gender-list li a, .risk-list-wrap li .inner-list li a').on('click', function(){
    	$(this).parent().addClass('active').siblings().removeClass('active');
	});





    $('.verify-click').on('click', function(){
    	$('.aadharvrfylink-wrap').slideToggle();
    	$('.bfaadharvrfylink-wrap').slideToggle();

        //for seconds timer for on boarding page
        var time = 0;
        var cirtime = 15;
        var initialOffset = '120';
        var i = 15
        $('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/cirtime)));

        var interval = setInterval(function() {
            $('h2').text(i);
            if (i == time) {
                clearInterval(interval);
                $('.timmer').remove();
                $('.second-show').removeClass('hidden');
                return;
            }
            $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/cirtime)));
            i--;
        }, 1500);
	});

	$('.relation-rad').on('click', function(){
        if ($(this).attr('id') == 'husband') {
        	$('.husband-input').removeClass('hidden');
            $('.father-input').addClass('hidden');
		}else if ($(this).attr('id') == 'father') {
            $('.husband-input').addClass('hidden');
            $('.father-input').removeClass('hidden');
		}
	});


    $(".crrs-add-wrap .checkbox .css-checkbox.sameadd").click(function () {
        var isChecked = this.checked;

        if (isChecked) {
            $(this).parents(".crrs-add-wrap").next('.crrs-add-wrap.prm-add').addClass('hidden');
        } else {
            $(this).parents(".crrs-add-wrap").next('.crrs-add-wrap.prm-add').removeClass('hidden');
        }
    });

    $('.ifsc-rad-wrap .radio-list .css-radio').on('click', function(){
		if($(this).attr('id') == 'IFSC') {
			$('.rememifsc-wrap select.disabled-select').attr('disabled', 'disaled');
			$('.rememifsc-wrap .ifcinput-disable input').removeAttr('disabled', 'disaled')
			$('.dntremebre').addClass('hidden');
            $('.remebre').removeClass('hidden');
		}else if($(this).attr('id') == 'IFSC1') {
            $('.rememifsc-wrap select.disabled-select').removeAttr('disabled', 'disaled');
            $('.rememifsc-wrap .ifcinput-disable input').attr('disabled', 'disaled')
            $('.dntremebre').removeClass('hidden');
            $('.remebre').addClass('hidden');
		}
	});


    $('.segment-action-wrap a').on('click', function(){
    	$(this).toggleClass('active');
        if($(this).hasClass('active')) {
        	if($(this).hasClass('sec-click')) {
                $(this).parents('.segment-action-wrap').next('.exchange-wrap').find('.hidden-exhnage.derv-exchange').slideDown('hidden');
			}else {
                $(this).parents('.segment-action-wrap').next('.exchange-wrap').find('.hidden-exhnage.derv-exchange').slideUp('hidden');
			}
		}
	});

    $('.exchange-click').on('click', function(){
    	$(this).children().children().toggleClass('down-arrow up-arrow');
    	$(this).next('.exchange-detail-block ').slideToggle();
	});

    $('.seg-next-click').on('click', function(){
		$('.preff-plan-wrap').slideDown();
		$('.segment-wrap').slideUp();
	});

    $('.pref-back-click').on('click', function(){
        $('.segment-wrap').slideDown();
        $('.preff-plan-wrap').slideUp();
    });


    $('.nom-radio').on('click', function(){
    	if($(this).attr('id') == "yes") {
            $('.nomoniees-wrap').removeClass('hidden');
        }else {
            $('.nomoniees-wrap').addClass('hidden');
		}
	});


    $('.table.shate-data-tbl td a').on('click', function(e){e.stopPropagation();});
    $('.watchlist-table table.table-striped tbody tr.toggle').on('click', function(event){event.preventDefault();});

});

$(document).click(function (event) {
	if (!$(event.target).closest('.value-selected, .selectArrow,  li.selectOption, .place-order-link').length) {
		if ($('ul.selectOptions').is(":visible")) {
			$('ul.selectOptions').hide();
		}
	}
})

//for div height calculation
$(window).resize(function(){
	divheight();
	eligheight();
	contheight();
	blockheight();
	// footernav();
	var winwidth = $(window).width();
	if(winwidth >= 767) {
		$('.toggle-radio,ul.toggle-list').show();
	} else {
		$('.toggle-radio,ul.toggle-list').hide();
	}
});
function divheight() {
	var maxHeight = -1;
	$('.sec-block').each(function() {
		maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	});
	$('.sec-block').each(function() {
		$(this).height(maxHeight);
	});
	var winsize = $(window).width();
	if(winsize <= 767) {
		$('.sec-block .heading-bx').css('margin-top', '10px');
	}else {
		$('.sec-block .heading-bx').css('margin-top', 0);
	}
}
function eligheight() {
	var maxHeight = -1;
	$('.eligibility-wrap .media-body').each(function() {
		maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	});
	$('.eligibility-wrap .media-body').each(function() {
		$(this).height(maxHeight);
	});
}
function contheight() {
	var maxHeight = -1;
	var maxHeights = -1;
	$('.grid-overlay-wrap .content-wrap').each(function() {
		maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	});
	$('.grid-overlay-wrap .content-wrap').each(function() {
		$(this).height(maxHeight);
	});
	$('.grid-overlay-wrap .content-wrap p').each(function() {
		maxHeights = maxHeights > $(this).height() ? maxHeights : $(this).height();
	});
	$('.grid-overlay-wrap .content-wrap p').each(function() {
		$(this).height(maxHeights);
	});
}

//for accordion icon
function toggleIcon(e) {
	$(e.target)
		.prev('.panel-heading')
		.find(".more-less")
		.toggleClass('glyphicon-plus glyphicon-minus');
	$(e.target).prev('.panel-heading').toggleClass('active')
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


// for Placehoder in IE
$(document).ready(function(){
	if (!Modernizr.input.placeholder){ 
	    $("input[type=text]").each( function() { 
	       $(this).val($(this).attr('placeholder')); 
	    })
	}




	//for toggle social share popup
	$('.share-load-detail a.icon.icon-shares').on('click', function () {
		/*$(this).parents('.share-load-detail').find('.share-pop').toggle();
		 $('.share-load-detail .share-pop:visible').not(this).hide();*/
		$(this).parents('.share-load-detail').find('.share-pop').toggle()
	});
	
	
	//advance search for equity envestment ideas page
	$('.advanc-research-click, .cancel-adv-menu').on('click', function () {
        $(this).parent().toggleClass('active');
        $(this).parents('.pull-right').next().children().toggle();
        $('.overlay-bg').toggleClass('search-overlay');
    });

    $('.cancel-adv-menu').on('click', function () {
        $('.adv-srch').removeClass('active');
        $(this).parents('.pull-right').next().children().toggle();
        $('.overlay-bg').removeClass('search-overlay');
    });
	
	 $('.reort-advanc-research-click').on('click', function () {
        $(this).parent().toggleClass('active');
        $(this).parents('.report-srch').next().children().toggle();
        $('.overlay-bg').toggleClass('search-overlay');
    });
	

	//action for mutual fund page

	//show div id folio is checked
	$('input[name=actyp]').click(function () {
		if (this.id == "folio", this.id == "onetime", this.id == "sip") {
			$(".clickfolio").removeClass('hidden');
		}else if (this.id == "folio") {
			$(".clickfolio").removeClass('hidden');
		}else if (this.id == "folio", this.id == "sip") {
			$(".clickfolio").removeClass('hidden');
			$(".stp-click").removeClass('hidden');
		}else {
			$(".clickfolio").addClass('hidden');
		}
	});

	//show div id demat and sip  is checked
	$('.radio-click').click(function (e) {
		if ((this.id === "demat") || (this.id === "sip")) {
			$(".stp-click").removeClass('hidden');
		} else {
			$(".stp-click").addClass('hidden');
		}

	});


    $('.radiocss-click').click(function (e) {
        if (this.id === "swp") {
            $(".stp-click").removeClass('hidden');
            $(".stpselect").addClass('hidden');
        } else if (this.id === "onetime1") {
            $(".stp-click").addClass('hidden');
            $(".stpselect").removeClass('hidden');
        }

    });

	//show div on selection of Reedeem oprtion
	$(".action-select").change(function () {
		if ($(this).val()== "purchase") {
			$('.hide-onclick, .purchentramt').removeClass('hidden');
			$('.select-stp, .clickfolio, .stpselect').addClass('hidden');
			$('.select-switch').addClass('hidden');
            $('.minamt').show();
            $('.avaiunit').hide();
            $('.swp-radio, .onetime-radio').addClass('hidden');
            $('.sip-radio, .sip-radio1').removeClass('hidden');
            $(".stp-click").addClass('hidden');
            $('.order-type-click').removeClass('hidden');
            $('.transferto').addClass('hidden');
            $('.bid-wrap').removeClass('hidden');

		}else if ($(this).val()== "redeem") {
			$('.hide-onclick,.clickfolio,.stp-click, .purchentramt').addClass('hidden');
			$('.swp-radio, .stpselect, .onetime-radio ').removeClass('hidden');
			$('.select-stp, .sip-radio, .sip-radio1').addClass('hidden');
			$('.select-switch').addClass('hidden');
			$('.minamt').hide();
            $('.avaiunit').show();
            $('.order-type-click').removeClass('hidden');
            $('.transferto').addClass('hidden');
            $('.bid-wrap').removeClass('hidden');


		}else  if ($(this).val()== "sip") {
			$(' .hide-onclick, .clickfolio, .purchentramt, .stpselect').addClass('hidden');
			$('.select-stp').removeClass('hidden');
			$('.select-switch').addClass('hidden');
			$('.stp-click').addClass('hidden');
			$('.order-type-click').addClass('hidden');
            $('.transferto').removeClass('hidden');
            $('.bid-wrap').addClass('hidden');

		}else  if ($(this).val()== "switch") {
			$('.hide-onclick, .clickfolio, .purchentramt, .stpselect').addClass('hidden');
			$('.select-switch').removeClass('hidden');
			$('.select-stp').addClass('hidden');
            $('.order-type-click').addClass('hidden');
		} else {
			$('.select-switch').addClass('hidden');
		}
	});


	//onboarding page tabs active on custom button click
    $('.tabs-btn-click').on('click', function(e) {
        var href = $( this ).attr( 'href' );
        e.preventDefault();
        $( '[data-toggle="tab"][href="' + href + '"]' ).tab('show');
        if($('.tabs-right > li').hasClass('active')) {
            $('.tabs-right > li.active a').find('.circle').children('.active-font').removeClass('hidden');
            $('.tabs-right > li.active a').find('.circle').children('.unselicon').addClass('hidden');
        }
        $('body, html').animate({ scrollTop: $('.tab-content').offset().top - 200 }, 800);
    } );


});

//for header sticky on scroll 
$(window).on('scroll', function(){
	var winheight = $(window).scrollTop();
	if(winheight > 80) {
		$('body').addClass('sticky');
	} else {
		$('body').removeClass('sticky');
	}
	blockheight();
});

$(window).on('scroll', function(){
    var winheight = $(window).scrollTop();
    if(winheight > 80) {
        $('body.onboarding-body').removeClass('sticky');
    } else {
        $('body.onboarding-body').removeClass('sticky');
    }
    blockheight();
});


//for smooth scroll to targeted url
$(document).ready(function() {
	//for preventing bootstap popup modal closing outside click
    $.fn.modal.Constructor.DEFAULTS.backdrop = 'static';
	
    $('html, body').hide();
    if (window.location.hash) {
        setTimeout(function() {
            $('html, body').scrollTop(0).show();
            $('html, body').animate({
                scrollTop: $(window.location.hash).offset().top - 100
                }, 1200)
        }, 0);
    }
    else {
        $('html, body').show();
    }

	$('.textfields .info-icon a,.textfields .form-control.info-input').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		$('.textfields .hint:visible').not(this).hide();
		$(this).parents('.textfields').find('.hint').show();

	});

	$('.textfields .info-icon a').on('click', function (e) {
		e.preventDefault();
		$('.opacitycss').removeClass('opacitycss');
		$(this).parent().addClass('opacitycss');
	});


	//for toggle star button
	$('.watch-action a.fav-link').on('click', function () {
		$(this).find('span').toggleClass('icon-full-rated-gold  icon-full-rated-grey');
	});


	//Watchlist search action
	$(".search-ip-btn").click(function () {
		$(this).parents('.search-blk').children('.search-table-th').toggleClass('expanded');
		$('.expanded').focus();
		$(this).parents('.search-blk').children('.search-ip-btn').find('span').toggleClass('icon-ic_search icon-Close');
		/*e.preventDefault();*/
	});

	/*$(".search-ip-btn .icon-ic_search").click(function () {
	 var search_table_th = $('.search-table-th').val();
	 console.log(search_table_th);
	 });*/


	//for div toggle in research page
	$('.research-detial-block .toggle-link').on('click', function () {
		$(this).parents().children('.research-hidden-block').slideToggle("slow");
		$('.research-hidden-block .research-hidden-block:visible').not(this).hide();
		$(this).parents('.research-hidden-block').find('.research-hidden-block').slideToggle();
	});
	$('.close-icon .close').on('click', function () {
		$(this).parents('.research-hidden-block').slideToggle("slow");
	});

	//for switching tab on anccher click inside tab container
	$('.report-tab .tab-pane a').click(function (e) {
		// e.preventDefault();
		$('a[href="' + $(this).attr('href') + '"]').tab('show');
	})

	//for maintaining height of h3
	h3height();

	//for truncating charachert
	$(".main-height-wrap .height-block p.desc").each(function () {
		if ($(this).text().length > 210)
			$(this).text($(this).text().substring(0, 210) + '...');
	});

	$(".pick-grid-wrap .pick-block .display-cell p.desc").each(function () {
		if ($(this).text().length > 100)
			$(this).text($(this).text().substring(0, 100) + '...');
	});

	$(".watchlist-table .shate-data-tbl tbody tr td a span.symbol-text, .webTab-table .symbol-text").each(function () {
		if ($(this).text().length > 22)
			$(this).text($(this).text().substring(0, 22) + '...');
	});
	
	$(".watchlist-table .currtport-table tbody tr td a span.symbol-texts").each(function () {
        if ($(this).text().length > 40)
            $(this).text($(this).text().substring(0, 40) + '...---');
    });
	
	// $("svg.svg-map .main-grp .inner-grp .cont-sub").each(function () {
	// 	if ($(this).text().length > 6)
	// 		$(this).text($(this).text().substring(0, 6) + '...');
	// });

	//editting input box on click in profile page
	$('.input-val a.edit-icons').on('click', function () {
		$(this).parent().children().removeAttr('disabled', 'disabled');
		$(this).parent().children().addClass('withborder');
		$(this).parent().children('a.edit-icons').hide();
		$(this).parent().children('a.save-icon').show();
		$(this).parent().children('a.cancel-icon').show();
	});
	$('.input-val a.save-icon, .input-val a.cancel-icon').on('click', function () {
		$(this).parent().children().removeAttr('disabled', 'disabled');
		$(this).parent().children().removeClass('withborder');
		$(this).parent().children('a.edit-icons').show();
		$(this).parent().children('a.save-icon').hide();
		$(this).parent().children('a.cancel-icon').hide();
	});




	
	// positions popup for build wealth
	popposition();
	/*$('.add-filter-wrap .display-table .display-cell').on('click', function(){
	  $(this).addClass('active').siblings().removeClass('active');
			$('.overlay-bg').addClass('table-overlay');
			var container = $('.container').width();
			var halfval = container / 1.8;
			var leftval = $(this).offset().left;
			if (leftval > halfval) {
				$(".filter-popup").css({
					'position': 'absolute',
					'right': ($(window).width() - ($(this).offset().left + $(this).outerWidth())),
					'top': $(this).offset().top + $(this).outerHeight(),
					'left': 'auto',
				}).show();
				$('.filter-popup').addClass('rightclick');
			} else {
				$(".filter-popup").css({
					'position': 'absolute',
					'left': $(this).offset().left,
					'top': $(this).offset().top + $(this).height(),
					'right': 'auto',
				}).show();
				$('.filter-popup').removeClass('rightclick');
			}
	 });*/

    $('.filter-popup .dismiss-icon').on('click', function () {
        $(".filter-popup").hide();
        $('.overlay-bg').removeClass('table-overlay');
        $('.add-filter-wrap .display-table .display-cell').removeClass('active');
    });

    $(".add-filter-wrap .display-table .display-cell").click(function () {
        $('html, body').animate({
            scrollTop: $(".filter-popup").offset().top - 150
        }, 500);
    });

    $('.btn-crateria a').on('click', function(){
        var numItems = $('.add-filter-wrap .display-table .display-cell').length;
        console.log(numItems);
        if(numItems >= 8) {
        	$('.add-filter-wrap .display-table .display-cell.add-criteria').hide();
		}
        $(".add-filter-wrap .display-cell:last").before(' <div class="display-cell"><div class="inner"><div class="filter-value"><a href="javascript:void(0);" class="link-action"><div class="criteria-name">Net Profit (Rs 2222222)</div><div class="criteria-range"><span class="gray-text">YoY</span>-5219.9<span class="gray-text">to</span>0</div></a></div></div></div>');
        $(".filter-popup").hide();
        $('.overlay-bg').removeClass('table-overlay');
		
		popposition();
	});
});

$(window).resize(function () {
	//for maintaining height of h3
	h3height();
});
$(window).on('scroll', function () {
	//for maintaining height of h3
	h3height();
});

//for info popup
function hint(elem) {
	elem.parentNode.firstElementChild.style.display = 'block';
	elem.parentNode.lastElementChild.style.opacity = '1';
}
function unhint(elem) {
	elem.parentNode.firstElementChild.style.display = 'none';
	elem.parentNode.lastElementChild.style.opacity = '0.6';
}


function blockheight() {
	var maxHeight = 0;
	$(".height-wrap .height-block").each(function () {
		if ($(this).height() > maxHeight) {
			maxHeight = $(this).height();
		}
	});
	$(".height-wrap .height-block").height(maxHeight);
}


//for maintaining height of h3
function h3height() {
	var maxheights = 0;
	$('.religare-service-ar.jurny-wrap .religare-sev-tx h3').each(function () {
		if ($(this).height() > maxheights) {
			maxheights = $(this).height();
		}
	});
	$('.religare-service-ar.jurny-wrap .religare-sev-tx h3').height(maxheights);
}

function startListHeight($tag) {

	function setHeight(s) {
		var max = 0;
		s.each(function () {
			var h = $(this).height();
			max = Math.max(max, h);
		}).height('').height(max);
	}

	$(window).on('ready load resize', setHeight($tag));
}

jQuery(function ($) {
	$('.pro-sip .religare-service-ar').each(function () {

		startListHeight($('h3', this));
		startListHeight($('p', this));
	});
});


$(window).on('load', function () {
	$('.status').fadeOut();
	$('.preloader').delay(350).fadeOut('slow');
	$('body').delay(100).css({'overflow': 'visible'});

	//FOR INSIDE PAGE DATA PRE LOADER
	$('.pre-loader').button('loading');
	setTimeout(function () {
		$('.pre-loader').button('reset')
	}, 5000)


    $(".news-blocks .block .new-content-wrap").each(function () {
        if ($(this).text().length > 600)
            $(this).text($(this).text().substring(0, 600) + '...');
    });
})

$(document).ready(function () {
	$('.btn-loader').on('click', function () {
		var $this = $(this);
		$this.button('loading');
		setTimeout(function () {
			$this.button('reset');
		}, 18000);
	});

	
	//for custome pagination on report page
    showpage(1);
    $('.padination-wraps ol li a').on('click', function(){
    	$(this).parent().addClass('current').siblings().removeClass('current');
    	showpage(parseInt($(this).text()));
    	return false;
	});
	
	//toggle popup onclick for manage funds page
	$('.filterclick').on('click', function(){
        $(".filter-popup").css({
            'position': 'absolute',
            'right': ($(window).width() - ($(this).offset().left + $(this).outerWidth())),
            'top': $(this).offset().top + $(this).outerHeight(),
            'left': 'auto',
        }).show();
        $('.overlay-bg').addClass('table-overlay');
	});
    $(window).on('scroll', function(){
        $('.filterclick').each(function() {
            if ($(window).scrollTop() >= 100) {
                $(".filter-popup").css({
                    'top': $('.filterclick').offset().top + $('.filterclick').outerHeight(),
                });
            } else {
                $(".filter-popup").css({
                    'top': $('.filterclick').offset().top + $('.filterclick').outerHeight(),
                });
            }
        });
    });

    $('.plc-click').on('click', function(){
    	$('.terminal-right-info').addClass('terminal-right-info-pos');
        var container = $('.terminal-right-info').width();
		$("#watchlist-order-modal .modal-dialog").css({
			'position': 'absolute',
			'right': container + 30,
			'top': '70px',
			'left': 'auto',
		}).show();
		$('.modal-backdrop ').hide();
	});
    $('#watchlist-order-modal').on('hidden.bs.modal', function (e) {
        $('.terminal-right-info').removeClass('terminal-right-info-pos');
    });




});


function popposition() {
    $('.add-filter-wrap .display-table .display-cell').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.overlay-bg').addClass('table-overlay');
        var container = $('.container').width();
        var halfval = container / 2;
        console.log(halfval);
        var leftval = $(this).offset().left;
        if (leftval > halfval) {
            $(".filter-popup").css({
                'position': 'absolute',
                'right': ($(window).width() - ($(this).offset().left + $(this).outerWidth())),
                'top': $(this).offset().top + $(this).outerHeight(),
                'left': 'auto',
            }).show();
            $('.filter-popup').addClass('rightclick');
        } else {
            $(".filter-popup").css({
                'position': 'absolute',
                'left': $(this).offset().left,
                'top': $(this).offset().top + $(this).outerHeight(),
                'right': 'auto',
            }).show();
            $('.filter-popup').removeClass('rightclick');
        }
    });

    $(window).on('scroll', function(){
        $('.add-filter-wrap .display-table .display-cell').each(function() {
            var container = $('.container').width();
            var halfval = container / 1.7;
            var leftval = $('.add-filter-wrap .display-table .display-cell').offset().left;
            if (leftval > halfval) {
                $(".filter-popup").css({
                    'top': $('.add-filter-wrap .display-table .display-cell').offset().top + $('.add-filter-wrap .display-table .display-cell').outerHeight(),
                });
            } else {
                $(".filter-popup").css({
                    'top': $('.add-filter-wrap .display-table .display-cell').offset().top + $('.add-filter-wrap .display-table .display-cell').outerHeight(),
                });
            }
        });
    });
}






var pagesize = 6;
showpage = function(pages) {
    $('.report-tab .tab-pane.active .content-block').hide();
    $('.report-tab .tab-pane.active  .content-block').each(function(n){
    	if(n >= pagesize * (pages - 1) && n < pagesize * pages) {
    		$(this).show();
		}
	});
}


$(function() {
    return $(".modal").on("show.bs.modal", function() {
        var curModal;
        curModal = this;
        $(".modal").each(function() {
            if (this !== curModal) {
                $(this).modal("hide");
            }
        });
    });
});




//Range Slider for onboarding Page

$(document).ready(function(){
    $('input[type="range"]').rangeslider({
        polyfill: false,

        // Default CSS classes
        rangeClass: 'rangeslider',
        disabledClass: 'rangeslider--disabled',
        horizontalClass: 'rangeslider--horizontal',
        fillClass: 'rangeslider__fill',
        handleClass: 'rangeslider__handle',


        onInit: function() {
            $rangeEl = this.$range;
            var $handle = $rangeEl.find('.rangeslider__handle');
            var handleValue = '<div class="rangeslider__handle__value">' + this.value + '</div>';
            $handle.append(handleValue);


            var rangeLabels = this.$element.attr('labels');
            rangeLabels = rangeLabels.split(', ');


            $rangeEl.append('<div class="rangeslider__labels"></div>');
            $(rangeLabels).each(function(index, value) {
                $rangeEl.find('.rangeslider__labels').append('<span class="rangeslider__labels__label">' + value + '</span>');
            })
        },


        onSlide: function(position, value) {
            var $handle = this.$range.find('.rangeslider__handle__value');
            $handle.text(this.value);
        },


        onSlideEnd: function(position, value) {}
    });

    var x = $("label.css-label").position();
    $('.css-radio').css('left', x.left);

    var checkpos = $('.checkbox').position();
    $('.css-checkbox').css({
		'left': x.left,
		'margin-left': 0,
    });

});

$(document).ready(function(){
    tablepopup();

});

$(window).on('scroll', function(){
    var iScrollPos = 0;
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
        $(".table-popups-container").removeClass('table-popups-scroll');
    } else {
        $(".table-popups-container").addClass('table-popups-scroll');
    }
    iScrollPos = iCurScrollPos;


});


//
//
// // variable for calculating tbody height
// var tbodys = $('table.props tbody').height();
// console.log(tbodys);
//
// $(window).scroll(function(){
//     if ($(window).scrollTop() >= 400) {
//         $('.fixed-table-wrap thead').addClass('fixeds');
//
//         // form remove class fixeds once the table is end
//         if($(window).scrollTop() > (tbodys + tbodys + 100)) {
//             $('.fixed-table-wrap thead').removeClass('fixeds');
//         }
//
//         //for calculating each thead width on the basis of tbody width
//          var arrOfTable=[],
//          i=0;
//         $('table.props tbody').each(function() {
//                  var mWid = $(this).width();
//                  arrOfTable.push(mWid);
// 		});
//
//         $('table.props thead').each(function() {
// 			$(this).css("width",arrOfTable[i]+"px");
// 			i++;
//
// 		});
//
//     }else {
//         $('.fixed-table-wrap thead').removeClass('fixeds');
//
//     }
// });



function tablepopup() {
    // script to popup below table tr on click for market pages
    if($(window).width() > 767) {

        $('.table-popups tbody tr').click(function (e) {
            $(this).addClass('active').siblings().removeClass('active');
            $('.overlay-bg').addClass('table-overlay');
            var container = $('.container').width();
            var topheght = $(this).offset().top + $(this).height();
            console.log(topheght);
            var halfval = container / 2;
            var leftval = $(this).offset().left;
            console.log(halfval);
            if (leftval > halfval) {
                $(".table-popups-container").css({
                    'position': 'absolute',
                    'right': ($(window).width() - ($(this).offset().left + $(this).outerWidth())),
                    'top': $(this).offset().top + $(this).height(),
                    'left': 'auto',
                }).show();
                $('.table-popups-container').addClass('rightclick');
                // $('.dismiss-icon').css({
                // 	'right' : 'auto',
                // 	'left' : '6px',
                // });
            } else {
                $(".table-popups-container").css({
                    'position': 'absolute',
                    'left': $(this).offset().left,
                    'top': $(this).offset().top + $(this).height(),
                    'right': 'auto',
                }).show();
                $('.table-popups-container').removeClass('rightclick');
            }



        });



        var trheight = $('.watchlist-table .table-popups tbody tr td').outerHeight();
        //for position book
        $('.watchlist-table .table-popups tbody tr').click(function (e) {
            $(this).addClass('active').siblings().removeClass('active');
            $('.overlay-bg').addClass('table-overlay');
            var headheight = $('header').height();

            console.log(trheight);
            console.log(headheight);
            if(headheight >= 60) {
                $(".table-popups-position").css({
                    'position': 'absolute',
                    'left': 0,
                    'top': $(this).position().top + trheight,
                    'right': 'auto',
                }).show();
            }else {
                $(".table-popups-position").css({
                    'position': 'absolute',
                    'left': 0,
                    'top': $(this).position().top + trheight,
                    'right': 'auto',
                }).show();
            }



        });



        $('.watchlist-table .table-popups1 tbody tr td a.popups-toggles').click(function (e) {
            $(this).addClass('active').siblings().removeClass('active');
            $('.overlay-bg').addClass('table-overlay');
            var headheight = $('header').height();

            console.log(trheight);
            console.log(headheight);
            if(headheight >= 60) {
                $(".table-popups-position").css({
                    'position': 'absolute',
                    'left': 0,
                    'top': $(this).position().top + trheight,
                    'right': 'auto',
                }).show();
            }else {
                $(".table-popups-position").css({
                    'position': 'absolute',
                    'left': 0,
                    'top': $(this).position().top + trheight,
                    'right': 'auto',
                }).show();
            }



        });








        $('.dismiss-icon').on('click', function () {
            $(".table-popups-container").hide();
            $('.overlay-bg').removeClass('table-overlay');
            $('.table-popups tr').removeClass('active');
        });

        $(".table-popups tbody tr").click(function () {
            $('html, body').animate({
                scrollTop: $(".table-popups-container").offset().top - 250
            }, 500);
        });




    }
}