$(document).ready(function(){

	let btn = $('.add-button');
	let inp = $('.add-field');
	let tasks =  $('.tasks');

//adding a task
	btn.on('click',function(){
		let elem = `<li class="task">
		<div class="task-checked col-1">
			<input type="checkbox">
		</div>
		<div class="task-text col-2">${inp.val()}</div>
		<div class="task-remove col-3"></div>
	</li>`;
	tasks.append(elem);
	inp.val('');
	});


//remove task

tasks.on('click','.task-remove',function(){
	$(this).parent().remove();
});

//check

tasks.on('change','.task-checked input',function(){
	$(this).parent().next().toggleClass('checked');
});

//sortable
$('#tasks-list').sortable();
});