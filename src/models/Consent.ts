import { Model,fn, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';
import moment from "moment";

export interface ConsentInstance extends Model {
    id: number;
    creationdatetime: string;
    status: string;
    statusupdatedatetime: string;
    permissions: string[];
    expirationdatetime: string;
    transactionfromdatetime: string;
    transactiontodatetime: string;
}

export const Consent = sequelize.define<ConsentInstance>('Consent', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    creationdatetime: {
        type: DataTypes.STRING,
        defaultValue: moment().format('YYYY-MM-DD hh:mm:ss')
    },
    status: {
        type: DataTypes.STRING
    },
    statusupdatedatetime: {
        type: DataTypes.STRING
    },
    permissions: {
        type: DataTypes.STRING
    },
    expirationdatetime: {
        type: DataTypes.STRING
    },
    transactionfromdatetime: {
        type: DataTypes.STRING
    },
    transactiontodatetime: {
        type: DataTypes.STRING
    }

}, {
    tableName: 'consents',
    timestamps: false
});