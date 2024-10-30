<?php
/*
Plugin Name: Bubble Critic
Plugin URI: https://www.bubblecritic.com/external_forums
Description: Embed a Bubble Critic forum block into your website.
Author: David Dobson
Version: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
*/

function loadBubbleCriticBlockJS() {
	wp_enqueue_script(
		'bubble_critic_script',
		plugin_dir_url(__FILE__) . 'the_block.js',
		array('wp-blocks', 'wp-i18n', 'wp-editor'),
		true
	);
}
 
add_action('enqueue_block_editor_assets', 'loadBubbleCriticBlockJS');