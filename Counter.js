document.addEventListener("DOMContentLoaded", function (event) {
    //Dom button click
    Start.addEventListener("click", function () {
        function randomGame() {
            //Time interveral 
            //Timer has to be a actual variable.
            let num;
            let time = 0;
            let timer = setInterval(function () {
                //Random Number Module
                num = Math.random;
                time++
                if (num < .75) {
                    clearInterval(timer);
                    console.log("It took" + time + "try/tries");
                }
            }, 1000)
        }
        if (Start) {
            console.log("This Content works");
        } else {
            console.log("This shit is fucked");
        }
    });
});