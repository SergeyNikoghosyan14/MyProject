import { useState } from "react"; //vorpesi stananq default vichak
import SingleComment from '../../components/SingleComments/SingleComments' // import aneluc
                // heto mer komponenty texapoxum enq app.js
import {commentCreate} from '../../redux/about/actions'
import { useDispatch,useSelector } from "react-redux";
import uniqid from 'uniqid' // yurahayuk id e talis 

import './Comments.css'

function Comments(){
    const [textComment,setTextComment] = useState('')

    const comments = useSelector(state => {
        const {comments} = state
        return comments.comments // aystexov arden kpahpanvi bolor comentnery 

    });
    console.log('comments >', comments);

    const dispach = useDispatch()

    const hendleInput = (e) => {
        // console.log('inpt >>>', e.target.value)
        setTextComment(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const id = uniqid()
        dispach(commentCreate(textComment,id))
        setTextComment("")
    }

    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comment-item-create">
                <input type='text' className="card-input" placeholder="Hello" value={textComment} onChange={hendleInput} />
                <input type='submit' hidden />
            </form>
            {!!comments?.length && comments?.map( res => {
                return <SingleComment key={res.id} data={res} />
            })}
        </div>
    )
}

export default Comments
// վելյուն տալիս ենք սկզբնական արժեքը 
// հենդլսաբմիտում դիսպաչ ենք անում մեր էքշնը և փոխանցում տվյալները,դրանք են հենց քոմենթները և id 
// ինփութներից հետո  ավելացնում ենք մեր կոմենտները , որպեսզի տեսնենք էկրանին 
// այնուհետև գնում ենք SingleComment render ենք անում ամեն մի առանձին կոմենտը