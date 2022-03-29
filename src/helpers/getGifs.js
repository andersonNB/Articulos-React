export const getGifs = async (categoria) => {

    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=6pLfEjnR18zDQ74fEZmBuvMgkUDqphyE`;
    const repuesta = await fetch(url);

    const { data } = await repuesta.json()


    const gifsApi = data.map((item => {
        return {
            id: item.id,
            title: item.title,
            url: item.images?.downsized_medium.url,
        }
    }))

    console.log(gifsApi)
    //Establecemos el estado
    return gifsApi
}