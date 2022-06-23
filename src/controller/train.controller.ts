import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import * as  train_service  from '../services/train.services'
import { train_data } from '../types/train.types'

export class train_controller{
  static async gettrain (req: Request, res: Response) {
    await train_service.train_service.gettrain().then((result: any) => {
        res.send(result)
      }).catch((err: any) => {
        res.status(500).send(err)
      })
  }
  static async addtrain (req: Request, res: Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    
    const new_train: train_data = req.body
    await train_service.train_service.addtrain(new_train).then((result: any) => {
      res.send('train added')
    }).catch((err: any) => {
      res.send(err)
    }
    )
  }
  static async deletetrain (req: Request, res: Response) {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      return res.status(422).json({ errors: error.array() })
    }
    await train_service.train_service.deletetrain(req.params.train_name).then((result: any) => {
      res.send('train deleted')
    }).catch((err: any) => {
      res.send(err)
    })
  }
  static async updatetrain (req: Request, res: Response) {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      return res.status(422).json({ errors: error.array() })
    }
    await train_service.train_service.updatetrain(req.params.train_name, req.body).then((result: any) => {
      res.send('train updated')
    }).catch((err: any) => {
      res.send(err)
    })
  }
}