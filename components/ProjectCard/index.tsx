import React from 'react';
import Link from 'next/link';
import { GoLinkExternal } from 'react-icons/go';

interface CardProps {
  title: string;
  content?: string;
  link?: string;
  path?: string;
  showView?: boolean;
  children?: React.ReactNode;
  color?: string;
}

export const Card = ({ title, content, link, showView }: CardProps) => {
  return (
    // ProjectCard
    <div className='card'>
      {link && (
        <div className='projectCardTitle'>
          <Link href={link} target='_blank' rel='noopener noreferrer'>
            {title}
          </Link>
        </div>
      )}
      <div>
        <p>{content}</p>
      </div>

      {showView && (
        <div className='btn-small'>
          {link && (
            <Link href={link} target='_blank' rel='noopener noreferrer'>
              {<span className='btn-small-txt'>View</span>}
              {showView && <GoLinkExternal className='linkExternal' />}
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
