import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductQuery } from './hooks/useProduct';

const Detail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading, isError, error } = useProductQuery(id);

    return (
        <div>
            <button type="button" onClick={() => navigate("/")}>Back</button>
            <div>
                <h2>{data?.title}</h2>
                <img src={data?.img} alt={data?.title} />
                <h4>{data?.price}￦</h4>
                <ul>
                    {data?.size.map((sizes, idx) => (
                        <li key={idx}>{sizes}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Detail;