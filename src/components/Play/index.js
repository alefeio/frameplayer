import play from '../../assets/images/btnplay.png'
import pause from '../../assets/images/btnpause.png'

export const Play = ({ status, action }) => {
    return (
        <section>
            <img src={status ? pause : play} className="btn" onClick={action} />
        </section>
    )
}