import {NextApiRequest,NextApiResponse} from 'next';

export default function getAllVehicles(req:NextApiRequest,res:NextApiResponse){
    if(req.method !=="GET"){
        res.status(500).json({message:'invalid method request'})
    }
    res.json({message:'hello world', method:req.method})
}