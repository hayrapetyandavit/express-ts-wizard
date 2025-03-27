import { BaseRouter } from "../../lib/base.router";
import { ${ModuleName}Service } from "./${moduleName}.service";
import { ${ModuleName}Controller } from "./${moduleName}.controller";

const ${moduleName}Service = new ${ModuleName}Service();
const ${moduleName}Controller = new ${ModuleName}Controller(${moduleName}Service);

class ${ModuleName}Router extends BaseRouter {

  protected initializeRoutes(): void {
    this.router.get("/", ${moduleName}Controller.findAll.bind(${moduleName}Controller));
    this.router.post("/", ${moduleName}Controller.create.bind(${moduleName}Controller));
    this.router.put("/:id", ${moduleName}Controller.update.bind(${moduleName}Controller));
    this.router.delete(
      "/:id",
      ${moduleName}Controller.delete.bind(${moduleName}Controller)
    );
  }
}

export default new ${ModuleName}Router().router;