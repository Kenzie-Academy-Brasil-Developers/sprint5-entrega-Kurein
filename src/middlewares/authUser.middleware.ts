import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  let { id } = req.params;

  if (!token) {
    return res.status(401).json({ error: "missing auth token" });
  }

  jwt.verify(
    token as string,
    process.env.JWT_SECRET as string,
    (err: any, decoded: any) => {
      if (err) {
        return res.status(401).json({ error: "invalid token" });
      }

      if (decoded.isAdm) {
        next();
      }

      if (id !== decoded.id) {
        return res.status(401).json({ error: "Cannot access other users" });
      }

      req.userEmail = decoded.email;

      next();
    }
  );
};
