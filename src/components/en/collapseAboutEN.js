import React,{useState} from "react"

const CollapseAboutEN = ({ collapsed, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
    <div
        className={`transition-all duration-1000 ${isCollapsed ? ' block' : ' hidden'}`}
        aria-expanded={isCollapsed}
      >
        {children}
        
        

      </div>
      <button
        className="text-lg text-dark-blue inline"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
       <span className='text-gray'>{isCollapsed ? '' : '...'}</span> See {isCollapsed ? 'Less' : 'More'} 
      </button>
      
    </>
  );
};
export default CollapseAboutEN