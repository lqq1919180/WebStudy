var day = new Date().getDay(); //0-6之间数字 0周日 1-6
console.log(day);
switch (day) {
    case 0:
        console.log('周日');
        break;
    case 1:
        console.log('周一');
        break;
    case 2:
        console.log('周二');
        break;
    case 3:
        console.log('周三');
        break;
    case 4:
        console.log('周四');
        break;
    case 5:
        console.log('周五');
        break;
    case 6:
        console.log('周六')
        break;
}
switch(day){
    case 1:
		console.log('周一');
		break;
	case 2:
		console.log('周二');
		break;
	default:
		console.log('期待周末');
}