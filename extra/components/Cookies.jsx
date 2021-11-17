export const checkLS = () => {
	if (localStorage.getItem('w')) return true;
	return false;
};

export const showMessage = (message) => {
	return`${message}! Message not found`;
};
