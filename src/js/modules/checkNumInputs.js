const checkNumInputs = (selectorInput) => {
    const numInputs = document.querySelectorAll(selectorInput);

    numInputs.forEach(input => {
        input.addEventListener(`input`, () => {
            input.value = input.value.replace(/\D/, "");
        });
    })
};

export default checkNumInputs;