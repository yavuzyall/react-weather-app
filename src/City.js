
const City = ({ city }) => {
    console.log(city);
    return (
        <>
            <hr className="mt-2 border boxshadow p-0" />
            <div className="mt-4 bg-gray-100 w-1/2 m-auto rounded-lg">
                <h1 className="text-5xl">{city && city.name ? city.name : "Space"}</h1>
                <h1 className="text-3xl">{city && city.weather[0].description ? city.weather[0].description.toUpperCase() : "Dark Matter"}</h1>
                <h1 className="text-2xl">{city && city.main.temp ? city.main.temp : "−270,45"} °C</h1>
            </div>
        </>
    )
}

export default City;