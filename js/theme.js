button = document.getElementById("theme");

light = true

button.onclick = function () {
    if (light == true) {
        document.querySelector(':root').style.setProperty('--main', '#FFFFFF')
        document.querySelector(':root').style.setProperty('--color', '#BD93F9')
        document.querySelector(':root').style.setProperty('--color50', '#BD93F980')
        document.querySelector(':root').style.setProperty('--background', '#282A36')
        document.querySelector(':root').style.setProperty('--background2', '#333545')
        document.querySelector(':root').style.setProperty('--font', '#A7A7A7')
        document.querySelector(':root').style.setProperty('--shadow', 'rgb(0, 0, 0, 0.2)')
        light = false
    } else {
        document.querySelector(':root').style.setProperty('--main', '#4C566A')
        document.querySelector(':root').style.setProperty('--color', '#5E81AC')
        document.querySelector(':root').style.setProperty('--color50', '#5E81AC80')
        document.querySelector(':root').style.setProperty('--background', '#F5F5F5')
        document.querySelector(':root').style.setProperty('--background2', '#FAFAFA')
        document.querySelector(':root').style.setProperty('--font', '#606C71')
        document.querySelector(':root').style.setProperty('--shadow', 'rgb(140, 140, 140, 0.2)')
        light = true
    }
}
