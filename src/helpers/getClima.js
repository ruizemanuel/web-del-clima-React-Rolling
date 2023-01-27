

export const getClima = async (ciudad, pais) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&lang=es&appid=acc1f20e52f689fa368e08183dbc5776&units=metric`

    const resp = await fetch(url)
    const { cod, weather, main, name } = await resp.json()

    console.log('Desde getClima')

    if (cod === 200) {
        const clima = {
            ciudad: name,
            temperatura: main.temp,
            description: weather[0].description,
        }
        return clima
    } else {
        return 'error'
    }





}
