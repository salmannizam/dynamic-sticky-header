
'use client';

import { useRouter } from "next/navigation";
import Table from "./table";

export default function Home() {
  const router = useRouter();
  return (
   <>
   <button onClick={()=>router.push('/horizontal')}>horizontal</button>
   <button  onClick={()=>router.push('/vertical')}>vertical</button>

   </>
  );
}
