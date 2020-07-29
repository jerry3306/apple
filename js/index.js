$('.show-more-small-btn').click(function(){
	 if(!$(this).hasClass('show-more-small-btn-check')){
		 $(this).addClass('show-more-small-btn-check');
		 $(this).find('.show-more-small-btn-right').css({transform:'rotate(45deg)'});
		 let li_count = $(this).next().find('.more-small-ul').find('li').length;
		 let li_height = 25;
		 let target_height = li_count*li_height;
		 $(this).next().css({'height':target_height+'px','margin-bottom':'12px'});
	 }else{
		 $(this).removeClass('show-more-small-btn-check');
		 $(this).find('.show-more-small-btn-right').css({transform:'rotate(0deg)'});
		 $(this).next().css({'height':0+'vh','margin-bottom':'0px'});
	 }
	 
 });