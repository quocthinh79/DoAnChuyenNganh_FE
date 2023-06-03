import { routerPath, TRouterPath } from "../../navigation";

export const generatePathFull = (parentPath = "", objectPath: any) => {
  const newRootPath: any = objectPath["root"]
    ? parentPath + "/" + objectPath["root"]
    : "";
  const newObjectPath: any = {};

  Object.keys(objectPath).forEach((key: string) => {
    if (key === "root") {
      newObjectPath[key] = newRootPath;

      return;
    }

    if (typeof objectPath[key] === "string") {
      newObjectPath[key] = newRootPath + "/" + objectPath[key];
    }

    if (typeof objectPath[key] === "object") {
      newObjectPath[key] = generatePathFull(newRootPath, objectPath[key]);
    }
  });

  return newObjectPath;
};

export const routerPathFull = generatePathFull("", routerPath) as TRouterPath;
export default routerPathFull;
