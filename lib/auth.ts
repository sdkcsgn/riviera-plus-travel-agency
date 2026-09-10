import { cookies } from 'next/headers';
import crypto from 'crypto';
const COOKIE='rp_admin';
export async function isAdmin(){const c=await cookies(); return c.get(COOKIE)?.value === process.env.ADMIN_EMAIL;}
export async function login(email:string,password:string){if(email!==process.env.ADMIN_EMAIL || password!==process.env.ADMIN_PASSWORD) return false; const c=await cookies(); c.set(COOKIE,email,{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/',maxAge:60*60*8}); return true;}
export async function logout(){const c=await cookies(); c.delete(COOKIE);}
export function code(){return 'RP-'+crypto.randomBytes(4).toString('hex').toUpperCase();}
