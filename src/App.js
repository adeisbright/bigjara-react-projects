import { lazy, Suspense } from "react";
import ErrorBoundoundary from "./ErrorBoundary";
const Todos = lazy(() => import("./Components/TodoNoRedux/Todos"));

const App = () => {
    return (
        <ErrorBoundoundary>
            <Suspense fallback={<p>Loading ...</p>}>
                <Todos />
            </Suspense>
        </ErrorBoundoundary>
    );
};

export default App;
