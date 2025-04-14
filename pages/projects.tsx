import type { NextPage } from 'next';
import { projects } from '../pages/api/ProjectsData';
import Card from '../components/ProjectCard';
import { Cards } from '../components/ProjectCard/ProjectCard.styles';
import Container from '../components/Container';

const Projects: NextPage = () => {
  return (
    <>
      <Container title='Projects'>
        <div className='headingLg'>Projects</div>
        <div className='cards-container'>
          {projects.map((project) => (
            <div key={project.id}>
              <Cards>
                <Card
                  title={project.title}
                  content={project.content}
                  link={project.link}
                  showView={true}
                />
              </Cards>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Projects;
