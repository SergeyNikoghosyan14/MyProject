import { useState, useEffect } from "react" // amen angam erb ga nor teqst menq petq e texavorenq 
//popoxakani mej,dra hamar ogtagorcum enq enq hook-ery
import './SingleComments.css'
import { useDispatch } from "react-redux"
import commentDelete from "../../redux/about/actions"

function SingleComment({data}){ // amen komenti hamar stanum enq teqsty ev ID
    // console.log("single comment props >", props)
    const [commentText,setCommentText] = useState('')
    const {text,id} = data
    const dispach = useDispatch()

    const handleUpdate = (e) => {
        e.preventDefault()
        console.log('submit ->>', commentText )
    } 

    const handleDelete = (e) => {
        // console.log('click')
        e.preventDefault();
        dispach(commentDelete(id))
    }



    useEffect(() => { //amen angam erb poxvi teqsty ajn kavelacvi 
        if(text){
            setCommentText(text)
        }
    },[text])

    const hendleInput = (e) => {//aysinqn erb menq kgrenq inch vor ban hin kwmentic heto
                                //ayn aftomat poxancvelu e yntacik steyt
                                // popoxakan commentText-y
        setCommentText(e.target.value)
    }

    return(
        <form onSubmit={handleUpdate} className="comment-item" >
            <span onClick={handleDelete} className="comment-item-delete">X</span>
            <input type="text" value={commentText} onChange={hendleInput} />
            <input type='submit' hidden />
        </form>
    )
}

export default SingleComment

//erb menq grum enq koment ajn aftomat linum e render ev avelacnum 
// popoxakan commentText-i mej 

//hima uzum enq tarmacnel erb uzum enq mer komenty,
// usti formi mej bacum enq onSubmit functian