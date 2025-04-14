import { NextApiResponse } from 'next';
import { getSortedPostsData, PostData as SitemapPostData } from '../lib/posts';

const URL = 'https://tom-lewis.dev';

function generateSiteMap(posts: SitemapPostData[]): string {
  const currentDate = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     <url>
       <loc>${URL}/blog</loc>
       <lastmod>${currentDate}</lastmod>
       <priority>1</priority>
     </url>
      <url>
       <loc>${URL}/projects</loc>
       <lastmod>${currentDate}</lastmod>
       <priority>0.5</priority>
     </url>
      <url>
       <loc>${URL}/about</loc>
       <lastmod>${currentDate}</lastmod>
       <priority>0.3</priority>
     </url>
     ${posts
       .map(({ id, date }) => {
         return `
           <url>
               <loc>${`${URL}/blog/${id}`}</loc>
               <lastmod>${date}</lastmod>
           </url>
         `;
       })
       .join('')}
   </urlset>
 `;
}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  const posts: SitemapPostData[] = await getSortedPostsData();

  // Generate the sitemap
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
