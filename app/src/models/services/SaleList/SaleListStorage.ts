import db from '../../../config/db';

interface saleLists {
  num?: number,
  thumbnail?: string,
  title?: string,
  hit?: number,
  price?: string,
  name?: string,
  commentCount?: number,
  inDate?: Date
}


class SaleListStorage {
  static findAllByStatus(id: string) {
    return new Promise((resolve: (value: Array<saleLists>) => void, reject) => {
      const sql: string = ` SELECT bo.no AS num, bo.thumbnail, bo.title, bo.hit, 
      bo.price, cat.name, (SELECT  COUNT(cmt.content) FROM comments cmt WHERE bo.no = cmt.board_no) AS commentCount
      ,date_format(bo.in_date, '%Y-%m-%d %H:%i:%s') AS inDate
      FROM boards bo
      JOIN categories cat
      ON cat.no = bo.category_no
      WHERE status = 2 AND student_id = ?`;

      db.query(sql, [id], (err, saleLists: Array<any>) => {
        if(err) reject(err);
        else resolve(saleLists);
        });
      })
    }
  }


export default SaleListStorage;