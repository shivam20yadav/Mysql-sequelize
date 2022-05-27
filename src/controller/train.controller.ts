import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import * as train_service from '../services/train.services'

export async function gettrain (req: Request, res: Response) {
  await train_service.gettrain().then((result: any) => {
    res.send(result)
  }).catch((err: any) => {
    res.status(500).send(err)
  })
}
export async function addtrain (req: Request, res: Response) {
  await train_service.addtrain(req.body).then((result: any) => {
    res.send('train added')
  }).catch((err: any) => {
    res.send(err)
  }
  )
}
export async function deletetrain (req: Request, res: Response) {
  await train_service.deletetrain(req.params.train_name).then((result: any) => {
    res.send('train deleted')
  }).catch((err: any) => {
    res.send(err)
  })
}
export async function updatetrain (req: Request, res: Response) {
  await train_service.updatetrain(req.params.train_name, req.body).then((result: any) => {
    res.send('train updated')
  }).catch((err: any) => {
    res.send(err)
  })
}
