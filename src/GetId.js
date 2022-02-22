import {useParams} from 'react-router-dom';
import Node from './Node';
import ErrorBoundary from './ErrorBoundary';

function GetId() {
    const { id = 0 } = useParams();

    return (
        <ErrorBoundary>
            <Node id={id} />
        </ErrorBoundary>
    );
}

export default GetId;
