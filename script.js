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
    let language = document.querySelector("#language")

    //Verifications to turn the labels red and remove the classification from the result
    if (checkbox1.hasAttribute("checked")) {
        if (language.options[language.selectedIndex].value === "portuguese") {
            checkbox1.removeAttribute("checked")
            label1.classList.remove("activated")
            label1.classList.add("deactivated")
            result.style.border = "1px solid red"
            result.value = "Nenhuma senha inserida"
            bar.classList.remove("critical")
            bar.classList.remove("good")
            bar.classList.remove("safe")
            bar.classList.remove("strong")
        } else {
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

    }
    if (checkbox2.hasAttribute("checked")) {
        if (language.options[language.selectedIndex].value === "portuguese") {
            checkbox2.removeAttribute("checked")
            label2.classList.remove("activated")
            label2.classList.add("deactivated")
            result.style.border = "1px solid red"
            result.value = "Nenhuma senha inserida"
            bar.classList.remove("critical")
            bar.classList.remove("good")
            bar.classList.remove("safe")
            bar.classList.remove("strong")
        } else {
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

    }
    if (checkbox3.hasAttribute("checked")) {
        if (language.options[language.selectedIndex].value === "portuguese") {
            checkbox3.removeAttribute("checked")
            label3.classList.remove("activated")
            label3.classList.add("deactivated")
            result.value = "Nenhuma senha inserida"
            result.style.border = "1px solid red"
            bar.classList.remove("critical")
            bar.classList.remove("good")
            bar.classList.remove("safe")
            bar.classList.remove("strong")
        } else {
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

    }
    if (checkbox4.hasAttribute("checked")) {
        if (language.options[language.selectedIndex].value === "portuguese") {
            checkbox4.removeAttribute("checked")
            label4.classList.remove("activated")
            label4.classList.add("deactivated")
            result.value = "Nenhuma senha inserida"
            result.style.border = "1px solid red"
            bar.classList.remove("critical")
            bar.classList.remove("good")
            bar.classList.remove("safe")
            bar.classList.remove("strong")
        } else {
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

    }
    //Verification to turn the labels green
    if (pattern1.test(password) === true) {
        if(language.options[language.selectedIndex].value === "portuguese") {
            label1.classList.add("activated")
            label1.classList.remove("deactivated")
            checkbox1.setAttribute("checked", "true")
            bar.classList.add("critical")
            result.value = "fraca"
            result.style.border = "2px solid #f00"
        } else {
            label1.classList.add("activated")
            label1.classList.remove("deactivated")
            checkbox1.setAttribute("checked", "true")
            bar.classList.add("critical")
            result.value = "weak"
            result.style.border = "2px solid #f00"
        }

    }
    if (pattern2.test(password) === true) {
        if(language.options[language.selectedIndex].value === "portuguese") {
            label2.classList.add("activated")
            label2.classList.remove("deactivated")
            checkbox2.setAttribute("checked", "true")
            bar.classList.add("critical")
            result.value = "fraca"
            result.style.border = "2px solid #f00"
        } else {
            label2.classList.add("activated")
            label2.classList.remove("deactivated")
            checkbox2.setAttribute("checked", "true")
            bar.classList.add("critical")
            result.value = "weak"
            result.style.border = "2px solid #f00"
        }

    }
    if (pattern3.test(password) === true) {
        if(language.options[language.selectedIndex].value === "portuguese") {
            label3.classList.add("activated")
            label3.classList.remove("deactivated")
            checkbox3.setAttribute("checked", "true")
            bar.classList.add("critical")
            result.value = "fraca"
            result.style.border = "2px solid #f00"
        } else {
            label3.classList.add("activated")
            label3.classList.remove("deactivated")
            checkbox3.setAttribute("checked", "true")
            bar.classList.add("critical")
            result.value = "weak"
            result.style.border = "2px solid #f00"
        }

    }
    if (pattern4.test(password) === true) {
        if(language.options[language.selectedIndex].value === "portuguese") {
            label4.classList.add("activated")
            label4.classList.remove("deactivated")
            checkbox4.setAttribute("checked", "true")
            bar.classList.add("critical")
            result.value = "fraca"
            result.style.border = "2px solid #f00"
        } else {
            label4.classList.add("activated")
            label4.classList.remove("deactivated")
            checkbox4.setAttribute("checked", "true")
            bar.classList.add("critical")
            result.value = "weak"
            result.style.border = "2px solid #f00"
        }

    }
    //Security bar color
    if (pattern1.test(password) === true  && pattern2.test(password) === true && password.length >=8)  {
        if(language.options[language.selectedIndex].value === "portuguese") {
            bar.classList.add("good")
            result.value = "boa"
            result.style.border = "2px solid #0f0"
        } else {
            bar.classList.add("good")
            result.value = "good"
            result.style.border = "2px solid #0f0"
        }

    }
    if (pattern1.test(password) === true  && pattern2.test(password) === true && pattern3.test(password) === true && password.length >=10) {
        if(language.options[language.selectedIndex].value === "portuguese") {
            bar.classList.add("safe")
            result.value = "segura"
            result.style.border = "2px solid #29c429"
        } else {
            bar.classList.add("safe")
            result.value = "safe"
            result.style.border = "2px solid #29c429"
        }

    }
    if (pattern1.test(password) === true  && pattern2.test(password) === true && pattern3.test(password) === true && pattern4.test(password) === true && password.length >=12) {
        if(language.options[language.selectedIndex].value === "portuguese") {
            bar.classList.add("strong")
            result.value = "forte"
            result.style.border = "2px solid #038f00"
        } else {
            bar.classList.add("strong")
            result.value = "strong"
            result.style.border = "2px solid #038f00"
        }

    }
}
function changeLanguage() {
    let language = document.querySelector("#language")
    if (language.options[language.selectedIndex].value === "portuguese") {
        document.querySelector("#title").innerHTML = "Verificador Universal de Senha"
        document.querySelector("#password").placeholder = "Insira sua senha aqui"
        document.querySelector("#label1").innerHTML = "Letras Minúsculas"
        document.querySelector("#label2").innerHTML = "Letras Maiúsculas"
        document.querySelector("#label3").innerHTML = "Caracteres especiais"
        document.querySelector("#label4").innerHTML = "Números"
    } else {
        document.querySelector("#title").innerHTML = "Universal password checker"
        document.querySelector("#password").placeholder = "Insert your password here"
        document.querySelector("#label1").innerHTML = "Lowercase letters"
        document.querySelector("#label2").innerHTML = "Uppercase letters"
        document.querySelector("#label3").innerHTML = "Special caracters"
        document.querySelector("#label4").innerHTML = "Numbers"
    }
}
