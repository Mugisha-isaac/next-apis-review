import {NextApiRequest,NextApiResponse} from 'next';


export default async function getAllPeople(req:NextApiRequest,res:NextApiResponse){
    res.send({message:'hello world'});
}