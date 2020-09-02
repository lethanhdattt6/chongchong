let quay = 2;
let t = 100;
let chongchong
function start() {
    chongchong = 1;
    myFuction();
}
function stop() {
    chongchong = 0;
}
function myFuction() {
    var img = document.getElementById("image");
    img.style.transform = "rotate(" + quay + "deg)";
    if (chongchong == 1) {
        setTimeout("myFuction()", 1)
    }
    quay = quay + t;
}

