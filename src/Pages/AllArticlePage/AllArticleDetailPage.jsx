import React from 'react';
import { useParams } from 'react-router';

const AllArticleDetailPage = () => {
    const {_id} = useParams()
    console.log(_id);
    return (
        <div>
            
        </div>
    );
};

export default AllArticleDetailPage;