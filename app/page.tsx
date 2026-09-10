import {db} from '@/lib/db';
import HomeClient from '@/components/HomeClient';
export const dynamic='force-dynamic';
export default async function Page(){const tours=await db.tour.findMany({where:{active:true},orderBy:{id:'asc'}}); return <HomeClient tours={tours}/>}
