import { useState } from 'react';

function Header({title}) {
    return <h1>{title ? title : "Next.js Foundations"}</h1>;
}

export default function HomePage() {
    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
    const [likes, setLikes] = useState(0);

    function handleLike() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="Hello, Next.js" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleLike}>Like</button>
            <span>({likes})</span>
        </div>
    );
}
