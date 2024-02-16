
export function isTokenValid() {

    const storedTokenExpiration = localStorage.getItem('TOKEN_EXPIRATION');

    const expirationDate = new Date(storedTokenExpiration);
    const now = new Date();

    const isExpired = (expirationDate - now) < 0;

    if (isExpired) {
        return false;
    } else {
        return true;
    }
}

export function getToken() {
    return localStorage.getItem('TOKEN');
}

export function setToken(token, expiration) {
    localStorage.setItem('TOKEN', token);
    localStorage.setItem('TOKEN_EXPIRATION', expiration);
}

export function clearToken() {
    console.log('Token cleared');
    localStorage.clear();
}