import "./Bold.css"


function Bold({children}) {
    return (
        <span className="boldtext" style={{fontWeight: 'bold'}}>
            {children}
        </span>
    );
}

export {Bold};