import { Router } from "express";

export abstract class BaseRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  // Each child class must implement this method
  protected abstract initializeRoutes(): void;
}
