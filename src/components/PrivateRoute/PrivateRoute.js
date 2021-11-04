import React, { useContext } from 'react'
import { Route, Redirect } from "react-router-dom"
import {AppContext} from "../GlobalAuth/GlobalAuth"

function PrivateRoute({component: ComponentProps, ...rest}) {
  const {current} = useContext(AppContext)
  return (
    <div>
      <Route
      
      {...rest}
      render={(propsRouter) => {
        return current ? (

          <ComponentProps {...propsRouter} />
        ) : (
          <Redirect to="/register" />
        )

      }}

      />
      
    </div>
  )
}

export default PrivateRoute
