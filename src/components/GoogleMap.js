
export default function GoogleMap() {
    const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.505411906656!2d24.121452116138993!3d56.9572745808926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfcc14b436fd%3A0xea14f5292519a800!2sBr%C4%ABv%C4%ABbas%20iela%2068%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1011%2C%20Latvija!5e0!3m2!1slv!2sno!4v1668710681607!5m2!1slv!2sno"

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100vw',
            height: 'auto'
        }}>
            <iframe
                title="map"
                style={{ border: 0, margin: 0, padding: 0}}
                src={ googleMapsUrl }
                width="100%"
                height="500"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}