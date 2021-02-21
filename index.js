import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.json())

app.get('/isidora', async (req, res) => {
    await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2016-4-2&camera=NAVCAM&api_key=7c52y9umfzGKIa6KsX5AEFBhSA65aybLSdpR2y5f').then((response) => {
        const nasaImagesArray = response.data.photos;
        for(let i=0; i< nasaImagesArray.length -1; i++) {
            console.log(nasaImagesArray[i]['earth_date'])
        }
    });

    res.send({});
});


app.listen(4000, () => {
    console.log("Listening on port 4000");
})