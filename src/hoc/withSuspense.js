import React, { Suspense } from "react";
import Preloader from "../components/common/preloader/Preloader";

const WithSuspense  = (Component) => {
    return (props) => {
        return (
            <Suspense fallback={<Preloader />}>
                <Component {...props} />
            </Suspense>
        )
    }

}

export default WithSuspense