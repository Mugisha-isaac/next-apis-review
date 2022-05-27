import {NextApiRequest,NextApiResponse} from 'next'


export default function getPersonById(req:NextApiRequest,res:NextApiResponse){
      res.send({message:'getting person by id'})
}