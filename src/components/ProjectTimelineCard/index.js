// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectCardContainer,
  ProjectImage,
  ProjectTitleAndDurationContainer,
  Duration,
  ProjectDescription,
  VisitLink,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <ProjectCardContainer>
      <ProjectImage src={imageUrl} alt="project" />
      <ProjectTitleAndDurationContainer>
        <h1>{projectTitle}</h1>
        <div>
          <AiFillCalendar color="#171f46" />
          <Duration>{duration}</Duration>
        </div>
      </ProjectTitleAndDurationContainer>
      <ProjectDescription>{description}</ProjectDescription>
      <VisitLink href={projectUrl}>Visit</VisitLink>
    </ProjectCardContainer>
  )
}

export default ProjectTimelineCard
