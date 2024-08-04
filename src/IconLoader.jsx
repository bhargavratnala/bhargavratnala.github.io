import { Suspense, lazy } from "react";

function IconLoader(props){

    const Icon = lazy(() => import(`./asserts/icons/${props.path}.jsx`));

    return (
        <Suspense fallback={<div>...</div>}>
            <Icon />
        </Suspense>
    )
}

export default IconLoader;