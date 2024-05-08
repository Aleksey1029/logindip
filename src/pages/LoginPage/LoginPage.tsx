import { Link, useNavigate } from 'react-router-dom'
import { AppButton } from '../../components/UI/AppButton/AppButton'
import { AppInput } from '../../components/UI/AppInput/AppInput'
import { LoginWith } from '../../components/LoginWith/LoginWith'
import { AppHeading } from '../../components/Typography/AppHeading/AppHeading'
import { SCLoginPage } from './LoginPage.styled'
import * as yup from 'yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { changeUser } from '../../store/slices/userSlice'
import { RootState } from '../../store/store'

interface ILoginForm {
	useremail: string
	userpassword: string
}

const loginFormSchema = yup.object({
	useremail: yup.string().required('Обязательное поле'),
	userpassword: yup
		.string()
		.required('Введите пароль')
		.min(8, 'Не менее 8 символов'),
})

const mockUser = {
	mail: 'alex123@mail.ru',
	password: '12345678ll',
	user_id: 1,
	name: 'Vasya',
	reg_date: new Date().toISOString(),
	city: 'Tashkent',
}

export const LoginPage = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginFormSchema),
		defaultValues: { useremail: '', userpassword: '' },
	})

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const user = useSelector((state: RootState) => state.userSlice.user)

	const onLoginFormSubmit: SubmitHandler<ILoginForm> = data => {
		if (data.useremail == mockUser.mail && data.userpassword == '12345678ll') {
			navigate('/main')
		} else {
			navigate('/')
			alert('Неверные данные')
		}

		dispatch(changeUser(mockUser))
	}

	return (
		<SCLoginPage>
			<AppHeading headingText={'Аутентификация'} headingType={'h1'} />
			<form onSubmit={handleSubmit(onLoginFormSubmit)}>
				<Controller
					name='useremail'
					control={control}
					render={({ field }) => (
						<AppInput
							isError={errors.useremail ? true : false}
							errorMessage={errors.useremail?.message}
							type={'email'}
							placeholder={'Email или имя пользователя'}
							{...field}
						/>
					)}
				/>

				<Controller
					name='userpassword'
					control={control}
					render={({ field }) => (
						<AppInput
							isError={errors.userpassword ? true : false}
							errorMessage={errors.userpassword?.message}
							type={'password'}
							placeholder={'Пароль'}
							{...field}
						/>
					)}
				/>
				<div className='RememberAdmin'>
					<label>
						<AppInput type={'checkbox'} placeholder={'Запомнить'} />
						Запомнить
					</label>
					<Link to='#'>Забыли пароль?</Link>
				</div>
				<AppButton buttonText={'Вход'} type={'submit'} />
			</form>
			<div className='registration'>
				<p>или войдите через</p>
				<LoginWith />
			</div>
		</SCLoginPage>
	)
}
