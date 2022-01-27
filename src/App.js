import { lazy, Suspense } from "react";
const Todos = lazy(() => import("./Components/TodoNoRedux/Todos"));

const App = () => {
    return (
        <Suspense fallback={<p>Loading ...</p>}>
            <Todos />
        </Suspense>
    );
};

export default App;
