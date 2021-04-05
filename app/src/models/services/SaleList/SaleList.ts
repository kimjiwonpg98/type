import SaleListStorage from "./SaleListStorage";

interface response {
  success: boolean;
  msg: string;
  saleLists?: any;
}

class SaleList {
  constructor(readonly body: string) {
    this.body = body;
  }

  async read(): Promise<response> {
    const studentId: string = this.body;

    try {
      const saleLists: Array<any> = await SaleListStorage.findAllByStatus(
        studentId
      );
      if (saleLists.length !== 0)
        return {
          success: true,
          msg: "판매내역 조회 완료되었습니다.",
          saleLists: saleLists,
        };
      return { success: false, msg: "판매내역이 존재하지않습니다." };
    } catch (err) {
      throw err;
    }
  }
}

export default SaleList;
