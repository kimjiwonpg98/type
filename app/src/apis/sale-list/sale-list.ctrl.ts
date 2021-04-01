import * as express from "express";
import { RowDataPacket } from "mysql2";
import SaleList from "../../models/services/SaleList/SaleList";

interface response {
  success?: boolean;
  isError?: boolean;
  clientMsg?: string;
  saleLists?: RowDataPacket[];
  errMsg?: string;
}

interface error {
  isError: boolean;
  errMsg: string;
  clientMsg: string;
  success?: boolean;
}

const process = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  read: async (req: express.Request, res: express.Response): Promise<any> => {
    const student = new SaleList(req);
    const response: response | error | undefined = await student.read();
    if (response.isError) {
      return res.status(400).json(response.clientMsg);
    }
    if (response.success) {
      return res.status(200).json(response);
    }
    return res.status(400).json(response);
  },
};

export default process;
