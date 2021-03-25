import * as express from "express";
import SaleList from "../../models/services/SaleList/SaleList";

interface response {
  success?: boolean,
  msg?: string,
  saleLists?: object,
  error?: string
};

const output = {
  read: async (req: express.Request, res: express.Response): Promise<any> => {
    const studentId: string = req.params.studentId;
    const student = new SaleList(studentId);
    const response: response = await student.read();
    if (response.success) {
      return res.status(200).json(response);
    }
    return res.status(400).json(response);
  }
}

export default output;