import NavBarLayout from '../../layouts/navBarLayout/navBarLayout'
import HomeComp from '../../components/homeComp/HomeComp'
import FooterComp from '../../components/footerComp/footerComp'

const HomePage = () => {
  return (
    <div>
      <NavBarLayout />
      <HomeComp />
      <FooterComp />
    </div>
  )
}

export default HomePage
