
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import pict from "../../assets/default.png"


const StyledLink =styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) => props.$isFullLink && `
           color: white; border-radius: 5px; background-color: ${colors.primary};`}

`

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  
`
const ImgWrapper =styled.div`
  display :flex ;
  flex-direction : wrapper;
`

function Header() {
  return (
    <NavContainer>
        <ImgWrapper>
            <Link to="/">
              <HomeLogo src={pict} />
            </Link>
            <h2>Shiny </h2>
        </ImgWrapper>
      
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelance">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header