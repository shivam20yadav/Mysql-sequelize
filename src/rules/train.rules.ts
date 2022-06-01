/**
 * this file is used for validtion using express validator to check the input data for train add/update/delete 
 */

import {check} from 'express-validator' // express validator is used for validation
import * as train_common from '../common/train.common.function'; // train common function is used for common validation for train

export const train_validation_add_train = [
     // add train
  check('train_name').not().isEmpty(),
  check('train_number').not().isEmpty(),
  check('train_name').custom((value: any) => {
    return train_common.findtrainname(value).then((result: any) => {
      if (result.length > 0) {
        throw new Error('train name already exists')
      }
      return true
    })
  }),
  check('train_number').custom((value: any) => {
      return train_common.findtrainnumber(value).then((result:any) => {
          if(result.length > 0){
                throw new Error('train number already exists')
          } 
            return true
      })
    })
]
export const train_validation_update_delete_train = [
    check('train_number').not().isEmpty(),
    check('train_name').custom((value: any) => {
        return train_common.findtrainname(value).then((result: any) => {
            if (result.length === 0) {
                throw new Error('train name does not exists')
            }
            return true
            }
        )
    })
]