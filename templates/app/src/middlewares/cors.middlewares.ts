import cors, { CorsOptions } from "cors";

const allowedOrigins = process.env.CLIENT_URL || '';

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
console.log(allowedOrigins)

      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
//   optionsSuccessStatus: 200,
};

const enableCors = cors(corsOptions);
export default enableCors;
