import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import * as station_services from '../services/station.service'
import { station_data } from '../types/station.types'
export class station_model{
  static async getstation (req: Request, res: Response) {
    await station_services.station_service.getdata().then((result: any) => {
      res.send(result)
    }).catch((err: any) => {
      res.status(500).send(err)
    })
  }
  static async addstation (req: Request, res: Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    const new_station: station_data = req.body
    await station_services.station_service.addstation(new_station).then((result: any) => {
      res.send('station added')
    }).catch((err: any) => {
      res.send(err)
    })
  }
  static async updatestation (req: Request, res: Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    await station_services.station_service.updatestation(req.params.station_name, req.body).then((result: any) => {
      res.send('station updated')
    }).catch((err: any) => {
      res.send(err)
    })
  }
  static async deletestation (req: Request, res: Response) {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      return res.status(422).json({ errors: error.array() })
    }
    await station_services.station_service.deletestation(req.params.station_name).then((result: any) => {
      res.send('station deleted')
    }).catch((err: any) => {
      res.send(err)
    })
  }
}