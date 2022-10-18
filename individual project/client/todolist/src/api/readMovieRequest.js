import { API_URL, API_KEY, lang, page } from "./movconfig"

//'https://api.themoviedb.org/3/movie/now_playing?api_key=922d3537cfc8496bf889b7a140d233f5&language=en-US&page=1'
// `${API_URL}/api_key=${API_KEY}&language=${lang}&page=${page}'

print('dbg1', API_URL, API_KEY, lang, page);

export default () => {
    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=922d3537cfc8496bf889b7a140d233f5&language=en-US&page=1', {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json'
        }
    })
    .then(response => response.json())
    }