
function showPopup(event) {
    const flexboxContent = event.currentTarget.innerHTML;

    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '15px';
    popup.style.backgroundColor = '#ffebcd'; 
    popup.style.border = '2px solid #f08080'; 
    popup.style.borderRadius = '10px'; 
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; 
    popup.style.fontFamily = 'Comic Sans MS, cursive, sans-serif'; 
    popup.style.fontSize = '16px'; 
    popup.style.color = '#333'; 
    popup.style.zIndex = '1000';
    popup.style.opacity = '0';
    popup.style.transition = 'opacity 0.5s ease';


    popup.innerHTML = flexboxContent;

    document.body.appendChild(popup);


    setTimeout(() => {
        popup.style.opacity = '1';
    }, 100);

    event.currentTarget.addEventListener('mouseleave', () => {
        popup.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(popup);
        }, 500);
    }, { once: true });
}


document.querySelectorAll('.flex-box').forEach(flexBox => {
    flexBox.addEventListener('mouseenter', showPopup);
});
