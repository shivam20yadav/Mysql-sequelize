import * as station_services from '../services/station.service'
import { Request, Response } from 'express'


// export async function get_data_by_train (req: Request, res: Response) {
//   await station_services.getdata().then((result: any) => {
//     res.send(result)
//   }).catch((err: any) => {
//     res.status(500).send(err)
//   })
// }
// export async function get_data_by_station (req:Request,res:Response){
//     // await station_services.getdata_by_station(req.params.station_name).then((result:any)=>{
//     //     res.send(result)
//     // }).catch((err:any)=>{
//     //     res.status(500).send(err)
//     // })
// }