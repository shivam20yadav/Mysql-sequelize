import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import * as user_services from '../services/user.services'
import { user_data } from '../types/user.types'

export class user_controller{
  static async getuser (req: Request, res: Response) {
    await user_services.user_service.getuser().then((result) => {
      res.send(result)
    }).catch((err) => {
      res.status(500).send(err)
    })
  }
  static async adduser (req: Request, res: Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    const new_user: user_data = req.body
    await user_services.user_service.adduser(new_user).then((result) => {
      res.send('user added')
    }).catch((err) => {
      res.send(err)
    })
  }
  static async deleteuser (req: Request, res: Response) {
    const username: string = req.params.username
    await user_services.user_service.delete_user(username).then((result) => {
      res.send('user deleted')
    }
    ).catch((err) => {
      res.send(err)
    })
  }
  static async updateuser (req: Request, res: Response) {
    const err = validationResult(req)
    if (!err.isEmpty()) {
      return res.status(422).json({ errors: err.array() })
    }
    const username: string = req.params.username
    await user_services.user_service.update_user(username, req.body).then((result) => {
      res.send('user updated')
    }).catch((err) => {
      res.send(err)
    })
  }
}