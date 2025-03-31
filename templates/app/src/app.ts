import express, { Application } from "express";
import dotenv from "dotenv";

// TODO: handle route initialization
// import productRouter from "./modules/products/product.routes";

import enableCors from "./middlewares/cors.middlewares";
import errorHandler from "./middlewares/error.middlewares";

class App {
  private readonly app: Application;
  private readonly port: number;

  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT || '');

    this.init();
  }

  private init() {
    this.initRoutes();
    this.initMiddlewares();
  }
  
  private initMiddlewares() {
    dotenv.config();
    
    this.app.use(enableCors);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(errorHandler);
  }

  private initRoutes() {
    // this.app.use("/api/product", productRouter);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}

export default App;
