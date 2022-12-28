function tab(current:HTMLInputElement, to:HTMLInputElement) {
    if (current.getAttribute && current.value.length == parseInt(current.getAttribute("maxlength") ?? "") && to.focus) {
        to.focus();
    }
}
export function autotab(inputs:HTMLInputElement[]) {
    const l = inputs.length;

    for (let i = 0; i < l; i++) {
        if (i+1 < l) {
            const input = inputs[i];
            const dest = inputs[i + 1];

            input.addEventListener('input', function(){
                tab(input, dest);
            });
        }
    }
}
