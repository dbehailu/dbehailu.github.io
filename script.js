var fancyText = document.getElementById ('fancy');
var intervalTime = 150;
var initialPause = 1000;
var callbackPause = 500;

function deleteContent(callback) {

    var intervalId = setInterval(function() {
        if (fancyText.innerHTML.length == 0) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = fancyText.innerHTML.substring(0, fancyText.innerHTML.length - 1);
    }, intervalTime);

}
