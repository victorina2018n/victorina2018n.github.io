var answer = ['none', 'none', 'a', 'c', 'b', 'b', 'a', 'c', 'none', 'b', 'b', 'a', 'b', 'c', 'b', 'c', 'c', 'none', 'b', 'a', 'a', 'b', 'c'];
var number = 0;
var correct = 0;			
var current = 1;
function next(id) {
	if(id == current) {
		$('.next').click();
    }
}
$(function(){

	$('.variant a').click(function(){
		var id_quest = $(this).parent().attr('data-quest');
		if(!$(this).parent().hasClass('checked')) {
			$(this).addClass('false');
			$(this).parent().addClass('checked');
			$('#quest-' + id_quest + ' a[data-id="' + answer[id_quest] + '"]').removeClass('false');
			$('#quest-' + id_quest + ' a[data-id="' + answer[id_quest] + '"]').addClass('animated flash true');
			if($(this).attr('data-id') == answer[id_quest]) {
				correct++;
			}
			setTimeout(function() { next(id_quest) }, 3000);
			$('.pages a.next').fadeIn(300);
			
		}
		return false;
	});
	
	$('.pages a.next, .pages a.start').click(function(){
		$('.pages a.next, .pages a.start, #quest-0').fadeOut(0);
		if (number == 0 || number == 7 || number == 16) {
			$('.pages a.next').fadeIn(330);
		}
		current = number + 1;
		$('#quest-' + number).fadeOut(0);
		$('#quest-' + current).fadeIn(330);
		number++;
		$('#correct').html(correct);
		if (number == 23) {
			$('.pages a:last-child').fadeOut(0);
			$('.pages a:first-child').fadeIn(330);
		}
		return false;
	});
	
});
