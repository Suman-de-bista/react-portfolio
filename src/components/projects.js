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
        <div className='projects'>
            <div className="project-heading">My Portfolio</div>
            <div className="project-nav">
                <div className='pnav'>
                    <button  onClick={handleClick} value='Machinelearning'>
                        Machine Learning
                    </button>
                </div>
                <div className="pnav">
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
