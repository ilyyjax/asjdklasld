const hairSelect = document.getElementById('hairSelect');
const hairColor = document.getElementById('hairColor');
const eyeColor = document.getElementById('eyeColor');
const mouthSelect = document.getElementById('mouthSelect');
const accessorySelect = document.getElementById('accessorySelect');
const skinColor = document.getElementById('skinColor');
const outfitColor = document.getElementById('outfitColor');

const hair = document.getElementById('hair');
const eyes = document.querySelectorAll('.eye');
const mouth = document.getElementById('mouth');
const accessory = document.getElementById('accessory');
const head = document.getElementById('head');
const outfit = document.getElementById('outfit');

// Hair Style
hairSelect.addEventListener('change', () => {
    const style = hairSelect.value;
    switch(style) {
        case 'hair1': hair.style.borderRadius = '50% 50% 30% 30%'; break;
        case 'hair2': hair.style.borderRadius = '50% 50% 50% 50%'; break;
        case 'hair3': hair.style.borderRadius = '20% 80% 50% 50%'; break;
        case 'hair4': hair.style.borderRadius = '60% 40% 60% 40%'; break;
        case 'hair5': hair.style.borderRadius = '10% 90% 20% 80%'; break;
    }
});

// Hair Color
hairColor.addEventListener('input', () => {
    hair.style.background = hairColor.value;
});

// Eye Color
eyeColor.addEventListener('input', () => {
    eyes.forEach(eye => eye.style.background = eyeColor.value);
});

// Skin Color
skinColor.addEventListener('input', () => {
    head.style.background = skinColor.value;
});

// Outfit Color
outfitColor.addEventListener('input', () => {
    outfit.style.background = outfitColor.value;
});

// Mouth Expressions
mouthSelect.addEventListener('change', () => {
    const style = mouthSelect.value;
    switch(style) {
        case 'smile':
            mouth.style.borderRadius = '10px';
            mouth.style.height = '15px';
            mouth.style.background = '#ff6666';
            break;
        case 'neutral':
            mouth.style.borderRadius = '50%';
            mouth.style.height = '10px';
            mouth.style.background = '#ff6666';
            break;
        case 'frown':
            mouth.style.borderRadius = '5px 5px 20px 20px';
            mouth.style.height = '15px';
            mouth.style.background = '#ff6666';
            break;
        case 'surprised':
            mouth.style.borderRadius = '50%';
            mouth.style.height = '20px';
            mouth.style.width = '20px';
            mouth.style.background = '#ff9999';
            break;
    }
});

// Accessory
accessorySelect.addEventListener('change', () => {
    const style = accessorySelect.value;
    switch(style) {
        case 'none': accessory.style.background = 'transparent'; break;
        case 'hat': accessory.style.background = '#ff6699'; break;
        case 'glasses': accessory.style.background = 'rgba(0,0,0,0.5)'; break;
        case 'headband': accessory.style.background = '#00ff99'; break;
    }
});
