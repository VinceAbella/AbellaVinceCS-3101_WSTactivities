const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordCount');
const sentenceCountDisplay = document.getElementById('sentenceCount');
const fontDisplay = document.getElementById('fontDisplay');

function createDropdown(id, options) {
    const select = document.createElement('select');
    select.id = id;
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.textContent = option.text;
        if (option.selected) {
            opt.selected = true;
        }
        select.appendChild(opt);
    });
    return select;
}

const fontOptions = [
    { value: 'Arial', text: 'Arial' },
    { value: 'Courier New', text: 'Courier New' },
    { value: 'Georgia', text: 'Georgia' },
    { value: 'Times New Roman', text: 'Times New Roman' },
    { value: 'Verdana', text: 'Verdana' },
    { value: 'Tahoma', text: 'Tahoma' },
    { value: 'Trebuchet MS', text: 'Trebuchet MS' },
    { value: 'Impact', text: 'Impact' },
    { value: 'Comic Sans MS', text: 'Comic Sans MS' },
    { value: 'Lucida Sans Unicode', text: 'Lucida Sans Unicode' }
];

const fontSizeOptions = [
    { value: '12px', text: '12px' },
    { value: '14px', text: '14px', selected: true },
    { value: '16px', text: '16px' },
    { value: '18px', text: '18px' },
    { value: '20px', text: '20px' },
    { value: '22px', text: '22px' },
    { value: '24px', text: '24px' }
];

const fontDropdown = createDropdown('fontDropdown', fontOptions);
const fontSizeDropdown = createDropdown('fontSizeDropdown', fontSizeOptions);

document.body.insertBefore(fontDropdown, fontDisplay);
document.body.insertBefore(fontSizeDropdown, fontDisplay);

textInput.addEventListener('input', () => {
    const text = textInput.value.trim();
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    wordCountDisplay.textContent = words.length;
    sentenceCountDisplay.textContent = sentences.length;
});

fontDropdown.addEventListener('change', () => {
    const selectedFont = fontDropdown.value;
    textInput.style.fontFamily = selectedFont;
    fontDisplay.textContent = `Current Font: ${selectedFont}`;
});

fontSizeDropdown.addEventListener('change', () => {
    const selectedFontSize = fontSizeDropdown.value;
    textInput.style.fontSize = selectedFontSize;
});
