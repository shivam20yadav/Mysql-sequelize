import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import * as station_services from '../services/station.service'

export async function getstation (req: Request, res: Response) {
  await station_services.getdata().then((result: any) => {
    res.send(result)
  }).catch((err: any) => {
    res.status(500).send(err)
  })
}
export async function addstation (req: Request, res: Response) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  await station_services.addstation(req.body).then((result: any) => {
    res.send('station added')
  }).catch((err: any) => {
    res.send(err)
  })
}
export async function updatestation (req: Request, res: Response) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  await station_services.updatestation(req.params.station_name, req.body).then((result: any) => {
    res.send('station updated')
  }).catch((err: any) => {
    res.send(err)
  })
}
export async function deletestation (req: Request, res: Response) {
  const error = validationResult(req)
  if (!error.isEmpty()) {
    return res.status(422).json({ errors: error.array() })
  }
  await station_services.deletestation(req.params.station_name).then((result: any) => {
    res.send('station deleted')
  }).catch((err: any) => {
    res.send(err)
  })
}
