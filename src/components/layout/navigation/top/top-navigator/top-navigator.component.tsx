import React from "react";

//@ts-ignore
import styles from './top-navigator.module.scss'
// @ts-ignore
import image from "../../../../../../assets/logo.png";

export const TopNavigatorComponent: React.FC = () => {
	
	return <div className={styles.navigator}>
		<div className={styles.logo}>
			<img alt="logo" src={image} />
		</div>
		<div className={styles.items}>
			<div>test</div>
			<div>test</div>
		</div>
	</div>
}