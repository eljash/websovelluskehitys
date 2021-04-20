(function (window) {
    function id(id){
        console.log('testi');
        return document.getElementById(id);
    }
    window.app = window.app || {};
    window.app.$ = id;
}(window));