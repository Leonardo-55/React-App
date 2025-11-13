import {useRouter} from 'next/router'
export default function students()
{
    const router=useRouter()
    const studid=router.query.id
    return(
        <main>
            <h1>Students Details with Id - {studid}</h1>
        </main>
    )
}