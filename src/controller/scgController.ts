import AjaxResult from "../common/AjaxResult";
import { findPlace } from '../services/api/placeApi';

class SCGController {

  /** Assignment 2 */
  async findXYZValue(): Promise<AjaxResult> {
    const inputs = ['X', 5 , 9, 15, 23 , 'Y', 'Z'];
    const result = new AjaxResult();
    try {

      // inputs.forEach((val, idx) => {

      // })
      

      result.data = [
        {key: 'X', value: 3},
        {key: 'Y', value: 33},
        {key: 'Z', value: 45},
      ];

      return result;
    } catch (err) {
      result.setError(err.message, 500);
    }
    
    return result;
  }

  /**
   * Find places by Type: Restuarant
   * Allow find by a given keyword.
   * @param keyword Keyword to search.
   * @returns JSON data.
   */
  async findPlace(keyword: string): Promise<string> {

    const placeResult = await findPlace(keyword);
    return placeResult;
  }  
}


export const controller = new SCGController();
export default controller;
