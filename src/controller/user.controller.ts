import express, { Express, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import * as user_service from '../services/user.services';

export async function getuser(req: Request, res: Response ) {
    await user_service.getuser().then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    });
}
export async function adduser(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const new_user = {
        username: req.body.username,
        userpassword: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }
    await user_service.adduser(new_user).then((result) => {
        res.send("user added");
    }).catch((err) => {
        res.send(err);
    });
}
export async function deleteuser(req: Request, res: Response) {
    const username: string = req.params.username;
    await user_service.delete_user(username).then((result) => {
        res.send("user deleted");
    }
    ).catch((err) => {
        res.send(err);
    });
}
export async function updateuser(req: Request, res: Response) {
    const username: string = req.params.username;
    await user_service.update_user(username, req.body).then((result) => {
        res.send("user updated");
    }).catch((err) => {
        res.send(err);
    });
}