import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from 'mercadopago';

const app = express();
app.use(cors());
app.use(express.json()); //middleware para interpretar los datos que vienen en formato json
app.use(express.static('client')); // <--- servirá los HTML, CSS, imágenes, etc.

const client = new MercadoPagoConfig({
    accessToken:'YOUR_ACCESS_TOKEN' //reemplazar por la access token de mercado pago
});


app.get("/",  (req, res) => {
    res.send("server online");
});


app.get("/succes", (req, res) => {
  res.sendFile(__dirname + "/client/media/success.html");
});


 app.post("/create_preference", async (req, res) => { // Marca la función como async
    
    const {items, description} = req.body; //en lugar de enviar un solo elemento del carrito , lo preparao para que reciba varios items
    try {
        const preferenceData = {
            items: items,
            back_urls: {
                success: "/success",
                failure: "/failure",
                pending: "",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client); // Usa la instancia de MercadoPagoConfig
        const result = await preference.create({ body: preferenceData }); // Usa await para esperar la promesa

        res.json({
            id: result.id
        });
    } catch (error) {
        console.error(error); // Usa console.error para errores
        res.status(500).json({ error: error.message }); // Envía un error 500 al cliente
    }
});


app.listen(3001, () => {
    console.log("Server is now running on port 8080");
});