import * as express from "express";
import SaleList from "../../models/services/SaleList/SaleList";

interface saleLists {
  num: number;
  sellerName: string;
  profilePath: string;
  thumbnail: string;
  title: string;
  hit: number;
  price: string;
  categoryName: string;
  commentCount: number;
  inDate: Date;
}

interface response {
  success?: boolean;
  isError?: boolean;
  clientMsg?: string;
  saleLists?: saleLists[];
  errMsg?: string;
}

const process = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  read: async (req: express.Request, res: express.Response): Promise<any> => {
    const student = new SaleList(req);
    const response: response = await student.read();
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
