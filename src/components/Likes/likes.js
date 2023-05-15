import { connect } from "react-redux";
import './likes.css'
import {incrementLikes,decrementLikes} from '../../redux/about/actions'


function Likes (props) {
    return(
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>❤ {props.likes}  </button>
            <button disabled={props.likes === 0} onClick={props.onDecrementLikes} ></button>
        </div>
    )
}


function mapStateToProps(state){
    const {likes} = state
    return{
        likes: likes.likes
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Likes)

// Այսպես ստանում ենք մեր ֆունքցիանների mapDispatchToProps
// այստեղ միացնում ենք մեր կոմպոնենտը redux-ին հատուկ ֆունկցիայով connect
// Օգտագործում ենք հատուկ ֆունկցիա mapStateToProps, որպեսզի կարողանանք ուղարկել մեր պահեստից 