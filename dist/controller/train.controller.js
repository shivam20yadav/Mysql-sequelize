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
exports.updatetrain = exports.deletetrain = exports.addtrain = exports.gettrain = void 0;
const train_service = __importStar(require("../services/train.services"));
function gettrain(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield train_service.gettrain().then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(500).send(err);
        });
    });
}
exports.gettrain = gettrain;
function addtrain(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield train_service.addtrain(req.body).then((result) => {
            res.send('train added');
        }).catch((err) => {
            res.send(err);
        });
    });
}
exports.addtrain = addtrain;
function deletetrain(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield train_service.deletetrain(req.params.train_name).then((result) => {
            res.send('train deleted');
        }).catch((err) => {
            res.send(err);
        });
    });
}
exports.deletetrain = deletetrain;
function updatetrain(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield train_service.updatetrain(req.params.train_name, req.body).then((result) => {
            res.send('train updated');
        }).catch((err) => {
            res.send(err);
        });
    });
}
exports.updatetrain = updatetrain;
