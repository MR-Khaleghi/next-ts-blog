import React from 'react';

type NumType = {
	num: number;
};
const AdCard = ({ item }) => {
	const addCommas = (num: NumType): string =>
		num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return (
		<div className='flex flex- w-80 max-w-xs flex-col rounded shadow-lg mx-6 my-4 px-6 py-4 border-2'>
			<div className='flex justify-center flex-row-reverse'>
				{/* <p className='flex text-gray-400 px-2'>: نوع درخواست</p> */}
				<p className='flex text-gray-900 text-base font-semibold'>
					{item.type}
				</p>
			</div>
			<div className='flex flex-row-reverse'>
				<p className='flex text-gray-400 px-2 whitespace-nowrap'>
					: ودیعه حداکثر
				</p>
				<p className='flex text-gray-700 '>{addCommas(item.budget.vadiyeh)}</p>
				<p className='flex text-gray-700 '>تومان&nbsp;</p>
			</div>
			<div className='flex flex-row-reverse'>
				<p className='flex text-gray-400 px-2 whitespace-nowrap'>
					: اجاره حداکثر
				</p>
				<p className='flex text-gray-700 '>{addCommas(item.budget.ejareh)}</p>
				<p className='flex text-gray-700 '>تومان&nbsp;</p>
			</div>
			<div className='flex flex-row-reverse'>
				<p className='flex text-gray-400 px-2'>: متراژ حداقل</p>
				<p className='flex text-gray-700 '>{item.size}</p>
			</div>
			<div className='flex flex-row-reverse'>
				<p className='flex text-gray-400 px-2'>: اتاق خواب</p>
				<p className='flex text-gray-700 '>{item.bedroom}</p>
			</div>
			<div className='flex flex-row-reverse'>
				<p className='whitespace-nowrap text-gray-400 px-2'>: محله</p>
				<div className='flex flex-row-reverse flex-wrap'>
					{item.locations.map((location, index) => (
						// <p className='flex  text-gray-700 '>{'،' + location}&nbsp;</p>
						<p className='flex  text-gray-700 '>{`،${location}`}&nbsp;</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default AdCard;
