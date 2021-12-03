import {userService} from './index'
import {User} from './user.model'
import './home.scss'

window.onload=function(){

let currentUser = new User()

async function findCurrentUser() {
    currentUser = await userService.getCurrentUser()
}

findCurrentUser()
console.log("typeof CurrentUser", typeof currentUser)
console.log(currentUser)
// console.log("Service Response: ", userService.getCurrentUser())
// console.log("currentUser: ", currentUser)
// console.log("CurrentUser username: ", currentUser.username)
// console.log("Type of CurrentUser: ",typeof currentUser)
document.querySelector('body').innerText=`Welcome to Menvo`
}