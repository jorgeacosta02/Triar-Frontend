import NavBarLayout from '../../layouts/navBarLayout/navBarLayout'
import CompanyComp from '../../components/HomeComp/HomeComp'
import FooterComp from '../../components/footerComp/footerComp'

const HomePage = () => {
  return (
    <div>
      <NavBarLayout />
      <CompanyComp />
      <FooterComp />
    </div>
  )
}

export default HomePage
