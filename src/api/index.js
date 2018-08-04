const KEY = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const URL = `https://api.unsplash.com/photos/?client_id=${KEY}&per_page=3`;

export default function fetchImages() {
    return fetch(URL).then(res => res.json());
}
