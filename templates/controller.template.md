import { Request, Response } from "express";
import { ${ModuleName}Service } from "./${moduleName}.service";
import { CatchErrors } from "../../lib/utils/catchErrors";

export class ${ModuleName}Controller {
  private readonly ${moduleName}Service: ${ModuleName}Service;

  constructor(${moduleName}Service: ${ModuleName}Service) {
    this.${moduleName}Service = ${moduleName}Service;
  }

  @CatchErrors
  async findAll(req: Request, res: Response): Promise<void> {
    const ${moduleName} = await this.${moduleName}Service.findAll();
    res.status(200).json(${moduleName});
  }

  @CatchErrors
  async findOne(req: Request, res: Response): Promise<void> {
    const ${moduleName} = await this.${moduleName}Service.findOne(+req.params.id);
    res.status(200).json(${moduleName});
  }

  @CatchErrors
  async create(req: Request, res: Response): Promise<void> {
    const ${moduleName} = await this.${moduleName}Service.create(req.body);
    res.status(200).json(${moduleName});
  }

  @CatchErrors
  async update(req: Request, res: Response): Promise<void> {
    const ${moduleName} = await this.${moduleName}ervice.update(
      +req.params.id,
      req.body
    );
    res.status(200).json(${moduleName});
  }

  @CatchErrors
  async delete(req: Request, res: Response): Promise<void> {
    const ${moduleName} = await this.${moduleName}Service.delete(+req.params.id);
    res.status(200).json(${moduleName});
  }
}
