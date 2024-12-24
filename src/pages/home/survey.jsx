
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function Survey(){
    const {questionID} = useParams()

    const questionIDInt =parseInt(questionID)
    const prevQuest =questionIDInt ===1 ? 1 :questionIDInt-1
    const nextQuest =questionIDInt +1
    return(<div>
         
         <Link to={`/survey/${prevQuest}`}>precedent</Link>
         {questionIDInt === 10 ? (<Link to={`/result`}>Result</Link>)
          :(<Link to={`/survey/${nextQuest}`} >suivant</Link>)}
        <h2>voici ID {questionID}</h2>
    </div>)
}

export default Survey 