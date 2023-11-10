import { User } from "../classes/User.js";

export const changeUserName = () => {
    const modal = document.querySelector('.modal');
    modal.showModal();

    const data = JSON.parse(localStorage.getItem("uwaga"));
    const form = document.getElementById('form__username');

    form.addEventListener("submit", (e) => {
        let username = form.elements.namedItem("name").value;
        const name = document.getElementById('name');
        if(data) {
            name.textContent = username;
            data._name = username;
            const updatedData = JSON.stringify(data);
            localStorage.setItem("uwaga", updatedData);
            modal.close();
        } else {
            name.textContent = username;
            let user = new User(username);
            user = JSON.stringify(user);
            localStorage.setItem("uwaga", user);
            modal.close();
        }
    })

}