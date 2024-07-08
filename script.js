function checkPassword() {
    password = document.querySelector("#password").value
    pattern1 = /[a-z]/
    pattern2 = /[A-z0-9]/
    pattern3 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
    result = document.querySelector("#forca")
    bar = document.querySelector("#security-indicator-bar")

    if (pattern1.test(password) == true || password.length <= 8) {
        document.querySelector("#forca").style.color ="#ff0000"
        result.value = "weak"
        console.log("weak")
        bar.classList.remove("strong")
        bar.classList.remove("safe")
        bar.classList.add("critical")
    } 
    if (pattern2.test(password) == true && password.length >= 9) {
        document.querySelector("#forca").style.color="#00ff00"
        result.value = "safe"
        console.log("safe")
        bar.classList.remove("critical")
        bar.classList.remove("strong")
        bar.classList.add("safe")
    }
    if (pattern3.test(password) == true && password.length >= 12) {
        document.querySelector("#forca").style.color ="#038f00"
        result.value = "strong"
        console.log("strong")
        bar.classList.add("strong")
        bar.classList.remove("safe")
        bar.classList.remove("critical")
    }

}