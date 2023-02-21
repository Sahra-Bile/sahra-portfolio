import axios from 'axios';
import { IRepo } from '../models/IRepo';

export const getRepo =  async():Promise<IRepo[]> =>{
 
  let response = await axios.get('https://api.github.com/users/sahra-bile/repos')

  return  response.data;
}
