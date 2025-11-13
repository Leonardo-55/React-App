export default function students(props)
{
    return(
        <div>
            <h1>SSR - Dynamic</h1>
            <h2>Page Created at {props.timestamp}</h2>
        </div>
    )
}
export async function getServerSideProps() 
{
 const now = new Date();
 return{
   props: {'timestamp': now.toLocaleString()}
 }
}