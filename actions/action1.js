export const setTitle = (title) => ({
    type: 'SET_TITLE',
    payload: title,
})

export const setArrayOfData = (json) => ({
    type: 'SET_ARRAY',
    payload:{
        arrayOfData: json
    } ,
}
)

export const setFavourite = (title, image) => ({
    type: 'SET_FAVORITE_ARRAY',
    payload: {
            favoriteMovieTitle: title, 
            favoriteMovieImage: image,
    },
})

// export const setBoolean = (trueOrFalse) => ({
//     type: 'SET_BOOLEAN',
//     payload: {
//         isFavorite: trueOrFalse,
//     }
// })