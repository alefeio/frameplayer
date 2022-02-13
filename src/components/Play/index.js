import play from '../../assets/images/btnplay.png'
import pause from '../../assets/images/btnpause.png'
import advance from '../../assets/images/btnadvance.png'
import back from '../../assets/images/btnreturn.png'

export const Play = ({ status, pl, rt, ad }) => {
    return (
        <section>
            <img src={back} className="btn" onClick={rt} />
            <img src={status ? pause : play} className="btn" onClick={pl} />
            <img src={advance} className="btn" onClick={ad} />
        </section>
    )
}