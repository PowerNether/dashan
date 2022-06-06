let line_dashlk__controls = Array.from(document.querySelectorAll('.line-dashlk__controls')) || null;

if (line_dashlk__controls !== null) {
    line_dashlk__controls.forEach(line => {
        let controls = Array.from(line.querySelectorAll('.line-dashlk__control')) || null;

        if (controls !== null) {
            controls.forEach(control => {
                control.addEventListener('click', function () {
                    controls.forEach(item => {
                        item.classList.remove('active');
                    });
                    this.classList.toggle('active');
                });
            });
        };
    });
};

let table_dashan__more = Array.from(document.querySelectorAll('.table-dashan__more')) || null;

if (table_dashan__more !== null) {
    table_dashan__more.forEach(more => {
        let table = more.parentNode;
        let hiddenItem = Array.from(table.querySelectorAll('[data-table-dashan="hidden"]')) || null;
        let moreText = more.textContent;
        
        if (hiddenItem !== null) {
            more.addEventListener('click', function () {
                hiddenItem.forEach(item => {
                    if (item.style.maxHeight) {
                        item.style.maxHeight = null;
                        item.style.marginBottom = null;
                        item.style.opacity = null;
                        more.textContent = moreText;
                    } else {
                        item.style.maxHeight = item.scrollHeight + 4 + "px";
                        item.style.marginBottom = "4px";
                        item.style.opacity = "1";
                        more.textContent = "Скрыть";
                    };
                });
            });
        };
    });
};