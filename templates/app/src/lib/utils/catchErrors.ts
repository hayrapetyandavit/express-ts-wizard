import { Request, Response, NextFunction } from "express";

/**
 * need description
 * @param _target 
 * @param propertyKey 
 * @param descriptor 
 * @returns 
 */
export function CatchErrors(
  _target: unknown,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      await originalMethod.call(this, req, res, next);
    } catch (error) {
      console.error({
        propertyKey,
        method: req.method,
        url: req.originalUrl,
      });
      next(error);
    }
  };

  return descriptor;
}
