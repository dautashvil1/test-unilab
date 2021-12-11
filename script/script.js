window.addEventListener('mouseup',function(event){
    var pol = document.getElementById('pol');
    if(event.target != pol && event.target.parentNode != pol){
        pol.style.display = 'none';
    }
});  