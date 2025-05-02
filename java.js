const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const color = document.createElement('div');
    color.classList.add('color');
    bgAnimation.append(color)
}