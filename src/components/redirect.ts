export default function redirect(url: string) {
	if (url != undefined) {
		window.location.replace(url);
	} else {
		window.location.replace('/');
	}
}