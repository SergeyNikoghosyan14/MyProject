import './RegisterPage.js'
import {useForm} from 'react-hook-form'
import Input from '../../components/Input/input.js'
import './RegisterPage.css'

export default function RegisterPage() {
    const {handleSubmit, control} = useForm()
    const onSubmit = (data) => console.log(data)


    const fakeData= [
        {
            name:'firstname',
            type:'text',
            placeholder:'first name',
            id:1
        },
        {
            name:'lastname',
            type:'text',
            placeholder:'last name',
            id:2
        },
        {
            name:'email',
            type:'email',
            placeholder:'email',
            id:3
        },
        {
            name:'password',
            type:'password',
            placeholder:'password',
            id:4
        }
    ]
    
    return (
        <>
            <div className='formheader'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {fakeData.map(index => <Input control={control} key={index.id} name={index.name} type={index.type} placeholder={index.placeholder} /> )}


                    {/* <Input name='firstName' control={control} type="text" placeholder='first name' />                    
                    <Input name='lastName' control={control} type="text" placeholder='last name' />   
                    <Input name='email' control={control} type="email" placeholder='email' />   
                    <Input name='password' control={control} type="password" placeholder='password' />    */}
                </form>
                <input type="submit" value={'Submit'} />
            </div>
        </>
    )
}