import React from 'react';
import { useLocation } from 'react-router-dom';
const CollectionItemPage = () => {
    const location = useLocation();
    return (<div>
        {console.log(location)}
    </div>)
}
export default CollectionItemPage