import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const 
        form = document.querySelectorAll(`form`),
        inputs = document.querySelectorAll(`input`);

    checkNumInputs(`input[name="user_phone"]`)

    const message = {
        loading: `Загрузка... <br><div class="spinner-3"></div>`, 
        success: `Спасибо! Скоро мы с Вами свяжемся.`,
        failure: `Что-то пошло не так...`
    };

    const postData = async (url, data) => {
        document.querySelector(`.status`).innerHTML = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        })

        return await res.text();
    }
    
    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = ``;
        })
    }

    form.forEach(item => {
        item.addEventListener(`submit`, e => {
            e.preventDefault();

            let statusMessage = document.createElement(`div`);
            let loader = document.createElement(`div`);

            loader.classList.add(`spinner-3`)
            statusMessage.classList.add(`status`);
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            if (item.dataset.calc ===`end`) {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData(`assets/server.php`, formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally (() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 5000)
                })
        })
    });
};

export default forms;