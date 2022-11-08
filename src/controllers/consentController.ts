import { Request, Response } from 'express';
import {Consent} from '../models/Consent';

export const getlist = async (req: Request, res: Response) => {
    let data = await Consent.findAll();
    res.json({data});
}

export const getConsent = async (req: Request, res: Response) => {
    let {id} = req.params;

    let consent = await Consent.findByPk(id);
    if(consent){
        res.json({ consent });//Se encontrar eu mando ela com toda informação do id
    }else {
        res.json({ error: 'Consentimento não encontrada' });//caso id nao encontrado eu mando um erro
    }
    
}

export const createConsent = async (req: Request, res: Response) => {
    let {status, permissions } = req.body;
    
   let newConsent = await Consent.create({status, permissions}); 
   
       res.json({ id: newConsent.id, status, permissions});
}

export const removeConsent = async (req: Request, res: Response) => {
    let { id } = req.params; //pegando o id dos parametros

    await Consent.destroy({where: {id:id}});
    res.json({});//nao retorna nada pois deletamos
}