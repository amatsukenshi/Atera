import styles from './MainHeader.module.scss'

const MainHeader = () => {
	return (
		<header className={`${styles.mainHeader}`}>
			<div className={`hamburger-button`}>

			</div>
			<div className={`title`}>
				<h1>Atera</h1>
			</div>
			<div className={`right-buttons`}>

			</div>
		</header>
	)
}

export default MainHeader;

