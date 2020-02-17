$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText){
    axios.get('http://www.omdbapi.com/?s='+searchText + '&apikey=9be27fce')
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
}