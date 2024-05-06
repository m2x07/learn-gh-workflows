function App() {
    return (
        <div className="m-auto mt-8 max-w-[620px] font-serif selection:bg-blue-200">
            <h1 className="my-5 text-center font-sans text-3xl font-bold text-gray-700">
                Test React App
            </h1>
            <p className="mx-2 break-normal text-xl text-gray-800">
                A sample react app to learn and apply github actions. What i was missing from a long
                time was knowing how CI/CD and pipelines and stuff works. So while going through the
                docs, i felt the need to have a dedicated repo where i can test all sort of github
                actions and related stuff.
            </p>
            <ul className="my-4 list-disc px-7 text-xl text-gray-700">
                <li>change #1</li>
            </ul>
            <div className="links m-auto w-fit text-xl text-blue-700">
                <a
                    href="https://github.com/m2x07"
                    rel="noreferrer"
                    target="_blank"
                    className="underline-offset-2 hover:underline">
                    github
                </a>
                {" | "}
                <a
                    href="https://twitter.com/_m2x07"
                    rel="noreferrer"
                    target="_blank"
                    className="underline-offset-2 hover:underline">
                    twitter
                </a>
            </div>
        </div>
    );
}

export default App;
