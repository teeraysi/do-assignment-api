import AjaxResult from "../common/AjaxResult";
import { findPlace } from '../services/api/placeApi';

class SCGController {

  /** Assignment 2 */
  async findXYZValue(): Promise<AjaxResult> {

    const isLetter = (str) => { 
      return str.toString().match(/^[A-Za-z]+$/) !== null;
    }

    const getSeriesValue = (nPosition) => {
      return 3 + nPosition * (nPosition + 1);
    }

    const inputs = ['X', 5 , 9, 15, 23 , 'Y', 'Z'];
    const result = new AjaxResult();
    try {
      // Equalation
      //  [X0] = 3
      //  [Xn] = [X0] + (n * (n + 1))

      const resultData = [];
      
      inputs.forEach((val, idx) => {
        const bLetter = isLetter(val);
        if (bLetter) {
          resultData.push({
            key: val,
            value: getSeriesValue(idx)
          });
        }
        // console.log(val + ' is letter = ', bLetter);
      });
      

      result.data = resultData;

      return result;
    } catch (err) {
      result.setError(err.message, 500);
    }
    
    return result;
  }

  /**
   * Find places by Type: Restaurant
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
