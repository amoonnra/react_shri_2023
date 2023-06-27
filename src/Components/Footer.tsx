import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
	return <footer className="footer">
		<Link href='/faq'>Вопросы и ответы</Link>
		<Link href='/about-us'>О нас</Link>
	</footer>  
}
