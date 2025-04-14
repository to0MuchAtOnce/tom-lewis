import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdDarkMode } from 'react-icons/md';
import { IconContext } from 'react-icons';
import {
  HeaderContainer,
  HeaderLinkContainer,
  LogoContainer,
} from './Header.styles';

type HeaderProps = {
  toggleTheme: () => void;
};

export default function Header({ toggleTheme }: HeaderProps) {
  const router = useRouter();
  return (
    <HeaderContainer>
      <LogoContainer>
        <span className='LogoSidebarPad'>Tom Lewis</span>
        <span className='LogoFullStop'>.</span>
      </LogoContainer>

      <HeaderLinkContainer>
        <Link
          href='/'
          className={`MobileMenuItem ${
            router.pathname === '/' ? 'selected' : ''
          }`}
        >
          Blog
        </Link>
        <Link
          href='/projects'
          className={`MobileMenuItem ${
            router.pathname === '/projects' ? 'selected' : ''
          }`}
        >
          Projects
        </Link>
        <Link
          href='/about'
          className={`MobileMenuItem ${
            router.pathname === '/about' ? 'selected' : ''
          }`}
        >
          About
        </Link>
        <IconContext.Provider value={{ className: 'HeaderThemeIcon' }}>
          <button className='HeaderToggleThemeButton' onClick={toggleTheme}>
            <MdDarkMode className='headerThemeIcon' />
          </button>
        </IconContext.Provider>
      </HeaderLinkContainer>
    </HeaderContainer>
  );
}
