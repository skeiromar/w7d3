export const fetchAllPokemon = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pokemon',
    })
}

// export const createChirp = (chirp) => {
//     return $.ajax({
//         method: 'POST',
//         url: '/api/chirps',
//         data: { chirp: chirp },
//     })
// }