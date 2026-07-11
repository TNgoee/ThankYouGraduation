import express, { type Express, type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import pinoHttp, { type Options } from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

const pinoHttpOptions: Options = {
  logger,
  serializers: {
    req: (req: Request) => ({
      id: req.id,
      method: req.method,
      url: req.url?.split("?")[0],
    }),
    res: (res: Response) => ({
      statusCode: res.statusCode,
    }),
  },
};

app.use((req: Request, res: Response, next: NextFunction) => {
  pinoHttp(pinoHttpOptions)(req, res, next);
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
