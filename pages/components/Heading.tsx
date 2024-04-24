export default function Heading({text} : {text: string}) {
    return (
        <div>
            <h1 className="text-4xl font-bold">{text}</h1>
        </div>
    )
}