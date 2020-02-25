<?php
/**
 * @package snow-monkey-forms
 * @author inc2734
 * @license GPL-2.0+
 */

namespace Snow_Monkey\Plugin\Forms\App\Control\Hidden;

use Snow_Monkey\Plugin\Forms\App\Contract;

class View extends Contract\View {

	/**
	 * @var array
	 *   @var string name
	 *   @var string value
	 *   @var boolean disabled
	 */
	protected $attributes = [];

	public function input() {
		return sprintf(
			'<input type="hidden" %1$s>',
			$this->generate_attributes( $this->attributes )
		);
	}

	public function confirm() {
		return $this->input();
	}

	public function error( $error_message = '' ) {
		return $this->input();
	}
}