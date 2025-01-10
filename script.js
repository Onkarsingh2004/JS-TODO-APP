$(document).ready(function(){
    removebtn=`<button class="btn btn-sm btn-danger remove-task-btn me-3"><i class="bi bi-trash-fill"></i></button>`;
    completebtn=`<button class="btn btn-sm btn-success complete-task-btn"><i class="bi bi-check-square-fill"></i></button>`;
    btngroup='<div class="col my-2 bg-white py-2 text-dark">'+removebtn+completebtn+'</div>'
    $('#add-task-btn').click(function(){
        var taskInput= $('#task-input')
        var task = taskInput.val()
        if(task != ''){
            var taskHtml='<div class="row"><div class="col-9 my-2 bg-white py-2 text-dark">'+task + '</div>' + btngroup + '</div>'
            $('#task-list').append(taskHtml)
            taskInput.val('')
            }
    });

    $(document).on('click','.remove-task-btn',function(){
        $(this).parent().parent().remove();
    });

    $(document).on('click','.complete-task-btn',function(){
        $(this).parent().parent().toggleClass('text-decoration-line-through text-danger')
    });

})








