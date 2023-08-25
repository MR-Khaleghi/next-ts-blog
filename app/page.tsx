import AdCard from '@/component/AdCard';

export default function Home() {
	const cards = {
		type: 'اجاره',
		budget: { vadiyeh: 300000000, ejareh: 6000000 },
		size: 55,
		floor: [1, 2, 3, 4],
		bedroom: 2,
		age: 1389,
		parking: true,
		Anbari: true,
		elevator: true,
		locations: ['مجیدیه شمالی'],
		description: 'shoud be at leat 55 sqmeters full emkanat',
		family: true,
		pet: true,
	};
	const buy = {
		type: 'خرید',
		budget: { vadiyeh: 300000000, ejareh: 6000000 },
		size: 66,
		floor: [1, 2, 3, 4],
		bedroom: 2,
		age: 1389,
		parking: true,
		Anbari: true,
		elevator: true,
		locations: ['مجیدیه شمالی', 'حشمتیه', 'سیدخندان', 'سازمان برنامه شمالی'],
		description: 'shoud be at leat 55 sqmeters full emkanat',
		family: true,
		pet: true,
	};
	let data = [cards, buy, cards, buy, cards, buy, cards, buy, cards, buy, buy];

	return (
		<div className='flex flex-row-reverse flex-wrap justify-center'>
			{data.map((item, index) => (
				<AdCard
					item={item}
					key={index}
				/>
			))}
		</div>
	);
}
