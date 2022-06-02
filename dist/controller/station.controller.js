"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletestation = exports.updatestation = exports.addstation = exports.getstation = void 0;
const express_validator_1 = require("express-validator");
const station_services = __importStar(require("../services/station.service"));
function getstation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield station_services.getdata().then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(500).send(err);
        });
    });
}
exports.getstation = getstation;
function addstation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const new_station = req.body;
        yield station_services.addstation(new_station).then((result) => {
            res.send('station added');
        }).catch((err) => {
            res.send(err);
        });
    });
}
exports.addstation = addstation;
function updatestation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        yield station_services.updatestation(req.params.station_name, req.body).then((result) => {
            res.send('station updated');
        }).catch((err) => {
            res.send(err);
        });
    });
}
exports.updatestation = updatestation;
function deletestation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const error = (0, express_validator_1.validationResult)(req);
        if (!error.isEmpty()) {
            return res.status(422).json({ errors: error.array() });
        }
        yield station_services.deletestation(req.params.station_name).then((result) => {
            res.send('station deleted');
        }).catch((err) => {
            res.send(err);
        });
    });
}
exports.deletestation = deletestation;
