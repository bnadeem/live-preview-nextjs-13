import { ContentfulLivePreview } from "@contentful/live-preview";


export default function Heading({text, sysId, fieldName} : {text: string, sysId: string, fieldName: string}) {
    return (
        <div>
            <h1 className="text-4xl font-bold" {...ContentfulLivePreview.getProps({ entryId: sysId, fieldId: fieldName })} >{text}</h1>
        </div>
    )
}