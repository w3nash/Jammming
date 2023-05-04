export const search = async (authToken, searchInput, setSearchResults) => {
    const URL = "https://api.spotify.com/v1/search";
    const params = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + authToken
        }
    };
    await fetch(URL + '?q=' + searchInput + '&type=track', params)
        .then(result => result.json())
        .catch(error => console.log(error))
        .then(data => setSearchResults(data.tracks.items))
        .catch(error => console.log(error));
}

export const getToken = async (client_id, client_secret, setAuthToken, authToken, setUserID) => {
    const url = new URLSearchParams(window.location.search);
    const code = url.get('code');
    const URL = 'https://accounts.spotify.com/api/token';
    if (code) {
        const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(`${client_id}:${client_secret}`)}`
        },
        body: `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent("http://localhost:3000")}`
        }
        await fetch(URL, params)
            .then(result => result.json())
            .catch(error => console.log(error))
            .then(data => {
                console.log(data)
                setAuthToken(data.access_token);
            })
            .catch(error => console.log(error));
        getUserID(authToken, setUserID);
    } else {
        const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret
        }
        await fetch(URL, params)
            .then(result => result.json())
            .catch(error => console.log(error))
            .then(data => setAuthToken(data.access_token))
            .catch(error => console.log(error));
    }
}

export const login = (client_id) => {
    const scopes = ['user-read-private', 'user-read-email'];
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${encodeURIComponent("http://localhost:3000")}&scope=${encodeURIComponent(scopes.join(' '))}`);
}

export const getUserID = async (authToken, setUserID) => {
    const URL = "https://api.spotify.com/v1/me";
    const params = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + authToken
        }
    };
    await fetch(URL, params)
        .then(result => result.json())
        .catch(error => console.log(error))
        .then(data => console.log(data))
        .catch(error => console.log(error));
}