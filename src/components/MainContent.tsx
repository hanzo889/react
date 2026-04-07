import Image from "./Image"
import ContentImage from "./ImageContent"
import HelpFeel from "./HelpFeel"
import Image2 from "./Image2"

export default function MainContent(){
    return(
        <div className="container-Main">
            <Image/>
            <ContentImage/>
            <HelpFeel/>
            <Image2/>
        </div>
    )
}