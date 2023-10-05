function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
    document.getElementById("sectionindex1").style.opacity = "15%";
    document.getElementById("sidemenuknop").style.opacity = "0%";
    document.getElementById("sidemenuknop").style.transform = "rotate(-90deg)"
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("sectionindex1").style.opacity = "100%";
    document.getElementById("sidemenuknop").style.opacity = "100%";
    document.getElementById("sidemenuknop").style.transform = "rotate(-180deg)"

}