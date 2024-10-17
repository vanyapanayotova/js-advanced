function encodeAndDecodeMessages() {

    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
    const map = {
        encode: {
            text: textAreas[0],
            btn: buttons[0],
            func: (char) => String.fromCharCode(char.charCodeAt(0) + 1)
        },
        decode: {
            text: textAreas[1],
            btn: buttons[1],
            func: (char) => String.fromCharCode(char.charCodeAt(0) - 1)
        }
    }
    const evListener = document.getElementById('main').addEventListener('click', function (ev) {
        if (ev.target.tagName !== 'BUTTON') {
            return
        }
        const type = ev.target.textContent.toLowerCase().includes('encode') ? 'encode' : 'decode'
        const message = map[type].text.value.split('').map(map[type].func).join('')

        map.decode.text.value = message
        map.encode.text.value = ''
    })
}