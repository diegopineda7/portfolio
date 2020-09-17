import React from 'react'

export default function Project(props) {
  const { project, logosKeys, logosValues } = props;
  const { name, img, description, frameworks } = project;
  return (
    <div className='projectItem'>
      <h2>{name}</h2>
      <img
        src={img}
        alt={name}
        className='projectImg'
      />
      <p>{description}</p>
      <div className='projectFrameworks'>
        {
          frameworks.map(framework => {
            const index = logosKeys.indexOf(framework);
            const logo = logosValues[index];
            return (
              <img
                key={framework}
                src={logo}
                alt={framework}
                className='logoFramework'
              />
            )
          })
        }
      </div>
    </div>
  )
}
