import {NextApiRequest,NextApiResponse} from 'next';

export default function getAllVehicles(req:NextApiRequest,res:NextApiResponse){
       res.json({message:'hello world', method:req.method})
}