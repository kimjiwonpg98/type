import * as express from "express";
import { RowDataPacket } from "mysql2";
import PurchaseList from "../../models/services/PurchaseList/PurchaseList";

interface response {
  success?: boolean;
  isError?: boolean;
  clientMsg?: string;
  purchaseLists?: RowDataPacket[];
  errMsg?: string;
}

const process = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  read: async (req: express.Request, res: express.Response): Promise<any> => {
    const student = new PurchaseList(req);
    const response: response = await student.read();
    if (response.isError) {
      return res.status(400).json(response.clientMsg);
    }
    if (response.success) {
      return res.status(200).json(response);
    }
    return res.status(400).json(response);
  },

  create: async (req: express.Request, res: express.Response): Promise<any> => {
    const purchaseList = new PurchaseList(req);
    const response: response = await purchaseList.create();
    if (response.isError) {
      return res.status(409).json(response.clientMsg);
    }
    if (response.success) {
      return res.status(201).json(response);
    }
    return res.status(409).json(response);
  },
};

export default process;
