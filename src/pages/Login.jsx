import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Context } from '../contexts/AuthContext'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const { register, handleSubmit } = useForm()

    const { setIsAuthenticated } = useContext(Context)
    const navigate = useNavigate()    

    function login(data) {
        if(data.email == 'fabriciopstos@outlook.com' && data.password == 'qwe123123') {
            setIsAuthenticated(true)
            navigate('home')
        }
    }

    return (
        <>
            <div style={{ backgroundColor: '#2563EA' }} className='h-screen flex justify-content-center align-items-center px-3'>
                <form 
                    style={{ backgroundColor: '#F9FAFB' }} 
                    className='col-12 md:col-3 p-3 border-round-md'
                    onSubmit={handleSubmit(login)}
                >
                    <h3 className='text-center text-4xl'>Seja bem-vindo</h3>
                    <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>Email</label>
                    <InputText {...register('email', {required: true})} id='email' placeholder='email@example.com' className='mb-3 w-full' />
                    <label htmlFor="password" className='block uppercase font-bold text-sm mb-1'>Senha</label>
                    <div className='mb-3'>
                        <IconField>
                            <InputIcon className={`pi ${showPassword ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`} onClick={() => setShowPassword(!showPassword)} />
                            <InputText {...register('password', {required: true})} id='password' type={showPassword ? 'text' : 'password'} placeholder='*******' className='w-full' />
                        </IconField>
                    </div>
                    <Button className='w-full' label='Entrar' type='submit' />
                </form>
            </div>
        </>
    );
}

export default Login;