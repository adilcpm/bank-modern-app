import styles from '../style'
import { clients } from '../constants'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, index) => (
          <div key={client.id} className={`${styles.flexCenter} sm:min-w-[192[px] min-w-[120px] flex-1`}>
          <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain' />
        </div>
        ))}
      </div>
    </section>
  )
}

export default Clients