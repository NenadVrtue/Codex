import React,{useState} from "react"

const Collapse = ({ collapsed, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
    <div
        className={`collapse-content ${isCollapsed ? 'block' : 'hidden'}`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
      <button
        className="text-xl text-dark-blue mt-9"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
       <span className='text-light-blue text-3xl'>{isCollapsed ? '- ' : '+ '}</span> Prikaži {isCollapsed ? 'Manje' : 'Više'} 
      </button>
      
    </>
  );
};
export default Collapse