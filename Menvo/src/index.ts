import './index.scss'
import { User } from './user.model';
import { UserService } from './user.service';

const userService = new UserService();

window.onload = function () {
    document.querySelector("#password").addEventListener("keyup", async (e: KeyboardEvent) => {
        e.preventDefault();
        const key = e.key;
        const target = (<HTMLInputElement>e.target)
        const password = target.value;
        if (password === "") return
        if (key !== 'Enter') return
        if (key === 'Enter') {
            const username = (<HTMLInputElement>document.querySelector('#username')).value
            if (username === "") {
                const form = document.getElementById("form")
                if (document.querySelector('span') === null) {
                    const textContainer = document.createElement("span")
                    textContainer.style.backgroundColor = 'white'
                    textContainer.style.color = 'red'
                    textContainer.style.borderWidth = '2px'
                    textContainer.style.borderColor = 'black'
                    textContainer.style.borderStyle = 'solid'
                    textContainer.innerText = "Invalid username or password. Please try again."
                    textContainer.style.padding = '5px'
                    textContainer.style.margin = '10px'
                    form.appendChild(textContainer);
                }
                (<HTMLInputElement>document.querySelector('#username')).value = ""
                target.value = ""
            }
            else {
                let user = new User()
                user.username = username
                user.password = password
                let potentialUser: User = await userService.getUser(user)
                if (potentialUser != null) {
                    console.log(potentialUser)
                    userService.setCurrentUser(potentialUser.username)
                    window.location.assign('home.html')
                }
                else {
                    const form = document.getElementById("form")
                    if (document.querySelector('span') === null) {
                        const textContainer = document.createElement("span")
                        textContainer.style.backgroundColor = 'white'
                        textContainer.style.color = 'red'
                        textContainer.style.borderWidth = '2px'
                        textContainer.style.borderColor = 'black'
                        textContainer.style.borderStyle = 'solid'
                        textContainer.innerText = "Invalid username or password. Please try again."
                        textContainer.style.padding = '5px'
                        textContainer.style.margin = '10px'
                        form.appendChild(textContainer);
                    }
                    (<HTMLInputElement>document.querySelector('#username')).value = ""
                    target.value = ""
                }
            }
        }
    })
}
export { userService }
