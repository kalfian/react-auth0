import auth0 from 'auth0-js'
import jwtDecode from 'jwt-decode'

const LOGIN_SUCCESS_PAGE = "/secret"
const LOGIN_FAILURE_PAGE = "/"

class Auth {
    auth0 = new auth0.WebAuth({
        domain: "kalfian.auth0.com",
        clientID: "8nzNtQfKljG2R79qZX5F74YDSm2MTJSU",
        redirectUri: "http://localhost:3000/callback",
        audience: "https://kalfian.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid profile"
    })

    constructor() {
        this.login = this.login.bind(this)
    }

    handleAuth() {
        this.auth0.parseHash((err, res) => {
            if (res && res.accessToken && res.idToken) {
                let exp = JSON.stringify((res.expiresIn) * 1000 + new Date().getTime())
                localStorage.setItem("access_token", res.accessToken)
                localStorage.setItem("id_token", res.idToken)
                localStorage.setItem("expires_at", exp)

                window.location.hash = "";
                window.location.pathname = LOGIN_SUCCESS_PAGE;

            } else if (err) {
                window.location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err)
            }
        })
    }

    isAuth() {
        let expAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expAt;
    }

    login() {
        this.auth0.authorize()
    }

    logout() {
        localStorage.removeItem("access_token")
        localStorage.removeItem("id_token")
        localStorage.removeItem("expires_at")
        window.location.pathname = LOGIN_FAILURE_PAGE
    }

    getProfile() {
        if (localStorage.getItem("id_token")) {
            return jwtDecode(localStorage.getItem("id_token"))
        } else {
            return {}
        }
    }
}

export default Auth;