import s from  './footer.module.css'

function Footer () {
    return (
    <footer className={s.footer}>
        <div className={s.container}>
            <div className={s.wave}></div>
            <div className={s.wave}></div>
            <div className={s.wave}></div>
        </div>
        <div className={s.footer_content}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
        </div>
    </footer>
    )
}

export default Footer