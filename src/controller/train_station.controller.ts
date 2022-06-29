import * as service from '../services/train_station_service'
import { Request, Response } from 'express'


export async function get_data_by_train (req: Request, res: Response) {
  await service.train_station_service.getdata().then((result: any) => {
    res.send(result)
  }).catch((err: any) => {
    res.status(500).send(err)
  })
}
export async function train_station_name (req: Request, res: Response) {
  await service.train_station_service.get_train_name_and_station_name().then((result: any) => {
    res.send(result)
  }).catch((err: any) => {
    res.status(500).send(err)
  })
}
export async function add_data (req: Request, res: Response) {
    await service.train_station_service.adddata(req.body).then((result: any) => {
        res.send('data added')
    }).catch((err: any) => {
      res.send(err)
    })
}