import { FC, HTMLInputTypeAttribute } from "react"
import styles from './TextField.module.scss'
import { roboto } from "@/app/layout"
import cn from 'classnames'

const cx = cn.bind(styles)

interface IProps {
	value: string
	name: string
	onChange: React.ChangeEventHandler<HTMLInputElement> 
	type?: HTMLInputTypeAttribute
	placeholder?: string
	label?: string
}

export const TextField: FC<IProps> = ({onChange, value, placeholder, name, label, type = 'text'}) => {
	const className = cx(roboto.className, styles.textField)

	return (
		<>
			{label && <label className={styles.label} htmlFor={name}>{label}</label> }
			<input 
				type={type} 
				value={value} 
				onChange={onChange} 
				className={className} 
				name={name}
				id={name}
				placeholder={placeholder}
			/>
		</>
	)
}