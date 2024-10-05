import postmark from 'postmark';
import { POSTMARK_KEY } from '$env/static/private';

//generate and export client
export const emailClient = new postmark.ServerClient(POSTMARK_KEY);
