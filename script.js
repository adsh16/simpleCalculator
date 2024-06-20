document.addEventListener('DOMContentLoaded', () => {
    const calculator = document.forms['calculator'];
    const display = calculator['display'];
    const themeCheckbox = document.getElementById('theme-checkbox');

    let shouldClearDisplay = false;

    const operators = ['+', '-', '*', '/', '**'];

    document.querySelectorAll('input[type="button"]').forEach(button => {
        button.addEventListener('click', () => {
            try {
                const value = button.value;

                if (value === '=') {
                    if (display.value.trim() === '') {
                        display.value = '';
                    } else {
                        display.value = eval(display.value.replace(/π/g, Math.PI));
                        shouldClearDisplay = true;
                    }
                } else if (value === 'AC') {
                    display.value = '0';
                    shouldClearDisplay = false;
                } else if (value === 'OFF') {
                    display.value = '';
                } else if (value === '%') {
                    display.value = eval(display.value) / 100;
                    shouldClearDisplay = true;
                } else if (value === 'sin') {
                    display.value = Math.sin(eval(display.value) * (Math.PI / 180));
                    shouldClearDisplay = true;
                } else if (value === 'cos') {
                    display.value = Math.cos(eval(display.value) * (Math.PI / 180));
                    shouldClearDisplay = true;
                } else if (value === 'tan') {
                    display.value = Math.tan(eval(display.value) * (Math.PI / 180));
                    shouldClearDisplay = true;
                } else if (value === 'log') {
                    display.value = Math.log10(eval(display.value));
                    shouldClearDisplay = true;
                } else if (value === '√') {
                    display.value = Math.sqrt(eval(display.value));
                    shouldClearDisplay = true;
                } else if (value === 'π') {
                    if (shouldClearDisplay || display.value === '0') {
                        display.value = Math.PI.toString();
                        shouldClearDisplay = false;
                    } else {
                        display.value += Math.PI;
                    }
                } else if (value === 'x') {
                    display.value += '*';
                } else if (operators.includes(value)) {
                    if (shouldClearDisplay) {
                        shouldClearDisplay = false;
                    }
                    if (!operators.includes(display.value.slice(-1))) {
                        display.value += value;
                    } else {
                        display.value = display.value.slice(0, -1) + value;
                    }
                } else {
                    if (shouldClearDisplay) {
                        display.value = value;
                        shouldClearDisplay = false;
                    } else {
                        if (display.value === '0') {
                            display.value = value;
                        } else {
                            display.value += value;
                        }
                    }
                }
            } catch (error) {
                display.value = 'Error';
                shouldClearDisplay = true;
            }
        });
    });

    themeCheckbox.addEventListener('change', () => {
        if (themeCheckbox.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});
    