import React from "react";
import './Error.css'

const ErrorPage=()=>{
  return (
    <div className="error">
      <h1 className="title-error">404</h1>
      <span className="desc-error">Page non trouvée !</span>
    </div>
  )
}

export default ErrorPage;