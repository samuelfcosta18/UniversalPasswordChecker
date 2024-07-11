function checkPassword() {
    let password = document.querySelector("#password").value
    let pattern1 = /[a-z]/
    let pattern2 = /[A-Z]/
    let pattern3 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
    let pattern4 = /[0-9]/
    let result = document.querySelector("#forca")
    let bar = document.querySelector("#security-indicator-bar")
    let checkbox1 = document.querySelector("#checkbox1")
    let checkbox2 = document.querySelector("#checkbox2")
    let checkbox3 = document.querySelector("#checkbox3")
    let checkbox4 = document.querySelector("#checkbox4")
    let label1 = document.querySelector("#label1")
    let label2 = document.querySelector("#label2")
    let label3 = document.querySelector("#label3")
    let label4 = document.querySelector("#label4")

    //Verifications to turn the labels red and remove the classification from the result
    if (checkbox1.hasAttribute("checked")) {
        checkbox1.removeAttribute("checked")
        label1.classList.remove("activated")
        label1.classList.add("deactivated")
        result.style.border = "1px solid red"
        result.value = "no password inserted"
        bar.classList.remove("critical")
        bar.classList.remove("good")
        bar.classList.remove("safe")
        bar.classList.remove("strong")
    }
    if (checkbox2.hasAttribute("checked")) {
        checkbox2.removeAttribute("checked")
        label2.classList.remove("activated")
        label2.classList.add("deactivated")
        result.style.border = "1px solid red"
        result.value = "no password inserted"
        bar.classList.remove("critical")
        bar.classList.remove("good")
        bar.classList.remove("safe")
        bar.classList.remove("strong")
    }
    if (checkbox3.hasAttribute("checked")) {
        checkbox3.removeAttribute("checked")
        label3.classList.remove("activated")
        label3.classList.add("deactivated")
        result.value = "no password inserted"
        result.style.border = "1px solid red"
        bar.classList.remove("critical")
        bar.classList.remove("good")
        bar.classList.remove("safe")
        bar.classList.remove("strong")
    }
    if (checkbox4.hasAttribute("checked")) {
        checkbox4.removeAttribute("checked")
        label4.classList.remove("activated")
        label4.classList.add("deactivated")
        result.value = "no password inserted"
        result.style.border = "1px solid red"
        bar.classList.remove("critical")
        bar.classList.remove("good")
        bar.classList.remove("safe")
        bar.classList.remove("strong")
    }
    //Verification to turn the labels green
    if (pattern1.test(password) === true) {
        label1.classList.add("activated")
        label1.classList.remove("deactivated")
        checkbox1.setAttribute("checked", "true")
        bar.classList.add("critical")
        result.value = "weak"
        result.style.border = "2px solid #f00"
    }

    if (pattern2.test(password) === true) {
        label2.classList.add("activated")
        label2.classList.remove("deactivated")
        checkbox2.setAttribute("checked", "true")
        bar.classList.add("critical")
        result.value = "weak"
        result.style.border = "2px solid #f00"
    }
    if (pattern3.test(password) === true) {
        label3.classList.add("activated")
        label3.classList.remove("deactivated")
        checkbox3.setAttribute("checked", "true")
        bar.classList.add("critical")
        result.value = "weak"
        result.style.border = "2px solid #f00"
    }
    if (pattern4.test(password) === true) {
        label4.classList.add("activated")
        label4.classList.remove("deactivated")
        checkbox4.setAttribute("checked", "true")
        bar.classList.add("critical")
        result.value = "weak"
        result.style.border = "2px solid #f00"
    }
    if (pattern1.test(password) === true  && pattern2.test(password) === true && password.length >=8)  {
        bar.classList.add("good")
        result.value = "good"
        result.style.border = "2px solid #0f0"
    }

    if (pattern1.test(password) === true  && pattern2.test(password) === true && pattern3.test(password) === true && password.length >=10) {
        bar.classList.add("safe")
        result.value = "safe"
        result.style.border = "2px solid #29c429"
    }
    if (pattern1.test(password) === true  && pattern2.test(password) === true && pattern3.test(password) === true && pattern4.test(password) === true && password.length >=12) {
        bar.classList.add("strong")
        result.value = "strong"
        result.style.border = "2px solid #038f00"
    }
}