import React,{useState} from 'react';
import Machinelearning from './machinelearning';
import Reactproject from './reactproject';


const Projects = () => {
    const [selectProject,setSelectProject] = useState('Machinelearning');

    const handleClick = (e) =>{
        e.preventDefault();
        if (e.target.value ==='Machinelearning'){
            setSelectProject('Machinelearning')
        }
        else{
            setSelectProject('Reactproject')
        }
    }
    
    const showProject = ()=>{
        if (selectProject ==='Machinelearning'){
            return <Machinelearning/>
        }
        else{
            return <Reactproject/>
        }
    }
    return (
        <div className='projects' id='portfolio'>
            <div className="project-heading">My Projects</div>
            <div className="project-nav">
                <div className={selectProject==='Machinelearning'? 'pnav pnav-name': 'pnav'}>
                    <button  onClick={handleClick} value='Machinelearning'>
                        Machine Learning
                    </button>
                </div>
                <div className={selectProject==='Reactproject'? 'pnav pnav-name': 'pnav'}>
                    <button onClick={handleClick} value='Reactproject'>
                        React Js
                    </button>
                </div>
            </div>
            {showProject()}
            

        </div>
    );
}

export default Projects;
