function checkPassword() {
    password = document.querySelector("#password").value
    pattern1 = /[a-z]/
    pattern2 = /[A-Z]/
    pattern3 = /[0-9]/
    pattern4 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
    result = document.querySelector("#forca")
    bar = document.querySelector("#security-indicator-bar")
    checkbox1 = document.querySelector("#checkbox1")
    checkbox2 = document.querySelector("#checkbox2")
    checkbox3 = document.querySelector("#checkbox3")
    checkbox4 = document.querySelector("#checkbox4")
    label1 = document.querySelector("#label1")
    label2 = document.querySelector("#label2")
    label3 = document.querySelector("#label3")
    label4 = document.querySelector("#label4")

    if (pattern1.test(password) == true || password.length <= 8) {
        document.querySelector("#forca").style.color ="#ff0000"
        result.value = "weak"
        console.log("weak")
        //Labels turning red
        label1.classList.add("activated")
        label1.classList.remove("deactivated")
        label2.classList.remove("activated")
        label2.classList.add("deactivated")
        label3.classList.remove("activated")
        label3.classList.add("deactivated")
        label4.classList.remove("activated")
        label4.classList.add("deactivated")
        
        checkbox1.setAttribute("checked", "true")
        //Checkboxes deactivating
        if (checkbox2.hasAttribute("checked")) {
            checkbox2.removeAttribute("checked")
        }
        if (checkbox3.hasAttribute("checked")) {
            checkbox3.removeAttribute("checked")
        }
        if (checkbox4.hasAttribute("checked")) {
            checkbox4.removeAttribute("checked")
        }

        bar.classList.remove("strong")
        bar.classList.remove("safe")
        bar.classList.add("critical")
    } 
    if (pattern2.test(password) == true && password.length >= 9) {
        document.querySelector("#forca").style.color="#00ff00"
        result.value = "safe"
        console.log("safe")
        label2.classList.add("activated")
        label2.classList.remove("deactivated")
        checkbox2.setAttribute("checked", "true")

        bar.classList.remove("critical")
        bar.classList.remove("strong")
        bar.classList.add("safe")
    }
    if (pattern3.test(password) == true) {
        document.querySelector("#forca").style.color = "#00ff00"
        result.value = "safe"
        console.log("safe")

        checkbox4.setAttribute("checked", "true")
        label4.classList.add("activated")
        label4.classList.remove("deactivated")

        bar.classList.remove("critical")
        bar.classList.remove("strong")
        bar.classList.add("safe")
    }
    if (pattern4.test(password) == true) {
        document.querySelector("#forca").style.color ="#038f00"
        result.value = "strong"
        console.log("strong")
        label3.classList.add("activated")
        label3.classList.remove("deactivated")
        checkbox3.setAttribute("checked", "true")
        bar.classList.add("strong")
        bar.classList.remove("safe")
        bar.classList.remove("critical")
    }
}