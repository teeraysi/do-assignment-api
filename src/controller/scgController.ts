import AjaxResult from "../common/AjaxResult";

class SCGController {

  async findXYZValue(): Promise<AjaxResult> {
    
    const result = new AjaxResult();
    try {

      result.data = {
        id: 222
      };

      return result;
    } catch (err) {
      result.setError(err.message, 500);
    }
    
    return result;
  }
}

export const controller = new SCGController();
export default controller;
