import { User } from './user.model'

const url = `http://localhost:8080/menvo/users`;

class UserService {

    getUser(user: User) {
        return fetch(`${url}/get`, {
            method: 'POST', body: JSON.stringify(user), headers: {'Content-Type': 'application/json'}
        }).then(response => response.json()).catch(reject=>null)
    }

    setCurrentUser(username: string) {
        return fetch(`${url}/set/${username}`, { method: 'POST' }).then(response => response.json())
    }

     getCurrentUser() {
        return fetch(`${url}/getuser`, { method: 'POST' }).then(response => response.json())
    }

    makeUser(username: string, password: string) {
        return fetch(`${url}/register/${username}&${password}`, {method: 'POST'})
    }

}

export { UserService }