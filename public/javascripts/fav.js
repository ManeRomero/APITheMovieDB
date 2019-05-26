window.addEventListener('load', onLoad)

function onLoad() {
    alert('FUNCIONA')
    const BTN_FAV = document.querySelector('.fa-heart')
    BTN_FAV.addEventListener('click', favCall)

    function favCall() {
        let id = BTN_FAV.id

        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('like', id)

        var myInit = {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        var myRequest = new Request(`/pelicula/${id}/like`, myInit);
        console.log(myRequest)
        console.log(myRequest.body)
    }
}