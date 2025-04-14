import Link from 'next/link';
import { FooterContainer } from './Footer.styles';
import { FaGithub, FaBluesky } from 'react-icons/fa6';

export default function Footer() {
  return (
    <FooterContainer>
      <Link
        passHref
        href='https://github.com/to0MuchAtOnce/'
        className='FooterMenuItem footerIconColor'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaGithub />
      </Link>

      <Link
        passHref
        href='https://bsky.app/profile/to0muchatonce.bsky.social'
        className='FooterMenuItem footerIconColor'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaBluesky />
      </Link>
    </FooterContainer>
  );
}
