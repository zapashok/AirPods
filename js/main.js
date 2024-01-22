const chooseColor = document.querySelectorAll('.choose-color-btn');
const contentItem = document.querySelectorAll('.content-item');


chooseColor.forEach(function (element) {
    element.addEventListener('click', open)
});

function open(evt) {
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);
    console.log(target);
    console.log(button);
    console.log(contentActive);

    chooseColor.forEach(function (item) {
        item.classList.remove('choose-color-btn-active')
        console.log(item);
    });
    
    
    target.classList.add('choose-color-btn-active')
    console.log(target);

    contentItem.forEach(function (item) {
        item.classList.remove('content-item-active')
    });
    console.log(contentItem);
    
    contentActive.forEach(function (item) {
        item.classList.add('content-item-active')
        console.log(item);
    });
    console.log(contentActive);
}