import style from './footer.module.css'
export default function Footer(props)
{
    return(
        <div className={style.footer}>
            <hr></hr>
            <h4>&copy; hmg 2025 {props.org}</h4>
        </div>
    )
}