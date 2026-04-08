async function ripples() {
    const ripple = document.getElementById('ripple')
    const scale = document.getElementById('scale')

    ripple.setAttribute('values', `${0.005 + Math.random()/50}; 0`)
    scale.setAttribute('values', `0; ${17.5 + Math.random()*5}; 0`)

    ripple.beginElement()
}