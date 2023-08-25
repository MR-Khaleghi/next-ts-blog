import Link from '@/node_modules/next/link';
import React from 'react';

const Navigation = () => {
	return (
		<div>
			<Link href='/'>Home</Link>
			<Link href='/contact'>Contact us</Link>
		</div>
	);
};

export default Navigation;
