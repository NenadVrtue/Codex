import React,{useState} from "react"

const CollapseEN = ({ collapsed, children }) => {
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
        className="text-xl text-dark-blue mt-9 z-10"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
       <span className='text-light-blue text-3xl'>{isCollapsed ? '- ' : '+ '}</span> See {isCollapsed ? 'Less' : 'More'} 
      </button>
      
    </>
  );
};
export default CollapseEN