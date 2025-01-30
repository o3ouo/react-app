import React, { useEffect } from 'react';

function Mount() {
    useEffect(() => {
        console.log("Component Mount!") // 처음 한 번 실행됨

        return () => {
            console.log("Component Unmount!");
        };
    }, []);

    return <div>Hello!</div>
}

export default Mount;