import * as express from "express";
<<<<<<< HEAD
=======
import { RowDataPacket } from "mysql2";
>>>>>>> 78a216d8730e6502f2679ebdf9379b5d787bb9ec
import SaleList from "../../models/services/SaleList/SaleList";

interface response {
  success?: boolean;
<<<<<<< HEAD
  msg?: string;
  saleLists?: object;
  error?: string;
}

const output = {
  read: async (req: express.Request, res: express.Response): Promise<any> => {
    const studentId: string = req.params.studentId;
    const student = new SaleList(studentId);
    const response: response = await student.read();
=======
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
>>>>>>> 78a216d8730e6502f2679ebdf9379b5d787bb9ec
    if (response.success) {
      return res.status(200).json(response);
    }
    return res.status(400).json(response);
  },
};

<<<<<<< HEAD
export default output;
=======
export default process;
>>>>>>> 78a216d8730e6502f2679ebdf9379b5d787bb9ec
