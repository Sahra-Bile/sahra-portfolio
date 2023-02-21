import { useEffect, useState } from 'react'
import { IRepo } from '../../models/IRepo'
import { getRepo } from '../../services/repos';

export const Projects = () =>{

  const [projects, setProjects] = useState <IRepo[]>([]);

  useEffect( () =>{
    const getData = async() =>{
  
      let projectFromApi = await getRepo();
      setProjects(projectFromApi)
    }

    if(projects.length >0) return;
    getData()

  });

  let projectHtml = projects.filter((p) => p.description).map((project,i) => {
    
      return (<>
        <div className='project-container' key={i}>
          <h2>{project.name}</h2>
          <pre>{project.description}</pre>
          <pre>{project.clone_url}</pre>
          <p>{project.created_at}</p>
          <pre>{project.topics}</pre>
        </div>
      </>);
  });

   return(<>{projectHtml}</>)
}
