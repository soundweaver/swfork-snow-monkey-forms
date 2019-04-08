<?php
/**
 * @package snow-monkey-forms
 * @author inc2734
 * @license GPL-2.0+
 */

namespace Snow_Monkey\Plugin\Forms\App\Control;

use Snow_Monkey\Plugin\Forms\App\Contract;

class Url extends Contract\Control {
	public $name = '';
	public $value = '';
	protected $validations = [
		'url' => true,
	];

	public function render() {
		return sprintf(
			'<input class="c-form-control" type="url" %1$s>',
			$this->generate_attributes( get_object_vars( $this ) )
		);
	}
}
