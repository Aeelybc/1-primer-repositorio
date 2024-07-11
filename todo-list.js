(function)({
    //todo lo que hay aqui
    let form = document.querySelector( 'form' ),
        list = document.querySelector( '#list' ),
        item = document.querySelector ( 'item' )
   
        form.addEventlistener( 'subit', function (e)){
            list.innerHTML+= '<li' +item.value + '</li>'
    
        }, false)

        Function StorageEvent() {
            localStorage.myitems = list. innerHTML

        }
        

        
})()