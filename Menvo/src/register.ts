import './register.scss'
import { userService } from './index'
import { User } from './user.model'
window.onload = function () {
    document.querySelector("#confirm-password").addEventListener("keyup", async (e: KeyboardEvent) => {
        e.preventDefault();
        const key = e.key;
        const target = (<HTMLInputElement>e.target)
        const password = target.value;
        if (password === "") return
        if (key !== 'Enter') return
        if (key === 'Enter') {
            const username = (<HTMLInputElement>document.querySelector('#username')).value
            const other_pass = (<HTMLInputElement>document.querySelector('#password')).value
            if (username === "" || other_pass === "") {
                const form = document.getElementById("form")
                if (document.querySelector('#empty_field') === null) {
                    if (document.querySelector('#mismatch_pass') !== null) {
                        document.querySelector('#mismatch_pass').remove()
                    }
                    const textContainer = document.createElement("span")
                    textContainer.style.backgroundColor = 'white'
                    textContainer.style.color = 'red'
                    textContainer.style.borderWidth = '2px'
                    textContainer.style.borderColor = 'black'
                    textContainer.style.borderStyle = 'solid'
                    textContainer.innerText = "Please be sure to fill out all fields"
                    textContainer.style.padding = '5px'
                    textContainer.style.margin = '10px'
                    textContainer.setAttribute('id', 'empty_field')
                    form.appendChild(textContainer);
                }
                (<HTMLInputElement>document.querySelector('#username')).value = "";
                (<HTMLInputElement>document.querySelector('#password')).value = "";
                (<HTMLInputElement>document.querySelector('#confirm_password')).value = ""
            }
            else if (password !== other_pass) {
                const form = document.getElementById("form")
                if (document.querySelector('#mismatch_pass') === null) {
                    if (document.querySelector('#empty_field') !== null) {
                        document.querySelector('#empty_field').remove()
                    }
                    const textContainer = document.createElement("span")
                    textContainer.style.backgroundColor = 'white'
                    textContainer.style.color = 'red'
                    textContainer.style.borderWidth = '2px'
                    textContainer.style.borderColor = 'black'
                    textContainer.style.borderStyle = 'solid'
                    textContainer.innerText = "Passwords do not match. Please try again."
                    textContainer.style.padding = '5px'
                    textContainer.style.margin = '10px'
                    textContainer.setAttribute('id', 'mismatch_pass')
                    form.appendChild(textContainer);
                }
                (<HTMLInputElement>document.querySelector('#username')).value = "";
                (<HTMLInputElement>document.querySelector('#password')).value = "";
                (<HTMLInputElement>document.querySelector('#confirm_password')).value = ""
            }
            else {
                let user = new User()
                user.username = username
                user.password = password
                let checkIfUserAlreadyExists = await userService.getUser(user)
                if (!checkIfUserAlreadyExists) {
                    await userService.makeUser(username, password)
                    userService.setCurrentUser(username)
                    window.location.assign('home.html')
                }
                else {
                    const form = document.getElementById("form")
                    if (document.querySelector('#empty_field') !== null) {
                        document.querySelector('#empty_field').remove()
                    }
                    if (document.querySelector('#already_exists') !== null) {
                        document.querySelector('#already_exists').remove()
                    }
                    if (document.querySelector('#already_exists') === null) {
                        const textContainer = document.createElement("span")
                        textContainer.style.backgroundColor = 'white'
                        textContainer.style.color = 'red'
                        textContainer.style.borderWidth = '2px'
                        textContainer.style.borderColor = 'black'
                        textContainer.style.borderStyle = 'solid'
                        textContainer.innerText = "A user with that username already exists."
                        textContainer.style.padding = '5px'
                        textContainer.style.margin = '10px'
                        textContainer.setAttribute('id', 'already_exists')
                        form.appendChild(textContainer);
                    }
                    (<HTMLInputElement>document.querySelector('#username')).value = "";
                    (<HTMLInputElement>document.querySelector('#password')).value = "";
                    (<HTMLInputElement>document.querySelector('#confirm_password')).value = ""
                }
            }

        }
    })

    document.querySelector("#password").addEventListener("keyup", async (e: KeyboardEvent) => {
        e.preventDefault();
        const key = e.key;
        const target = (<HTMLInputElement>e.target)
        const password = target.value;
        if (password === "") return
        if (key !== 'Enter') return
        if (key === 'Enter') {
            const username = (<HTMLInputElement>document.querySelector('#username')).value
            const other_pass = (<HTMLInputElement>document.querySelector('#confirm-password')).value
            if (username === "" || other_pass === "") {
                const form = document.getElementById("form")
                if (document.querySelector('#empty_field') === null) {
                    if (document.querySelector('#mismatch_pass') !== null) {
                        document.querySelector('#mismatch_pass').remove()
                    }
                    if (document.querySelector('#already_exists') !== null) {
                        document.querySelector('#already_exists').remove()
                    }
                    const textContainer = document.createElement("span")
                    textContainer.style.backgroundColor = 'white'
                    textContainer.style.color = 'red'
                    textContainer.style.borderWidth = '2px'
                    textContainer.style.borderColor = 'black'
                    textContainer.style.borderStyle = 'solid'
                    textContainer.innerText = "Please be sure to fill out all fields"
                    textContainer.style.padding = '5px'
                    textContainer.style.margin = '10px'
                    textContainer.setAttribute('id', 'empty_field')
                    form.appendChild(textContainer);
                }
                (<HTMLInputElement>document.querySelector('#username')).value = "";
                (<HTMLInputElement>document.querySelector('#password')).value = "";
                (<HTMLInputElement>document.querySelector('#confirm_password')).value = ""
            }
            else if (password !== other_pass) {
                const form = document.getElementById("form")
                if (document.querySelector('#mismatch_pass') === null) {
                    if (document.querySelector('#empty_field') !== null) {
                        document.querySelector('#empty_field').remove()
                    }
                    if (document.querySelector('#already_exists') !== null) {
                        document.querySelector('#already_exists').remove()
                    }
                    const textContainer = document.createElement("span")
                    textContainer.style.backgroundColor = 'white'
                    textContainer.style.color = 'red'
                    textContainer.style.borderWidth = '2px'
                    textContainer.style.borderColor = 'black'
                    textContainer.style.borderStyle = 'solid'
                    textContainer.innerText = "Passwords do not match. Please try again."
                    textContainer.style.padding = '5px'
                    textContainer.style.margin = '10px'
                    textContainer.setAttribute('id', 'mismatch_pass')
                    form.appendChild(textContainer);
                }
                (<HTMLInputElement>document.querySelector('#username')).value = "";
                (<HTMLInputElement>document.querySelector('#password')).value = "";
                (<HTMLInputElement>document.querySelector('#confirm_password')).value = ""
            }
            else {
                let user = new User()
                user.username = username
                user.password = password
                let checkIfUserAlreadyExists = await userService.getUser(user)
                if (!checkIfUserAlreadyExists) {
                    await userService.makeUser(username, password)
                    userService.setCurrentUser(username)
                    window.location.assign('home.html')
                }
                else {
                    const form = document.getElementById("form")
                    if (document.querySelector('#empty_field') !== null) {
                        document.querySelector('#empty_field').remove()
                    }
                    if (document.querySelector('#already_exists') !== null) {
                        document.querySelector('#already_exists').remove()
                    }
                    if (document.querySelector('#already_exists') === null) {
                        const textContainer = document.createElement("span")
                        textContainer.style.backgroundColor = 'white'
                        textContainer.style.color = 'red'
                        textContainer.style.borderWidth = '2px'
                        textContainer.style.borderColor = 'black'
                        textContainer.style.borderStyle = 'solid'
                        textContainer.innerText = "A user with that username already exists."
                        textContainer.style.padding = '5px'
                        textContainer.style.margin = '10px'
                        textContainer.setAttribute('id', 'already_exists')
                        form.appendChild(textContainer);
                    }
                    (<HTMLInputElement>document.querySelector('#username')).value = "";
                    (<HTMLInputElement>document.querySelector('#password')).value = "";
                    (<HTMLInputElement>document.querySelector('#confirm_password')).value = ""
                }
            }
        }
    })
}