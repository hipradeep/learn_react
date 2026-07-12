
import { useState, useMemo } from 'react';
function Test() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);
    const sum = useMemo(() => {
        console.log('computing');
        return a + b;
    }, [a]);
    return (
        <div>
            <button onClick={() => setB(b + 1)}>B++</button>
            {sum}
        </div>
    );
}
export default Test;
