import Card from "../Component/Card";
function Documentation(){
    const arr = [
        {
            id : "Bash",
            title : "Bash Script",
            docs : "This is Bash Script"
        },
        {
            id : "html",
            title : "HTML",
            docs : "This is HTML"
        },
        {
            id:"CSS",
            title : "CSS",
            docs : "This is CSS"
        },
        {
            id:"js",
            title : "Javascript",
            docs : "This is Javascript"
        }

    ]

    const fun = (obj) => {
        return (
            <Card 
            id = {obj.id}
            title = {obj.title}
            docs = {obj.docs}
        />
        )
    }
    return (
        <div id="documentation">
            {arr.map(fun)}            
        </div>

    )
}
export default Documentation;