
export function setToken(token, expiration) {
    // Provide key and value to save data.
        localStorage.setItem('TOKEN', token);
        localStorage.setItem('TOKEN_EXPIRATION', expiration);
    }
    
    
    export function clearToken() {
        console.log('Token cleared');
        localStorage.clear();
    }
    
    export function getToken() {
    // Get token by key.
        return localStorage.getItem('TOKEN');
    }
    
    // Check token validity
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