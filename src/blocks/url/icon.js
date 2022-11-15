import config from '../../../src/js/config';

export default function () {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			style={ { color: config.blandColor } }
		>
			<path
				clipRule="evenodd"
				d="M22 7.5H2a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h20a.5.5 0 00.5-.5V8a.5.5 0 00-.5-.5zM2 6a2 2 0 00-2 2v8a2 2 0 002 2h20a2 2 0 002-2V8a2 2 0 00-2-2z"
				fillRule="evenodd"
			/>
			<path d="M4.48 11.145c.24-.3.534-.45.883-.45.386 0 .679.136.88.407.2.27.301.674.304 1.21V15h-1.11v-2.676c0-.247-.039-.426-.117-.535-.075-.112-.199-.168-.37-.168a.525.525 0 00-.47.277V15H3.375V9H4.48zm4.145-1.411v1.04h.566v.832h-.566v2.097c0 .167.022.281.066.344.047.062.136.094.266.094.107 0 .194-.01.262-.028l-.008.86a1.73 1.73 0 01-.61.105c-.713 0-1.074-.409-1.081-1.226v-2.246h-.49v-.833h.489V9.734zm2.461 0v1.04h.566v.832h-.566v2.097c0 .167.022.281.066.344.047.062.136.094.266.094.107 0 .194-.01.262-.028l-.008.86a1.73 1.73 0 01-.61.105c-.713 0-1.074-.409-1.082-1.226v-2.246h-.488v-.833h.488V9.734zm4.469 3.286c0 .664-.115 1.173-.344 1.527-.227.354-.565.531-1.016.531a.984.984 0 01-.828-.418v1.965h-1.105v-5.852h1.023l.04.387a.992.992 0 01.863-.465c.45 0 .789.164 1.015.492.23.329.347.831.352 1.508zm-1.102-.278c0-.409-.045-.698-.137-.867-.088-.17-.24-.254-.453-.254a.526.526 0 00-.496.285v1.98c.1.183.267.274.504.274.219 0 .37-.092.453-.277.086-.185.13-.473.13-.863zm3.641 1.125c0-.094-.046-.18-.137-.258-.088-.08-.288-.188-.598-.324-.455-.185-.77-.376-.941-.574a1.096 1.096 0 01-.254-.738c0-.37.133-.675.398-.914.269-.243.623-.364 1.063-.364.463 0 .835.12 1.113.36.279.24.418.56.418.965h-1.105c0-.344-.143-.516-.43-.516a.4.4 0 00-.289.11.404.404 0 00-.113.304c0 .094.041.177.125.25.083.07.28.172.59.305.45.166.768.353.953.558.187.203.281.468.281.793 0 .378-.142.681-.426.91-.284.23-.656.344-1.117.344-.31 0-.583-.06-.82-.18a1.405 1.405 0 01-.559-.507c-.133-.216-.2-.45-.2-.7h1.052c.005.193.05.338.132.434.086.096.226.145.418.145.297 0 .446-.135.446-.403z" />
		</svg>
	);
}