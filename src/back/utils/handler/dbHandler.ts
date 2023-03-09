import conn from "../../db/conn";
import Handler from "./handler";

export default class dbHandler extends Handler{
    protected db;
    constructor(){
        super()
        this.db = conn;
    }
}