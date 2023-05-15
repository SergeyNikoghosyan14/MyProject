//  useSelector օգտագործելու ենք mapStateProps ֆունկցիայի փոխարեն
import { useDispatch, useSelector } from 'react-redux'
import {inputText} from '../../redux/about/actions'
import './Title.css'

function Title(){
    const text = useSelector(state => {
        const {text} = state
        return text.text
    })
    const dispach = useDispatch()

    const handleChange = (e) => {
        dispach(inputText(e.target.value)) // մեր տեքստը ռեդյուսրին փոխանցելու համար 
    }

    return(
        <div className='card-title'>
            <div className='card-titel-top'>
                <input className='inputtitel' type='text' onChange={handleChange} />
            </div>
            <p>{text}</p>
        </div>
    )

}

export default Title

// օգտագործելով 2 հուկերը ինտեգրեցինք պահեստին ռեդաքսի 
//  հուկերը օգտագործելով արդեն չենք օգտագործում ֆունքցիա connect-ը