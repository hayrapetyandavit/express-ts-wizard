export class ${ModuleName}Service {
  create(dto: any) {
    return `This action adds a new ${moduleName}`;
  }

  findAll() {
    return `This action returns all ${moduleName}s`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ${moduleName}`;
  }

  update(id: number, dto: any) {
    return `This action updates a #${id} ${moduleName}`;
  }

  delete(id: number) {
    return `This action delete a #${id} ${moduleName}`;
  }
}