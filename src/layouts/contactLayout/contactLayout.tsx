import styles from './_contactLayout.module.scss'
import ContactFormComp from '../../components/contactComp/contactFormComp'
import ContactDataComp from '../../components/contactComp/contactDataComp'

const ContactLayout = () => {
  return (
    <div className={styles.container}>
      <ContactDataComp />
      <ContactFormComp />
    </div>
  )
}

export default ContactLayout
